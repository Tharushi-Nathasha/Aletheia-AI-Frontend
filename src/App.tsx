// src/App.tsx
import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import type { Page } from './components/Sidebar';
import { UploadArea } from './components/UploadArea';
import { ConfidenceMeter } from './components/ConfidenceMeter';
import { HistoryEntry } from './components/HistoryEntry';
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
        <Header />

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
          )}

          {page === 'analysis' && (
            <div className="page active" id="analysis">
              <h2 className="glow-text" style={{ marginBottom: 40, fontSize: '2.5rem' }}>
                Analysis Results
              </h2>

              <ConfidenceMeter score={confidence} />

              <div className="analysis-container">
                <div className="result-card real" id="resultCard">
                  <h3>Authenticity Status</h3>
                  <div style={{ margin: '20px 0' }}>
                    <div style={{ fontSize: '1.5rem', color: '#44FF44', fontWeight: 600 }}>
                      AUTHENTIC
                    </div>
                    <div style={{ color: '#888', marginTop: 10 }}>
                      Real: 92% | Fake: 8%
                    </div>
                  </div>
                  <div className="status-badge status-real">Verified Authentic</div>
                </div>

                <div className="result-card">
                  <h3>Detection Details</h3>
                  <div style={{ margin: '20px 0' }}>
                    <p>
                      <strong>Analysis Method:</strong> Deep Neural Network
                    </p>
                    <p>
                      <strong>Processing Time:</strong> 2.3 seconds
                    </p>
                    <p>
                      <strong>File Type:</strong> JPEG Image
                    </p>
                    <p>
                      <strong>Resolution:</strong> 1920x1080
                    </p>
                  </div>
                </div>
              </div>

              <div className="comparison-container">
                <div className="image-container">
                  <h4>Original Media</h4>
                  <div
                    className="preview-image"
                    style={{
                      height: 200,
                      background: 'var(--light-grey)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Original Image
                  </div>
                </div>
                <div className="image-container">
                  <h4>Analysis Heatmap</h4>
                  <div
                    className="preview-image"
                    style={{
                      height: 200,
                      background: 'var(--light-grey)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Heatmap Overlay
                  </div>
                </div>
              </div>
            </div>
          )}

          {page === 'history' && (
            <div className="page active" id="history">
              <h2 className="glow-text" style={{ marginBottom: 40, fontSize: '2.5rem' }}>
                Analysis History
              </h2>
              <HistoryEntry name="sample_image.jpg" uploaded="2 hours ago" status="real" confidence={92} />
              <HistoryEntry name="video_clip.mp4" uploaded="1 day ago" status="fake" confidence={78} />
              <HistoryEntry name="portrait.png" uploaded="3 days ago" status="real" confidence={95} />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
