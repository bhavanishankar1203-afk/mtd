import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Wrench, 
  Award, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { COMPANY_INFO, ABOUT_INFO } from '../data/content';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-20 bg-[#0B1726] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 border border-white/15 bg-black overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="HVAC craftsman working on clean system"
                className="w-full h-80 sm:h-96 object-cover filter brightness-90 grayscale-[20%]"
                loading="lazy"
              />
              <div className="p-6 bg-[#070e17] border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1677C8] text-white font-bold flex items-center justify-center">
                    MTD
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-['Manrope']">
                      MTD Heating
                    </div>
                    <div className="text-xs text-[#1677C8] font-mono">
                      Shelley, Idaho • Local HVAC Specialist
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Geometric Accent Square */}
            <div className="absolute -top-3 -left-3 w-24 h-24 bg-[#1677C8] z-0 hidden sm:block"></div>
          </div>

          {/* Right Column: Story & Core Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] font-mono">
              <div className="w-8 h-px bg-[#1677C8]"></div>
              About MTD Heating
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Manrope']">
              Rooted in Shelley, Idaho.<br />
              <span className="text-gray-400">Committed to Real Workmanship.</span>
            </h2>

            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>
                {ABOUT_INFO.story}
              </p>
              <p>
                Whether roughing in custom homes with complex multi-zone layouts or installing clean ductless mini splits in detached shops, we focus on durability, efficiency, and honest communication.
              </p>
            </div>

            {/* Core Values / Standout points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ABOUT_INFO.pillars.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 bg-[#1677C8] hover:bg-[#125ea0] text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.phoneFormattedTel}
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest border border-white/15 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#1677C8]" />
                <span>(208) 520-8096</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
