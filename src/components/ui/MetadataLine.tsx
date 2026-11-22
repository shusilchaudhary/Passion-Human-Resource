import React from 'react';

interface MetadataLineProps {
  items: string[];
  tone?: 'light' | 'dark';
  monoIndex?: number;
  className?: string;
}

export function MetadataLine({
  items,
  tone = 'light',
  monoIndex,
  className = '',
}: MetadataLineProps) {
  const isDark = tone === 'dark';

  return (
    <div
      className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs ${
        isDark ? 'text-slate-300' : 'text-slate-600'
      } ${className}`}
    >
      {items.map((item, idx) => (
        <React.Fragment key={item}>
          {idx > 0 && (
            <span
              className={isDark ? 'text-[#E2B857]/70' : 'text-[#B8860B]/80'}
              aria-hidden="true"
            >
              ·
            </span>
          )}
          <span className={monoIndex === idx ? 'tabular-figures' : ''}>{item}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
