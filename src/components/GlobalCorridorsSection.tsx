import React, { useState } from 'react';
import { ArrowRight, Globe2 } from 'lucide-react';
import { REGIONAL_CORRIDORS, SECTOR_VERTICALS } from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';
import { MetadataLine } from './ui/MetadataLine';
import { SectionHeading } from './ui/SectionHeading';

interface GlobalCorridorsSectionProps {
  onOpenQuotation: (preselectedSector?: string) => void;
  onSelectCategory: (slug: string) => void;
}

type SectorFilter = 'all' | 'industrial' | 'hospitality';

export function GlobalCorridorsSection({
  onOpenQuotation,
  onSelectCategory,
}: GlobalCorridorsSectionProps) {
  const [filter, setFilter] = useState<SectorFilter>('all');

  const filteredSectors =
    filter === 'all'
      ? SECTOR_VERTICALS
      : SECTOR_VERTICALS.filter((s) => s.category === filter);

  return (
    <section id="sectors" className="bg-[#0B1F3A] text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/15">
          <SectionHeading
            tone="dark"
            kicker="Global Footprint & Sectors"
            title="Active Deployment Corridors Across Three Continents"
            description="Structured bilateral pipelines serving major infrastructure contractors, third-party logistics fleets, five-star hospitality groups, and controlled-environment agriculture operators."
          />
          <div className="shrink-0">
            <ActionButton variant="gold" size="md" onClick={() => onOpenQuotation()}>
              Request Corridor Availability
            </ActionButton>
          </div>
        </div>

        {/* 3 Regional Corridors */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/15 border border-white/15 rounded-[3px] overflow-hidden">
          {REGIONAL_CORRIDORS.map((corridor) => (
            <div key={corridor.id} className="bg-[#0B1F3A] p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{corridor.region}</h3>
                  <Globe2 className="w-4 h-4 text-[#E2B857] shrink-0" />
                </div>

                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {corridor.countries}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-sm text-slate-200">
                  {corridor.primaryTrades.map((trade) => (
                    <li key={trade} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 w-1.5 h-px bg-[#E2B857] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{trade}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="tabular-figures text-[#E2B857] font-medium">
                  {corridor.activeWorkforce}
                </span>
                <span className="tabular-figures text-slate-300">
                  Lead: {corridor.leadTime}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Sectors Directory + Interactive Filter Tabs */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/15">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Sector Vetting & Annual Deployment Capacity
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Select a discipline below to filter active recruitment capacities.
              </p>
            </div>

            {/* Interactive Filter Buttons */}
            <div
              role="group"
              aria-label="Filter workforce sectors"
              className="inline-flex items-center gap-1 p-1 bg-[#132B4D] border border-white/10 rounded-[3px] self-start"
            >
              {(
                [
                  { id: 'all', label: 'All Sectors' },
                  { id: 'industrial', label: 'Industrial & Civil' },
                  { id: 'hospitality', label: 'Hospitality & Security' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-[2px] whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                    filter === tab.id
                      ? 'bg-[#E2B857] text-[#0B1F3A] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {filteredSectors.map((sector) => (
              <div
                key={sector.id}
                className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center hover:bg-[#132B4D]/50 px-3 -mx-3 rounded-[3px] transition-colors"
              >
                <div className="lg:col-span-4">
                  <a
                    href={`#/sectors/${sector.categorySlug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCategory(sector.categorySlug);
                    }}
                    className="text-base font-semibold text-white hover:text-[#E2B857] transition-colors inline-flex items-center gap-2"
                  >
                    <span>{sector.name}</span>
                  </a>
                  <MetadataLine
                    items={[sector.skillTiers, sector.vettingStandard]}
                    tone="dark"
                    className="mt-1.5"
                  />
                </div>

                <div className="lg:col-span-5 text-sm text-slate-300">
                  {sector.keyRoles}
                </div>

                <div className="lg:col-span-3 flex items-center lg:justify-end justify-between gap-3">
                  <span className="tabular-figures text-sm font-medium text-[#E2B857] whitespace-nowrap">
                    {sector.annualQuota}
                  </span>
                  <a
                    href={`#/sectors/${sector.categorySlug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCategory(sector.categorySlug);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0B1F3A] bg-[#E2B857] hover:bg-[#ecc76f] px-3 py-1.5 rounded-[3px] whitespace-nowrap shrink-0 transition-colors"
                  >
                    <span>View Jobs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
