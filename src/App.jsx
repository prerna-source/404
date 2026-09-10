import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-100 overflow-x-hidden">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* Ambient Gradient Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
