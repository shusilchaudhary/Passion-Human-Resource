import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  Copy,
  FileCheck2,
  FileText,
  Globe2,
  Scale,
  ShieldCheck,
  X,
} from 'lucide-react';
import {
  AGENCY_PROFILE,
  COMPLIANCE_LICENSES,
  ComplianceCredential,
  CORRIDOR_LEGAL_PROTOCOLS,
  ETHICAL_POLICIES,
} from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';
import { MetadataLine } from './ui/MetadataLine';
import { SectionHeading } from './ui/SectionHeading';

interface ComplianceLegalViewProps {
  onBackHome: () => void;
  onOpenConsultation: () => void;
}

export function ComplianceLegalView({
  onBackHome,
  onOpenConsultation,
}: ComplianceLegalViewProps) {
  const [selectedPolicyId, setSelectedPolicyId] = useState<string>(ETHICAL_POLICIES[0].id);
  const [inspectingCred, setInspectingCred] = useState<ComplianceCredential | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activePolicy =
    ETHICAL_POLICIES.find((p) => p.id === selectedPolicyId) ?? ETHICAL_POLICIES[0];

  useEffect(() => {
    if (!inspectingCred) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInspectingCred(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [inspectingCred]);

  const handleCopyText = (id: string, text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="bg-white">
      {/* Authority Header Band */}
      <section className="bg-[#0B1F3A] text-white border-b border-white/10 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                onBackHome();
              }}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#E2B857] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </a>

            <MetadataLine items={['Home', 'Compliance & Legal']} tone="dark" />
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-5">
              <MetadataLine
                items={[
                  AGENCY_PROFILE.location,
                  AGENCY_PROFILE.licenseLabel,
                  'ISO 9001:2015',
                  'NAFEA Accredited',
                ]}
                tone="dark"
                monoIndex={1}
              />

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-white">
                Regulatory Standing, Licensing & Ethical Recruitment Governance
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Passion Human Resource operates in strict accordance with Nepal&apos;s Foreign Employment Act 2064, international ISO quality standards, and zero-unauthorized-fee ethical recruitment charters—providing full auditability for global employers and job applicants.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <ActionButton variant="gold" size="md" onClick={onOpenConsultation}>
                  <span>Schedule Compliance Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </ActionButton>
                <span className="text-xs text-slate-300">
                  Welfare Desk: {AGENCY_PROFILE.welfareEmail}
                </span>
              </div>
            </div>

            {/* Right Verification Summary Card */}
            <div className="lg:col-span-4 bg-[#132B4D] border border-white/15 rounded-[3px] p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#E2B857]">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Verification Ledger</span>
              </div>

              <div className="divide-y divide-white/10 text-xs">
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-300">DOFE License</span>
                  <span className="tabular-figures font-medium text-white">897/079/080</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-300">ISO QMS Standard</span>
                  <span className="tabular-figures font-medium text-white">9001:2015 Active</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-300">Standing Status</span>
                  <span className="tabular-figures font-medium text-[#E2B857]">Good Standing</span>
                </div>
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-300">Sub-Agent Policy</span>
                  <span className="font-medium text-white">Strictly Prohibited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Licenses & ISO Certifications Grid */}
      <section className="py-16 lg:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            kicker="01. Statutory Licenses & Certifications"
            title="Government Registrations & ISO Quality Credentials"
            description="Inspect official license numbers, issuing ministries, validity periods, and verification references maintained by our Kathmandu compliance office."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPLIANCE_LICENSES.map((cred) => (
              <article
                key={cred.id}
                className="border border-slate-200 bg-white rounded-[3px] p-7 flex flex-col justify-between hover:border-[#0B1F3A] transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <MetadataLine
                      items={[cred.category, cred.jurisdiction]}
                    />
                    {cred.category === 'ISO Certification' ? (
                      <Award className="w-5 h-5 text-[#B8860B] shrink-0" />
                    ) : (
                      <FileCheck2 className="w-5 h-5 text-[#B8860B] shrink-0" />
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-[#0B1F3A]">{cred.title}</h3>
                  <p className="mt-1 text-xs font-medium text-slate-600">{cred.issuingBody}</p>

                  <div className="mt-4 p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-[3px] flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="tabular-figures font-semibold text-[#0B1F3A]">
                      {cred.registrationNo}
                    </span>
                    <span className="tabular-figures text-[#9A6F04] font-medium">
                      {cred.validThrough}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{cred.scope}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">{cred.verificationSummary}</span>
                  <button
                    type="button"
                    onClick={() => setInspectingCred(cred)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#9A6F04] underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Inspect Record</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Recruitment Policy Documents */}
      <section className="py-16 lg:py-24 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="pb-10 border-b border-slate-200">
            <SectionHeading
              kicker="02. Ethical Recruitment Policies"
              title="Audited Standards Protecting Candidates & Employers"
              description="Review our binding corporate policies governing zero-unauthorized-fee placement, contract transparency, passport custody, and worker grievance resolution."
            />
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Policy List */}
            <div className="lg:col-span-5 border-t border-b border-slate-200 divide-y divide-slate-200 bg-white">
              {ETHICAL_POLICIES.map((pol) => {
                const isSelected = pol.id === activePolicy.id;
                return (
                  <button
                    key={pol.id}
                    type="button"
                    onClick={() => setSelectedPolicyId(pol.id)}
                    className={`w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer transition-colors ${
                      isSelected ? 'bg-[#0B1F3A] text-white' : 'bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <span
                        className={`tabular-figures text-xs font-medium ${
                          isSelected ? 'text-[#E2B857]' : 'text-[#9A6F04]'
                        }`}
                      >
                        {pol.code} · {pol.effectiveDate}
                      </span>
                      <p
                        className={`mt-1 text-sm font-semibold ${
                          isSelected ? 'text-white' : 'text-[#0B1F3A]'
                        }`}
                      >
                        {pol.title}
                      </p>
                    </div>
                    <FileText
                      className={`w-4 h-4 shrink-0 mt-1 ${
                        isSelected ? 'text-[#E2B857]' : 'text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Policy Document Panel */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[3px] p-8 lg:p-10 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <MetadataLine
                    items={[activePolicy.code, activePolicy.effectiveDate, activePolicy.standardRef]}
                    monoIndex={0}
                  />
                  <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-[#0B1F3A]">
                    {activePolicy.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleCopyText(
                      activePolicy.id,
                      `${activePolicy.title} (${activePolicy.code})\n${activePolicy.summary}\n\nCommitments:\n- ${activePolicy.clauses.join('\n- ')}`
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-300 rounded-[3px] text-[#0B1F3A] hover:border-[#0B1F3A] cursor-pointer shrink-0"
                >
                  {copiedId === activePolicy.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>Policy Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Summary</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[15px] text-slate-700 leading-relaxed">{activePolicy.summary}</p>

              <div>
                <h4 className="text-xs font-semibold tracking-wide text-[#0B1F3A]">
                  Binding Operational Commitments
                </h4>
                <ul className="mt-4 space-y-3">
                  {activePolicy.clauses.map((clause) => (
                    <li key={clause} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                      <span>{clause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-slate-200 flex items-start gap-3 text-xs text-slate-600">
                <Scale className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0F172A]">Audit & Enforcement: </span>
                  <span>{activePolicy.enforcement}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bilateral Corridor Attestation Standards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-200">
            <SectionHeading
              kicker="03. Cross-Border Attestation"
              title="Destination-Specific Legal & Embassy Compliance"
              description="Every deployment adheres simultaneously to Nepal's Foreign Employment Act and host-nation labor ministries across all three global corridors."
            />
            <div className="shrink-0">
              <ActionButton variant="primary" size="md" onClick={onOpenConsultation}>
                Request Legal Attestation Guide
              </ActionButton>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[3px] overflow-hidden">
            {CORRIDOR_LEGAL_PROTOCOLS.map((item) => (
              <div key={item.region} className="bg-white p-7 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-[#0B1F3A]">{item.region}</h3>
                  <Globe2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                </div>
                <p className="text-xs font-medium text-[#9A6F04]">{item.authority}</p>
                <ul className="pt-3 border-t border-slate-200 space-y-2.5 text-sm text-slate-600">
                  {item.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 w-1.5 h-px bg-[#0B1F3A] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Certificate Inspection Modal */}
      {inspectingCred && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071529]/75 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-record-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setInspectingCred(null);
          }}
        >
          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-[3px] overflow-hidden">
            <div className="px-6 py-5 bg-[#0B1F3A] text-white flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#E2B857]">{inspectingCred.category}</p>
                <h3 id="cert-record-title" className="mt-0.5 text-base font-semibold">
                  Official Registry Specimen
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectingCred(null)}
                aria-label="Close certificate record"
                className="w-9 h-9 inline-flex items-center justify-center rounded-[3px] text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              {/* Architectural Certificate Frame */}
              <div className="border-2 border-[#0B1F3A] p-6 bg-[#F8FAFC] rounded-[3px] space-y-4">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-300">
                  <span className="text-xs font-bold tracking-wide text-[#0B1F3A]">
                    {AGENCY_PROFILE.brandName.toUpperCase()}
                  </span>
                  <span className="tabular-figures text-xs font-semibold text-[#9A6F04]">
                    {inspectingCred.registrationNo}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#0B1F3A]">{inspectingCred.title}</h4>
                  <p className="mt-1 text-xs text-slate-600">{inspectingCred.issuingBody}</p>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">{inspectingCred.scope}</p>

                <div className="pt-4 border-t border-slate-300 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Authorized Authority</span>
                    <span className="font-medium text-[#0F172A]">
                      {inspectingCred.signatoryTitle}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Validity Status</span>
                    <span className="tabular-figures font-semibold text-[#0B1F3A]">
                      {inspectingCred.validThrough}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() =>
                    handleCopyText(
                      inspectingCred.id,
                      `${inspectingCred.title} — Reg No: ${inspectingCred.registrationNo} (${inspectingCred.issuingBody})`
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0B1F3A] hover:text-[#9A6F04] cursor-pointer"
                >
                  {copiedId === inspectingCred.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>Verification ID Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Verification Details</span>
                    </>
                  )}
                </button>

                <ActionButton
                  variant="primary"
                  size="sm"
                  onClick={() => setInspectingCred(null)}
                >
                  Close
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
