import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnimatedBackground } from '../components/AnimatedBackground';
interface MainLayoutProps {
  children: React.ReactNode;
}
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-cyan-500/30">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>);

}