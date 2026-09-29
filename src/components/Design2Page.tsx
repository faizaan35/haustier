import React, { useState } from 'react';
import { Phone, Mail, Menu, X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/haustierData';

interface Design2PageProps {
  onOpenEnquiry?: (topic?: string) => void;
}

const HERO_IMAGES = [
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1XFC4MXlQonhGj6DLxepeDmGCY9Qu6MIUibpL_AZ7z4gbjF8V7E0-PdXEFGfBxYE_d7LM_aL8ArOrHTjzHouS0HPSjAI8ELguc9RmK5N7wFNn5pQ2c7U9ZgE50BUdcet7IAJe26_TOo7pO922k7r3twtqGcCtAK9vu-3e88WCprj8MKVhDPn0QbEEDjsskRHxY1Csbs_8qGEDMP0LPitBOAJzy8219EiBMzvejdPnXQyG959leorVA8NA',
    alt: 'Handcrafted Italian full-grain leather hides, brass hardware and saddlery workshop bench',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1XtybP-pZ1nkNrak1WXA_vBp0J5TWQhZHHpGJSakov7EZFm2Q_EkVAGM6aB-lrAWHgvHNVslhJpAanLktlZopAWdjZPvG3LU9oXD2j4om3gcnk7aMwmf_7jzl1wUxi7m-ZJuPRwCTPXvmNcl-SDNKVIaBdEWFtUkHLAr-L-ETaRhSOMvXqpesHy9oUicNJA_c5Jr3VdovRelI_zCh37egetIwKDGS7azXxFwJA1cu3xAnueFJj5CYCdlg',
    alt: 'Editorial studio macro photograph of bespoke handcrafted saddle leather collar with solid brass hardware',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1XrEMBmdJi1M-KvB4WvFpcb6M3oHzrK8CVaHOvWrq2JyDXhV2HHxYO6u0IPVZEkFwUd8QtRlT99kmxk0Ev94dHGPpcrfaO-d3-tzNjXMKdPcp-odFMdJwkK-Q-nXHzbTVFirVJ69HmphtlX2tJIqG8OYJ5fXFCjRE2tz4fWKfgbH7Y4X0Gngm2WSw3y1gv7Xb1vLon1lg4D1wHqiEphpo_hY7pTvIKsvqSG8BZfaYf6kHqXN8Z7Wan8gZw',
    alt: 'Artisan beveling and hand-stitching thick bridle leather dog lead at workbench',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1WZ_gOlYlLfiy2B2b3Rj-nBj-bFpUfuC9pBwjNWLDzjip6m0SL8PZCPUDNycyo1lOHhZ1RzabcSr0GIZiWDAgrN2rqe6DMVNR4DFIyxjRAjbxk542nU18968BdvzK7o9dhMascIsQIUYo0Dt0Ae4jsbo4waNvpTFISS4dATzeuXIYToahlGB0kMK4m22PNzf_FHc-mMoI_yzVB0ZQjZRp69-aOISFTSiRROj_1yPT6s9bnZF7E8yNHZnw',
    alt: 'Precision leather workshop with German Adler heavy-duty stitching machine',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1VX5WlxKs37azJ1GXMdC0I3MH56765CcfnDK_OAYbekfMkzCrMfoNeQN5-mA1qerjCAbDOPJMYSz9ltvxJEkTa6K8swAi20c5uEuBT-G6YkW2mjZdPFnGgzSQRpn3j4SJpn6JFn0IfsmY-591k47c3iiNxiJsObAwLskRZxVcDwkl_PTJKFV3X_MXvHO5aLyrn73ba1Hwm2n61ROXy7mnFEhFJX6k8UMWhqeRxUUa-fwcG5quFpbnOf-6g',
    alt: 'Editorial studio photography of sculptural dog with bespoke saddle leather collar',
  },
];

export const Design2Page: React.FC<Design2PageProps> = ({ onOpenEnquiry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', targetId: 'top' },
    { label: 'About Us', targetId: 'welcome' },
    { label: 'Products', targetId: 'products' },
    { label: 'Craftsmanship', targetId: 'craft' },
    { label: 'Infrastructure', targetId: 'craft' },
    { label: 'Contact Us', targetId: 'contact' },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased text-[#241e1b] bg-[#fbf9f3] selection:bg-[#d79624]/20 selection:text-[#241e1b]">
      {/* =========================================================================
          1. BEGIN: TopHeader with Navigation Bar
         ========================================================================= */}
      <header className="w-full bg-[#ffffff] border-b border-[#e5dfd5] sticky top-0 z-50 shadow-sm transition-all duration-300">
        {/* Tier 1: Logo & Direct Contacts */}
        <div className="max-w-[1400px] mx-auto py-3.5 px-4 sm:px-8 lg:px-14 flex items-center justify-between gap-4">
          {/* Brand Logo / Wordmark */}
          <a
            className="flex items-center gap-3 group text-decoration-none cursor-pointer"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('top');
            }}
          >
            {/* Stylized Monogram Shield / Emblem */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#241e1b] text-[#f5f3ed] font-serif flex items-center justify-center font-bold text-xl sm:text-2xl tracking-tighter shadow-sm border border-[#8b5a3c]/30 group-hover:bg-[#8b5a3c] transition-colors duration-300">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#241e1b] leading-none">
                HAÚSTIER
              </span>
              <span className="text-[9px] sm:text-[9.5px] uppercase font-semibold text-[#8b5a3c] tracking-[0.18em] mt-1 font-sans">
                PRODUCTS · EXPORT MANUFACTURE
              </span>
            </div>
          </a>

          {/* Direct Contact CTAs & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-[#d79624]/80 rounded-sm text-[#241e1b] hover:bg-[#d79624]/10 transition-all duration-200 text-xs sm:text-sm font-medium tracking-wide shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              href={`tel:${COMPANY_INFO.contact.phone.replace(/[^+\d]/g, '')}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#d79624]" />
              <span className="text-[#241e1b] font-semibold font-sans tracking-tight text-xs sm:text-[14px]">
                {COMPANY_INFO.contact.phone}
              </span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
              className="hidden md:inline-flex items-center gap-2 text-xs font-mono text-[#554b45] hover:text-[#8b5a3c] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#8b5a3c]" />
              <span>{COMPANY_INFO.contact.salesEmail}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#241e1b] hover:bg-[#f5f3ed] border border-[#e5dfd5] rounded-sm transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Tier 2: Navigation Bar (Dark Espresso Bar matching Stitch Design System) */}
        <nav className="w-full bg-[#241e1b] text-[#f5f3ed] border-t border-[#8b5a3c]/30 shadow-md">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between">
            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className="px-4 py-3 text-xs uppercase tracking-wider font-semibold text-[#f5f3ed]/90 hover:text-[#dda129] hover:bg-[#191513] transition-all cursor-pointer font-sans"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Action Button */}
            <div className="hidden lg:block py-2">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Export Sourcing Inquiry')}
                className="px-5 py-2 bg-[#dda129] text-[#191513] hover:bg-[#f5f3ed] font-sans text-xs uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
              >
                START AN ENQUIRY
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#191513] border-t border-[#8b5a3c]/30 px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className="w-full text-left py-2.5 text-xs uppercase tracking-wider text-[#f5f3ed] border-b border-white/5 flex items-center justify-between hover:text-[#dda129] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#dda129]" />
                </button>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry && onOpenEnquiry('Design 2 Mobile Inquiry');
                  }}
                  className="w-full py-2.5 bg-[#dda129] text-[#191513] text-xs uppercase tracking-widest font-bold font-sans"
                >
                  START AN ENQUIRY
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
      {/* END: TopHeader with Navigation Bar */}

      {/* =========================================================================
          2. BEGIN: HeroCarouselSection
         ========================================================================= */}
      <section className="relative w-full bg-[#191513] overflow-hidden" id="top">
        {/* Hero Slide Visual Canvas */}
        <div className="relative w-full h-[380px] sm:h-[480px] md:h-[620px] lg:h-[700px] overflow-hidden">
          <img
            alt={HERO_IMAGES[currentSlide].alt}
            src={HERO_IMAGES[currentSlide].url}
            className="w-full h-full object-cover object-center brightness-[0.82] contrast-[1.08] transition-all duration-700 ease-out"
          />
          {/* Subtle Vignette and Shadow Gradient matching modeltanners.com atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#191513]/80 via-transparent to-[#191513]/30 pointer-events-none"></div>

          {/* Carousel Navigation Left Arrow */}
          <button
            aria-label="Previous Slide"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all duration-200 shadow-xl backdrop-blur-sm group focus:outline-none cursor-pointer"
            onClick={prevSlide}
            type="button"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Carousel Navigation Right Arrow */}
          <button
            aria-label="Next Slide"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all duration-200 shadow-xl backdrop-blur-sm group focus:outline-none cursor-pointer"
            onClick={nextSlide}
            type="button"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Centered Pagination Dots (Matching 5 dots on modeltanners.com) */}
        <div className="w-full bg-[#fbf9f3] py-3 flex items-center justify-center gap-2 border-b border-[#e5dfd5]">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                idx === currentSlide ? 'bg-[#241e1b]' : 'bg-[#e5dfd5] hover:bg-[#241e1b]/60'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
      {/* END: HeroCarouselSection */}

      {/* =========================================================================
          3. BEGIN: WelcomeIntroSection
         ========================================================================= */}
      <section className="w-full py-14 md:py-20 px-6 md:px-12 lg:px-20 bg-[#fbf9f3]" id="welcome">
        <div className="max-w-[1240px] mx-auto text-left">
          {/* Section Title */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#241e1b] uppercase tracking-normal mb-6">
            WELCOME TO HAÚSTIER GROUP
          </h1>

          {/* Editorial Narrative Paragraphs (B2B Export Context) */}
          <div className="space-y-4 text-[#4a423d] text-sm md:text-[15px] leading-relaxed max-w-5xl">
            <p>
              HAÚSTIER Group was established with deep roots in Kanpur's iconic leather crafting corridor, bringing together master crafts-lineage and computerized export manufacturing. Operating specialized manufacturing facilities across Kanpur, HAÚSTIER functions as an institutional OEM/ODM manufacturing engine for premier European, North American, and Scandinavian pet product and saddlery brands.
            </p>
            <p>
              Commitment, Creativity, and Professionalism have made HAÚSTIER a benchmark in the processing of vegetable-tanned bovine and buffalo hides for canine collars, harnesses, leads, equestrian saddlery, and luxury lifestyle accessories. The Group stands out through technological innovation and the capability to anticipate international styling trends, backed by 35+ years of export mastery.
            </p>
          </div>

          {/* "Read More" Button (Classic Outlined Cognac styling from reference) */}
          <div className="mt-8">
            <button
              onClick={() => scrollToSection('craft')}
              className="inline-block px-7 py-2.5 border border-[#d79624] text-[#d79624] hover:bg-[#d79624] hover:text-white transition-all duration-300 font-sans text-xs md:text-sm tracking-wider uppercase font-semibold cursor-pointer"
            >
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* END: WelcomeIntroSection */}

      {/* =========================================================================
          4. BEGIN: ProductsTitleBanner
         ========================================================================= */}
      <section className="w-full bg-[#352c26] text-white py-4 relative border-t-4 border-[#241e1b] shadow-inner text-center" id="products">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider text-[#f5f3ed]">
            OUR PRODUCTS
          </h2>
          {/* Golden Accent Bar directly beneath heading */}
          <div className="w-28 md:w-36 h-1 bg-[#d79624] mx-auto mt-2"></div>
        </div>
      </section>
      {/* END: ProductsTitleBanner */}

      {/* =========================================================================
          5. BEGIN: ProductTiles2x2Grid (Signature 2x2 Checkerboard)
         ========================================================================= */}
      <section className="w-full bg-[#fbf9f3]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          {/* ================= ROW 1 / TILE 1 ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[290px] lg:min-h-[320px]">
            {/* Left Sub-Block: Golden Cognac Content Box */}
            <div className="bg-[#dda129] p-8 md:p-10 flex flex-col justify-center items-center text-center text-white">
              <h3 className="font-sans font-extrabold text-xl md:text-2xl uppercase tracking-wide leading-tight mb-2 drop-shadow-sm">
                LEATHER BAGS &amp; ACCESSORIES
              </h3>
              <p className="text-xs text-white/90 font-medium mb-6 max-w-[240px]">
                Institutional export quality vegetable-tanned duffles, pouches &amp; carriers.
              </p>
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Leather Bags & Accessories')}
                className="inline-block px-6 py-2 border-2 border-white text-white font-sans text-xs uppercase font-bold tracking-widest hover:bg-white hover:text-[#dda129] transition-all duration-200 cursor-pointer"
              >
                MORE
              </button>
            </div>
            {/* Right Sub-Block: Editorial Product Photo */}
            <div className="relative overflow-hidden bg-[#241e1b] group h-[260px] sm:h-auto">
              <img
                alt="Handmade leather bags, accessories, hides and brass buckles"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XFC4MXlQonhGj6DLxepeDmGCY9Qu6MIUibpL_AZ7z4gbjF8V7E0-PdXEFGfBxYE_d7LM_aL8ArOrHTjzHouS0HPSjAI8ELguc9RmK5N7wFNn5pQ2c7U9ZgE50BUdcet7IAJe26_TOo7pO922k7r3twtqGcCtAK9vu-3e88WCprj8MKVhDPn0QbEEDjsskRHxY1Csbs_8qGEDMP0LPitBOAJzy8219EiBMzvejdPnXQyG959leorVA8NA"
              />
            </div>
          </div>

          {/* ================= ROW 1 / TILE 2 ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[290px] lg:min-h-[320px]">
            {/* Left Sub-Block: Golden Cognac Content Box */}
            <div className="bg-[#dda129] p-8 md:p-10 flex flex-col justify-center items-center text-center text-white">
              <h3 className="font-sans font-extrabold text-xl md:text-2xl uppercase tracking-wide leading-tight mb-2 drop-shadow-sm">
                COLLARS &amp; HARNESSES
              </h3>
              <p className="text-xs text-white/90 font-medium mb-6 max-w-[240px]">
                Engineered full-grain bridle leather with solid hand-cast brass hardware.
              </p>
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Collars & Harnesses')}
                className="inline-block px-6 py-2 border-2 border-white text-white font-sans text-xs uppercase font-bold tracking-widest hover:bg-white hover:text-[#dda129] transition-all duration-200 cursor-pointer"
              >
                MORE
              </button>
            </div>
            {/* Right Sub-Block: Editorial Dog Collar Photo */}
            <div className="relative overflow-hidden bg-[#241e1b] group h-[260px] sm:h-auto">
              <img
                alt="Macro suspended handcrafted saddle leather dog collar with solid brass hardware"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XtybP-pZ1nkNrak1WXA_vBp0J5TWQhZHHpGJSakov7EZFm2Q_EkVAGM6aB-lrAWHgvHNVslhJpAanLktlZopAWdjZPvG3LU9oXD2j4om3gcnk7aMwmf_7jzl1wUxi7m-ZJuPRwCTPXvmNcl-SDNKVIaBdEWFtUkHLAr-L-ETaRhSOMvXqpesHy9oUicNJA_c5Jr3VdovRelI_zCh37egetIwKDGS7azXxFwJA1cu3xAnueFJj5CYCdlg"
              />
            </div>
          </div>

          {/* ================= ROW 2 / TILE 3 (Mirrored: Photo Left, Box Right) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[290px] lg:min-h-[320px]">
            {/* Left Sub-Block: Artisan Hand-stitching Photo */}
            <div className="relative overflow-hidden bg-[#241e1b] group h-[260px] sm:h-auto order-2 sm:order-1">
              <img
                alt="Artisan beveling and hand-stitching thick bridle leather dog lead at workbench"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XrEMBmdJi1M-KvB4WvFpcb6M3oHzrK8CVaHOvWrq2JyDXhV2HHxYO6u0IPVZEkFwUd8QtRlT99kmxk0Ev94dHGPpcrfaO-d3-tzNjXMKdPcp-odFMdJwkK-Q-nXHzbTVFirVJ69HmphtlX2tJIqG8OYJ5fXFCjRE2tz4fWKfgbH7Y4X0Gngm2WSw3y1gv7Xb1vLon1lg4D1wHqiEphpo_hY7pTvIKsvqSG8BZfaYf6kHqXN8Z7Wan8gZw"
              />
            </div>
            {/* Right Sub-Block: Golden Cognac Content Box */}
            <div className="bg-[#dda129] p-8 md:p-10 flex flex-col justify-center items-center text-center text-white order-1 sm:order-2">
              <h3 className="font-sans font-extrabold text-xl md:text-2xl uppercase tracking-wide leading-tight mb-2 drop-shadow-sm">
                SAFETY LEADS &amp; TACTICAL LEASHES
              </h3>
              <p className="text-xs text-white/90 font-medium mb-6 max-w-[240px]">
                Hand-burnished bevel edges, heavy waxed thread and high-tensile hardware.
              </p>
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Safety Leads & Tactical Leashes')}
                className="inline-block px-6 py-2 border-2 border-white text-white font-sans text-xs uppercase font-bold tracking-widest hover:bg-white hover:text-[#dda129] transition-all duration-200 cursor-pointer"
              >
                MORE
              </button>
            </div>
          </div>

          {/* ================= ROW 2 / TILE 4 (Mirrored: Photo Left, Box Right) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[290px] lg:min-h-[320px]">
            {/* Left Sub-Block: Adler Precision Machinery Photo */}
            <div className="relative overflow-hidden bg-[#241e1b] group h-[260px] sm:h-auto order-2 sm:order-1">
              <img
                alt="Precision leather workshop with German Adler heavy-duty stitching machine"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WZ_gOlYlLfiy2B2b3Rj-nBj-bFpUfuC9pBwjNWLDzjip6m0SL8PZCPUDNycyo1lOHhZ1RzabcSr0GIZiWDAgrN2rqe6DMVNR4DFIyxjRAjbxk542nU18968BdvzK7o9dhMascIsQIUYo0Dt0Ae4jsbo4waNvpTFISS4dATzeuXIYToahlGB0kMK4m22PNzf_FHc-mMoI_yzVB0ZQjZRp69-aOISFTSiRROj_1yPT6s9bnZF7E8yNHZnw"
              />
            </div>
            {/* Right Sub-Block: Golden Cognac Content Box */}
            <div className="bg-[#dda129] p-8 md:p-10 flex flex-col justify-center items-center text-center text-white order-1 sm:order-2">
              <h3 className="font-sans font-extrabold text-xl md:text-2xl uppercase tracking-wide leading-tight mb-2 drop-shadow-sm">
                UPHOLSTERY &amp; SADDLERY LEATHER
              </h3>
              <p className="text-xs text-white/90 font-medium mb-6 max-w-[240px]">
                Bovine &amp; buffalo hides processed for luxury pet travel accessories and saddlery.
              </p>
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Upholstery & Saddlery Leather')}
                className="inline-block px-6 py-2 border-2 border-white text-white font-sans text-xs uppercase font-bold tracking-widest hover:bg-white hover:text-[#dda129] transition-all duration-200 cursor-pointer"
              >
                MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* END: ProductTiles2x2Grid */}

      {/* =========================================================================
          6. BEGIN: HorizontalDarkNavStrip (Model Tanners Horizontal Divider Bar)
         ========================================================================= */}
      <div className="w-full bg-[#151210] border-y border-white/10 text-white py-3.5 px-4 shadow-sm" id="sub-nav">
        <div className="max-w-[1300px] mx-auto flex flex-wrap items-center justify-center gap-y-2 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase font-sans">
          <button onClick={() => scrollToSection('top')} className="px-3 hover:text-[#d79624] transition-colors cursor-pointer">
            HOME
          </button>
          <span className="text-[#d79624]/60 select-none">|</span>
          <button onClick={() => scrollToSection('welcome')} className="px-3 hover:text-[#d79624] transition-colors cursor-pointer">
            ABOUT US
          </button>
          <span className="text-[#d79624]/60 select-none">|</span>
          <button onClick={() => scrollToSection('products')} className="px-3 hover:text-[#d79624] transition-colors cursor-pointer">
            PRODUCTS
          </button>
          <span className="text-[#d79624]/60 select-none">|</span>
          <button onClick={() => scrollToSection('craft')} className="px-3 hover:text-[#d79624] transition-colors cursor-pointer">
            INFRASTRUCTURE
          </button>
          <span className="text-[#d79624]/60 select-none">|</span>
          <button onClick={() => scrollToSection('craft')} className="px-3 hover:text-[#d79624] transition-colors cursor-pointer">
            CRAFTSMANSHIP
          </button>
          <span className="text-[#d79624]/60 select-none">|</span>
          <button onClick={() => scrollToSection('contact')} className="px-3 hover:text-[#d79624] transition-colors cursor-pointer">
            CONTACT US
          </button>
        </div>
      </div>
      {/* END: HorizontalDarkNavStrip */}

      {/* =========================================================================
          7. BEGIN: CraftsmanshipProcessSection (4-Panel Process from Stitch)
         ========================================================================= */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-[#f5f3ed] border-b border-[#e5dfd5]" id="craft">
        <div className="max-w-[1300px] mx-auto">
          {/* Section Title and Subtitle */}
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8b5a3c] font-sans">
              SYNTHESIS OF TECHNOLOGY &amp; CRAFT
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#241e1b] mt-1 font-normal">
              Master Manufacture: From Hide to Finished Article
            </h2>
            <div className="w-20 h-0.5 bg-[#d79624] mx-auto mt-3"></div>
          </div>

          {/* Feature Image Displaying 4-Panel Leather Process */}
          <div className="rounded-sm overflow-hidden border border-[#e5dfd5] shadow-md bg-white">
            <img
              alt="HAÚSTIER 4-Panel Process: 01 Raw Leather, 02 Formation, 03 Collar, 04 Craftsmanship"
              className="w-full h-auto object-cover block"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBebsNDZ11brp-pxk6D2PjQei75cpVnawXBe9eVG21X9nAyAF6BkopFAoknO5lLMV8abVy7neMVdfiZQiMAGwH-y8Yh3aVDuSKwVDisMY176Z7-ZSCgWzcB1pQxX8Wb-APqAqBz7i5h1ts_ZtHKyTGw7H1FFT58Xe207J6fCi7z9Lyf4yoGcP70G_frk0ros_wnodq_KPKFbk6uHR2IOy21m1RoIhuXaB3By9o4FQi7V3MGr5pJbjJr2X9mZDIp4v-C7Q"
            />
            {/* Descriptive Legend / Metadata Below Process Image */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e5dfd5] bg-[#ffffff] text-left p-6">
              <div className="p-3">
                <span className="text-[11px] font-bold text-[#8b5a3c] uppercase tracking-wider block">
                  01 Raw Materials
                </span>
                <p className="text-xs text-[#554b45] mt-1 leading-relaxed">
                  Full-grain vegetable-tanned hides selected for tensile durability.
                </p>
              </div>
              <div className="p-3">
                <span className="text-[11px] font-bold text-[#8b5a3c] uppercase tracking-wider block">
                  02 Formation
                </span>
                <p className="text-xs text-[#554b45] mt-1 leading-relaxed">
                  Hydraulic die-cutting and computerized bevel profiling.
                </p>
              </div>
              <div className="p-3">
                <span className="text-[11px] font-bold text-[#8b5a3c] uppercase tracking-wider block">
                  03 Engineered Hardware
                </span>
                <p className="text-xs text-[#554b45] mt-1 leading-relaxed">
                  Solid sand-cast brass hardware tested to high break strain.
                </p>
              </div>
              <div className="p-3">
                <span className="text-[11px] font-bold text-[#8b5a3c] uppercase tracking-wider block">
                  04 Master Finishing
                </span>
                <p className="text-xs text-[#554b45] mt-1 leading-relaxed">
                  French waxed linen hand-tacking and hand-burnished edge sealing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: CraftsmanshipProcessSection */}

      {/* =========================================================================
          8. BEGIN: FooterContentAndMap (2-Column Quick Links & Map Layout)
         ========================================================================= */}
      <footer className="w-full bg-[#1c1714] text-[#f5f3ed] py-14 px-6 md:px-12 lg:px-20 border-t border-black/40" id="contact">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Quick Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-6 border-b border-white/10 pb-3">
              Quick Links
            </h3>
            <ul className="space-y-3 font-sans text-sm text-[#c8bfb7]">
              <li>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Canine Leather Collars & Harnesses')}
                  className="hover:text-[#d79624] transition-colors duration-200 flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="text-[#d79624] text-xs">›</span> Canine Leather Collars &amp; Harnesses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Engineered Training Leads & Leashes')}
                  className="hover:text-[#d79624] transition-colors duration-200 flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="text-[#d79624] text-xs">›</span> Engineered Training Leads &amp; Leashes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Saddlery Hardware & Cast Solid Brass')}
                  className="hover:text-[#d79624] transition-colors duration-200 flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="text-[#d79624] text-xs">›</span> Saddlery Hardware &amp; Cast Solid Brass
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Pet Travel Bags, Bedding & Caddies')}
                  className="hover:text-[#d79624] transition-colors duration-200 flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="text-[#d79624] text-xs">›</span> Pet Travel Bags, Bedding &amp; Caddies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Vegetable Tannery Drum Specifications')}
                  className="hover:text-[#d79624] transition-colors duration-200 flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="text-[#d79624] text-xs">›</span> Vegetable Tannery Drum Specifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('International Safety Testing')}
                  className="hover:text-[#d79624] transition-colors duration-200 flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="text-[#d79624] text-xs">›</span> REACH &amp; International Safety Testing
                </button>
              </li>
            </ul>

            {/* Export Accreditations Badge Row */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-[11px] uppercase tracking-wider text-[#a0948b] font-mono">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm">35+ Years Experience</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm">In-House Facilities</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm">Direct Export Supply</span>
            </div>
          </div>

          {/* Right Column: Location & Google Map Card (Exact Model Tanners map widget) */}
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-6 border-b border-white/10 pb-3">
              Location
            </h3>
            {/* Styled Map Preview Card */}
            <div className="relative w-full rounded border border-white/15 overflow-hidden shadow-2xl bg-[#e5e3df] text-[#241e1b]">
              {/* Map Header Banner */}
              <div className="p-3 bg-white/95 text-xs font-semibold text-[#241e1b] flex items-center justify-between border-b border-[#e5dfd5]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span>HAÚSTIER Works · Jajmau &amp; Industrial Corridor</span>
                </div>
                <a
                  className="text-blue-600 hover:underline text-[11px]"
                  href="https://maps.google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open Map ↗
                </a>
              </div>

              {/* Embedded Google Maps View */}
              <iframe
                title="HAÚSTIER PRODUCTS Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28590.28!2d80.375!3d26.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c470000000001%3A0x1!2sJajmau%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1609236692610!5m2!1sen!2sin"
                className="w-full h-56 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Address Text Box */}
              <div className="p-4 bg-white text-xs text-[#4b433e] border-t border-[#e5dfd5] flex flex-col gap-1">
                <span className="font-bold text-[#241e1b]">Export Headquarters &amp; Factory Works:</span>
                <span>{COMPANY_INFO.location.fullAddress}</span>
                <span className="text-[11px] text-[#8b5a3c] font-medium mt-1">
                  Direct Logistics: Inland Container Depots &amp; JNPT / Nhava Sheva Mumbai Port
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* END: FooterContentAndMap */}

      {/* =========================================================================
          9. BEGIN: CopyrightRibbon (Full-Width Golden Ochre Bar)
         ========================================================================= */}
      <div className="w-full bg-[#dda129] py-3.5 px-4 text-center border-t border-[#d79624]/40">
        <p className="text-xs sm:text-sm font-semibold text-[#1a140b] tracking-wide font-sans">
          © [{new Date().getFullYear()}] HAÚSTIER Group | Leather Exporters · Kanpur, India | All Rights Reserved
        </p>
      </div>
      {/* END: CopyrightRibbon */}
    </div>
  );
};
