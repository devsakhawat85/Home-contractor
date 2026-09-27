import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/contractorData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF9F5] text-[#191919] relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#8C6D46]" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6D46]">
                Client Experience
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-900 leading-tight">
              What Our Clients Say.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#8C6D46]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
              4.96 Rating Across 240+ Homeowners
            </span>
          </div>
        </div>

        {/* Testimonials Grid / Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="p-8 bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between relative group hover:border-[#8C6D46]/40 transition-colors"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-[#8C6D46] mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed italic mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Client Attributions (No static pill badges, clean typography) */}
              <div className="pt-5 border-t border-neutral-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-neutral-900 font-display">
                    {t.clientName}
                  </h3>
                  <span className="text-[11px] font-medium text-neutral-500">
                    {t.location}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-500 mt-1">
                  <span>{t.projectType}</span>
                  <span className="inline-flex items-center gap-1 text-[#2B3A33] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2B3A33]" />
                    Verified Homeowner
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
