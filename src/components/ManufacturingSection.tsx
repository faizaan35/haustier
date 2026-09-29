import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/haustierData';
import { Box, CheckCircle, Package } from 'lucide-react';

interface LogisticsTier {
  id: string;
  name: string;
  units: string;
  freightMode: string;
  fillPercentage: number;
  notes: string;
}

const LOGISTICS_TIERS: LogisticsTier[] = [
  {
    id: 'pilot',
    name: 'Sampling & Pilot Run',
    units: '100 – 500 Units',
    freightMode: 'Air Courier / Express LCL',
    fillPercentage: 15,
    notes: 'Ideal for initial retail market testing and catalogue validation.',
  },
  {
    id: 'commercial',
    name: 'Commercial Batch',
    units: '1,000 – 3,000 Units',
    freightMode: 'LCL Consolidated Maritime / Air Cargo',
    fillPercentage: 35,
    notes: 'Optimal for seasonal product releases and multi-store replenishment.',
  },
  {
    id: 'fcl20',
    name: '20ft FCL Container',
    units: '12,000+ Assorted Sets',
    freightMode: 'Full Container Load (FCL)',
    fillPercentage: 70,
    notes: 'Maximum freight efficiency for national distributors and brand owners.',
  },
  {
    id: 'fcl40',
    name: '40ft High Cube Container',
    units: '25,000+ Volume Run',
    freightMode: 'FCL Maritime Hub Clearance',
    fillPercentage: 100,
    notes: 'Direct factory-to-distribution center logistics with lowest landed unit cost.',
  },
];

export const ManufacturingSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<LogisticsTier>(LOGISTICS_TIERS[2]);

  return (
    <section
      id="manufacturing-section"
      className="w-full bg-surface-container-high border-t border-outline-variant/40 px-4 sm:px-8 lg:px-14 py-16"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold block">
              KANPUR INDUSTRIAL REGION · IN-HOUSE FACILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight mt-1 font-normal">
              MADE WITH PRECISION.<br />BUILT AT SCALE.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Operating in-house facilities for the peripheral segments constituting each product—from strap cutting and automated stitching lines to hand-finishing and dedicated export quality inspection.
            </p>
          </div>
        </div>

        {/* Factory Floor Feature Visual + Monolithic Capability Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
          {/* Main Visual */}
          <div className="lg:col-span-8 overflow-hidden shadow-sm relative group bg-surface border border-outline-variant/40">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBehBq7WHzbCrdylqMuKG5mJZ6MZj8OytUvtkq7SwmbfjS_a3r1OEV6uG06VL9k9eNGniq4oY60W4Ma7I2fJlU0nsuKR8kH7aD_HB35L7qiWsreZutZElW9vx3KlRFMnrHI6CURpaaxkuSC_oF3Qo_wwftJ2AsefLZpbhGYVSa1vq5IDU-WLpc8U6k7QdDEknymtHmQ3-bDyZX9E7koOjHwYqrptGtttzzyMWRF_-cdHqdxlgnG6lqC"
              alt="Leathergoods manufacturing facilities in Kanpur showing precision sewing and assembly bench"
              className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-racing-dark/95 text-warm-cream border border-antique-brass/40 backdrop-blur-md p-3 flex flex-wrap items-center justify-between text-xs uppercase font-mono">
              <span className="text-warm-cream">
                PRODUCTION IN-HOUSE SEGMENTS: CUTTING · STITCHING · FINISHING
              </span>
              <span className="text-antique-brass font-semibold">
                DIMENSIONAL TOLERANCE: ±0.5MM
              </span>
            </div>
          </div>

          {/* 3 Monolithic Capability Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="bg-surface border border-outline-variant/40 p-5">
              <span className="text-xs text-outline uppercase tracking-wider block mb-1 font-mono">
                HERITAGE &amp; EXPERIENCE
              </span>
              <div className="font-serif text-4xl sm:text-5xl text-racing-dark font-normal">
                35+<span className="text-saddle-cognac font-sans text-xl ml-2 font-medium">Years</span>
              </div>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Executive leadership with over three and a half decades of progressive industry experience in pet accessories and leather manufacturing.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant/40 p-5">
              <span className="text-xs text-outline uppercase tracking-wider block mb-1 font-mono">
                MANUFACTURING INFRASTRUCTURE
              </span>
              <div className="font-serif text-4xl sm:text-5xl text-racing-dark font-normal">
                In-House<span className="text-saddle-cognac font-sans text-xl ml-2 font-medium">Facilities</span>
              </div>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Integrated in-house peripheral facilities for cutting, assembly, hardware integration, edge-dressing, and piece-by-piece testing.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant/40 p-5">
              <span className="text-xs text-outline uppercase tracking-wider block mb-1 font-mono">
                LONG-TERM PHILOSOPHY
              </span>
              <div className="font-serif text-4xl sm:text-5xl text-racing-dark font-normal">
                Strategic<span className="text-saddle-cognac font-sans text-xl ml-2 font-medium">Partnership</span>
              </div>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Committed to responsible working conditions, strategic supplier relationships, and high-efficiency international export supply.
              </p>
            </div>
          </div>
        </div>

        {/* Live Container Fill & Order Logistics Simulator */}
        <div className="bg-surface border border-outline-variant/40 p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-secondary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-racing-dark">
                B2B EXPORT LOGISTICS &amp; ORDER VOLUME SIMULATOR
              </span>
            </div>
            <span className="text-xs text-on-surface-variant font-mono uppercase">
              SEAPORTS: {COMPANY_INFO.ports.seaport}
            </span>
          </div>

          {/* Tier Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {LOGISTICS_TIERS.map((tier) => {
              const isSelected = selectedTier.id === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  className={`p-3 text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-racing-green text-warm-cream border-antique-brass/40 shadow-sm'
                      : 'bg-surface-container-low text-on-surface hover:bg-surface-container border-outline-variant/30'
                  }`}
                >
                  <p
                    className={`text-xs uppercase tracking-wider font-semibold ${
                      isSelected ? 'text-antique-brass' : 'text-saddle-tan'
                    }`}
                  >
                    {tier.name}
                  </p>
                  <p
                    className={`font-mono text-sm font-medium mt-1 ${
                      isSelected ? 'text-warm-cream' : 'text-primary'
                    }`}
                  >
                    {tier.units}
                  </p>
                  <p
                    className={`text-xs mt-1 truncate ${
                      isSelected ? 'text-warm-cream/80' : 'text-on-surface-variant'
                    }`}
                  >
                    {tier.freightMode}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Monolithic Non-Rounded Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono text-on-surface-variant uppercase">
              <span>FREIGHT MODE: {selectedTier.freightMode}</span>
              <span className="text-secondary font-semibold font-mono">
                {selectedTier.notes}
              </span>
            </div>

            <div className="w-full h-3.5 bg-surface-variant flex overflow-hidden border border-outline-variant/30">
              <div
                className="h-full bg-racing-green transition-all duration-700 ease-out flex items-center justify-end pr-2"
                style={{ width: `${selectedTier.fillPercentage}%` }}
              >
                <span className="text-[9px] text-warm-cream font-mono font-bold">
                  {selectedTier.fillPercentage}%
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center text-outline text-xs mt-2 uppercase tracking-widest font-mono gap-y-1">
              <span>FOB NHAVA SHEVA (MUMBAI) / CIF GLOBAL HUBS</span>
              <span className="text-saddle-cognac font-medium flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                CUSTOM DIE &amp; BRAND PACKAGING INCLUDED
              </span>
              <span>DIRECT EXPORT DOCUMENTATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
