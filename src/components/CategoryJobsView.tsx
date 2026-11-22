import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MapPin,
  Search,
  Share2,
  ShieldCheck,
  Users,
} from 'lucide-react';
import {
  AGENCY_PROFILE,
  CorridorRegion,
  JOB_CATEGORIES,
  JobOpening,
  SkillLevel,
} from '../data/recruitmentData';
import { CandidateApplyModal } from './CandidateApplyModal';
import { ActionButton } from './ui/ActionButton';
import { MediaImage } from './ui/MediaImage';
import { MetadataLine } from './ui/MetadataLine';

interface CategoryJobsViewProps {
  categorySlug: string;
  onSelectCategory: (slug: string) => void;
  onBackHome: () => void;
  onOpenQuotation: (preselectedSector?: string) => void;
}

const SKILL_LEVELS: Array<'All' | SkillLevel> = [
  'All',
  'Unskilled',
  'Semi-Skilled',
  'Skilled',
  'Supervisory',
];

const REGIONS: Array<'All' | CorridorRegion> = [
  'All',
  'Middle East & GCC',
  'Europe',
  'North America & East Asia',
];

export function CategoryJobsView({
  categorySlug,
  onSelectCategory,
  onBackHome,
  onOpenQuotation,
}: CategoryJobsViewProps) {
  const category =
    JOB_CATEGORIES.find((cat) => cat.slug === categorySlug) ?? JOB_CATEGORIES[0];

  const [selectedLevel, setSelectedLevel] = useState<'All' | SkillLevel>('All');
  const [selectedRegion, setSelectedRegion] = useState<'All' | CorridorRegion>('All');
  const [keyword, setKeyword] = useState('');
  const [selectedJobId, setSelectedJobId] = useState<string>(category.jobs[0].id);
  const [applyJob, setApplyJob] = useState<JobOpening | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setSelectedLevel('All');
    setSelectedRegion('All');
    setKeyword('');
    setSelectedJobId(category.jobs[0].id);
    setCopiedLink(false);
  }, [category]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 1800);
  };

  const filteredJobs = useMemo(() => {
    return category.jobs.filter((job) => {
      if (selectedLevel !== 'All' && job.skillLevel !== selectedLevel) return false;
      if (selectedRegion !== 'All' && job.region !== selectedRegion) return false;
      if (keyword.trim()) {
        const q = keyword.trim().toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesLoc = job.location.toLowerCase().includes(q);
        const matchesLot = job.demandLot.toLowerCase().includes(q);
        if (!matchesTitle && !matchesLoc && !matchesLot) return false;
      }
      return true;
    });
  }, [category, selectedLevel, selectedRegion, keyword]);

  const activeJob =
    filteredJobs.find((j) => j.id === selectedJobId) ?? filteredJobs[0] ?? null;

  const totalOpenings = category.jobs.reduce((acc, j) => acc + j.openings, 0);

  return (
    <div className="bg-white">
      {/* Category Header Band */}
      <section className="bg-[#0B1F3A] text-white border-b border-white/10 py-12 lg:py-16">
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

            <MetadataLine
              items={['Home', 'Sectors', category.title]}
              tone="dark"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-5">
              <MetadataLine
                items={[
                  category.kicker,
                  AGENCY_PROFILE.licenseLabel,
                  `${totalOpenings} Active Positions`,
                ]}
                tone="dark"
                monoIndex={1}
              />

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-white">
                {category.title}
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                {category.summary}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <ActionButton
                  variant="gold"
                  size="md"
                  onClick={() => onOpenQuotation(category.title)}
                >
                  <span>Hire Workforce in {category.shortLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </ActionButton>

                <span className="text-xs text-slate-300">
                  Vetting: {category.vettingProtocol}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="aspect-video w-full overflow-hidden rounded-[3px] border border-white/15 bg-[#132B4D]">
                <MediaImage
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  fallbackTitle={category.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Category Switcher Bar */}
      <nav
        aria-label="Workforce Categories"
        className="bg-[#F8FAFC] border-b border-slate-200 overflow-x-auto"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-6">
          {JOB_CATEGORIES.map((cat) => {
            const isCurrent = cat.slug === category.slug;
            return (
              <a
                key={cat.slug}
                href={`#/sectors/${cat.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory(cat.slug);
                }}
                className={`py-4 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 border-b-2 transition-colors ${
                  isCurrent
                    ? 'border-[#B8860B] text-[#0B1F3A] font-semibold'
                    : 'border-transparent text-slate-600 hover:text-[#0B1F3A]'
                }`}
              >
                {cat.shortLabel} ({cat.jobs.length})
              </a>
            );
          })}
        </div>
      </nav>

      {/* Open Vacancies 3-Column Workspace */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar: Filters */}
            <aside className="lg:col-span-3 space-y-6 border border-slate-200 bg-[#F8FAFC] rounded-[3px] p-6">
              <div>
                <label
                  htmlFor="vacancy-search"
                  className="block text-xs font-semibold text-[#0B1F3A] mb-2"
                >
                  Filter Roles or Location
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="vacancy-search"
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Role, city, or lot..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-[3px] focus:border-[#0B1F3A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs font-semibold text-[#0B1F3A] mb-2.5">Skill Level</p>
                <div className="space-y-1.5">
                  {SKILL_LEVELS.map((level) => {
                    const active = selectedLevel === level;
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setSelectedLevel(level)}
                        className={`w-full px-3 py-2 text-left text-xs font-medium rounded-[3px] cursor-pointer transition-colors ${
                          active
                            ? 'bg-[#0B1F3A] text-white'
                            : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        {level === 'All' ? 'All Skill Levels' : level}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs font-semibold text-[#0B1F3A] mb-2.5">
                  Destination Corridor
                </p>
                <div className="space-y-1.5">
                  {REGIONS.map((region) => {
                    const active = selectedRegion === region;
                    return (
                      <button
                        key={region}
                        type="button"
                        onClick={() => setSelectedRegion(region)}
                        className={`w-full px-3 py-2 text-left text-xs font-medium rounded-[3px] cursor-pointer transition-colors ${
                          active
                            ? 'bg-[#0B1F3A] text-white'
                            : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        {region === 'All' ? 'All Corridors' : region}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>
                  All vacancies carry verified DOFE Demand Lot approvals and direct-hire contracts.
                </span>
              </div>
            </aside>

            {/* Middle Column: Matching Jobs List */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <span className="font-semibold text-[#0B1F3A]">
                  Open Vacancies ({filteredJobs.length})
                </span>
                {(selectedLevel !== 'All' || selectedRegion !== 'All' || keyword) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedLevel('All');
                      setSelectedRegion('All');
                      setKeyword('');
                    }}
                    className="text-[#9A6F04] hover:underline cursor-pointer"
                  >
                    Reset Filters
                  </button>
                )}
              </div>

              {filteredJobs.length === 0 ? (
                <div className="p-8 border border-slate-200 bg-[#F8FAFC] rounded-[3px] text-center space-y-3">
                  <p className="text-sm font-medium text-[#0B1F3A]">
                    No vacancies match the current filter combination.
                  </p>
                  <ActionButton
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSelectedLevel('All');
                      setSelectedRegion('All');
                      setKeyword('');
                    }}
                  >
                    Show All {category.shortLabel} Jobs
                  </ActionButton>
                </div>
              ) : (
                filteredJobs.map((job) => {
                  const isSelected = activeJob?.id === job.id;
                  return (
                    <button
                      key={job.id}
                      type="button"
                      onClick={() => setSelectedJobId(job.id)}
                      className={`w-full text-left p-5 rounded-[3px] border cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#F8FAFC] border-[#0B1F3A]'
                          : 'bg-white border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="text-base font-semibold text-[#0B1F3A] leading-snug">
                          {job.title}
                        </h2>
                        <ArrowRight
                          className={`w-4 h-4 shrink-0 mt-1 transition-colors ${
                            isSelected ? 'text-[#B8860B]' : 'text-slate-400'
                          }`}
                        />
                      </div>

                      <MetadataLine
                        items={[job.location, job.skillLevel, job.contractType]}
                        className="mt-2"
                      />

                      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                        <span className="tabular-figures font-medium text-[#0F172A]">
                          {job.monthlySalary}
                        </span>
                        <span className="tabular-figures text-[#9A6F04] font-medium">
                          {job.openings} Openings
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Right Column: Selected Job Details & Apply CTA */}
            <div className="lg:col-span-5">
              {activeJob ? (
                <div className="border border-slate-200 bg-[#F8FAFC] rounded-[3px] p-7 lg:p-8 space-y-6 lg:sticky lg:top-24">
                  <div className="pb-5 border-b border-slate-200">
                    <div className="flex items-center justify-between gap-3">
                      <MetadataLine
                        items={[`Lot ${activeJob.demandLot}`, activeJob.region, activeJob.skillLevel]}
                        monoIndex={0}
                      />
                      <button
                        type="button"
                        onClick={handleCopyLink}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0B1F3A] hover:text-[#9A6F04] cursor-pointer shrink-0"
                      >
                        {copiedLink ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5" />
                            <span>Share</span>
                          </>
                        )}
                      </button>
                    </div>
                    <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A] leading-tight">
                      {activeJob.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-600">{activeJob.employerType}</p>

                    <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs">
                      <div className="flex items-center gap-2 text-slate-700">
                        <MapPin className="w-4 h-4 text-[#B8860B] shrink-0" />
                        <span>{activeJob.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Users className="w-4 h-4 text-[#B8860B] shrink-0" />
                        <span className="tabular-figures">{activeJob.openings} Verified Quota</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white border border-slate-200 rounded-[3px] px-4 py-3 text-xs">
                    <span className="text-slate-500">Monthly Compensation</span>
                    <span className="tabular-figures text-sm font-semibold text-[#0B1F3A]">
                      {activeJob.monthlySalary}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold tracking-wide text-[#0B1F3A]">
                      Candidate Requirements
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {activeJob.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold tracking-wide text-[#0B1F3A]">
                      Primary Responsibilities
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {activeJob.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <span
                            className="mt-2 w-1.5 h-px bg-[#0B1F3A] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold tracking-wide text-[#0B1F3A]">
                      Employer Provisions & Contract Terms
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {activeJob.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <span
                            className="mt-2 w-1.5 h-px bg-[#B8860B] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <ActionButton
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                      onClick={() => setApplyJob(activeJob)}
                    >
                      <span>Apply / Send CV</span>
                      <ArrowRight className="w-4 h-4" />
                    </ActionButton>

                    <button
                      type="button"
                      onClick={() => onOpenQuotation(category.title)}
                      className="text-xs font-medium text-[#0B1F3A] hover:text-[#9A6F04] underline underline-offset-4 cursor-pointer"
                    >
                      Employer Bulk Demand
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <CandidateApplyModal
        isOpen={Boolean(applyJob)}
        job={applyJob}
        categoryTitle={category.title}
        onClose={() => setApplyJob(null)}
      />
    </div>
  );
}
