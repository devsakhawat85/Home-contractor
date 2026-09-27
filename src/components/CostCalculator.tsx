import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, Clock, DollarSign } from 'lucide-react';

interface CostCalculatorProps {
  onApplyEstimate: (scopeData: {
    projectType: string;
    budgetRange: string;
    notes: string;
  }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<'Kitchen' | 'Bathroom' | 'Whole Home' | 'Addition'>('Kitchen');
  const [finishTier, setFinishTier] = useState<'Refined' | 'Luxury' | 'Bespoke'>('Luxury');
  const [sqft, setSqft] = useState<number>(350);

  // Dynamic cost calculation logic based on industry standards for high-end residential
  const calculateEstimate = () => {
    let basePerSqft = 220;
    let baseFixed = 35000;
    let timelineWeeks = '8 – 10 Weeks';

    if (projectType === 'Kitchen') {
      basePerSqft = finishTier === 'Refined' ? 240 : finishTier === 'Luxury' ? 360 : 520;
      baseFixed = finishTier === 'Refined' ? 35000 : finishTier === 'Luxury' ? 55000 : 85000;
      timelineWeeks = finishTier === 'Refined' ? '7 – 9 Weeks' : finishTier === 'Luxury' ? '10 – 12 Weeks' : '14 – 16 Weeks';
    } else if (projectType === 'Bathroom') {
      basePerSqft = finishTier === 'Refined' ? 280 : finishTier === 'Luxury' ? 420 : 600;
      baseFixed = finishTier === 'Refined' ? 25000 : finishTier === 'Luxury' ? 42000 : 65000;
      timelineWeeks = finishTier === 'Refined' ? '5 – 7 Weeks' : finishTier === 'Luxury' ? '7 – 9 Weeks' : '10 – 12 Weeks';
    } else if (projectType === 'Whole Home') {
      basePerSqft = finishTier === 'Refined' ? 140 : finishTier === 'Luxury' ? 220 : 340;
      baseFixed = finishTier === 'Refined' ? 70000 : finishTier === 'Luxury' ? 120000 : 180000;
      timelineWeeks = finishTier === 'Refined' ? '16 – 22 Weeks' : finishTier === 'Luxury' ? '24 – 32 Weeks' : '36 – 48 Weeks';
    } else if (projectType === 'Addition') {
      basePerSqft = finishTier === 'Refined' ? 260 : finishTier === 'Luxury' ? 380 : 540;
      baseFixed = finishTier === 'Refined' ? 65000 : finishTier === 'Luxury' ? 95000 : 150000;
      timelineWeeks = finishTier === 'Refined' ? '14 – 18 Weeks' : finishTier === 'Luxury' ? '18 – 24 Weeks' : '26 – 34 Weeks';
    }

    const calculatedLow = Math.round((baseFixed + sqft * basePerSqft * 0.85) / 1000) * 1000;
    const calculatedHigh = Math.round((baseFixed + sqft * basePerSqft * 1.15) / 1000) * 1000;

    return {
      low: calculatedLow,
      high: calculatedHigh,
      timeline: timelineWeeks,
    };
  };

  const estimate = calculateEstimate();

  const handleApply = () => {
    const formattedRange = `$${(estimate.low / 1000).toFixed(0)}K – $${(estimate.high / 1000).toFixed(0)}K`;
    onApplyEstimate({
      projectType: `${projectType} Remodeling`,
      budgetRange: estimate.high > 150000 ? '$100K+' : '$50K–$100K',
      notes: `Estimated scope: ~${sqft} sq ft, ${finishTier} Architectural finish tier. Projected range: ${formattedRange}.`,
    });
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-[#FAF9F5] text-[#191919] relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Scope Inputs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#8C6D46]" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6D46]">
                Interactive Feasibility Tool
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-neutral-900 leading-tight mb-4">
              Explore Project Investment &amp; Timelines.
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed mb-8">
              Adjust project parameters below for an immediate, honest ballpark scope projection based on current local architectural labor and material costs.
            </p>

            {/* Parameter 1: Project Type */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                1. Select Remodel Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Kitchen', 'Bathroom', 'Whole Home', 'Addition'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setProjectType(type);
                      if (type === 'Kitchen') setSqft(350);
                      if (type === 'Bathroom') setSqft(180);
                      if (type === 'Whole Home') setSqft(2400);
                      if (type === 'Addition') setSqft(650);
                    }}
                    className={`py-3 px-3 text-xs font-semibold tracking-wider uppercase border transition-all text-center ${
                      projectType === type
                        ? 'bg-[#181D1B] text-white border-[#181D1B]'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter 2: Approximate Square Footage */}
            <div className="mb-8 p-5 bg-white border border-neutral-200">
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                  2. Approximate Square Footage
                </label>
                <span className="text-base font-bold font-mono text-[#8C6D46] tabular-nums">
                  {sqft.toLocaleString()} sq ft
                </span>
              </div>
              <input
                type="range"
                min={projectType === 'Bathroom' ? 50 : projectType === 'Kitchen' ? 100 : projectType === 'Addition' ? 200 : 800}
                max={projectType === 'Bathroom' ? 500 : projectType === 'Kitchen' ? 900 : projectType === 'Addition' ? 1800 : 5000}
                step={projectType === 'Whole Home' ? 50 : 25}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-none appearance-none cursor-pointer accent-[#8C6D46]"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-2">
                <span>Compact / Standard</span>
                <span>Spacious / Expanded</span>
                <span>Grand Estate</span>
              </div>
            </div>

            {/* Parameter 3: Architectural Finish Tier */}
            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                3. Architectural Specification Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    tier: 'Refined',
                    label: 'Refined Contemporary',
                    desc: 'Semi-custom cabinetry, engineered quartz, premium porcelain, high-end plumbing.',
                  },
                  {
                    tier: 'Luxury',
                    label: 'Architectural Luxury',
                    desc: 'Custom rift white oak millwork, natural quartzite slabs, Sub-Zero/Wolf, radiant heat.',
                  },
                  {
                    tier: 'Bespoke',
                    label: 'Bespoke Heritage Estate',
                    desc: 'Full architectural redesign, bookmatched marble, steel windows, circadian smart control.',
                  },
                ].map((item) => (
                  <button
                    key={item.tier}
                    type="button"
                    onClick={() => setFinishTier(item.tier as any)}
                    className={`p-4 text-left border transition-all ${
                      finishTier === item.tier
                        ? 'bg-white border-[#8C6D46] shadow-sm ring-1 ring-[#8C6D46]'
                        : 'bg-white/60 border-neutral-200 hover:bg-white hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold font-display text-neutral-900">
                        {item.label}
                      </span>
                      {finishTier === item.tier && <Check className="w-3.5 h-3.5 text-[#8C6D46]" />}
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-normal">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Projection Display Card */}
          <div className="lg:col-span-5 bg-[#181D1B] text-white p-7 sm:p-9 shadow-xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#C5A880]" />
                <span className="text-xs font-bold tracking-widest uppercase text-white/90">
                  Projected Scope Summary
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase bg-white/10 px-2 py-0.5 text-[#C5A880]">
                Live Estimate
              </span>
            </div>

            <div className="space-y-6 mb-8">
              {/* Estimated Budget Range */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60 block mb-1">
                  Estimated Investment Range
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-[#FAF9F5] tabular-nums">
                  ${(estimate.low / 1000).toFixed(0)}K – ${(estimate.high / 1000).toFixed(0)}K
                </div>
                <p className="text-[11px] text-white/50 mt-1">
                  Includes master trade labor, premium finishes, architectural permits, and 5-year warranty bond.
                </p>
              </div>

              {/* Estimated Timeline */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <span className="text-xs text-white/80">Estimated Construction Phase</span>
                </div>
                <span className="text-xs font-bold font-mono text-white tabular-nums">
                  {estimate.timeline}
                </span>
              </div>

              {/* Included Highlights */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                  <span>Guaranteed fixed-price bid upon engineering audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                  <span>Full-time on-site project superintendent</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                  <span>HEPA negative-air dust containment system</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={handleApply}
              className="w-full py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#121514] bg-[#FAF9F5] hover:bg-white transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Apply to Free Estimate Request</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-[10px] text-center text-white/40 mt-3">
              No obligation · Complimentary 60-min in-home architectural review
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
