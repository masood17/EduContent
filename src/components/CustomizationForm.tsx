import React from 'react';
const CustomizationForm = ({
  params,
  onParamChange,
  onSubmit,
  isLoading
}) => {
  const educationLevels = [{
    id: 'elementary',
    label: 'Elementary School'
  }, {
    id: 'middle-school',
    label: 'Middle School'
  }, {
    id: 'high-school',
    label: 'High School'
  }, {
    id: 'college',
    label: 'College/University'
  }];
  const contentLengths = [{
    id: 'short',
    label: 'Brief (5-10 min)'
  }, {
    id: 'medium',
    label: 'Standard (15-30 min)'
  }, {
    id: 'long',
    label: 'Comprehensive (45+ min)'
  }];
  return <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700 mb-1">
          Education Level
        </label>
        <select id="educationLevel" value={params.educationLevel} onChange={e => onParamChange('educationLevel', e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          {educationLevels.map(level => <option key={level.id} value={level.id}>
              {level.label}
            </option>)}
        </select>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject Area
        </label>
        <input type="text" id="subject" value={params.subject} onChange={e => onParamChange('subject', e.target.value)} placeholder="e.g., Mathematics, History, Science" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">
          Content Length
        </label>
        <select id="length" value={params.length} onChange={e => onParamChange('length', e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          {contentLengths.map(length => <option key={length.id} value={length.id}>
              {length.label}
            </option>)}
        </select>
      </div>
      <div>
        <label htmlFor="objectives" className="block text-sm font-medium text-gray-700 mb-1">
          Learning Objectives
        </label>
        <textarea id="objectives" value={params.objectives} onChange={e => onParamChange('objectives', e.target.value)} rows={3} placeholder="What should students learn from this content?" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="customPrompt" className="block text-sm font-medium text-gray-700 mb-1">
          Custom Instructions (Optional)
        </label>
        <textarea id="customPrompt" value={params.customPrompt} onChange={e => onParamChange('customPrompt', e.target.value)} rows={3} placeholder="Any specific requirements or additional instructions..." className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div className="pt-2">
        <button type="submit" disabled={isLoading} className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}>
          {isLoading ? <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </> : 'Generate Content'}
        </button>
      </div>
    </form>;
};
export default CustomizationForm;