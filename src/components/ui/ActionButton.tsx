import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'ghost-light';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#0B1F3A] text-white border border-[#0B1F3A] hover:bg-[#132B4D] hover:border-[#132B4D] active:translate-y-px',
  secondary:
    'bg-white text-[#0B1F3A] border border-slate-300 hover:border-[#0B1F3A] hover:bg-slate-50 active:translate-y-px',
  gold:
    'bg-[#E2B857] text-[#0B1F3A] border border-[#E2B857] hover:bg-[#ecc76f] font-semibold active:translate-y-px',
  'ghost-light':
    'bg-transparent text-white border border-white/25 hover:border-[#E2B857] hover:text-[#E2B857] active:translate-y-px',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm',
};

export function ActionButton({
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  children,
  ...props
}: ActionButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-[3px] font-medium whitespace-nowrap shrink-0 cursor-pointer transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
