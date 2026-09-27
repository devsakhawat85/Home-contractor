import React, { useState } from 'react';
import { MapPin, CheckCircle2, ArrowRight, Search, AlertCircle } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/contractorData';

interface ServiceAreaCheckerProps {
  onOpenEstimate: () => void;
}

export const ServiceAreaChecker: React.FC<ServiceAreaCheckerProps> = ({ onOpenEstimate }) => {
  const [zipInput, setZipInput] = useState('');
  const [searchStatus, setSearchStatus] = useState<'idle' | 'success' | 'out_of_area'>('idle');
  const [matchedCity, setMatchedCity] = useState('');

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    // Check if zip matches any in list or general WA 980xx / 981xx
    const foundArea = SERVICE_AREAS.find((area) =>
      area.zips.includes(cleanZip)
    );

    if (foundArea) {
      setMatchedCity(foundArea.name);
      setSearchStatus('success');
    } else if (cleanZip.startsWith('980') || cleanZip.startsWith('981') || cleanZip.startsWith('982')) {
      setMatchedCity('Greater Puget Sound Service Corridor');
      setSearchStatus('success');
    } else {
      setSearchStatus('out_of_area');
    }
  };

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-[#181D1B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Geographic Scope */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C5A880]" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A880]">
                Local Coverage & Licensure
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-white leading-tight mb-4">
              Proudly Serving Homeowners Across The Eastside &amp; Greater Metro.
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">
              We maintain active municipal contractor licensing, permit expediting relationships, and dedicated mobile staging trailers across all premier residential neighborhoods in Western Washington.
            </p>

            {/* Neighborhoods Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area.name}
                  className="p-3 bg-white/5 border border-white/10 hover:border-white/30 transition-colors flex items-center gap-2 text-xs font-medium text-white/90"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>{area.name}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/50">
              *If your property is outside these direct zones, please inquire. We frequently undertake custom residential estates throughout the greater region.
            </p>
          </div>

          {/* Right Column: Interactive Zip Availability Checker */}
          <div className="lg:col-span-5 bg-[#121514] border border-white/15 p-6 sm:p-8 shadow-2xl">
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A880] block mb-1">
                Direct Field Check
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                Check Service Availability
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Enter your 5-digit zip code to verify active crew coverage and booking priority.
              </p>
            </div>

            <form onSubmit={handleCheckZip} className="space-y-4 mb-6">
              <div className="relative">
                <input
                  type="text"
                  maxLength={5}
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value.replace(/\D/g, ''));
                    setSearchStatus('idle');
                  }}
                  placeholder="e.g. 98004, 98101, 98040"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3.5 text-sm font-mono focus:outline-none focus:border-[#C5A880] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#FAF9F5] hover:bg-white text-[#121514] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Verify</span>
                </button>
              </div>
            </form>

            {/* Results Feedback Box */}
            {searchStatus === 'success' && (
              <div className="p-4 bg-[#2B3A33]/80 border border-[#486358] text-white animate-in fade-in duration-200 mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold">Crew Active in {matchedCity}</p>
                    <p className="text-[11px] text-white/80 mt-1">
                      Our superintendents and trades are currently operating in your area with expedited site consult availability.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {searchStatus === 'out_of_area' && (
              <div className="p-4 bg-amber-950/60 border border-amber-800 text-white animate-in fade-in duration-200 mb-6">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold">Extended Territory Consultation</p>
                    <p className="text-[11px] text-white/80 mt-1">
                      Your zip code is outside our standard daily radius, but we review custom architectural projects on a case-by-case basis.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={onOpenEstimate}
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#121514] bg-[#FAF9F5] hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <span>Schedule Priority Site Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
