import React from 'react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ConversionBannerProps {
  onOpenQuoteModal: () => void;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="bg-[#0e1d2f] text-white py-16 border-b border-white/10 relative overflow-hidden">
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl text-center lg:text-left space-y-3">
            <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] font-mono">
              <div className="w-8 h-px bg-[#1677C8]"></div>
              Ready for Solid HVAC Work?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Manrope']">
              Get Your Free Estimate in Shelley & Southeast Idaho
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Speak directly with our team about your new build, mini split project, or seasonal equipment replacement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 bg-[#1677C8] hover:bg-[#125ea0] text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-950/50 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.phoneFormattedTel}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest border border-white/15 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#1677C8]" />
              <span>(208) 520-8096</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
