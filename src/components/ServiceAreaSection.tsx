import React from 'react';
import { MapPin, Navigation, Phone, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/content';

interface ServiceAreaProps {
  onOpenQuoteModal: () => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 bg-[#070e17] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Coverage List & Information */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] font-mono">
              <div className="w-8 h-px bg-[#1677C8]"></div>
              Local Idaho Service Area
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Manrope']">
              Based in Shelley, Idaho.<br />
              <span className="text-gray-400">Serving Bingham & Bonneville Counties.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              We provide on-site HVAC installations, new construction mechanical rough-ins, mini split setups, and equipment service across the Snake River Valley.
            </p>

            {/* Service Area Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {SERVICE_AREAS.map((town) => (
                <div
                  key={town.name}
                  className={`p-3.5 border transition-all ${
                    town.primary
                      ? 'bg-[#1677C8]/15 border-[#1677C8] text-white font-bold'
                      : 'bg-[#0B1726] border-white/10 text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${town.primary ? 'text-[#1677C8]' : 'text-gray-500'}`} />
                    <span className="text-xs">{town.name}</span>
                  </div>
                  {town.primary && (
                    <span className="text-[9px] uppercase tracking-widest text-[#1677C8] font-mono block mt-1">
                      HQ / Primary Hub
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Note on extended area */}
            <p className="text-xs text-gray-400 font-mono">
              * Working on a custom build or shop outside these exact towns? Give us a call to confirm availability.
            </p>
          </div>

          {/* Right Column: Local Map Visual / Call Card */}
          <div className="lg:col-span-5 bg-[#0B1726] border border-white/10 p-8 shadow-2xl space-y-6 relative">
            <div className="w-12 h-12 bg-[#1677C8]/20 text-[#1677C8] flex items-center justify-center">
              <Navigation className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white font-['Manrope'] mb-2">
                Fast Local Communication
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                When you call MTD Heating, you're working directly with the craftsmen on your roof and in your mechanical room.
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 space-y-2 text-xs text-gray-300">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">Headquarters:</span>
                <span className="font-bold text-white">Shelley, ID 83274</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">Direct Phone:</span>
                <a href={COMPANY_INFO.phoneFormattedTel} className="font-bold text-[#1677C8] hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Email:</span>
                <span className="font-bold text-white font-mono text-[11px]">{COMPANY_INFO.email}</span>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-4 bg-[#1677C8] hover:bg-[#125ea0] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Schedule Local Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
