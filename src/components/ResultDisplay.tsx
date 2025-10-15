import React, { useState, createElement } from 'react';
const ResultDisplay = ({
  content,
  isLoading
}) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([content], {
      type: 'text/plain'
    });
    element.href = URL.createObjectURL(file);
    element.download = 'educational-content.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const styles = 'body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; } h1 { color: #4f46e5; } pre { white-space: pre-wrap; }';
    printWindow.document.write('<html>');
    printWindow.document.write('<head><title>Print Educational Content</title>');
    printWindow.document.write('<style>{`' + styles + '`}</style></head>');
    printWindow.document.write('<body><h1>Generated Educational Content</h1>');
    printWindow.document.write('<pre>' + content + '</pre></body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };
  return <div className="border border-gray-200 rounded-lg overflow-hidden">
      {isLoading ? <div className="p-6 flex items-center justify-center h-80">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
            <p className="mt-3 text-gray-500">
              Generating your educational content...
            </p>
            <p className="text-xs text-gray-400 mt-2">
              This may take a few moments
            </p>
          </div>
        </div> : content ? <>
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h4 className="text-sm font-medium text-gray-700">
              Generated Content
            </h4>
            <div className="flex space-x-2">
              <button onClick={handleCopy} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" title="Copy to clipboard">
                {copySuccess ? <>
                    <svg className="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied
                  </> : <>
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                    Copy
                  </>}
              </button>
              <button onClick={handleDownload} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" title="Download as text file">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
              <button onClick={handlePrint} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" title="Print content">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
            </div>
          </div>
          <div className="p-4 h-80 overflow-y-auto">
            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-800">
              {content}
            </pre>
          </div>
        </> : <div className="p-6 flex items-center justify-center h-80 text-center">
          <div>
            <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="mt-2 text-sm text-gray-500">
              Fill out the form and click "Generate Content" to create
              educational materials
            </p>
          </div>
        </div>}
    </div>;
};
export default ResultDisplay;