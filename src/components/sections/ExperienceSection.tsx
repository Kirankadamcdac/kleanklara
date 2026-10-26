'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 mb-3 border border-cyan-500/30">
            <Briefcase className="h-3.5 w-3.5" />
            <span>03 // CAREER MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg">
            Track record of driving AI research, engineering production GenAI systems, and optimizing high-scale GPU infrastructure.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Connector Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Central Node Badge */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 h-9 w-9 rounded-full bg-gray-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 hidden md:flex">
                    <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Timeline Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${
                    isEven ? 'md:pr-0' : 'md:pl-0'
                  }`}>
                    <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-gray-800 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />

                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-purple-400 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-white">
                        {exp.role}
                      </h3>
                      <h4 className="text-base font-semibold text-cyan-400 mb-4">
                        {exp.company}
                      </h4>

                      <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-2 mb-6">
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">
                          Key Achievements:
                        </span>
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                            <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Badge Pills */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-gray-900 text-gray-300 border border-gray-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
