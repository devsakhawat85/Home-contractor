import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from '../data/contractorData';

interface FooterProps {
  onOpenEstimate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimate }) => {
  return (
    <footer className="bg-[#121514] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Bio (2 cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-bold font-display uppercase tracking-tight text-white block">
              {COMPANY_INFO.name}
            </span>
            <p className="text-xs text-[#C5A880] font-semibold uppercase tracking-wider">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Award-winning residential general contracting and architectural renovations. Dedicated to fixed-price transparency, master craftsmanship, and hospital-grade dust containment across Western Washington.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-white/60">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>{COMPANY_INFO.license} · Bonded &amp; Insured</span>
            </div>
          </div>

          {/* Column 2: Architectural Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {SERVICE_AREAS.slice(0, 7).map((area) => (
                <li key={area.name}>
                  <span className="hover:text-white transition-colors cursor-default">
                    {area.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Studio */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-white/50">
                <Clock className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Registered General Contractor {COMPANY_INFO.license}.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#faq" className="hover:text-white transition-colors">Warranty Disclosures</a>
            <button
              type="button"
              onClick={onOpenEstimate}
              className="text-[#C5A880] hover:text-white transition-colors font-semibold uppercase tracking-wider"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
