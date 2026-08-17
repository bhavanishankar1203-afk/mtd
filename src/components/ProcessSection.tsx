import React from 'react';
import { 
  PhoneCall, 
  Ruler, 
  Wrench, 
  CheckCheck, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  onOpenQuoteModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall': return <PhoneCall className="w-6 h-6" />;
      case 'Ruler': return <Ruler className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'CheckCheck': return <CheckCheck className="w-6 h-6" />;
      default: return <CheckCheck className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-[#070e17] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] mb-3 font-mono">
            <div className="w-8 h-px bg-[#1677C8]"></div>
            How We Work
            <div className="w-8 h-px bg-[#1677C8]"></div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Manrope'] mb-4">
            A Straightforward, 4-Step Process
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            No sales gimmicks, hidden fees, or subcontracted confusion. From initial call to final walkthrough.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="bg-[#0B1726] border border-white/10 p-6 flex flex-col justify-between hover:border-[#1677C8] transition-colors relative group"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 text-[#1677C8] group-hover:bg-[#1677C8] group-hover:text-white transition-colors flex items-center justify-center">
                  {getIcon(step.icon)}
                </div>
                <span className="text-3xl font-black text-white/15 group-hover:text-[#1677C8]/40 transition-colors font-mono">
                  {step.step}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2 font-['Manrope']">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono text-[#1677C8] uppercase tracking-wider block font-bold">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="bg-[#0B1726] border border-white/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white font-['Manrope'] mb-1">
              Ready to Discuss Your Heating or Cooling Project?
            </h3>
            <p className="text-xs text-gray-400">
              We provide prompt site assessments and upfront written quotes for homeowners and builders.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 bg-[#1677C8] hover:bg-[#125ea0] text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shrink-0"
          >
            <span>Start Step 1: Request Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
