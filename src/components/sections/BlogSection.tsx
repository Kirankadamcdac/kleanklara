'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/data/portfolioData';
import BlogModal from '@/components/ui/BlogModal';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 mb-3 border border-cyan-500/30">
            <BookOpen className="h-3.5 w-3.5" />
            <span>07 // TECHNICAL ARTICLES & TUTORIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            AI Engineering <span className="text-gradient-cyan">Publications</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg">
            In-depth guides on RAG optimization, model quantization, agent state machines, and edge vision deployment.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-gray-800 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                {/* Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-400/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-cyan-400" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-purple-400" />
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-purple-400" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Full Guide →
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Reader */}
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />

      </div>
    </section>
  );
}
