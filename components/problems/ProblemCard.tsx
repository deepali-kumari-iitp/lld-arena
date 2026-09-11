"use client";

import { ArrowUpRight, Clock3, Layers3 } from "lucide-react";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

type ProblemCardProps = {
  title: string;
  description: string;
  difficulty: Difficulty;
  topics: string[];
  time: string;
  index: string;
};

const difficultyStyles: Record<Difficulty, string> = {
  Beginner:
    "border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-300",
  Intermediate:
    "border-amber-400/15 bg-amber-400/[0.05] text-amber-300",
  Advanced:
    "border-orange-400/20 bg-orange-500/[0.06] text-orange-300",
};

export function ProblemCard({
  title,
  description,
  difficulty,
  topics,
  time,
  index,
}: ProblemCardProps) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-2xl",
        "border border-orange-400/[0.10]",
        "bg-[#0d0805]/70",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:border-orange-400/30",
        "hover:bg-[#160c06]/80",
        "hover:shadow-[0_25px_70px_rgba(0,0,0,0.45),0_0_35px_rgba(242,106,19,0.06)]",
      ].join(" ")}
    >
      {/* top accent */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* hover glow */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/[0.06] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative p-6">
        {/* Card header */}

        <div className="flex items-start justify-between gap-4">
          <span className="text-[10px] font-medium tracking-[0.25em] text-orange-500/40">
            {index}
          </span>

          <span
            className={[
              "rounded-full border px-2.5 py-1",
              "text-[10px] font-medium",
              difficultyStyles[difficulty],
            ].join(" ")}
          >
            {difficulty}
          </span>
        </div>

        {/* Icon */}

        <div className="mt-7 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-500/[0.06] text-orange-400">
          <Layers3 size={18} strokeWidth={1.6} />
        </div>

        {/* Content */}

        <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#f4ece5]">
          {title}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#8f8177]">
          {description}
        </p>

        {/* Topics */}

        <div className="mt-5 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-1 text-[9px] tracking-wide text-[#766a60]"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Footer */}

        <div className="mt-7 flex items-center justify-between border-t border-orange-400/[0.07] pt-5">
          <div className="flex items-center gap-1.5 text-[10px] text-[#665a51]">
            <Clock3 size={12} />
            {time}
          </div>

          <button
            type="button"
            className="group/button flex items-center gap-2 text-xs font-medium text-orange-400 transition-colors hover:text-orange-300"
          >
            Open challenge

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/[0.05] transition-all duration-200 group-hover/button:border-orange-400/40 group-hover/button:bg-orange-500/[0.10]">
              <ArrowUpRight size={13} />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}