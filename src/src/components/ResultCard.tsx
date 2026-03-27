import { motion } from 'framer-motion';
import { CheckCircleIcon, AlertTriangleIcon } from 'lucide-react';
import { ConfidenceBar } from './ConfidenceBar';

interface ResultCardProps {
  prediction: 'REAL' | 'FAKE';
  confidence: number;
  type: 'image' | 'video';
  heatmap?: string;
  frames?: {
    frame: number;
    score: number;
    heatmap: string;
  }[];
}

// Explanation function
function getExplanation(prediction: 'REAL' | 'FAKE', confidence: number) {

  if (prediction === 'FAKE') {
    if (confidence > 0.9)
      return "Strong manipulation detected. The AI found inconsistencies in facial regions.";

    if (confidence > 0.75)
      return "Possible manipulation detected with some irregular patterns.";

    return "Uncertain result. Some unusual patterns were found.";
  }

  if (confidence > 0.9)
    return "No manipulation detected. Content appears natural.";

  return "Content appears real with minor variations.";
}

export function ResultCard({
  prediction,
  confidence,
  type,
  heatmap,
  frames
}: ResultCardProps) {

  const isFake = prediction === 'FAKE';
  const Icon = isFake ? AlertTriangleIcon : CheckCircleIcon;

  return (
    <motion.div className="p-6 border rounded-xl bg-black text-white">

      {/* HEADER */}
      <div className="flex items-center gap-6">

        <Icon className={isFake ? "text-red-500" : "text-green-500"} />

        <div>
          <h2 className="text-2xl">{prediction}</h2>
          <p>{getExplanation(prediction, confidence)}</p>
        </div>

      </div>

      <ConfidenceBar score={confidence} />

      {/* IMAGE HEATMAP */}
      {heatmap && type === 'image' && (
        <img
          src={`data:image/jpeg;base64,${heatmap}`}
          className="mt-4 rounded"
        />
      )}

      {/* VIDEO FRAMES */}
      {type === 'video' && frames && (
        <div className="grid grid-cols-2 gap-4 mt-4">

          {frames.map((f, i) => (
            <div key={i}>
              <img src={`data:image/jpeg;base64,${f.heatmap}`} />
              <p>{(f.score * 100).toFixed(1)}%</p>
            </div>
          ))}

        </div>
      )}

    </motion.div>
  );
}