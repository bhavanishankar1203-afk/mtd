import React from 'react';
import { 
  Wind, 
  Zap, 
  Sliders, 
  Home, 
  Warehouse, 
  Layers, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { MINI_SPLIT_DETAILS } from '../data/content';

interface MiniSplitsProps {
  onOpenQuoteModal: () => void;
}

export const MiniSplitsSection: React.FC<MiniSplitsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="mini-splits" className="py-20 bg-[#0B1726] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] mb-3 font-mono">
            <div className="w-8 h-px bg-[#1677C8]"></div>
            Zoned Climate Efficiency
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Manrope'] mb-4">
            Ductless Mini Splits & Heat Pumps
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Whisper-quiet, ultra-efficient heating and air conditioning without invasive duct runs. Ideal for shops, additions, bonus rooms, and targeted home zoning.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Column: Key Mini Split Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MINI_SPLIT_DETAILS.benefits.map((benefit, i) => (
                <div key={i} className="bg-[#0e1d2f] border border-white/10 p-5 hover:border-[#1677C8]/50 transition-colors">
                  <div className="w-9 h-9 bg-[#1677C8]/20 text-[#1677C8] flex items-center justify-center mb-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 font-['Manrope']">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Ductless in Idaho */}
            <div className="bg-[#070e17] border border-white/10 p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1677C8]" />
                Cold-Climate Heat Pump Capability
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Modern inverter mini splits deliver high heating output even through frigid Idaho sub-zero weather while using a fraction of the electricity of conventional baseboard or standard resistive heat.
              </p>
            </div>
          </div>

          {/* Right Column: Applications & Use Cases */}
          <div className="lg:col-span-6 bg-[#070e17] border border-white/10 p-8 shadow-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1677C8] font-mono mb-2">
              Popular Applications
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 font-['Manrope']">
              Where Mini Splits Shine
            </h3>

            <div className="space-y-4">
              {MINI_SPLIT_DETAILS.useCases.map((uc, index) => (
                <div key={index} className="flex items-start gap-3.5 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="w-6 h-6 rounded-full bg-[#1677C8] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 font-mono">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{uc.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="block text-xs text-gray-400 font-mono">Have a shop or room to condition?</span>
                <span className="text-sm font-bold text-white">Get a custom zoning quote</span>
              </div>
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-3 bg-[#1677C8] hover:bg-[#125ea0] text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md"
              >
                Inquire Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
