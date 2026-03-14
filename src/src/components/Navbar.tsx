import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldIcon, MenuIcon, XIcon } from 'lucide-react';
const navLinks = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'Image Detection',
  path: '/image-detection'
},
{
  name: 'Video Detection',
  path: '/video-detection'
},
{
  name: 'About',
  path: '/about'
},
{
  name: 'Contact',
  path: '/contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <ShieldIcon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Aletheia <span className="text-gradient">AI</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                  
                  {isActive &&
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30
                    }} />

                  }
                  {link.name}
                </NavLink>);

            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            
            {mobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden">
          
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>
                  
                    {link.name}
                  </NavLink>);

            })}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}