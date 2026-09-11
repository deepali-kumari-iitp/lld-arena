import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function GlassCard({
  interactive = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "border border-[var(--glass-border)]",
        "bg-[var(--glass-surface)]",
        "backdrop-blur-xl",
        "shadow-[var(--shadow-glass)]",

        interactive && [
          "transition-all duration-200 ease-out",
          "hover:-translate-y-1",
          "hover:border-[var(--glass-border-hover)]",
          "hover:bg-[var(--glass-surface-hover)]",
        ],

        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      {children}
    </div>
  );
}