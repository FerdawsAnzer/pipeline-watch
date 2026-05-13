export type PipelineStatus = "passing" | "failing" | "running"

export type Pipeline = {
  id: number
  name: string
  branch: string
  workflow: string
  status: PipelineStatus
  lastRun: string
  duration: string
}