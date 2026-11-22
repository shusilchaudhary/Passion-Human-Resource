import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import {
  AGENCY_PROFILE,
  HERO_WORKFORCE_PANELS,
  PROOF_METRICS,
} from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';
import { MediaImage } from './ui/MediaImage';
import { MetadataLine } from './ui/MetadataLine';

interface HeroSectionProps {
  onOpenQuotation: (preselectedSector?: string) => void;
  onExploreProcess: () => void;
  onSelectCategory: (slug: string) => void;
  onOpenCompliance: () => void;
}

export function HeroSection({
  onOpenQuotation,
  onExploreProcess,
  onSelectCategory,
  onOpenCompliance,
}: HeroSectionProps) {
  const [activePanelId, setActivePanelId] = useState<string>(HERO_WORKFORCE_PANELS[0].id);

  return (
    <section id="top" className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Proposition & Primary Action */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <MetadataLine
                items={[
                  AGENCY_PROFILE.location,
                  AGENCY_PROFILE.established,
                  AGENCY_PROFILE.licenseLabel,
                ]}
                monoIndex={2}
              />

              <h1 className="mt-6 text-[clamp(2.25rem,3.6vw,3.4rem)] font-bold tracking-[-0.025em] leading-[1.08] text-[#0B1F3A]">
                Workforce Solutions Built for Global Operations.
              </h1>

              <p className="mt-5 text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-xl">
                Connecting trade-tested, government-cleared Nepalese professionals with industrial, logistics, hospitality, and commercial agricultural employers across 18 countries.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ActionButton
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenQuotation()}
                >
                  <span>Request Manpower Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </ActionButton>

                <button
                  type="button"
                  onClick={onExploreProcess}
                  className="inline-flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#0B1F3A] hover:text-[#9A6F04] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Review Recruitment Process</span>
                </button>
              </div>
            </div>

            {/* Institutional Assurance Note */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="text-xs text-slate-600 leading-relaxed">
                <span className="font-semibold text-[#0F172A] block">
                  {AGENCY_PROFILE.dofeAuthority}
                </span>
                <span>
                  Ethical, zero-hidden-fee sourcing audited under Nepal Foreign Employment regulations.{' '}
                </span>
                <a
                  href="#/compliance"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenCompliance();
                  }}
                  className="font-semibold text-[#0B1F3A] hover:text-[#9A6F04] underline underline-offset-4 whitespace-nowrap"
                >
                  Verify Licenses &amp; Policies
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Vertical Workforce Sector Panels */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1 min-h-[380px] lg:min-h-[470px]">
              {HERO_WORKFORCE_PANELS.map((panel) => {
                const isSelected = panel.id === activePanelId;
                return (
                  <a
                    key={panel.id}
                    href={`#/sectors/${panel.categorySlug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCategory(panel.categorySlug);
                    }}
                    onMouseEnter={() => setActivePanelId(panel.id)}
                    onFocus={() => setActivePanelId(panel.id)}
                    className={`group relative overflow-hidden rounded-[3px] bg-[#0B1F3A] text-left cursor-pointer border transition-all duration-200 focus-visible:outline-none block ${
                      isSelected
                        ? 'border-[#B8860B]'
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <MediaImage
                      src={panel.imageSrc}
                      alt={panel.imageAlt}
                      fallbackTitle={panel.sector}
                      priority
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/35 to-transparent transition-opacity duration-200 ${
                        isSelected ? 'opacity-100' : 'opacity-85 group-hover:opacity-100'
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3.5 text-white">
                      <span
                        className={`block w-5 h-[2px] mb-2 transition-colors ${
                          isSelected ? 'bg-[#E2B857]' : 'bg-white/40'
                        }`}
                        aria-hidden="true"
                      />
                      <p className="text-xs font-semibold leading-snug text-white">
                        {panel.sector}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-300 leading-tight line-clamp-2">
                        {panel.roleSample}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-[#E2B857]">
                        <span>View Jobs</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Active Panel Context Bar */}
            {(() => {
              const selected =
                HERO_WORKFORCE_PANELS.find((p) => p.id === activePanelId) ??
                HERO_WORKFORCE_PANELS[0];
              return (
                <div className="mt-3 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#0B1F3A]">{selected.sector}</span>
                    <span aria-hidden="true" className="text-[#B8860B]">
                      ·
                    </span>
                    <span>{selected.roleSample}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="tabular-figures text-[#9A6F04] font-medium">
                      {selected.readinessWindow}
                    </span>
                    <a
                      href={`#/sectors/${selected.categorySlug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectCategory(selected.categorySlug);
                      }}
                      className="font-semibold text-[#0B1F3A] hover:text-[#9A6F04] underline underline-offset-4 whitespace-nowrap"
                    >
                      View Open Jobs
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Claim-to-Proof Quantitative Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {PROOF_METRICS.map((metric) => (
            <div key={metric.id} className="space-y-1">
              <p className="tabular-figures text-2xl sm:text-3xl font-medium tracking-tight text-[#0B1F3A]">
                {metric.value}
              </p>
              <p className="text-sm font-semibold text-[#0F172A]">{metric.label}</p>
              <p className="text-xs text-slate-500">{metric.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
