import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/contractorData';

interface MobileStickyBarProps {
  onOpenEstimate: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenEstimate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#121514]/95 backdrop-blur-md border-t border-white/15 px-3 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 bg-white/5 active:bg-white/15 transition-colors whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Call Now</span>
        </a>

        <button
          type="button"
          onClick={onOpenEstimate}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#121514] bg-[#FAF9F5] hover:bg-white active:scale-98 transition-colors whitespace-nowrap"
        >
          <span>Free Estimate</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
