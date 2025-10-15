export const templates = {
  'lesson-plan': {
    title: 'Lesson Plan',
    description: 'Complete lesson plan with objectives, activities, and assessment',
    prompt: params => `
      Create a detailed lesson plan for ${params.educationLevel} students on the subject of ${params.subject}.
      Learning objectives: ${params.objectives || 'To be determined based on the subject'}
      Please include:
      1. Clear learning objectives
      2. Required materials
      3. Step-by-step instruction procedure
      4. Engagement activities
      5. Assessment methods
      6. Differentiation strategies for various learning needs
      ${params.customPrompt ? `Additional requirements: ${params.customPrompt}` : ''}
      The lesson should be designed for a ${params.length} class period.
    `
  },
  'study-guide': {
    title: 'Study Guide',
    description: 'Comprehensive study materials with key concepts and practice questions',
    prompt: params => `
      Create a comprehensive study guide for ${params.educationLevel} students studying ${params.subject}.
      Focus on these learning objectives: ${params.objectives || 'To be determined based on the subject'}
      Please include:
      1. Key concepts and terminology with definitions
      2. Summary of important information
      3. Visual aids or diagrams where appropriate (described in text)
      4. Practice questions with answers
      5. Memory aids and study techniques
      ${params.customPrompt ? `Additional requirements: ${params.customPrompt}` : ''}
      This should be a ${params.length} study guide appropriate for the specified education level.
    `
  },
  'quiz-questions': {
    title: 'Quiz Questions',
    description: 'Multiple-choice, short answer, and discussion questions with answers',
    prompt: params => `
      Generate a set of quiz questions for ${params.educationLevel} students on the topic of ${params.subject}.
      These questions should assess: ${params.objectives || 'General understanding of the subject'}
      Please create:
      1. Multiple choice questions with 4 options each
      2. True/False questions
      3. Short answer questions
      4. Essay/discussion questions (for higher levels)
      Include the correct answers and explanations for each question.
      ${params.customPrompt ? `Additional requirements: ${params.customPrompt}` : ''}
      This should be a ${params.length} quiz (short: 5-10 questions, medium: 10-20 questions, long: 20-30 questions).
    `
  },
  'concept-explanation': {
    title: 'Concept Explanation',
    description: 'Clear, detailed explanations of complex topics with examples',
    prompt: params => `
      Create a clear and engaging explanation of ${params.subject} for ${params.educationLevel} students.
      The explanation should address: ${params.objectives || 'Core concepts of the subject'}
      Please include:
      1. Simple, age-appropriate language
      2. Real-world examples and analogies
      3. Step-by-step breakdowns of complex ideas
      4. Visual descriptions where helpful
      5. Common misconceptions and clarifications
      ${params.customPrompt ? `Additional requirements: ${params.customPrompt}` : ''}
      This should be a ${params.length} explanation suitable for the specified education level.
    `
  },
  'learning-activities': {
    title: 'Learning Activities',
    description: 'Engaging hands-on activities and exercises for active learning',
    prompt: params => `
      Design a set of engaging learning activities for ${params.educationLevel} students to explore ${params.subject}.
      Activities should help students: ${params.objectives || 'Engage with the subject material actively'}
      Please include:
      1. Individual activities
      2. Group/collaborative activities
      3. Materials needed for each activity
      4. Step-by-step instructions
      5. Discussion questions or reflection prompts
      6. Extensions or modifications for different ability levels
      ${params.customPrompt ? `Additional requirements: ${params.customPrompt}` : ''}
      These should be ${params.length} activities appropriate for the specified education level.
    `
  }
};