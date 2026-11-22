import React, { useState } from 'react';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';
import { MetadataLine } from './ui/MetadataLine';
import { SectionHeading } from './ui/SectionHeading';

interface FaqSectionProps {
  onOpenQuotation: () => void;
}

export function FaqSection({ onOpenQuotation }: FaqSectionProps) {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);

  const allExpanded = openIds.length === FAQ_ITEMS.length;

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (allExpanded) {
      setOpenIds([]);
    } else {
      setOpenIds(FAQ_ITEMS.map((item) => item.id));
    }
  };

  return (
    <section id="faq" className="bg-white border-b border-slate-200 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Guidance & Controls */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <SectionHeading
              kicker="Frequently Asked Questions"
              title="Clear Answers on Compliance, Mobilization & Welfare"
              description="Direct guidance for international HR teams preparing Demand Letters and Nepalese candidates verifying documentation, fees, and deployment standards."
            />

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <ActionButton variant="secondary" size="sm" onClick={toggleAll}>
                {allExpanded ? 'Collapse All Answers' : 'Expand All Answers'}
              </ActionButton>

              <button
                type="button"
                onClick={onOpenQuotation}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#0B1F3A] hover:text-[#9A6F04] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Need Specific Guidance?</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-[#0F172A] block">
                Multi-View Comparison Enabled
              </span>
              <span className="mt-1 block">
                Open multiple questions simultaneously to compare employer attestation steps alongside candidate protection policies.
              </span>
            </div>
          </div>

          {/* Right Column: Accessible Multi-Expand Accordion Ledger */}
          <div className="lg:col-span-7 border-t border-b border-slate-200 divide-y divide-slate-200">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openIds.includes(item.id);
              const buttonId = `${item.id}-trigger`;
              const panelId = `${item.id}-panel`;

              return (
                <div key={item.id} className="bg-white">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      className="w-full py-5 px-2 sm:px-3 text-left flex items-start justify-between gap-6 cursor-pointer transition-colors hover:bg-[#F8FAFC] min-h-[44px]"
                    >
                      <div className="space-y-2 min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                          <span className="tabular-figures text-xs font-medium text-[#9A6F04]">
                            {item.number}
                          </span>
                          <span className="text-slate-300" aria-hidden="true">
                            /
                          </span>
                          <MetadataLine items={[item.audience, item.topic]} />
                        </div>

                        <span
                          className={`block text-base sm:text-[17px] font-semibold leading-snug transition-colors ${
                            isOpen ? 'text-[#0B1F3A]' : 'text-[#0F172A]'
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>

                      <span
                        className={`mt-1 w-7 h-7 inline-flex items-center justify-center rounded-[3px] border shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#0B1F3A] border-[#0B1F3A] text-white'
                            : 'bg-white border-slate-300 text-[#0B1F3A]'
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" strokeWidth={2} />
                        ) : (
                          <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                        )}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-2 sm:px-3 pb-6 pt-1"
                  >
                    <div className="pl-0 sm:pl-8 max-w-2xl space-y-3">
                      <p className="text-[15px] text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                      <p className="tabular-figures text-xs font-medium text-[#9A6F04]">
                        {item.referenceNote}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
