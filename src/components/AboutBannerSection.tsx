import React from 'react';
import { ArrowRight, Award, Compass, FileCheck2, Target } from 'lucide-react';
import {
  ACCREDITATION_CREDENTIALS,
  AGENCY_PROFILE,
  KATHMANDU_SKYLINE_IMAGE,
  LEADERSHIP_TEAM,
} from '../data/recruitmentData';
import { MediaImage } from './ui/MediaImage';
import { MetadataLine } from './ui/MetadataLine';
import { SectionHeading } from './ui/SectionHeading';

interface AboutBannerSectionProps {
  onOpenCompliance?: () => void;
  onExploreServices?: () => void;
}

export function AboutBannerSection({
  onOpenCompliance,
  onExploreServices,
}: AboutBannerSectionProps) {
  return (
    <section id="about" className="bg-[#F8FAFC] border-b border-slate-200 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Panoramic Kathmandu Authority Frame */}
          <div className="lg:col-span-6 space-y-5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px] border border-slate-200 bg-[#0B1F3A]">
              <MediaImage
                src={KATHMANDU_SKYLINE_IMAGE.src}
                alt={KATHMANDU_SKYLINE_IMAGE.alt}
                fallbackTitle="Kathmandu Headquarters, Nepal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/85 via-[#0B1F3A]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <MetadataLine
                  items={[AGENCY_PROFILE.location, AGENCY_PROFILE.established, 'DOFE Accredited']}
                  tone="dark"
                />
                <p className="mt-1.5 text-base sm:text-lg font-semibold text-white">
                  Headquartered in Kathmandu with Seven-Province Sourcing Reach
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="border-t border-slate-300 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F3A]">
                  <FileCheck2 className="w-4 h-4 text-[#B8860B]" />
                  <span>Regulatory Standing</span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Operating under{' '}
                  <span className="tabular-figures font-medium text-[#0F172A]">
                    {AGENCY_PROFILE.licenseLabel}
                  </span>{' '}
                  with full attestation compliance through Nepalese embassies abroad.
                </p>
              </div>

              <div className="border-t border-slate-300 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F3A]">
                  <Compass className="w-4 h-4 text-[#B8860B]" />
                  <span>Leadership Governance</span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Dedicated sector directors oversee technical trade testing, pre-departure orientation, and post-arrival worker welfare.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Vision, Mission & Corporate Values */}
          <div className="lg:col-span-6 space-y-8">
            <SectionHeading
              kicker="Corporate Profile"
              title="Connecting Skilled Nepalese Talent with Trusted Global Employers"
              description="Since 2015, Passion Human Resource has bridged Nepal's disciplined technical workforce with international infrastructure, logistics, and hospitality operators through transparent recruitment governance."
            />

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              <div className="py-6 flex items-start gap-4">
                <Target className="w-5 h-5 text-[#B8860B] shrink-0 mt-1" strokeWidth={1.75} />
                <div>
                  <h3 className="text-base font-semibold text-[#0F172A]">Our Vision</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    To serve as the most dependable South Asian manpower partner for international enterprises—defined by verified trade competence, ethical placement standards, and lasting employer satisfaction.
                  </p>
                </div>
              </div>

              <div className="py-6 flex items-start gap-4">
                <Compass className="w-5 h-5 text-[#B8860B] shrink-0 mt-1" strokeWidth={1.75} />
                <div>
                  <h3 className="text-base font-semibold text-[#0F172A]">Our Mission</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    Execute end-to-end sourcing, practical trade vetting, medical clearance, and cultural orientation with measurable turnaround SLAs—protecting both corporate project timelines and candidate dignity.
                  </p>
                </div>
              </div>
            </div>

            {/* Integrated Service Scope Summary Bar */}
            <div className="bg-white border border-slate-200 rounded-[3px] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#0B1F3A]">
                  Complete Corporate &amp; Candidate Service Divisions
                </p>
                <p className="text-xs text-slate-600">
                  Overseas Recruitment · HR Consultation · Trade Testing · PDOT Orientation · GAMCA Medicals · Visa &amp; Travel Logistics
                </p>
              </div>
              {onExploreServices && (
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onExploreServices();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#9A6F04] underline underline-offset-4 whitespace-nowrap shrink-0"
                >
                  <span>Explore All 8 Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Institutional Accreditations Strip */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#0B1F3A]">
              <Award className="w-4 h-4 text-[#B8860B]" />
              <span>Official Licenses, Memberships &amp; Statutory Clearances</span>
            </div>
            {onOpenCompliance && (
              <a
                href="#/compliance"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenCompliance();
                }}
                className="text-xs font-semibold text-[#0B1F3A] hover:text-[#9A6F04] underline underline-offset-4 whitespace-nowrap"
              >
                View Full Compliance &amp; Legal Dossier
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-[3px] overflow-hidden">
            {ACCREDITATION_CREDENTIALS.map((item) => (
              <div key={item.code} className="bg-white p-5 space-y-2">
                <p className="tabular-figures text-xs font-medium text-[#9A6F04]">{item.code}</p>
                <h4 className="text-sm font-semibold text-[#0B1F3A]">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Leadership & Operations Desk */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium text-[#9A6F04]">Executive Leadership</p>
              <h3 className="mt-1 text-xl font-semibold text-[#0B1F3A]">
                Kathmandu Operations & Compliance Directors
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Direct accountability across employer attestation, trade testing & worker welfare
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((leader) => (
              <div
                key={leader.id}
                className="bg-white border border-slate-200 rounded-[3px] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-[3px] bg-[#0B1F3A] text-[#E2B857] font-[var(--font-display)] text-sm font-bold flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      {leader.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#0B1F3A]">{leader.name}</h4>
                      <p className="text-xs text-slate-600">{leader.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-slate-600 leading-relaxed">{leader.remit}</p>
                </div>

                <p className="mt-5 pt-3 border-t border-slate-200 tabular-figures text-[11px] font-medium text-[#9A6F04]">
                  {leader.tenure}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
