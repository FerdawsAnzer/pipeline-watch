import type { Pipeline } from "@/Types/Piplines";
import PipelineRow from "./PipelineRow";

type PipelineListProps = {
  pipelines: Pipeline[];
};

export default function PipelineList({ pipelines }: PipelineListProps) {
  if (pipelines.length === 0) {
    return (
      <div className="border border-[#ebebeb] rounded-md px-6 py-12 text-center">
        <p className="font-mono text-[12px] text-[#bbb]">
          // no pipelines found
        </p>
        <p className="text-[12px] text-[#ccc] mt-1">
          connect a repo to get started
        </p>
      </div>
    );
  }

  return (
    <div className="border border-[#ebebeb] rounded-md overflow-hidden">
      {pipelines.map((pipeline) => (
        <PipelineRow key={pipeline.id} pipeline={pipeline} />
      ))}
    </div>
  );
}
