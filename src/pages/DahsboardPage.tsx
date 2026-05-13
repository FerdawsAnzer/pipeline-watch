import { useState } from "react";
import Layout from "@/components/Layout/layout";
import FilterPills from "@/components/dashboard/FilterPills";
import PipelineList from "@/components/dashboard/PipelineList";
import type { Filter } from "@/Types/Filter";
import { mockPipelines } from "@/data/mockPipelines";

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const counts = {
    all: mockPipelines.length,
    passing: mockPipelines.filter((p) => p.status === "passing").length,
    failing: mockPipelines.filter((p) => p.status === "failing").length,
    running: mockPipelines.filter((p) => p.status === "running").length,
  };

  const filtered =
    activeFilter === "all"
      ? mockPipelines
      : mockPipelines.filter((p) => p.status === activeFilter);

  return (
    <Layout>
      <div className="px-6 py-5 border-b border-[#f0f0f0] flex items-center justify-between">
        <div>
          <p className="text-[15px] font-semibold text-[#111]">Pipelines</p>
          <p className="font-mono text-[10px] text-[#ccc] mt-0.5">
            // synced 1 min ago
          </p>
        </div>
        <div className="flex gap-2">
          <button className="text-[12px] font-medium px-3 py-1.5 rounded-md border border-[#e5e5e5] bg-white text-[#555] hover:border-[#d4d4d4] cursor-pointer transition-colors">
            ↻ sync
          </button>
          <button className="text-[12px] font-medium px-3 py-1.5 rounded-md bg-[#111] text-white cursor-pointer hover:opacity-90 transition-opacity">
            + connect repo
          </button>
        </div>
      </div>

      <div className="px-6 py-5 flex flex-col gap-4">
        <FilterPills
          active={activeFilter}
          counts={counts}
          onChange={setActiveFilter}
        />
        <PipelineList pipelines={filtered} />
      </div>
    </Layout>
  );
}
