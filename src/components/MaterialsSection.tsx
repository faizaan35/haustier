import React from 'react';
import { MATERIAL_SPECS } from '../data/haustierData';

export const MaterialsSection: React.FC = () => {
  return (
    <section id="craft-materials-section" className="w-full bg-surface px-4 sm:px-8 lg:px-14 py-16 border-t border-outline-variant/40">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-baseline">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold block">
              CHAPTER 02 · TACTILE SUBSTRATES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight mt-1 font-normal">
              EVERY PRODUCT BEGINS<br />WITH THE MATERIAL.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-on-surface-variant leading-relaxed">
              A synthesis of technology and craftsmanship. We carefully consider raw materials and strategic suppliers, working with vegetable pit-tanned leathers, resilient non-leather substrates, and solid cast metal hardware engineered to meet exacting international B2B standards.
            </p>
          </div>
        </div>

        {/* Asymmetric Material Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* High-res Macro Material Photography */}
          <div className="lg:col-span-7 relative bg-surface-container-high overflow-hidden border border-outline-variant/40 group min-h-[440px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBhMGl05a3ysKKvNTwzWHpptXwt3P5gS1jLycWBm195WTAQ6eu6oKhFCRQOC-kFCFZDSfJ757t0o3DVBUFM8f2-ubmehR4qZI3cSkVfBN0__4UUq2R0yTV4zWvpudsH220R1cl0gwDpgNavPCuOG3lTjVFDitmDPUPn-dw6QvcppzQYReR51aZ_ElCehwaMkQbOeoJt6vjgneNNosNklXaCaG9qyxbVSCsppMyR-labtbzDtLzUpkt"
              alt="Artisanal workshop bench in Kanpur with rolls of vegetable-tanned leather, heavy spools of thread, and solid brass buckles"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-racing-dark/90 via-racing-dark/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-warm-cream">
              <p className="text-xs uppercase tracking-widest text-antique-brass font-medium">
                KANPUR ATELIER SPECIMEN · RAW MATERIAL BENCH
              </p>
              <h3 className="font-serif text-2xl text-warm-cream mt-1 font-normal">
                Pit-Tanned Mimosa &amp; Chestnut Grain Leather
              </h3>
              <p className="text-xs text-surface-container-high mt-1 max-w-lg leading-relaxed">
                Uncorrected full grain showing natural character and density. Finished with natural waxes for weather resistance, durability, and a rich hand feel that patinas gracefully.
              </p>
            </div>
          </div>

          {/* 4 Technical Substrate Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MATERIAL_SPECS.map((spec) => (
              <div
                key={spec.code}
                className="bg-surface-container-low border border-outline-variant/40 p-4 flex flex-col justify-between hover:bg-surface-container transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: spec.colorDot }}
                    ></span>
                    <span className="text-xs uppercase tracking-widest text-outline font-mono">
                      {spec.code}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-primary mb-1 font-medium">
                    {spec.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant mb-3 leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-outline-variant/30 space-y-1 text-xs uppercase font-mono">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>{spec.specA.label}:</span>
                    <span className="text-primary font-medium">{spec.specA.value}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>{spec.specB.label}:</span>
                    <span className="text-primary font-medium">{spec.specB.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
