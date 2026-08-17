import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES, SERVICE_AREAS } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070e17] text-gray-400 border-t border-white/10">
      {/* Upper Navigation & Brand Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1677C8] flex items-center justify-center font-black italic text-xl text-white">
                MTD
              </div>
              <div>
                <div className="text-xl font-black text-white tracking-tighter font-['Manrope']">
                  MTD <span className="text-[#1677C8]">HEATING</span>
                </div>
                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                  Shelley, Idaho HVAC
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Precision heating, air conditioning, ductless mini split systems, and new construction ductwork for Shelley, Firth, Idaho Falls, and surrounding East Idaho communities.
            </p>

            <div className="pt-2 text-xs text-gray-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1677C8]" />
                <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zip}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#1677C8]" />
                <a href={COMPANY_INFO.phoneFormattedTel} className="hover:text-white font-bold text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1677C8]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors font-mono text-[11px]">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] font-mono mb-4 border-l-2 border-[#1677C8] pl-2">
              Our Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#1677C8] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#new-construction" className="hover:text-[#1677C8] transition-colors">
                  New Construction Duct Design
                </a>
              </li>
              <li>
                <a href="#mini-splits" className="hover:text-[#1677C8] transition-colors">
                  Multi-Zone Mini Split Heat Pumps
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] font-mono mb-4 border-l-2 border-[#1677C8] pl-2">
              Local Service Area
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {SERVICE_AREAS.map((a) => (
                <li key={a.name} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#1677C8] rounded-full"></span>
                  <span className={a.primary ? 'text-white font-semibold' : ''}>{a.name}, ID</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quality & Quick Call */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] font-mono mb-4 border-l-2 border-[#1677C8] pl-2">
              Direct Service
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Have a project requiring a fast estimate? Call or text directly to talk to our lead technician.
            </p>
            <a
              href={COMPANY_INFO.phoneFormattedTel}
              className="block p-4 bg-[#0B1726] border border-white/10 hover:border-[#1677C8] text-center transition-colors group"
            >
              <span className="block text-[10px] uppercase font-mono tracking-widest text-[#1677C8]">Call Us Directly</span>
              <span className="text-lg font-bold text-white group-hover:text-[#1677C8] transition-colors font-['Manrope']">
                (208) 520-8096
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Lower Copyright Strip */}
      <div className="bg-[#050a10] border-t border-white/5 py-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} MTD Heating. All rights reserved. Shelley, Idaho.
          </div>
          <div className="flex items-center gap-4">
            <span>HVAC Contractor in Bingham County</span>
            <span>•</span>
            <span>Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
