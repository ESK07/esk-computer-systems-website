import { motion } from "framer-motion";
import { DollarSign, TrendingUp } from "lucide-react";

const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
const revenue = [82, 95, 88, 110, 105, 120, 115, 128, 142];
const maxVal = Math.max(...revenue);

const RevenueChartWidget = () => {
  return (
    <div className="glass-card p-5 h-full">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-warning" />
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Revenue Overview</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-accent">
          <TrendingUp className="w-3 h-3" />
          +18%
        </div>
      </div>
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-2xl font-bold font-mono-nums text-warning">$142K</span>
        <span className="text-xs text-muted-foreground">this month</span>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-2 h-32">
        {revenue.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <motion.div
              className={`w-full rounded-t-md ${
                i === revenue.length - 1
                  ? "bg-gradient-to-t from-warning/80 to-warning"
                  : "bg-primary/30 hover:bg-primary/50"
              } transition-colors`}
              initial={{ height: 0 }}
              animate={{ height: `${(val / maxVal) * 100}%` }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
            />
            <span className="text-[9px] text-muted-foreground">{months[i]}</span>
          </div>
        ))}
      </div>

      {/* Summary row */}
      <div className="mt-4 pt-3 border-t border-border grid grid-cols-3 gap-3">
        <div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Stripe</p>
          <p className="text-sm font-semibold font-mono-nums">$68K</p>
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">EcoCash</p>
          <p className="text-sm font-semibold font-mono-nums">$52K</p>
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Paynow</p>
          <p className="text-sm font-semibold font-mono-nums">$22K</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueChartWidget;
