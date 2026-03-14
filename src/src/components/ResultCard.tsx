import { motion } from 'framer-motion';
import { CheckCircleIcon, AlertTriangleIcon, ActivityIcon } from 'lucide-react';
import { ConfidenceBar } from './ConfidenceBar';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
interface ResultCardProps {
  prediction: 'REAL' | 'FAKE';
  confidence: number;
  type: 'image' | 'video';
}
// Mock data for video frame analysis chart
const mockChartData = Array.from(
  {
    length: 20
  },
  (_, i) => ({
    frame: i * 5,
    fakeProbability: Math.max(
      0,
      Math.min(100, 20 + Math.random() * 60 + Math.sin(i / 2) * 20)
    )
  })
);
export function ResultCard({ prediction, confidence, type }: ResultCardProps) {
  const isFake = prediction === 'FAKE';
  const themeColor = isFake ? 'red' : 'emerald';
  const Icon = isFake ? AlertTriangleIcon : CheckCircleIcon;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}
      className={`glass rounded-2xl overflow-hidden border ${isFake ? 'border-red-500/30 glow-red' : 'border-emerald-500/30 glow-emerald'}`}>
      
      <div className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Main Result Badge */}
          <div
            className="flex-shrink-0 flex flex-col items-center justify-center w-48 h-48 rounded-full border-4 relative"
            style={{
              borderColor: isFake ?
              'rgba(248, 113, 113, 0.2)' :
              'rgba(52, 211, 153, 0.2)'
            }}>
            
            <div
              className="absolute inset-0 rounded-full animate-pulse-glow"
              style={{
                backgroundColor: isFake ?
                'rgba(248, 113, 113, 0.1)' :
                'rgba(52, 211, 153, 0.1)'
              }} />
            

            <Icon
              className={`w-12 h-12 mb-2 ${isFake ? 'text-red-500' : 'text-emerald-500'}`} />
            
            <span
              className={`text-4xl font-display font-bold tracking-wider ${isFake ? 'text-red-500' : 'text-emerald-500'}`}>
              
              {prediction}
            </span>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-widest">
              Prediction
            </span>
          </div>

          {/* Details & Confidence */}
          <div className="flex-1 w-full space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Analysis Complete
              </h3>
              <p className="text-slate-400">
                {isFake ?
                'Our AI detected significant artifacts consistent with synthetic manipulation. This media is highly likely to be a deepfake.' :
                'No significant manipulation artifacts were detected. This media appears to be authentic.'}
              </p>
            </div>

            <ConfidenceBar score={confidence} />

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Model Used
                </span>
                <span className="text-sm font-medium text-slate-300">
                  Aletheia Vision v2.4
                </span>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Scan Time
                </span>
                <span className="text-sm font-medium text-slate-300">
                  {type === 'image' ? '2.4s' : '4.5s'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Specific Chart Placeholder */}
        {type === 'video' &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          transition={{
            delay: 0.5
          }}
          className="mt-8 pt-8 border-t border-white/10">
          
            <div className="flex items-center gap-2 mb-6">
              <ActivityIcon className="w-5 h-5 text-cyan-400" />
              <h4 className="text-lg font-display font-semibold text-white">
                Temporal Frame Analysis
              </h4>
            </div>

            <div className="h-64 w-full bg-slate-900/30 rounded-xl p-4 border border-white/5">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                data={mockChartData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0
                }}>
                
                  <defs>
                    <linearGradient id="colorFake" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f87171" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f87171" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#ffffff10"
                  vertical={false} />
                
                  <XAxis
                  dataKey="frame"
                  stroke="#ffffff40"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false} />
                
                  <YAxis
                  stroke="#ffffff40"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false} />
                
                  <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#ffffff20',
                    borderRadius: '8px'
                  }}
                  itemStyle={{
                    color: '#f87171'
                  }} />
                
                  <Area
                  type="monotone"
                  dataKey="fakeProbability"
                  name="Manipulation Probability %"
                  stroke="#f87171"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorFake)" />
                
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">
              Graph shows probability of manipulation detected across sampled
              video frames.
            </p>
          </motion.div>
        }
      </div>
    </motion.div>);

}