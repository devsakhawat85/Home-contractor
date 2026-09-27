import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, Sparkles, Clock, DollarSign, MoveHorizontal } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/contractorData';

export const BeforeAfterSection: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 lg:py-28 bg-[#181D1B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C5A880]" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A880]">
                Real Transformations
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-white leading-tight">
              See What A Difference Great Craftsmanship Makes.
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-3 max-w-xl">
              Drag the interactive divider to reveal the transformation from outdated, compartmentalized layouts to airy architectural living.
            </p>
          </div>

          {/* Project Case Switcher */}
          <div className="flex items-center gap-2 p-1 bg-white/10 backdrop-blur-sm border border-white/15">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCaseIndex === idx
                    ? 'bg-[#FAF9F5] text-[#121514]'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.roomName.split(' ')[0]} {item.roomName.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="bg-[#121514] border border-white/15 p-4 sm:p-6 shadow-2xl">
          {/* Main Visual Slider Container */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden select-none cursor-ew-resize bg-neutral-900 group"
          >
            {/* After Image (Background full width) */}
            <img
              src={currentCase.afterImage}
              alt={`After renovation: ${currentCase.roomName}`}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* "AFTER" Fixed Label */}
            <div className="absolute top-5 right-5 z-20 pointer-events-none">
              <span className="bg-[#121514]/80 text-[#FAF9F5] backdrop-blur-sm border border-white/20 text-xs font-bold tracking-widest uppercase px-3 py-1.5 shadow-md">
                AFTER
              </span>
            </div>

            {/* Before Image (Clipped by slider percentage) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentCase.beforeImage}
                alt={`Before renovation: ${currentCase.roomName}`}
                className="absolute inset-0 w-full h-full object-cover max-w-none grayscale brightness-90"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                referrerPolicy="no-referrer"
              />
              {/* "BEFORE" Fixed Label */}
              <div className="absolute top-5 left-5 z-20 pointer-events-none">
                <span className="bg-black/85 text-white/90 backdrop-blur-sm border border-white/20 text-xs font-bold tracking-widest uppercase px-3 py-1.5 shadow-md">
                  BEFORE
                </span>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center -ml-[1px]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)]" />

              {/* Center Handle Button */}
              <div className="absolute w-10 h-10 rounded-full bg-[#FAF9F5] text-[#121514] shadow-2xl flex items-center justify-center border-2 border-[#121514] cursor-ew-resize group-hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-[#181D1B]" />
              </div>
            </div>

            {/* Subtle instruction helper overlay at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-black/60 backdrop-blur-sm px-3 py-1 text-[11px] uppercase tracking-widest text-white/70">
              Drag left or right to compare
            </div>
          </div>

          {/* Context Details Grid */}
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">The Problem (Before)</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {currentCase.beforeDescription}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">The Solution (After)</span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                {currentCase.afterDescription}
              </p>
            </div>
          </div>

          {/* Project Metrics Strip */}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
            <span className="text-white/80 font-medium">
              Location: <strong className="text-white">{currentCase.location}</strong>
            </span>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                Duration: {currentCase.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#C5A880]" />
                Range: {currentCase.investmentTier}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
