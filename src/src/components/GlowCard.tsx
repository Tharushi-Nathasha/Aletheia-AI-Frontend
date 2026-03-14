import React from 'react';
import { motion } from 'framer-motion';
interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'none';
  hoverEffect?: boolean;
}
export function GlowCard({
  children,
  className = '',
  glowColor = 'cyan',
  hoverEffect = true
}: GlowCardProps) {
  const glowClass =
  glowColor === 'cyan' ?
  'hover:glow-cyan hover:border-cyan-500/30' :
  glowColor === 'purple' ?
  'hover:glow-purple hover:border-purple-500/30' :
  '';
  return (
    <motion.div
      whileHover={
      hoverEffect ?
      {
        scale: 1.02,
        y: -5
      } :
      {}
      }
      transition={{
        duration: 0.3,
        ease: 'easeOut'
      }}
      className={`glass rounded-2xl p-6 transition-all duration-300 ${hoverEffect ? glowClass : ''} ${className}`}>
      
      {children}
    </motion.div>);

}