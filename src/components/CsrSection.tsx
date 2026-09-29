import React from 'react';
import { HeartHandshake, ShieldCheck, Users, Leaf } from 'lucide-react';

export const CsrSection: React.FC = () => {
  const pillars = [
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
        'Endeavoring to maintain clean, safe, and ergonomically sound workshop bays with protective gear, clear ventilation, and ongoing safety training.',
    },
    {
      icon: Users,
      title: 'Skill Development & Growth',
      description:
        'Investing in our artisans and craftspeople through continuous technical training, skill advancement, and fostering generational mastery.',
    },
    {
      icon: Leaf,
      title: 'Responsible Sourcing',
      description:
        'Carefully considering raw materials, vegetable tanning extracts, and vendor practices to promote long-term sustainability.',
    },
  ];

  return (
    <section id="csr-section" className="w-full bg-surface px-4 sm:px-8 lg:px-14 py-16 border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block">
            CORPORATE RESPONSIBILITY &amp; VALUES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight mt-1 font-normal">
            ETHICAL PRACTICES &amp; WORKPLACE STANDARDS.
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            HAÚSTIER PRODUCTS is committed to responsible business conduct, protecting employee welfare, and nurturing sustainable supplier alliances.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-surface-container-low border border-outline-variant/40 p-5 flex flex-col justify-between hover:shadow-md hover:border-antique-brass transition-all"
              >
                <div>
                  <div className="p-3 bg-surface border border-outline-variant/30 w-fit mb-4">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-serif text-xl text-racing-dark mb-2 font-normal">
                    {item.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-outline-variant/30 text-[11px] font-mono uppercase text-outline">
                  Corporate Policy
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
