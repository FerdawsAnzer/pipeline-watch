import type { Pipeline } from "@/Types/Piplines";

export const mockPipelines: Pipeline[] = [
  {
    id: 1,
    name: "pipeline-watch",
    branch: "main",
    workflow: "deploy.yml",
    status: "passing",
    lastRun: "2m ago",
    duration: "45s",
  },
  {
    id: 2,
    name: "smart-glove-translator",
    branch: "main",
    workflow: "test.yml",
    status: "failing",
    lastRun: "15m ago",
    duration: "23s",
  },
  {
    id: 3,
    name: "property-management",
    branch: "dev",
    workflow: "build.yml",
    status: "running",
    lastRun: "just now",
    duration: "—",
  },
  {
    id: 4,
    name: "portfolio-site",
    branch: "main",
    workflow: "deploy.yml",
    status: "passing",
    lastRun: "1h ago",
    duration: "38s",
  },
]