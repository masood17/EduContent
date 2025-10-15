import React, { useState } from 'react';
import ContentGenerator from './app/components/ContentGenerator';
export function App() {
  return <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">
            EduContent Generator
          </h1>
          <p className="text-indigo-100 mt-1">
            Create high-quality educational materials in seconds
          </p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ContentGenerator />
      </main>
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>
            Powered by Gemini API • Educational Content Generator •{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>;
}