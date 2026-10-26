'use client';

import React from 'react';
import { 
  Laptop, 
  Server, 
  Cpu, 
  Database, 
  Zap, 
  ArrowRight, 
  Workflow
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  label: string;
  type: 'client' | 'gateway' | 'model' | 'db' | 'service';
}

interface ArchitectureConnection {
  from: string;
  to: string;
  label?: string;
}

interface ArchitectureProps {
  title: string;
  nodes: ArchitectureNode[];
  connections: ArchitectureConnection[];
}

const TYPE_ICONS = {
  client: Laptop,
  gateway: Server,
  model: Cpu,
  db: Database,
  service: Zap
};

const TYPE_COLORS = {
  client: 'border-blue-500/40 bg-blue-950/30 text-blue-400',
  gateway: 'border-cyan-500/40 bg-cyan-950/30 text-cyan-400',
  model: 'border-purple-500/40 bg-purple-950/30 text-purple-400',
  db: 'border-emerald-500/40 bg-emerald-950/30 text-emerald-400',
  service: 'border-amber-500/40 bg-amber-950/30 text-amber-400'
};

export default function ArchitectureDiagram({ title, nodes, connections }: ArchitectureProps) {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-gray-800 my-6 bg-gray-950/80">
      <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-800">
        <Workflow className="h-4 w-4 text-cyan-400" />
        <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
          System Architecture: {title}
        </h4>
      </div>

      {/* Nodes Flow Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {nodes.map((node, index) => {
          const Icon = TYPE_ICONS[node.type] || Server;
          const colorClass = TYPE_COLORS[node.type] || 'border-gray-800 text-gray-300';
          
          return (
            <div key={node.id} className="relative flex flex-col items-center">
              <div className={`w-full p-4 rounded-xl border flex flex-col items-center text-center transition-all hover:scale-105 ${colorClass}`}>
                <div className="p-2 rounded-lg bg-black/40 mb-2">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono font-semibold line-clamp-2">
                  {node.label}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-mono opacity-70 mt-1">
                  [{node.type}]
                </span>
              </div>

              {/* Arrow Connector to next node */}
              {index < nodes.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-400 animate-pulse">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Connections List Summary */}
      {connections && connections.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-800/60">
          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
            Data Flow Streams:
          </span>
          <div className="flex flex-wrap gap-2">
            {connections.map((conn, cIdx) => (
              <div key={cIdx} className="px-3 py-1 rounded-md bg-gray-900 border border-gray-800 text-[11px] font-mono text-gray-300 flex items-center gap-1.5">
                <span className="text-cyan-400">{conn.from}</span>
                <span className="text-purple-400">→</span>
                <span className="text-cyan-400">{conn.to}</span>
                {conn.label && (
                  <span className="text-gray-400 text-[10px]">({conn.label})</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
