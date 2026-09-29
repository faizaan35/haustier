import React from 'react';
import { Scissors, Hammer, Sparkles, CheckCircle } from 'lucide-react';

export const ModelInfrastructure: React.FC = () => {
  const segments = [
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
      title: 'Hand-Finishing Atelier',
      description:
        'Skilled artisans hand-bevel, skive, and wax-burnish strap perimeters using wooden edge slickers for silky, non-chafing profiles.',
    },
    {
      icon: CheckCircle,
      title: '100% Quality Inspection & Packing',
      description:
        'Piece-by-piece optical and dimensional verification against client tech-packs, followed by moisture-barrier export boxing and barcoding.',
    },
  ];

  return (
    <section id="infrastructure" className="w-full bg-surface-container-low py-20 px-4 sm:px-8 lg:px-14 border-b border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading with Model Tanners Style Separator */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block mb-2">
            IN-HOUSE MANUFACTURING FACILITIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight font-normal">
            INFRASTRUCTURE
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-12 h-0.5 bg-antique-brass"></span>
            <span className="w-2 h-2 rotate-45 border border-antique-brass bg-surface-container-low"></span>
            <span className="w-12 h-0.5 bg-antique-brass"></span>
          </div>
          <p className="text-sm text-on-surface-variant max-w-xl mx-auto mt-4 leading-relaxed">
            Operating in-house facilities for the peripheral segments constituting each product in Jajmau, Kanpur.
          </p>
        </div>

        {/* Large Factory Visual (Model Tanners style full visual) */}
        <div className="border border-outline-variant/40 bg-surface shadow-md overflow-hidden mb-10">
          <div className="h-[360px] sm:h-[440px] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBehBq7WHzbCrdylqMuKG5mJZ6MZj8OytUvtkq7SwmbfjS_a3r1OEV6uG06VL9k9eNGniq4oY60W4Ma7I2fJlU0nsuKR8kH7aD_HB35L7qiWsreZutZElW9vx3KlRFMnrHI6CURpaaxkuSC_oF3Qo_wwftJ2AsefLZpbhGYVSa1vq5IDU-WLpc8U6k7QdDEknymtHmQ3-bDyZX9E7koOjHwYqrptGtttzzyMWRF_-cdHqdxlgnG6lqC"
              alt="Manufacturing facilities in Kanpur showing leather goods assembly"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
            />
          </div>
          <div className="p-4 bg-racing-dark text-warm-cream border-t border-antique-brass/40 flex flex-wrap items-center justify-between text-xs font-mono uppercase gap-2">
            <span className="text-warm-cream">
              JAJMAU INDUSTRIAL REGION, KANPUR · IN-HOUSE FACILITIES
            </span>
            <span className="text-antique-brass font-semibold">
              STRICT DIMENSIONAL ACCURACY &amp; TENSILE STANDARDS
            </span>
          </div>
        </div>

        {/* 4 Infrastructure Segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={seg.title}
                className="bg-surface border border-outline-variant/40 p-5 flex flex-col justify-between hover:shadow-md hover:border-antique-brass transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-surface-container border border-outline-variant/40">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-xs text-outline font-mono">0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif text-lg text-racing-dark mb-2 font-normal">
                    {seg.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {seg.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-outline-variant/30 text-[11px] font-mono uppercase text-outline">
                  Integrated Segment
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
