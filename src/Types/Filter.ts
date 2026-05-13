export type Filter = "all" | "passing" | "failing" | "running"

export type FilterPillsProps = {
  active: Filter
  counts: {
    all: number
    passing: number
    failing: number
    running: number
  }
  onChange: (filter: Filter) => void
}