'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Fire confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 mb-3 border border-cyan-500/30">
            <Mail className="h-3.5 w-3.5" />
            <span>09 // INITIATE COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg">
            Have a project in mind, want to hire me, or discuss custom AI architecture? Send a message and I will reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="glass-panel p-8 rounded-3xl border border-gray-800 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                Direct Channels
              </h3>

              {/* Direct Info Items */}
              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 uppercase">
                      Email Address
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 uppercase">
                      Location & Timezone
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 uppercase">
                      Response Time
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Under 24 Hours Guaranteed
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-gray-800">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-3">
                  Connect Across Networks:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-cyan-500/40 hover:scale-105 transition-all"
                    title="GitHub"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-cyan-500/40 hover:scale-105 transition-all"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-cyan-500/40 hover:scale-105 transition-all"
                    title="X (Twitter)"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-gray-800 relative overflow-hidden">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <div className="h-16 w-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Transmission Sent Successfully!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md">
                    Thank you for reaching out, {formData.name}. I have received your message and will review your inquiry shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-xs font-mono text-cyan-400 hover:text-white"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-gray-900/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-900/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Advisory Role"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project goals, timelines, or role expectations..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Transmit Message
                      </span>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
