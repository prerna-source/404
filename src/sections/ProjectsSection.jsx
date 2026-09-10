import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, CheckCircle2, Sparkles, Layers, Clock, Info } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const getStatusBadge = (statusType, status) => {
    if (statusType === 'active') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
        <Clock className="w-3 h-3" />
        {status}
      </span>
    );
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Hands-on Experience"
          title="Projects"
          subtitle="Learning by building."
        />

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              padding="p-6 sm:p-7"
              className="flex flex-col justify-between group hover:border-brand-500/50 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Top Status & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/15 border border-brand-500/25 flex items-center justify-center text-brand-300 group-hover:scale-105 transition-transform">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  {getStatusBadge(project.statusType, project.status)}
                </div>

                {/* Subtitle / Tagline */}
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-400 mb-1">
                  {project.tagline}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300/90 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="slate" size="xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full justify-between group/btn hover:border-brand-400/50"
                  onClick={() => setSelectedProject(project)}
                  icon={ArrowUpRight}
                  iconPosition="right"
                >
                  <span>View Project</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          subtitle={selectedProject.tagline}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.detailedOverview}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="indigo" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Key Highlights
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 text-xs flex items-start gap-3">
              <Info className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white">Status Note: </span>
                <span className="text-slate-300">{selectedProject.demoNote}</span>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
