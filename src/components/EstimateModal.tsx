import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  DollarSign,
  Home,
  User,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/contractorData';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    projectType?: string;
    budgetRange?: string;
    notes?: string;
  };
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectType, setProjectType] = useState('Kitchen');
  const [budgetRange, setBudgetRange] = useState('$50K–$100K');
  const [timeline, setTimeline] = useState('1–3 Months');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Seattle',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData?.projectType) {
      if (initialData.projectType.includes('Kitchen')) setProjectType('Kitchen');
      else if (initialData.projectType.includes('Bath')) setProjectType('Bathroom');
      else if (initialData.projectType.includes('Addition')) setProjectType('Addition');
      else if (initialData.projectType.includes('Whole')) setProjectType('Whole Home');
    }
    if (initialData?.budgetRange) {
      setBudgetRange(initialData.budgetRange);
    }
    if (initialData?.notes) {
      setFormData((prev) => ({ ...prev, notes: initialData.notes || '' }));
    }
  }, [initialData]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleReset();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const projectTypes = [
    { id: 'Kitchen', label: 'Kitchen Remodeling', desc: 'Islands, cabinetry, open concepts' },
    { id: 'Bathroom', label: 'Bathroom Remodeling', desc: 'Spa suites, curbless wet rooms' },
    { id: 'Whole Home', label: 'Whole Home Renovation', desc: 'Complete structural modernizations' },
    { id: 'Addition', label: 'Home Addition', desc: 'Second stories, primary suites' },
    { id: 'Basement', label: 'Basement & ADU', desc: 'Income suites, theaters, cellars' },
    { id: 'Exterior', label: 'Exterior Renovation', desc: 'Outdoor living, siding, decks' },
    { id: 'Other', label: 'Custom Architectural Build', desc: 'Specialized residential projects' },
  ];

  const budgetOptions = [
    { id: 'Under $25K', label: 'Under $25K', note: 'Targeted single-fixture or cosmetic refresh' },
    { id: '$25K–$50K', label: '$25K – $50K', note: 'Standard bathroom or kitchen refresh' },
    { id: '$50K–$100K', label: '$50K – $100K', note: 'Complete luxury kitchen or spa bath' },
    { id: '$100K+', label: '$100K+', note: 'Additions & full estate renovations' },
  ];

  const timelineOptions = [
    { id: 'ASAP', label: 'Immediately / ASAP', note: 'Permits pending or ready for immediate planning' },
    { id: '1–3 Months', label: '1 – 3 Months', note: 'Ideal planning, feasibility & engineering window' },
    { id: '3–6 Months', label: '3 – 6 Months', note: 'Upcoming season project allocation' },
    { id: '6+ Months', label: '6+ Months / Planning', note: 'Feasibility exploration & long-term budgeting' },
  ];

  const validateStep4 = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = 'Valid phone number is required';
    if (!formData.address.trim()) errs.address = 'Property address or zip code is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      if (validateStep4()) {
        setIsSubmitting(true);
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }, 500);
      }
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#FAF9F5] border border-neutral-300 max-w-xl lg:max-w-2xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col shadow-2xl relative rounded-none animate-in zoom-in-95 duration-200">
        
        {/* Sticky Header with prominent close (X) cross sign */}
        <div className="px-5 py-3.5 sm:px-6 sm:py-4 border-b border-neutral-200 bg-[#FAF9F5] shrink-0 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8C6D46] block">
              Free Project Estimate &amp; Consultation
            </span>
            <span className="text-xs font-mono text-neutral-600">
              Step {currentStep} of 4
            </span>
          </div>

          {/* Prominent Cross Button */}
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 sm:p-2 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/90 active:scale-95 transition-all border border-neutral-300 rounded-none cursor-pointer flex items-center gap-1 shrink-0 group"
            title="Close dialog"
            aria-label="Close estimate dialog"
          >
            <X className="w-5 h-5 text-neutral-800 group-hover:rotate-90 transition-transform duration-200" />
            <span className="text-[11px] font-bold uppercase tracking-wider hidden sm:inline text-neutral-700">Close</span>
          </button>
        </div>

        {/* Progress Indicator Line */}
        <div className="w-full bg-neutral-200 h-1 shrink-0">
          <div
            className="bg-[#181D1B] h-full transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto px-5 py-4 sm:px-6 sm:py-5 flex-1">
          {!isSubmitted ? (
            <div>
              {/* STEP 1: Project Type */}
              {currentStep === 1 && (
                <div className="animate-in fade-in duration-200">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-neutral-900 mb-1">
                    What type of project are you planning?
                  </h3>
                  <p className="text-xs text-neutral-600 mb-4">
                    Select the primary focus of your renovation or construction vision.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setProjectType(type.id)}
                        className={`p-3 text-left border transition-all cursor-pointer ${
                          projectType === type.id
                            ? 'bg-white border-[#8C6D46] shadow-xs ring-1 ring-[#8C6D46]'
                            : 'bg-white/70 border-neutral-200 hover:bg-white hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs sm:text-sm font-bold font-display text-neutral-900">
                            {type.label}
                          </span>
                          {projectType === type.id && (
                            <CheckCircle2 className="w-4 h-4 text-[#8C6D46] shrink-0" />
                          )}
                        </div>
                        <span className="text-[11px] text-neutral-500 leading-tight block">{type.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Estimated Budget */}
              {currentStep === 2 && (
                <div className="animate-in fade-in duration-200">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-neutral-900 mb-1">
                    What is your estimated investment budget?
                  </h3>
                  <p className="text-xs text-neutral-600 mb-4">
                    Knowing your range allows our team to recommend appropriate materials, fixtures, and engineering strategies.
                  </p>

                  <div className="space-y-2.5">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setBudgetRange(opt.id)}
                        className={`w-full p-3.5 text-left border transition-all flex items-center justify-between cursor-pointer ${
                          budgetRange === opt.id
                            ? 'bg-white border-[#8C6D46] shadow-xs ring-1 ring-[#8C6D46]'
                            : 'bg-white/70 border-neutral-200 hover:bg-white hover:border-neutral-300'
                        }`}
                      >
                        <div>
                          <span className="text-sm font-bold font-display text-neutral-900 block">
                            {opt.label}
                          </span>
                          <span className="text-xs text-neutral-500">{opt.note}</span>
                        </div>
                        {budgetRange === opt.id && (
                          <CheckCircle2 className="w-4 h-4 text-[#8C6D46] shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Planned Start Timeline */}
              {currentStep === 3 && (
                <div className="animate-in fade-in duration-200">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-neutral-900 mb-1">
                    When are you planning to begin construction?
                  </h3>
                  <p className="text-xs text-neutral-600 mb-4">
                    We schedule a limited number of projects simultaneously to guarantee daily superintendent presence on every job.
                  </p>

                  <div className="space-y-2.5">
                    {timelineOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setTimeline(opt.id)}
                        className={`w-full p-3.5 text-left border transition-all flex items-center justify-between cursor-pointer ${
                          timeline === opt.id
                            ? 'bg-white border-[#8C6D46] shadow-xs ring-1 ring-[#8C6D46]'
                            : 'bg-white/70 border-neutral-200 hover:bg-white hover:border-neutral-300'
                        }`}
                      >
                        <div>
                          <span className="text-sm font-bold font-display text-neutral-900 block">
                            {opt.label}
                          </span>
                          <span className="text-xs text-neutral-500">{opt.note}</span>
                        </div>
                        {timeline === opt.id && (
                          <CheckCircle2 className="w-4 h-4 text-[#8C6D46] shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Contact & Project Address Information */}
              {currentStep === 4 && (
                <div className="animate-in fade-in duration-200">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-neutral-900 mb-1">
                    Where should we send your feasibility review?
                  </h3>
                  <p className="text-xs text-neutral-600 mb-4">
                    Our senior estimator will review zoning, structural notes, and contact you for your free on-site walkthrough.
                  </p>

                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full p-2.5 text-xs sm:text-sm bg-white border ${
                          errors.name ? 'border-red-500' : 'border-neutral-300'
                        } focus:outline-none focus:border-[#181D1B]`}
                      />
                      {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(206) 555-0123"
                          className={`w-full p-2.5 text-xs sm:text-sm bg-white border ${
                            errors.phone ? 'border-red-500' : 'border-neutral-300'
                          } focus:outline-none focus:border-[#181D1B]`}
                        />
                        {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="eleanor@domain.com"
                          className={`w-full p-2.5 text-xs sm:text-sm bg-white border ${
                            errors.email ? 'border-red-500' : 'border-neutral-300'
                          } focus:outline-none focus:border-[#181D1B]`}
                        />
                        {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Project Address / City &amp; Zip *
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="e.g. 8420 SE 40th St, Mercer Island, WA 98040"
                        className={`w-full p-2.5 text-xs sm:text-sm bg-white border ${
                          errors.address ? 'border-red-500' : 'border-neutral-300'
                        } focus:outline-none focus:border-[#181D1B]`}
                      />
                      {errors.address && <p className="text-[11px] text-red-600 mt-0.5">{errors.address}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Project Vision / Special Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about desired features, architectural style, or wall removals..."
                        className="w-full p-2.5 text-xs sm:text-sm bg-white border border-neutral-300 focus:outline-none focus:border-[#181D1B]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Submission Success State */
            <div className="py-4 text-center animate-in fade-in duration-300">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <span className="text-[11px] uppercase tracking-widest text-[#8C6D46] font-bold">
                Inquiry Confirmed · Priority Ticket #NL-{Math.floor(1000 + Math.random() * 9000)}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 mt-1 mb-2">
                Thank You, {formData.name || 'Homeowner'}.
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-4 leading-relaxed">
                We have received your estimate request for your <strong className="text-neutral-900">{projectType}</strong> project ({budgetRange} tier).
                Our senior estimator will contact you at <strong className="text-neutral-900">{formData.phone}</strong> within 2 business hours.
              </p>

              <div className="p-3.5 bg-white border border-neutral-200 text-left text-xs space-y-1.5 mb-5 max-w-md mx-auto">
                <div className="flex justify-between text-neutral-500">
                  <span>Selected Service:</span>
                  <span className="font-semibold text-neutral-900">{projectType}</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Budget Tier:</span>
                  <span className="font-semibold text-neutral-900">{budgetRange}</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Target Start:</span>
                  <span className="font-semibold text-neutral-900">{timeline}</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Property:</span>
                  <span className="font-semibold text-neutral-900">{formData.address || 'Local Service Region'}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer with Action Buttons */}
        <div className="px-5 py-3 sm:px-6 sm:py-3.5 border-t border-neutral-200 bg-[#FAF9F5] shrink-0 flex items-center justify-between gap-3">
          {!isSubmitted ? (
            <>
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-neutral-950 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-neutral-500 hover:text-neutral-800 cursor-pointer"
                >
                  Cancel
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className="px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#181D1B] hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : currentStep < 4 ? (
                  <>
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <span>Request My Free Estimate</span>
                )}
              </button>
            </>
          ) : (
            <div className="w-full flex items-center justify-end gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-900 border border-neutral-300 hover:border-neutral-900 transition-colors text-center"
              >
                Call Office Direct
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#181D1B] hover:bg-neutral-800 transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
