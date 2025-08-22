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

// Default schema data for the probate real estate business
export const defaultSchemas = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Probate Real Estate Sales",
    description: "Specialized probate real estate services helping families navigate inherited property sales with compassion and expertise.",
    url: "https://probaterealestatesales.com",
    telephone: "+1-702-555-0123",
    email: "DrJan@probaterealestatesales.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
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
      name: "Probate Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Probate Property Valuation",
            description: "Professional appraisal and market analysis for inherited properties"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Probate Sale Management",
            description: "Complete handling of probate property sales from listing to closing"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estate Liquidation",
            description: "Comprehensive estate liquidation and property disposition services"
          }
        }
      ]
    }
  },

  realEstateAgent: {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Dr. Janet Duffy",
    description: "Licensed real estate agent specializing in probate sales and inherited property transactions.",
    url: "https://probaterealestatesales.com",
    telephone: "+1-702-555-0123",
    email: "DrJan@probaterealestatesales.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89101",
      addressCountry: "US"
    },
    areaServed: ["Las Vegas", "Henderson", "North Las Vegas", "Boulder City", "Mesquite"],
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
      name: "Probate Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Probate Property Sales",
            description: "Expert guidance through the probate sale process",
            provider: {
              "@type": "Organization",
              name: "Probate Real Estate Sales"
            }
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estate Planning Consultation",
            description: "Strategic advice for estate planning and property disposition",
            provider: {
              "@type": "Organization",
              name: "Probate Real Estate Sales"
            }
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
        name: "What is a probate sale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A probate sale is the sale of real estate that occurs when someone passes away and their property needs to be sold as part of the estate settlement process. This typically happens when the deceased person's will requires the property to be sold or when the beneficiaries decide to sell rather than keep the inherited property."
        }
      },
      {
        "@type": "Question",
        name: "How long does the probate process take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The probate process typically takes 6-12 months, but can vary depending on the complexity of the estate, court schedules, and whether there are any disputes. Simple estates may be completed in as little as 3-4 months, while complex cases can take 1-2 years or longer."
        }
      },
      {
        "@type": "Question",
        name: "Do I need an attorney for a probate sale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While you can represent yourself in probate court, it's highly recommended to work with an experienced probate attorney, especially for real estate transactions. An attorney can help navigate complex legal requirements, ensure proper documentation, and protect your interests throughout the process."
        }
      },
      {
        "@type": "Question",
        name: "What are the costs involved in a probate sale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Probate sale costs typically include court filing fees, attorney fees, real estate agent commissions, title insurance, escrow fees, and potential capital gains taxes. Total costs usually range from 6-10% of the property's sale price, but can vary based on the specific circumstances."
        }
      },
      {
        "@type": "Question",
        name: "Can I sell a probate property before probate is complete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, you cannot sell a probate property until the court grants permission through a court order. The executor or administrator must petition the court for authorization to sell the property, and the sale must be approved before it can proceed."
        }
      }
    ]
  },

  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Probate Real Estate Sales",
    description: "Leading provider of probate real estate services in Nevada, helping families navigate inherited property sales with expertise and compassion.",
    url: "https://probaterealestatesales.com",
    logo: "https://probaterealestatesales.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-702-555-0123",
      contactType: "customer service",
      areaServed: "US",
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
      streetAddress: "123 Main Street",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89101",
      addressCountry: "US"
    }
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
      name: "Probate Real Estate Sales",
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
