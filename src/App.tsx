import React, { useState, useEffect } from 'react';
import { ModelHeader } from './components/ModelHeader';
import { ModelHeroSlider } from './components/ModelHeroSlider';
import { ModelWelcome } from './components/ModelWelcome';
import { ModelProductsGrid } from './components/ModelProductsGrid';
import { ModelWhyUs } from './components/ModelWhyUs';
import { ModelInfrastructure } from './components/ModelInfrastructure';
import { ModelCompliance } from './components/ModelCompliance';
import { ModelTradeFairs } from './components/ModelTradeFairs';
import { ModelContact } from './components/ModelContact';
import { ModelFooter } from './components/ModelFooter';
import { EnquiryModal } from './components/EnquiryModal';
import { Design2Page } from './components/Design2Page';
import { CinematicPage } from './components/CinematicPage';

export type DesignVersion = '1' | '2' | '3';

function getInitialDesign(): DesignVersion {
  if (typeof window === 'undefined') return '1';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();

  if (
    path.includes('cinematic') ||
    path.includes('design-3') ||
    path.includes('design3') ||
    hash.includes('cinematic') ||
    hash.includes('design-3') ||
    hash.includes('design3') ||
    search.includes('design=3') ||
    search.includes('design=cinematic')
  ) {
    return '3';
  }

  if (
    path.includes('design-2') ||
    path.includes('design2') ||
    hash.includes('design-2') ||
    hash.includes('design2') ||
    search.includes('design=2')
  ) {
    return '2';
  }
  return '1';
}

export const App: React.FC = () => {
  const [activeDesign, setActiveDesign] = useState<DesignVersion>(getInitialDesign);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleLocationChange = () => {
      setActiveDesign(getInitialDesign());
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const switchDesign = (design: DesignVersion) => {
    setActiveDesign(design);
    let newPath = '/';
    if (design === '2') newPath = '/design-2';
    if (design === '3') newPath = '/cinematic';
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (topic?: string) => {
    setModalTopic(topic);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalTopic(undefined);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased flex flex-col selection:bg-secondary selection:text-on-secondary relative">
      {/* Floating Design Comparison Switcher Dock */}
      <aside
        aria-label="Design version switcher"
        className="fixed bottom-5 right-5 z-[9999] flex items-center bg-[#191513]/95 backdrop-blur-md text-white p-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.45)] border border-white/20 select-none transition-all duration-300 hover:scale-105"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50 pl-3 pr-2 font-mono hidden sm:inline-block">
          Compare:
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => switchDesign('1')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              activeDesign === '1'
                ? 'bg-[#8b5a3c] text-white shadow-md font-bold'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            Design 1
          </button>
          <button
            type="button"
            onClick={() => switchDesign('2')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              activeDesign === '2'
                ? 'bg-[#dda129] text-[#191513] shadow-md font-bold'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            Design 2
          </button>
          <button
            type="button"
            onClick={() => switchDesign('3')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              activeDesign === '3'
                ? 'bg-antique-brass text-[#121e1a] shadow-md font-bold'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            Cinematic
          </button>
        </div>
      </aside>

      {/* Conditionally Render Selected Design */}
      {activeDesign === '2' ? (
        /* ================= DESIGN 2 ROUTE: EXACT STITCH SCREEN ================= */
        <main className="w-full flex-1">
          <Design2Page onOpenEnquiry={handleOpenModal} />
        </main>
      ) : activeDesign === '3' ? (
        /* ================= DESIGN 3 ROUTE: CINEMATIC SCROLL HERO + DESIGN 1 ================= */
        <CinematicPage onOpenEnquiry={handleOpenModal} modalTopic={modalTopic} />
      ) : (
        /* ================= DESIGN 1 ROUTE: PRESERVED ORIGINAL ================= */
        <>
          {/* 1. Header: Top Logo/Phone Bar + Full Width Menu (Exact Model Tanners Layout) */}
          <ModelHeader onOpenEnquiry={handleOpenModal} />

          {/* Main Content Area */}
          <main className="w-full flex-1">
            {/* 2. Full-Width Hero Slider (Exact Model Tanners Hero Slideshow) */}
            <ModelHeroSlider />

            {/* 3. Welcome to Haústier Products (Exact Model Tanners Welcome Section) */}
            <ModelWelcome />

            {/* 4. OUR PRODUCTS: Signature 4-Column 2-Row Checkerboard Grid */}
            <ModelProductsGrid onOpenEnquiry={handleOpenModal} />

            {/* 5. WHY US: Core Pillars & Synthesis of Technology and Craftsmanship */}
            <ModelWhyUs />

            {/* 6. INFRASTRUCTURE: In-House Facilities & Workshop Floor */}
            <ModelInfrastructure />

            {/* 7. COMPLIANCE & CSR: Ethical Workplace & Responsible Sourcing */}
            <ModelCompliance />

            {/* 8. INTERNATIONAL TRADE FAIRS: Interzoo & Zoomark Global Reach */}
            <ModelTradeFairs onOpenEnquiry={handleOpenModal} />

            {/* 9. CONTACT US: Google Map Location, Commercial Contact & Enquiry Form */}
            <ModelContact initialTopic={modalTopic} />
          </main>

          {/* 10. Footer: Quick Links, Contact Information & Copyright (Exact Model Tanners Footer) */}
          <ModelFooter onOpenEnquiry={handleOpenModal} />
        </>
      )}

      {/* Quick B2B Enquiry Drawer / Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        presetTopic={modalTopic}
      />
    </div>
  );
};

export default App;

