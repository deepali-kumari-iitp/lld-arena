"use client";

import Link from "next/link";
import { Search, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import { ProblemCard } from "./ProblemCard";

const problems = [
  {
    title: "Parking Lot",
    slug: "parking-lot",
    description:
      "Design an extensible parking management system with clean responsibilities and flexible vehicle support.",
    difficulty: "Beginner" as const,
    topics: ["OOP", "SOLID", "Relationships"],
    time: "30–45 min",
    index: "01",
  },
  {
    title: "Elevator System",
    slug: "elevator-system",
    description:
      "Model an elevator system that can efficiently handle requests, scheduling, states, and multiple elevators.",
    difficulty: "Intermediate" as const,
    topics: ["State", "Strategy", "OOP"],
    time: "45–60 min",
    index: "02",
  },
  {
    title: "Library Management",
    slug: "library-management",
    description:
      "Build a maintainable library system covering books, members, borrowing, returns, and availability.",
    difficulty: "Beginner" as const,
    topics: ["OOP", "SOLID", "Design"],
    time: "30–45 min",
    index: "03",
  },
  {
    title: "Splitwise",
    slug: "splitwise",
    description:
      "Design an expense-sharing system that supports different split strategies and settlement calculations.",
    difficulty: "Intermediate" as const,
    topics: ["Strategy", "OOP", "Patterns"],
    time: "45–60 min",
    index: "04",
  },
  {
    title: "Food Delivery",
    slug: "food-delivery",
    description:
      "Design a scalable food ordering workflow connecting users, restaurants, orders, payments, and delivery.",
    difficulty: "Advanced" as const,
    topics: ["State", "Strategy", "Services"],
    time: "60–90 min",
    index: "05",
  },
  {
    title: "Chess Game",
    slug: "chess-game",
    description:
      "Design an object-oriented chess engine with pieces, board state, moves, rules, and game lifecycle.",
    difficulty: "Advanced" as const,
    topics: ["OOP", "State", "Design"],
    time: "60–90 min",
    index: "06",
  },
];

const filters = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
] as const;

type Filter = (typeof filters)[number];

export function ProblemExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filteredProblems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return problems.filter((problem) => {
      const matchesDifficulty =
        filter === "All" || problem.difficulty === filter;

      const searchText = [
        problem.title,
        problem.description,
        problem.difficulty,
        ...problem.topics,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedQuery === "" ||
        searchText.includes(normalizedQuery);

      return matchesDifficulty && matchesSearch;
    });
  }, [filter, query]);

  return (
    <section
      id="problems"
      className="
        relative overflow-hidden
        border-t border-orange-500/[0.06]
        px-5 py-28
        sm:px-8
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-0
          h-96 w-[700px]
          -translate-x-1/2
          rounded-full
          bg-orange-600/[0.035]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/4 top-1/3
          h-72 w-72
          rounded-full
          bg-orange-500/[0.018]
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-1/4 bottom-1/4
          h-80 w-80
          rounded-full
          bg-amber-500/[0.015]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADING
            ===================================================== */}

        <div className="max-w-2xl">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500/50" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-orange-400/60
              "
            >
              Explore the Arena
            </span>
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              tracking-[-0.035em]
              text-[#f4ece5]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Real problems.
            <br />

            <span className="text-gradient">
              Real design decisions.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-[#81746a]
              sm:text-base
            "
          >
            Practice the systems that show up in real
            engineering interviews. Start simple, then work
            your way toward complex architectures.
          </p>
        </div>

        {/* =====================================================
            CONTROLS
            ===================================================== */}

        <div
          className="
            mt-12
            flex flex-col gap-4
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* ===================================================
              SEARCH
              =================================================== */}

          <div className="relative w-full lg:max-w-md">

            <Search
              size={16}
              aria-hidden="true"
              className="
                pointer-events-none
                absolute left-4 top-1/2
                -translate-y-1/2
                text-[#665a51]
              "
            />

            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search problems..."
              aria-label="Search problems"
              className={[
                "h-12 w-full rounded-xl",
                "border border-orange-400/[0.10]",
                "bg-[#0b0705]/70",
                "pl-11 pr-4",
                "text-sm text-[#ded3c9]",
                "placeholder:text-[#5f544b]",
                "outline-none",
                "backdrop-blur-xl",
                "transition-all duration-200",
                "focus:border-orange-400/30",
                "focus:bg-orange-500/[0.025]",
                "focus:shadow-[0_0_30px_rgba(242,106,19,0.05)]",
              ].join(" ")}
            />
          </div>

          {/* ===================================================
              FILTERS
              =================================================== */}

          <div
            className="
              flex items-center
              gap-2
              overflow-x-auto
              pb-1
            "
          >
            <SlidersHorizontal
              size={15}
              aria-hidden="true"
              className="mr-1 shrink-0 text-[#665a51]"
            />

            {filters.map((item) => {
              const active = filter === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  aria-pressed={active}
                  className={[
                    "shrink-0 rounded-lg px-4 py-2.5",
                    "text-xs font-medium",
                    "transition-all duration-200",
                    "active:scale-[0.97]",
                    active
                      ? [
                          "border border-orange-400/25",
                          "bg-orange-500/[0.10]",
                          "text-orange-300",
                          "shadow-[0_0_25px_rgba(242,106,19,0.06)]",
                        ].join(" ")
                      : [
                          "border border-transparent",
                          "text-[#756960]",
                          "hover:border-orange-400/10",
                          "hover:bg-orange-500/[0.04]",
                          "hover:text-[#b9aa9f]",
                        ].join(" "),
                  ].join(" ")}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            RESULT COUNT
            ===================================================== */}

        <div
          className="
            mt-8
            flex items-center justify-between
            border-b border-orange-400/[0.05]
            pb-4
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#584d45]
            "
          >
            {filteredProblems.length}{" "}
            {filteredProblems.length === 1
              ? "challenge"
              : "challenges"}
          </span>

          {query.trim() !== "" && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-orange-400/70
                transition-colors
                hover:text-orange-300
              "
            >
              Clear search
            </button>
          )}
        </div>

        {/* =====================================================
            PROBLEM GRID
            ===================================================== */}

        {filteredProblems.length > 0 ? (
          <div
            className="
              mt-8
              grid
              gap-4
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {filteredProblems.map((problem) => {

              /*
               * IMPORTANT:
               *
               * The entire card is wrapped inside Link.
               * Therefore clicking ANYWHERE on the card
               * opens the problem detail page.
               *
               * We intentionally do NOT pass `slug`
               * into ProblemCard because slug is only
               * required for navigation.
               */

              const {
                slug,
                ...cardProps
              } = problem;

              return (
                <Link
                  key={problem.title}
                  href={`/challenges/${slug}`}
                  aria-label={`Open ${problem.title} challenge`}
                  className="
                    group
                    relative
                    block
                    h-full
                    rounded-2xl
                    outline-none
                    focus-visible:ring-1
                    focus-visible:ring-orange-400/60
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-[#050403]
                  "
                >
                  {/* ==========================================
                      OUTER INTERACTION GLOW
                      ========================================== */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -inset-px
                      rounded-2xl
                      bg-gradient-to-b
                      from-orange-400/[0.18]
                      via-transparent
                      to-orange-600/[0.04]
                      opacity-0
                      blur-[1px]
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                      group-focus-visible:opacity-100
                    "
                  />

                  {/* ==========================================
                      CARD
                      ========================================== */}

                  <div
                    className="
                      relative
                      h-full
                      overflow-hidden
                      rounded-2xl
                      transition-all
                      duration-300
                      ease-out

                      group-hover:-translate-y-1
                      group-hover:shadow-[0_20px_55px_rgba(0,0,0,0.45),0_0_35px_rgba(242,106,19,0.055)]

                      group-focus-visible:-translate-y-1
                    "
                  >
                    {/* Glass highlight */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-orange-400/0
                        to-transparent
                        transition-all
                        duration-300
                        group-hover:via-orange-400/50
                        group-focus-visible:via-orange-400/50
                      "
                    />

                    {/* Existing ProblemCard */}

                    <ProblemCard
                      {...cardProps}
                    />

                    {/* ========================================
                        CLICKABLE OVERLAY
                        ======================================== */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-2xl
                        ring-1
                        ring-inset
                        ring-transparent
                        transition-all
                        duration-300
                        group-hover:ring-orange-400/20
                        group-focus-visible:ring-orange-400/30
                      "
                    />

                    {/* ========================================
                        OPEN INDICATOR
                        ======================================== */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-4
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-orange-400/0
                        bg-orange-500/0
                        text-orange-300/0
                        opacity-0
                        translate-y-1
                        transition-all
                        duration-200
                        group-hover:border-orange-400/20
                        group-hover:bg-orange-500/[0.08]
                        group-hover:text-orange-300
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        group-focus-visible:border-orange-400/20
                        group-focus-visible:bg-orange-500/[0.08]
                        group-focus-visible:text-orange-300
                        group-focus-visible:opacity-100
                        group-focus-visible:translate-y-0
                      "
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          /* ===================================================
             EMPTY STATE
             =================================================== */

          <div
            className="
              mt-8
              overflow-hidden
              rounded-2xl
              border border-orange-400/[0.08]
              bg-[#0b0705]/60
              px-6
              py-16
              text-center
              backdrop-blur-xl
            "
          >
            <div
              className="
                mx-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border border-orange-400/10
                bg-orange-500/[0.04]
              "
            >
              <Search
                size={17}
                className="text-orange-400/50"
              />
            </div>

            <p
              className="
                mt-4
                text-sm
                font-medium
                text-[#a99b91]
              "
            >
              No challenges found.
            </p>

            <p
              className="
                mt-2
                text-xs
                text-[#665a51]
              "
            >
              Try a different search or difficulty level.
            </p>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                setFilter("All");
              }}
              className="
                mt-5
                rounded-lg
                border
                border-orange-400/15
                bg-orange-500/[0.04]
                px-4
                py-2.5
                text-xs
                font-medium
                text-orange-400
                transition-all
                duration-200
                hover:border-orange-400/30
                hover:bg-orange-500/[0.08]
                hover:text-orange-300
                active:scale-[0.97]
              "
            >
              Clear filters
            </button>
          </div>
        )}

        {/* =====================================================
            BOTTOM METADATA
            ===================================================== */}

        <div
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-orange-400/[0.06]
            pt-5
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#584d45]
            "
          >
            {filteredProblems.length} challenges available
          </span>

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#584d45]
            "
          >
            Updated continuously
          </span>
        </div>
      </div>
    </section>
  );
}