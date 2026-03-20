import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BandwidthChart = () => {
  const [points, setPoints] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = Array.from({ length: 40 }, () => 30 + Math.random() * 50);
    setPoints(initial);
    setTimeout(() => setMounted(true), 100);

    const interval = setInterval(() => {
      setPoints((prev) => {
        const next = [...prev.slice(1), 30 + Math.random() * 50];
        return next;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const width = 600;
  const height = 160;
  const padding = 10;

  const pathD = points
    .map((p, i) => {
      const x = padding + (i / (points.length - 1)) * (width - padding * 2);
      const y = height - padding - (p / 100) * (height - padding * 2);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const areaD = pathD + ` L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`;

  // Animated line length
  const totalLength = 2000;

  return (
    <motion.div
      className="glass-card p-5 group"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Bandwidth Usage</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-xl font-bold font-mono-nums">{points[points.length - 1]?.toFixed(1)} Mbps</span>
            <motion.span
              className="text-xs text-accent"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↑ 12%
            </motion.span>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Download
          </div>
          <div className="flex items-center gap-1.5">
            <motion.div
              className="w-2 h-2 rounded-full bg-accent"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            Upload
          </div>
        </div>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
        <defs>
          <linearGradient id="bandwidthGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(217, 100%, 58%)" />
            <stop offset="100%" stopColor="hsl(167, 100%, 50%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d={areaD}
          fill="url(#bandwidthGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ strokeDasharray: totalLength, strokeDashoffset: totalLength }}
          animate={{ strokeDashoffset: mounted ? 0 : totalLength }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* Active data point glow */}
        {points.length > 0 && (
          <>
            <motion.circle
              cx={width - padding}
              cy={height - padding - (points[points.length - 1] / 100) * (height - padding * 2)}
              r="4"
              fill="hsl(217, 100%, 58%)"
              filter="url(#glow)"
              animate={{ r: [3, 5, 3], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.circle
              cx={width - padding}
              cy={height - padding - (points[points.length - 1] / 100) * (height - padding * 2)}
              r="8"
              fill="none"
              stroke="hsl(217, 100%, 58%)"
              strokeWidth="1"
              animate={{ r: [6, 14], opacity: [0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </>
        )}
      </svg>
    </motion.div>
  );
};

export default BandwidthChart;
