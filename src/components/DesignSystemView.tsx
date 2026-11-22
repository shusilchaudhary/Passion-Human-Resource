import React, { useState } from 'react';
import { ArrowLeft, Check, Copy } from 'lucide-react';
import { COLOR_TOKENS } from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';
import { MetadataLine } from './ui/MetadataLine';
import { SectionHeading } from './ui/SectionHeading';

interface DesignSystemViewProps {
  onBackHome: () => void;
}

export function DesignSystemView({ onBackHome }: DesignSystemViewProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hex).catch(() => {});
    }
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div className="bg-white">
      {/* Header Band */}
      <section className="bg-[#0B1F3A] text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#E2B857] hover:text-white transition-colors cursor-pointer mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </button>

          <SectionHeading
            tone="dark"
            kicker="Design Foundation Specification"
            title="Passion Human Resource Visual Identity & UI System"
            description="Foundational tokens, 2+1 typography hierarchy, spacing rules, 3-zone navigation architecture, and reusable UI primitives engineered for institutional international recruitment."
          />
        </div>
      </section>

      {/* 1. Color Palette (60-30-10) */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            kicker="01. Color System"
            title="Deep Navy, Crisp White & Sovereign Gold (60-30-10)"
            description="60% dominant architectural white/alabaster field, 30% midnight navy structural bands, and 10% restrained brushed gold reserved for rules, icons, and high-intent focus accents."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLOR_TOKENS.map((swatch) => {
              const isCopied = copiedHex === swatch.hex;
              return (
                <button
                  key={swatch.token}
                  type="button"
                  onClick={() => handleCopy(swatch.hex)}
                  className="text-left border border-slate-200 rounded-[3px] overflow-hidden hover:border-[#0B1F3A] transition-colors cursor-pointer group"
                >
                  <div
                    className="h-20 w-full border-b border-slate-200"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="p-4 bg-white flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">{swatch.name}</p>
                      <MetadataLine
                        items={[swatch.token, swatch.role]}
                        monoIndex={0}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 tabular-figures text-xs text-[#0B1F3A] shrink-0">
                      <span>{isCopied ? 'Copied' : swatch.hex}</span>
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0B1F3A]" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Typography System (2+1 Rule) */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            kicker="02. Typography System"
            title="Classic Corporate Sans + Monospace Data Accents"
            description="Plus Jakarta Sans for authoritative headings, Public Sans for clear body prose, and JetBrains Mono with tabular numerals strictly for license IDs, deployment metrics, and quotas."
          />

          <div className="mt-10 divide-y divide-slate-200 border border-slate-200 bg-white rounded-[3px]">
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold text-[#9A6F04]">Hero Display</p>
                <p className="mt-1 tabular-figures text-xs text-slate-500">
                  Plus Jakarta Sans · 700 · clamp(2.25rem, 3.6vw, 3.4rem)
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                  Workforce Solutions Built for Global Operations.
                </p>
              </div>
            </div>

            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold text-[#9A6F04]">Section Heading</p>
                <p className="mt-1 tabular-figures text-xs text-slate-500">
                  Plus Jakarta Sans · 600 · 2.25rem / 1.15
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="font-[var(--font-display)] text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
                  Four-Stage Vetting & Mobilization Workflow
                </p>
              </div>
            </div>

            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold text-[#9A6F04]">Body Prose</p>
                <p className="mt-1 tabular-figures text-xs text-slate-500">
                  Public Sans · 400 · 1rem / 1.6 (65ch measure)
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                  Every overseas deployment follows an auditable 35-day compliance sequence—from Demand Letter verification through practical workshop trade testing and DOFE labor clearance.
                </p>
              </div>
            </div>

            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold text-[#9A6F04]">Data & Licensing Mono</p>
                <p className="mt-1 tabular-figures text-xs text-slate-500">
                  JetBrains Mono · 500 · tabular-nums
                </p>
              </div>
              <div className="lg:col-span-8 flex flex-wrap gap-8">
                <span className="tabular-figures text-lg font-medium text-[#0B1F3A]">
                  Govt. Lic. No. 897/079/080
                </span>
                <span className="tabular-figures text-lg font-medium text-[#0B1F3A]">
                  98.2% Retention
                </span>
                <span className="tabular-figures text-lg font-medium text-[#0B1F3A]">
                  12,400+ Placed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Spacing, Layout Rules & Reusable Components */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            kicker="03. Components & Spatial Rules"
            title="Reusable UI Primitives & Structural Discipline"
            description="Sharp 3px architectural radii, 1px hairline borders, unboxed middot metadata, and strict single-line interactive controls."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Button Matrix */}
            <div className="border border-slate-200 rounded-[3px] p-8 space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#0B1F3A]">ActionButton Variants</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Single-line controls · 2:1 horizontal-to-vertical padding · 150ms cubic-bezier settle
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ActionButton variant="primary">Primary Navy</ActionButton>
                <ActionButton variant="secondary">Secondary Outline</ActionButton>
                <ActionButton variant="gold">Sovereign Gold</ActionButton>
              </div>
              <div className="p-4 bg-[#0B1F3A] rounded-[3px] flex flex-wrap gap-3">
                <ActionButton variant="gold" size="sm">
                  On-Navy Gold
                </ActionButton>
                <ActionButton variant="ghost-light" size="sm">
                  Ghost Light
                </ActionButton>
              </div>
            </div>

            {/* Metadata & Spatial Rules */}
            <div className="border border-slate-200 rounded-[3px] p-8 space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#0B1F3A]">
                  Zero-Pill Metadata & Layout Constraints
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Unboxed inline metadata separated by middots; 1280px container rail inside 1440px viewport.
                </p>
              </div>

              <div className="p-4 bg-[#F8FAFC] border border-slate-200 rounded-[3px]">
                <MetadataLine
                  items={['Kathmandu, Nepal', 'Est. 2015', 'Govt. Lic. No. 897/079/080']}
                  monoIndex={2}
                />
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li>Container Padding: 24px mobile / 48px desktop (px-6 lg:px-12)</li>
                <li>Section Vertical Rhythm: 80px–112px (py-20 lg:py-28)</li>
                <li>Border Radius Scale: 3px architectural corners; zero pill capsules</li>
                <li>Top Bar Contract: 3 zones (Wordmark · 5 Links · 1 Primary CTA)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
