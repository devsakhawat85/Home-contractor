/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessJourney } from './components/ProcessJourney';
import { CostCalculator } from './components/CostCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceAreaChecker } from './components/ServiceAreaChecker';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { EstimateModal } from './components/EstimateModal';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [estimateInitialData, setEstimateInitialData] = useState<{
    projectType?: string;
    budgetRange?: string;
    notes?: string;
  }>({});

  const handleOpenEstimate = (data?: {
    projectType?: string;
    budgetRange?: string;
    notes?: string;
  }) => {
    if (data) {
      setEstimateInitialData(data);
    } else {
      setEstimateInitialData({});
    }
    setIsEstimateModalOpen(true);
  };

  const handleSelectServiceForEstimate = (serviceTitle: string) => {
    handleOpenEstimate({
      projectType: serviceTitle,
      notes: `Interested in full consultation for ${serviceTitle}.`,
    });
  };

  const handleApplyCalculatorEstimate = (scopeData: {
    projectType: string;
    budgetRange: string;
    notes: string;
  }) => {
    handleOpenEstimate(scopeData);
  };

  const handleScrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#191919] selection:bg-[#2B3A33] selection:text-[#FAF9F5]">
      {/* Sticky Top Navigation */}
      <Navigation onOpenEstimate={() => handleOpenEstimate()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenEstimate={() => handleOpenEstimate()}
          onExploreWork={handleScrollToPortfolio}
        />

        {/* Trust Credibility Bar */}
        <TrustBar />

        {/* Editorial About Split-Screen Section */}
        <AboutSection onOpenEstimate={() => handleOpenEstimate()} />

        {/* Services Capability Cards & Details */}
        <ServicesSection onSelectServiceForEstimate={handleSelectServiceForEstimate} />

        {/* Featured Projects Architectural Portfolio */}
        <ProjectsGallery onOpenEstimate={() => handleOpenEstimate()} />

        {/* Interactive Before & After Draggable Slider */}
        <BeforeAfterSection />

        {/* Why Choose Us & Operational Standards */}
        <WhyChooseUs onOpenEstimate={() => handleOpenEstimate()} />

        {/* Project Process Roadmap */}
        <ProcessJourney onOpenEstimate={() => handleOpenEstimate()} />

        {/* Interactive Cost & Scope Feasibility Calculator */}
        <CostCalculator onApplyEstimate={handleApplyCalculatorEstimate} />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Service Area & Local Zip Code Availability Checker */}
        <ServiceAreaChecker onOpenEstimate={() => handleOpenEstimate()} />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenEstimate={() => handleOpenEstimate()} />

        {/* Dramatic Final Conversion CTA */}
        <FinalCta onOpenEstimate={() => handleOpenEstimate()} />
      </main>

      {/* Comprehensive Architectural Footer */}
      <Footer onOpenEstimate={() => handleOpenEstimate()} />

      {/* Mobile Sticky Bar (Capped at <= 15% viewport height) */}
      <MobileStickyBar onOpenEstimate={() => handleOpenEstimate()} />

      {/* Multi-Step Lead Estimate Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        initialData={estimateInitialData}
      />
    </div>
  );
}
