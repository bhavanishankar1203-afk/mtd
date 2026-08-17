import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { NewConstructionSection } from './components/NewConstructionSection';
import { MiniSplitsSection } from './components/MiniSplitsSection';
import { ProjectGallery } from './components/ProjectGallery';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ConversionBanner } from './components/ConversionBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('New Construction');

  const handleOpenQuoteModal = (serviceName = 'New Construction') => {
    setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1726] text-white">
      {/* Sticky Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal('General Inquiry')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Enhanced High-Impact Hero Section */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onScrollToSection={handleScrollToSection}
        />

        {/* Trust & Capabilities Strip */}
        <TrustStrip />

        {/* Core Services Section */}
        <ServicesSection
          onOpenQuoteModal={() => handleOpenQuoteModal('HVAC Solutions')}
          onScrollToContact={() => handleScrollToSection('contact')}
        />

        {/* Featured: New Construction Focus */}
        <NewConstructionSection
          onOpenQuoteModal={() => handleOpenQuoteModal('New Construction')}
        />

        {/* Featured: Ductless Mini Splits */}
        <MiniSplitsSection
          onOpenQuoteModal={() => handleOpenQuoteModal('Mini Split')}
        />

        {/* Recent Work / Project Gallery with Lightbox */}
        <ProjectGallery />

        {/* 4-Step Process Section */}
        <ProcessSection
          onOpenQuoteModal={() => handleOpenQuoteModal('New Project')}
        />

        {/* Authentic Local Business Story */}
        <AboutSection
          onOpenQuoteModal={() => handleOpenQuoteModal('General Inquiry')}
        />

        {/* Service Area: Shelley & Surrounding Idaho Communities */}
        <ServiceAreaSection
          onOpenQuoteModal={() => handleOpenQuoteModal('Service Area Request')}
        />

        {/* Customer Reviews Section */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Conversion Banner */}
        <ConversionBanner
          onOpenQuoteModal={() => handleOpenQuoteModal('Project Inquiry')}
        />

        {/* Contact & Request a Quote Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyCTA onOpenQuoteModal={() => handleOpenQuoteModal('Mobile Lead')} />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
