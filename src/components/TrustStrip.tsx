import React from 'react';
import { Building2, Wind, Flame, ShieldAlert, CheckSquare } from 'lucide-react';
import { TRUST_PILLARS, COMPANY_INFO } from '../data/content';

export const TrustStrip: React.FC = () => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Building2': <Building2 className="w-5 h-5" />,
    'Wind': <Wind className="w-5 h-5" />,
    'Flame': <Flame className="w-5 h-5" />,
    'ShieldAlert': <ShieldAlert className="w-5 h-5" />,
    'CheckSquare': <CheckSquare className="w-5 h-5" />,
  };

  return (
    <section className="bg-[#070e17] text-white border-b border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`flex flex-col gap-1.5 ${
                idx < TRUST_PILLARS.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-6' : ''
              } ${idx > 0 ? 'lg:pl-6' : ''}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[#1677C8]">
                  {iconMap[pillar.icon] || <CheckSquare className="w-5 h-5" />}
                </span>
                <span className="text-[11px] font-black uppercase text-[#1677C8] tracking-[0.2em] font-mono">
                  {pillar.title}
                </span>
              </div>
              <p className="text-xs text-gray-300 font-medium leading-tight">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
