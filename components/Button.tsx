"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-lg transition-all",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-brand-orange text-white hover:bg-brand-orange-dark":
              variant === "primary",
            "bg-white border-2 border-bg-elevated text-text-primary hover:bg-bg-dark hover:border-brand-orange-light":
              variant === "secondary",
            "bg-transparent hover:bg-bg-dark text-text-secondary hover:text-text-primary":
              variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
