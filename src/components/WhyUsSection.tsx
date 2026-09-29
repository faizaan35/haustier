import React from 'react';
import { Layers, ShieldCheck, TrendingUp } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: 'Synthesis of Technology & Craftsmanship',
      subtitle: 'RELIABILITY & DETAIL',
      description:
        'We combine automated industrial machinery for repeatable dimensional accuracy with seasoned handcrafting for edge skiving, beveling, and natural wax burnishing.',
    },
    {
      icon: ShieldCheck,
      title: 'Strategic Sourcing & Durability',
      subtitle: 'VERIFIED RAW MATERIALS',
      description:
        'Carefully selected vegetable pit-tanned leathers, resilient non-leather substrates, and solid cast metal hardware engineered for longevity, tensile strength, and handsome aging.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Competitive Advantage',
      subtitle: 'B2B COMMERCIAL VALUE',
      description:
        'Our core mission is providing durable, high-efficiency products at an adequate value that empower our commercial clients and brand partners to succeed in international markets.',
    },
  ];

  return (
    <section id="why-us-section" className="w-full bg-surface px-4 sm:px-8 lg:px-14 py-16 border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 3 Strategic Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block">
                THE HAÚSTIER ADVANTAGE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight mt-1 font-normal">
                WHY GLOBAL BUYERS PARTNER WITH US.
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
                Operating with commercial clarity, deep technical knowledge, and an uncompromising commitment to client satisfaction.
              </p>
            </div>

            <div className="space-y-6">
              {points.map((pt) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={pt.title}
                    className="p-5 bg-surface-container-low border border-outline-variant/40 flex items-start gap-4 hover:border-antique-brass transition-colors"
                  >
                    <div className="p-3 bg-surface border border-outline-variant/40 shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-saddle-tan uppercase tracking-wider font-semibold">
                        {pt.subtitle}
                      </span>
                      <h3 className="font-serif text-xl text-racing-dark font-medium">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Macro Material Editorial Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-outline-variant/40 bg-surface overflow-hidden shadow-sm">
              <div className="h-[460px] sm:h-[520px] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBhMGl05a3ysKKvNTwzWHpptXwt3P5gS1jLycWBm195WTAQ6eu6oKhFCRQOC-kFCFZDSfJ757t0o3DVBUFM8f2-ubmehR4qZI3cSkVfBN0__4UUq2R0yTV4zWvpudsH220R1cl0gwDpgNavPCuOG3lTjVFDitmDPUPn-dw6QvcppzQYReR51aZ_ElCehwaMkQbOeoJt6vjgneNNosNklXaCaG9qyxbVSCsppMyR-labtbzDtLzUpkt"
                  alt="Raw vegetable-tanned hides and solid brass hardware on workbench"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-5 bg-racing-dark text-warm-cream border-t border-antique-brass/40 space-y-1">
                <p className="text-xs font-mono uppercase text-antique-brass font-medium">
                  CAREFUL RESOURCE SELECTION
                </p>
                <p className="text-xs text-warm-cream/80 leading-relaxed">
                  Vegetable pit-tanned steer hides, cast brass hardware, and waxed filament cords selected for international durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
