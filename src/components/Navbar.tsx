'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Menu, 
  X, 
  Download, 
  Sparkles,
  Layers,
  Brain,
  Code2,
  Briefcase,
  FolderGit2,
  Award,
  BookOpen,
  Mail
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', icon: Terminal },
  { label: 'About', href: '#about', icon: Brain },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: FolderGit2 },
  { label: 'Certifications', href: '#certifications', icon: Award },
  { label: 'GitHub', href: '#github', icon: GithubIcon },
  { label: 'Blog', href: '#blog', icon: BookOpen },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/60 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="h-full w-full bg-gray-950 rounded-[11px] flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-white tracking-wide flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] text-gray-400 tracking-wider uppercase font-mono">
                AI Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full border border-gray-800/80">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full bg-cyan-500/10 border border-cyan-500/30"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="relative group px-4 py-2 text-xs font-semibold rounded-xl overflow-hidden transition-all duration-300 text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                Hire Me
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-cyan-400" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-gray-950/95 backdrop-blur-2xl border-b border-gray-800 px-4 py-6"
          >
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800 flex gap-3">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/20"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
