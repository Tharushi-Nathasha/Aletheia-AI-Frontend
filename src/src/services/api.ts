export interface DetectionResult {
  prediction: 'REAL' | 'FAKE';
  confidence: number;
}

// Mock API service for deepfake detection
export const api = {
  detectImage: async (file: File): Promise<DetectionResult> => {
    // Simulate network delay and processing time
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Mock random result for demonstration
    const isFake = Math.random() > 0.5;
    const confidence = isFake ?
    0.75 + Math.random() * 0.24 // 75% - 99%
    : 0.8 + Math.random() * 0.19; // 80% - 99%

    return {
      prediction: isFake ? 'FAKE' : 'REAL',
      confidence: Number(confidence.toFixed(4))
    };
  },

  detectVideo: async (file: File): Promise<DetectionResult> => {
    // Simulate longer processing time for video
    await new Promise((resolve) => setTimeout(resolve, 4500));

    const isFake = Math.random() > 0.4; // Slightly biased towards fake for demo
    const confidence = isFake ?
    0.85 + Math.random() * 0.14 :
    0.7 + Math.random() * 0.25;

    return {
      prediction: isFake ? 'FAKE' : 'REAL',
      confidence: Number(confidence.toFixed(4))
    };
  }
};