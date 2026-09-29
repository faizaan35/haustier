import React from 'react';
import { EXHIBITIONS, COMPANY_INFO } from '../data/haustierData';
import { Globe, Calendar, Ship, Plane } from 'lucide-react';

interface TradeSectionProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const TradeSection: React.FC<TradeSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="trade-section" className="w-full bg-surface-container-low border-t border-outline-variant/30 px-4 sm:px-8 lg:px-14 py-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block">
              GLOBAL EXPORT FOOTPRINT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight mt-1 font-normal">
              TRADE FAIRS &amp; GLOBAL REACH.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Meeting international buyers, retailers, and distributors directly across premier European and worldwide pet trade platforms.
            </p>
          </div>
        </div>

        {/* 2-Column Trade & Logistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Trade Fairs Column */}
          <div className="lg:col-span-7 bg-surface border border-outline-variant/40 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-outline-variant/30">
              <h3 className="font-serif text-2xl text-racing-dark font-normal">
                Confirmed Trade Fairs
              </h3>
              <span className="text-xs text-secondary font-mono uppercase font-semibold">
                IN-PERSON SOURCING
              </span>
            </div>

            <div className="space-y-4 pt-2">
              {EXHIBITIONS.map((fair) => (
                <div
                  key={fair.title}
                  className="p-5 bg-surface-container-low border border-outline-variant/40 hover:bg-surface-container transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-racing-dark text-antique-brass border border-antique-brass/30 px-2.5 py-0.5 text-xs uppercase font-semibold font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-antique-brass" />
                      {fair.title}
                    </span>
                    <span className="text-xs text-on-surface-variant font-mono uppercase">
                      {fair.location}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg text-racing-dark mt-1 font-medium">
                    {fair.booth}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {fair.description}
                  </p>

                  <div className="pt-3 mt-3 border-t border-outline-variant/30 flex justify-between items-center">
                    <span className="text-xs text-outline font-mono uppercase">
                      B2B DELEGATION
                    </span>
                    <button
                      onClick={() => onOpenEnquiry(`Trade Fair Meeting: ${fair.title}`)}
                      className="text-xs uppercase tracking-wider text-saddle-cognac font-semibold hover:text-racing-green whitespace-nowrap cursor-pointer transition-colors font-mono"
                    >
                      SCHEDULE STAND MEETING →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Export Logistics Column */}
          <div className="lg:col-span-5 bg-surface border border-outline-variant/40 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-racing-dark mb-2 font-normal">
                Export Routing &amp; Freight
              </h3>
              <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                Standard export documentation, flexible Incoterms (FOB Nhava Sheva / CIF destination), and experienced container clearing.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3.5 bg-surface-container-low border border-outline-variant/30">
                  <span className="text-on-surface-variant flex items-center gap-2">
                    <Ship className="w-4 h-4 text-secondary" />
                    Primary Seaport
                  </span>
                  <span className="font-medium text-primary text-right">
                    {COMPANY_INFO.ports.seaport}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-surface-container-low border border-outline-variant/30">
                  <span className="text-on-surface-variant flex items-center gap-2">
                    <Plane className="w-4 h-4 text-secondary" />
                    Air Cargo Gateway
                  </span>
                  <span className="font-medium text-primary text-right">
                    {COMPANY_INFO.ports.airGateway}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-surface-container-low border border-outline-variant/30">
                  <span className="text-on-surface-variant">Sampling Dispatch</span>
                  <span className="font-medium text-secondary text-right">
                    DHL / FedEx Air Express
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-secondary" />
              <span className="text-xs uppercase tracking-wider text-outline font-mono">
                INTERNATIONAL B2B EXPORT EXPERTISE · KANPUR WORKS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
