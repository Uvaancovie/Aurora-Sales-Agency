import 'dotenv/config';
import { VapiClient } from '@vapi-ai/server-sdk';

const vapi = new VapiClient({ token: process.env.VAPI_API_KEY! });

async function createAssistant() {
  try {
    console.log("Creating Vapi Assistant...");
    const assistant = await vapi.assistants.create({
      name: 'Customer Support Assistant',
      model: {
        provider: 'openai',
        model: 'gpt-4o',
        messages: [{ 
          role: 'system', 
          content: 'You are Alex, a customer service voice assistant for Aurora Sales Agency.' 
        }]
      },
      voice: { provider: '11labs', voiceId: 'cgSgspJ2msm6clMCkdW9' },
      firstMessage: 'Hi there, this is Alex from Aurora Sales Agency. How can I help you today?'
    });

    console.log("✅ Assistant successfully created!");
    console.log("Assistant ID:", assistant.id);
  } catch (error) {
    console.error("❌ Failed to create assistant:", error);
  }
}

createAssistant();
