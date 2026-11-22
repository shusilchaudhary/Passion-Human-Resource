import React, { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Check,
  ChevronRight,
  FileCheck,
  FileCheck2,
  Globe2,
  GraduationCap,
  PlaneTakeoff,
  ShieldCheck,
  Stethoscope,
  Wrench,
} from 'lucide-react';
import {
  AgencyService,
  CORE_SERVICES,
  EMPLOYER_DEMAND_DOCS,
  RECRUITMENT_STAGES,
  ServiceIconKey,
} from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';
import { SectionHeading } from './ui/SectionHeading';

interface RecruitmentProcessSectionProps {
  onOpenQuotation: () => void;
  onBookConsultation: () => void;
}

const SERVICE_ICONS: Record<ServiceIconKey, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  globe: Globe2,
  briefcase: Briefcase,
  wrench: Wrench,
  graduation: GraduationCap,
  stethoscope: Stethoscope,
  filecheck: FileCheck2,
  plane: PlaneTakeoff,
  shield: ShieldCheck,
};

type AudienceFilter = 'all' | 'employers' | 'candidates';

export function RecruitmentProcessSection({
  onOpenQuotation,
  onBookConsultation,
}: RecruitmentProcessSectionProps) {
  const [audienceFilter, setAudienceFilter] = useState<AudienceFilter>('all');
  const [viewMode, setViewMode] = useState<'workflow' | 'checklist'>('workflow');
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStage = RECRUITMENT_STAGES[activeIndex];

  const filteredServices: AgencyService[] = CORE_SERVICES.filter((srv) => {
    if (audienceFilter === 'all') return true;
    if (audienceFilter === 'employers') {
      return srv.audience === 'Employers' || srv.audience === 'Employers & Candidates';
    }
    return srv.audience === 'Candidates' || srv.audience === 'Employers & Candidates';
  });

  return (
    <section id="services" className="bg-white border-b border-slate-200 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Part 1: Full-Spectrum Agency Services Catalog */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <SectionHeading
            kicker="Integrated Manpower Services"
            title="Full-Cycle Recruitment, Consultation & Mobility Services"
            description="Passion Human Resource manages every operational pillar in-house—from executive workforce consultation and practical trade testing to GAMCA medical coordination, DOFE clearance, ticketing, and post-arrival welfare."
          />

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div
              role="group"
              aria-label="Filter agency services by audience"
              className="inline-flex items-center gap-1 p-1 bg-[#F8FAFC] border border-slate-200 rounded-[3px]"
            >
              {(
                [
                  { id: 'all', label: `All Services (${CORE_SERVICES.length})` },
                  { id: 'employers', label: 'Employer Services' },
                  { id: 'candidates', label: 'Candidate Support' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setAudienceFilter(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-[2px] whitespace-nowrap cursor-pointer transition-colors ${
                    audienceFilter === tab.id
                      ? 'bg-[#0B1F3A] text-white'
                      : 'text-slate-600 hover:text-[#0B1F3A]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <ActionButton variant="primary" size="md" onClick={onBookConsultation}>
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </ActionButton>
          </div>
        </div>

        {/* 8-Service Hairline Architectural Matrix */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-[3px] overflow-hidden">
          {filteredServices.map((service) => {
            const Icon = SERVICE_ICONS[service.iconKey];
            return (
              <article
                key={service.id}
                className="bg-white p-6 flex flex-col justify-between hover:bg-[#F8FAFC] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="tabular-figures text-xs font-medium text-[#9A6F04]">
                      {service.number} · {service.pillar}
                    </span>
                    <div className="w-8 h-8 rounded-[3px] bg-[#F8FAFC] border border-slate-200 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#0B1F3A]" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-[#0B1F3A] leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
                      >
                        <Check className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center justify-between gap-2 text-xs">
                  <span className="tabular-figures font-medium text-slate-500">
                    {service.sla}
                  </span>
                  <button
                    type="button"
                    onClick={onBookConsultation}
                    className="inline-flex items-center gap-1 font-semibold text-[#0B1F3A] hover:text-[#9A6F04] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Consult Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Part 2: Four-Stage Vetting Workflow & Employer Demand Checklist */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-200">
            <SectionHeading
              kicker="Deployment Architecture"
              title="Four-Stage Vetting & Mobilization Workflow"
              description="Every overseas deployment follows an auditable 35-day compliance sequence—from Demand Letter verification to post-arrival welfare follow-through."
            />

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div
                role="group"
                aria-label="Process documentation view"
                className="inline-flex items-center gap-1 p-1 bg-[#F8FAFC] border border-slate-200 rounded-[3px]"
              >
                <button
                  type="button"
                  onClick={() => setViewMode('workflow')}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-[2px] whitespace-nowrap cursor-pointer transition-colors ${
                    viewMode === 'workflow'
                      ? 'bg-[#0B1F3A] text-white'
                      : 'text-slate-600 hover:text-[#0B1F3A]'
                  }`}
                >
                  35-Day Workflow
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('checklist')}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-[2px] whitespace-nowrap cursor-pointer transition-colors ${
                    viewMode === 'checklist'
                      ? 'bg-[#0B1F3A] text-white'
                      : 'text-slate-600 hover:text-[#0B1F3A]'
                  }`}
                >
                  Employer Demand Checklist
                </button>
              </div>

              <ActionButton variant="secondary" size="md" onClick={onOpenQuotation}>
                <span>Request Process Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </ActionButton>
            </div>
          </div>

          {viewMode === 'checklist' ? (
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#9A6F04]">
                  <FileCheck className="w-4 h-4" />
                  <span>DOFE Attestation Readiness</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#0B1F3A]">
                  Five Mandatory Employer Documents for Nepal Recruitment
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Before any Nepalese recruitment agency may legally advertise or test candidates, the Department of Foreign Employment (DOFE) requires an embassy-attested Demand portfolio. Our compliance desk reviews your drafts within 24 hours.
                </p>
                <div className="pt-2">
                  <ActionButton variant="primary" size="md" onClick={onOpenQuotation}>
                    Request Sample Demand Templates
                  </ActionButton>
                </div>
              </div>

              <div className="lg:col-span-7 border-t border-b border-slate-200 divide-y divide-slate-200">
                {EMPLOYER_DEMAND_DOCS.map((item) => (
                  <div key={item.step} className="py-5 flex items-start gap-5">
                    <span className="tabular-figures text-sm font-medium text-[#9A6F04] shrink-0 mt-0.5">
                      {item.step}.
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-[#0B1F3A]">{item.doc}</h4>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Rail: Interactive 4-Step Editorial Index */}
              <div className="lg:col-span-5 divide-y divide-slate-200 border-t border-b border-slate-200">
                {RECRUITMENT_STAGES.map((stage, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={stage.number}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full py-5 px-4 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors duration-150 ${
                        isActive ? 'bg-[#F8FAFC]' : 'bg-white hover:bg-slate-50/70'
                      }`}
                    >
                      <div className="flex items-baseline gap-4 min-w-0">
                        <span
                          className={`tabular-figures text-sm font-medium shrink-0 ${
                            isActive ? 'text-[#9A6F04]' : 'text-slate-400'
                          }`}
                        >
                          {stage.number}.
                        </span>
                        <div className="min-w-0">
                          <p
                            className={`text-base font-semibold transition-colors ${
                              isActive ? 'text-[#0B1F3A]' : 'text-slate-700'
                            }`}
                          >
                            {stage.title}
                          </p>
                          <p className="mt-1 tabular-figures text-xs text-slate-500">
                            {stage.turnaround}
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                          isActive ? 'text-[#B8860B] translate-x-0.5' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Rail: Active Stage Operational Specification */}
              <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-[3px] p-8 lg:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div>
                    <span className="tabular-figures text-xs font-medium text-[#9A6F04]">
                      Stage {currentStage.number} · {currentStage.turnaround}
                    </span>
                    <h3 className="mt-1.5 text-xl sm:text-2xl font-semibold text-[#0B1F3A]">
                      {currentStage.title}
                    </h3>
                  </div>
                  <span className="tabular-figures text-xs text-slate-500">
                    Standard SLA Benchmark
                  </span>
                </div>

                <p className="mt-6 text-[15px] text-slate-700 leading-relaxed">
                  {currentStage.summary}
                </p>

                <div className="mt-8">
                  <h4 className="text-xs font-semibold tracking-wide text-[#0B1F3A]">
                    Key Deliverables & Verification Outputs
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {currentStage.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-600">
                    <span className="font-semibold text-[#0F172A]">Compliance Standard: </span>
                    {currentStage.complianceNote}
                  </p>
                  <ActionButton variant="primary" size="sm" onClick={onOpenQuotation}>
                    Start Demand Brief
                  </ActionButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

