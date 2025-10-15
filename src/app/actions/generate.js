'use server';

import { templates } from '../../utils/templates';
import { validateInputs } from '../../utils/validation';

// --- INITIAL SETUP (Runs once on the server) ---

// Safety check: Exit early if the key is missing on the server.
if (!process.env.GEMINI_API_KEY) {
  // Use a proper error that stops the server from running insecurely
  throw new Error("GEMINI_API_KEY environment variable is not set. Check your .env.local.");
}

// 2. Initialize the Gemini Client. 
// The empty object {} tells the SDK to find the key in process.env.GEMINI_API_KEY.
const ai = new GoogleGenAI({}); 

export async function generateContent(formData) {
  // Extract data from FormData
  const templateId = formData.get('templateId');
  const educationLevel = formData.get('educationLevel');
  const subject = formData.get('subject');
  const length = formData.get('length');
  const objectives = formData.get('objectives');
  const customPrompt = formData.get('customPrompt');
  const params = {
    educationLevel,
    subject,
    length,
    objectives,
    customPrompt,
    templateType: templateId
  };
  // Validate inputs
  const validationError = validateInputs(params);
  if (validationError) {
    return {
      error: validationError
    };
  }
  try {
    // Get the prompt template
    const template = templates[templateId];
    if (!template) {
      throw new Error('Invalid template selected');
    }
    // Generate the prompt
    const prompt = template.prompt(params);


    // 3. API Call: ai object uses the key loaded above 
    // from the server's environment variables.
    const response = await ai.generateContent({
        model: "gemini-2.5-flash", 
        contents: prompt,           
    });

      const generatedText = response.text;
       console.log(generatedText)

    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      generatedText

     
      
    };
  } catch (error) {
    console.error('Error generating content:', error);
    return {
      error: 'Failed to generate content. Please try again.'
    };
  }
}