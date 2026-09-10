import React, { useState } from 'react';
import { Layout, Palette, Code2, Terminal, Cpu, Sparkles, Globe, Workflow, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Programming', 'Emerging Tech', 'Development', 'Workflows'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Workflow': return <Workflow className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  const getStatusVariant = (variant) => {
    switch (variant) {
      case 'emerald': return 'emerald';
      case 'indigo': return 'indigo';
      case 'cyan': return 'cyan';
      case 'violet': return 'violet';
      default: return 'brand';
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Capabilities & Learning Journey"
          title="Skills & Interests"
          subtitle="Honest and authentic progression stages reflecting hands-on learning, experimentation, and foundational exploration."
        />

        {/* Authentic Stage Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs">
          <span className="text-slate-400 font-medium">Stage Key:</span>
          <Badge variant="indigo" size="xs">Learning (Fundamentals)</Badge>
          <Badge variant="cyan" size="xs">Exploring (Concepts & Tools)</Badge>
          <Badge variant="emerald" size="xs">Practicing (Hands-on)</Badge>
          <Badge variant="violet" size="xs">Building (Projects)</Badge>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <Card
              key={skill.id}
              padding="p-6"
              className="flex flex-col justify-between group hover:border-brand-500/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-300 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <Badge variant={getStatusVariant(skill.statusVariant)} size="xs">
                    {skill.status}
                  </Badge>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {skill.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  Active Skill Area
                </span>
                <span className="font-mono text-slate-400">{skill.status}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
