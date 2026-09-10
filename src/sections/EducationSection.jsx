import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen, Atom } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          title="Education"
          subtitle="Building strong foundations in electronics, programming fundamentals, and engineering problem-solving."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Education Feature Card */}
          <Card
            padding="p-6 sm:p-10"
            className="border-indigo-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-brand-300 flex-shrink-0 shadow-lg shadow-brand-500/10">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-1.5">
                    <Badge variant="brand" size="xs">
                      Undergraduate Degree
                    </Badge>
                    <span className="text-xs text-emerald-400 font-medium">
                      Current Semester
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {educationData.degree}
                  </h3>
                  <p className="text-base text-brand-300 font-semibold mt-0.5">
                    {educationData.institution}
                  </p>
                </div>
              </div>

              {/* Timeline Pill */}
              <div className="flex flex-col sm:items-end gap-2 text-xs text-slate-300">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{educationData.timeline}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            {/* Program Overview */}
            <div className="pt-6 pb-8">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {educationData.overview}
              </p>
            </div>

            {/* Relevant Learning Areas */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-400" />
                <span>Relevant Learning Areas & Coursework</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {educationData.learningAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-3 hover:border-slate-600 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-200">
                          {area.title}
                        </span>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                          {area.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-snug">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
