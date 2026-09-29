import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/haustierData';
import { Menu, X, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About Us', href: '#about-section' },
    { label: 'Products', href: '#products-section' },
    { label: 'Infrastructure', href: '#infrastructure-section' },
    { label: 'Why Us', href: '#why-us-section' },
    { label: 'Trade Fairs', href: '#trade-section' },
    { label: 'Contact Us', href: '#contact-section' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(18,30,26,0.06)] border-b border-outline-variant/30">
      {/* Top Technical Notification Bar */}
      <div className="bg-racing-dark text-warm-cream py-1.5 px-4 sm:px-8 lg:px-14 border-b border-primary/40">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs font-sans tracking-widest uppercase">
          <p className="text-antique-brass truncate font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-saddle-cognac animate-pulse"></span>
            MANUFACTURER &amp; EXPORTER · KANPUR, INDIA · 35+ YEARS INDUSTRY EXPERIENCE · INTERZOO &amp; ZOOMARK EXHIBITOR
          </p>
          <div className="hidden md:flex items-center gap-4 text-antique-brass/90 text-xs">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-antique-brass" />
              IN-HOUSE FACILITIES
            </span>
            <span className="text-outline-variant/50">|</span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-antique-brass" />
              DIRECT EXPORT DESK
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-tight uppercase text-racing-dark group-hover:text-secondary transition-colors font-medium">
            HAÚSTIER
          </span>
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold pl-2.5 border-l border-outline-variant">
            PRODUCTS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all cursor-pointer rounded-none"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => onOpenEnquiry('General Export Inquiry')}
            className="group relative inline-flex items-center justify-center px-4 py-2.5 bg-racing-green border border-antique-brass/50 hover:bg-racing-dark hover:border-antique-brass transition-all shadow-sm cursor-pointer"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-warm-cream group-hover:text-antique-brass transition-colors">
              START AN ENQUIRY
            </span>
            <span className="ml-2 w-1.5 h-1.5 rounded-full bg-saddle-cognac group-hover:bg-antique-brass transition-colors"></span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-racing-dark hover:bg-surface-container border border-outline-variant/40 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-high border-b border-outline-variant px-6 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 text-sm font-semibold uppercase tracking-wider text-primary border-b border-outline-variant/30 flex items-center justify-between cursor-pointer"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-saddle-tan" />
              </button>
            ))}
          </div>

          <div className="pt-2 text-xs text-on-surface-variant space-y-1">
            <p className="font-semibold text-racing-dark uppercase">Registered Works &amp; Office:</p>
            <p>{COMPANY_INFO.location.fullAddress}</p>
            <p className="text-secondary font-mono pt-1">
              Direct: {COMPANY_INFO.contact.phone} · {COMPANY_INFO.contact.salesEmail}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
