"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import {
  DesignCanvas,
  type DesignSnapshot,
} from "@/components/problems/DesignCanvas";

const requirements = [
  "Support different types of vehicles.",
  "Assign vehicles to suitable parking spots.",
  "Track available and occupied spots.",
  "Calculate parking fees.",
  "Allow vehicles to enter and exit cleanly.",
  "Keep the design open for future extensions.",
];

const concepts = [
  "Object-Oriented Design",
  "SOLID Principles",
  "Composition",
  "Interfaces",
  "Strategy Pattern",
];

const evaluationCriteria = [
  "Responsibility separation",
  "Abstraction",
  "Relationships",
  "Extensibility",
  "Design patterns",
  "SOLID principles",
];

export default function ParkingLotChallenge() {
  const router = useRouter();

  const [canSubmit, setCanSubmit] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [submitError, setSubmitError] =
    useState("");

  const [design, setDesign] =
    useState<DesignSnapshot>({
      nodes: [],
      edges: [],
    });

  async function handleSubmit() {
    if (!canSubmit || submitting) {
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "/api/submissions",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            problemSlug: "parking-lot",
            problemTitle: "Parking Lot",
            nodes: design.nodes,
            edges: design.edges,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            "Unable to submit your design.",
        );
      }

      /*
       * Keep the latest submission available to
       * the evaluation screen and future history UI.
       */
      sessionStorage.setItem(
        "lld-arena-last-submission",
        JSON.stringify({
          submissionId:
            data.submissionId,
          problemSlug:
            "parking-lot",
          problemTitle:
            "Parking Lot",
          nodes: design.nodes,
          edges: design.edges,
          score: data.score,
          submittedAt:
            new Date().toISOString(),
        }),
      );

      router.push(
        `/evaluation/parking-lot?submissionId=${encodeURIComponent(
          data.submissionId,
        )}`,
      );
    } catch (error) {
      console.error(
        "Submission failed:",
        error,
      );

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting.",
      );

      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050403] text-[#f4ece5]">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-orange-600/[0.06] blur-[150px]" />

        <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-orange-500/[0.045] blur-[150px]" />

        <div className="absolute bottom-[-20%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#6d2c08]/[0.08] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-50"
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

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="sticky top-0 z-40 border-b border-orange-400/[0.08] bg-[#050403]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm text-[#9a8d82] transition-colors hover:text-orange-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/15 bg-orange-500/[0.05] transition-all group-hover:border-orange-400/30"
            >
              <ArrowLeft size={15} />
            </span>

            <span className="hidden sm:inline">
              Back to Arena
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-[#665a51] sm:block">
              Challenge
            </span>

            <span className="h-1 w-1 rounded-full bg-orange-400/50" />

            <span className="text-xs font-medium text-orange-300">
              Parking Lot
            </span>
          </div>

          <Badge
            variant="success"
            className="border-emerald-400/15 bg-emerald-400/[0.04] text-emerald-300"
          >
            Beginner
          </Badge>
        </div>
      </header>

      {/* =====================================================
          MAIN
          ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
        {/* Heading */}

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.28em] text-orange-400/60 uppercase">
            <span className="h-px w-7 bg-orange-500/50" />
            Low-Level Design Challenge
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#f7f0e9] sm:text-5xl lg:text-6xl">
            Parking Lot
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8f8177] sm:text-base">
            Design an extensible parking management
            system that keeps responsibilities clean
            while remaining easy to extend.
          </p>
        </div>

        {/* Stats */}

        <div className="mt-9 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-orange-400/[0.09] bg-[#0d0805]/60 px-4 py-3 backdrop-blur-xl">
            <Clock3
              size={14}
              className="text-orange-400"
            />

            <span className="text-xs text-[#887b71]">
              30–45 min
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-orange-400/[0.09] bg-[#0d0805]/60 px-4 py-3 backdrop-blur-xl">
            <Target
              size={14}
              className="text-orange-400"
            />

            <span className="text-xs text-[#887b71]">
              Design focused
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-orange-400/[0.09] bg-[#0d0805]/60 px-4 py-3 backdrop-blur-xl">
            <Zap
              size={14}
              className="text-orange-400"
            />

            <span className="text-xs text-[#887b71]">
              OOP + SOLID
            </span>
          </div>
        </div>

        {/* Workspace */}

        <div className="mt-10 grid gap-5 lg:grid-cols-[380px_minmax(0,1fr)]">
          {/* =================================================
              PROBLEM
              ================================================= */}

          <aside className="rounded-2xl border border-orange-400/[0.09] bg-[#0b0705]/70 backdrop-blur-xl">
            <div className="border-b border-orange-400/[0.07] px-6 py-5">
              <div className="flex items-center gap-2 text-xs font-medium text-orange-400">
                <Lightbulb size={14} />
                Problem
              </div>
            </div>

            <div className="space-y-8 p-6">
              {/* Requirements */}

              <div>
                <h2 className="text-sm font-semibold text-[#e8ded6]">
                  Requirements
                </h2>

                <div className="mt-4 space-y-3">
                  {requirements.map(
                    (item) => (
                      <div
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-[#82756b]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-400/60" />

                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Focus */}

              <div className="border-t border-orange-400/[0.07] pt-7">
                <h2 className="text-sm font-semibold text-[#e8ded6]">
                  Focus Areas
                </h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {concepts.map(
                    (concept) => (
                      <span
                        key={concept}
                        className="rounded-lg border border-orange-400/[0.08] bg-orange-500/[0.035] px-2.5 py-1.5 text-[10px] text-[#897b70]"
                      >
                        {concept}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Tip */}

              <div className="rounded-xl border border-orange-400/[0.08] bg-orange-500/[0.035] p-4">
                <div className="flex gap-3">
                  <Lightbulb
                    size={15}
                    className="mt-0.5 shrink-0 text-orange-400"
                  />

                  <div>
                    <p className="text-xs font-medium text-orange-300">
                      Design tip
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-[#756960]">
                      Start by identifying the core
                      entities and their responsibilities
                      before thinking about implementation
                      details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Evaluation */}

              <div className="border-t border-orange-400/[0.07] pt-7">
                <h2 className="text-sm font-semibold text-[#e8ded6]">
                  You&apos;ll be evaluated on
                </h2>

                <div className="mt-4 space-y-2.5">
                  {evaluationCriteria.map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 text-xs text-[#756960]"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-orange-400/15 bg-orange-500/[0.035]">
                          <span className="h-1 w-1 rounded-full bg-orange-400/60" />
                        </span>

                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* =================================================
              DESIGN
              ================================================= */}

          <section className="overflow-hidden rounded-2xl border border-orange-400/[0.10] bg-[#090604]/75 shadow-[0_25px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            {/* Header */}

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-orange-400/[0.07] px-5 py-4">
  <div>
    <p className="text-xs font-medium text-[#cfc2b8]">
      Your Design
    </p>

    <p className="mt-1 text-[10px] text-[#5f544b]">
      Architecture workspace
    </p>
  </div>

  <div className="flex flex-wrap items-center gap-2">
    {/* Auto-save */}
    <span className="rounded-lg border border-orange-400/[0.08] px-3 py-2 text-[10px] text-[#675b52]">
      Auto-save
    </span>

    {/* Design status */}
    <span
      className={[
        "flex items-center gap-1.5 rounded-lg border px-3 py-2 text-[10px]",
        canSubmit
          ? "border-emerald-400/10 bg-emerald-400/[0.035] text-emerald-300/80"
          : "border-orange-400/[0.08] bg-orange-500/[0.025] text-[#675b52]",
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 rounded-full",
          canSubmit
            ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]"
            : "bg-orange-400/50",
        ].join(" ")}
      />

      {canSubmit ? "Ready" : "Designing"}
    </span>

    {/* Previous Attempts */}
    <Link
      href="/attempts"
      className="flex items-center gap-2 rounded-lg border border-orange-400/[0.10] bg-white/[0.02] px-3 py-2 text-[10px] font-medium text-[#8f8177] transition-all hover:border-orange-400/20 hover:bg-orange-400/[0.04] hover:text-orange-300"
    >
      Previous Attempts
    </Link>
  </div>
</div>

            {/* Canvas */}

            <div className="min-h-[510px]">
              <DesignCanvas
                onValidityChange={
                  setCanSubmit
                }
                onDesignChange={
                  setDesign
                }
              />
            </div>

            {/* Bottom */}

            <div className="border-t border-orange-400/[0.07] px-5 py-4">
              {submitError && (
                <div className="mb-4 rounded-xl border border-red-400/15 bg-red-500/[0.04] px-4 py-3 text-xs text-red-300">
                  {submitError}
                </div>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  {canSubmit ? (
                    <>
                      <CheckCircle2
                        size={13}
                        className="text-emerald-400"
                      />

                      <span className="text-[10px] text-emerald-300/80">
                        Your design is ready to
                        submit
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-400/50" />

                      <span className="text-[10px] text-[#5f544b]">
                        Connect at least 2 objects
                        to submit
                      </span>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={
                    !canSubmit ||
                    submitting
                  }
                  className={[
                    "rounded-xl px-5 py-2.5",
                    "text-xs font-medium",
                    "transition-all duration-200",
                    canSubmit &&
                    !submitting
                      ? "cursor-pointer bg-orange-500 text-white shadow-[0_0_25px_rgba(249,115,22,0.18)] hover:bg-orange-400 hover:shadow-[0_0_35px_rgba(249,115,22,0.28)] active:scale-[0.98]"
                      : "cursor-not-allowed bg-orange-500/20 text-orange-300/40",
                  ].join(" ")}
                >
                  {submitting
                    ? "Submitting..."
                    : "Submit Design"}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}