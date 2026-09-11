"use client";

import { Menu, ArrowRight, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Problems", href: "#problems" },
  { label: "Practice", href: "#practice" },
  { label: "Learn", href: "#learn" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={[
          "mx-auto max-w-7xl",
          "rounded-2xl",
          "border border-orange-400/[0.12]",
          "bg-[#090604]/65",
          "shadow-[0_18px_60px_rgba(0,0,0,0.35)]",
          "backdrop-blur-2xl",
        ].join(" ")}
      >
        <div className="flex h-[68px] items-center justify-between px-4 sm:px-6">
          {/* Logo */}

          <a
            href="#"
            className="group flex items-center gap-3"
            aria-label="LLD Arena home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/25 bg-orange-500/[0.08]">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(255,122,0,0.8)] transition-transform duration-300 group-hover:scale-125" />

              <span className="absolute inset-1.5 rounded-md border border-orange-400/[0.10]" />
            </span>

            <span className="text-sm font-semibold tracking-tight text-[#f4ece5]">
              LLD{" "}
              <span className="text-orange-400">Arena</span>
            </span>
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={[
                  "rounded-lg px-4 py-2",
                  "text-xs font-medium",
                  "text-[#8e8278]",
                  "transition-all duration-200",
                  "hover:bg-orange-500/[0.06]",
                  "hover:text-orange-300",
                ].join(" ")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              className="rounded-lg px-3 py-2 text-xs font-medium text-[#8e8278] transition-colors hover:text-[#f1e8df]"
            >
              Sign In
            </button>

            <a
              href="#practice"
              className={[
                "group flex items-center gap-2",
                "rounded-xl",
                "border border-orange-300/20",
                "bg-orange-500/[0.10]",
                "px-4 py-2.5",
                "text-xs font-semibold text-orange-300",
                "shadow-[0_0_25px_rgba(242,106,19,0.07)]",
                "transition-all duration-200",
                "hover:border-orange-300/35",
                "hover:bg-orange-500/[0.16]",
                "hover:shadow-[0_0_30px_rgba(242,106,19,0.12)]",
              ].join(" ")}
            >
              Start Practicing

              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-500/[0.04] text-[#cbbdb2] transition-colors hover:border-orange-400/30 hover:text-orange-300 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {/* Mobile Navigation */}

        {open && (
          <div className="border-t border-orange-400/[0.08] px-4 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[#a89a8f] transition-colors hover:bg-orange-500/[0.06] hover:text-orange-300"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-2 border-t border-orange-400/[0.07] pt-3">
                <a
                  href="#practice"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-orange-400/20 bg-orange-500/[0.10] px-4 py-3 text-sm font-medium text-orange-300"
                >
                  Start Practicing
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}