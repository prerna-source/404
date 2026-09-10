import React from 'react';

export const Card = ({
  children,
  className = '',
  hover = true,
  glow = false,
  padding = 'p-6 sm:p-8',
  ...props
}) => {
  return (
    <div
      className={`relative rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 ${
        hover ? 'transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/5' : ''
      } ${
        glow ? 'before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-brand-500/20 before:to-cyan-500/20 before:-z-10 before:blur-sm' : ''
      } ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
