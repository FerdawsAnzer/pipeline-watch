import { LayoutDashboard, Clock, Settings } from "lucide-react"
import type { NavGroup } from "@/Types/navigation"
export const navItems: NavGroup[] = [
  {
    section: "monitor",
    items: [
      { label: "Pipelines", icon: LayoutDashboard, path: "/dashboard" },
      { label: "Activity", icon: Clock, path: "/activity" },
    ],
  },
  {
    section: "account",
    items: [
      { label: "Settings", icon: Settings, path: "/settings" },
    ],
  },
]