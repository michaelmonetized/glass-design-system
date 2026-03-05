"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedBorderProps {
  children?: ReactNode;
  className?: string;
  borderWidth?: number;
  borderRadius?: string;
  glowSpread?: string;
  glowBlur?: string;
  showGlow?: boolean;
  animate?: boolean;
  duration?: number;
}

export function AnimatedBorder({
  children,
  className,
  borderWidth = 2,
  borderRadius = "1rem",
  glowSpread = "5rem",
  glowBlur = "3.5rem",
  showGlow = true,
  animate = true,
  duration = 3,
}: AnimatedBorderProps) {
  const cssVars = {
    "--ab-border-width": `${borderWidth}px`,
    "--ab-border-radius": borderRadius,
    "--ab-glow-spread": glowSpread,
    "--ab-glow-blur": glowBlur,
    "--ab-duration": `${duration}s`,
  } as React.CSSProperties;

  return (
    <div
      className={cn("animated-border-wrap", showGlow && "animated-border-glow", animate && "animated-border-spin", className)}
      style={cssVars}
    >
      {children}
    </div>
  );
}
