import { useState, useCallback } from 'react';

interface UseFileUploadOptions {
  maxSizeMB?: number;
  acceptedTypes?: string[];
}

export function useFileUpload(options: UseFileUploadOptions = {}) {
  const { maxSizeMB = 10 } = options;

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = useCallback(
    (selectedFile: File) => {
      setError(null);

      // Validate size
      if (selectedFile.size > maxSizeMB * 1024 * 1024) {
        setError(`File size must be less than ${maxSizeMB}MB`);
        return;
      }

      setFile(selectedFile);

      // Create preview URL
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
    },
    [maxSizeMB]
  );

  const reset = useCallback(() => {
    setFile(null);
    setError(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  }, [previewUrl]);

  return {
    file,
    previewUrl,
    error,
    handleFileSelect,
    reset,
    setError
  };
}