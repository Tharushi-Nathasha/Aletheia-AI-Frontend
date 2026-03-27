import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilmIcon, ActivityIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { UploadZone } from '../components/UploadZone';
import { ResultCard } from '../components/ResultCard';
import { useFileUpload } from '../hooks/useFileUpload';
import { detectVideo, DetectionResult } from '../services/api';

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
      const res = await detectVideo(file);

      setProgress(100);

      setTimeout(() => {
        setResult(res);
      }, 500);

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
            Upload a video to analyze deepfake artifacts across frames.
          </p>
        </div>

        <div className="space-y-8">

          {/* Upload */}
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
              error={error}
            />

            {/* Loading */}
            <AnimatePresence>
              {isAnalyzing && previewUrl && (
                <motion.div className="absolute inset-0 flex items-center justify-center bg-black/70">

                  <ActivityIcon className="w-12 h-12 text-purple-400 animate-pulse mb-4" />

                  <div className="text-white">{progress}%</div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Button */}
          {!result && (
            <div className="flex justify-center">
              <button
                onClick={handleAnalyze}
                disabled={!file || isAnalyzing}
                className="px-6 py-3 bg-purple-600 text-white rounded-xl"
              >
                {isAnalyzing ? "Processing..." : "Analyze Video"}
              </button>
            </div>
          )}

          {/* RESULT */}
          <AnimatePresence mode="wait">
            {result && (
              <ResultCard
                prediction={result.prediction}
                confidence={result.confidence}
                type="video"
                frames={result.frames} // FIXED
              />
            )}
          </AnimatePresence>

        </div>

      </div>

    </PageTransition>
  );
}