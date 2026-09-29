import React from 'react';
import { PARTNERSHIP_MODELS } from '../data/haustierData';
import { ArrowRight } from 'lucide-react';

interface CollaborationSectionProps {
  onOpenEnquiry: (modelTitle?: string) => void;
}

export const CollaborationSection: React.FC<CollaborationSectionProps> = ({
  onOpenEnquiry,
}) => {
  return (
    <section className="w-full bg-surface-container-low border-t border-outline-variant/30 px-4 sm:px-8 lg:px-14 py-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold block">
            COLLABORATION MODELS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight mt-1 font-normal">
            BUILD YOUR NEXT<br />COLLECTION WITH US.
          </h2>
          <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
            Whether developing proprietary tech-packs or customizing verified silhouettes for market release, our technical team works closely with your sourcing department.
          </p>
        </div>

        {/* 4 Strategic Partnership Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERSHIP_MODELS.map((model) => (
            <div
              key={model.number}
              className="bg-surface border border-outline-variant/40 p-5 flex flex-col justify-between hover:shadow-md hover:border-antique-brass transition-all group"
            >
              <div className="space-y-4">
                <span className="font-serif text-4xl text-antique-brass/40 font-normal leading-none block">
                  {model.number}
                </span>
                <h3 className="font-serif text-xl text-racing-dark font-normal">
                  {model.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {model.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-outline-variant/30 space-y-3">
                <div className="text-[11px] uppercase tracking-wider text-outline font-mono">
                  {model.badge}
                </div>
                <button
                  onClick={() => onOpenEnquiry(model.title)}
                  className="text-xs uppercase tracking-wider text-racing-green font-semibold hover:text-secondary flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>DISCUSS MODEL</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
