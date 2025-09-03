// src/components/HistoryEntry.tsx


export const HistoryEntry = ({
  name,
  uploaded,
  status,
  confidence,
}: {
  name: string;
  uploaded: string;
  status: 'real' | 'fake';
  confidence: number;
}) => (
  <div className="history-item">
    <div className="history-thumbnail" />
    <div className="history-details">
      <h4>{name}</h4>
      <p style={{ color: '#888', margin: '5px 0' }}>Uploaded: {uploaded}</p>
      <div className={`status-badge ${status === 'real' ? 'status-real' : 'status-fake'}`}>
        {status === 'real' ? `Authentic - ${confidence}%` : `Deepfake - ${confidence}%`}
      </div>
    </div>
  </div>
);
