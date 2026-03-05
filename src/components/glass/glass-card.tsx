"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBorder } from "./animated-border";

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
  const card = (
    <div
      className={cn(
        "glass-morphism rounded-2xl p-6",
        hoverBorder && !featured && "group",
        className
      )}
    >
      {children}
    </div>
  );

  if (featured) {
    return (
      <AnimatedBorder borderRadius="1rem" showGlow animate>
        {card}
      </AnimatedBorder>
    );
  }

  if (hoverBorder) {
    return (
      <div className="animated-border-wrap-hover">
        {card}
      </div>
    );
  }

  return card;
}
