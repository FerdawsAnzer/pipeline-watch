import type { LucideIcon } from "lucide-react"

export type NavItem = {
  label: string
  icon: LucideIcon
  path: string
}

export type NavGroup = {
  section: string
  items: NavItem[]
}