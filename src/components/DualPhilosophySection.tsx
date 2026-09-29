import React from 'react';
import { Cpu, Hand } from 'lucide-react';

export const DualPhilosophySection: React.FC = () => {
  return (
    <section className="w-full bg-surface px-4 sm:px-8 lg:px-14 py-16 border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold block">
            CHAPTER 06 · DUAL PHILOSOPHY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight mt-1 font-normal">
            PROGRAMMED PRECISION.<br />TACTILE HUMAN TOUCH.
          </h2>
          <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
            HAÚSTIER PRODUCTS describes its approach as a true synthesis of technology and craftsmanship. Where precision machinery guarantees repeatable dimensional accuracy and seam reliability, the final soul of every strap is delivered by seasoned artisans.
          </p>
        </div>

        {/* Side-by-Side Asymmetric Comparison Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Side A: Modern Production Machinery */}
          <div className="bg-surface-container-low border border-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Cpu className="w-5 h-5 text-racing-green" />
                <span className="text-xs uppercase tracking-wider text-racing-green font-semibold font-mono">
                  01 · PRODUCTION MACHINERY
                </span>
              </div>
              <h3 className="font-serif text-2xl text-racing-dark mb-3 font-medium">
                Repeatable Dimensional Tolerance
              </h3>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                Industrial heavy-duty sewing lines and guided strap slitters automatically regulate needle tension relative to hide thickness, eliminating thread bunching and maintaining structural reliability across volume batches.
              </p>

              <div className="space-y-2.5 border-t border-outline-variant/40 pt-4 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Stitch Pattern Repeat</span>
                  <span className="text-primary font-medium">Strict Lock-Stitch Tension</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Hole Perforation</span>
                  <span className="text-primary font-medium">Precision Die-Cut Alignment</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Stress Point Reinforcement</span>
                  <span className="text-primary font-medium">Box-X Tacking on Load Points</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-surface border border-outline-variant/40 text-outline text-xs uppercase font-mono tracking-wider">
              STANDARD: UNIFORM HARDWARE INTEGRATION &amp; EXACT SIZING RUNS
            </div>
          </div>

          {/* Side B: Atelier Handcraft */}
          <div className="bg-surface-container-low border border-outline-variant/40 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Hand className="w-5 h-5 text-secondary" />
                <span className="text-xs uppercase tracking-wider text-secondary font-semibold font-mono">
                  02 · KANPUR SADDLERY ATELIER
                </span>
              </div>
              <h3 className="font-serif text-2xl text-racing-dark mb-3 font-medium">
                Hand-Burnished Tactile Nuance
              </h3>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                No machine can replicate the tactile feel of an artisan reading hide grain density with an edge slicker. Edges are beveled by hand, rubbed with natural waxes, and hand-finished until silky smooth to protect coat and hands.
              </p>

              <div className="space-y-2.5 border-t border-outline-variant/40 pt-4 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Edge Dressing</span>
                  <span className="text-primary font-medium">Multi-Pass Natural Wax &amp; Bone Slicking</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Keeper Assembly</span>
                  <span className="text-primary font-medium">Hand-Skived &amp; Securely Fitted Loops</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Grain Finishing</span>
                  <span className="text-primary font-medium">Natural Tallow &amp; Wax Hand Rub</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-surface border border-outline-variant/40 text-outline text-xs uppercase font-mono tracking-wider">
              RESULT: COUTURE-TIER TACTILE EXPERIENCE FOR PETS &amp; HANDLERS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
