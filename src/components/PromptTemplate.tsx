import React from 'react';
import { templates } from '../utils/templates';
const PromptTemplate = ({
  selectedTemplate,
  onTemplateChange
}) => {
  return <div className="space-y-4">
      {Object.entries(templates).map(([id, template]) => <div key={id} className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedTemplate === id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'}`} onClick={() => onTemplateChange(id)}>
          <div className="flex items-center">
            <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${selectedTemplate === id ? 'bg-indigo-500' : 'border border-gray-300'}`}>
              {selectedTemplate === id && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>}
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{template.title}</h4>
              <p className="text-sm text-gray-500 mt-1">
                {template.description}
              </p>
            </div>
          </div>
        </div>)}
    </div>;
};
export default PromptTemplate;