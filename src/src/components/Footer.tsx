import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-slate-950/50 backdrop-blur-lg overflow-hidden">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <NavLink to="/" className="flex items-center gap-2 mb-4">
              <ShieldIcon className="w-6 h-6 text-cyan-400" />
              <span className="font-display font-bold text-xl text-white">
                Aletheia <span className="text-gradient">AI</span>
              </span>
            </NavLink>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Advanced AI-powered deepfake detection system for images and
              videos. Protecting digital authenticity through cutting-edge
              neural networks.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all border border-white/5 hover:border-cyan-500/30">
                
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all border border-white/5 hover:border-cyan-500/30">
                
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all border border-white/5 hover:border-cyan-500/30">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Detection
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/image-detection"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">
                  
                  Image Analysis
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/video-detection"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">
                  
                  Video Analysis
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">
                  
                  How it Works
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/about"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">
                  
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">
                  
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">
                  
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Aletheia AI. Built for AI Deepfake Detection Research.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            System Status: All systems operational
          </div>
        </div>
      </div>
    </footer>);

}