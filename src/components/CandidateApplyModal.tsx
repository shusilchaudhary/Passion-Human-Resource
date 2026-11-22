import React, { useEffect, useState } from 'react';
import { CheckCircle2, FileText, X } from 'lucide-react';
import { JobOpening } from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';
import { MetadataLine } from './ui/MetadataLine';

interface CandidateApplyModalProps {
  isOpen: boolean;
  job: JobOpening | null;
  categoryTitle: string;
  onClose: () => void;
}

export function CandidateApplyModal({
  isOpen,
  job,
  categoryTitle,
  onClose,
}: CandidateApplyModalProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [experienceYears, setExperienceYears] = useState('2');
  const [passportStatus, setPassportStatus] = useState('Valid Passport (12+ Months)');
  const [cvFileName, setCvFileName] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [applicationRef, setApplicationRef] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resetAndClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  if (!isOpen || !job) return null;

  const resetAndClose = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setExperienceYears('2');
    setPassportStatus('Valid Passport (12+ Months)');
    setCvFileName('');
    setNotes('');
    setApplicationRef(null);
    setErrors({});
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!phone.trim() || phone.trim().length < 7) {
      nextErrors.phone = 'Valid mobile phone number is required.';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Valid email address is required.';
    }
    if (!notes.trim() || notes.trim().length < 10) {
      nextErrors.notes = 'Please briefly summarize your relevant work experience.';
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setApplicationRef(
      `APP-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 89999)}`
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071529]/70 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="candidate-apply-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
    >
      <div className="w-full max-w-xl bg-white border border-slate-200 rounded-[3px] overflow-hidden max-h-[92vh] flex flex-col">
        <div className="px-6 py-5 bg-[#0B1F3A] text-white flex items-start justify-between gap-4 shrink-0">
          <div>
            <p className="text-xs font-medium text-[#E2B857]">Candidate Application · {categoryTitle}</p>
            <h3 id="candidate-apply-title" className="mt-0.5 text-lg font-semibold">
              {job.title}
            </h3>
            <MetadataLine
              items={[job.location, job.skillLevel, `Lot ${job.demandLot}`]}
              tone="dark"
              monoIndex={2}
              className="mt-1.5"
            />
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close application modal"
            className="w-9 h-9 inline-flex items-center justify-center rounded-[3px] text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          {applicationRef ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#0B1F3A]">
                <CheckCircle2 className="w-6 h-6 text-[#B8860B] shrink-0" />
                <h4 className="text-lg font-semibold">Application Received</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thank you, <span className="font-medium text-[#0F172A]">{fullName}</span>. Your application for <span className="font-medium text-[#0F172A]">{job.title}</span> ({job.location}) has been logged with our Kathmandu screening desk. Shortlisted candidates are contacted directly for trade-test scheduling—no sub-agents involved.
              </p>
              <div className="p-4 bg-[#F8FAFC] border border-slate-200 rounded-[3px] space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Application Reference</span>
                  <span className="tabular-figures font-semibold text-[#0B1F3A]">
                    {applicationRef}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">DOFE Demand Lot</span>
                  <span className="tabular-figures text-slate-700">{job.demandLot}</span>
                </div>
              </div>
              <div className="pt-2 flex justify-end">
                <ActionButton variant="primary" size="md" onClick={resetAndClose}>
                  Done
                </ActionButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="apply-name" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Full Name (As per Passport)
                  </label>
                  <input
                    id="apply-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((p) => ({ ...p, fullName: '' }));
                    }}
                    placeholder="Suman Thapa"
                    className="w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-red-700">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="apply-phone" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Mobile Number
                  </label>
                  <input
                    id="apply-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((p) => ({ ...p, phone: '' }));
                    }}
                    placeholder="+977 98XXXXXXXX"
                    className="w-full px-3.5 py-2 text-sm tabular-figures bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-700">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="apply-email" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Email Address
                  </label>
                  <input
                    id="apply-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((p) => ({ ...p, email: '' }));
                    }}
                    placeholder="applicant@email.com"
                    className="w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="apply-exp" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Years of Experience
                  </label>
                  <input
                    id="apply-exp"
                    type="number"
                    min={0}
                    max={40}
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm tabular-figures bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="apply-passport" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Passport Status
                  </label>
                  <select
                    id="apply-passport"
                    value={passportStatus}
                    onChange={(e) => setPassportStatus(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none"
                  >
                    <option value="Valid Passport (12+ Months)">Valid Passport (12+ Months)</option>
                    <option value="Renewal in Progress">Renewal in Progress</option>
                    <option value="Applying for E-Passport">Applying for E-Passport</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="apply-cv" className="block text-xs font-medium text-[#0F172A] mb-1">
                    Upload CV / Trade Certificate
                  </label>
                  <label
                    htmlFor="apply-cv"
                    className="flex items-center justify-between gap-2 w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] cursor-pointer hover:border-[#0B1F3A]"
                  >
                    <span className="truncate text-slate-600 text-xs">
                      {cvFileName || 'Select PDF / DOCX'}
                    </span>
                    <FileText className="w-4 h-4 text-[#0B1F3A] shrink-0" />
                    <input
                      id="apply-cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="sr-only"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        setCvFileName(file ? file.name : '');
                      }}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="apply-notes" className="block text-xs font-medium text-[#0F172A] mb-1">
                  Trade Experience & Certifications Summary
                </label>
                <textarea
                  id="apply-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => {
                    setNotes(e.target.value);
                    if (errors.notes) setErrors((p) => ({ ...p, notes: '' }));
                  }}
                  placeholder="Describe previous roles, licenses, overseas experience, or trade certifications..."
                  className="w-full px-3.5 py-2 text-sm bg-[#F8FAFC] border border-slate-300 rounded-[3px] focus:bg-white focus:border-[#0B1F3A] focus:outline-none resize-y"
                />
                {errors.notes && <p className="mt-1 text-xs text-red-700">{errors.notes}</p>}
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-200">
                <ActionButton variant="secondary" size="md" onClick={resetAndClose}>
                  Cancel
                </ActionButton>
                <ActionButton type="submit" variant="primary" size="md">
                  Submit Application
                </ActionButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
