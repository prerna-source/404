import React from 'react';
import { ArrowRight, Mail, Sparkles, Compass, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Button } from '../components/common/Button';
import { TechIllustration } from '../components/visual/TechIllustration';

export const HeroSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-300 border border-brand-500/25 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
              <span className="text-slate-200">{personalInfo.college}</span>
              <span className="text-slate-500">•</span>
              <span>1st Year ECE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient-accent">
                {personalInfo.name}.
              </span>
            </h1>

            {/* Supporting Heading */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200">
              {personalInfo.role}
            </h2>

            {/* Introduction Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              {personalInfo.heroIntro}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo('projects')}
                icon={ArrowRight}
                iconPosition="right"
              >
                View My Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo('contact')}
                icon={Mail}
                iconPosition="left"
              >
                Contact Me
              </Button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Jaipur, Rajasthan (from Siwan, Bihar)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-400" />
                <span>Class of 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Technology Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <TechIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
