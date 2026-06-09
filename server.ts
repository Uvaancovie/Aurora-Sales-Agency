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
      const { name, email, company, message } = req.body;

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
