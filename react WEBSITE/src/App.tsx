import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SegmentsSection } from './components/SegmentsSection';
import { FeeCalculatorSection } from './components/FeeCalculatorSection';
import { PartnersSection } from './components/PartnersSection';
import { CollaboratorsSection } from './components/CollaboratorsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { RulesModal } from './components/RulesModal';
import { RegistrationLookupModal } from './components/RegistrationLookupModal';
import { PartnerInquiryModal } from './components/PartnerInquiryModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { CircuitBackground } from './components/CircuitBackground';
import { Segment, RegistrationData } from './types';

export default function App() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedSegmentId, setSelectedSegmentId] = useState<string | undefined>(undefined);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | undefined>(undefined);

  const [rulesModalSegment, setRulesModalSegment] = useState<Segment | null>(null);
  const [lookupModalOpen, setLookupModalOpen] = useState(false);
  const [partnerInquiryOpen, setPartnerInquiryOpen] = useState(false);

  // Saved Registrations state (Persisted in LocalStorage or initial state)
  const [registrations, setRegistrations] = useState<RegistrationData[]>(() => {
    try {
      const saved = localStorage.getItem('react_registrations_2026');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleOpenRegister = (segmentId?: string, subCategory?: string) => {
    setSelectedSegmentId(segmentId);
    setSelectedSubCategory(subCategory);
    setRegisterModalOpen(true);
  };

  const handleSuccessRegistration = (newReg: RegistrationData) => {
    const updated = [newReg, ...registrations];
    setRegistrations(updated);
    try {
      localStorage.setItem('react_registrations_2026', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#FF7700] selection:text-white relative">
      
      {/* Circuit Pattern Overlay for the Website */}
      <CircuitBackground />
      
      {/* Navigation Bar with All 3 Logos & CTAs */}
      <Navbar
        onOpenRegister={() => handleOpenRegister()}
        onOpenLookup={() => setLookupModalOpen(true)}
      />

      {/* Hero Section with Live Countdown, Stats, and Logos */}
      <Hero
        onOpenRegister={(segId) => handleOpenRegister(segId)}
        onOpenRulebook={() => handleOpenRegister('soccer-bot')}
      />

      {/* About Section */}
      <AboutSection />

      {/* 5 Segments Section (Soccer Bot, Datathon, LFR, Poster, Project Showcase [Junior & Senior]) */}
      <SegmentsSection
        onOpenRegister={(segId, subCat) => handleOpenRegister(segId, subCat)}
        onOpenRulesModal={(segment) => setRulesModalSegment(segment)}
      />

      {/* Interactive Fee Calculator Section */}
      <FeeCalculatorSection
        onOpenRegister={(segId, subCat) => handleOpenRegister(segId, subCat)}
      />

      {/* Partners Section */}
      <PartnersSection
        onOpenPartnerInquiry={() => setPartnerInquiryOpen(true)}
      />

      {/* Collaborators Section */}
      <CollaboratorsSection />

      {/* Schedule & Timeline Section */}
      <ScheduleSection />

      {/* FAQs Section */}
      <FaqSection />

      {/* Footer with Mandatory Social Links & Contact */}
      <Footer
        onOpenRegister={() => handleOpenRegister()}
        onOpenLookup={() => setLookupModalOpen(true)}
      />

      {/* Interactive Registration Modal */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        preselectedSegmentId={selectedSegmentId}
        preselectedSubCategory={selectedSubCategory}
        onSuccessRegistration={handleSuccessRegistration}
      />

      {/* Rulebook Details Modal */}
      <RulesModal
        segment={rulesModalSegment}
        onClose={() => setRulesModalSegment(null)}
        onRegisterFromRules={(segId) => handleOpenRegister(segId)}
      />

      {/* Ticket Lookup Modal */}
      <RegistrationLookupModal
        isOpen={lookupModalOpen}
        onClose={() => setLookupModalOpen(false)}
        registrations={registrations}
      />

      {/* Partner Inquiry Modal */}
      <PartnerInquiryModal
        isOpen={partnerInquiryOpen}
        onClose={() => setPartnerInquiryOpen(false)}
      />

      {/* Floating WhatsApp Chat Widget */}
      <WhatsAppWidget />

    </div>
  );
}
