import React, { useRef } from 'react';
import { CinematicHero } from './CinematicHero';
import { ModelHeader } from './ModelHeader';
import { ModelWelcome } from './ModelWelcome';
import { ModelProductsGrid } from './ModelProductsGrid';
import { ModelWhyUs } from './ModelWhyUs';
import { ModelInfrastructure } from './ModelInfrastructure';
import { ModelCompliance } from './ModelCompliance';
import { ModelTradeFairs } from './ModelTradeFairs';
import { ModelContact } from './ModelContact';
import { ModelFooter } from './ModelFooter';

interface CinematicPageProps {
  onOpenEnquiry: (topic?: string) => void;
  modalTopic?: string;
}

export const CinematicPage: React.FC<CinematicPageProps> = ({ onOpenEnquiry, modalTopic }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full flex-col min-h-screen bg-surface text-on-surface antialiased selection:bg-secondary selection:text-on-secondary relative">
      {/* 1. Fixed Top Header & Navigation Bar (Fades in when fully zoomed out of the hero) */}
      <div
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 opacity-0 pointer-events-none will-change-[opacity,transform] shadow-sm"
      >
        <ModelHeader onOpenEnquiry={onOpenEnquiry} />
      </div>

      {/* 2. New Cinematic Scroll-Controlled Hero */}
      <CinematicHero onOpenEnquiry={onOpenEnquiry} headerRef={headerRef} />

      {/* Main Content Area Inherited 100% From Design 1 */}
      <main className="w-full flex-1">
        {/* 3. Welcome to Haústier Products */}
        <ModelWelcome />

        {/* 4. OUR PRODUCTS: Signature 4-Column 2-Row Checkerboard Grid */}
        <ModelProductsGrid onOpenEnquiry={onOpenEnquiry} />

        {/* 5. WHY US: Core Pillars & Synthesis of Technology and Craftsmanship */}
        <ModelWhyUs />

        {/* 6. INFRASTRUCTURE: In-House Facilities & Workshop Floor */}
        <ModelInfrastructure />

        {/* 7. COMPLIANCE & CSR: Ethical Workplace & Responsible Sourcing */}
        <ModelCompliance />

        {/* 8. INTERNATIONAL TRADE FAIRS: Interzoo & Zoomark Global Reach */}
        <ModelTradeFairs onOpenEnquiry={onOpenEnquiry} />

        {/* 9. CONTACT US: Google Map Location, Commercial Contact & Enquiry Form */}
        <ModelContact initialTopic={modalTopic} />
      </main>

      {/* 10. Footer: Quick Links, Contact Information & Copyright */}
      <ModelFooter onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
};
