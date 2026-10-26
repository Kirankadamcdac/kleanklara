'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Database, 
  Brain, 
  Eye, 
  MessageSquareText, 
  Bot, 
  Server, 
  Zap,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';
import { ABOUT_DOMAINS, PERSONAL_INFO } from '@/data/portfolioData';

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Database,
  Brain,
  Eye,
  MessageSquareText,
  Bot,
  Server,
  Zap
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 mb-3 border border-cyan-500/30">
            <Cpu className="h-3.5 w-3.5" />
            <span>01 // ABOUT MY EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Architecting <span className="text-gradient-cyan">Intelligent Systems</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg">
            Engineering robust deep learning architectures, agentic intelligence, and high-performance Cloud MLOps pipelines designed for enterprise scale.
          </p>
        </div>

        {/* Bio Overview Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-gray-800 mb-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl font-bold text-white font-heading flex items-center gap-3">
                <Terminal className="h-6 w-6 text-cyan-400" />
                Hi, I&apos;m {PERSONAL_INFO.name}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span>State-of-the-art LLM Fine-Tuning & Quantization</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span>Autonomous Multi-Agent LangGraph Workflows</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span>Sub-second Edge Vision & Biometric Systems</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span>Enterprise Distributed Cloud GPU Clusters</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 glass-panel rounded-2xl border border-cyan-500/20 text-center">
              <div className="text-4xl font-bold font-heading text-gradient-cyan mb-1">
                99.9%
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-mono mb-4">
                Production Reliability
              </div>
              <div className="w-full h-px bg-gray-800 mb-4" />
              <div className="text-sm font-medium text-purple-300">
                Location: {PERSONAL_INFO.location}
              </div>
            </div>

          </div>
        </motion.div>

        {/* 8 Core Expertise Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_DOMAINS.map((domain, index) => {
            const Icon = ICON_MAP[domain.icon] || Sparkles;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-gray-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {domain.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center justify-between text-xs font-mono text-cyan-400/70 group-hover:text-cyan-400">
                  <span>ENTERPRISE SPEC</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
