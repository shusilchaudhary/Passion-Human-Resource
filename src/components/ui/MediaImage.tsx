import React, { useEffect, useRef, useState } from 'react';
import { Building2 } from 'lucide-react';

interface MediaImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  priority?: boolean;
}

export function MediaImage({
  src,
  alt,
  fallbackTitle,
  className = '',
  priority = false,
}: MediaImageProps) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setHasError(false);
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [src]);

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
      ref={imgRef}
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      referrerPolicy="no-referrer"
      onLoad={() => setLoaded(true)}
      onError={() => setHasError(true)}
      className={`${className} transition-opacity duration-300 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}

