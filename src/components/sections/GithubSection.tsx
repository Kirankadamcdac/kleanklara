'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitCommit, 
  Star, 
  Users, 
  FolderGit2, 
  Code2, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { GITHUB_STATS } from '@/data/portfolioData';

export default function GithubSection() {
  // Generate 52 weeks x 7 days heatmap grid simulation
  const [hoveredCell, setHoveredCell] = useState<{ week: number; day: number; count: number } | null>(null);

  // Simple deterministic calculation for heatmap contribution intensity
  const getContributionCount = (week: number, day: number) => {
    const val = (week * 7 + day * 13 + 5) % 17;
    if (val > 14) return 8;
    if (val > 10) return 5;
    if (val > 6) return 3;
    if (val > 2) return 1;
    return 0;
  };

  const getHeatmapColor = (count: number) => {
    if (count >= 8) return 'bg-cyan-400 shadow-sm shadow-cyan-400/50';
    if (count >= 5) return 'bg-cyan-600/80';
    if (count >= 3) return 'bg-cyan-800/60';
    if (count >= 1) return 'bg-cyan-950';
    return 'bg-gray-900/60 border border-gray-800/40';
  };

  return (
    <section id="github" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 mb-3 border border-cyan-500/30">
            <GithubIcon className="h-3.5 w-3.5" />
            <span>06 // OPEN SOURCE & COMMIT HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            GitHub <span className="text-gradient-cyan">Activity Analytics</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg">
            Real-time contribution metric breakdown, open-source repositories, and developer activity stream.
          </p>
        </div>

        {/* Top GitHub Quick Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="glass-panel p-5 rounded-2xl border border-gray-800 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <FolderGit2 className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-heading text-white">
                {GITHUB_STATS.publicRepos}
              </div>
              <div className="text-xs font-mono text-gray-400 uppercase">
                Public Repositories
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-gray-800 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Star className="h-6 w-6 fill-amber-400/20" />
            </div>
            <div>
              <div className="text-2xl font-bold font-heading text-white">
                {GITHUB_STATS.stars}
              </div>
              <div className="text-xs font-mono text-gray-400 uppercase">
                Stars Earned
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-gray-800 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-heading text-white">
                {GITHUB_STATS.followers}
              </div>
              <div className="text-xs font-mono text-gray-400 uppercase">
                GitHub Followers
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-gray-800 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <GitCommit className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-heading text-white">
                {GITHUB_STATS.contributionsThisYear}
              </div>
              <div className="text-xs font-mono text-gray-400 uppercase">
                Commits this Year
              </div>
            </div>
          </div>
        </div>

        {/* 52-Week Contribution Heatmap Panel */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gray-800 mb-8 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                52-Week Contribution Grid ({GITHUB_STATS.contributionsThisYear} Total Commits)
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span>Less</span>
              <div className="h-3 w-3 rounded-sm bg-gray-900 border border-gray-800" />
              <div className="h-3 w-3 rounded-sm bg-cyan-950" />
              <div className="h-3 w-3 rounded-sm bg-cyan-800/60" />
              <div className="h-3 w-3 rounded-sm bg-cyan-600/80" />
              <div className="h-3 w-3 rounded-sm bg-cyan-400" />
              <span>More</span>
            </div>
          </div>

          {/* Grid Container */}
          <div className="overflow-x-auto pb-2">
            <div className="inline-flex gap-1 min-w-[760px]">
              {Array.from({ length: 52 }).map((_, week) => (
                <div key={week} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, day) => {
                    const count = getContributionCount(week, day);
                    return (
                      <div
                        key={day}
                        onMouseEnter={() => setHoveredCell({ week, day, count })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`h-3 w-3 rounded-sm transition-all duration-150 cursor-pointer ${getHeatmapColor(count)} hover:scale-125 hover:z-10`}
                        title={`Week ${week + 1}, Day ${day + 1}: ${count} commits`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {hoveredCell && (
            <div className="mt-2 text-xs font-mono text-cyan-300">
              Week {hoveredCell.week + 1}: {hoveredCell.count} commits logged on day {hoveredCell.day + 1}.
            </div>
          )}
        </div>

        {/* Top Languages & Recent Commits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Top Languages Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-7 rounded-3xl border border-gray-800 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold font-heading text-white flex items-center gap-2 mb-4">
                <Code2 className="h-4 w-4 text-purple-400" />
                Language Distribution
              </h3>

              {/* Progress Bar Stack */}
              <div className="w-full h-3 rounded-full bg-gray-900 flex overflow-hidden border border-gray-800 mb-6">
                {GITHUB_STATS.topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    className="h-full transition-all"
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Language Breakdown List */}
              <div className="space-y-3">
                {GITHUB_STATS.topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="text-gray-300 font-semibold">{lang.name}</span>
                    </div>
                    <span className="text-gray-400">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800 text-center">
              <a
                href={`https://github.com/${GITHUB_STATS.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <span>Visit @{GITHUB_STATS.username} on GitHub</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Recent Commits Activity Feed */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-7 rounded-3xl border border-gray-800">
            <h3 className="text-base font-bold font-heading text-white flex items-center gap-2 mb-4">
              <GitCommit className="h-4 w-4 text-cyan-400" />
              Recent Commit Activity
            </h3>

            <div className="space-y-3">
              {GITHUB_STATS.recentCommits.map((commit, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-gray-900/60 border border-gray-800 flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-cyan-400">
                      {commit.repo}
                    </div>
                    <div className="text-xs text-gray-300 font-mono line-clamp-1">
                      {commit.message}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 whitespace-nowrap">
                    {commit.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
