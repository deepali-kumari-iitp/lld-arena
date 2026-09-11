import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2",
        "min-h-11 rounded-xl px-5 py-2.5",
        "text-sm font-semibold",
        "transition-all duration-200 ease-out",
        "active:scale-[0.98]",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-[var(--secondary)]",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-[var(--background)]",

        variant === "primary" &&
          [
            "bg-[var(--primary)] text-white",
            "shadow-[0_10px_30px_rgba(139,92,246,0.22)]",
            "hover:-translate-y-0.5",
            "hover:bg-[var(--primary-light)]",
            "hover:shadow-[0_14px_38px_rgba(139,92,246,0.28)]",
          ],

        variant === "secondary" &&
          [
            "border border-[var(--glass-border)]",
            "bg-[var(--glass-surface)] text-[var(--foreground)]",
            "backdrop-blur-xl",
            "hover:-translate-y-0.5",
            "hover:border-[var(--glass-border-hover)]",
            "hover:bg-[var(--glass-surface-hover)]",
          ],

        variant === "ghost" &&
          [
            "text-[var(--muted-foreground)]",
            "hover:bg-white/[0.05]",
            "hover:text-[var(--foreground)]",
          ],

        variant === "danger" &&
          [
            "bg-[var(--destructive)] text-white",
            "hover:bg-rose-400",
          ],

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}