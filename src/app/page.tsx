import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import PropertyValuationCalculator from '@/components/PropertyValuationCalculator';
import FAQ from '@/components/FAQ';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <FeaturedProperties />
      <PropertyValuationCalculator />
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <ContactSection />
      <SchemaMarkup type="home" />
    </main>
  );
}
