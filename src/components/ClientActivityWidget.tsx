import { motion } from "framer-motion";
import { Users, UserPlus, UserCheck, UserX } from "lucide-react";

const recentClients = [
  { name: "TechnoServe Africa", plan: "Enterprise", status: "active", joined: "2 days ago" },
  { name: "ZimSteel Industries", plan: "Business", status: "active", joined: "5 days ago" },
  { name: "GreenTech Solar", plan: "Starter", status: "trial", joined: "1 week ago" },
  { name: "Harare Medical", plan: "Business", status: "active", joined: "2 weeks ago" },
];

const ClientActivityWidget = () => {
  return (
    <div className="glass-card p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Client Activity</p>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-elevated/50 rounded-lg p-3 text-center">
          <UserPlus className="w-3.5 h-3.5 text-accent mx-auto mb-1" />
          <p className="text-lg font-bold font-mono-nums">24</p>
          <p className="text-[9px] text-muted-foreground uppercase">New</p>
        </div>
        <div className="bg-elevated/50 rounded-lg p-3 text-center">
          <UserCheck className="w-3.5 h-3.5 text-primary mx-auto mb-1" />
          <p className="text-lg font-bold font-mono-nums">512</p>
          <p className="text-[9px] text-muted-foreground uppercase">Active</p>
        </div>
        <div className="bg-elevated/50 rounded-lg p-3 text-center">
          <UserX className="w-3.5 h-3.5 text-destructive mx-auto mb-1" />
          <p className="text-lg font-bold font-mono-nums">3</p>
          <p className="text-[9px] text-muted-foreground uppercase">Churned</p>
        </div>
      </div>

      {/* Recent clients */}
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Recently Joined</p>
      <div className="space-y-2">
        {recentClients.map((client) => (
          <motion.div
            key={client.name}
            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-elevated/50 transition-colors"
            whileHover={{ x: 2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                {client.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium">{client.name}</p>
                <p className="text-[10px] text-muted-foreground">{client.plan} · {client.joined}</p>
              </div>
            </div>
            <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
              client.status === "active"
                ? "bg-accent/10 text-accent"
                : "bg-warning/10 text-warning"
            }`}>
              {client.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientActivityWidget;
