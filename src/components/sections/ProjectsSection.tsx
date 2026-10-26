'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Sparkles, 
  ArrowRight,
  Workflow,
  Star
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from '@/components/ui/ProjectModal';

const CATEGORIES = [
  'All Projects',
  'Gen AI & LLM',
  'Computer Vision',
  'ML & Analytics',
  'AI Agents & Automation'
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory =
      selectedCategory === 'All Projects' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 mb-3 border border-cyan-500/30">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>04 // FEATURED AI SYSTEMS & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Production <span className="text-gradient-cyan">AI Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg">
            10 flagship open-source and enterprise AI implementations featuring architecture diagrams, performance metrics, and source code.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'glass-panel text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-900/80 border border-gray-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-panel glass-panel-hover rounded-3xl border border-gray-800 flex flex-col justify-between overflow-hidden group"
              >
                {/* Top Card Header */}
                <div className="p-6 sm:p-7">
                  
                  {/* Category Pill & Featured Flag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                        <Star className="h-3 w-3 fill-amber-400" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Metrics Highlight */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-gray-900/60 border border-gray-800/80 mb-5">
                    {project.metrics.slice(0, 3).map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col items-center text-center">
                        <span className="text-xs sm:text-sm font-bold font-heading text-gradient-cyan">
                          {m.value}
                        </span>
                        <span className="text-[9px] font-mono text-gray-500 uppercase truncate w-full">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-gray-900 text-gray-300 border border-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-gray-900 text-cyan-400 border border-gray-800">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                </div>

                {/* Bottom Action Footer */}
                <div className="p-4 px-6 bg-gray-950/60 border-t border-gray-800/60 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-semibold group/btn"
                  >
                    <Workflow className="h-3.5 w-3.5" />
                    <span>View Architecture</span>
                    <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:border-cyan-500/40 border border-gray-800 transition-colors"
                      title="View Source on GitHub"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40 border border-gray-800 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
