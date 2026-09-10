import React from 'react';
import { Award, Rocket, BookOpen, Trophy, Users, Sparkles, Compass, Clock } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';

export const AchievementsSection = () => {
  const getIcon = (name) => {
    switch (name) {
      case 'Award': return <Award className="w-5 h-5 text-brand-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-cyan-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-indigo-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-brand-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Milestones & Journey"
          title="Achievements & Learning"
          subtitle="A transparent, growing roadmap of milestones, certifications, and technical experiences."
        />

        {/* Authentic Student Journey Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-900/30 via-slate-900/60 to-cyan-900/30 border border-brand-500/20 text-center backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 mb-2 text-brand-300">
            <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span className="text-xs uppercase font-bold tracking-wider">Growth in Progress</span>
          </div>
          <p className="text-sm text-slate-300 font-medium">
            "Currently learning, exploring, and building. This section will grow with my journey."
          </p>
        </div>

        {/* 6 Achievement Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <Card
              key={idx}
              padding="p-6"
              className="flex flex-col justify-between group hover:border-brand-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <Badge variant="slate" size="xs" className="text-slate-400">
                    <Clock className="w-3 h-3 text-brand-400" />
                    <span>In Progress</span>
                  </Badge>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {item.category}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 italic">
                  {item.statusNote}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
