import React from 'react';
import { Award, Layers, ShieldCheck, TrendingUp } from 'lucide-react';

export const ModelWhyUs: React.FC = () => {
  const points = [
    {
      icon: Award,
      title: '35+ Years Industry Experience',
      description:
        'Executives bring over three and a half decades of progressive expertise in Kanpur leather tanning, hardware casting, and global pet product manufacturing.',
    },
    {
      icon: Layers,
      title: 'Technology & Craftsmanship',
      description:
        'A synthesis of automated industrial machinery for repeatable dimensional tolerances with skilled hand skiving, beveling, and wax slicking.',
    },
    {
      icon: ShieldCheck,
      title: 'Careful Material Sourcing',
      description:
        'Direct partnerships with vegetable pit-tanneries, sourcing premium bovine hides, lead-free cast brass hardware, and durable non-leather substrates.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Client Advantage',
      description:
        'Specializing in durable, efficient, high-quality products at an adequate value that empower our commercial clients and distributors to excel.',
    },
  ];

  return (
    <section id="why-us" className="w-full bg-surface py-20 px-4 sm:px-8 lg:px-14 border-b border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading with Model Tanners Style Separator */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block mb-2">
            THE HAÚSTIER ADVANTAGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight font-normal">
            WHY US
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-12 h-0.5 bg-antique-brass"></span>
            <span className="w-2 h-2 rotate-45 border border-antique-brass bg-surface"></span>
            <span className="w-12 h-0.5 bg-antique-brass"></span>
          </div>
          <p className="text-sm text-on-surface-variant max-w-xl mx-auto mt-4 leading-relaxed">
            Delivering consistency, authentic saddlery craftsmanship, and dependable B2B manufacturing for global brands.
          </p>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="bg-surface-container-low border border-outline-variant/40 p-6 flex flex-col justify-between hover:shadow-md hover:border-antique-brass transition-all group"
              >
                <div>
                  <div className="p-3 bg-surface border border-outline-variant/40 w-fit mb-5 group-hover:border-antique-brass transition-colors">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-[11px] font-mono text-outline uppercase tracking-wider block mb-1">
                    PILLAR 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl text-racing-dark mb-2.5 font-normal">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-outline-variant/30 text-[11px] font-mono uppercase text-saddle-tan font-semibold">
                  Verified Manufacturing Rule
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
