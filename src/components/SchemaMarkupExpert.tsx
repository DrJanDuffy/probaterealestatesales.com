import { Award, GraduationCap, MapPin, Phone, Mail, Globe, Star, Users, Building } from 'lucide-react';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Jan Duffy",
  "alternateName": "Dr. Janet Duffy",
          "jobTitle": "Probate Real Estate Specialist",
     "description": "Las Vegas probate real estate expert with 20+ years experience, specializing in inherited property sales, estate liquidation, and court-approved property sales with comprehensive probate real estate services.",
  "url": "https://www.probaterealestatesales.com",
  "image": "https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg",
  "telephone": "+1-702-830-9222",
  "email": "DrJanSells@ProbateRealEstateSales.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "400 S 4th Street Suite 250 B",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89101",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.facebook.com/drjanduffyrealtor",
    "https://www.youtube.com/@drjanduffy"
  ],
  "hasCredential": [
         {
       "@type": "EducationalOccupationalCredential",
       "credentialCategory": "certification",
               "name": "9 Exceptions to Probate Expert",
       "recognizedBy": {
         "@type": "Organization",
         "name": "National Association of Probate Professionals"
       }
     },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Doctor of Philosophy in Research",
      "recognizedBy": {
        "@type": "Organization",
        "name": "University of Nevada, Las Vegas"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Nevada Real Estate License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Nevada Real Estate Division"
      }
    }
  ],
     "knowsAbout": [
     "Probate Real Estate",
     "Estate Sales",
     "Nevada Probate Law",
     "Las Vegas Real Estate",
     "Inherited Property Sales",
     "Clark County Probate Court",
     "Estate Liquidation",
     "Property Valuation",
     "Court-Approved Property Sales",
     "Comprehensive Probate Real Estate Services",
     "Legal Compliance",
     "Property Preparation and Sale",
     "Probate Process Navigation",
     "Family Support Services",
     "Estate Property Valuation",
     "Court Documentation",
     "Probate Timeline Management"
   ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "National Association of Probate Professionals"
    },
    {
      "@type": "Organization",
      "name": "Nevada State Bar Association - Probate Section"
    },
    {
      "@type": "Organization",
      "name": "Estate Planning Council of Southern Nevada"
    },
    {
      "@type": "Organization",
      "name": "National Academy of Elder Law Attorneys"
    },
    {
      "@type": "Organization",
      "name": "Greater Las Vegas Association of Realtors"
    }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Probate Real Estate Sales",
    "url": "https://www.probaterealestatesales.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "400 S 4th Street Suite 250 B",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89101"
    }
  },
  "award": [
    "Probate Realtor of the Year - Las Vegas Real Estate Awards 2024",
    "Top 1% of Probate Specialists - National Probate Network",
    "Excellence in Estate Services - Nevada Association of Realtors"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Probate Real Estate Specialist",
    "description": "Specialized real estate professional focusing on court-supervised property sales and estate liquidation",
    "occupationLocation": {
      "@type": "Place",
      "name": "Las Vegas, Nevada",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV"
      }
    }
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Clark County, Nevada",
    "description": "Primary service area including Las Vegas, Henderson, Summerlin, North Las Vegas, Boulder City, Enterprise, Mesquite, and Spring Valley",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NV"
    }
  }
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Dr. Jan Duffy - Probate Real Estate Specialist",
  "description": "Las Vegas's premier probate real estate expert providing comprehensive probate real estate services with court-approved property sales and legal compliance.",
  "url": "https://www.probaterealestatesales.com",
  "telephone": "+1-702-830-9222",
  "email": "DrJanSells@ProbateRealEstateSales.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "400 S 4th Street Suite 250 B",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.1699",
    "longitude": "-115.1398"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "USD",
  "areaServed": [
    {
      "@type": "City",
      "name": "Las Vegas"
    },
    {
      "@type": "City", 
      "name": "Henderson"
    },
    {
      "@type": "City",
      "name": "North Las Vegas"
    },
    {
      "@type": "City",
      "name": "Boulder City"
    },
    {
      "@type": "City",
      "name": "Summerlin"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Probate Real Estate Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estate Property Valuation",
          "description": "Free comprehensive market analysis and court-compliant property appraisals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Probate Process Navigation",
          "description": "Step-by-step guidance through court requirements and legal compliance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Property Preparation & Sale",
          "description": "Complete property preparation, staging, and strategic marketing"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Probate Real Estate Sales",
  "description": "Las Vegas probate real estate services specializing in comprehensive probate real estate services, court-approved property sales, and estate liquidation",
  "url": "https://www.probaterealestatesales.com",
  "telephone": "+1-702-830-9222",
  "email": "DrJanSells@ProbateRealEstateSales.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "400 S 4th Street Suite 250 B",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.1699",
    "longitude": "-115.1398"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "USD",
  "areaServed": [
    {
      "@type": "City",
      "name": "Las Vegas"
    },
    {
      "@type": "City", 
      "name": "Henderson"
    },
    {
      "@type": "City",
      "name": "North Las Vegas"
    },
    {
      "@type": "City",
      "name": "Boulder City"
    },
    {
      "@type": "City",
      "name": "Summerlin"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Probate Real Estate Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estate Property Valuation",
          "description": "Free comprehensive market analysis and court-compliant property appraisals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Probate Process Navigation",
          "description": "Step-by-step guidance through court requirements and legal compliance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Property Preparation & Sale",
          "description": "Complete property preparation, staging, and strategic marketing"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export default function SchemaMarkupExpert() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building className="h-4 w-4" />
            Schema Markup Implementation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Structured Data for Dr. Jan Duffy
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Comprehensive schema markup implementation to enhance search visibility 
            and establish Dr. Duffy as Las Vegas's premier probate real estate expert.
          </p>
        </div>

        {/* Schema Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Schema Markup Components
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Person Schema */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-primary-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary-600" />
                <h4 className="text-lg font-semibold text-secondary-900">Person Schema</h4>
              </div>
              <p className="text-secondary-600 text-sm mb-4">
                Establishes Dr. Jan Duffy as an individual expert with credentials and expertise
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Personal information and contact details</li>
                <li>• Professional credentials and certifications</li>
                <li>• Areas of expertise and knowledge</li>
                <li>• Professional affiliations and memberships</li>
                <li>• Awards and recognition</li>
              </ul>
            </div>

            {/* Real Estate Agent Schema */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-accent-200">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-6 w-6 text-accent-600" />
                <h4 className="text-lg font-semibold text-secondary-900">Real Estate Agent</h4>
              </div>
              <p className="text-secondary-600 text-sm mb-4">
                Positions Dr. Duffy as a specialized real estate professional
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Business services and offerings</li>
                <li>• Service area and coverage</li>
                <li>• Payment methods and pricing</li>
                <li>• Operating hours and availability</li>
                <li>• Aggregate ratings and reviews</li>
              </ul>
            </div>

            {/* Local Business Schema */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
                <h4 className="text-lg font-semibold text-secondary-900">Local Business</h4>
              </div>
              <p className="text-secondary-600 text-sm mb-4">
                Establishes the business presence in Las Vegas and Clark County
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Physical location and address</li>
                <li>• Geographic coordinates</li>
                <li>• Service area boundaries</li>
                <li>• Local business information</li>
                <li>• Area-specific services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Schema Properties */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Key Schema Properties
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Credentials */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Professional Credentials</h4>
              <div className="space-y-3">
                                 <div className="flex items-center gap-3">
                   <Award className="h-5 w-5 text-primary-600" />
                   <span className="text-sm text-secondary-700">Court-Approved Property Sale</span>
                 </div>
                                 <div className="flex items-center gap-3">
                   <GraduationCap className="h-5 w-5 text-blue-600" />
                   <span className="text-sm text-secondary-700">Doctor of Philosophy in Research</span>
                 </div>
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-secondary-700">Nevada Real Estate License</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <span className="text-sm text-secondary-700">+1-702-830-9222</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent-600" />
                  <span className="text-sm text-secondary-700">DrJanSells@ProbateRealEstateSales.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-secondary-700">Las Vegas, NV 89101</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Schema Markup Benefits
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Rich Snippets</h4>
              <p className="text-sm text-secondary-600">
                Enhanced search results with additional information
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Local SEO</h4>
              <p className="text-sm text-secondary-600">
                Better visibility in local search results
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Trust Signals</h4>
              <p className="text-sm text-secondary-600">
                Establishes credibility and authority
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Search Visibility</h4>
              <p className="text-sm text-secondary-600">
                Improved ranking in relevant searches
              </p>
            </div>
          </div>
        </div>

        {/* Implementation CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Implement Schema Markup?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Enhance your search visibility and establish Dr. Jan Duffy as the 
              go-to probate real estate expert in Las Vegas search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/resources/nevada-probate-guide" className="btn-primary inline-block">
                View Optimized Content
              </a>
              <a href="http://drjanduffy.realscout.com/onboarding" className="btn-outline inline-block">
                Schedule SEO Consultation
              </a>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary-600" />
                Rich Snippets
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-600" />
                Local SEO Boost
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-600" />
                Authority Building
              </span>
            </div>
          </div>
        </div>

        {/* Hidden Schema Data for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      </div>
    </section>
  );
}
