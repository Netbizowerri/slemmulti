
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { getWebsiteContent } from './contentService';

let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  }
  return ai;
};

const websiteContent = getWebsiteContent();

// System instruction for the general chatbot
const CHAT_SYSTEM_INSTRUCTION = `You are "Engnr. Slem", the expert AI assistant for SLEM MULTI SERVICE NIG. LTD. Your persona is professional, knowledgeable, and helpful.

**Primary Directive:**
Your primary source of truth is the website content provided below in the "WEBSITE_CONTENT" section. When a user asks a question about the company, its services, prices, or processes, you MUST base your answer on this content first.

**Secondary Directive:**
If the user's question cannot be answered from the website content, you may use your general knowledge, especially for topics like:
- The uses and benefits of Granite, Asphalt, Base Materials, and Hardcore stones in construction.
- Truck hiring, haulage logistics, and common routes within Nigeria.

**Interaction Rules:**
- **Be Conversational:** Engage the user in a natural, helpful way.
- **Refer to Self:** You are "Engnr. Slem".
- **Quotes and Pricing:** If asked for a price or quote, state that you can only provide estimates based on the website data. For an official, up-to-date quote, you MUST direct the user to contact the company directly via phone or email.
- **Booking and Contact:** When the user expresses interest in starting a project, booking a service, or asks how to get started (e.g., "I am interested", "How do I book?"), you MUST provide them with direct links to the booking and contact pages. For example: "That's great! You can get started by filling out our booking form at /booking or by getting in touch with us through our contact page at /contact."
- **Company Information:**
  - Name: SLEM MULTI SERVICE NIG. LTD.
  - Address: Km 7, New Ikirun Road, Beside NIPCO Filling Station, Ota Efun, Osogbo, Osun State.
  - Contact: 08072263264, 07046395379.
  - Email: slemmultiservice555@gmail.com.

---
**WEBSITE_CONTENT:**
${websiteContent}
---
`;

export const createChatSession = (): Chat => {
  const client = getAiClient();
  return client.chats.create({
    model: 'gemini-2.0-flash',
    config: {
      systemInstruction: CHAT_SYSTEM_INSTRUCTION,
    },
  });
};

export const getConstructionNews = async (): Promise<{text: string, links: {title: string, url: string}[]}> => {
  try {
    const client = getAiClient();
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "What are the latest trends and news in the Nigerian construction industry and granite supply market? Summarize the top 3 headlines.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "No news available at the moment.";
    
    // Safe extraction of grounding chunks
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const links = chunks
      .filter((c: any) => c.web?.uri && c.web?.title)
      .map((c: any) => ({
        title: c.web.title,
        url: c.web.uri
      }));

    return { text, links };
  } catch (error) {
    console.error("Error fetching news:", error);
    return { text: "Unable to load latest news at this time.", links: [] };
  }
};

export const analyzeMaterialUse = async (materialName: string): Promise<string> => {
  try {
    const client = getAiClient();
    const response: GenerateContentResponse = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Explain the best uses for ${materialName} in construction in 2 sentences. Keep it practical for a customer.`,
    });
    return response.text || "Information currently unavailable.";
  } catch (error) {
    console.error("Error analyzing material:", error);
    return "Could not retrieve insights.";
  }
};
