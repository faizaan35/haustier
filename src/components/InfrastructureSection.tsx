import React from 'react';
import { Scissors, Hammer, Eye, Sparkles } from 'lucide-react';

export const InfrastructureSection: React.FC = () => {
  const facilities = [
    {
      icon: Scissors,
      title: 'Precision Cutting & Die Tooling',
      description:
        'Guided strap slitters and hardened steel dies cut parallel profiles, ensuring consistent widths and clean edge margins across full volume runs.',
    },
    {
      icon: Hammer,
      title: 'Heavy-Duty Stitching Lines',
      description:
        'Industrial lock-stitch machines engineered for dense harness leathers, applying reinforced box-X tacks at critical hardware load points.',
    },
    {
      icon: Sparkles,
      title: 'Hand-Finishing & Edge Atelier',
      description:
        'Skilled artisans hand-bevel, skive, and wax-burnish strap perimeters using wooden edge slickers for silky, non-chafing profiles.',
    },
    {
      icon: Eye,
      title: '100% Quality Inspection & Packing',
      description:
        'Piece-by-piece optical and dimensional verification against client tech-packs, followed by moisture-barrier export boxing and barcoding.',
    },
  ];

  return (
    <section
      id="infrastructure-section"
      className="w-full bg-surface-container-high border-t border-outline-variant/40 px-4 sm:px-8 lg:px-14 py-16"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block">
              MANUFACTURING INFRASTRUCTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight mt-1 font-normal">
              IN-HOUSE FACILITIES &amp; WORKMANSHIP.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Operating in-house facilities for the peripheral segments constituting each product—giving our clients direct oversight, consistent tolerances, and dependable lead times.
            </p>
          </div>
        </div>

        {/* Factory Floor Visual Feature */}
        <div className="relative mb-10 overflow-hidden border border-outline-variant/40 shadow-sm bg-surface">
          <div className="h-[360px] sm:h-[440px] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBehBq7WHzbCrdylqMuKG5mJZ6MZj8OytUvtkq7SwmbfjS_a3r1OEV6uG06VL9k9eNGniq4oY60W4Ma7I2fJlU0nsuKR8kH7aD_HB35L7qiWsreZutZElW9vx3KlRFMnrHI6CURpaaxkuSC_oF3Qo_wwftJ2AsefLZpbhGYVSa1vq5IDU-WLpc8U6k7QdDEknymtHmQ3-bDyZX9E7koOjHwYqrptGtttzzyMWRF_-cdHqdxlgnG6lqC"
              alt="Leathergoods manufacturing facilities in Kanpur showing precision sewing and assembly bench"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
            />
          </div>
          <div className="p-4 bg-racing-dark text-warm-cream border-t border-antique-brass/40 flex flex-wrap items-center justify-between text-xs font-mono uppercase gap-2">
            <span className="text-warm-cream">
              IN-HOUSE FACILITIES · JAJMAU INDUSTRIAL REGION, KANPUR
            </span>
            <span className="text-antique-brass font-semibold">
              SYNTHESIS OF TECHNOLOGY &amp; CRAFTSMANSHIP
            </span>
          </div>
        </div>

        {/* 4 Infrastructure Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.title}
                className="bg-surface border border-outline-variant/40 p-5 flex flex-col justify-between hover:shadow-md hover:border-antique-brass transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-5 h-5 text-secondary" />
                    <span className="text-xs text-outline font-mono font-medium">0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif text-xl text-racing-dark mb-2 font-normal">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-outline-variant/30 text-[11px] font-mono uppercase text-outline">
                  In-House Segment
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
