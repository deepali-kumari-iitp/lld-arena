"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3, Layers3 } from "lucide-react";

type Challenge = {
  number: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  concepts: string[];
  href: string;
};

const challenges: Challenge[] = [
  {
    number: "01",
    title: "Parking Lot",
    description:
      "Design an extensible parking management system with clean responsibilities and flexible vehicle support.",
    difficulty: "Beginner",
    time: "30–45 min",
    concepts: ["OOP", "SOLID", "Relationships"],
    href: "/challenges/parking-lot",
  },
  {
    number: "02",
    title: "Elevator System",
    description:
      "Model an elevator system that can efficiently handle requests, scheduling, states, and multiple elevators.",
    difficulty: "Intermediate",
    time: "45–60 min",
    concepts: ["State", "Strategy", "OOP"],
    href: "#",
  },
  {
    number: "03",
    title: "Library Management",
    description:
      "Build a maintainable library system covering books, members, borrowing, returns, and availability.",
    difficulty: "Beginner",
    time: "30–45 min",
    concepts: ["OOP", "SOLID", "Design"],
    href: "#",
  },
  {
    number: "04",
    title: "Splitwise",
    description:
      "Design an expense-sharing system that supports different split strategies and settlement calculations.",
    difficulty: "Intermediate",
    time: "45–60 min",
    concepts: ["Strategy", "OOP", "Patterns"],
    href: "#",
  },
  {
    number: "05",
    title: "Food Delivery",
    description:
      "Design a scalable food ordering workflow connecting users, restaurants, orders, payments, and delivery.",
    difficulty: "Advanced",
    time: "60–90 min",
    concepts: ["State", "Strategy", "Services"],
    href: "#",
  },
  {
    number: "06",
    title: "Chess Game",
    description:
      "Design an object-oriented chess engine with pieces, board state, moves, rules, and game lifecycle.",
    difficulty: "Advanced",
    time: "60–90 min",
    concepts: ["OOP", "State", "Design"],
    href: "#",
  },
];

function difficultyClass(difficulty: Challenge["difficulty"]) {
  if (difficulty === "Beginner") {
    return "border-emerald-400/20 bg-emerald-400/[0.04] text-emerald-300";
  }

  if (difficulty === "Intermediate") {
    return "border-yellow-400/20 bg-yellow-400/[0.04] text-yellow-300";
  }

  return "border-orange-400/20 bg-orange-400/[0.04] text-orange-300";
}

export default function ChallengesPage() {
  return (
    <main className="min-h-screen bg-[#050403] text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
      >
        <div className="absolute left-[-180px] top-[-160px] h-[500px] w-[500px] rounded-full bg-orange-600/[0.07] blur-[150px]" />

        <div className="absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255, 150, 70, 0.025) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255, 150, 70, 0.025) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-orange-400/[0.07] bg-[#050403]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-400/25 bg-orange-500/[0.08]">
              <span className="h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(255,122,0,0.8)] transition-transform group-hover:scale-125" />
            </span>

            <span className="text-sm font-semibold text-[#f2e9e2]">
              LLD <span className="text-orange-400">Arena</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/challenges"
              className="text-sm text-orange-300"
            >
              Problems
            </Link>

            <Link
              href="/challenges/parking-lot"
              className="text-sm text-[#8f8177] transition-colors hover:text-orange-300"
            >
              Practice
            </Link>

            <Link
              href="/attempts"
              className="text-sm text-[#8f8177] transition-colors hover:text-orange-300"
            >
              Progress
            </Link>
          </nav>

          <Link
            href="/challenges/parking-lot"
            className="group inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/[0.06] px-4 py-2.5 text-xs font-medium text-orange-200 transition-all hover:border-orange-400/45 hover:bg-orange-500/[0.1]"
          >
            Start Practicing
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500/70" />

            <span className="text-[10px] font-medium tracking-[0.32em] text-orange-400/60 uppercase">
              6 Challenges
            </span>
          </div>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#f7efe8] sm:text-5xl lg:text-6xl">
            Pick a system.
            <br />
            <span className="text-gradient orange-text-glow">
              Start designing.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#958980] sm:text-base">
            Practice real-world Low-Level Design problems,
            model your objects and relationships, and improve
            through structured evaluation.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap items-center gap-2">
          <button className="rounded-full border border-orange-400/30 bg-orange-500/[0.08] px-4 py-2 text-xs font-medium text-orange-300">
            All
          </button>

          <button className="rounded-full border border-orange-400/[0.08] bg-white/[0.02] px-4 py-2 text-xs text-[#796e65] transition-colors hover:border-orange-400/20 hover:text-orange-300">
            Beginner
          </button>

          <button className="rounded-full border border-orange-400/[0.08] bg-white/[0.02] px-4 py-2 text-xs text-[#796e65] transition-colors hover:border-orange-400/20 hover:text-orange-300">
            Intermediate
          </button>

          <button className="rounded-full border border-orange-400/[0.08] bg-white/[0.02] px-4 py-2 text-xs text-[#796e65] transition-colors hover:border-orange-400/20 hover:text-orange-300">
            Advanced
          </button>
        </div>

        {/* Challenge Grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => {
            const isAvailable = challenge.href !== "#";

            const Card = (
              <article
                className={[
                  "group relative flex min-h-[330px] flex-col overflow-hidden rounded-[24px]",
                  "border border-orange-400/[0.12]",
                  "bg-[rgba(15,9,5,0.62)]",
                  "backdrop-blur-2xl",
                  "transition-all duration-300",
                  isAvailable
                    ? "hover:-translate-y-1 hover:border-orange-400/35 hover:bg-[rgba(22,11,5,0.75)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.45),0_0_45px_rgba(255,122,0,0.06)]"
                    : "opacity-90",
                ].join(" ")}
              >
                {/* Top glow */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />

                <div className="flex flex-1 flex-col p-6">
                  {/* Number + Difficulty */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium tracking-[0.25em] text-orange-500/60">
                      {challenge.number}
                    </span>

                    <span
                      className={[
                        "rounded-full border px-3 py-1.5 text-[9px] font-medium",
                        difficultyClass(challenge.difficulty),
                      ].join(" ")}
                    >
                      {challenge.difficulty}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 flex h-11 w-11 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/[0.05] text-orange-400 transition-all duration-300 group-hover:border-orange-400/35 group-hover:bg-orange-500/[0.1]">
                    <Layers3 size={18} />
                  </div>

                  {/* Title */}
                  <h2 className="mt-6 text-xl font-semibold tracking-tight text-[#f0e7df]">
                    {challenge.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-[#81756c]">
                    {challenge.description}
                  </p>

                  {/* Concepts */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {challenge.concepts.map((concept) => (
                      <span
                        key={concept}
                        className="rounded-full border border-orange-400/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-[9px] text-[#6f635a]"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto pt-7">
                    <div className="mb-5 h-px bg-orange-400/[0.07]" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] text-[#665b52]">
                        <Clock3 size={13} />
                        {challenge.time}
                      </div>

                      {isAvailable ? (
                        <span className="flex items-center gap-2 text-xs font-medium text-orange-400">
                          Open challenge
                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-400/25 bg-orange-500/[0.04] transition-all group-hover:translate-x-1 group-hover:border-orange-400/45">
                            <ArrowRight size={13} />
                          </span>
                        </span>
                      ) : (
                        <span className="rounded-full border border-orange-400/[0.08] bg-white/[0.02] px-3 py-2 text-[9px] text-[#665b52]">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );

            if (!isAvailable) {
              return (
                <div key={challenge.title}>
                  {Card}
                </div>
              );
            }

            return (
              <Link
                key={challenge.title}
                href={challenge.href}
                className="block focus:outline-none focus:ring-2 focus:ring-orange-400/40"
              >
                {Card}
              </Link>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-orange-400/[0.07] pt-7 sm:flex-row">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs text-[#71665d] transition-colors hover:text-orange-300"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Arena
          </Link>

          <span className="text-[9px] font-medium tracking-[0.3em] text-orange-400/35 uppercase">
            Built for thinkers
          </span>
        </div>
      </section>
    </main>
  );
}