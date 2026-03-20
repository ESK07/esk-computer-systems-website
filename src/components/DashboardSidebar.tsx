import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Wifi, CreditCard, LifeBuoy, Bell,
  Settings, ChevronLeft, ChevronRight, Activity, Users, FileText
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: Wifi, label: "Connectivity", href: "/dashboard/isp" },
  { icon: CreditCard, label: "Fintech", href: "/dashboard/fintech" },
  { icon: FileText, label: "Invoices", href: "/dashboard/invoices" },
  { icon: LifeBuoy, label: "Support", href: "/dashboard/support" },
  { icon: Activity, label: "System Health", href: "/dashboard/health" },
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`h-screen sticky top-0 border-r border-border bg-surface/50 backdrop-blur-md flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Logo */}
      <div className="h-14 flex items-center px-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-2 h-6 rounded-sm bg-primary esk-pulse flex-shrink-0" />
          {!collapsed && <span className="font-bold text-sm tracking-tight">ESK Systems</span>}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1">
        {navItems.map((item) => {
          const active = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                active
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-elevated"
              }`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="p-2 border-t border-border">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-elevated transition-colors"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
