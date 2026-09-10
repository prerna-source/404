import React from 'react';

export const Badge = ({
  children,
  variant = 'brand',
  size = 'sm',
  className = ''
}) => {
  const variants = {
    brand: 'bg-brand-500/15 text-brand-300 border-brand-500/30',
    indigo: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    violet: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    emerald: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    amber: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    slate: 'bg-slate-800/80 text-slate-300 border-slate-700/60'
  };

  const sizes = {
    xs: 'text-[10px] px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5'
  };

  return (
    <span className={`inline-flex items-center gap-1 font-medium rounded-md border backdrop-blur-sm ${variants[variant] || variants.brand} ${sizes[size] || sizes.sm} ${className}`}>
      {children}
    </span>
  );
};
