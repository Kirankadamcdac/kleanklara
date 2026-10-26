'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleHoverStart);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleHoverStart);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient glow spotlight following mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 240, 255, 0.06), rgba(124, 58, 237, 0.03) 40%, transparent 80%)`,
        }}
      />

      {/* Main Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-cyan-400 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 2.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.1,
        }}
        style={{
          width: 8,
          height: 8,
          boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff',
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-cyan-400/40 hidden md:block"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.8)' : 'rgba(0, 240, 255, 0.4)',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200,
          mass: 0.2,
        }}
        style={{
          width: 36,
          height: 36,
        }}
      />
    </>
  );
}
