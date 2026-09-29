import React from 'react';
import { COMPANY_INFO } from '../data/haustierData';

interface ModelFooterProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const ModelFooter: React.FC<ModelFooterProps> = ({ onOpenEnquiry }) => {
  const quickLinks = [
    { label: 'Dog Collars', topic: 'Dog Collars' },
    { label: 'Dog Collars & Leads', topic: 'Dog Collars & Leads' },
    { label: 'Pet Toys & Chew Articles', topic: 'Pet Toys' },
    { label: 'Bags & Belts', topic: 'Bags & Belts' },
    { label: 'Custom Tech-Pack Development', topic: 'Custom Development' },
    { label: 'In-House Infrastructure', href: '#infrastructure' },
    { label: 'Compliance & CSR', href: '#compliance' },
  ];

  const handleLinkClick = (link: { label: string; topic?: string; href?: string }) => {
    if (link.topic) {
      onOpenEnquiry(link.topic);
    } else if (link.href) {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-racing-dark text-warm-cream border-t border-antique-brass/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-3xl uppercase text-warm-cream tracking-tight font-normal">
                HAÚSTIER PRODUCTS
              </span>
              <span className="block text-xs uppercase tracking-widest text-antique-brass mt-1 font-mono">
                LEATHER &amp; NON-LEATHER PET PRODUCTS MANUFACTURER &amp; EXPORTER
              </span>
            </div>
            <p className="text-sm text-warm-cream/80 max-w-md leading-relaxed">
              Based in Jajmau, Kanpur. Specializing in durable, efficient, high-quality pet products and leather accessories for international commercial buyers through the synthesis of technology and craftsmanship.
            </p>
            <div className="space-y-1 text-xs uppercase text-antique-brass/75 font-mono">
              <p>WORKS: 190-LIG, KDA COLONY, JAJMAU, KANPUR, INDIA - 208010</p>
              <p>PRIMARY SEAPORT: NHAVA SHEVA (JNPT) / MUNDRA</p>
            </div>
          </div>

          {/* Col 2: Quick Links (Exact Model Tanners Quick Links Widget) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-antique-brass font-semibold font-mono border-b border-antique-brass/20 pb-2">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-xs text-warm-cream/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="hover:text-antique-brass transition-colors cursor-pointer text-left font-sans"
                  >
                    • {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Access & Contact (Exact Model Tanners Contact Info) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-antique-brass font-semibold font-mono border-b border-antique-brass/20 pb-2">
              CONTACT INFORMATION
            </h3>
            <div className="space-y-2.5 text-xs text-warm-cream/80 font-mono">
              <p>
                <span className="block text-antique-brass/70 uppercase">Commercial Contact</span>
                <span className="text-warm-cream font-sans font-medium text-sm">
                  {COMPANY_INFO.contact.primaryContact}
                </span>
              </p>
              <p>
                <span className="block text-antique-brass/70 uppercase">Direct Phone</span>
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/[^+\d]/g, '')}`}
                  className="hover:text-antique-brass transition-colors"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </p>
              <p>
                <span className="block text-antique-brass/70 uppercase">Sales Email</span>
                <a
                  href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
                  className="hover:text-antique-brass transition-colors"
                >
                  {COMPANY_INFO.contact.salesEmail}
                </a>
              </p>
              <p>
                <span className="block text-antique-brass/70 uppercase">International Trade</span>
                <span>Interzoo 2026 (Germany) · Zoomark (Italy)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar (Exact Model Tanners Footer-Bottom) */}
        <div className="pt-6 border-t border-antique-brass/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase text-antique-brass/80 font-mono">
          <p>© [{new Date().getFullYear()}] HAÚSTIER PRODUCTS | Leather Exporters &amp; Manufacturers</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>35+ YEARS INDUSTRY EXPERIENCE</span>
            <span>IN-HOUSE FACILITIES</span>
            <span>KANPUR, INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
