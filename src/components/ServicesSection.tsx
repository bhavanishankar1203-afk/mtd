import React from 'react';
import { 
  Building2, 
  Wind, 
  Flame, 
  Snowflake, 
  Wrench, 
  LayoutGrid, 
  ArrowRight, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { CORE_SERVICES } from '../data/content';

interface ServicesSectionProps {
  onOpenQuoteModal: () => void;
  onScrollToContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteModal,
  onScrollToContact
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Wind': return <Wind className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'Snowflake': return <Snowflake className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      default: return <LayoutGrid className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0B1726] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] mb-3 font-mono">
              <div className="w-8 h-px bg-[#1677C8]"></div>
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Manrope']">
              Complete HVAC Solutions<br />
              <span className="text-gray-400">Built to Last in Idaho Winters & Summers</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#1677C8] hover:bg-[#125ea0] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 transition-all flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className={`bg-[#0e1d2f] border ${
                service.badge ? 'border-[#1677C8]/50 shadow-lg shadow-blue-950/40' : 'border-white/10'
              } p-8 flex flex-col justify-between hover:border-[#1677C8] transition-all duration-300 group relative`}
            >
              {/* Optional Top Badge */}
              {service.badge && (
                <div className="absolute top-0 right-0 bg-[#1677C8] text-white text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1 font-mono">
                  {service.badge}
                </div>
              )}

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 bg-white/5 border border-white/10 group-hover:bg-[#1677C8] group-hover:text-white text-[#1677C8] flex items-center justify-center mb-6 transition-colors">
                  {getIcon(service.icon)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1677C8] transition-colors font-['Manrope']">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 border-t border-white/10 pt-4 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#1677C8] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1677C8] uppercase tracking-wider group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 bg-white/5 border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <HelpCircle className="w-5 h-5 text-[#1677C8] shrink-0" />
            <span>Not sure what system sizing or configuration matches your build?</span>
          </div>
          <button
            onClick={onScrollToContact}
            className="text-xs font-bold text-white uppercase tracking-widest bg-white/10 hover:bg-white/20 border border-white/15 px-5 py-2.5 transition-colors cursor-pointer"
          >
            Consult With Our Team
          </button>
        </div>

      </div>
    </section>
  );
};
