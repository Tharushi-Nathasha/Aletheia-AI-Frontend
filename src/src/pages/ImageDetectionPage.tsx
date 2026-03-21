import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanEyeIcon } from 'lucide-react';

import { PageTransition } from '../components/PageTransition';
import { UploadZone } from '../components/UploadZone';
import { ResultCard } from '../components/ResultCard';
import { useFileUpload } from '../hooks/useFileUpload';

import { detectImage } from '../services/api';

export function ImageDetectionPage() {

  const { file, previewUrl, error, handleFileSelect, reset, setError } =
    useFileUpload({
      maxSizeMB: 10
    });

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // ✅ UPDATED RESULT STATE (added heatmap)
  const [result, setResult] = useState<{
    prediction: 'REAL' | 'FAKE';
    confidence: number;
    heatmap?: string;
  } | null>(null);

  const handleAnalyze = async () => {

    if (!file) return;

    setIsAnalyzing(true);
    setResult(null);

    try {

      const res = await detectImage(file);

      // ✅ STORE HEATMAP ALSO
      setResult({
        prediction: res.prediction,
        confidence: res.confidence,
        heatmap: res.heatmap
      });

    } catch (err) {

      console.error(err);
      setError('Analysis failed. Please try again.');

    } finally {

      setIsAnalyzing(false);

    }

  };

  const handleClear = () => {
    reset();
    setResult(null);
  };

  return (

    <PageTransition>

      <div className="max-w-4xl mx-auto py-12">

        <div className="text-center mb-12">

          <h1 className="text-4xl font-display font-bold text-white mb-4">
            Image <span className="text-gradient">Deepfake Detection</span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Upload an image to analyze it for synthetic manipulation,
            AI generation artifacts, and digital alterations.
          </p>

        </div>

        <div className="space-y-8">

          <div className="relative">

            <UploadZone
              type="image"
              accept={{
                'image/jpeg': ['.jpg', '.jpeg'],
                'image/png': ['.png'],
                'image/webp': ['.webp']
              }}
              maxSizeMB={10}
              file={file}
              previewUrl={previewUrl}
              onFileSelect={handleFileSelect}
              onClear={handleClear}
              error={error}
            />

            <AnimatePresence>

              {isAnalyzing && previewUrl && (

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-30 rounded-2xl overflow-hidden pointer-events-none"
                >

                  <div className="absolute inset-0 bg-cyan-900/20 backdrop-blur-[2px]" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center">

                    <ScanEyeIcon className="w-12 h-12 text-cyan-400 animate-pulse mb-4" />

                    <span className="text-cyan-400 font-display font-semibold tracking-widest uppercase animate-pulse">
                      Analyzing Pixels...
                    </span>

                  </div>

                  <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] animate-scan" />

                </motion.div>

              )}

            </AnimatePresence>

          </div>

          {!result && (

            <div className="flex justify-center">

              <motion.button
                whileHover={file && !isAnalyzing ? { scale: 1.05 } : {}}
                whileTap={file && !isAnalyzing ? { scale: 0.95 } : {}}
                onClick={handleAnalyze}
                disabled={!file || isAnalyzing}
                className={`px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all w-full md:w-auto min-w-[200px]

                ${file && !isAnalyzing
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5'
                }`}
              >

                {isAnalyzing ? (

                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>

                ) : (

                  <>
                    <ScanEyeIcon className="w-5 h-5" />
                    Analyze Image
                  </>

                )}

              </motion.button>

            </div>

          )}

          <AnimatePresence mode="wait">

            {result && (

              <ResultCard
                prediction={result.prediction}
                confidence={result.confidence}
                type="image"
                heatmap={result.heatmap} // ✅ THIS IS THE FINAL STEP
              />

            )}

          </AnimatePresence>

        </div>

      </div>

    </PageTransition>

  );
}