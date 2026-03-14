import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImageIcon, FilmIcon, ShieldCheckIcon } from 'lucide-react';
export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative pt-20 pb-32 flex flex-col items-center justify-center min-h-[85vh] text-center">
      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-20 left-[10%] hidden lg:flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm text-cyan-300 border-cyan-500/30">
        
        <ShieldCheckIcon className="w-4 h-4" /> 99.8% Accuracy
      </motion.div>

      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-40 right-[10%] hidden lg:flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm text-purple-300 border-purple-500/30">
        
        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />{' '}
        Real-time Analysis
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}
        className="max-w-4xl mx-auto z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Aletheia Vision v2.4 is now live
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
          Uncover the Truth with <br className="hidden md:block" />
          <span className="text-gradient">Aletheia AI</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The most advanced deepfake detection system. We analyze microscopic
          artifacts and temporal inconsistencies to verify the authenticity of
          images and videos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={() => navigate('/image-detection')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-shadow">
            
            <ImageIcon className="w-5 h-5" />
            Detect Image
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={() => navigate('/video-detection')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-purple-500/50 transition-all">
            
            <FilmIcon className="w-5 h-5" />
            Detect Video
          </motion.button>
        </div>
      </motion.div>
    </section>);

}