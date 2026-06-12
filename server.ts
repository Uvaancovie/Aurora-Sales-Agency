import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { BrevoClient, BrevoError } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message, phone, budget } = req.body;

      if (!email) {
        res.status(400).json({ error: "Email is required" });
        return;
      }

      const nameParts = (name ?? "").split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const attributes: Record<string, string> = {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        COMPANY: company || "",
        PHONE: phone || "",
      };

      await brevo.contacts.createContact({
        email,
        attributes,
        listIds: [6],
        updateEnabled: true,
      });

      // Send confirmation email to the user
      await brevo.transactionalEmails.sendTransacEmail({
        sender: { email: "jason@aurorasalesagency.com", name: "Jason from Aurora Sales Agency" },
        to: [{ email: email, name: firstName || "There" }],
        subject: "Welcome to Aurora Sales Agency - Let's accelerate your growth",
        htmlContent: `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #4f46e5;">Hi ${firstName || 'there'},</h2>
              <p>Thank you for initiating contact with <strong>Aurora Sales Agency</strong>. We have received your transmission and our team is currently reviewing your details.</p>
              <p>We're excited to learn more about your goals and how we can help you achieve breakthrough sales performance.</p>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
                <h3 style="margin-top: 0; color: #111827;">Stay Ahead of the Curve</h3>
                <p style="margin-bottom: 20px;">Join our exclusive community of sales leaders and receive cutting-edge strategies directly to your inbox.</p>
                <a href="https://aurorasalesagency.com" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 20px; font-weight: bold; display: inline-block;">Subscribe Now</a>
              </div>
              
              <p>Jason will be in touch with you shortly to discuss your project.</p>
              <p>Best regards,<br>
              <strong>Jason</strong><br>
              <span style="color: #6b7280; font-size: 12px;">Aurora Sales Agency</span></p>
            </body>
          </html>
        `
      });

      // Send notification email to Jason
      await brevo.transactionalEmails.sendTransacEmail({
        sender: { email: "jason@aurorasalesagency.com", name: "Website Contact Form" },
        to: [{ email: "jason@aurorasalesagency.com", name: "Jason" }],
        subject: "New Contact Form Submission",
        htmlContent: `
          <html>
            <body>
              <p>You have received a new submission from the contact form:</p>
              <ul>
                <li><strong>Name:</strong> ${name || 'N/A'}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
                <li><strong>Company:</strong> ${company || 'N/A'}</li>
                <li><strong>Budget:</strong> ${budget || 'N/A'}</li>
                <li><strong>Message:</strong><br>${message || 'N/A'}</li>
              </ul>
            </body>
          </html>
        `
      });

      res.json({ success: true });
    } catch (error: unknown) {
      console.error("Brevo contact creation error:", error);
      const status = error instanceof BrevoError ? (error.statusCode ?? 500) : 500;
      const body = error instanceof BrevoError ? error.body : undefined;
      const detail = typeof body === "object" && body && "message" in body
        ? (body as { message: string }).message
        : body ?? (error instanceof Error ? error.message : "Failed to submit enquiry");
      res.status(status).json({ error: detail });
    }
  });

  // ── Visitor Online Tracking ─────────────────────────────────────────────
  //
  // Sends a Brevo email to Jason when someone visits the site,
  // including timezone‑based location, the page they land on, the
  // referrer, and (if granted) GPS coordinates.
  //
  interface VisitorPayload {
    page: string;
    timezone: string;
    language: string;
    referrer: string;
    screenResolution: string;
    geo?: { latitude?: number; longitude?: number; accuracy?: number } | null;
  }

  // In‑memory cooldown: don't re‑notify the same IP within 30 min.
  const ipCooldowns = new Map<string, number>();
  const COOLDOWN_MS = 30 * 60 * 1_000;

  function getClientIp(req: express.Request): string {
    const forwarded = req.headers["x-forwarded-for"];
    if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
    return req.socket.remoteAddress || "unknown";
  }

  // Recognised timezone → readable location; fallback to raw timezone name.
  const LOCATION_MAP: Record<string, string> = {
    "America/New_York":        "New York / East Coast, USA",
    "America/Chicago":         "Chicago / Central, USA",
    "America/Denver":          "Denver / Mountain, USA",
    "America/Los_Angeles":     "Los Angeles / West Coast, USA",
    "America/Toronto":         "Toronto, Canada",
    "America/Vancouver":       "Vancouver, Canada",
    "America/Sao_Paulo":       "São Paulo, Brazil",
    "America/Mexico_City":     "Mexico City, Mexico",
    "America/Phoenix":         "Phoenix, AZ, USA",
    "America/Anchorage":       "Anchorage, AK, USA",
    "Pacific/Honolulu":        "Honolulu, HI, USA",
    "Europe/London":           "London, UK",
    "Europe/Paris":            "Paris, France",
    "Europe/Berlin":           "Berlin, Germany",
    "Europe/Madrid":           "Madrid, Spain",
    "Europe/Rome":             "Rome, Italy",
    "Europe/Amsterdam":        "Amsterdam, Netherlands",
    "Europe/Stockholm":        "Stockholm, Sweden",
    "Europe/Zurich":           "Zurich, Switzerland",
    "Europe/Dublin":           "Dublin, Ireland",
    "Europe/Moscow":           "Moscow, Russia",
    "Asia/Tokyo":              "Tokyo, Japan",
    "Asia/Shanghai":           "Shanghai, China",
    "Asia/Singapore":          "Singapore",
    "Asia/Dubai":              "Dubai, UAE",
    "Asia/Kolkata":            "India (Kolkata)",
    "Asia/Seoul":              "Seoul, South Korea",
    "Asia/Hong_Kong":          "Hong Kong",
    "Asia/Bangkok":            "Bangkok, Thailand",
    "Australia/Sydney":        "Sydney, Australia",
    "Australia/Melbourne":     "Melbourne, Australia",
    "Pacific/Auckland":        "Auckland, New Zealand",
    "Africa/Cairo":            "Cairo, Egypt",
    "Africa/Johannesburg":     "Johannesburg, South Africa",
    "Africa/Lagos":            "Lagos, Nigeria",
  };

  function timezoneToLocation(tz: string): string {
    return LOCATION_MAP[tz] || tz;
  }

  app.post("/api/visitor-online", async (req, res) => {
    try {
      const { page, timezone, language, referrer, screenResolution, geo } =
        req.body as VisitorPayload;

      if (!page && !timezone) {
        res.status(200).json({ success: false, notified: false });
        return;
      }

      const clientIp = getClientIp(req);
      const isLocal = clientIp === "::1" || clientIp === "127.0.0.1" || clientIp.startsWith("::ffff:127.0.0.1");
      const now = Date.now();
      const lastNotified = ipCooldowns.get(clientIp);

      // Bypass cooldown for local development requests to make testing easier
      if (!isLocal && lastNotified && now - lastNotified < COOLDOWN_MS) {
        res.status(200).json({ success: true, notified: false });
        return;
      }

      ipCooldowns.set(clientIp, now);

      // Resolve location using GeoIP API or fallback to timezone map
      let location = timezoneToLocation(timezone || "");
      let geoInfo = "Inferred from timezone";

      // If client IP is a valid public IP, use ip-api.com to look up detailed location (city, region, country)
      if (clientIp && clientIp !== "::1" && clientIp !== "127.0.0.1" && !clientIp.startsWith("::ffff:127.0.0.1")) {
        try {
          const geoRes = await fetch(`http://ip-api.com/json/${clientIp}`);
          if (geoRes.ok) {
            const geoData = await geoRes.json() as any;
            if (geoData && geoData.status === "success") {
              const parts = [];
              if (geoData.city) parts.push(geoData.city);
              if (geoData.regionName) parts.push(geoData.regionName);
              if (geoData.country) parts.push(geoData.country);
              if (parts.length > 0) {
                location = parts.join(", ");
              }
              if (geoData.lat != null && geoData.lon != null) {
                geoInfo = `Coordinates: ${geoData.lat.toFixed(4)}, ${geoData.lon.toFixed(4)} (ZIP: ${geoData.zip || "N/A"})`;
              }
            }
          }
        } catch (geoipErr) {
          console.error("GeoIP lookup failed:", geoipErr);
        }
      } else if (geo?.latitude != null) {
        geoInfo = `Coords: ${geo.latitude.toFixed(4)}, ${(geo.longitude ?? 0).toFixed(4)} (±${geo.accuracy ?? "?"}m)`;
      }

      const localTime = new Date().toLocaleString("en-US", {
        timeZone: timezone || "UTC",
        dateStyle: "full",
        timeStyle: "short",
      });

      const pageLabel = page
        ? new URL(page).pathname.replace(/\/$/, "") || "/"
        : "unknown";

      await brevo.transactionalEmails.sendTransacEmail({
        sender: {
          email: "jason@aurorasalesagency.com",
          name: "Aurora Sales Agency",
        },
        to: [{ email: "jason@aurorasalesagency.com", name: "Jason" }],
        subject: `🔔 Visitor online — ${location}`,
        htmlContent: `
<html>
  <body style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;padding:20px">
    <h2 style="color:#4f46e5">A visitor just came online!</h2>
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;font-weight:600;color:#6b7280;width:100px">Location</td><td style="padding:8px 0">${location}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#6b7280">Page</td><td style="padding:8px 0">${pageLabel}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#6b7280">Local time</td><td style="padding:8px 0">${localTime}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#6b7280">Language</td><td style="padding:8px 0">${language || "?"}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#6b7280">Referrer</td><td style="padding:8px 0">${referrer || "Direct"}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#6b7280">Screen</td><td style="padding:8px 0">${screenResolution || "?"}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#6b7280">IP</td><td style="padding:8px 0">${clientIp}</td></tr>
    </table>
    <p style="color:#9ca3af;font-size:12px;margin-top:16px">${geoInfo}</p>
  </body>
</html>`,
      });

      console.log(`Visitor notification sent — ${location} (${clientIp})`);
      res.status(200).json({ success: true, notified: true });
    } catch (err) {
      console.error("Visitor notification error:", err);
      res.status(500).json({ error: "Failed to send notification" });
    }
  });

  // Vapi Chat Proxy Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const vapiKey = process.env.VAPI_API_KEY || process.env.VAPI_API_PRIVATE_KEY;
      if (!vapiKey) {
        throw new Error("VAPI_API_KEY or VAPI_API_PRIVATE_KEY is not configured");
      }

      const response = await fetch("https://api.vapi.ai/chat", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${vapiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Vapi API error: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      res.json(data);
    } catch (error: any) {
      console.error("Vapi proxy error:", error);
      res.status(500).json({ error: error.message || "Failed to process chat" });
    }
  });

  // Vapi Webhook Endpoint (For Lead Qualification)
  app.post("/api/vapi/webhook", async (req, res) => {
    try {
      // Vapi typically sends function call data in req.body.message
      const { message } = req.body;
      
      // We expect a tool call to save the lead
      if (message && message.type === 'tool-calls') {
        const toolCalls = message.toolCalls;
        
        for (const call of toolCalls) {
          if (call.function.name === 'save_lead') {
            const args = call.function.arguments; // Typically an object or JSON string
            const leadData = typeof args === 'string' ? JSON.parse(args) : args;
            
            const { name, email, phone, company } = leadData;
            
            if (email) {
              const nameParts = (name ?? "").split(" ");
              const firstName = nameParts[0] || "";
              const lastName = nameParts.slice(1).join(" ") || "";

              await brevo.contacts.createContact({
                email,
                attributes: {
                  FIRSTNAME: firstName,
                  LASTNAME: lastName,
                  COMPANY: company || "",
                  PHONE: phone || "",
                },
                listIds: [6], // Using list 6, or you can configure a specific 'discovery call list' ID
                updateEnabled: true,
              });
              
              console.log("Successfully saved lead from Vapi to Brevo:", email);
            }
          }
        }
      }
      
      // Always respond with 200 to Vapi
      res.status(200).json({ results: [{ toolCallId: message?.toolCalls?.[0]?.id, result: "Lead saved successfully" }] });
    } catch (error: any) {
      console.error("Vapi webhook error:", error);
      res.status(500).json({ error: "Failed to process webhook" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the dist directory
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // Fallback for React Router
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
