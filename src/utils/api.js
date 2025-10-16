import { templates } from './templates';
//first install genai api via cli "npm install @google/genai"
// Import the GoogleGenAI class from the SDK
import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini client. It automatically uses the GEMINI_API_KEY
// from your environment variables.
const ai = new GoogleGenAI({});

// This is a placeholder for the Gemini API integration
// The user will need to replace this with actual API calls once they set up their API key
export const generateContent = async (templateId, params) => {

  try {
    // Get the prompt template
    const template = templates[templateId];
    if (!template) {
      throw new Error('Invalid template selected');
    }
    // Generate the prompt
    const prompt = template.prompt(params);
    // In a real implementation, this would call the Gemini API
    // For now, return a placeholder response
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // Use a suitable model
      contents: prompt,
    });
    // Extract the final text response
    const generatedText = response.text;

    return generatedText;
  } catch (error) {
    console.error('Error generating content:', error);
    throw new Error('Failed to generate content. Please try again.');
  }
};