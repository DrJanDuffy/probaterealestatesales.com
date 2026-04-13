import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { buildServiceMetadata, SERVICE_PAGES_BY_SLUG } from '@/lib/service-pages';

const service = SERVICE_PAGES_BY_SLUG['trust-sale-services'];

export const metadata: Metadata = buildServiceMetadata(service);

export default function TrustSaleServicesPage() {
  return <ServiceLandingPage service={service} />;
}
