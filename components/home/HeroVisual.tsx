"use client";

import { motion } from "motion/react";
import {
  Box,
  GitBranch,
  Layers3,
  Network,
  Workflow,
} from "lucide-react";

const nodes = [
  {
    label: "CLASS",
    icon: Box,
    position: "left-[5%] top-[29%] sm:left-[10%] lg:left-[11%]",
    delay: 0,
  },
  {
    label: "INTERFACE",
    icon: Network,
    position: "left-[4%] top-[60%] sm:left-[12%] lg:left-[13%]",
    delay: 0.8,
  },
  {
    label: "SERVICE",
    icon: Layers3,
    position: "right-[4%] top-[31%] sm:right-[11%] lg:right-[12%]",
    delay: 0.4,
  },
  {
    label: "STRATEGY",
    icon: GitBranch,
    position: "right-[4%] top-[62%] sm:right-[12%] lg:right-[13%]",
    delay: 1.2,
  },
];

export function HeroVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* =====================================================
          ATMOSPHERIC LIGHTING
          ===================================================== */}

      <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-orange-600/[0.09] blur-[140px]" />

      <div className="absolute -right-40 -top-32 h-[460px] w-[460px] rounded-full bg-orange-500/[0.09] blur-[150px]" />

      <motion.div
        className="absolute left-1/2 top-[44%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/[0.06] blur-[130px]"
        animate={{
          opacity: [0.45, 0.75, 0.45],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom brown atmosphere */}

      <div className="absolute -bottom-48 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#6b2b08]/[0.11] blur-[160px]" />

      {/* =====================================================
          TECHNICAL GRID
          ===================================================== */}

      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255, 145, 60, 0.022) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 145, 60, 0.022) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 48%, transparent 88%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 48%, transparent 88%)",
        }}
      />

      {/* =====================================================
          LARGE ORBIT
          ===================================================== */}

      <motion.div
        className="absolute left-1/2 top-[46%] h-[430px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-orange-500/[0.11]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* orbit light */}

        <div className="absolute left-[17%] top-[-3px] h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(255,122,0,0.9)]" />

        <div className="absolute right-[21%] bottom-[-3px] h-1 w-1 rounded-full bg-orange-400/80 shadow-[0_0_10px_rgba(255,122,0,0.8)]" />
      </motion.div>

      {/* =====================================================
          SECOND ORBIT
          ===================================================== */}

      <motion.div
        className="absolute left-1/2 top-[46%] h-[270px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-orange-400/[0.07]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute right-[18%] top-[-2px] h-1 w-1 rounded-full bg-orange-300/70 shadow-[0_0_10px_rgba(255,154,61,0.8)]" />
      </motion.div>

      {/* =====================================================
          ARCHITECTURE CONNECTIONS
          ===================================================== */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1400 850"
        preserveAspectRatio="none"
      >
        {/* Class → Core */}

        <motion.path
          d="M145 280 C320 285 430 355 700 420"
          fill="none"
          stroke="rgba(255,122,0,0.28)"
          strokeWidth="1"
          strokeDasharray="3 13"
          animate={{
            strokeDashoffset: [0, -120],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Interface → Core */}

        <motion.path
          d="M165 575 C350 550 470 475 700 420"
          fill="none"
          stroke="rgba(255,138,45,0.25)"
          strokeWidth="1"
          strokeDasharray="4 15"
          animate={{
            strokeDashoffset: [0, 100],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Service → Core */}

        <motion.path
          d="M1255 295 C1080 300 970 365 700 420"
          fill="none"
          stroke="rgba(255,122,0,0.28)"
          strokeWidth="1"
          strokeDasharray="3 13"
          animate={{
            strokeDashoffset: [0, -120],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Strategy → Core */}

        <motion.path
          d="M1235 585 C1060 555 930 480 700 420"
          fill="none"
          stroke="rgba(255,138,45,0.25)"
          strokeWidth="1"
          strokeDasharray="4 15"
          animate={{
            strokeDashoffset: [0, 110],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Vertical architecture axis */}

        <path
          d="M700 145 L700 700"
          fill="none"
          stroke="rgba(255,122,0,0.09)"
          strokeWidth="1"
          strokeDasharray="2 16"
        />

        {/* Horizontal architecture axis */}

        <path
          d="M260 420 L1140 420"
          fill="none"
          stroke="rgba(255,122,0,0.06)"
          strokeWidth="1"
          strokeDasharray="2 18"
        />

        {/* Outer curved architecture paths */}

        <path
          d="M0 510 C260 290 410 240 700 420 C980 600 1150 530 1400 280"
          fill="none"
          stroke="rgba(255,122,0,0.08)"
          strokeWidth="1"
          strokeDasharray="2 18"
        />

        <path
          d="M0 300 C250 530 430 570 700 420 C980 270 1180 320 1400 560"
          fill="none"
          stroke="rgba(255,122,0,0.055)"
          strokeWidth="1"
          strokeDasharray="2 20"
        />
      </svg>

      {/* =====================================================
          CONNECTION POINTS
          ===================================================== */}

      <motion.span
        className="absolute left-[27%] top-[35%] h-1.5 w-1.5 rounded-full bg-orange-400"
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.7, 1.4, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="absolute right-[27%] top-[35%] h-1.5 w-1.5 rounded-full bg-orange-400"
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.7, 1.3, 0.7],
        }}
        transition={{
          duration: 3.7,
          repeat: Infinity,
          delay: 0.5,
        }}
      />

      <motion.span
        className="absolute left-[31%] top-[57%] h-1 w-1 rounded-full bg-orange-300"
        animate={{
          opacity: [0.1, 0.7, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      />

      <motion.span
        className="absolute right-[31%] top-[57%] h-1 w-1 rounded-full bg-orange-300"
        animate={{
          opacity: [0.1, 0.7, 0.1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          delay: 1.5,
        }}
      />

      {/* =====================================================
          ARCHITECTURE NODES
          ===================================================== */}

      {nodes.map((node) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            className={`absolute ${node.position}`}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: node.delay,
              },
              y: {
                duration: 4 + node.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              },
            }}
          >
            <div className="group relative">
              {/* glow behind node */}

              <div className="absolute inset-0 rounded-2xl bg-orange-500/[0.07] blur-xl" />

              {/* node */}

              <div className="relative flex items-center gap-2.5 rounded-2xl border border-orange-400/20 bg-[#110a06]/60 px-3 py-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                {/* icon */}

                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-orange-400/15 bg-orange-500/[0.08] text-orange-400">
                  <Icon size={14} strokeWidth={1.7} />
                </span>

                {/* label */}

                <span className="text-[9px] font-medium tracking-[0.24em] text-orange-200/55 uppercase sm:text-[10px]">
                  {node.label}
                </span>

                {/* status dot */}

                <span className="ml-1 h-1.5 w-1.5 rounded-full bg-orange-400/60 shadow-[0_0_8px_rgba(255,122,0,0.7)]" />
              </div>

              {/* little technical corner */}

              <span className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-orange-400/50" />
              <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-orange-400/30" />
            </div>
          </motion.div>
        );
      })}

      {/* =====================================================
          CENTRAL CORE
          ===================================================== */}

      <motion.div
        className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.025, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative h-40 w-40 sm:h-52 sm:w-52">
          {/* Outer glow */}

          <div className="absolute inset-[20%] rounded-full bg-orange-500/[0.08] blur-2xl" />

          {/* Outer ring */}

          <div className="absolute inset-0 rounded-full border border-orange-400/[0.08]" />

          {/* Second ring */}

          <div className="absolute inset-[15%] rounded-full border border-orange-400/[0.10]" />

          {/* Third ring */}

          <div className="absolute inset-[31%] rounded-full border border-orange-400/[0.15]" />

          {/* Core plate */}

          <div className="absolute inset-[41%] rounded-full border border-orange-400/20 bg-[#160b05]/70 shadow-[0_0_35px_rgba(255,122,0,0.10)] backdrop-blur-xl" />

          {/* Core light */}

          <motion.div
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400"
            animate={{
              opacity: [0.55, 1, 0.55],
              boxShadow: [
                "0 0 12px rgba(255,122,0,0.45)",
                "0 0 32px rgba(255,122,0,0.85)",
                "0 0 12px rgba(255,122,0,0.45)",
              ],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating marker */}

          <motion.div
            className="absolute inset-[8%] rounded-full border border-dashed border-orange-400/[0.10]"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-400/80" />
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          FLOATING PARTICLES
          ===================================================== */}

      {Array.from({ length: 22 }).map((_, index) => {
        const left = 4 + ((index * 17) % 92);
        const top = 12 + ((index * 29) % 74);

        return (
          <motion.span
            key={index}
            className="absolute h-[3px] w-[3px] rounded-full bg-orange-300/50"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              opacity: [0.08, 0.6, 0.08],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 3 + (index % 5),
              repeat: Infinity,
              delay: index * 0.18,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* =====================================================
          TECHNICAL MARKERS
          ===================================================== */}

      <div className="absolute left-[19%] top-[24%] hidden lg:block">
        <div className="h-px w-8 bg-orange-400/60" />
        <div className="mt-3 text-[9px] tracking-[0.35em] text-orange-300/30 uppercase">
          01 / Object
        </div>
      </div>

      <div className="absolute right-[19%] top-[25%] hidden text-right lg:block">
        <div className="ml-auto h-px w-8 bg-orange-400/60" />
        <div className="mt-3 text-[9px] tracking-[0.35em] text-orange-300/30 uppercase">
          02 / Service
        </div>
      </div>

      <div className="absolute bottom-[19%] left-[50%] hidden -translate-x-1/2 items-center gap-4 lg:flex">
        <span className="h-px w-8 bg-orange-500/30" />

        <span className="text-[9px] font-medium tracking-[0.35em] text-orange-400/35 uppercase">
          Architecture in motion
        </span>

        <span className="h-px w-8 bg-orange-500/30" />
      </div>

      {/* =====================================================
          MOBILE ATMOSPHERE
          ===================================================== */}

      <div className="absolute left-1/2 top-[48%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-orange-600/[0.045] blur-[90px] sm:hidden" />
    </div>
  );
}