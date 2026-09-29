import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ModelProductsGridProps {
  onOpenEnquiry: (category: string) => void;
}

export const ModelProductsGrid: React.FC<ModelProductsGridProps> = ({ onOpenEnquiry }) => {
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  return (
    <section id="products" className="w-full bg-racing-dark py-20 px-0 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Section Heading with Model Tanners Style Separator */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-warm-cream tracking-tight font-normal">
            OUR PRODUCTS
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-12 h-0.5 bg-antique-brass"></span>
            <span className="w-2 h-2 rotate-45 border border-antique-brass bg-racing-dark"></span>
            <span className="w-12 h-0.5 bg-antique-brass"></span>
          </div>
          <p className="text-xs sm:text-sm text-warm-cream/80 max-w-xl mx-auto mt-4 font-mono uppercase tracking-wider">
            PREMIUM PET PRODUCTS &amp; LEATHER ACCESSORIES MANUFACTURED IN KANPUR
          </p>
        </div>

        {/* The Exact Model Tanners 4-Column 2-Row Checkerboard Grid */}
        <div className="border border-antique-brass/30 bg-racing-dark/40 shadow-xl overflow-hidden">
          {/* ROW 1: [TEXT BOX 1] [IMAGE HOVER 1] [TEXT BOX 2] [IMAGE HOVER 2] */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Box 1: Text Box (Dog Collars) */}
            <div className="bg-racing-dark p-8 sm:p-10 flex flex-col items-center justify-center text-center border-b sm:border-r border-antique-brass/20 min-h-[280px]">
              <h3 className="font-serif text-2xl sm:text-3xl text-warm-cream uppercase font-normal tracking-wide mb-5">
                DOG COLLARS
              </h3>
              <button
                onClick={() => onOpenEnquiry('Dog Collars')}
                className="px-6 py-2 border border-warm-cream text-warm-cream hover:bg-antique-brass hover:border-antique-brass hover:text-racing-dark transition-all text-xs font-mono uppercase tracking-widest font-semibold cursor-pointer"
              >
                MORE
              </button>
            </div>

            {/* Box 2: Image Hover Box (Dog Collars) */}
            <div
              className="relative overflow-hidden border-b sm:border-r border-antique-brass/20 min-h-[280px] group cursor-pointer"
              onMouseEnter={() => setHoveredBox('collars')}
              onMouseLeave={() => setHoveredBox(null)}
              onClick={() => onOpenEnquiry('Dog Collars')}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEwJ7GELw8GkopUzt0AgM_KI27UVmJq3_XtCxtXE4uAd7Q0JYj8WcXAvqrc6gdOZMaGW-MxhPV-0ZGEZBuMRGpmF1Q4Roz1du4wKuS7Cb_lWKRi6tyTfCXzPZukoER19W3N-HIMs7t2Yua_DCRFjhF4X_gZq6Y0zqPzbNuHJjxYUh7wJIl23CDbGrLnAsLFv0tCnlvlGeAtt0WJw0v3lvoX_zOKomkIiheWFSsSehbcyRv5lvZ35zX"
                alt="Handcrafted bridle leather dog collars"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Back hover panel (Model Tanners vc-hoverbox back) */}
              <div
                className={`absolute inset-0 bg-[#ebebeb] p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  hoveredBox === 'collars' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <h4 className="font-serif text-lg text-racing-dark font-medium leading-snug">
                  Authentic saddlery construction with solid brass hardware.
                </h4>
                <p className="text-xs text-on-surface-variant mt-2 font-sans leading-relaxed">
                  Padded calfskin linings, rolled greyhound contours, and custom width runs.
                </p>
                <span className="mt-4 text-xs font-mono text-saddle-cognac uppercase font-semibold flex items-center gap-1">
                  VIEW SPECIFICATIONS <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Box 3: Text Box (Dog Collars & Leads) */}
            <div className="bg-racing-green/80 p-8 sm:p-10 flex flex-col items-center justify-center text-center border-b sm:border-r border-antique-brass/20 min-h-[280px]">
              <h3 className="font-serif text-2xl sm:text-3xl text-warm-cream uppercase font-normal tracking-wide mb-5">
                DOG COLLARS &amp; LEADS
              </h3>
              <button
                onClick={() => onOpenEnquiry('Dog Collars & Leads')}
                className="px-6 py-2 border border-warm-cream text-warm-cream hover:bg-antique-brass hover:border-antique-brass hover:text-racing-dark transition-all text-xs font-mono uppercase tracking-widest font-semibold cursor-pointer"
              >
                MORE
              </button>
            </div>

            {/* Box 4: Image Hover Box (Leads) */}
            <div
              className="relative overflow-hidden border-b border-antique-brass/20 min-h-[280px] group cursor-pointer"
              onMouseEnter={() => setHoveredBox('leads')}
              onMouseLeave={() => setHoveredBox(null)}
              onClick={() => onOpenEnquiry('Dog Collars & Leads')}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT1MVNsz6WJnCO8QfZILnmxjUed4fSfdP6icM1C9OjCFOGWras1Nl581Ioy6q4FnTh67SwSyTvp7eRSZURKAzFUHuKhupcat9MUmJgQsiGfIl0HBk1IYfINGbqNapnsoQFsiA_aJ5D5xvED-jLw9nWuIBNqcmsihgp7bWpNFc2tK133r0BlksepuR_w7Pe-qr6VUE0LPb_UwAq7h8ed7yJV6M1wLb-SRrbs3zBZHPypcMGYWSctL0T"
                alt="Leather dog leashes with brass trigger snaps"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-[#ebebeb] p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  hoveredBox === 'leads' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <h4 className="font-serif text-lg text-racing-dark font-medium leading-snug">
                  Discover genuine leather matching sets &amp; training leads.
                </h4>
                <p className="text-xs text-on-surface-variant mt-2 font-sans leading-relaxed">
                  Multi-way adjustable European hands-free leashes with 360° swivel snaps.
                </p>
                <span className="mt-4 text-xs font-mono text-saddle-cognac uppercase font-semibold flex items-center gap-1">
                  VIEW SPECIFICATIONS <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* ROW 2: [IMAGE HOVER 3] [TEXT BOX 3] [IMAGE HOVER 4] [TEXT BOX 4] (Inverted Pattern) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Box 5: Image Hover Box (Pet Toys) */}
            <div
              className="relative overflow-hidden border-b sm:border-b-0 sm:border-r border-antique-brass/20 min-h-[280px] group cursor-pointer"
              onMouseEnter={() => setHoveredBox('toys')}
              onMouseLeave={() => setHoveredBox(null)}
              onClick={() => onOpenEnquiry('Pet Toys')}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSK1zRZapqm-XIfgMSXQRXp59NSJyzNJPvvB44mLkvTlpFtrVknfu0PzBFfhy0VWIqsiBNqH9APWGxBRRL6VraACurONq29tkBzpyKZXyeQiNj8xQ2Yif8QTn1I20Xdm8gVRl9rPlP9V8HWc7fX0J8DQEqoIoJtYRfV5vPJpgMsHH0p5hpeesOqq7fSjm9VuUHC3nYYiSER0QgUnbazFBTq159Gd8CJv-XHbwv0eTANHPF0KvJdAmh"
                alt="Vegetable-tanned leather chew toys and tugs"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-[#ebebeb] p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  hoveredBox === 'toys' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <h4 className="font-serif text-lg text-racing-dark font-medium leading-snug">
                  Heavy vegetable-tanned leather chew toys &amp; fetch tugs.
                </h4>
                <p className="text-xs text-on-surface-variant mt-2 font-sans leading-relaxed">
                  Untreated dense wool felt, reinforced multi-layer seams, and natural fibers.
                </p>
                <span className="mt-4 text-xs font-mono text-saddle-cognac uppercase font-semibold flex items-center gap-1">
                  VIEW SPECIFICATIONS <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Box 6: Text Box (Pet Toys) */}
            <div className="bg-racing-green/80 p-8 sm:p-10 flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-antique-brass/20 min-h-[280px]">
              <h3 className="font-serif text-2xl sm:text-3xl text-warm-cream uppercase font-normal tracking-wide mb-5">
                PET TOYS
              </h3>
              <button
                onClick={() => onOpenEnquiry('Pet Toys')}
                className="px-6 py-2 border border-warm-cream text-warm-cream hover:bg-antique-brass hover:border-antique-brass hover:text-racing-dark transition-all text-xs font-mono uppercase tracking-widest font-semibold cursor-pointer"
              >
                MORE
              </button>
            </div>

            {/* Box 7: Image Hover Box (Bags & Belts) */}
            <div
              className="relative overflow-hidden border-b sm:border-b-0 sm:border-r border-antique-brass/20 min-h-[280px] group cursor-pointer"
              onMouseEnter={() => setHoveredBox('bags')}
              onMouseLeave={() => setHoveredBox(null)}
              onClick={() => onOpenEnquiry('Bags & Belts')}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHOjg64esieuI7KZTuE-T-G1QUG537Qz6dRhZlTYENi27bKul5A0tFtVAxEcobfwEVDjdtLoEkcIor0N2r7dwZQXFgLpO4GSjsu1kIt2YJ5QGPFH02EQioWuBCVi-FDnAtfTwkrbRWlgPc5d2XR-Qdj1M6Kd3K1OmA96oLp_Wdb43Yq1SLtvgVsuX9YD3Ocm-lemTlGUI0l9z1Q0ER5Y5_l1g47JBmUbF9kXRJ2X6z93OImhbF9dkz"
                alt="Leather handler bags, treat pouches, and utility belts"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-[#ebebeb] p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  hoveredBox === 'bags' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <h4 className="font-serif text-lg text-racing-dark font-medium leading-snug">
                  Refined leather handler bags, pouches &amp; lifestyle belts.
                </h4>
                <p className="text-xs text-on-surface-variant mt-2 font-sans leading-relaxed">
                  Water-resistant linings, robust hardware, and custom blind debossing.
                </p>
                <span className="mt-4 text-xs font-mono text-saddle-cognac uppercase font-semibold flex items-center gap-1">
                  VIEW SPECIFICATIONS <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Box 8: Text Box (Bags & Belts) */}
            <div className="bg-racing-dark p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[280px]">
              <h3 className="font-serif text-2xl sm:text-3xl text-warm-cream uppercase font-normal tracking-wide mb-5">
                BAGS &amp; BELTS
              </h3>
              <button
                onClick={() => onOpenEnquiry('Bags & Belts')}
                className="px-6 py-2 border border-warm-cream text-warm-cream hover:bg-antique-brass hover:border-antique-brass hover:text-racing-dark transition-all text-xs font-mono uppercase tracking-widest font-semibold cursor-pointer"
              >
                MORE
              </button>
            </div>
          </div>
        </div>

        {/* Custom Development Banner below the grid */}
        <div className="mt-8 p-5 bg-racing-dark/95 border border-antique-brass/40 flex flex-col md:flex-row items-center justify-between gap-4 text-warm-cream">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-antique-brass shrink-0" />
            <p className="text-xs sm:text-sm text-warm-cream/90 leading-relaxed font-sans">
              <strong>PROVISIONAL &amp; CUSTOM MANUFACTURING:</strong> Custom dog harnesses, orthopedic pet beds, cat accessories, and equestrian saddlery leather goods sampled to client CAD / tech-packs.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Custom Tech-Pack Development')}
            className="text-antique-brass text-xs uppercase tracking-widest font-semibold hover:text-warm-cream whitespace-nowrap cursor-pointer shrink-0 transition-colors font-mono"
          >
            REQUEST BESPOKE DEVELOPMENT →
          </button>
        </div>
      </div>
    </section>
  );
};
