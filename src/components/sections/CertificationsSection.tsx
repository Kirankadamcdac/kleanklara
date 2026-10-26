'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/portfolioData';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 mb-3 border border-cyan-500/30">
            <Award className="h-3.5 w-3.5" />
            <span>05 // CREDENTIALS & SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Verified <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg">
            Industry recognized certifications from AWS, Google DeepLearning.AI, Microsoft Azure, and NVIDIA.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-gray-800 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />

              <div>
                {/* Badge Top Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${cert.badgeColor} text-white shadow-lg shadow-purple-500/20`}>
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
                    ID: {cert.credentialId}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {cert.title}
                </h3>
                <h4 className="text-xs font-semibold text-purple-400 mb-3">
                  {cert.issuer}
                </h4>

                <p className="text-xs font-mono text-gray-400 mb-5">
                  {cert.date}
                </p>

                {/* Skills Verified */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-gray-900 text-gray-300 border border-gray-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Verify Link */}
              <div className="pt-4 border-t border-gray-800">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
