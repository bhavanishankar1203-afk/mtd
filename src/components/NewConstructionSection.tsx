import React from 'react';
import { 
  Building2, 
  Ruler, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  HardHat, 
  FileSpreadsheet, 
  Calendar
} from 'lucide-react';
import { NEW_CONSTRUCTION_DETAILS } from '../data/content';

interface NewConstructionProps {
  onOpenQuoteModal: () => void;
}

export const NewConstructionSection: React.FC<NewConstructionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="new-construction" className="py-20 bg-[#070e17] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] mb-3 font-mono">
            <div className="w-8 h-px bg-[#1677C8]"></div>
            Specialized Focus
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Manrope'] mb-4">
            New Construction HVAC Engineering
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Heating and cooling in a new build isn't an afterthought. We coordinate directly with general contractors and custom homeowners from framing through final trim.
          </p>
        </div>

        {/* 2-Column Split: Detailed Info & Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Deep Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0B1726] border border-white/10 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Manrope']">
                Precision Ductwork & Equipment Sizing
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Poorly designed duct systems lead to noisy airflow, hot and cold spots, and overworked equipment. At MTD Heating, we calculate the specific heating and cooling load of your floor plan to install sealed, balanced, and durable duct networks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {NEW_CONSTRUCTION_DETAILS.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* General Contractor Collaboration Banner */}
            <div className="bg-white/5 border-l-4 border-[#1677C8] p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1677C8]/20 text-[#1677C8] flex items-center justify-center shrink-0">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-['Manrope'] mb-1">
                    For General Contractors & Custom Builders
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    We know timelines matter on a jobsite. Our team arrives on schedule for rough-ins, communicates cleanly with other trades, and delivers inspections that pass without surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics & 4-Step Build Phase */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 font-mono">
              Our New Construction Workflow
            </h3>

            {NEW_CONSTRUCTION_DETAILS.phases.map((phase, index) => (
              <div
                key={phase.step}
                className="bg-[#0B1726] border border-white/10 p-5 flex items-start gap-4 hover:border-[#1677C8]/60 transition-colors"
              >
                <div className="w-8 h-8 bg-[#1677C8] text-white font-black text-xs flex items-center justify-center shrink-0 font-mono">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 font-['Manrope']">
                    {phase.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-4 bg-[#1677C8] hover:bg-[#125ea0] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Submit Your Blueprints / Plans</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
