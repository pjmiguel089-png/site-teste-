import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { ServicesSection } from './components/ServicesSection';
import { Stats } from './components/Stats';
import { CasesSection } from './components/CasesSection';
import { RoiCalculator } from './components/RoiCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [preFilledRevenue, setPreFilledRevenue] = useState<string>('');
  const [preFilledInvestment, setPreFilledInvestment] = useState<string>('');

  const scrollToContact = () => {
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToContact();
  };

  const handlePreFillFromCalculator = (revenue: string, investment: string) => {
    setPreFilledRevenue(revenue);
    setPreFilledInvestment(investment);
    setSelectedService('Tráfego Pago & Performance Escalar');
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F1F5F9] selection:bg-[#2563EB]/40 selection:text-white font-sans antialiased relative">
      {/* Fixed Navigation */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Area */}
      <main>
        {/* 1. Início / Hero Section */}
        <Hero onOpenContact={scrollToContact} />

        {/* Brand & Partner Credentials */}
        <Partners />

        {/* 2. Serviços Section (6 cards + deep dive modal) */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* Statistics Impact (Count-up animation) */}
        <Stats />

        {/* 3. Cases & Depoimentos Section */}
        <CasesSection onOpenContact={scrollToContact} />

        {/* Interactive Growth & ROI Simulator */}
        <RoiCalculator onPreFillContact={handlePreFillFromCalculator} />

        {/* 4. Contato Section */}
        <ContactSection
          preFilledService={selectedService}
          preFilledRevenue={preFilledRevenue}
          preFilledInvestment={preFilledInvestment}
        />
      </main>

      {/* Global Agency Footer */}
      <Footer />

      {/* Floating Action Button (WhatsApp with pulse) */}
      <WhatsAppButton />
    </div>
  );
}
