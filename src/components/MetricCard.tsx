import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

interface MetricCardProps {
  label: string;
  value: string;
  trend?: number;
  icon?: ReactNode;
}

const MetricCard = ({ label, value, trend, icon }: MetricCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(numericMatch[0]);
    const prefix = value.slice(0, value.indexOf(numericMatch[0]));
    const suffix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length);
    const isDecimal = numericMatch[0].includes(".");
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      setDisplay(
        isDecimal
          ? `${prefix}${current.toFixed(2)}${suffix}`
          : `${prefix}${Math.round(current)}${suffix}`
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="group glass-card-hover p-5 relative overflow-hidden cursor-pointer"
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* Gradient border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.08), transparent, hsl(var(--accent) / 0.08))",
        }}
      />
      {/* Corner glow */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
          {icon && (
            <motion.div
              className="text-muted-foreground"
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.div>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold tracking-tight font-mono-nums">{display}</h3>
          {trend !== undefined && (
            <motion.span
              className={`text-xs font-medium ${trend > 0 ? "text-accent" : "text-destructive"}`}
              initial={{ opacity: 0, x: -5 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
            </motion.span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MetricCard;
