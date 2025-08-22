'use client';

import { useEffect } from 'react';
import { defaultSchemas, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/schema';

interface SchemaMarkupProps {
  type: 'home' | 'service' | 'faq' | 'article' | 'contact';
  breadcrumbs?: Array<{ name: string; url: string }>;
  article?: {
    headline: string;
    description: string;
    image: string;
    author: string;
    datePublished: string;
    dateModified: string;
    url: string;
  };
  customSchema?: any;
}

export default function SchemaMarkup({ 
  type, 
  breadcrumbs, 
  article, 
  customSchema 
}: SchemaMarkupProps) {
  useEffect(() => {
    // Remove any existing schema markup
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    for (const script of existingScripts) {
      script.remove();
    }

    // Generate schema based on page type
    let schemas: any[] = [];

    switch (type) {
      case 'home':
        schemas = [
          defaultSchemas.localBusiness,
          defaultSchemas.realEstateAgent,
          defaultSchemas.organization,
          defaultSchemas.faqPage
        ];
        break;
      
      case 'service':
        schemas = [
          defaultSchemas.localBusiness,
          defaultSchemas.realEstateAgent,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Probate Real Estate Services",
            description: "Comprehensive probate real estate services including property valuation, sale management, and estate liquidation.",
            provider: {
              "@type": "Organization",
              name: "Probate Real Estate Sales",
              url: "https://probaterealestatesales.com"
            },
            areaServed: ["Las Vegas", "Henderson", "North Las Vegas", "Boulder City", "Mesquite"],
            serviceType: "Real Estate Services",
            offers: {
              "@type": "Offer",
              description: "Professional probate real estate services",
              price: "Variable",
              priceCurrency: "USD"
            }
          }
        ];
        break;
      
      case 'faq':
        schemas = [
          defaultSchemas.faqPage,
          defaultSchemas.organization
        ];
        break;
      
      case 'article':
        if (article) {
          schemas = [
            generateArticleSchema(article),
            defaultSchemas.organization
          ];
        }
        break;
      
      case 'contact':
        schemas = [
          defaultSchemas.localBusiness,
          defaultSchemas.organization,
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us",
            description: "Get in touch with our probate real estate experts",
            mainEntity: {
              "@type": "Organization",
              name: "Probate Real Estate Sales",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-702-555-0123",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English"
              }
            }
          }
        ];
        break;
    }

    // Add breadcrumbs if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push(generateBreadcrumbSchema(breadcrumbs));
    }

    // Add custom schema if provided
    if (customSchema) {
      schemas.push(customSchema);
    }

    // Inject schemas into head
    for (let index = 0; index < schemas.length; index++) {
      const schema = schemas[index];
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `schema-${index}`;
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        script.remove();
      }
    };
  }, [type, breadcrumbs, article, customSchema]);

  return null; // This component doesn't render anything visible
}
