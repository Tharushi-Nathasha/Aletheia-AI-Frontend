import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MainLayout } from './layouts/MainLayout';
import { LandingPage } from './pages/LandingPage';
import { ImageDetectionPage } from './pages/ImageDetectionPage';
import { VideoDetectionPage } from './pages/VideoDetectionPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
export default function App() {
  return (
    <Router>
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/image-detection" element={<ImageDetectionPage />} />
            <Route path="/video-detection" element={<VideoDetectionPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </Router>);

}