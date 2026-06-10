import { BrevoClient, BrevoError } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, message, phone, budget } = req.body;

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
