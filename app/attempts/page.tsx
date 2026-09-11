"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GitBranch,
  Layers3,
  RefreshCcw,
  Trophy,
} from "lucide-react";

type Submission = {
  id: string;
  problemSlug: string;
  problemTitle: string;
  nodes: unknown[];
  edges: unknown[];
  score: number;
  createdAt: string;
};

export default function AttemptsPage() {
  const [submissions, setSubmissions] = useState<
    Submission[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadAttempts() {
      try {
        const response = await fetch(
          "/api/submissions",
          {
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error(
            "Unable to load attempts.",
          );
        }

        const data = await response.json();

        setSubmissions(
          Array.isArray(data.submissions)
            ? data.submissions
            : [],
        );
      } catch (err) {
        console.error(err);

        setError(
          "Unable to load your previous attempts.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadAttempts();
  }, []);

  function formatDate(date: string) {
    const value = new Date(date);

    return value.toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  function getScoreLabel(score: number) {
    if (score >= 9) return "Excellent";
    if (score >= 8) return "Strong";
    if (score >= 7) return "Good";
    if (score >= 5) return "Needs improvement";

    return "Keep practicing";
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

        <div className="absolute right-[-10%] top-[25%] h-[450px] w-[450px] rounded-full bg-orange-500/[0.035] blur-[150px]" />

        <div className="absolute bottom-[-20%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-orange-700/[0.04] blur-[160px]" />

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

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="sticky top-0 z-40 border-b border-orange-400/[0.08] bg-[#050403]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm text-[#9a8d82] transition-colors hover:text-orange-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/15 bg-orange-500/[0.05] transition-all group-hover:border-orange-400/30"
            >
              <ArrowLeft size={15} />
            </span>

            <span>Back to Arena</span>
          </Link>

          <div className="text-xs font-medium text-orange-300">
            Previous Attempts
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        {/* Heading */}

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.28em] text-orange-400/60 uppercase">
            <span className="h-px w-7 bg-orange-500/50" />

            Your Progress
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-[#f7f0e9] sm:text-5xl">
            Previous Attempts
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#84776e] sm:text-base">
            Review your previous designs, see your scores,
            and retry challenges to improve your LLD skills.
          </p>
        </div>

        {/* ===================================================
            SUMMARY
            =================================================== */}

        {!loading &&
          !error &&
          submissions.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-orange-400/[0.09] bg-[#0b0705]/70 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[#81746a]">
                  <Layers3
                    size={15}
                    className="text-orange-400"
                  />

                  <span className="text-xs">
                    Total Attempts
                  </span>
                </div>

                <p className="mt-3 text-3xl font-semibold text-[#eee3db]">
                  {submissions.length}
                </p>
              </div>

              <div className="rounded-2xl border border-orange-400/[0.09] bg-[#0b0705]/70 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[#81746a]">
                  <Trophy
                    size={15}
                    className="text-orange-400"
                  />

                  <span className="text-xs">
                    Best Score
                  </span>
                </div>

                <p className="mt-3 text-3xl font-semibold text-[#eee3db]">
                  {Math.max(
                    ...submissions.map(
                      (item) => item.score,
                    ),
                  ).toFixed(1)}
                </p>
              </div>

              <div className="rounded-2xl border border-orange-400/[0.09] bg-[#0b0705]/70 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[#81746a]">
                  <GitBranch
                    size={15}
                    className="text-orange-400"
                  />

                  <span className="text-xs">
                    Problems Practiced
                  </span>
                </div>

                <p className="mt-3 text-3xl font-semibold text-[#eee3db]">
                  {
                    new Set(
                      submissions.map(
                        (item) =>
                          item.problemSlug,
                      ),
                    ).size
                  }
                </p>
              </div>
            </div>
          )}

        {/* ===================================================
            LOADING
            =================================================== */}

        {loading && (
          <div className="mt-10 rounded-2xl border border-orange-400/[0.08] bg-[#0b0705]/70 p-12 text-center backdrop-blur-xl">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-orange-400/20 border-t-orange-400" />

            <p className="mt-5 text-sm text-[#786c63]">
              Loading your attempts...
            </p>
          </div>
        )}

        {/* ===================================================
            ERROR
            =================================================== */}

        {!loading && error && (
          <div className="mt-10 rounded-2xl border border-red-400/10 bg-red-500/[0.025] p-8 text-center">
            <p className="text-sm text-red-300">
              {error}
            </p>

            <button
              type="button"
              onClick={() =>
                window.location.reload()
              }
              className="mt-5 rounded-xl border border-red-400/15 px-4 py-2 text-xs text-red-300 transition hover:bg-red-500/[0.05]"
            >
              Try Again
            </button>
          </div>
        )}

        {/* ===================================================
            EMPTY
            =================================================== */}

        {!loading &&
          !error &&
          submissions.length === 0 && (
            <div className="mt-10 overflow-hidden rounded-3xl border border-orange-400/[0.09] bg-[#0b0705]/70 p-10 text-center backdrop-blur-xl sm:p-16">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/15 bg-orange-500/[0.05]">
                <Trophy
                  size={24}
                  className="text-orange-400"
                />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-[#e9ded6]">
                No attempts yet
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#756960]">
                Complete your first LLD challenge and your
                submission will appear here.
              </p>

              <Link
                href="/challenges"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-xs font-medium text-white shadow-[0_0_25px_rgba(249,115,22,0.15)] transition hover:bg-orange-400"
              >
                Explore Challenges

                <ArrowRight size={14} />
              </Link>
            </div>
          )}

        {/* ===================================================
            ATTEMPTS
            =================================================== */}

        {!loading &&
          !error &&
          submissions.length > 0 && (
            <section className="mt-10">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-[#ded2ca]">
                    Your Design Journey
                  </h2>

                  <p className="mt-1 text-xs text-[#5f544b]">
                    Latest submissions appear first.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[...submissions]
                  .reverse()
                  .map((submission, index) => {
                    const attemptNumber =
                      submissions.length -
                      index;

                    return (
                      <article
                        key={submission.id}
                        className="group overflow-hidden rounded-2xl border border-orange-400/[0.09] bg-[#0b0705]/70 backdrop-blur-xl transition-all duration-200 hover:border-orange-400/[0.17] hover:shadow-[0_20px_70px_rgba(249,115,22,0.06)]"
                      >
                        <div className="p-5 sm:p-6">
                          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            {/* Left */}

                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-lg border border-orange-400/10 bg-orange-500/[0.035] px-2.5 py-1 text-[9px] font-medium tracking-[0.12em] text-orange-300/70 uppercase">
                                  Attempt #
                                  {attemptNumber}
                                </span>

                                <span className="rounded-lg border border-emerald-400/10 bg-emerald-400/[0.035] px-2.5 py-1 text-[9px] text-emerald-300/70">
                                  {getScoreLabel(
                                    submission.score,
                                  )}
                                </span>
                              </div>

                              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#e9ded6]">
                                {
                                  submission.problemTitle
                                }
                              </h3>

                              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                                <span className="flex items-center gap-1.5 text-[10px] text-[#6f635b]">
                                  <CalendarDays
                                    size={12}
                                  />

                                  {formatDate(
                                    submission.createdAt,
                                  )}
                                </span>

                                <span className="flex items-center gap-1.5 text-[10px] text-[#6f635b]">
                                  <Layers3
                                    size={12}
                                  />

                                  {
                                    submission
                                      .nodes
                                      .length
                                  }{" "}
                                  objects
                                </span>

                                <span className="flex items-center gap-1.5 text-[10px] text-[#6f635b]">
                                  <GitBranch
                                    size={12}
                                  />

                                  {
                                    submission
                                      .edges
                                      .length
                                  }{" "}
                                  relationship
                                  {submission
                                    .edges
                                    .length ===
                                  1
                                    ? ""
                                    : "s"}
                                </span>
                              </div>
                            </div>

                            {/* Score */}

                            <div className="flex items-center gap-6 lg:shrink-0">
                              <div className="text-left lg:text-right">
                                <p className="text-[9px] tracking-[0.18em] text-[#5d524a] uppercase">
                                  Score
                                </p>

                                <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-[#f0e5dd]">
                                  {submission.score.toFixed(
                                    1,
                                  )}
                                  <span className="ml-1 text-sm text-[#655a52]">
                                    /10
                                  </span>
                                </p>
                              </div>

                              <div className="hidden h-12 w-px bg-orange-400/[0.07] lg:block" />

                              <CheckCircle2
                                size={20}
                                className="text-emerald-400/70"
                              />
                            </div>
                          </div>

                          {/* Actions */}

                          <div className="mt-6 flex flex-col gap-2 border-t border-orange-400/[0.07] pt-5 sm:flex-row">
                            <Link
                              href={`/evaluation/parking-lot?submissionId=${encodeURIComponent(
                                submission.id,
                              )}`}
                              className="flex items-center justify-center gap-2 rounded-xl border border-orange-400/10 bg-orange-500/[0.035] px-4 py-2.5 text-xs font-medium text-orange-300/80 transition hover:border-orange-400/20 hover:bg-orange-500/[0.07] hover:text-orange-300"
                            >
                              View Evaluation

                              <ArrowRight size={13} />
                            </Link>

                            <Link
                              href={`/challenges/${submission.problemSlug}`}
                              className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.015] px-4 py-2.5 text-xs text-[#85786e] transition hover:border-orange-400/15 hover:text-orange-300"
                            >
                              <RefreshCcw
                                size={13}
                              />

                              Retry Challenge
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
              </div>
            </section>
          )}
      </div>
    </main>
  );
}