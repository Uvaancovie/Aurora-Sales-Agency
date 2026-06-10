export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
}
