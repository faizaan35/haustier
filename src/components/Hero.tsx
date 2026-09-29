import React from 'react';
import { ArrowRight, ShieldCheck, Award, Globe, Factory } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-14 pt-8 pb-16 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Grid: Headline & Positioning + Large Architectural Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-racing-dark text-antique-brass border border-antique-brass/40 px-3 py-1 text-xs uppercase tracking-widest font-semibold font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-saddle-cognac animate-pulse"></span>
              MANUFACTURER &amp; EXPORTER · KANPUR, INDIA
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-racing-dark uppercase leading-[1.08] font-normal">
              WHERE MATERIAL<br />
              BECOMES CRAFTSMANSHIP.
            </h1>

            <p className="font-serif text-lg sm:text-xl text-saddle-tan italic max-w-2xl font-normal leading-relaxed">
              A synthesis of technology and craftsmanship. Over 35 years of progressive industry experience delivering durable, high-quality pet products and leather accessories for international commercial buyers.
            </p>

            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed">
              Headquartered in Kanpur—the historic saddlery and leather capital of India. HAÚSTIER PRODUCTS operates in-house facilities for product-related manufacturing segments, providing international retailers, brands, and distributors with dependable supply and refined craftsmanship.
            </p>

            {/* B2B Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenEnquiry}
                className="bg-racing-green text-warm-cream border border-antique-brass/50 px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-racing-dark hover:text-antique-brass transition-all duration-150 flex items-center justify-center gap-2 shadow-sm font-semibold cursor-pointer"
              >
                <span>DISCUSS YOUR REQUIREMENTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#products-section"
                className="bg-surface-container-high border border-outline-variant/60 text-primary px-8 py-3.5 text-center text-xs uppercase tracking-wider hover:bg-surface-container hover:border-antique-brass transition-colors duration-150 font-semibold block"
              >
                EXPLORE PRODUCTS
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-surface-container-low border border-outline-variant/40 p-4 sm:p-6 shadow-sm overflow-hidden">
              {/* Subtle architectural schematic line */}
              <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-outline-variant/20 pointer-events-none"></div>

              {/* Main Product Specimen Photo */}
              <div className="relative h-[340px] sm:h-[400px] flex items-center justify-center overflow-hidden bg-surface-container border border-outline-variant/30">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVYzY7gOJIcReawfH4tzPxpG102Zw5Jrti9HZI72fAbq7d1mpmr9fqVaBleZ6nrzmEOZYVYebhlYNlRHnpYxLYBrO_d9-IXe8ggXXrv4GnQ6me5JzTzlLDJ3tXmJrjdx-0WugWZ722MYIdGSzrXJYISbTo6GdYYvcqLEtPHm5Rh7m5Lr9a0YBMHtdT3ORHpsoXPscidXcrhmFiYGyULLy9Vc9oi-Pjsm00mQs_Bmf3922pbp4pZ9A9"
                  alt="Handcrafted vegetable-tanned leather dog collar with solid turned brass buckle on atelier background"
                  className="w-full h-full object-contain p-4 transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-racing-dark/90 text-warm-cream border border-antique-brass/40 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider">
                  CANINE BRIDLE SPECIMEN · KANPUR
                </span>
              </div>

              {/* Technical Caption Ledger */}
              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex justify-between items-center text-xs font-mono text-on-surface-variant uppercase">
                <span>SUBSTRATE: FULL-GRAIN LEATHER</span>
                <span className="text-secondary font-semibold">SOLID CAST BRASS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Strip (Similar to Model Tanners credibility row) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-outline-variant/30">
          <div className="p-4 bg-surface-container-low border border-outline-variant/40 flex items-start gap-3">
            <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <div className="font-serif text-base text-racing-dark font-medium">35+ Years</div>
              <p className="text-xs text-on-surface-variant leading-snug">Progressive Industry Experience</p>
            </div>
          </div>

          <div className="p-4 bg-surface-container-low border border-outline-variant/40 flex items-start gap-3">
            <Factory className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <div className="font-serif text-base text-racing-dark font-medium">In-House Facilities</div>
              <p className="text-xs text-on-surface-variant leading-snug">Cutting, Stitching &amp; Finishing</p>
            </div>
          </div>

          <div className="p-4 bg-surface-container-low border border-outline-variant/40 flex items-start gap-3">
            <Globe className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <div className="font-serif text-base text-racing-dark font-medium">Trade Exhibitor</div>
              <p className="text-xs text-on-surface-variant leading-snug">Interzoo Germany &amp; Zoomark Italy</p>
            </div>
          </div>

          <div className="p-4 bg-surface-container-low border border-outline-variant/40 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <div className="font-serif text-base text-racing-dark font-medium">Direct B2B Desk</div>
              <p className="text-xs text-on-surface-variant leading-snug">Dedicated Sampling &amp; Export Supply</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
