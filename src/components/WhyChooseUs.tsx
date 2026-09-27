import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEstimate: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEstimate }) => {
  const advantages = [
    {
      num: '01',
      title: 'Fixed-Price Bid Transparency',
      subtitle: 'Guaranteed cost certainty',
      description: 'We conduct full destructive and forensic scoping prior to contracting. What you sign is what you pay — no surprise change orders or escalating invoices.',
    },
    {
      num: '02',
      title: 'Dedicated Daily Superintendent',
      subtitle: 'Single point of accountability',
      description: 'Your project is never left unattended. A licensed lead superintendent is on-site every single workday coordinating trades and enforcing millimeter precision.',
    },
    {
      num: '03',
      title: 'Hospital-Grade Dust Containment',
      subtitle: 'Clean air for your family',
      description: 'Commercial negative-air machines, magnetic zip-doors, and floor protection keep toxic silica and demolition debris out of your furnace and living quarters.',
    },
    {
      num: '04',
      title: 'Artisanal Guild Network',
      subtitle: 'Master trades with decades together',
      description: 'From European-trained stone masons to bespoke cabinetry makers, we partner exclusively with verified master trades who have worked alongside us for over a decade.',
    },
    {
      num: '05',
      title: 'Real-Time Client Portal App',
      subtitle: 'Total transparency from your phone',
      description: 'Track daily progress photos, inspection approvals, upcoming weekly schedules, and material delivery dates from your private mobile portal.',
    },
    {
      num: '06',
      title: '5-Year Craftsmanship Guarantee',
      subtitle: '5x the state requirement',
      description: 'Washington State requires only 1 year of contractor coverage. We back our architectural builds with a comprehensive 5-year written warranty bond.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] text-[#191919] relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#8C6D46]" />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6D46]">
              The Northline Standard
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-900 leading-tight">
            Built On More Than Just Good Work.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-4 leading-relaxed max-w-2xl">
            Contracting has a reputation for delays, vague invoices, and disappearing crews. We engineered our entire operational system to deliver an orderly, white-glove building experience.
          </p>
        </div>

        {/* Advantages Grid with Refined Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {advantages.map((adv) => (
            <div
              key={adv.num}
              className="p-8 bg-white border border-neutral-200/80 shadow-xs hover:border-[#8C6D46]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-[#8C6D46] tabular-nums">
                    {adv.num}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    {adv.subtitle}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-neutral-900 mb-3">
                  {adv.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                <span>Standard on every contract</span>
                <span className="text-[#8C6D46]">✓ Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Proof highlight banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#181D1B] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-1">
              Zero Financial Risk Guarantee
            </p>
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Every dollar accounted for before your foundation is touched.
            </h4>
          </div>

          <button
            type="button"
            onClick={onOpenEstimate}
            className="shrink-0 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#121514] bg-[#FAF9F5] hover:bg-white transition-colors flex items-center gap-1.5"
          >
            <span>Request Fixed-Bid Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
