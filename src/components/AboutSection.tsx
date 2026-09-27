import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Users, Sparkles, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/contractorData';

interface AboutSectionProps {
  onOpenEstimate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEstimate }) => {
  const [showTeamModal, setShowTeamModal] = useState(false);

  const pillars = [
    {
      title: 'Fixed-Price Bid Integrity',
      desc: 'Forensic pre-construction investigation eliminates hidden surprises. Your quoted price is your final invoice.',
    },
    {
      title: 'Dedicated Jobsite Superintendent',
      desc: 'One full-time master builder on your project daily ensuring sub-trade coordination and uncompromising quality.',
    },
    {
      title: 'Hospital-Grade Dust Containment',
      desc: 'Negative-air HEPA scrubbers and sealed ZipWall zones so your family can breathe comfortably during work.',
    },
  ];

  const teamMembers = [
    {
      name: 'Thomas Lindqvist',
      role: 'Founder & Principal Master Builder',
      experience: '24 Years in Custom Residential Building',
      bio: 'Trained in Scandinavian timber framing and modern architectural envelopes. Thomas personally oversees project feasibility and structural engineering.',
    },
    {
      name: 'Elena Morales, AIA',
      role: 'Head of Architectural Design',
      experience: '16 Years in Luxury Residential Remodeling',
      bio: 'Specializes in spatial flow, circadian lighting, and custom joinery design that maximizes both aesthetics and everyday function.',
    },
    {
      name: 'Nathan Brooks',
      role: 'Senior Field Superintendent',
      experience: '18 Years Lead Carpenter & Site Manager',
      bio: 'Known for zero-punchlist handovers, rigorous daily jobsite cleanliness, and daily video logs for homeowners.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF9F5] text-[#191919] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Architectural Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-neutral-200 shadow-2xl">
              <img
                src="/src/assets/images/craftsman_detail_work_1790495752212.jpg"
                alt="Master carpenter fitting custom architectural joinery on jobsite"
                className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating caption card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-white/95 backdrop-blur-sm border border-neutral-200/80 shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6D46] mb-1">
                  On-Site Craftsmanship
                </p>
                <p className="text-xs sm:text-sm font-medium text-neutral-800">
                  Custom millwork and structural joinery fabricated and installed by licensed master carpenters.
                </p>
              </div>
            </div>

            {/* Subtle decorative geometric border */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#8C6D46]/40 pointer-events-none" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#8C6D46]" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6D46]">
                Craftsmanship You Can Count On
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-900 leading-[1.12] text-balance mb-6">
              We Don&apos;t Just Renovate Houses. <br />
              <span className="font-light italic font-serif text-neutral-700">
                We Transform The Way You Live.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
              At {COMPANY_INFO.name}, we believe home renovation should be an exciting, orderly,
              and elevated journey — not an unpredictable test of patience. We bridge the gap
              between high-concept architectural design and disciplined jobsite execution.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              By pairing dedicated in-house project superintendents with master artisans in stone,
              cabinetry, and timber framing, we bring precision engineering and white-glove respect
              into every living space we touch.
            </p>

            {/* 3 Pillars List */}
            <div className="space-y-4 mb-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2B3A33] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowTeamModal(true)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-900 hover:text-[#8C6D46] transition-colors py-2 border-b-2 border-neutral-900 hover:border-[#8C6D46] group"
              >
                <span>Meet Our Team & Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onOpenEstimate}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181D1B] hover:bg-neutral-800 transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team & Philosophy Modal */}
      {showTeamModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-[#FAF9F5] border border-neutral-300 max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl relative animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-5 py-4 sm:px-6 border-b border-neutral-200 bg-[#FAF9F5] shrink-0 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#8C6D46] font-bold block">
                  Leadership &amp; Master Guild
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 mt-0.5">
                  The People Behind Northline
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowTeamModal(false)}
                className="p-1.5 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/80 transition-colors border border-neutral-300 cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto px-5 py-4 sm:px-6 sm:py-5 flex-1 space-y-4">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We do not rely on random subcontractors. Our core field leadership and master trade
                guilds have worked collaboratively for over a decade under rigid quality standards.
              </p>

              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div key={member.name} className="p-3.5 bg-white border border-neutral-200">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <h4 className="text-sm font-bold text-neutral-900">{member.name}</h4>
                      <span className="text-xs text-[#8C6D46] font-medium">{member.experience}</span>
                    </div>
                    <p className="text-[11px] font-semibold text-neutral-500 mb-1.5 uppercase tracking-wide">
                      {member.role}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 sm:px-6 border-t border-neutral-200 bg-[#FAF9F5] shrink-0 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowTeamModal(false)}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-900 cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowTeamModal(false);
                  onOpenEstimate();
                }}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#181D1B] hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
