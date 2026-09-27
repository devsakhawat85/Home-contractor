import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/contractorData';

interface FaqSectionProps {
  onOpenEstimate: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEstimate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pricing', 'Process', 'Permits & Quality', 'Getting Started'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF9F5] text-[#191919] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#8C6D46]" />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6D46]">
              Clear Answers
            </p>
            <span className="w-5 h-[1.5px] bg-[#8C6D46]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-900 leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-4 leading-relaxed">
            Straightforward transparency on pricing, permit expediting, and what living through an architectural renovation really looks like.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors border ${
                selectedCategory === cat
                  ? 'bg-[#181D1B] text-white border-[#181D1B]'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="bg-white border border-neutral-200/90 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-display text-neutral-900 pr-2">
                    {faq.question}
                  </span>
                  <span className="shrink-0 p-1 text-[#8C6D46]">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-12 text-center p-6 bg-[#F2EFE9] border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-neutral-900">Have a question specific to your property?</h3>
            <p className="text-xs text-neutral-600 mt-0.5">
              Speak directly with our senior project estimator.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenEstimate}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181D1B] hover:bg-neutral-800 transition-colors shrink-0"
          >
            Ask An Estimator
          </button>
        </div>
      </div>
    </section>
  );
};
