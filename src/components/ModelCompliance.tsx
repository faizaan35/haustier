import React from 'react';
import { HeartHandshake, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

export const ModelCompliance: React.FC = () => {
  const policies = [
    {
      icon: HeartHandshake,
      title: 'Human Rights & Fair Standards',
      description:
        'Respecting the fundamental human rights and dignity of all employees, with strict zero-tolerance policies regarding forced labor or child labor.',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Healthy Workplace',
      description:
        'Endeavoring to maintain safe, clean, and ergonomically sound workshop bays with protective gear, clear ventilation, and ongoing safety training.',
    },
    {
      icon: Users,
      title: 'Skill Development & Growth',
      description:
        'Investing in our craftspeople through continuous technical training, skill advancement, and fostering generational saddlery mastery.',
    },
    {
      icon: CheckCircle2,
      title: 'Equal Opportunity & Ethics',
      description:
        'Eliminating discrimination of all kinds, ensuring fair treatment, and maintaining transparent business conduct across our operations.',
    },
  ];

  return (
    <section id="compliance" className="w-full bg-surface py-20 px-4 sm:px-8 lg:px-14 border-b border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading with Model Tanners Style Separator */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block mb-2">
            ETHICAL PRACTICES &amp; WORKPLACE STANDARDS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight font-normal">
            COMPLIANCE &amp; CSR
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-12 h-0.5 bg-antique-brass"></span>
            <span className="w-2 h-2 rotate-45 border border-antique-brass bg-surface"></span>
            <span className="w-12 h-0.5 bg-antique-brass"></span>
          </div>
          <p className="text-sm text-on-surface-variant max-w-xl mx-auto mt-4 leading-relaxed">
            Committed to responsible business conduct, protecting employee welfare, and upholding ethical manufacturing principles.
          </p>
        </div>

        {/* 4 Policy Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {policies.map((pol) => {
            const Icon = pol.icon;
            return (
              <div
                key={pol.title}
                className="bg-surface-container-low border border-outline-variant/40 p-6 flex flex-col justify-between hover:shadow-md hover:border-antique-brass transition-all"
              >
                <div>
                  <div className="p-3 bg-surface border border-outline-variant/40 w-fit mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-serif text-xl text-racing-dark mb-2.5 font-normal">
                    {pol.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {pol.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-outline-variant/30 text-[11px] font-mono uppercase text-outline">
                  Corporate Governance
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
