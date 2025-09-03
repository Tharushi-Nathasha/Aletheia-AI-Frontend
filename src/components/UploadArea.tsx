// src/components/UploadArea.tsx
import React, { useRef, useState } from 'react';

export const UploadArea = ({
  onFileSelected,
}: {
  onFileSelected: (file: File) => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelected(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelected(e.target.files[0]);
    }
  };

  return (
    <div>
      <h2 className="glow-text" style={{ marginBottom: 40, fontSize: '2.5rem' }}>
        Upload Media for Analysis
      </h2>
      <div
        className={`upload-area ${dragOver ? 'dragover' : ''}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <div className="upload-icon">📁</div>
        <h3>Drag and drop your files here</h3>
        <p>or click to select files</p>
        <input
          type="file"
          ref={(el) => { inputRef.current = el; }}
          style={{ display: 'none' }}
          accept="image/*,video/*"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
