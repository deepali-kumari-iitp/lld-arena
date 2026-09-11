import Link from "next/link";
import { ArrowRight, Grid2X2, Sparkles } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { HeroVisual } from "@/components/home/HeroVisual";
import { ProblemExplorer } from "@/components/problems/ProblemExplorer";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050403]">
      <Navbar />

      {/* =====================================================
          ATMOSPHERIC BACKGROUND
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-orange-600/[0.08] blur-[130px]" />

        <div className="absolute -right-32 -top-24 h-[460px] w-[460px] rounded-full bg-orange-500/[0.07] blur-[140px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#6d2c08]/[0.12] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-60"
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
            maskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 92%)",
          }}
        />
      </div>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative flex min-h-screen items-center">
        <HeroVisual />

        {/* Left decorative labels */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[6%] top-[28%] hidden lg:block"
        >
          <div className="mb-4 h-px w-6 bg-orange-500" />

          <div className="space-y-1.5 text-[10px] font-medium tracking-[0.3em] text-orange-200/40 uppercase">
            <p>Objects</p>
            <p>Relationships</p>
            <p>Patterns</p>
            <p>Scalability</p>
          </div>
        </div>

        {/* Right decorative labels */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] top-[31%] hidden text-right lg:block"
        >
          <div className="mb-4 ml-auto h-px w-6 bg-orange-500" />

          <div className="space-y-1.5 text-[10px] font-medium tracking-[0.3em] text-orange-200/40 uppercase">
            <p>Practice</p>
            <p>Design</p>
            <p>Improve</p>
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
            ===================================================== */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">

            {/* Arena Badge */}

            <div className="animate-[fadeIn_0.8s_ease-out]">
              <Badge
                variant="primary"
                className={[
                  "border-orange-400/20",
                  "bg-black/30",
                  "px-4 py-2",
                  "text-orange-300",
                  "shadow-[0_0_30px_rgba(255,122,0,0.08)]",
                  "backdrop-blur-xl",
                ].join(" ")}
              >
                <span className="relative mr-1 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(255,122,0,0.8)]" />
                </span>

                LLD Arena
              </Badge>
            </div>

            {/* Hero Heading */}

            <h1
              className={[
                "mt-8",
                "text-[clamp(3rem,7vw,6.5rem)]",
                "font-semibold",
                "leading-[0.92]",
                "tracking-[-0.055em]",
                "text-white",
              ].join(" ")}
            >
              Design systems.
              <br />

              <span className="text-gradient orange-text-glow">
                Think in objects.
              </span>
            </h1>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#a99d93] sm:text-base sm:leading-8">
              Practice real-world Low-Level Design problems,
              submit your designs, and get structured feedback
              that helps you improve.
            </p>

            {/* =====================================================
                CTA BUTTONS
                ===================================================== */}

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              {/* ENTER THE ARENA */}

              <Link
                href="/challenges"
                className={[
                  "group",
                  "inline-flex",
                  "min-h-11",
                  "min-w-[190px]",
                  "items-center",
                  "justify-center",
                  "gap-2",
                  "rounded-full",
                  "border border-orange-300/20",
                  "bg-[#f56f12]",
                  "px-6",
                  "text-sm",
                  "font-medium",
                  "text-white",
                  "shadow-[0_0_35px_rgba(255,122,0,0.20)]",
                  "transition-all duration-200",
                  "hover:bg-[#ff8530]",
                  "hover:shadow-[0_0_45px_rgba(255,122,0,0.30)]",
                  "focus:outline-none",
                  "focus:ring-2",
                  "focus:ring-orange-400/50",
                ].join(" ")}
              >
                Enter the Arena

                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              {/* EXPLORE PROBLEMS */}

              <Link
                href="/challenges"
                className={[
                  "group",
                  "inline-flex",
                  "min-h-11",
                  "min-w-[190px]",
                  "items-center",
                  "justify-center",
                  "gap-2",
                  "rounded-full",
                  "border border-orange-400/25",
                  "bg-black/25",
                  "px-6",
                  "text-sm",
                  "font-medium",
                  "text-[#d8cec5]",
                  "backdrop-blur-xl",
                  "transition-all duration-200",
                  "hover:border-orange-400/45",
                  "hover:bg-orange-500/[0.06]",
                  "hover:text-white",
                  "focus:outline-none",
                  "focus:ring-2",
                  "focus:ring-orange-400/40",
                ].join(" ")}
              >
                <Grid2X2
                  size={16}
                  className="text-orange-400 transition-transform duration-200 group-hover:scale-110"
                />

                Explore Problems
              </Link>

              {/* LEARN MORE */}

              <Link
                href="/challenges"
                className="group flex min-h-11 items-center gap-2 rounded-full px-4 text-sm text-[#887c72] transition-colors duration-200 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/30"
              >
                Learn More

                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              FEATURED CHALLENGE
              ===================================================== */}

          <div className="mx-auto mt-14 max-w-2xl sm:mt-16">
            <Link
              href="/challenges/parking-lot"
              aria-label="Open Parking Lot challenge"
              className="group block"
            >
              <article
                className={[
                  "relative overflow-hidden",
                  "rounded-[22px]",
                  "border border-orange-500/35",
                  "bg-[rgba(20,10,5,0.58)]",
                  "backdrop-blur-2xl",
                  "shadow-[0_25px_90px_rgba(0,0,0,0.55)]",
                  "transition-all duration-300",
                  "group-hover:-translate-y-1",
                  "group-hover:border-orange-400/55",
                  "group-hover:shadow-[0_30px_100px_rgba(0,0,0,0.65),0_0_55px_rgba(255,122,0,0.08)]",
                  "focus-within:ring-2",
                  "focus-within:ring-orange-400/40",
                ].join(" ")}
              >
                {/* Top orange light */}

                <div
                  aria-hidden="true"
                  className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent"
                />

                {/* Card glow */}

                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-orange-500/[0.08] blur-[80px]"
                />

                <div className="relative p-6 sm:p-7">

                  {/* Header */}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-orange-400">
                        <Sparkles size={13} />

                        Featured Challenge
                      </div>

                      <h2 className="mt-3 text-xl font-semibold tracking-tight text-[#f6eee7] sm:text-2xl">
                        Parking Lot
                      </h2>
                    </div>

                    <Badge
                      variant="warning"
                      className="border-orange-400/25 bg-orange-500/[0.07] text-orange-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(255,122,0,0.8)]" />

                      Beginner
                    </Badge>
                  </div>

                  {/* Description */}

                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#978b81]">
                    Design an extensible parking management
                    system while keeping responsibilities clean
                    and maintainable.
                  </p>

                  {/* Footer */}

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-[9px] font-medium tracking-[0.22em] text-[#685c52] uppercase sm:text-[10px]">
                      OOP · SOLID · Relationships
                    </span>

                    <span
                      aria-hidden="true"
                      className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center",
                        "rounded-full",
                        "border border-orange-400/30",
                        "bg-orange-500/[0.07]",
                        "text-orange-300",
                        "shadow-[0_0_25px_rgba(255,122,0,0.08)]",
                        "transition-all duration-200",
                        "group-hover:translate-x-1",
                        "group-hover:border-orange-400/55",
                        "group-hover:bg-orange-500/[0.12]",
                      ].join(" ")}
                    >
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* =====================================================
              BOTTOM LABEL
              ===================================================== */}

          <div className="mt-16 flex items-center justify-center gap-4 sm:mt-20">
            <span className="h-px w-12 bg-orange-500/25 sm:w-16" />

            <span className="text-[9px] font-medium tracking-[0.35em] text-orange-400/45 uppercase">
              Built for thinkers
            </span>

            <span className="h-px w-12 bg-orange-500/25 sm:w-16" />
          </div>
        </div>

        {/* Bottom fade */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050403] via-[#050403]/70 to-transparent"
        />
      </section>

      {/* Problem Explorer */}

      <ProblemExplorer />
      <Footer />
    </main>
  );
}