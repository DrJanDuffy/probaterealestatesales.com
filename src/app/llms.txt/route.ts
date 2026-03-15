/**
 * llms.txt — AI discoverability endpoint for probaterealestatesales.com
 * Helps AI models (ChatGPT, Claude, Perplexity, etc.) understand this site
 * @see https://llmstxt.org
 */

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://www.probaterealestatesales.com';

  const content = `# Probate Real Estate Sales — Dr. Jan Duffy

> Expert probate real estate services in Las Vegas and Clark County, Nevada.
> Sell inherited properties in 45 days with court-approved specialist Dr. Jan Duffy.

## About

Dr. Jan Duffy is a licensed Nevada real estate agent (S.0197614) specializing in probate, trust, and conservatorship property sales. With 20+ years of experience and 500+ probate properties sold, she is the leading probate real estate specialist in the Las Vegas Valley.

- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Office:** 400 S 4th St suite 250 b, Las Vegas, NV 89101
- **Phone:** (702) 830-9222
- **Email:** DrJanSells@ProbateRealEstateSales.com

## Services

- **Nevada Probate Property Sales** — Expert guidance through Nevada's 6-8 month probate timeline
- **Clark County Probate Court Sales** — Court-approved property sales with commissioners James Fontana and Russell Geis
- **Trust Administration Real Estate** — Property transfers under trust (3 months, $2,500 vs probate's 6-8 months)
- **Conservatorship Property Sales** — Court-supervised sales for protected persons
- **Certificate of Incumbency** — Successor trustee documentation ($750 via attorney)
- **Estate Liquidation** — Comprehensive estate asset liquidation following NRS
- **Inherited Property Valuation** — Professional appraisal and market analysis for inherited properties
- **Multi-State Probate Coordination** — California-to-Nevada probate transfers and ancillary proceedings
- **Probate Sale Methods** — Court Confirmation and Independent Administration options

## Coverage Area

Las Vegas, Henderson, North Las Vegas, Boulder City, Mesquite, Summerlin, Spring Valley, Enterprise, Anthem, Seven Hills, MacDonald Ranch, Green Valley, Centennial Hills, Southern Highlands, Mountains Edge, Clark County, Washoe County, Nevada

## Key Nevada Probate Facts

- Nevada probate timeline: 6-8 months (vs California's 9-18 months)
- Small estate limit: $100,000 (vs California's $184,500)
- Under $25,000: simplified "set-aside" procedure available
- Two sale methods: Court Confirmation or Independent Administration
- Attorney fees average: $8,000-9,000
- Trust administration: $2,500, 3 months

## Key Pages

- [Home](${baseUrl}/)
- [About Dr. Jan Duffy](${baseUrl}/about/)
- [Probate Services](${baseUrl}/services/)
- [Nevada Probate Guide](${baseUrl}/resources/nevada-probate-guide/)
- [Contact](${baseUrl}/contact/)
- [Probate FAQs](${baseUrl}/faq/)
- [Testimonials](${baseUrl}/testimonials/)
- [Locations / Communities Served](${baseUrl}/locations/)

## Contact

For probate real estate questions or to sell an inherited property:
- **Call/Text:** (702) 830-9222
- **Email:** DrJanSells@ProbateRealEstateSales.com
- **Website:** ${baseUrl}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
