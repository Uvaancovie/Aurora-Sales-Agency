import { BrevoClient, BrevoError } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, message } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const nameParts = (name ?? "").split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const attributes: Record<string, string> = {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      COMPANY: company || "",
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
      subject: "Thank you for contacting Aurora Sales Agency",
      htmlContent: `<html><body><p>Hi ${firstName || 'there'},</p><p>Thank you for getting in touch! We have received your message and will get back to you shortly.</p><p>Best regards,<br>Jason<br>Aurora Sales Agency</p></body></html>`
    });

    // Send notification email to Jason
    await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: "jason@aurorasalesagency.com", name: "Website Contact Form" },
      to: [{ email: "jason@aurorasalesagency.com", name: "Jason" }],
      subject: "New Contact Form Submission",
      htmlContent: `<html><body><p>You have received a new submission from the contact form:</p><ul><li><strong>Name:</strong> ${name || 'N/A'}</li><li><strong>Email:</strong> ${email}</li><li><strong>Company:</strong> ${company || 'N/A'}</li><li><strong>Message:</strong><br>${message || 'N/A'}</li></ul></body></html>`
    });

    res.json({ success: true });
  } catch (error: any) {
    console.error("Brevo contact creation error:", error);
    const status = error instanceof BrevoError ? (error.statusCode ?? 500) : 500;
    const body = error instanceof BrevoError ? error.body : undefined;
    const detail = typeof body === "object" && body && "message" in body
      ? (body as { message: string }).message
      : body ?? (error instanceof Error ? error.message : "Failed to submit enquiry");
    res.status(status).json({ error: detail });
  }
}
