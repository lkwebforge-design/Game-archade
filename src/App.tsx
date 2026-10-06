/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { Game ModesScannerSection } from './components/Game ModesScannerSection';
import { ProductLabSection } from './components/ProductLabSection';
import { Featured GamesGallerySection } from './components/Featured GamesGallerySection';
import { WhatsAppCTASection } from './components/WhatsAppCTASection';
import { StudioVisitSection } from './components/StudioVisitSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ReelModal } from './components/ReelModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isReelOpen, setIsReelOpen] = useState<boolean>(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false);

  const handleOpenWhatsAppHotline = () => {
    const text = encodeURIComponent(
      "Hello AETHERIA Studio! 👋 I would like to schedule a confidential discovery session."
    );
    window.open(`https://wa.me/15550198374?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-[#070712] text-neutral-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Top Floating Navigation Bar */}
      <Navbar onOpenWhatsAppModal={handleOpenWhatsAppHotline} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero Scene & Value Proposition */}
        <HeroSection onOpenReel={() => setIsReelOpen(true)} />

        {/* Section 2: The Experience & Interactive Gameplay Console */}
        <HowItWorksSection />

        {/* Section 3: Game Modes & The Signature Interactive Biometric X-Ray Scanner */}
        <Game ModesScannerSection onOpenCaseStudy={() => setIsCaseStudyOpen(true)} />

        {/* Section 4: Lounge Gear & Digital Twin Telemetry Testing Stage */}
        <ProductLabSection onScheduleDemo={handleOpenWhatsAppHotline} />

        {/* Section 5: Flagship AAA Featured Games & Portfolio */}
        <Featured GamesGallerySection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 6: WhatsApp High-Converting CTA & Project Pitch Builder */}
        <WhatsAppCTASection />

        {/* Section 7: Global Visit Us (Colombo, Kandy, LA) & Contact Desk */}
        <StudioVisitSection />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenWhatsApp={handleOpenWhatsAppHotline}
      />

      <ReelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />

      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        onOpenWhatsApp={handleOpenWhatsAppHotline}
      />

      {/* Quick WhatsApp Floating Concierge */}
      <WhatsAppFloatingButton />
    </div>
  );
}
