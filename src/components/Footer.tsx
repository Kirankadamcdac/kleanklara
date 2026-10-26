'use client';

import React from 'react';
import { Sparkles, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-gray-800/80 bg-gray-950/80 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span className="font-heading font-bold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-gray-400">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
            </p>
          </div>

          {/* Operational Status */}
          <div className="flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-emerald-400 border border-emerald-500/30">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>All AI Systems Operational (99.9% Uptime)</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-panel text-gray-300 hover:text-white hover:border-cyan-500/40 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}
