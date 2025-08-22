export interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
  openingHours: string;
  priceRange: string;
  paymentAccepted: string[];
  areaServed: {
    "@type": "GeoCircle";
    geoMidpoint: {
      "@type": "GeoCoordinates";
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
  hasOfferCatalog: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: Array<{
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description: string;
      };
    }>;
  };
}

export interface RealEstateAgentSchema {
  "@context": "https://schema.org";
  "@type": "RealEstateAgent";
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed: string[];
  serviceArea: {
    "@type": "GeoCircle";
    geoMidpoint: {
      "@type": "GeoCoordinates";
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
  hasOfferCatalog: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: Array<{
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description: string;
        provider: {
          "@type": "Organization";
          name: string;
        };
      };
    }>;
  };
}

export interface LegalServiceSchema {
  "@context": "https://schema.org";
  "@type": "LegalService";
  name: string;
  description: string;
  provider: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  serviceType: string;
  areaServed: {
    "@type": "AdministrativeArea";
    name: string;
  };
  hasOfferCatalog: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: Array<{
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description: string;
        price: string;
        priceCurrency: string;
      };
    }>;
  };
}

export interface ServiceSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  areaServed: string[];
  serviceType: string;
  offers: {
    "@type": "Offer";
    description: string;
    price: string;
    priceCurrency: string;
  };
}

export interface FAQPageSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export interface ReviewSchema {
  "@context": "https://schema.org";
  "@type": "Review";
  itemReviewed: {
    "@type": "Service";
    name: string;
  };
  reviewRating: {
    "@type": "Rating";
    ratingValue: number;
    bestRating: number;
  };
  author: {
    "@type": "Person";
    name: string;
  };
  reviewBody: string;
  datePublished: string;
}

export interface AggregateRatingSchema {
  "@context": "https://schema.org";
  "@type": "AggregateRating";
  itemReviewed: {
    "@type": "Service";
    name: string;
  };
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

export interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  image: string;
  author: {
    "@type": "Person";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
}

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  };
  sameAs: string[];
  founder: {
    "@type": "Person";
    name: string;
    jobTitle: string;
  };
  foundingDate: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export interface HowToSchema {
  "@context": "https://schema.org";
  "@type": "HowTo";
  name: string;
  description: string;
  estimatedCost: {
    "@type": "MonetaryAmount";
    currency: string;
    value: string;
  };
  totalTime: string;
  step: Array<{
    "@type": "HowToStep";
    name: string;
    text: string;
  }>;
}

export interface RealEstateListingSchema {
  "@context": "https://schema.org";
  "@type": "RealEstateListing";
  name: string;
  description: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  numberOfRooms: number;
  floorSize: {
    "@type": "QuantitativeValue";
    value: number;
    unitCode: string;
  };
  price: {
    "@type": "MonetaryAmount";
    currency: string;
    value: string;
  };
  listingStatus: string;
}

// Default schema data for the Nevada probate real estate business
export const defaultSchemas = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Las Vegas Probate Real Estate Sales",
    description: "Expert probate real estate services in Las Vegas and Clark County. Specialized in inherited property sales with Nevada's fastest probate process (6-8 months vs California's 9-18 months).",
    url: "https://probaterealestatesales.com",
    telephone: "+1-702-555-0123",
    email: "DrJan@probaterealestatesales.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Las Vegas Blvd",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89101",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.1699,
      longitude: -115.1398
    },
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "Check"],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 36.1699,
        longitude: -115.1398
      },
      geoRadius: "50 miles"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nevada Probate Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nevada Probate Property Valuation",
            description: "Professional appraisal and market analysis for inherited properties in Las Vegas area"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clark County Probate Sale Management",
            description: "Complete handling of probate property sales with Nevada's 6-8 month timeline"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nevada Estate Liquidation",
            description: "Comprehensive estate liquidation services following Nevada Revised Statutes"
          }
        }
      ]
    }
  },

  realEstateAgent: {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Dr. Janet Duffy",
    description: "Licensed Nevada real estate agent specializing in probate sales and inherited property transactions. Expert in Clark County probate court procedures and Nevada probate law.",
    url: "https://probaterealestatesales.com",
    telephone: "+1-702-555-0123",
    email: "DrJan@probaterealestatesales.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Las Vegas Blvd",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89101",
      addressCountry: "US"
    },
    areaServed: [
      "Las Vegas", "Henderson", "North Las Vegas", "Boulder City", "Mesquite",
      "Summerlin", "Spring Valley", "Enterprise", "Anthem", "Seven Hills",
      "MacDonald Ranch", "Green Valley", "Centennial Hills", "Southern Highlands",
      "Mountains Edge", "Clark County", "Washoe County", "Nevada"
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 36.1699,
        longitude: -115.1398
      },
      geoRadius: "50 miles"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nevada Probate Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nevada Probate Property Sales",
            description: "Expert guidance through Nevada's 6-8 month probate process",
            provider: {
              "@type": "Organization",
              name: "Las Vegas Probate Real Estate Sales"
            }
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nevada Estate Planning Consultation",
            description: "Strategic advice for estate planning following Nevada Revised Statutes",
            provider: {
              "@type": "Organization",
              name: "Las Vegas Probate Real Estate Sales"
            }
          }
        }
      ]
    }
  },

  legalService: {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Nevada Probate Legal Services",
    description: "Comprehensive probate legal services in Nevada, including certificate of incumbency, trust administration, and probate court representation.",
    provider: {
      "@type": "Organization",
      name: "Las Vegas Probate Real Estate Sales",
      url: "https://probaterealestatesales.com"
    },
    serviceType: "Probate Administration",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Clark County, Nevada"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nevada Probate Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Certificate of Incumbency",
            description: "Nevada certificate of incumbency (affidavit of successor trustee) - $750",
            price: "750.00",
            priceCurrency: "USD"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Probate Administration",
            description: "Complete Nevada probate administration - $8,000-9,000",
            price: "8000-9000",
            priceCurrency: "USD"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trust Administration",
            description: "Nevada trust administration - $2,500 (3 months vs 6-8 months for probate)",
            price: "2500.00",
            priceCurrency: "USD"
          }
        }
      ]
    }
  },

  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does probate take in Nevada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nevada probate typically takes 6-8 months, which is faster than California's 9-18 month process. Clark County has two probate commissioners: James Fontana (Fridays) and Russell Geis (Wednesdays at 9:30 AM). Court orders take about 3 weeks to release."
        }
      },
      {
        "@type": "Question",
        name: "What is a certificate of incumbency in Nevada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A certificate of incumbency in Nevada is a 5-7 page document (also known as affidavit of successor trustee) that's required after trustors die. It costs $750 from attorneys and must be recorded with Clark County. This document is essential for trust administration and property transfers."
        }
      },
      {
        "@type": "Question",
        name: "How much does probate cost in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nevada probate costs average $8,000-9,000 in attorney fees. Court costs vary by county: Clark County $1,000, Washoe County $1,300, and rural counties like Esmeralda $850. Trust administration is more affordable at $2,500 and takes only 3 months."
        }
      },
      {
        "@type": "Question",
        name: "What is Nevada's small estate limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nevada's small estate limit is $100,000 (vs California's $184,500). For estates under $25,000, Nevada offers a simplified 'set-aside' procedure that avoids formal probate entirely. This makes Nevada an attractive option for smaller estates."
        }
      },
      {
        "@type": "Question",
        name: "Do I need a certificate of incumbency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if you're dealing with a trust after the trustors have passed away. The certificate of incumbency proves your authority as successor trustee and is required for property transfers, bank accounts, and other trust assets. Title companies cannot create these documents - only attorneys can."
        }
      },
      {
        "@type": "Question",
        name: "What are the two methods of selling property in Nevada probate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nevada offers two methods: 1) Court Confirmation - requires court approval for each step, and 2) Independent Administration - gives the personal representative more authority to act without court supervision. Independent administration is faster and more cost-effective but requires family cooperation."
        }
      }
    ]
  },

  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Las Vegas Probate Real Estate Sales",
    description: "Leading provider of probate real estate services in Nevada, specializing in Clark County probate court procedures and Nevada's fastest probate timeline (6-8 months vs California's 9-18 months).",
    url: "https://probaterealestatesales.com",
    logo: "https://probaterealestatesales.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-702-555-0123",
      contactType: "customer service",
      areaServed: "US-NV",
      availableLanguage: "English"
    },
    sameAs: [
      "https://www.facebook.com/probaterealestatesales",
      "https://www.linkedin.com/company/probaterealestatesales",
      "https://www.instagram.com/probaterealestatesales"
    ],
    founder: {
      "@type": "Person",
      name: "Dr. Janet Duffy",
      jobTitle: "Founder & Principal Broker"
    },
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Las Vegas Blvd",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89101",
      addressCountry: "US"
    }
  },

  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Sell Property in Nevada Probate",
    description: "Complete guide to selling inherited property through Nevada's probate process, including timeline, costs, and required documents.",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "9000"
    },
    totalTime: "P6M",
    step: [
      {
        "@type": "HowToStep",
        name: "Obtain Letters Testamentary",
        text: "File with Clark County District Court to obtain letters testamentary or letters of administration. This gives you legal authority to act on behalf of the estate."
      },
      {
        "@type": "HowToStep",
        name: "Sign Binding Listing Agreement",
        text: "Once letters are issued with court stamp and signature, you can sign a binding listing agreement. This cannot be done before obtaining proper court authority."
      },
      {
        "@type": "HowToStep",
        name: "Choose Sale Method",
        text: "Select between court confirmation (requires court approval for each step) or independent administration (more authority, faster process)."
      },
      {
        "@type": "HowToStep",
        name: "Complete Property Transfer",
        text: "Follow Nevada's 6-8 month timeline, ensuring all 30 required documents are properly filed with the court."
      }
    ]
  }
};

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image,
    author: {
      "@type": "Person",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: "Las Vegas Probate Real Estate Sales",
      logo: {
        "@type": "ImageObject",
        url: "https://probaterealestatesales.com/logo.png"
      }
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}

export function generateLegalServiceSchema(service: {
  name: string;
  description: string;
  price: string;
  area: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Las Vegas Probate Real Estate Sales",
      url: "https://probaterealestatesales.com"
    },
    serviceType: "Probate Administration",
    areaServed: {
      "@type": "AdministrativeArea",
      name: service.area
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nevada Probate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            price: service.price,
            priceCurrency: "USD"
          }
        }
      ]
    }
  };
}
