import React from 'react';
import { EXHIBITIONS, COMPANY_INFO } from '../data/haustierData';
import { Calendar, Ship, Plane } from 'lucide-react';

interface ModelTradeFairsProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const ModelTradeFairs: React.FC<ModelTradeFairsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="trade-fairs" className="w-full bg-surface-container-low py-20 px-4 sm:px-8 lg:px-14 border-b border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading with Model Tanners Style Separator */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block mb-2">
            GLOBAL EXPORT FOOTPRINT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight font-normal">
            INTERNATIONAL TRADE FAIRS
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-12 h-0.5 bg-antique-brass"></span>
            <span className="w-2 h-2 rotate-45 border border-antique-brass bg-surface-container-low"></span>
            <span className="w-12 h-0.5 bg-antique-brass"></span>
          </div>
          <p className="text-sm text-on-surface-variant max-w-xl mx-auto mt-4 leading-relaxed">
            Meeting international buyers, retailers, and distributors directly across premier European and worldwide pet trade platforms.
          </p>
        </div>

        {/* 2-Column Trade & Logistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Trade Fairs Column */}
          <div className="lg:col-span-7 bg-surface border border-outline-variant/40 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30 mb-6">
                <h3 className="font-serif text-2xl text-racing-dark font-normal">
                  Confirmed Exhibitions
                </h3>
                <span className="text-xs text-secondary font-mono uppercase font-semibold">
                  IN-PERSON SOURCING
                </span>
              </div>

              <div className="space-y-4">
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
                        DELEGATION SOURCING
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
          </div>

          {/* Export Freight Column */}
          <div className="lg:col-span-5 bg-surface border border-outline-variant/40 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30 mb-6">
                <h3 className="font-serif text-2xl text-racing-dark font-normal">
                  Export Freight &amp; Logistics
                </h3>
                <span className="text-xs text-secondary font-mono uppercase font-semibold">
                  GLOBAL DISPATCH
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between p-4 bg-surface-container-low border border-outline-variant/30">
                  <span className="text-on-surface-variant flex items-center gap-2">
                    <Ship className="w-4 h-4 text-secondary" />
                    Primary Maritime Port
                  </span>
                  <span className="font-medium text-primary text-right">
                    {COMPANY_INFO.ports.seaport}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-surface-container-low border border-outline-variant/30">
                  <span className="text-on-surface-variant flex items-center gap-2">
                    <Plane className="w-4 h-4 text-secondary" />
                    Air Cargo Gateway
                  </span>
                  <span className="font-medium text-primary text-right">
                    {COMPANY_INFO.ports.airGateway}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-surface-container-low border border-outline-variant/30">
                  <span className="text-on-surface-variant">Incoterm Options</span>
                  <span className="font-medium text-primary text-right">
                    FOB Nhava Sheva / CIF Destination
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-surface-container-low border border-outline-variant/30">
                  <span className="text-on-surface-variant">Sampling Dispatch</span>
                  <span className="font-medium text-secondary text-right">
                    DHL / FedEx Air Courier
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-outline-variant/30 text-center">
              <span className="text-xs uppercase tracking-wider text-outline font-mono">
                EXPERIENCED CONTAINER CLEARING &amp; DOCUMENTATION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
