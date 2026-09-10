import React from 'react';
import { Cpu, Sparkles, Terminal, Code2, Layers, Compass } from 'lucide-react';

export const TechIllustration = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center py-6">
      {/* Background glowing orbs */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Main Glass Centerpiece */}
      <div className="relative w-72 sm:w-84 h-72 sm:h-84 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-700/60 shadow-2xl p-6 flex flex-col justify-between backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            student_profile.py
          </span>
        </div>

        {/* Code Content */}
        <div className="font-mono text-xs text-slate-300 space-y-1.5 py-2">
          <p className="text-slate-400"># First-Year Engineering Journey</p>
          <p>
            <span className="text-indigo-400">student</span> = {'{'}
          </p>
          <p className="pl-4">
            <span className="text-cyan-300">name</span>: <span className="text-emerald-300">"Prerna Kumari"</span>,
          </p>
          <p className="pl-4">
            <span className="text-cyan-300">branch</span>: <span className="text-emerald-300">"ECE @ JCRC"</span>,
          </p>
          <p className="pl-4">
            <span className="text-cyan-300">interests</span>: [<span className="text-brand-300">"AI"</span>, <span className="text-brand-300">"Web"</span>, <span className="text-brand-300">"Tools"</span>],
          </p>
          <p className="pl-4">
            <span className="text-cyan-300">motto</span>: <span className="text-amber-300">"Learn by building"</span>
          </p>
          <p>{'}'}</p>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Semester 1 Active
          </span>
          <span className="text-slate-400">2026</span>
        </div>
      </div>

      {/* Floating Card 1: AI & Emerging Tech (Top-Right) */}
      <div className="absolute -top-3 -right-2 sm:-right-6 bg-slate-900/90 border border-brand-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md animate-float-slow flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-brand-500/20 text-brand-300 flex items-center justify-center">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white">AI & GenAI</p>
          <p className="text-[10px] text-brand-300">Exploration</p>
        </div>
      </div>

      {/* Floating Card 2: ECE & Circuits (Bottom-Left) */}
      <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-slate-900/90 border border-cyan-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md animate-float-reverse flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white">B.Tech ECE</p>
          <p className="text-[10px] text-cyan-300">JCRC University</p>
        </div>
      </div>

      {/* Floating Card 3: Web Dev & Coding (Bottom-Right) */}
      <div className="absolute bottom-6 -right-4 sm:-right-8 bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-2.5 shadow-xl backdrop-blur-md animate-float-slow flex items-center gap-2" style={{ animationDelay: '1.5s' }}>
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
          <Code2 className="w-3.5 h-3.5" />
        </div>
        <span className="text-[11px] font-medium text-slate-200">Web Dev</span>
      </div>
    </div>
  );
};
