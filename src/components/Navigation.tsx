import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/contractorData';

interface NavigationProps {
  onOpenEstimate: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Before & After', href: '#before-after' },
    { label: 'Process', href: '#process' },
    { label: 'Calculator', href: '#estimator' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121514]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg text-white'
            : 'bg-gradient-to-b from-[#121514]/80 via-[#121514]/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            {/* Zone 1: Single element brand wordmark */}
            <a
              href="#"
              className="text-base sm:text-lg xl:text-xl font-bold tracking-tight font-display text-white hover:text-white/90 transition-colors uppercase whitespace-nowrap shrink-0"
            >
              Northline Contracting
            </a>

            {/* Zone 2: Navigation links - responsive and never overlapping */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-xs tracking-wider uppercase font-medium text-white/80 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200 relative group py-1 whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Intermediate lg screen nav (1024px-1279px) with top 5 essential links to prevent overcrowding */}
            <nav className="hidden lg:flex xl:hidden items-center gap-3.5 text-[11px] tracking-wider uppercase font-medium text-white/80 shrink-0">
              {navLinks.filter(l => ['Services', 'Portfolio', 'Process', 'Calculator', 'FAQ'].includes(l.label)).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200 relative group py-1 whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions */}
            <div className="flex items-center gap-3 xl:gap-4 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white tracking-wider uppercase transition-colors whitespace-nowrap"
                title="Call our office"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="tabular-nums">{COMPANY_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenEstimate}
                className="px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-[#121514] bg-[#F2EFE9] hover:bg-white active:scale-98 transition-all duration-200 rounded-none shadow-sm flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>Get a Free Estimate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white/90 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#121514]/98 backdrop-blur-xl flex flex-col justify-between p-6 pt-20 animate-in fade-in duration-200">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2 text-white/70 hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest text-[#C5A880]">Menu</span>
              <p className="text-xl font-bold font-display text-white mt-1">Northline Contracting</p>
            </div>

            <nav className="flex flex-col space-y-4 text-base font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/40" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call Direct: {COMPANY_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full py-3 text-sm font-semibold uppercase tracking-wider text-[#121514] bg-[#F2EFE9] hover:bg-white text-center transition-colors"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      )}
    </>
  );
};
