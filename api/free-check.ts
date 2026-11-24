import { BrevoClient, BrevoError } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, website, sell, audience } = req.body ?? {};

    if (!email || !name) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const nameParts = String(name).trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    await brevo.contacts.createContact({
      email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        COMPANY: company || "",
      },
      listIds: [6],
      updateEnabled: true,
    });

    // Notify Jason. The subject contains "Target Market Check" so the inbound lead task picks it up.
    await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: "jason@aurorasalesagency.com", name: "Website: Free Target Market Check" },
      to: [{ email: "jason@aurorasalesagency.com", name: "Jason" }],
      replyTo: { email, name: String(name) },
      subject: `Free Target Market Check request – ${company || name}`,
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1B1633;">
            <p>New free Target Market Check request from the website:</p>
            <ul>
              <li><strong>Name:</strong> ${esc(name)}</li>
              <li><strong>Email:</strong> ${esc(email)}</li>
              <li><strong>Company:</strong> ${esc(company) || "N/A"}</li>
              <li><strong>Website:</strong> ${esc(website) || "N/A"}</li>
              <li><strong>What they sell:</strong><br>${esc(sell) || "N/A"}</li>
              <li><strong>Who they want to reach:</strong><br>${esc(audience) || "N/A"}</li>
            </ul>
            <p>Reply to this email to respond to ${esc(firstName) || "them"} directly.</p>
          </body>
        </html>
      `,
    });

    // Confirmation to the person who asked
    await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: "jason@aurorasalesagency.com", name: "Jason from Aurora Sales Agency" },
      to: [{ email, name: firstName || "there" }],
      subject: "Your free Target Market Check is on its way",
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1B1633; max-width: 600px; margin: 0 auto; padding: 20px;">
            <p>Hi ${esc(firstName) || "there"},</p>
            <p>Thanks for requesting a free Target Market Check from Aurora Sales Agency.</p>
            <p>Within one working day we'll send you 25 real decision-makers we'd reach out to for ${esc(company) || "you"}, your ideal client profile written down, and the opening message we'd send them.</p>
            <p>If you'd like to talk it through, you can book a quick 15-minute call here: <a href="https://meetings-eu1.hubspot.com/jason4" style="color: #7B5CFF;">meetings-eu1.hubspot.com/jason4</a></p>
            <p>Kind regards,<br><strong>Jason Thompson</strong><br><span style="color: #5E5A73; font-size: 12px;">Aurora Sales Agency · aurorasalesagency.net</span></p>
          </body>
        </html>
      `,
    });

    res.json({ success: true });
  } catch (error: any) {
    console.error("Free check request error:", error);
    const status = error instanceof BrevoError ? (error.statusCode ?? 500) : 500;
    const body = error instanceof BrevoError ? error.body : undefined;
    const detail =
      typeof body === "object" && body && "message" in body
        ? (body as { message: string }).message
        : body ?? (error instanceof Error ? error.message : "Failed to submit request");
    res.status(status).json({ error: detail });
  }
}
