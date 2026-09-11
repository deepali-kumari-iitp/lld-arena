import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const productLinks = [
  { label: "Challenges", href: "/challenges" },
  { label: "Practice", href: "/challenges/parking-lot" },
  { label: "Attempts", href: "/attempts" },
  { label: "Evaluation", href: "/evaluation/parking-lot" },
];

const learningLinks = [
  { label: "LLD Concepts", href: "/challenges" },
  { label: "OOP & SOLID", href: "/challenges" },
  { label: "Design Patterns", href: "/challenges" },
  { label: "Relationships", href: "/challenges" },
];

const exploreLinks = [
  { label: "Parking Lot", href: "/challenges/parking-lot" },
  { label: "Previous Attempts", href: "/attempts" },
  { label: "Explore Problems", href: "/challenges" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-orange-400/[0.08] bg-[#050403]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -bottom-32 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-orange-600/[0.045] blur-[110px]" />

        <div className="absolute -left-24 bottom-0 h-52 w-52 rounded-full bg-orange-500/[0.025] blur-[100px]" />

        <div className="absolute -right-24 top-0 h-52 w-52 rounded-full bg-orange-500/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/25 bg-orange-500/[0.07]">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(255,122,0,0.8)] transition-transform duration-300 group-hover:scale-125" />

                <span className="absolute inset-1.5 rounded-md border border-orange-400/[0.10]" />
              </span>

              <span className="text-sm font-semibold tracking-tight text-[#f4ece5]">
                LLD <span className="text-orange-400">Arena</span>
              </span>
            </Link>

            <div className="mt-4 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.28em] text-orange-400/55">
              <Sparkles size={11} />
              Practice. Design. Improve.
            </div>

            <p className="mt-3 max-w-sm text-xs leading-5 text-[#756a61]">
              Practice real-world Low-Level Design problems,
              think in objects, model relationships, and improve
              through structured feedback.
            </p>

            <Link
              href="/challenges"
              className="group mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-orange-400 transition-colors hover:text-orange-300"
            >
              Explore Challenges
              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b9aca2]">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-[11px] text-[#6f645c] transition-colors hover:text-orange-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b9aca2]">
              Learn
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              {learningLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-[11px] text-[#6f645c] transition-colors hover:text-orange-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b9aca2]">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-[11px] text-[#6f645c] transition-colors hover:text-orange-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Email */}
            <a
              href="mailto:hello@lldarena.dev"
              aria-label="Email LLD Arena"
              className="mt-4 flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/[0.10] bg-white/[0.02] text-[#6f645c] transition-all hover:border-orange-400/30 hover:bg-orange-500/[0.06] hover:text-orange-300"
            >
              <Mail size={13} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-orange-400/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[9px] text-[#5d534c]">
              © 2026 LLD Arena. All rights reserved.
            </p>

            <p className="mt-1 text-[8px] text-[#463e38]">
              Built for thinkers who design before they code.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="text-[9px] text-[#5d534c] transition-colors hover:text-orange-300"
            >
              Home
            </Link>

            <Link
              href="/challenges"
              className="text-[9px] text-[#5d534c] transition-colors hover:text-orange-300"
            >
              Challenges
            </Link>

            <Link
              href="/attempts"
              className="text-[9px] text-[#5d534c] transition-colors hover:text-orange-300"
            >
              Attempts
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}