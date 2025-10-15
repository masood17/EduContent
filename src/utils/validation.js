export const validateInputs = params => {
  // Check if subject is provided
  if (!params.subject || params.subject.trim() === '') {
    return 'Please enter a subject area';
  }
  // Check if objectives are provided for certain templates
  if ((!params.objectives || params.objectives.trim() === '') && (params.templateType === 'lesson-plan' || params.templateType === 'concept-explanation')) {
    return 'Please specify learning objectives';
  }
  // Validate education level is one of the allowed values
  const validLevels = ['elementary', 'middle-school', 'high-school', 'college'];
  if (!validLevels.includes(params.educationLevel)) {
    return 'Please select a valid education level';
  }
  // Validate length is one of the allowed values
  const validLengths = ['short', 'medium', 'long'];
  if (!validLengths.includes(params.length)) {
    return 'Please select a valid content length';
  }
  return null; // No validation errors
};