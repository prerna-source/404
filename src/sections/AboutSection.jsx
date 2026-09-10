import React from 'react';
import { MapPin, GraduationCap, Compass, Sparkles, Music, Activity, Palette, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';

export const AboutSection = () => {
  const getIcon = (name) => {
    switch (name) {
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getHobbyIcon = (name) => {
    switch (name) {
      case 'Music': return <Music className="w-4 h-4" />;
      case 'Activity': return <Activity className="w-4 h-4" />;
      case 'Palette': return <Palette className="w-4 h-4" />;
      default: return <Heart className="w-4 h-4" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Getting To Know Me"
          title="About Me"
          subtitle="Curious engineering student focused on building practical skills in technology and artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Bio */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            {personalInfo.aboutNarrative.map((paragraph, idx) => (
              <p key={idx} className="font-normal text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Creative Hobbies Subsection */}
            <div className="pt-6 border-t border-slate-800/80">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-400" />
                <span>Creative Interests & Hobbies</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-4">
                Creative outlets that help me stay balanced, curious, and energized outside of engineering coursework:
              </p>
              <div className="flex flex-wrap gap-3">
                {personalInfo.hobbies.map((hobby) => (
                  <div
                    key={hobby.name}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border backdrop-blur-sm transition-transform hover:scale-105 ${hobby.color}`}
                  >
                    {getHobbyIcon(hobby.icon)}
                    <span>{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Info Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.quickStats.map((stat, idx) => (
              <Card
                key={stat.label}
                padding="p-5"
                className={`flex flex-col justify-between border ${stat.border} bg-gradient-to-br ${stat.color} to-slate-900/40`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center mb-4 ${stat.accent}`}>
                    {getIcon(stat.iconName)}
                  </div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    {stat.label}
                  </p>
                  <p className="text-base font-bold text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/60 font-medium">
                  {stat.subValue}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
