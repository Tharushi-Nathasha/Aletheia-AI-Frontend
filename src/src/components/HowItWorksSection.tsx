import React from 'react';
import { UploadIcon, CpuIcon, CheckCircleIcon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
const steps = [
{
  icon: UploadIcon,
  title: 'Upload Media',
  description:
  'Securely upload your image or video file. We support all major formats up to 100MB.'
},
{
  icon: CpuIcon,
  title: 'AI Analyzes Patterns',
  description:
  'Our neural networks scan for blending boundaries, unnatural lighting, and temporal inconsistencies.'
},
{
  icon: CheckCircleIcon,
  title: 'Get Authenticity Results',
  description:
  'Receive a definitive REAL or FAKE prediction along with a detailed confidence score.'
}];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Three simple steps to verify the authenticity of any digital media.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-purple-500/0" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) =>
          <ScrollReveal
            key={index}
            delay={index * 0.2}
            direction="up"
            className="relative">
            
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 w-24 h-24 rounded-full glass flex items-center justify-center mb-6 border-cyan-500/30 glow-cyan">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center text-sm shadow-lg">
                    {index + 1}
                  </div>
                  <step.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>);

}