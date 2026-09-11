"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Lightbulb,
  RefreshCcw,
  Sparkles,
  Target,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

const stages = [
  "Understanding your submission",
  "Checking responsibilities",
  "Evaluating relationships",
  "Reviewing extensibility",
  "Preparing feedback",
];

const categories = [
  {
    name: "Responsibility",
    score: 8.5,
    description:
      "Responsibilities are reasonably separated across the core domain objects.",
  },
  {
    name: "Abstraction",
    score: 8.0,
    description:
      "The design has a clear object model with room for stronger abstractions.",
  },
  {
    name: "Relationships",
    score: 7.5,
    description:
      "The relationship is valid, but the overall model could use more explicit domain relationships.",
  },
  {
    name: "Extensibility",
    score: 8.5,
    description:
      "The structure provides a good starting point for supporting additional vehicle types.",
  },
  {
    name: "Design Patterns",
    score: 8.0,
    description:
      "The design direction supports introducing Strategy and Factory patterns as the system grows.",
  },
];

export default function ParkingLotEvaluation() {
  const [stage, setStage] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStage((current) => {
        if (current >= stages.length - 1) {
          window.clearInterval(interval);
          window.setTimeout(() => {
            setComplete(true);
          }, 650);

          return current;
        }

        return current + 1;
      });
    }, 650);

    return () => window.clearInterval(interval);
  }, []);

  const overallScore = 8.2;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050403] text-[#f4ece5]">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute left-[-10%] top-[-15%] h-[550px] w-[550px] rounded-full bg-orange-600/[0.055] blur-[160px]" />

        <div className="absolute right-[-12%] top-[15%] h-[500px] w-[500px] rounded-full bg-emerald-500/[0.035] blur-[170px]" />

        <div className="absolute bottom-[-20%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-orange-600/[0.035] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,145,60,0.018) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,145,60,0.018) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-orange-400/[0.08] bg-[#050403]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/challenges/parking-lot"
            className="group flex items-center gap-2 text-sm text-[#93867c] transition-colors hover:text-orange-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/15 bg-orange-500/[0.04] transition-all group-hover:border-orange-400/30">
              <ArrowLeft size={15} />
            </span>

            Back to Challenge
          </Link>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#62574f]">
              Evaluation
            </span>

            <span className="h-1 w-1 rounded-full bg-orange-400/50" />

            <span className="text-orange-300">
              Parking Lot
            </span>
          </div>
        </div>
      </header>

      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        {!complete ? (
          /* ==================================================
             ANALYZING
             ================================================== */
          <section className="mx-auto max-w-3xl">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/15 bg-orange-500/[0.06] shadow-[0_0_50px_rgba(249,115,22,0.10)]">
                <Sparkles
                  size={25}
                  className="text-orange-300"
                />
              </div>

              <p className="mt-7 text-[10px] font-medium tracking-[0.32em] text-orange-400/60 uppercase">
                LLD Arena Evaluation
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#f6eee8] sm:text-5xl">
                Analyzing your design...
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#83766d]">
                We&apos;re reviewing your object responsibilities,
                relationships, abstraction choices, and
                extensibility.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-orange-400/[0.09] bg-[#0a0705]/75 p-6 backdrop-blur-xl sm:p-8">
              <div className="space-y-5">
                {stages.map((item, index) => {
                  const finished = index < stage;
                  const active = index === stage;

                  return (
                    <div
                      key={item}
                      className={[
                        "flex items-center gap-4 transition-all duration-300",
                        active
                          ? "translate-x-1"
                          : "",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
                          finished
                            ? "border-emerald-400/25 bg-emerald-400/[0.08] text-emerald-300"
                            : active
                              ? "border-orange-400/30 bg-orange-400/[0.08] text-orange-300"
                              : "border-white/[0.07] bg-white/[0.02] text-[#514941]",
                        ].join(" ")}
                      >
                        {finished ? (
                          <Check size={14} />
                        ) : active ? (
                          <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300" />
                        ) : (
                          <span className="text-[10px]">
                            {index + 1}
                          </span>
                        )}
                      </div>

                      <div className="flex-1">
                        <p
                          className={[
                            "text-sm",
                            finished
                              ? "text-emerald-300/80"
                              : active
                                ? "font-medium text-[#e5d9d0]"
                                : "text-[#5d534c]",
                          ].join(" ")}
                        >
                          {item}
                        </p>
                      </div>

                      {active && (
                        <span className="text-[9px] tracking-[0.16em] text-orange-400/60 uppercase">
                          Working
                        </span>
                      )}

                      {finished && (
                        <span className="text-[9px] tracking-[0.16em] text-emerald-400/50 uppercase">
                          Done
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/[0.04]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-300 transition-all duration-500"
                  style={{
                    width: `${((stage + 1) / stages.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </section>
        ) : (
          /* ==================================================
             RESULT
             ================================================== */
          <section>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.06]">
                <CheckCircle2
                  size={25}
                  className="text-emerald-300"
                />
              </div>

              <p className="mt-6 text-[10px] font-medium tracking-[0.3em] text-emerald-400/60 uppercase">
                Evaluation complete
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#f6eee8] sm:text-5xl">
                Here&apos;s where your design stands.
              </h1>

              <p className="mt-4 text-sm text-[#7e7269]">
                Parking Lot · Beginner
              </p>
            </div>

            {/* Score */}
            <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-orange-400/[0.10] bg-[#0a0705]/80 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-9">
              <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
                <div className="flex justify-center">
                  <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/[0.035] shadow-[0_0_60px_rgba(249,115,22,0.08)]">
                    <div className="absolute inset-3 rounded-full border border-orange-400/[0.08]" />

                    <div className="text-center">
                      <div className="text-5xl font-semibold tracking-[-0.06em] text-[#f6eee8]">
                        {overallScore}
                      </div>

                      <div className="mt-1 text-[10px] tracking-[0.2em] text-[#766a61] uppercase">
                        out of 10
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-orange-300">
                    <TrendingUp size={16} />

                    <span className="text-xs font-medium">
                      Strong first attempt
                    </span>
                  </div>

                  <h2 className="mt-3 text-2xl font-semibold text-[#e9ded6]">
                    Good foundation, with room to push the design further.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#7d7168]">
                    Your core model is understandable and the
                    design has a solid starting structure. The
                    next improvement should focus on making
                    responsibilities and future extensions even
                    more explicit.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-lg border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-2 text-[10px] text-emerald-300/70">
                      Good foundation
                    </span>

                    <span className="rounded-lg border border-orange-400/10 bg-orange-400/[0.035] px-3 py-2 text-[10px] text-orange-300/70">
                      Beginner challenge
                    </span>

                    <span className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-[10px] text-[#73675e]">
                      Keep improving
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <article
                  key={category.name}
                  className="group rounded-2xl border border-orange-400/[0.08] bg-[#0a0705]/70 p-5 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-400/[0.16]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-[#d7cbc2]">
                        {category.name}
                      </p>

                      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f3e9e1]">
                        {category.score}
                      </p>
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-orange-400/10 bg-orange-400/[0.04]">
                      <Target
                        size={15}
                        className="text-orange-300"
                      />
                    </span>
                  </div>

                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.04]">
                    <div
                      className="h-full rounded-full bg-orange-400 transition-all duration-700"
                      style={{
                        width: `${category.score * 10}%`,
                      }}
                    />
                  </div>

                  <p className="mt-4 text-xs leading-6 text-[#70645c]">
                    {category.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Feedback */}
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <article className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-6">
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 size={16} />

                  <h2 className="text-sm font-semibold">
                    Strengths
                  </h2>
                </div>

                <ul className="mt-5 space-y-4">
                  <li className="text-xs leading-6 text-[#82776e]">
                    Good separation between the Vehicle and
                    ParkingSpot concepts.
                  </li>

                  <li className="text-xs leading-6 text-[#82776e]">
                    The relationship is explicit instead of
                    leaving the model disconnected.
                  </li>

                  <li className="text-xs leading-6 text-[#82776e]">
                    The design gives a clean starting point for
                    adding more vehicle types.
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-orange-400/10 bg-orange-400/[0.025] p-6">
                <div className="flex items-center gap-2 text-orange-300">
                  <TriangleAlert size={16} />

                  <h2 className="text-sm font-semibold">
                    Areas to Improve
                  </h2>
                </div>

                <ul className="mt-5 space-y-4">
                  <li className="text-xs leading-6 text-[#82776e]">
                    Parking management responsibilities could
                    be separated further.
                  </li>

                  <li className="text-xs leading-6 text-[#82776e]">
                    Pricing and fee calculation deserve their
                    own abstraction.
                  </li>

                  <li className="text-xs leading-6 text-[#82776e]">
                    More relationships could communicate the
                    domain model more completely.
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-sky-400/10 bg-sky-400/[0.025] p-6">
                <div className="flex items-center gap-2 text-sky-300">
                  <Lightbulb size={16} />

                  <h2 className="text-sm font-semibold">
                    Suggestions
                  </h2>
                </div>

                <ul className="mt-5 space-y-4">
                  <li className="text-xs leading-6 text-[#82776e]">
                    Consider Strategy Pattern for parking fee
                    calculation.
                  </li>

                  <li className="text-xs leading-6 text-[#82776e]">
                    Consider a factory abstraction for vehicle
                    creation.
                  </li>

                  <li className="text-xs leading-6 text-[#82776e]">
                    Introduce clearer interfaces as the model
                    grows.
                  </li>
                </ul>
              </article>
            </div>

            {/* Bottom actions */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/challenges/parking-lot"
                className="group flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 text-xs font-medium text-white shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]"
              >
                <RefreshCcw size={14} />

                Try Again

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/challenges"
                className="flex min-h-11 items-center justify-center rounded-xl border border-orange-400/[0.10] bg-white/[0.02] px-6 text-xs font-medium text-[#9b8e84] transition-all hover:border-orange-400/20 hover:bg-orange-400/[0.04] hover:text-orange-300"
              >
                Explore More Problems
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}