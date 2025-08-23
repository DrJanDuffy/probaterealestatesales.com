'use client';

import { useEffect } from 'react';
import { defaultSchemas, generateBreadcrumbSchema, generateArticleSchema, generateLegalServiceSchema } from '@/lib/schema';

interface SchemaMarkupProps {
  type: 'home' | 'service' | 'faq' | 'article' | 'contact' | 'legal' | 'location' | 'property';
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
  location?: string;
  serviceType?: string;
}

export default function SchemaMarkup({ 
  type, 
  breadcrumbs, 
  article, 
  customSchema,
  location,
  serviceType
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
          defaultSchemas.faqPage,
          defaultSchemas.howTo,
          defaultSchemas.legalService
        ];
        break;
      
      case 'service':
        schemas = [
          defaultSchemas.localBusiness,
          defaultSchemas.realEstateAgent,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Nevada Probate Real Estate Services",
            description: "Comprehensive probate real estate services in Las Vegas and Clark County, including property valuation, sale management, and estate liquidation following Nevada Revised Statutes.",
            provider: {
              "@type": "Organization",
              name: "Las Vegas Probate Real Estate Sales",
              url: "https://probaterealestatesales.com"
            },
            areaServed: [
              "Las Vegas", "Henderson", "North Las Vegas", "Boulder City", "Mesquite",
              "Summerlin", "Spring Valley", "Enterprise", "Anthem", "Seven Hills",
              "MacDonald Ranch", "Green Valley", "Centennial Hills", "Southern Highlands",
              "Mountains Edge", "Clark County", "Nevada"
            ],
            serviceType: "Probate Real Estate Services",
            offers: {
              "@type": "Offer",
              description: "Professional Nevada probate real estate services with 6-8 month timeline",
              price: "Variable",
              priceCurrency: "USD"
            }
          }
        ];
        break;
      
      case 'legal':
        schemas = [
          defaultSchemas.legalService,
          defaultSchemas.organization,
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Nevada Probate Legal Services",
            description: "Expert legal services for Nevada probate administration, including certificate of incumbency, trust administration, and court representation.",
            provider: {
              "@type": "Organization",
              name: "Las Vegas Probate Real Estate Sales",
              url: "https://probaterealestatesales.com"
            },
            serviceType: "Probate Administration",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Clark County, Nevada"
            }
          }
        ];
        break;
      
      case 'location':
        if (location) {
          schemas = [
            defaultSchemas.localBusiness,
            {
              "@context": "https://schema.org",
              "@type": "Place",
              name: `${location} Probate Real Estate Services`,
              description: `Expert probate real estate services in ${location}, Nevada. Specialized in inherited property sales with Nevada's fastest probate process.`,
              address: {
                "@type": "PostalAddress",
                addressLocality: location,
                addressRegion: "NV",
                addressCountry: "US"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.1699,
                longitude: -115.1398
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Clark County, Nevada"
              }
            }
          ];
        }
        break;
      
      case 'property':
        schemas = [
          defaultSchemas.realEstateAgent,
          {
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: "Nevada Probate Property",
            description: "Inherited property available for sale through Nevada probate process",
            address: {
              "@type": "PostalAddress",
              addressRegion: "NV",
              addressCountry: "US"
            },
            listingStatus: "For Sale",
            provider: {
              "@type": "Organization",
              name: "Las Vegas Probate Real Estate Sales"
            }
          }
        ];
        break;
      
      case 'faq':
        schemas = [
          defaultSchemas.faqPage,
          defaultSchemas.organization,
          defaultSchemas.howTo
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
            name: "Contact Las Vegas Probate Real Estate Experts",
            description: "Get in touch with our Nevada probate real estate experts for free consultation",
            mainEntity: {
              "@type": "Organization",
              name: "Las Vegas Probate Real Estate Sales",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-702-830-9222",
                contactType: "customer service",
                areaServed: "US-NV",
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

    // Add location-specific legal service schema if applicable
    if (location && serviceType) {
      schemas.push(generateLegalServiceSchema({
        name: `${location} ${serviceType}`,
        description: `${serviceType} services in ${location}, Nevada`,
        price: "Variable",
        area: location
      }));
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
  }, [type, breadcrumbs, article, customSchema, location, serviceType]);

  return null; // This component doesn't render anything visible
}
