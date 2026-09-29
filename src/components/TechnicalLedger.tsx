import React from 'react';
import { COMPANY_INFO } from '../data/haustierData';

export const TechnicalLedger: React.FC = () => {
  return (
    <div className="w-full bg-surface-container-high border-b border-outline-variant/40 px-4 sm:px-8 lg:px-14 py-2 text-on-surface-variant text-xs uppercase tracking-widest font-sans flex flex-wrap items-center justify-between gap-y-1.5">
      <div className="flex items-center gap-4">
        <span className="inline-flex items-center gap-1.5 text-saddle-tan font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          CURRENT CYCLE: EXPORT PRODUCTION &amp; CUSTOM SAMPLING
        </span>
        <span className="hidden sm:inline text-outline-variant">/</span>
        <span className="hidden sm:inline text-on-surface-variant font-medium">
          IN-HOUSE FACILITIES FOR PRODUCT SEGMENTS
        </span>
      </div>

      <div className="flex items-center gap-4 font-mono text-xs">
        <span>KANPUR WORKS: {COMPANY_INFO.location.coordinates}</span>
        <span className="text-outline-variant">/</span>
        <span className="text-primary font-semibold">CAD &amp; TECH-PACK READY</span>
      </div>
    </div>
  );
};
