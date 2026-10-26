'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Layers,
  Code2
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { Project } from '@/data/portfolioData';
import ArchitectureDiagram from './ArchitectureDiagram';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-gray-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass-panel border border-cyan-500/30 rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl shadow-cyan-500/10 z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all"
            aria-label="Close Project Modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 mb-6 pr-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
              <Sparkles className="h-3.5 w-3.5" />
              {project.category}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {project.title}
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-gray-900/80 border border-gray-800">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-xl sm:text-2xl font-bold font-heading text-gradient-cyan">
                  {metric.value}
                </span>
                <span className="text-[11px] font-mono text-gray-400 uppercase mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6 space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400">
              Project Overview:
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Diagram Component */}
          {project.architecture && (
            <ArchitectureDiagram
              title={project.architecture.title}
              nodes={project.architecture.nodes}
              connections={project.architecture.connections}
            />
          )}

          {/* Features List */}
          <div className="mb-6 space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400">
              Key Features & Capabilities:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 p-2.5 rounded-xl bg-gray-900/50 border border-gray-800/60">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Badges */}
          <div className="mb-8 space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400">
              Technology Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center gap-2"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl glass-panel text-white font-medium text-xs sm:text-sm hover:border-cyan-500/40 transition-all flex items-center gap-2"
            >
              <GithubIcon className="h-4 w-4 text-purple-400" />
              <span>GitHub Repository</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
