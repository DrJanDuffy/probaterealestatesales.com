import type { Metadata } from 'next';

export type ServiceCategory =
  | 'Real Estate Agent'
  | 'Real Estate Appraiser'
  | 'Real Estate Consultant';

export type ServicePageContent = {
  slug: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  details: string;
  canonicalUrl: string;
  relatedSlugs: string[];
};

const BASE_URL = 'https://www.probaterealestatesales.com/services';

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    slug: 'probate-real-estate-sales',
    title: 'Probate real estate sales',
    category: 'Real Estate Agent',
    summary:
      'Full-service probate property sales in Las Vegas and Clark County. Includes property valuation, court-required disclosures, overbid procedure management, and coordination with Nevada probate attorneys through final court confirmation.',
    details:
      'Court-supervised and conservatorship property sales throughout Clark County, Nevada. We guide executors, trustees, and conservators through every legal requirement from listing through court confirmation and closing.',
    canonicalUrl: `${BASE_URL}/probate-real-estate-sales/`,
    relatedSlugs: ['court-approved-property-sales', 'trust-sale-services'],
  },
  {
    slug: 'estate-liquidation',
    title: 'Estate Liquidation',
    category: 'Real Estate Agent',
    summary:
      'Real property liquidation for estates, trusts, and family offices in Clark County. Covers inherited homes, investment properties, and multi-parcel estates. Handled with discretion from initial valuation through final sale.',
    details:
      'Court-supervised and conservatorship property sales throughout Clark County, Nevada. We guide executors, trustees, and conservators through every legal requirement from listing through court confirmation and closing.',
    canonicalUrl: `${BASE_URL}/estate-liquidation/`,
    relatedSlugs: ['probate-real-estate-sales', 'executor-property-consulting'],
  },
  {
    slug: 'court-approved-property-sales',
    title: 'Court-Approved Property Sales',
    category: 'Real Estate Agent',
    summary:
      'Nevada court-confirmed real estate sales for probate and conservatorship estates. We manage compliance with court timelines, prepare required documentation, and represent executor interests through the confirmation hearing process.',
    details:
      'Court-supervised and conservatorship property sales throughout Clark County, Nevada. We guide executors, trustees, and conservators through every legal requirement from listing through court confirmation and closing.',
    canonicalUrl: `${BASE_URL}/court-approved-property-sales/`,
    relatedSlugs: ['probate-real-estate-sales', 'partition-action-consulting'],
  },
  {
    slug: 'trust-sale-services',
    title: 'Trust Sale Services',
    category: 'Real Estate Agent',
    summary:
      'Sale of trust-owned real property in Las Vegas and Clark County without court supervision. Trust sales typically close in 30-45 days. We coordinate directly with trustees and trust counsel to meet fiduciary obligations.',
    details:
      'Court-supervised and conservatorship property sales throughout Clark County, Nevada. We guide executors, trustees, and conservators through every legal requirement from listing through court confirmation and closing.',
    canonicalUrl: `${BASE_URL}/trust-sale-services/`,
    relatedSlugs: ['probate-real-estate-sales', 'estate-attorney-referral-services'],
  },
  {
    slug: 'probate-property-valuation',
    title: 'Probate Property Valuation',
    category: 'Real Estate Appraiser',
    summary:
      'Comparative market analysis and property valuation for Nevada probate estates. Reports meet court standards and support Letters Testamentary proceedings. Covers single-family, condo, and multi-unit properties throughout Clark County.',
    details:
      'Prepared for executors, trustees, and attorneys handling probate and trust administration in Las Vegas, Henderson, Summerlin, and all Clark County communities.',
    canonicalUrl: `${BASE_URL}/probate-property-valuation/`,
    relatedSlugs: ['estate-property-cma-reports', 'executor-property-consulting'],
  },
  {
    slug: 'estate-property-cma-reports',
    title: 'Estate Property CMA Reports',
    category: 'Real Estate Appraiser',
    summary:
      'Detailed comparative market analysis for estate-held real property in Las Vegas, Henderson, Summerlin, and all Clark County communities. Prepared for executor review, attorney submission, and court documentation requirements.',
    details:
      'Prepared for executors, trustees, and attorneys handling probate and trust administration in Las Vegas, Henderson, Summerlin, and all Clark County communities.',
    canonicalUrl: `${BASE_URL}/estate-property-cma-reports/`,
    relatedSlugs: ['probate-property-valuation', 'estate-attorney-referral-services'],
  },
  {
    slug: 'estate-attorney-referral-services',
    title: 'Estate Attorney Referral Services',
    category: 'Real Estate Consultant',
    summary:
      'Coordinated real estate services for Nevada probate and estate attorneys. We work within your legal timeline, provide court-ready documentation, and keep counsel informed at every transaction milestone throughout Clark County.',
    details:
      'Real estate consulting services for executors, co-owners, and counsel navigating probate and court-ordered sales in Clark County.',
    canonicalUrl: `${BASE_URL}/estate-attorney-referral-services/`,
    relatedSlugs: ['executor-property-consulting', 'partition-action-consulting'],
  },
  {
    slug: 'partition-action-consulting',
    title: 'Partition Action Consulting',
    category: 'Real Estate Consultant',
    summary:
      'Real estate consulting for court-ordered partition actions involving co-owned or disputed Nevada property. We work with all parties and their legal counsel to manage the sale process through resolution.',
    details:
      'Real estate consulting services for executors, co-owners, and counsel navigating probate and court-ordered sales in Clark County.',
    canonicalUrl: `${BASE_URL}/partition-action-consulting/`,
    relatedSlugs: ['estate-attorney-referral-services', 'court-approved-property-sales'],
  },
  {
    slug: 'executor-property-consulting',
    title: 'Executor Property Consulting',
    category: 'Real Estate Consultant',
    summary:
      'Free confidential consulting for executors navigating the sale of Las Vegas real property in probate. Covers Nevada process timelines, property valuation, court requirements, and coordination with estate attorneys.',
    details:
      'Real estate consulting services for executors, co-owners, and counsel navigating probate and court-ordered sales in Clark County.',
    canonicalUrl: `${BASE_URL}/executor-property-consulting/`,
    relatedSlugs: ['probate-property-valuation', 'estate-attorney-referral-services'],
  },
];

export const SERVICE_PAGES_BY_SLUG = Object.fromEntries(
  SERVICE_PAGES.map((service) => [service.slug, service])
) as Record<string, ServicePageContent>;

export function getRelatedServices(service: ServicePageContent): ServicePageContent[] {
  return service.relatedSlugs
    .map((slug) => SERVICE_PAGES_BY_SLUG[slug])
    .filter((entry): entry is ServicePageContent => Boolean(entry));
}

export function buildServiceMetadata(service: ServicePageContent): Metadata {
  const title = `${service.title} | ${service.category} | Las Vegas & Clark County`;
  const description = service.summary;

  return {
    title,
    description,
    alternates: {
      canonical: service.canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: service.canonicalUrl,
      locale: 'en_US',
    },
  };
}
