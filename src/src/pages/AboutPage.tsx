import React from 'react';
import { ShieldCheckIcon, CpuIcon, NetworkIcon, EyeIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlowCard } from '../components/GlowCard';
export function AboutPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-12 space-y-24">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Science Behind{' '}
            <span className="text-gradient">Aletheia AI</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            We build advanced neural networks to protect digital authenticity
            and combat the spread of malicious synthetic media.
          </p>
        </div>

        {/* What are deepfakes */}
        <ScrollReveal>
          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
            <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <EyeIcon className="text-cyan-400" />
              What Are Deepfakes?
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              Deepfakes are synthetic media in which a person in an existing
              image or video is replaced with someone else's likeness using
              artificial neural networks. While the technology has benign
              applications, it is increasingly weaponized for misinformation,
              fraud, and harassment.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              As generative AI models become more accessible and sophisticated,
              the visual artifacts they leave behind become harder for humans to
              detect. This necessitates an AI-driven approach to defense.
            </p>
          </div>
        </ScrollReveal>

        {/* How it works */}
        <div className="space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
              How Aletheia AI Works
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <GlowCard glowColor="cyan" className="h-full p-8">
                <CpuIcon className="w-10 h-10 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  CNN-Based Image Analysis
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Our image detection engine utilizes Convolutional Neural
                  Networks (CNNs) trained on millions of real and AI-generated
                  images. It analyzes the frequency domain to spot unnatural
                  pixel blending, inconsistent lighting, and microscopic
                  artifacts introduced by GANs and Diffusion models.
                </p>
              </GlowCard>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <GlowCard glowColor="purple" className="h-full p-8">
                <NetworkIcon className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Temporal Frame Aggregation
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  For video detection, analyzing single frames isn't enough. We
                  use Recurrent Neural Networks (RNNs) and temporal aggregation
                  to track facial landmarks across time. This detects unnatural
                  micro-expressions, inconsistent blinking patterns, and subtle
                  jittering that deepfake generators struggle to perfect.
                </p>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>

        {/* Ethical AI */}
        <ScrollReveal direction="up">
          <div className="glass-panel border-purple-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-purple-500/10 blur-[80px]" />
            <ShieldCheckIcon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Commitment to Ethical AI
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg max-w-2xl mx-auto">
              Aletheia AI is built on diverse, globally representative datasets
              to ensure our detection models do not exhibit racial or gender
              biases. We believe in transparent AI that empowers users to verify
              truth without compromising privacy.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>);

}