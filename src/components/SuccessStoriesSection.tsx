import React, { useState } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { SUCCESS_STORIES } from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';
import { MetadataLine } from './ui/MetadataLine';
import { SectionHeading } from './ui/SectionHeading';

interface SuccessStoriesSectionProps {
  onOpenQuotation: (preselectedSector?: string) => void;
}

type StoryFilter = 'all' | 'employer' | 'candidate';

export function SuccessStoriesSection({
  onOpenQuotation,
}: SuccessStoriesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<StoryFilter>('all');

  const visibleStories =
    activeFilter === 'all'
      ? SUCCESS_STORIES
      : SUCCESS_STORIES.filter((story) => story.perspective === activeFilter);

  return (
    <section id="stories" className="bg-[#F8FAFC] border-b border-slate-200 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-slate-200">
          <SectionHeading
            kicker="Client & Candidate Success Stories"
            title="Verified Outcomes Across Employers and Placed Talent"
            description="Measurable recruitment turnaround for international HR teams alongside transparent, contract-verified career mobility for Nepalese specialists."
          />

          {/* Interactive Perspective Filter */}
          <div
            role="group"
            aria-label="Filter success stories by perspective"
            className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-[3px] self-start lg:self-auto shrink-0"
          >
            {(
              [
                { id: 'all', label: 'All Stories' },
                { id: 'employer', label: 'Employer Partners' },
                { id: 'candidate', label: 'Placed Candidates' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-[2px] whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-[#0B1F3A] text-white'
                    : 'text-slate-600 hover:text-[#0B1F3A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleStories.map((story) => (
            <article
              key={story.id}
              className="bg-white border border-slate-200 rounded-[3px] p-7 flex flex-col justify-between transition-colors duration-150 hover:border-[#0B1F3A]"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <MetadataLine
                    items={[story.perspectiveLabel, story.location, story.year]}
                    monoIndex={2}
                  />
                  <Quote
                    className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-5 text-[15px] text-slate-700 leading-relaxed">
                  “{story.quote}”
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 space-y-3">
                <div>
                  <h3 className="text-sm font-semibold text-[#0B1F3A]">{story.name}</h3>
                  <p className="mt-0.5 text-xs text-slate-600">
                    {story.role} · {story.organization}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2 text-xs">
                  <span className="text-slate-500 truncate">{story.sector}</span>
                  <span className="tabular-figures font-medium text-[#9A6F04] whitespace-nowrap shrink-0">
                    {story.outcomeMetric}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Adjacent Verification CTA Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            Corporate reference contacts and anonymized trade-test scorecards are available upon formal Demand inquiry.
          </p>
          <ActionButton
            variant="secondary"
            size="md"
            onClick={() => onOpenQuotation()}
          >
            <span>Request Reference Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
