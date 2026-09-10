import React from 'react';
import { Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { personalInfo, footerData } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-navy-950/90 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyan-500 flex items-center justify-center font-display font-extrabold text-white text-base shadow-md shadow-brand-500/20">
                PK
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  {footerData.name}
                </h3>
                <p className="text-xs text-brand-300 font-medium">
                  {footerData.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300/80 max-w-md leading-relaxed">
              First-year Electronics & Communication Engineering student at JCRC University. Focused on exploring AI, modern web frameworks, and creative problem solving.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Jaipur, Rajasthan & Siwan, Bihar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                <a href={`mailto:${footerData.email}`} className="hover:text-white transition-colors underline-offset-2 hover:underline">
                  {footerData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-300 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning & Academic Note */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Academic Status
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2">
              <p className="font-semibold text-slate-200">
                B.Tech (ECE) • Class of 2026
              </p>
              <p className="text-slate-400">
                1st Year, 1st Semester
              </p>
              <p className="text-[11px] text-cyan-400 font-mono">
                JCRC University
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            {footerData.copyright}
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
