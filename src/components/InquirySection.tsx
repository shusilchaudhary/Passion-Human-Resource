import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { AGENCY_PROFILE, SECTOR_VERTICALS } from '../data/recruitmentData';
import { NepalProvinceMap } from './NepalProvinceMap';
import { ActionButton } from './ui/ActionButton';
import { SectionHeading } from './ui/SectionHeading';

interface InquiryFormState {
  firstName: string;
  lastName: string;
  email: string;
  sector: string;
  headcount: string;
  message: string;
}

const INITIAL_STATE: InquiryFormState = {
  firstName: '',
  lastName: '',
  email: '',
  sector: SECTOR_VERTICALS[0].name,
  headcount: '25',
  message: '',
};

export function InquirySection() {
  const [form, setForm] = useState<InquiryFormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormState, string>>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof InquiryFormState, string>> = {};
    if (!form.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!form.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Valid corporate email is required.';
    }
    const count = Number(form.headcount);
    if (!form.headcount || Number.isNaN(count) || count < 1) {
      nextErrors.headcount = 'Enter at least 1 position.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please include role scope or destination country (min. 10 chars).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const referenceCode = `PHR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(referenceCode);
  };

  const updateField = <K extends keyof InquiryFormState>(key: K, value: InquiryFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <section id="contact" className="bg-[#F8FAFC] border-b border-slate-200 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Employer Inquiry & Demand Brief Form */}
          <div className="lg:col-span-6">
            <SectionHeading
              kicker="Employer Consultation"
              title="Submit a Manpower Inquiry or Demand Brief"
              description="Share your workforce requirements, target mobilization timeline, and destination country. Our recruitment directors respond within one business day."
            />

            {submittedRef ? (
              <div className="mt-8 p-8 bg-white border border-slate-200 rounded-[3px] space-y-4">
                <div className="flex items-center gap-3 text-[#0B1F3A]">
                  <CheckCircle2 className="w-6 h-6 text-[#B8860B] shrink-0" />
                  <h3 className="text-lg font-semibold">Employer Inquiry Logged</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <span className="font-medium text-[#0F172A]">{form.firstName} {form.lastName}</span>. Your brief for <span className="font-medium text-[#0F172A]">{form.headcount} positions</span> in <span className="font-medium text-[#0F172A]">{form.sector}</span> has been assigned to our Kathmandu operations desk.
                </p>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Reference Number</span>
                  <span className="tabular-figures font-medium text-[#0B1F3A]">{submittedRef}</span>
                </div>
                <div className="pt-2">
                  <ActionButton
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSubmittedRef(null);
                      setForm(INITIAL_STATE);
                    }}
                  >
                    Submit Another Inquiry
                  </ActionButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-first-name"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      First Name
                    </label>
                    <input
                      id="inquiry-first-name"
                      type="text"
                      value={form.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      placeholder="Ramesh"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-[3px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-700">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-last-name"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      Last Name
                    </label>
                    <input
                      id="inquiry-last-name"
                      type="text"
                      value={form.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      placeholder="Adhikari"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-[3px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-700">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      Corporate Email
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="hr@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-[3px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-700">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-headcount"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      Estimated Headcount
                    </label>
                    <input
                      id="inquiry-headcount"
                      type="number"
                      min={1}
                      value={form.headcount}
                      onChange={(e) => updateField('headcount', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm tabular-figures bg-white border border-slate-300 rounded-[3px] text-[#0F172A] focus:border-[#0B1F3A] focus:outline-none"
                    />
                    {errors.headcount && (
                      <p className="mt-1 text-xs text-red-700">{errors.headcount}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-sector"
                    className="block text-xs font-medium text-[#0F172A] mb-1.5"
                  >
                    Primary Industry Sector
                  </label>
                  <select
                    id="inquiry-sector"
                    value={form.sector}
                    onChange={(e) => updateField('sector', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-[3px] text-[#0F172A] focus:border-[#0B1F3A] focus:outline-none"
                  >
                    {SECTOR_VERTICALS.map((sector) => (
                      <option key={sector.id} value={sector.name}>
                        {sector.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block text-xs font-medium text-[#0F172A] mb-1.5"
                  >
                    Role Requirements & Destination Country
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Specify trade classifications, destination country, and target arrival window..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-[3px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none resize-y"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-700">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <ActionButton type="submit" variant="primary" size="lg">
                    Send Employer Inquiry
                  </ActionButton>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Kathmandu Headquarters & Nepal Vector Map */}
          <div className="lg:col-span-6 space-y-8">
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              <div className="py-5 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <p className="text-xs font-medium text-slate-500">Corporate Headquarters</p>
                  <p className="mt-1 text-sm font-semibold text-[#0B1F3A]">
                    {AGENCY_PROFILE.address}
                  </p>
                  <p className="mt-0.5 tabular-figures text-xs text-slate-500">
                    {AGENCY_PROFILE.officeHours}
                  </p>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-500">
                    Dedicated Agency Communication Desks
                  </p>
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Employer Relations: {AGENCY_PROFILE.email}
                  </p>
                  <p className="text-xs text-slate-600">
                    Active Operations: {AGENCY_PROFILE.recruitmentEmail}
                  </p>
                  <p className="text-xs text-slate-600">
                    Worker Welfare & Grievance: {AGENCY_PROFILE.welfareEmail}
                  </p>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <p className="text-xs font-medium text-slate-500">Direct Telephone</p>
                  <p className="mt-1 tabular-figures text-sm font-semibold text-[#0B1F3A]">
                    {AGENCY_PROFILE.phone}
                  </p>
                </div>
              </div>
            </div>

            <NepalProvinceMap />
          </div>
        </div>
      </div>
    </section>
  );
}
