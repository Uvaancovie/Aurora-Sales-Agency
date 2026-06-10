import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;
    
    if (message && message.type === 'tool-calls') {
      const toolCalls = message.toolCalls;
      
      for (const call of toolCalls) {
        if (call.function.name === 'save_lead') {
          const args = call.function.arguments;
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
              listIds: [6],
              updateEnabled: true,
            });
            
            console.log("Successfully saved lead from Vapi to Brevo:", email);
          }
        }
      }
    }
    
    res.status(200).json({ results: [{ toolCallId: message?.toolCalls?.[0]?.id, result: "Lead saved successfully" }] });
  } catch (error: any) {
    console.error("Vapi webhook error:", error);
    res.status(500).json({ error: "Failed to process webhook" });
  }
}
