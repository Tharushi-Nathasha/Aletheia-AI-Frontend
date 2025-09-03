// src/components/ConfidenceMeter.tsx


export const ConfidenceMeter = ({ score }: { score: number }) => {
  const rotation = (score / 100) * 360;
  return (
    <div className="confidence-meter">
      <div
        className="meter-circle"
        style={{
          background: `conic-gradient(var(--neon-blue) 0deg, var(--violet) ${rotation}deg, var(--light-grey) ${rotation}deg)`,
        }}
      >
        <div className="meter-inner">
          <div className="confidence-score">{score}%</div>
          <div className="confidence-label">Confidence</div>
        </div>
      </div>
    </div>
  );
};
