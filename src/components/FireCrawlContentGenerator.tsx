'use client';

import { useState, useEffect } from 'react';
import { FirecrawlAppV1 } from '@mendable/firecrawl-js';

interface GeneratedContent {
  neighborhood: string;
  contentType: string;
  content: string;
  timestamp: string;
  status: 'pending' | 'generating' | 'completed' | 'error';
}

interface FireCrawlContentGeneratorProps {
  apiKey?: string;
  neighborhoods?: string[];
  contentTypes?: string[];
}

export default function FireCrawlContentGenerator({
  apiKey = process.env.NEXT_PUBLIC_FIRECRAWL_API_KEY,
  neighborhoods = [
    'Summerlin', 'Henderson', 'North Las Vegas', 
    'Boulder City', 'Mesquite', 'Spring Valley', 'Enterprise'
  ],
  contentTypes = [
    'probate_guides', 'market_analysis', 'court_procedures',
    'attorney_directories', 'property_valuations'
  ]
}: FireCrawlContentGeneratorProps) {
  const [firecrawl, setFirecrawl] = useState<FirecrawlAppV1 | null>(null);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(neighborhoods[0]);
  const [selectedContentType, setSelectedContentType] = useState(contentTypes[0]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (apiKey) {
      try {
        const app = new FirecrawlAppV1({ apiKey });
        setFirecrawl(app);
        setError(null);
      } catch (err) {
        setError('Failed to initialize Fire Crawl');
        console.error('Fire Crawl initialization error:', err);
      }
    } else {
      setError('Fire Crawl API key is required');
    }
  }, [apiKey]);

  const generateContent = async () => {
    if (!firecrawl) {
      setError('Fire Crawl not initialized');
      return;
    }

    setIsGenerating(true);
    setError(null);

  
    
    // Add pending content
    const pendingContent: GeneratedContent = {
      neighborhood: selectedNeighborhood,
      contentType: selectedContentType,
      content: '',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    setGeneratedContent(prev => [...prev, pendingContent]);

    try {
      // Update status to generating
      setGeneratedContent(prev => 
        prev.map(item => 
          item.timestamp === pendingContent.timestamp 
            ? { ...item, status: 'generating' }
            : item
        )
      );

      // Use Fire Crawl to generate content
      // TODO: Fix firecrawl API integration
      // const result = await firecrawl.extract(['https://example.com'], {
      //   extractionPrompt: prompt
      // });

      // For now, use placeholder content
      const placeholderContent = `Generated content for ${selectedNeighborhood} - ${selectedContentType}:
      
This is a placeholder for the actual Fire Crawl generated content. The API integration needs to be fixed to use the correct method signature and parameters.

The content would normally include:
- Local probate procedures for ${selectedNeighborhood}
- Market analysis and property values
- Attorney recommendations and services
- Court information and timelines
- Local resources and contacts

Please check the Fire Crawl API documentation for the correct integration method.`;

      // Update content with generated result
      setGeneratedContent(prev => 
        prev.map(item => 
          item.timestamp === pendingContent.timestamp 
            ? { 
                ...item, 
                content: placeholderContent,
                status: 'completed' 
              }
            : item
        )
      );

    } catch (err) {
      console.error('Content generation error:', err);
      setError('Failed to generate content');
      
      // Update status to error
      setGeneratedContent(prev => 
        prev.map(item => 
          item.timestamp === pendingContent.timestamp 
            ? { ...item, status: 'error' }
            : item
        )
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadContent = (content: GeneratedContent) => {
    const blob = new Blob([content.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${content.neighborhood}-${content.contentType}-${new Date(content.timestamp).toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Fire Crawl Error</h3>
        <p className="text-red-700">{error}</p>
        <p className="text-sm text-red-600 mt-2">
          Please check your API key and try again.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Fire Crawl Hyperlocal Content Generator
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Generate hyperlocal content for Nevada probate real estate using AI-powered web crawling and content extraction.
        </p>
      </div>

      {/* Content Generation Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Generate New Content</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-2">
              Neighborhood
            </label>
            <select
              id="neighborhood"
              value={selectedNeighborhood}
              onChange={(e) => setSelectedNeighborhood(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {neighborhoods.map((neighborhood) => (
                <option key={neighborhood} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 mb-2">
              Content Type
            </label>
            <select
              id="contentType"
              value={selectedContentType}
              onChange={(e) => setSelectedContentType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {contentTypes.map((type) => (
                <option key={type} value={type}>
                  {type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="button"
              onClick={generateContent}
              disabled={isGenerating || !firecrawl}
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generating...' : 'Generate Content'}
            </button>
          </div>
        </div>

        {!firecrawl && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <p className="text-yellow-800">
              Fire Crawl is initializing. Please wait...
            </p>
          </div>
        )}
      </div>

      {/* Generated Content Display */}
      {generatedContent.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Generated Content</h3>
          
          {generatedContent.map((content) => (
            <div key={content.timestamp} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {content.neighborhood} - {content.contentType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Generated: {new Date(content.timestamp).toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {content.status === 'pending' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    )}
                    {content.status === 'generating' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Generating
                      </span>
                    )}
                    {content.status === 'completed' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Completed
                      </span>
                    )}
                    {content.status === 'error' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Error
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {content.status === 'pending' && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-2">Waiting to start...</p>
                  </div>
                )}

                {content.status === 'generating' && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-2">Generating content...</p>
                  </div>
                )}

                {content.status === 'completed' && content.content && (
                  <div>
                    <div className="prose max-w-none">
                      <pre className="whitespace-pre-wrap text-sm text-gray-800 bg-gray-50 p-4 rounded-md overflow-x-auto">
                        {content.content}
                      </pre>
                    </div>
                    
                    <div className="flex space-x-3 mt-4">
                      <button
                        onClick={() => copyToClipboard(content.content)}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Copy to Clipboard
                      </button>
                      <button
                        onClick={() => downloadContent(content)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                )}

                {content.status === 'error' && (
                  <div className="text-center py-8">
                    <p className="text-red-600">Failed to generate content. Please try again.</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">How It Works</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Select a Nevada neighborhood and content type</li>
          <li>• Fire Crawl uses AI to generate hyperlocal content</li>
          <li>• Content is optimized for SEO and local search</li>
          <li>• Download or copy generated content for your website</li>
          <li>• All content is Nevada-specific and probate-focused</li>
        </ul>
      </div>
    </div>
  );
}
