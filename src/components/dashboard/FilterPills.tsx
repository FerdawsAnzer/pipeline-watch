import type { Filter, FilterPillsProps } from "@/Types/Filter";

const pills: { label: string; value: Filter }[] = [
  { label: "all", value: "all" },
  { label: "passing", value: "passing" },
  { label: "failing", value: "failing" },
  { label: "running", value: "running" },
];

export default function FilterPills({
  active,
  counts,
  onChange,
}: FilterPillsProps) {
  return (
    <div className="flex gap-2">
      {pills.map((pill) => (
        <button
          key={pill.value}
          onClick={() => onChange(pill.value)}
          className={`flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-md border transition-all cursor-pointer font-medium ${
            active === pill.value
              ? "bg-[#111] text-white border-[#111]"
              : "bg-white text-[#888] border-[#e8e8e8] hover:border-[#d4d4d4]"
          }`}
        >
          {pill.label}
          <span
            className={`font-mono text-[10px] ${active === pill.value ? "opacity-60" : "opacity-50"}`}
          >
            {counts[pill.value]}
          </span>
        </button>
      ))}
    </div>
  );
}
