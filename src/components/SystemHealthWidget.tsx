import { motion } from "framer-motion";
import { Shield, Cpu, HardDrive, Thermometer, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const systems = [
  { name: "Primary DNS", status: "healthy", uptime: "99.99%", icon: Shield },
  { name: "Payment Gateway", status: "healthy", uptime: "99.97%", icon: Shield },
  { name: "Database Cluster", status: "warning", uptime: "99.85%", icon: HardDrive },
  { name: "Edge CDN", status: "healthy", uptime: "100%", icon: Shield },
  { name: "Auth Service", status: "healthy", uptime: "99.99%", icon: Shield },
];

const serverMetrics = [
  { label: "CPU Usage", value: 34, icon: Cpu, unit: "%" },
  { label: "Memory", value: 62, icon: HardDrive, unit: "%" },
  { label: "Temperature", value: 42, icon: Thermometer, unit: "°C" },
];

const SystemHealthWidget = () => {
  return (
    <motion.div
      className="glass-card p-5 h-full group"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Shield className="w-4 h-4 text-accent" />
          </motion.div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">System Health</p>
        </div>
        <motion.span
          className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent"
          animate={{
            boxShadow: [
              "0 0 0px hsl(167 100% 50% / 0)",
              "0 0 10px hsl(167 100% 50% / 0.3)",
              "0 0 0px hsl(167 100% 50% / 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          All Systems Go
        </motion.span>
      </div>

      {/* Server metrics bars with animated fill */}
      <div className="space-y-3 mb-5">
        {serverMetrics.map((metric, i) => (
          <div key={metric.label}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.2 }}
                >
                  <metric.icon className="w-3 h-3" />
                </motion.div>
                {metric.label}
              </div>
              <span className="text-xs font-mono-nums font-medium">{metric.value}{metric.unit}</span>
            </div>
            <div className="h-1.5 rounded-full bg-elevated overflow-hidden">
              <motion.div
                className={`h-full rounded-full relative ${
                  metric.value > 80 ? "bg-destructive" :
                  metric.value > 60 ? "bg-warning" :
                  "bg-accent"
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${metric.value}%` }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Shimmer effect on bar */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 + i * 0.2 }}
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Service status list */}
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Services</p>
      <div className="space-y-1.5">
        {systems.map((sys, i) => (
          <motion.div
            key={sys.name}
            className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-elevated/50 transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            whileHover={{ x: 3 }}
          >
            <div className="flex items-center gap-2">
              {sys.status === "healthy" ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </motion.div>
              ) : sys.status === "warning" ? (
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-warning" />
                </motion.div>
              ) : (
                <XCircle className="w-3.5 h-3.5 text-destructive" />
              )}
              <span className="text-sm">{sys.name}</span>
            </div>
            <span className="text-[10px] font-mono-nums text-muted-foreground">{sys.uptime}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SystemHealthWidget;
