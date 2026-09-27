import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calendar, ShieldCheck, FileCheck, HardHat, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/contractorData';

interface ProcessJourneyProps {
  onOpenEstimate: () => void;
}

export const ProcessJourney: React.FC<ProcessJourneyProps> = ({ onOpenEstimate }) => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Calendar key="cal" className="w-5 h-5" />,
    <FileCheck key="file" className="w-5 h-5" />,
    <HardHat key="hat" className="w-5 h-5" />,
    <Sparkles key="spark" className="w-5 h-5" />,
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F5F2EB] text-[#191919] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#8C6D46]" />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6D46]">
              The Building Roadmap
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-900 leading-tight">
            A Better Building Experience, From Start To Finish.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-4 leading-relaxed">
            Eliminating anxiety through predictable phasing. Here is how your dream space transitions from an initial sketch to a finished architectural reality.
          </p>
        </div>

        {/* Desktop / Tablet Step Timeline Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-5 text-left border transition-all duration-200 cursor-pointer ${
                activeStep === idx
                  ? 'bg-white border-[#8C6D46] shadow-md ring-1 ring-[#8C6D46]'
                  : 'bg-white/60 border-neutral-200/80 hover:bg-white hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-bold ${activeStep === idx ? 'text-[#8C6D46]' : 'text-neutral-400'}`}>
                  STEP {step.step}
                </span>
                <span className={`p-1.5 rounded-none ${activeStep === idx ? 'bg-[#8C6D46]/10 text-[#8C6D46]' : 'text-neutral-400'}`}>
                  {stepIcons[idx]}
                </span>
              </div>
              <p className={`text-sm font-bold font-display ${activeStep === idx ? 'text-neutral-900' : 'text-neutral-700'}`}>
                {step.name.split(' & ')[0]}
              </p>
              <span className="text-[11px] font-medium text-neutral-500 mt-1 block">
                {step.duration}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Showcase Stage */}
        <div className="bg-white border border-neutral-200/90 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-white bg-[#181D1B] px-2.5 py-1">
                  PHASE {PROCESS_STEPS[activeStep].step}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6D46]">
                  {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mb-4">
                {PROCESS_STEPS[activeStep].name}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Concrete Phase Deliverable */}
              <div className="p-4 bg-[#FAF9F5] border-l-3 border-[#8C6D46] mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                  Guaranteed Phase Deliverable:
                </span>
                <p className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8C6D46] shrink-0" />
                  <span>{PROCESS_STEPS[activeStep].deliverable}</span>
                </p>
              </div>

              {/* Next step button */}
              <div className="flex items-center gap-4">
                {activeStep < PROCESS_STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-[#8C6D46] transition-colors"
                  >
                    <span>Proceed to Phase {PROCESS_STEPS[activeStep + 1].step}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onOpenEstimate}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181D1B] hover:bg-neutral-800 transition-colors"
                  >
                    Start Your Project with Us
                  </button>
                )}
              </div>
            </div>

            {/* Right side summary card */}
            <div className="lg:col-span-4 bg-[#FAF9F5] border border-neutral-200 p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-2">
                Client Guarantees
              </h4>

              <div className="space-y-3 text-xs text-neutral-600">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2B3A33] shrink-0 mt-0.5" />
                  <span>Weekly written budget & schedule reconciliations</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2B3A33] shrink-0 mt-0.5" />
                  <span>Direct cell phone access to your project superintendent</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2B3A33] shrink-0 mt-0.5" />
                  <span>Zero final payment until 100% punchlist sign-off</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenEstimate}
                  className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-white border border-neutral-300 hover:border-neutral-900 transition-colors"
                >
                  Book Initial Feasibility Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
