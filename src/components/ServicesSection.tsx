import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, DollarSign, X } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/contractorData';

interface ServicesSectionProps {
  onSelectServiceForEstimate: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForEstimate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F2EB] text-[#191919] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#8C6D46]" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6D46]">
                Architectural Capabilities
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-900 leading-tight">
              Built Around Your Vision.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md">
            Whether re-imagining a chef-grade kitchen or expanding your living footprint with a second-story master wing, every project is engineered with architectural rigor.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer bg-white border border-neutral-200/90 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={`${service.title} by Northline Contracting`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Editorial Number */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-white bg-black/40 backdrop-blur-sm px-2.5 py-1">
                    {service.number}
                  </span>
                </div>

                {/* Timeline chip */}
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5">
                    {service.timeline}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-neutral-900 mb-2 group-hover:text-[#8C6D46] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8C6D46] uppercase tracking-wider mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-[#8C6D46] transition-colors">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-[#FAF9F5] border border-neutral-300 max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl relative animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-5 py-4 sm:px-6 border-b border-neutral-200 bg-[#FAF9F5] shrink-0 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-mono font-bold text-[#8C6D46]">{selectedService.number}</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6D46]">Service Overview</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900">
                  {selectedService.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/80 transition-colors border border-neutral-300 cursor-pointer shrink-0"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto px-5 py-4 sm:px-6 sm:py-5 flex-1 space-y-5">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-white border border-neutral-200">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-neutral-500 tracking-wider block">Typical Schedule</span>
                    <p className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5">{selectedService.timeline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-neutral-500 tracking-wider block">Investment Guide</span>
                    <p className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5">{selectedService.startingRange}</p>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2.5">
                  Key Scope Deliverables Included:
                </h4>
                <div className="space-y-2">
                  {selectedService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2B3A33] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for note */}
              <div className="p-3 bg-[#F2EFE9] border-l-2 border-[#8C6D46] text-xs text-neutral-700 italic">
                <strong>Ideal For:</strong> {selectedService.idealFor}
              </div>
            </div>

            {/* Modal actions */}
            <div className="px-5 py-3 sm:px-6 border-t border-neutral-200 bg-[#FAF9F5] shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-900 text-center cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForEstimate(title);
                }}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181D1B] hover:bg-neutral-800 transition-colors text-center cursor-pointer"
              >
                Request Estimate for this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
