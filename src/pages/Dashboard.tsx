import DashboardSidebar from "../components/DashboardSidebar";
import MetricCard from "../components/MetricCard";
import BandwidthChart from "../components/BandwidthChart";
import NetworkMapWidget from "../components/NetworkMapWidget";
import RevenueChartWidget from "../components/RevenueChartWidget";
import ClientActivityWidget from "../components/ClientActivityWidget";
import SystemHealthWidget from "../components/SystemHealthWidget";
import AIChatWidget from "../components/AIChatWidget";
import ParticleField from "../components/ParticleField";
import { motion } from "framer-motion";
import { Wifi, LifeBuoy, Activity, Bell, ArrowUpRight, DollarSign, Users } from "lucide-react";

const recentTransactions = [
  { id: "TXN-001", client: "Harare Steel Co.", amount: "$4,500", status: "Completed", gateway: "Stripe" },
  { id: "TXN-002", client: "ZimFoods Ltd.", amount: "$1,200", status: "Completed", gateway: "EcoCash" },
  { id: "TXN-003", client: "National Pharma", amount: "$8,900", status: "Pending", gateway: "Paynow" },
  { id: "TXN-004", client: "AgriTech Zimbabwe", amount: "$3,300", status: "Completed", gateway: "Stripe" },
];

const tickets = [
  { id: "TKT-142", subject: "Fibre outage in Borrowdale", priority: "High", status: "Open" },
  { id: "TKT-143", subject: "Billing discrepancy", priority: "Medium", status: "In Progress" },
  { id: "TKT-144", subject: "VPN configuration request", priority: "Low", status: "Open" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 14 },
  },
};

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background relative">
      {/* Subtle particle field background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleField />
      </div>

      <DashboardSidebar />

      <main className="flex-1 overflow-y-auto relative z-10">
        {/* Header */}
        <motion.header
          className="sticky top-0 z-40 h-14 border-b border-border bg-background/80 backdrop-blur-xl flex items-center justify-between px-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h1 className="text-sm font-semibold">Command Center</h1>
            <p className="text-xs text-muted-foreground">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <motion.span
                className="inline-block w-2 h-2 rounded-full bg-accent"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0px hsl(167 100% 50% / 0)",
                    "0 0 8px hsl(167 100% 50% / 0.5)",
                    "0 0 0px hsl(167 100% 50% / 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              All Systems Operational
            </div>
            <motion.button
              className="relative p-2 rounded-lg hover:bg-elevated transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-4 h-4 text-muted-foreground" />
              <motion.span
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-destructive rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.button>
          </div>
        </motion.header>

        <div className="p-8 space-y-6">
          {/* Top Metrics */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <MetricCard label="Active Clients" value="547" trend={8} icon={<Users className="w-4 h-4" />} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <MetricCard label="Monthly Revenue" value="$142K" trend={18} icon={<DollarSign className="w-4 h-4 text-warning" />} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <MetricCard label="Network Uptime" value="99.99%" icon={<Wifi className="w-4 h-4 text-accent" />} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <MetricCard label="Open Tickets" value="12" trend={-15} icon={<LifeBuoy className="w-4 h-4" />} />
            </motion.div>
          </motion.div>

          {/* Bandwidth + Network Map */}
          <motion.div
            className="grid lg:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}><BandwidthChart /></motion.div>
            <motion.div variants={itemVariants}><NetworkMapWidget /></motion.div>
          </motion.div>

          {/* Revenue + System Health */}
          <motion.div
            className="grid lg:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}><RevenueChartWidget /></motion.div>
            <motion.div variants={itemVariants}><SystemHealthWidget /></motion.div>
          </motion.div>

          {/* Transactions + Clients + Tickets */}
          <motion.div
            className="grid lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Recent Transactions */}
            <motion.div className="glass-card p-5" variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Recent Transactions</p>
                <motion.button
                  className="text-xs text-primary flex items-center gap-1 hover:underline"
                  whileHover={{ x: 3 }}
                >
                  View All <ArrowUpRight className="w-3 h-3" />
                </motion.button>
              </div>
              <div className="space-y-3">
                {recentTransactions.map((tx, i) => (
                  <motion.div
                    key={tx.id}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0 hover:bg-elevated/30 rounded-lg px-2 -mx-2 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    whileHover={{ x: 3 }}
                  >
                    <div>
                      <p className="text-sm font-medium">{tx.client}</p>
                      <p className="text-xs text-muted-foreground">{tx.id} · {tx.gateway}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium font-mono-nums">{tx.amount}</p>
                      <p className={`text-xs ${tx.status === "Completed" ? "text-accent" : "text-warning"}`}>{tx.status}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Client Activity */}
            <motion.div variants={itemVariants}>
              <ClientActivityWidget />
            </motion.div>

            {/* Support Tickets */}
            <motion.div className="glass-card p-5" variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Support Tickets</p>
                <motion.button
                  className="text-xs text-primary flex items-center gap-1 hover:underline"
                  whileHover={{ x: 3 }}
                >
                  View All <ArrowUpRight className="w-3 h-3" />
                </motion.button>
              </div>
              <div className="space-y-3">
                {tickets.map((ticket, i) => (
                  <motion.div
                    key={ticket.id}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0 hover:bg-elevated/30 rounded-lg px-2 -mx-2 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    whileHover={{ x: 3 }}
                  >
                    <div>
                      <p className="text-sm font-medium">{ticket.subject}</p>
                      <p className="text-xs text-muted-foreground">{ticket.id}</p>
                    </div>
                    <div className="text-right">
                      <motion.span
                        className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          ticket.priority === "High"
                            ? "bg-destructive/10 text-destructive"
                            : ticket.priority === "Medium"
                            ? "bg-warning/10 text-warning"
                            : "bg-muted text-muted-foreground"
                        }`}
                        animate={
                          ticket.priority === "High"
                            ? { boxShadow: ["0 0 0px hsl(354 100% 65% / 0)", "0 0 8px hsl(354 100% 65% / 0.3)", "0 0 0px hsl(354 100% 65% / 0)"] }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {ticket.priority}
                      </motion.span>
                      <p className="text-xs text-muted-foreground mt-1">{ticket.status}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* AI Insights with hover glow */}
          <motion.div
            className="glass-card p-5 border-primary/20 group cursor-pointer relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -3 }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.05), transparent, hsl(var(--accent) / 0.05))",
              }}
            />
            <div className="flex items-start gap-3 relative z-10">
              <motion.div
                className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0"
                animate={{
                  boxShadow: [
                    "0 0 0px hsl(217 100% 58% / 0)",
                    "0 0 15px hsl(217 100% 58% / 0.3)",
                    "0 0 0px hsl(217 100% 58% / 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Activity className="w-4 h-4 text-background" />
              </motion.div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-primary mb-1">AI Insight</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Unusual spike in EcoCash transactions detected in the Bulawayo region — 34% above average. 
                  3 clients are approaching their bandwidth cap and may benefit from an upgrade to the Business tier. 
                  Database cluster latency is slightly elevated — consider scaling read replicas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <AIChatWidget />
    </div>
  );
};

export default Dashboard;
