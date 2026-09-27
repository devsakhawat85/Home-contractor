import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Award, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/contractorData';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onOpenEstimate: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate, onExploreWork }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#121514] text-white overflow-hidden pt-20 pb-16">
      {/* Background Cinematic Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Architectural modern residential home renovation by Northline Contracting"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG AAA text contrast across all screen areas */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121514]/95 via-[#121514]/75 to-[#121514]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121514] via-transparent to-[#121514]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#E5D7C3]">
              Building Homes. Creating Lasting Value.
            </p>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-display text-white leading-[1.08] text-balance mb-6">
            Your Home. <br />
            <span className="text-[#F2EFE9] font-light italic font-serif">Built Better.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-normal leading-relaxed max-w-2xl mb-8">
            From thoughtful renovations to complete home transformations, we bring skilled
            craftsmanship, transparent communication, and attention to every detail.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              type="button"
              onClick={onOpenEstimate}
              className="px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#121514] bg-[#F2EFE9] hover:bg-white active:scale-98 transition-all duration-200 text-center shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Get a Free Estimate</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={onExploreWork}
              className="px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-white/30 hover:border-white hover:bg-white/10 active:scale-98 transition-all duration-200 text-center"
            >
              Explore Our Work
            </button>
          </div>

          {/* Subtle Trust Statement */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/70 font-medium tracking-wide">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              {COMPANY_INFO.license}
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              Pacific Northwest & Eastside Local
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#C5A880]" />
              5-Year Workmanship Warranty
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust-strip"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white">Discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C5A880]" />
      </a>
    </section>
  );
};
