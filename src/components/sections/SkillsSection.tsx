'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Flame, 
  Layers, 
  Activity, 
  Eye, 
  TrendingUp, 
  Table, 
  Sparkles, 
  Cpu, 
  GitFork, 
  BookOpen, 
  Smile, 
  Search, 
  ShieldCheck, 
  Cloud, 
  CloudRain, 
  Box, 
  Container, 
  Zap, 
  Server, 
  GitCommit, 
  Database, 
  HardDrive, 
  FileText, 
  Share2, 
  FileCode
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

const SKILL_ICONS: Record<string, React.ElementType> = {
  Terminal,
  Code2,
  FileCode,
  Database,
  Cpu,
  Flame,
  Layers,
  Activity,
  Eye,
  TrendingUp,
  Table,
  Sparkles,
  GitFork,
  BookOpen,
  Smile,
  Search,
  ShieldCheck,
  Cloud,
  CloudRain,
  Box,
  Container,
  Zap,
  Server,
  GitCommit,
  HardDrive,
  FileText,
  Share2
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 mb-3 border border-cyan-500/30">
            <Code2 className="h-3.5 w-3.5" />
            <span>02 // TECHNICAL STACK & PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Categorized <span className="text-gradient-cyan">Skill Matrix</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of programming languages, deep learning frameworks, LLM tooling, cloud infrastructure, and data platforms I work with.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SKILL_CATEGORIES.map((cat, index) => {
            const isActive = activeCategory === index;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(index)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'glass-panel text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Category Description */}
        <div className="text-center mb-10">
          <p className="text-sm font-mono text-cyan-400">
            {SKILL_CATEGORIES[activeCategory].description}
          </p>
        </div>

        {/* Active Category Skill Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SKILL_CATEGORIES[activeCategory].skills.map((skill, sIdx) => {
              const Icon = SKILL_ICONS[skill.icon] || Code2;
              return (
                <div
                  key={skill.name}
                  className={`glass-panel glass-panel-hover p-5 rounded-2xl border transition-all duration-300 ${
                    skill.highlight
                      ? 'border-cyan-500/40 bg-cyan-950/20'
                      : 'border-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${
                        skill.highlight
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                          : 'bg-gray-800/80 text-gray-300'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-white text-base flex items-center gap-2">
                          {skill.name}
                          {skill.highlight && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                              Core
                            </span>
                          )}
                        </h4>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-gray-900 overflow-hidden border border-gray-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: sIdx * 0.05 }}
                      className={`h-full rounded-full ${
                        skill.highlight
                          ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500'
                          : 'bg-cyan-500'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* All Skill Pills Quick Matrix Cloud */}
        <div className="mt-16 pt-12 border-t border-gray-800/80">
          <div className="text-center mb-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400">
              Full Technology Ecosystem Tags
            </h4>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Python", "PyTorch", "TensorFlow", "OpenAI GPT-4o", "Claude 3.5", "Llama 3", "LangChain", "LangGraph", 
              "LlamaIndex", "Hugging Face", "Pinecone", "Weaviate", "Qdrant", "ChromaDB", "AWS Bedrock", "SageMaker", 
              "FastAPI", "Docker", "Kubernetes", "vLLM", "Triton Server", "OpenCV", "TensorRT", "PostgreSQL", 
              "Redis", "MongoDB", "TypeScript", "Next.js 15", "React 19", "C++", "SQL", "Git", "GitHub Actions"
            ].map((tag) => (
              <span
                key={tag}
                className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-mono text-gray-300 border border-gray-800 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200 cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
