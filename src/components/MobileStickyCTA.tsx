import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface MobileStickyCTAProps {
  onOpenQuoteModal: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B1726]/98 backdrop-blur-md border-t border-white/10 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={COMPANY_INFO.phoneFormattedTel}
          className="flex items-center justify-center gap-2 py-3 bg-[#1677C8] text-white font-bold text-xs uppercase tracking-wider shadow-md active:bg-[#125ea0]"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="flex items-center justify-center gap-2 py-3 bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/15 active:bg-white/20 cursor-pointer"
        >
          <FileText className="w-4 h-4 text-[#1677C8]" />
          <span>Free Quote</span>
        </button>
      </div>
    </div>
  );
};
