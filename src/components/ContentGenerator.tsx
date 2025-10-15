import React, { useState } from 'react';
import PromptTemplate from './PromptTemplate';
import CustomizationForm from './CustomizationForm';
import ResultDisplay from './ResultDisplay';
import ErrorMessage from './ErrorMessage';
import { generateContent } from '../utils/api';
import { validateInputs } from '../utils/validation';
const ContentGenerator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('lesson-plan');
  const [customParams, setCustomParams] = useState({
    educationLevel: 'high-school',
    subject: '',
    length: 'medium',
    objectives: '',
    customPrompt: ''
  });
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const handleTemplateChange = template => {
    setSelectedTemplate(template);
  };
  const handleParamChange = (name, value) => {
    setCustomParams({
      ...customParams,
      [name]: value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    // Validate inputs
    const validationError = validateInputs(customParams);
    if (validationError) {
      setError(validationError);
      return;
    }
    setIsLoading(true);
    try {
      const content = await generateContent(selectedTemplate, customParams);
      setGeneratedContent(content);
    } catch (err) {
      setError(err.message || 'Failed to generate content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Generate Educational Content
        </h2>
        {error && <ErrorMessage message={error} />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              1. Select Content Type
            </h3>
            <PromptTemplate selectedTemplate={selectedTemplate} onTemplateChange={handleTemplateChange} />
            <h3 className="text-lg font-medium text-gray-700 mt-6 mb-3">
              2. Customize Your Content
            </h3>
            <CustomizationForm params={customParams} onParamChange={handleParamChange} onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              3. Your Generated Content
            </h3>
            <ResultDisplay content={generatedContent} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>;
};
export default ContentGenerator;