import React, { useState } from 'react';
import { CRAFT_STEPS } from '../data/haustierData';

export const CraftSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(2); // Step 3 by default

  const activeStepData = CRAFT_STEPS[selectedStep];

  return (
    <section className="w-full bg-surface-container-low border-t border-outline-variant/30 px-4 sm:px-8 lg:px-14 py-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold block">
              CHAPTER 03 · THE METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight mt-1 font-normal">
              THE CRAFT: FROM RAW HIDE<br />TO FINISHED SPECIMEN.
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <span className="text-xs uppercase tracking-wider text-outline font-semibold font-mono">
              IN-HOUSE PRODUCTION CHAIN
            </span>
          </div>
        </div>

        {/* Feature Visual + Interactive Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Handcraft Photo Showcase */}
          <div className="lg:col-span-5 border border-outline-variant/40 bg-surface overflow-hidden shadow-sm sticky top-28">
            <div className="h-[400px] sm:h-[460px] overflow-hidden relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCxcABYFoxCsJy911vwRDU6qtWapNwBsYi4QyZK-BGTm8_cK75fV9RDBFyRz5_24v6Qsh4t7dLx5_Nvb4i71M7w-4qYALIuw48CbqUg-BS-rZpRcfkZGobFb6W5NTAzXax5lpr2tn_jffrR43m0AE58Ar0hT48GMYbd6Wm8hBkFgsILIVWNn4C0WQj7suIr-FiTkXQorXCdg23R3EuBR4r5T0rrvG7_0lHLCYt0QfTdfmMoBUblZXO"
                alt="Artisan craftsman hands skiving and hand-beveling dark brown leather on antique wooden workbench in Kanpur"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-surface-container border-t border-outline-variant/40">
              <p className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono">
                STEP {activeStepData.number} IN FOCUS: {activeStepData.title.toUpperCase()}
              </p>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Executed within our {activeStepData.facility} facilities in Kanpur, balancing specialized machinery with skilled artisanal handwork.
              </p>
            </div>
          </div>

          {/* 6 Step Interactive Ledger */}
          <div className="lg:col-span-7 space-y-3">
            {CRAFT_STEPS.map((step, idx) => {
              const isCurrent = selectedStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-4 border transition-all cursor-pointer flex items-start gap-4 ${
                    isCurrent
                      ? 'bg-surface border-antique-brass/80 shadow-sm'
                      : 'bg-surface border-outline-variant/40 hover:border-antique-brass/60'
                  }`}
                >
                  <span
                    className={`font-serif text-3xl leading-none font-normal ${
                      isCurrent ? 'text-saddle-cognac font-medium' : 'text-antique-brass/60'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-baseline mb-1 gap-1">
                      <h4 className="font-serif text-lg text-racing-dark font-medium">
                        {step.title}
                      </h4>
                      <span
                        className={`text-xs uppercase tracking-wider font-mono ${
                          isCurrent ? 'text-saddle-cognac font-semibold' : 'text-outline'
                        }`}
                      >
                        {step.facility}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
