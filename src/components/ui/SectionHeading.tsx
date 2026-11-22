import React from 'react';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
}

export function SectionHeading({
  kicker,
  title,
  description,
  tone = 'light',
  align = 'left',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';

  return (
    <div className={align === 'center' ? 'max-w-2xl mx-auto text-center' : 'max-w-2xl'}>
      <div
        className={`flex items-center gap-3 text-xs font-medium tracking-wide ${
          align === 'center' ? 'justify-center' : ''
        } ${isDark ? 'text-[#E2B857]' : 'text-[#9A6F04]'}`}
      >
        <span
          className={`inline-block w-6 h-px ${isDark ? 'bg-[#E2B857]' : 'bg-[#B8860B]'}`}
          aria-hidden="true"
        />
        <span>{kicker}</span>
      </div>

      <h2
        className={`mt-3 text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold tracking-tight leading-[1.15] ${
          isDark ? 'text-white' : 'text-[#0F172A]'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-[15px] sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
