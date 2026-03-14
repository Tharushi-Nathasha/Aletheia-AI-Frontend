import React from 'react';
import { motion } from 'framer-motion';
interface ConfidenceBarProps {
  score: number; // 0 to 1
  animated?: boolean;
}
export function ConfidenceBar({ score, animated = true }: ConfidenceBarProps) {
  const percentage = Math.round(score * 100);
  // Determine color based on score
  let colorClass = 'from-emerald-400 to-emerald-600';
  let glowClass = 'shadow-[0_0_15px_rgba(52,211,153,0.5)]';
  if (percentage < 40) {
    colorClass = 'from-red-400 to-red-600';
    glowClass = 'shadow-[0_0_15px_rgba(248,113,113,0.5)]';
  } else if (percentage < 70) {
    colorClass = 'from-amber-400 to-amber-600';
    glowClass = 'shadow-[0_0_15px_rgba(251,191,36,0.5)]';
  }
  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
          AI Confidence
        </span>
        <span className="text-xl font-display font-bold text-white">
          {percentage}%
        </span>
      </div>
      <div className="h-3 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5 backdrop-blur-sm">
        <motion.div
          initial={
          animated ?
          {
            width: 0
          } :
          {
            width: `${percentage}%`
          }
          }
          animate={{
            width: `${percentage}%`
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          className={`h-full rounded-full bg-gradient-to-r ${colorClass} ${glowClass} relative`}>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[scan_2s_linear_infinite]" />
        </motion.div>
      </div>
    </div>);

}