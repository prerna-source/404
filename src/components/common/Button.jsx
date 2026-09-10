import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  ariaLabel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-400/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 border border-brand-400/30",
    secondary: "bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 hover:text-white border border-slate-700/80 backdrop-blur-sm shadow-sm",
    outline: "bg-transparent hover:bg-brand-500/10 text-brand-300 hover:text-white border border-brand-400/40 hover:border-brand-400",
    ghost: "bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white",
    comingSoon: "bg-slate-800/40 text-slate-400 border border-slate-700/50 cursor-not-allowed hover:bg-slate-800/40"
  };

  const classes = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 flex-shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 flex-shrink-0" />}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 flex-shrink-0" />}
    </button>
  );
};
