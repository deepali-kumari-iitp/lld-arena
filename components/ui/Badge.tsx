import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type BadgeVariant =
  | "default"
  | "primary"
  | "cyan"
  | "success"
  | "warning"
  | "danger";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5",
        "rounded-full border px-2.5 py-1",
        "text-xs font-medium",
        "whitespace-nowrap",

        variant === "default" && [
          "border-white/10",
          "bg-white/[0.04]",
          "text-[var(--muted-foreground)]",
        ],

        variant === "primary" && [
          "border-violet-400/20",
          "bg-violet-400/10",
          "text-violet-300",
        ],

        variant === "cyan" && [
          "border-cyan-400/20",
          "bg-cyan-400/10",
          "text-cyan-300",
        ],

        variant === "success" && [
          "border-emerald-400/20",
          "bg-emerald-400/10",
          "text-emerald-300",
        ],

        variant === "warning" && [
          "border-amber-400/20",
          "bg-amber-400/10",
          "text-amber-300",
        ],

        variant === "danger" && [
          "border-rose-400/20",
          "bg-rose-400/10",
          "text-rose-300",
        ],

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}