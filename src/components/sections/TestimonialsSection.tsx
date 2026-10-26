'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/portfolioData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 mb-3 border border-cyan-500/30">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>08 // ENDORSEMENTS & RECOMMENDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Client & Peer <span className="text-gradient-cyan">Testimonials</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg">
            Feedback from engineering leaders, research directors, and founders I have collaborated with.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-gray-800 flex flex-col justify-between relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-cyan-500/10 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-cyan-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold font-heading text-white">
                    {testimonial.name}
                  </h4>
                  <div className="text-xs font-mono text-cyan-400">
                    {testimonial.role} · <span className="text-gray-400">{testimonial.company}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
