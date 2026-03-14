import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, GithubIcon, LinkedinIcon, SendIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { GlowCard } from '../components/GlowCard';
export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have questions about our detection models or want to collaborate on
            AI research? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <GlowCard
              className="p-8 h-full flex flex-col justify-center space-y-8"
              hoverEffect={false}>
              
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-slate-400 mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:research@aletheia.ai"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                  
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">research@aletheia.ai</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors group">
                  
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">github.com/aletheia-ai</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
                  
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">
                    linkedin.com/company/aletheia
                  </span>
                </a>
              </div>
            </GlowCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <GlowCard className="p-8 md:p-10" hoverEffect={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-300 ml-1">
                    
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value
                    })
                    }
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="John Doe" />
                  
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-300 ml-1">
                    
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value
                    })
                    }
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="john@example.com" />
                  
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-300 ml-1">
                    
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                    setFormState({
                      ...formState,
                      message: e.target.value
                    })
                    }
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                    placeholder="How can we help you?" />
                  
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02
                  }}
                  whileTap={{
                    scale: 0.98
                  }}
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                  
                  {isSubmitting ?
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> :
                  isSuccess ?
                  'Message Sent!' :

                  <>
                      Send Message
                      <SendIcon className="w-4 h-4 ml-1" />
                    </>
                  }
                </motion.button>
              </form>
            </GlowCard>
          </div>
        </div>
      </div>
    </PageTransition>);

}