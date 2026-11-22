import React, { useEffect, useState } from 'react';
import { Calendar, CheckCircle2, FileText, X } from 'lucide-react';
import { JOB_CATEGORIES } from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';

interface QuotationModalProps {
  isOpen: boolean;
  initialSector?: string;
  initialMode?: 'consultation' | 'quotation';
  onClose: () => void;
}

function resolveCategoryTitle(input?: string): string {
  if (!input) return JOB_CATEGORIES[0].title;
  const exact = JOB_CATEGORIES.find((c) => c.title.toLowerCase() === input.toLowerCase());
  if (exact) return exact.title;
  const firstWord = input.split(/[\s,&]+/)[0].toLowerCase();
  const partial = JOB_CATEGORIES.find(
    (c) =>
      c.title.toLowerCase().includes(firstWord) ||
      c.shortLabel.toLowerCase().includes(firstWord)
  );
  return partial ? partial.title : JOB_CATEGORIES[0].title;
}

export function QuotationModal({
  isOpen,
  initialSector,
  initialMode = 'consultation',
  onClose,
}: QuotationModalProps) {
  const [mode, setMode] = useState<'consultation' | 'quotation'>(initialMode);
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('United Arab Emirates');
  const [sector, setSector] = useState(() => resolveCategoryTitle(initialSector));
  const [headcount, setHeadcount] = useState('20');
  const [preferredSlot, setPreferredSlot] = useState('Morning · 10:00–13:00 NPT (Video Call)');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode, isOpen]);

  useEffect(() => {
    if (initialSector) {
      setSector(resolveCategoryTitle(initialSector));
    }
  }, [initialSector]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resetAndClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const resetFormFields = () => {
    setCompanyName('');
    setContactEmail('');
    setDestinationCountry('United Arab Emirates');
    setHeadcount('20');
    setNotes('');
    setErrors({});
    setSubmittedCode(null);
  };

  const resetAndClose = () => {
    resetFormFields();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!companyName.trim()) nextErrors.companyName = 'Company name is required.';
    if (!contactEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.trim())) {
      nextErrors.contactEmail = 'Valid corporate email is required.';
    }
    if (!destinationCountry.trim()) {
      nextErrors.destinationCountry = 'Destination country is required.';
    }
    const qty = Number(headcount);
    if (!headcount || Number.isNaN(qty) || qty < 1) {
      nextErrors.headcount = 'Enter at least 1 position.';
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const prefix = mode === 'consultation' ? 'CON' : 'QT';
    setSubmittedCode(`${prefix}-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071529]/70 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quotation-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
    >
      <div className="w-full max-w-xl bg-white border border-slate-200 rounded-[3px] overflow-hidden max-h-[92vh] flex flex-col">
        <div className="px-6 py-5 bg-[#0B1F3A] text-white flex items-center justify-between gap-4 shrink-0">
          <div>
            <p className="text-xs font-medium text-[#E2B857]">Employer Demand Desk</p>
            <h3 id="quotation-modal-title" className="mt-0.5 text-lg font-semibold">
              {mode === 'consultation'
                ? 'Book a Free Employer Consultation'
                : 'Request Manpower Quotation'}
            </h3>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close modal"
            className="w-9 h-9 inline-flex items-center justify-center rounded-[3px] text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          {submittedCode ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#0B1F3A]">
                <CheckCircle2 className="w-6 h-6 text-[#B8860B] shrink-0" />
                <h4 className="text-lg font-semibold">
                  {mode === 'consultation'
                    ? 'Consultation Session Scheduled'
                    : 'Quotation Request Recorded'}
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {mode === 'consultation' ? (
                  <>
                    Our Employer Relations Lead will send a calendar invite to{' '}
                    <span className="font-medium text-[#0F172A]">{contactEmail}</span> for{' '}
                    <span className="font-medium text-[#0F172A]">{preferredSlot}</span> covering{' '}
                    <span className="font-medium text-[#0F172A]">{headcount} roles</span> in{' '}
                    {sector} ({destinationCountry}).
                  </>
                ) : (
                  <>
                    We have prepared a commercial mobilization brief for{' '}
                    <span className="font-medium text-[#0F172A]">{companyName}</span> ({headcount}{' '}
                    personnel in {sector} for {destinationCountry}). Expect a tailored fee &
                    timeline schedule within 24 business hours.
                  </>
                )}
              </p>
              <div className="p-4 bg-[#F8FAFC] border border-slate-200 rounded-[3px] flex items-center justify-between text-xs">
                <span className="text-slate-500">Reference Number</span>
                <span className="tabular-figures font-semibold text-[#0B1F3A]">{submittedCode}</span>
              </div>
              <div className="pt-2 flex justify-end">
                <ActionButton variant="primary" size="md" onClick={resetAndClose}>
                  Done
                </ActionButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Interactive Mode Selector */}
              <div
                role="group"
                aria-label="Request type"
                className="grid grid-cols-2 gap-2 p-1 bg-[#F8FAFC] border border-slate-200 rounded-[3px]"
              >
                <button
                  type="button"
                  onClick={() => setMode('consultation')}
                  className={`flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-[2px] cursor-pointer transition-colors ${
                    mode === 'consultation'
                      ? 'bg-[#0B1F3A] text-white'
                      : 'text-slate-600 hover:text-[#0B1F3A]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Free Consultation Call</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('quotation')}
                  className={`flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-[2px] cursor-pointer transition-colors ${
                    mode === 'quotation'
                      ? 'bg-[#0B1F3A] text-white'
                      : 'text-slate-600 hover:text-[#0B1F3A]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Commercial Quotation</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-company" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Employer / Company Name
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                      if (errors.companyName) setErrors((p) => ({ ...p, companyName: '' }));
                    }}
                    placeholder="Al-Maha Logistics LLC"
                    className="w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                  />
                  {errors.companyName && <p className="mt-1 text-xs text-red-700">{errors.companyName}</p>}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Corporate Email
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => {
                      setContactEmail(e.target.value);
                      if (errors.contactEmail) setErrors((p) => ({ ...p, contactEmail: '' }));
                    }}
                    placeholder="procurement@company.com"
                    className="w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                  />
                  {errors.contactEmail && <p className="mt-1 text-xs text-red-700">{errors.contactEmail}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-country" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Destination Country
                  </label>
                  <input
                    id="modal-country"
                    type="text"
                    value={destinationCountry}
                    onChange={(e) => {
                      setDestinationCountry(e.target.value);
                      if (errors.destinationCountry) setErrors((p) => ({ ...p, destinationCountry: '' }));
                    }}
                    className="w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                  />
                  {errors.destinationCountry && (
                    <p className="mt-1 text-xs text-red-700">{errors.destinationCountry}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-headcount" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Required Headcount
                  </label>
                  <input
                    id="modal-headcount"
                    type="number"
                    min={1}
                    value={headcount}
                    onChange={(e) => {
                      setHeadcount(e.target.value);
                      if (errors.headcount) setErrors((p) => ({ ...p, headcount: '' }));
                    }}
                    className="w-full px-3.5 py-2 text-sm tabular-figures bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                  />
                  {errors.headcount && <p className="mt-1 text-xs text-red-700">{errors.headcount}</p>}
                </div>
              </div>

              <div className={mode === 'consultation' ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : ''}>
                <div>
                  <label htmlFor="modal-sector" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Industry Sector
                  </label>
                  <select
                    id="modal-sector"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                  >
                    {JOB_CATEGORIES.map((cat) => (
                      <option key={cat.slug} value={cat.title}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                {mode === 'consultation' && (
                  <div>
                    <label htmlFor="modal-slot" className="block text-xs font-medium text-[#0F172A] mb-1">
                      Preferred Call Window
                    </label>
                    <select
                      id="modal-slot"
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                    >
                      <option value="Morning · 10:00–13:00 NPT (Video Call)">
                        Morning · 10:00–13:00 NPT (Video)
                      </option>
                      <option value="Afternoon · 14:00–17:30 NPT (Video Call)">
                        Afternoon · 14:00–17:30 NPT (Video)
                      </option>
                      <option value="Direct Telephone Briefing">Direct Telephone Briefing</option>
                    </select>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-xs font-medium text-[#0F172A] mb-1">
                  Trade Classifications & Mobilization Window (Optional)
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="List specific job titles, language requirements, or accommodation structure..."
                  className="w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none resize-y"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
                <ActionButton variant="secondary" size="md" onClick={resetAndClose}>
                  Cancel
                </ActionButton>
                <ActionButton type="submit" variant="primary" size="md">
                  {mode === 'consultation'
                    ? 'Book Consultation Call'
                    : 'Submit Quotation Request'}
                </ActionButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
