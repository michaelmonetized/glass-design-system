"use client";

import { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBorder } from "./animated-border";
import { useGlassSurface } from "./use-glass-surface";

export interface GlassCardProps {
  children?: ReactNode;
  className?: string;
  featured?: boolean;
  hoverBorder?: boolean;
}

export function GlassCard({
  children,
  className,
  featured = false,
  hoverBorder = true,
}: GlassCardProps) {
  const { ref, style, interactionHandlers } = useGlassSurface<HTMLDivElement>({
    depth: 8,
    blur: 2,
    strength: 100,
    chromaticAberration: 6,
  });

  const card = (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl p-6",
        hoverBorder && !featured && "group",
        className
      )}
      style={style}
      {...interactionHandlers}
    >
      {children}
    </div>
  );

  if (featured) {
    return (
      <AnimatedBorder borderRadius="var(--radius-2xl)" showGlow animate>
        {card}
      </AnimatedBorder>
    );
  }

  if (hoverBorder) {
    return (
      <div
        className="animated-border-wrap-hover"
        style={{ "--ab-border-radius": "var(--radius-2xl)" } as CSSProperties}
      >
        {card}
      </div>
    );
  }

  return card;
}
