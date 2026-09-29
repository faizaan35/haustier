import React from 'react';
import { COMPANY_INFO } from '../data/haustierData';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const quickLinks = [
    { label: 'About Us', href: '#about-section' },
    { label: 'Products', href: '#products-section' },
    { label: 'Infrastructure', href: '#infrastructure-section' },
    { label: 'Why Us', href: '#why-us-section' },
    { label: 'Trade Fairs', href: '#trade-section' },
    { label: 'CSR & Values', href: '#csr-section' },
    { label: 'Contact Us', href: '#contact-section' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-racing-dark text-warm-cream border-t border-antique-brass/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-3xl uppercase text-warm-cream tracking-tight font-normal">
                HAÚSTIER
              </span>
              <span className="block text-xs uppercase tracking-widest text-antique-brass mt-1 font-mono">
                B2B LEATHERGOODS MANUFACTURER · EXPORT HOUSE
              </span>
            </div>
            <p className="text-sm text-warm-cream/80 max-w-sm leading-relaxed">
              Manufacturer and exporter of pet products, dog collars, leads, toys, bags, and belts. Combining 35+ years of industry experience with a synthesis of technology and craftsmanship.
            </p>
            <div className="space-y-1 text-xs uppercase text-antique-brass/75 font-mono">
              <p>WORKS: JAJMAU INDUSTRIAL AREA, KANPUR, INDIA</p>
              <p>EXPORT PORTS: NHAVA SHEVA (JNPT) / MUNDRA</p>
            </div>
          </div>

          {/* Col 2: Quick Links (Model Tanners style) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-antique-brass font-semibold font-mono">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-xs text-warm-cream/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-antique-brass transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry('Catalogue & Tech Pack Request')}
                className="text-xs uppercase tracking-wider text-antique-brass underline underline-offset-4 hover:text-warm-cream transition-colors cursor-pointer flex items-center gap-1 font-mono"
              >
                <span>REQUEST TECH PACK &amp; SAMPLES</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 3: Trade Fairs */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-antique-brass font-semibold font-mono">
              TRADE FAIRS
            </h3>
            <ul className="space-y-3 text-xs text-warm-cream/80">
              <li className="flex flex-col">
                <span className="font-semibold text-warm-cream">INTERZOO 2026</span>
                <span className="text-antique-brass/80 text-[11px] uppercase font-mono">
                  Hall 9 · Booth 9-217 · Germany
                </span>
              </li>
              <li className="flex flex-col pt-1">
                <span className="font-semibold text-warm-cream">ZOOMARK</span>
                <span className="text-antique-brass/80 text-[11px] uppercase font-mono">
                  Bologna, Italy · Exhibitor
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Access */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-antique-brass font-semibold font-mono">
              DIRECT CONTACT
            </h3>
            <div className="space-y-2.5 text-xs text-warm-cream/80">
              <div>
                <span className="block text-[11px] uppercase text-antique-brass/80 font-mono">
                  Executive Contact
                </span>
                <span className="font-medium text-warm-cream">
                  {COMPANY_INFO.contact.primaryContact}
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase text-antique-brass/80 font-mono">
                  Sales Email
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
                  className="hover:text-antique-brass transition-colors font-mono"
                >
                  {COMPANY_INFO.contact.salesEmail}
                </a>
              </div>
              <div>
                <span className="block text-[11px] uppercase text-antique-brass/80 font-mono">
                  Direct Line
                </span>
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/[^+\d]/g, '')}`}
                  className="hover:text-antique-brass transition-colors font-mono"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div>
                <span className="block text-[11px] uppercase text-antique-brass/80 font-mono">
                  Registered Works
                </span>
                <span className="leading-snug block">
                  190-LIG, KDA Colony, Jajmau, Kanpur - 208010 UP, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rule & Disclosures */}
        <div className="pt-6 border-t border-antique-brass/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase text-antique-brass/80 font-mono">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px]">
            <span>35+ YEARS INDUSTRY EXPERIENCE</span>
            <span>IN-HOUSE FACILITIES</span>
            <span>KANPUR, INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
