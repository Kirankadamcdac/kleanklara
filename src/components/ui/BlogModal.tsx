'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, User, Sparkles, BookOpen, Share2 } from 'lucide-react';
import { BlogPost } from '@/data/portfolioData';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  if (!post) return null;

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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] glass-panel border border-cyan-500/30 rounded-3xl p-6 sm:p-10 overflow-y-auto shadow-2xl z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-all"
            aria-label="Close Article Modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header metadata */}
          <div className="space-y-4 mb-8 border-b border-gray-800 pb-6 pr-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-cyan-400">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
              {post.title}
            </h2>

            <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
              <User className="h-3.5 w-3.5" />
              <span>Written by {post.author}</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl font-bold font-heading text-white pt-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={idx} className="text-lg font-semibold font-heading text-cyan-300 pt-2">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.includes('```')) {
                const codeLines = paragraph.replace(/```[a-z]*/g, '').trim();
                return (
                  <pre key={idx} className="p-4 rounded-2xl bg-gray-950 border border-gray-800 font-mono text-xs text-cyan-300 overflow-x-auto my-4">
                    <code>{codeLines}</code>
                  </pre>
                );
              }
              return (
                <p key={idx} className="text-gray-300">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Article Footer */}
          <div className="mt-10 pt-6 border-t border-gray-800 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-xs font-mono text-gray-300 hover:text-white"
            >
              Close Reader
            </button>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <BookOpen className="h-4 w-4" />
              <span>AI Engineering Insights Series</span>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
