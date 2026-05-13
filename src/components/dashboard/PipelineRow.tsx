import { Badge } from "@/components/ui/badge";
import type { Pipeline } from "@/Types/Piplines";
import { ChevronRight } from "lucide-react";

type PipelineRowProps = {
  pipeline: Pipeline;
};

const statusConfig = {
  passing: {
    dot: "bg-green-500",
    badge: "bg-[#f0faf4] text-[#16a34a] hover:bg-[#f0faf4]",
    label: "passed",
  },
  failing: {
    dot: "bg-red-500",
    badge: "bg-[#fef2f2] text-[#dc2626] hover:bg-[#fef2f2]",
    label: "failed",
  },
  running: {
    dot: "bg-yellow-400 animate-pulse",
    badge: "bg-[#fffbeb] text-[#d97706] hover:bg-[#fffbeb]",
    label: "running",
  },
};

export default function PipelineRow({ pipeline }: PipelineRowProps) {
  const config = statusConfig[pipeline.status];

  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-[#f5f5f5] last:border-none hover:bg-[#fafafa] cursor-pointer transition-colors">
      <div className={`w-2 h-2 rounded-full shrink-0 ${config.dot}`} />

      <div className="flex-1">
        <p className="font-mono text-[12px] font-medium text-[#111] mb-0.5">
          {pipeline.name}
        </p>
        <div className="flex items-center gap-2 text-[11px] text-[#bbb]">
          <span>{pipeline.branch}</span>
          <span>·</span>
          <span className="font-mono bg-[#f5f5f5] px-1.5 py-0.5 rounded text-[10px]">
            {pipeline.workflow}
          </span>
        </div>
      </div>

      <Badge className={`font-mono text-[10px] border-none ${config.badge}`}>
        {config.label}
      </Badge>

      <div className="text-right">
        <p className="font-mono text-[10px] text-[#ccc]">{pipeline.lastRun}</p>
        <p className="font-mono text-[10px] text-[#ddd]">{pipeline.duration}</p>
      </div>

      <ChevronRight size={14} className="text-[#ddd]" />
    </div>
  );
}
