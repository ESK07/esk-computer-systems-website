import { motion } from "framer-motion";
import { Globe, Signal, SignalHigh, SignalLow, SignalMedium } from "lucide-react";

const nodes = [
  { city: "Harare", status: "online", latency: "4ms", x: 62, y: 35 },
  { city: "Bulawayo", status: "online", latency: "8ms", x: 48, y: 58 },
  { city: "Mutare", status: "online", latency: "6ms", x: 78, y: 40 },
  { city: "Gweru", status: "warning", latency: "22ms", x: 55, y: 48 },
  { city: "Masvingo", status: "online", latency: "11ms", x: 65, y: 60 },
  { city: "Kariba", status: "offline", latency: "—", x: 40, y: 28 },
];

const NetworkMapWidget = () => {
  return (
    <div className="glass-card p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-primary" />
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Network Map</p>
        </div>
        <div className="flex gap-3 text-[10px]">
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Online</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-warning" /> Warning</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-destructive" /> Offline</span>
        </div>
      </div>

      <div className="relative w-full h-48 rounded-lg bg-elevated/50 border border-border overflow-hidden">
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={`${i * 10}%`} x2="100%" y2={`${i * 10}%`} stroke="hsl(217, 100%, 58%)" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={`${i * 10}%`} y1="0" x2={`${i * 10}%`} y2="100%" stroke="hsl(217, 100%, 58%)" strokeWidth="0.5" />
          ))}
        </svg>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {nodes.slice(0, -1).map((node, i) => {
            const next = nodes[i + 1];
            return (
              <line
                key={i}
                x1={`${node.x}%`} y1={`${node.y}%`}
                x2={`${next.x}%`} y2={`${next.y}%`}
                stroke="hsl(217, 100%, 58%)"
                strokeWidth="1"
                opacity="0.2"
                strokeDasharray="4 4"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.city}
            className="absolute group cursor-pointer"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Ping ring */}
            {node.status === "online" && (
              <div className="absolute inset-0 w-4 h-4 -m-1 rounded-full bg-accent/20 animate-ping" />
            )}
            <div className={`w-2.5 h-2.5 rounded-full border-2 ${
              node.status === "online" ? "bg-accent border-accent/50" :
              node.status === "warning" ? "bg-warning border-warning/50" :
              "bg-destructive border-destructive/50"
            }`} />

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-card border border-border rounded-lg px-2.5 py-1.5 text-[10px] whitespace-nowrap shadow-lg">
                <div className="font-medium text-foreground">{node.city}</div>
                <div className="text-muted-foreground">{node.latency} latency</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {nodes.slice(0, 3).map((node) => (
          <div key={node.city} className="flex items-center gap-2 text-xs">
            <span className={`w-1.5 h-1.5 rounded-full ${
              node.status === "online" ? "bg-accent" : node.status === "warning" ? "bg-warning" : "bg-destructive"
            }`} />
            <span className="text-muted-foreground">{node.city}</span>
            <span className="ml-auto font-mono text-foreground">{node.latency}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkMapWidget;
