import React from 'react';
import { ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/contractorData';

interface FinalCtaProps {
  onOpenEstimate: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenEstimate }) => {
  return (
    <section className="relative py-28 lg:py-36 bg-[#121514] text-white overflow-hidden">
      {/* Background Image with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_modern_renovation_1790495714934.jpg"
          alt="Luxury architectural residence background"
          className="w-full h-full object-cover object-center brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121514] via-[#121514]/85 to-[#121514]/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4 justify-center">
          <span className="w-6 h-[1.5px] bg-[#C5A880]" />
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#E5D7C3]">
            Start Your Transformation
          </p>
          <span className="w-6 h-[1.5px] bg-[#C5A880]" />
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-display text-white leading-tight mb-6 text-balance">
          Ready To Build Something Better?
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us about your project and let&apos;s discuss how we can bring your vision to life with fixed-price transparency and master craftsmanship.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={onOpenEstimate}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#121514] bg-[#FAF9F5] hover:bg-white active:scale-98 transition-all shadow-xl flex items-center justify-center gap-2 group"
          >
            <span>Get Your Free Estimate</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-white/30 hover:border-white hover:bg-white/10 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Trust points */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
          <span>Complimentary in-home assessment</span>
          <span>·</span>
          <span>Zero pressure or sales obligation</span>
          <span>·</span>
          <span>Detailed written feasibility report</span>
        </div>
      </div>
    </section>
  );
};
