import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/haustierData';
import { Phone, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

interface ModelHeaderProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const ModelHeader: React.FC<ModelHeaderProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'About Us', href: '#about-us' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'CSR', href: '#csr' },
    { label: 'Products', href: '#products' },
    { label: 'Infrastructure', href: '#infrastructure' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Trade Fairs', href: '#trade-fairs' },
    { label: 'Contact Us', href: '#contact-us' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-surface border-b border-outline-variant/30 sticky top-0 z-50 shadow-sm">
      {/* Top Header Row (Logo on Left, Phone & Email on Right - Exact Model Tanners Layout) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-4 flex items-center justify-between">
        {/* Brand Logo Block */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group"
          >
            <span className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-racing-dark font-normal group-hover:text-secondary transition-colors">
              HAÚSTIER
            </span>
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-antique-brass font-mono font-semibold">
              MANUFACTURER &amp; EXPORTER · KANPUR, INDIA
            </span>
          </a>
        </div>

        {/* Right Top Contact Bar */}
        <div className="hidden sm:flex items-center gap-6 text-xs font-mono">
          <a
            href={`tel:${COMPANY_INFO.contact.phone.replace(/[^+\d]/g, '')}`}
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold"
          >
            <div className="p-2 bg-racing-dark text-warm-cream">
              <Phone className="w-3.5 h-3.5 text-antique-brass" />
            </div>
            <span>{COMPANY_INFO.contact.phone}</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
            className="hidden md:flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <div className="p-2 bg-racing-dark text-warm-cream">
              <Mail className="w-3.5 h-3.5 text-antique-brass" />
            </div>
            <span>{COMPANY_INFO.contact.salesEmail}</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-racing-dark hover:bg-surface-container border border-outline-variant/40"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Navigation Bar (Full Width Bar in Racing Dark - Exact Model Tanners Style) */}
      <nav className="w-full bg-racing-dark text-warm-cream border-t border-antique-brass/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between">
          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-3 text-xs uppercase tracking-wider font-semibold text-warm-cream/90 hover:text-antique-brass hover:bg-racing-green transition-all cursor-pointer font-sans"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden lg:block py-2">
            <button
              onClick={() => onOpenEnquiry('Export Sourcing Inquiry')}
              className="px-5 py-2 bg-antique-brass text-racing-dark hover:bg-warm-cream font-mono text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
            >
              START AN ENQUIRY
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-racing-dark border-t border-antique-brass/20 px-6 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left py-2.5 text-xs uppercase tracking-wider text-warm-cream border-b border-antique-brass/10 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-antique-brass" />
              </button>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('Mobile Inquiry');
                }}
                className="w-full py-2.5 bg-antique-brass text-racing-dark text-xs uppercase tracking-widest font-semibold font-mono"
              >
                START AN ENQUIRY
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
