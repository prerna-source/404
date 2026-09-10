import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/25 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Name */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-400 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyan-500 flex items-center justify-center font-display font-extrabold text-white text-sm shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                PK
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-brand-300 transition-colors">
                  PRERNA KUMARI
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 -mt-0.5">
                  B.Tech ECE • JCRC
                </span>
              </div>
            </a>

            {/* Desktop Navigation (large screens) */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/70 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Quick CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-500/15 text-brand-300 hover:text-white hover:bg-brand-500 border border-brand-500/30 transition-all duration-200 shadow-sm"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile & Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-400 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer */}
        <div
          data-mobile-menu
          className={`lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800/90 px-6 py-6 transition-all duration-300 shadow-2xl z-50 ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-2 max-w-md mx-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-brand-500 text-white font-semibold shadow-md shadow-brand-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800/80">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-500/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>Email Prerna Directly</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
