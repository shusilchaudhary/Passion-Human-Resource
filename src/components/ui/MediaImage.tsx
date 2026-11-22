import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface MediaImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function MediaImage({
  src,
  alt,
  fallbackTitle,
  className = '',
}: MediaImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-[#0B1F3A] via-[#132B4D] to-[#1C3A66] flex flex-col items-center justify-center p-6 text-center text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <Building2 className="w-8 h-8 text-[#E2B857] mb-3" strokeWidth={1.5} />
        <p className="text-xs font-medium tracking-wide text-slate-200">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
