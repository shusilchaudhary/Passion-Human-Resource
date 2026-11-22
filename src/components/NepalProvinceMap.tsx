import React, { useState } from 'react';
import { NEPAL_PROVINCES } from '../data/recruitmentData';

export function NepalProvinceMap() {
  const [selectedId, setSelectedId] = useState<string>('bagmati');
  const activeProvince =
    NEPAL_PROVINCES.find((p) => p.id === selectedId) ?? NEPAL_PROVINCES[4];

  return (
    <div className="border border-slate-200 bg-white rounded-[3px] p-6">
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <p className="text-xs font-medium text-[#9A6F04]">National Sourcing Network</p>
          <h4 className="mt-0.5 text-sm font-semibold text-[#0B1F3A]">
            Nepal Seven-Province Candidate Footprint
          </h4>
        </div>
        <span className="tabular-figures text-xs text-slate-500">HQ · Kathmandu</span>
      </div>

      <div className="mt-4">
        <svg
          viewBox="0 0 500 225"
          className="w-full h-auto"
          role="img"
          aria-label="Interactive map of Nepal's seven provinces showing candidate sourcing hubs"
        >
          {NEPAL_PROVINCES.map((province) => {
            const isSelected = province.id === selectedId;
            return (
              <g key={province.id}>
                <path
                  d={province.path}
                  onClick={() => setSelectedId(province.id)}
                  onMouseEnter={() => setSelectedId(province.id)}
                  className="cursor-pointer transition-colors duration-150"
                  fill={isSelected ? '#0B1F3A' : '#E2E8F0'}
                  stroke={isSelected ? '#B8860B' : '#FFFFFF'}
                  strokeWidth={isSelected ? 1.8 : 1.4}
                />
                <circle
                  cx={province.centerX}
                  cy={province.centerY}
                  r={province.id === 'bagmati' ? 4 : 2.5}
                  fill={isSelected ? '#E2B857' : '#0B1F3A'}
                  className="pointer-events-none"
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-semibold text-[#0B1F3A]">{activeProvince.name}</span>
          <span className="mx-2 text-[#B8860B]" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-600">{activeProvince.capital}</span>
        </div>
        <p className="text-slate-600">{activeProvince.specialty}</p>
      </div>
    </div>
  );
}
