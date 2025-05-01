
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/Problem';
import SolutionSection from '@/components/Solution';
import BenefitsSection from '@/components/Benefits';
import ForProvidersSection from '@/components/ForProviders';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <ForProvidersSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
