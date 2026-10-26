'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal,
  Cpu,
  Brain,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import NeuralBrain3D from '@/components/3d/NeuralBrain3D';

export default function HeroSection() {
  // Typing animation state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PERSONAL_INFO.roles;

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText.length < role.length) {
      timeout = setTimeout(() => {
        setCurrentText(role.substring(0, currentText.length + 1));
      }, 90);
    } else if (!isDeleting && currentText.length === role.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(role.substring(0, currentText.length - 1));
      }, 50);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Neon Spotlight Shapes */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 glass-pill px-4 py-2 rounded-full w-fit border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
              Available for Principal AI Roles & High-Impact Consulting
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="h-4 w-4" /> Next-Gen AI Engineering
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading leading-[1.1]">
                AI Engineer | Machine Learning Engineer | <span className="text-gradient-cyan">Generative AI Developer</span>
              </h1>
            </div>

            {/* Typing Effect Rotator */}
            <div className="flex items-center gap-3 text-lg sm:text-xl font-mono text-purple-300 h-10">
              <span className="text-gray-400">Specializing in:</span>
              <span className="text-gradient-purple font-bold">
                {currentText}
              </span>
              <span className="w-0.5 h-6 bg-cyan-400 animate-pulse" />
            </div>

            {/* Subheadline */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.tagline} {PERSONAL_INFO.bio.split('.')[1]}.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl glass-panel text-white font-medium text-sm hover:border-cyan-500/40 transition-all duration-300 flex items-center gap-2 group"
              >
                <Download className="h-4 w-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 rounded-xl border border-gray-800 bg-gray-900/50 text-gray-300 hover:text-white hover:border-gray-700 font-medium text-sm transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="h-4 w-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-800/80 mt-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-white text-gradient-cyan">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 font-mono mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: 3D AI Brain Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full rounded-3xl glass-panel p-2 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden">
              {/* Corner Glowing accent lights */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />

              {/* 3D Brain Component */}
              <NeuralBrain3D />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
