import React from 'react';
import { TRUST_METRICS } from '../data/contractorData';

export const TrustBar: React.FC = () => {
  return (
    <section id="trust-strip" className="bg-[#181D1B] border-y border-white/10 text-white py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex flex-col justify-center ${
                idx !== 0 ? 'pt-4 md:pt-0 md:pl-8' : ''
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white tabular-nums">
                  {metric.value}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#C5A880] mt-1">
                {metric.label}
              </span>
              <p className="text-xs text-white/60 font-normal mt-0.5">
                {metric.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
