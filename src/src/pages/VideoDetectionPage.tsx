import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilmIcon, ActivityIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { UploadZone } from '../components/UploadZone';
import { ResultCard } from '../components/ResultCard';
import { useFileUpload } from '../hooks/useFileUpload';
//import { api, DetectionResult } from '../services/api';
export function VideoDetectionPage() {
  const { file, previewUrl, error, handleFileSelect, reset, setError } =
  useFileUpload({
    maxSizeMB: 100
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const handleAnalyze = async () => {
    if (!file) return;
    setIsAnalyzing(true);
    setResult(null);
    setProgress(0);
    // Simulate progress bar for video
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return p + 5;
      });
    }, 200);
    try {
      const res = await api.detectVideo(file);
      setProgress(100);
      setTimeout(() => setResult(res), 500); // slight delay for smooth transition
    } catch (err) {
      setError('Analysis failed. Please try again.');
    } finally {
      setTimeout(() => setIsAnalyzing(false), 500);
      clearInterval(progressInterval);
    }
  };
  const handleClear = () => {
    reset();
    setResult(null);
    setProgress(0);
  };
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-white mb-4">
            Video <span className="text-gradient">Deepfake Detection</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Upload a video to perform temporal frame analysis and detect
            deepfake artifacts across time.
          </p>
        </div>

        <div className="space-y-8">
          {/* Upload Area */}
          <div className="relative">
            <UploadZone
              type="video"
              accept={{
                'video/mp4': ['.mp4'],
                'video/avi': ['.avi'],
                'video/quicktime': ['.mov']
              }}
              maxSizeMB={100}
              file={file}
              previewUrl={previewUrl}
              onFileSelect={handleFileSelect}
              onClear={handleClear}
              error={error} />
            

            {/* Video Processing Overlay */}
            <AnimatePresence>
              {isAnalyzing && previewUrl &&
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}
                className="absolute inset-0 z-30 rounded-2xl overflow-hidden pointer-events-none bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-8">
                
                  <ActivityIcon className="w-12 h-12 text-purple-400 animate-pulse mb-6" />

                  <div className="w-full max-w-md">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-purple-300 font-display uppercase tracking-widest">
                        Analyzing Frames...
                      </span>
                      <span className="text-white font-bold">{progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      animate={{
                        width: `${progress}%`
                      }}
                      transition={{
                        duration: 0.2
                      }} />
                    
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>

          {/* Action Button */}
          {!result &&
          <div className="flex justify-center">
              <motion.button
              whileHover={
              file && !isAnalyzing ?
              {
                scale: 1.05
              } :
              {}
              }
              whileTap={
              file && !isAnalyzing ?
              {
                scale: 0.95
              } :
              {}
              }
              onClick={handleAnalyze}
              disabled={!file || isAnalyzing}
              className={`px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all w-full md:w-auto min-w-[200px]
                  ${file && !isAnalyzing ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]' : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5'}
                `}>
              
                {isAnalyzing ?
              <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </> :

              <>
                    <FilmIcon className="w-5 h-5" />
                    Analyze Video
                  </>
              }
              </motion.button>
            </div>
          }

          {/* Results */}
          <AnimatePresence mode="wait">
            {result &&
            <ResultCard
              prediction={result.prediction}
              confidence={result.confidence}
              type="video" />

            }
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>);

}