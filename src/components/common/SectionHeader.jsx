import React from 'react';

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-500/10 text-brand-300 border border-brand-500/20 mb-3.5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-300/90 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
