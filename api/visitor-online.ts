import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

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

function getClientIp(req: any): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { page, timezone, language, referrer, screenResolution, geo } = req.body;

    if (!page && !timezone) {
      return res.status(200).json({ success: false, notified: false });
    }

    const clientIp = getClientIp(req);
    
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
}