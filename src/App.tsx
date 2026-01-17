// src/App.tsx
import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import type { Page } from './components/Sidebar';
import { UploadArea } from './components/UploadArea';
import { ConfidenceMeter } from './components/ConfidenceMeter';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const [page, setPage] = useState<Page>('landing');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    if (page === 'analysis') {
      let current = 0;
      const target = 92;
      const interval = setInterval(() => {
        current += 2;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setConfidence(current);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [page]);

  useEffect(() => {
    const bg = document.getElementById('animatedBg');
    if (bg) {
      bg.innerHTML = ''; // Clear existing particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        bg.appendChild(particle);
      }
    }
  }, []);

  const handleFile = () => {
    setShowProgress(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setPage('analysis');
            setShowProgress(false);
            setUploadProgress(0);
          }, 500);
          return 100;
        }
        return next;
      });
    }, 200);
  };

  return (
    <>
      <div className="animated-bg" id="animatedBg" />
      <Sidebar current={page} setPage={setPage} />

      <div className="page-layout">
        <Header setPage={setPage} />

        <main className="main-content">
          {page === 'landing' && (
            <div className="page active" id="landing">
              <div className="landing">
                <h1 className="logo glow-text">ALETHIA AI</h1>
                <p className="tagline">Verifying Digital Truth</p>
                <button className="cta-button" onClick={() => setPage('upload')}>
                  Upload & Detect
                </button>
              </div>
            </div>
          )}

          {page === 'upload' && (
            <div className="page active" id="upload">
              <h2 className="glow-text" style={{ marginBottom: 40, fontSize: '2.5rem' }}>
                Upload Media for Analysis
              </h2>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <UploadArea onFileSelected={handleFile} />
                {showProgress && (
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${Math.min(uploadProgress, 100)}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          )}

          {page === 'analysis' && (
            <div className="page active" id="analysis">
              <h2 className="glow-text" style={{ marginBottom: 40, fontSize: '2.5rem' }}>
                Analysis Results
              </h2>

              <ConfidenceMeter score={confidence} />

              {/* Main Result Card */}
              <div className="main-result-card">
                <div className="result-status-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="result-title">Authenticity Verified</h3>
                <div className="result-status">AUTHENTIC</div>
                <div className="result-percentage">
                  <span className="percentage-real">92% Real</span>
                  <span className="percentage-divider">•</span>
                  <span className="percentage-fake">8% Fake</span>
                </div>
                <div className="status-badge status-real">✓ Verified Authentic</div>
              </div>

              {/* Details Grid */}
              <div className="analysis-details-grid">
                <div className="detail-card">
                  <div className="detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4>Analysis Method</h4>
                  <p>Deep Neural Network</p>
                </div>

                <div className="detail-card">
                  <div className="detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4>Processing Time</h4>
                  <p>2.3 seconds</p>
                </div>

                <div className="detail-card">
                  <div className="detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4>File Type</h4>
                  <p>JPEG Image</p>
                </div>

                <div className="detail-card">
                  <div className="detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4>Resolution</h4>
                  <p>1920×1080</p>
                </div>
              </div>

              {/* Comparison Section */}
              <div className="comparison-section">
                <h3 className="section-title">Visual Analysis</h3>
                <div className="comparison-container">
                  <div className="image-container">
                    <div className="image-label">Original Media</div>
                    <div className="preview-image">
                      <div className="placeholder-content">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Original Image</span>
                      </div>
                    </div>
                  </div>
                  <div className="image-container">
                    <div className="image-label">Analysis Heatmap</div>
                    <div className="preview-image heatmap">
                      <div className="placeholder-content">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>Heatmap Overlay</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="analysis-actions">
                <button className="action-button primary" onClick={() => setPage('upload')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Analyze Another
                </button>
                <button className="action-button secondary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  Download Report
                </button>
              </div>
            </div>
          )}

          {page === 'about' && (
            <div className="page active" id="about">
              <div className="content-page">
                <h2 className="glow-text" style={{ marginBottom: 40, fontSize: '2.5rem' }}>
                  About Alethia AI
                </h2>

                <div className="about-hero">
                  <div className="about-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="about-intro">
                    Alethia AI is a cutting-edge deepfake detection platform powered by advanced neural networks 
                    and machine learning algorithms to verify the authenticity of digital media.
                  </p>
                </div>

                <div className="about-grid">
                  <div className="about-card">
                    <div className="about-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3>Our Mission</h3>
                    <p>
                      To combat digital misinformation by providing accessible, accurate, and reliable 
                      deepfake detection tools for everyone.
                    </p>
                  </div>

                  <div className="about-card">
                    <div className="about-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3>Privacy First</h3>
                    <p>
                      Your uploaded media is processed securely and never stored permanently. 
                      We prioritize your privacy and data security.
                    </p>
                  </div>

                  <div className="about-card">
                    <div className="about-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3>Trusted Technology</h3>
                    <p>
                      Our AI models are trained on millions of samples and continuously updated 
                      to detect the latest deepfake techniques.
                    </p>
                  </div>
                </div>

                <div className="about-stats">
                  <div className="stat-item">
                    <div className="stat-number">99.2%</div>
                    <div className="stat-label">Accuracy Rate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">2.5s</div>
                    <div className="stat-label">Avg. Processing Time</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">500K+</div>
                    <div className="stat-label">Files Analyzed</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {page === 'contact' && (
            <div className="page active" id="contact">
              <div className="content-page">
                <h2 className="glow-text" style={{ marginBottom: 40, fontSize: '2.5rem' }}>
                  Contact Us
                </h2>

                <div className="contact-intro">
                  <p>Have questions or feedback? We'd love to hear from you!</p>
                </div>

                <div className="contact-grid">
                  <div className="contact-info">
                    <div className="contact-card">
                      <div className="contact-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3>Email</h3>
                      <p>support@alethia-ai.com</p>
                    </div>

                    <div className="contact-card">
                      <div className="contact-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3>Location</h3>
                      <p>San Francisco, CA</p>
                    </div>

                    <div className="contact-card">
                      <div className="contact-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3>Business Hours</h3>
                      <p>Mon - Fri: 9AM - 6PM PST</p>
                    </div>
                  </div>

                  <div className="contact-form-container">
                    <form className="contact-form">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="How can we help?" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows={5} placeholder="Your message..."></textarea>
                      </div>
                      <button type="submit" className="submit-button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;