import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadIcon, ImageIcon, FilmIcon, XIcon, FileIcon } from 'lucide-react';
interface UploadZoneProps {
  accept: Record<string, string[]>;
  maxSizeMB: number;
  file: File | null;
  previewUrl: string | null;
  onFileSelect: (file: File) => void;
  onClear: () => void;
  type: 'image' | 'video';
  error?: string | null;
}
export function UploadZone({
  accept,
  maxSizeMB,
  file,
  previewUrl,
  onFileSelect,
  onClear,
  type,
  error
}: UploadZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
  useDropzone({
    onDrop,
    accept,
    maxSize: maxSizeMB * 1024 * 1024,
    multiple: false
  });
  const Icon = type === 'image' ? ImageIcon : FilmIcon;
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!file ?
        <motion.div
          key="dropzone"
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          exit={{
            opacity: 0,
            scale: 0.95
          }}
          {...getRootProps()}
          className={`relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 p-12 flex flex-col items-center justify-center min-h-[300px]
              ${isDragActive ? 'border-cyan-400 bg-cyan-950/20' : 'border-white/10 bg-white/5 hover:border-cyan-500/50 hover:bg-white/10'}
              ${isDragReject ? 'border-red-500 bg-red-950/20' : ''}
            `}>
          
            <input {...getInputProps()} />

            {/* Animated background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
            animate={{
              y: isDragActive ? -10 : 0
            }}
            className="relative z-10 flex flex-col items-center text-center">
            
              <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300
                ${isDragActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10'}
              `}>
              
                <UploadIcon className="w-10 h-10" />
              </div>

              <h3 className="text-xl font-display font-semibold text-white mb-2">
                {isDragActive ?
              'Drop file here' :
              'Drag & drop or click to upload'}
              </h3>
              <p className="text-slate-400 mb-4 max-w-sm">
                Upload your {type} to analyze it for AI manipulation and
                deepfake artifacts.
              </p>

              <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1 bg-slate-900/50 px-3 py-1.5 rounded-full border border-white/5">
                  <Icon className="w-3.5 h-3.5" />
                  {type === 'image' ? 'JPG, PNG, WEBP' : 'MP4, AVI, MOV'}
                </span>
                <span className="flex items-center gap-1 bg-slate-900/50 px-3 py-1.5 rounded-full border border-white/5">
                  <FileIcon className="w-3.5 h-3.5" />
                  Max {maxSizeMB}MB
                </span>
              </div>
            </motion.div>
          </motion.div> :

        <motion.div
          key="preview"
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 group">
          
            <button
            onClick={onClear}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-500/80 transition-colors border border-white/10"
            aria-label="Remove file">
            
              <XIcon className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full flex items-center justify-center bg-black/40">
              {type === 'image' && previewUrl ?
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-contain" /> :

            type === 'video' && previewUrl ?
            <video
              src={previewUrl}
              controls
              className="w-full h-full object-contain" /> :

            null}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[2px]">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-cyan-400" />
                <div className="flex-1 truncate">
                  <p className="text-sm font-medium text-white truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>

      {error &&
      <motion.p
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="mt-4 text-sm text-red-400 flex items-center justify-center gap-2 bg-red-500/10 py-2 px-4 rounded-lg border border-red-500/20">
        
          <XIcon className="w-4 h-4" />
          {error}
        </motion.p>
      }
    </div>);

}