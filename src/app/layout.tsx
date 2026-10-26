import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import BackgroundParticles from '@/components/BackgroundParticles';

export const metadata: Metadata = {
  title: 'Dr. Alex Vance | Principal AI Engineer & LLM Specialist',
  description: 'Portfolio of Dr. Alex Vance - Principal AI Engineer, Machine Learning Specialist, and Generative AI Architect specializing in LLMs, RAG, Autonomous AI Agents, and Computer Vision.',
  keywords: [
    'AI Engineer',
    'Machine Learning Engineer',
    'Generative AI Developer',
    'LLM Architect',
    'RAG Systems',
    'AI Agents',
    'Computer Vision',
    'PyTorch',
    'LangChain',
    'Next.js 15'
  ],
  authors: [{ name: 'Dr. Alex Vance' }],
  openGraph: {
    title: 'Dr. Alex Vance | Futuristic AI Engineer Portfolio',
    description: 'Building intelligent AI systems using Large Language Models, Machine Learning, Computer Vision, and Cloud AI.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-gray-950 text-gray-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-300">
        <CustomCursor />
        <BackgroundParticles />
        {children}
      </body>
    </html>
  );
}
