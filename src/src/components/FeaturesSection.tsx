import React from 'react';
import {
  ScanEyeIcon,
  FilmIcon,
  BarChart3Icon,
  ShieldCheckIcon } from
'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { GlowCard } from './GlowCard';
const features = [
{
  icon: ScanEyeIcon,
  title: 'Image Deepfake Detection',
  description:
  'Advanced CNNs analyze pixel-level inconsistencies, blending artifacts, and frequency domain anomalies invisible to the human eye.',
  color: 'cyan' as const
},
{
  icon: FilmIcon,
  title: 'Video Frame Analysis',
  description:
  'Temporal aggregation models track facial landmarks across frames to detect unnatural movements and micro-expressions.',
  color: 'purple' as const
},
{
  icon: BarChart3Icon,
  title: 'AI Confidence Scoring',
  description:
  'Get clear, probabilistic scoring on media authenticity with detailed breakdowns of detected manipulation zones.',
  color: 'cyan' as const
},
{
  icon: ShieldCheckIcon,
  title: 'Ethical AI Verification',
  description:
  'Built on unbiased datasets to ensure fair and accurate detection across diverse demographics and lighting conditions.',
  color: 'purple' as const
}];

export function FeaturesSection() {
  return (
    <section className="py-24 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Powered by Advanced{' '}
            <span className="text-gradient">Neural Networks</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our proprietary architecture combines spatial and temporal analysis
            to catch even the most sophisticated synthetic media.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) =>
        <ScrollReveal key={index} delay={index * 0.1} direction="up">
            <GlowCard glowColor={feature.color} className="h-full">
              <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 
                ${feature.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-400'}`}>
              
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </GlowCard>
          </ScrollReveal>
        )}
      </div>
    </section>);

}