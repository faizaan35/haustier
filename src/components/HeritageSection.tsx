import React from 'react';
import { ShieldCheck, Award, HeartHandshake, FileCheck } from 'lucide-react';

export const HeritageSection: React.FC = () => {
  return (
    <section id="company-section" className="w-full bg-surface px-4 sm:px-8 lg:px-14 py-16 border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold block">
              35+ YEARS OF INDUSTRY EXPERIENCE · KANPUR, INDIA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight font-normal">
              WHERE TRADITION MEETS UNCOMPROMISED STANDARDS.
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Kanpur is globally renowned as the saddlery and leather manufacturing hub of the subcontinent. HAÚSTIER PRODUCTS brings together this rich heritage of craftsmanship with modern production practices, serving international brand buyers seeking durability, efficiency, and exceptional value.
            </p>

            {/* 3 Core Pillars From Brief */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-surface-container-low border border-outline-variant/40">
                <h4 className="font-serif text-base text-racing-dark mb-1 font-medium">
                  Responsible Workplace
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Endeavors to provide a safe, healthy workplace, respecting human rights and continuous skill advancement.
                </p>
              </div>

              <div className="p-4 bg-surface-container-low border border-outline-variant/40">
                <h4 className="font-serif text-base text-racing-dark mb-1 font-medium">
                  Material Sourcing
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Careful selection of tanneries, raw hides, non-leather materials, and precision hardware suppliers.
                </p>
              </div>

              <div className="p-4 bg-surface-container-low border border-outline-variant/40">
                <h4 className="font-serif text-base text-racing-dark mb-1 font-medium">
                  Client Value
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Durable, efficient products that enable our commercial partners to achieve sustainable competitive advantage.
                </p>
              </div>
            </div>
          </div>

          {/* Right Verification & Capability Matrix */}
          <div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/40 p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface border border-outline-variant/40 p-5 text-center space-y-2">
                <Award className="w-8 h-8 text-secondary mx-auto" />
                <div className="font-serif text-xl text-racing-dark font-medium">
                  35+ Years Experience
                </div>
                <p className="text-xs text-outline uppercase font-mono tracking-wider">
                  Progressive Industry Track Record
                </p>
              </div>

              <div className="bg-surface border border-outline-variant/40 p-5 text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-secondary mx-auto" />
                <div className="font-serif text-xl text-racing-dark font-medium">
                  In-House Facilities
                </div>
                <p className="text-xs text-outline uppercase font-mono tracking-wider">
                  Peripheral Product Segments
                </p>
              </div>

              <div className="bg-surface border border-outline-variant/40 p-5 text-center space-y-2">
                <HeartHandshake className="w-8 h-8 text-secondary mx-auto" />
                <div className="font-serif text-xl text-racing-dark font-medium">
                  Responsible Labor
                </div>
                <p className="text-xs text-outline uppercase font-mono tracking-wider">
                  Fair Working Conditions
                </p>
              </div>

              <div className="bg-surface border border-outline-variant/40 p-5 text-center space-y-2">
                <FileCheck className="w-8 h-8 text-secondary mx-auto" />
                <div className="font-serif text-xl text-racing-dark font-medium">
                  Export Ready
                </div>
                <p className="text-xs text-outline uppercase font-mono tracking-wider">
                  Full Tech-Pack &amp; CAD Review
                </p>
              </div>
            </div>

            <p className="text-xs text-outline text-center uppercase tracking-widest mt-6 font-mono">
              MATERIAL SPECIFICATIONS AND SAMPLE DOSSIERS PROVIDED WITH INITIAL INQUIRY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
