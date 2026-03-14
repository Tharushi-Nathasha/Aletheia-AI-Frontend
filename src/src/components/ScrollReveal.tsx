import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
}
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = ''
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px'
  });
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: {
            opacity: 0,
            y: 40
          },
          visible: {
            opacity: 1,
            y: 0
          }
        };
      case 'down':
        return {
          hidden: {
            opacity: 0,
            y: -40
          },
          visible: {
            opacity: 1,
            y: 0
          }
        };
      case 'left':
        return {
          hidden: {
            opacity: 0,
            x: 40
          },
          visible: {
            opacity: 1,
            x: 0
          }
        };
      case 'right':
        return {
          hidden: {
            opacity: 0,
            x: -40
          },
          visible: {
            opacity: 1,
            x: 0
          }
        };
      case 'none':
        return {
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1
          }
        };
    }
  };
  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}>
      
      {children}
    </motion.div>);

}