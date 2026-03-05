"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button, type buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

export interface GlassButtonProps
  extends React.ComponentProps<"button"> {
  variant?: "default" | "cta" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    if (variant === "cta") {
      return (
        <div className="animated-border-wrap animated-border-glow animated-border-spin inline-flex" style={{ "--ab-border-radius": "0.5rem", "--ab-border-width": "2px", "--ab-glow-spread": "2rem", "--ab-glow-blur": "1.5rem" } as React.CSSProperties}>
          <Button
            ref={ref}
            variant="ghost"
            className={cn(
              "glass-morphism relative z-10 border-0 font-semibold",
              "text-foreground hover:text-foreground",
              className
            )}
            size={size}
            {...props}
          />
        </div>
      );
    }

    if (variant === "ghost") {
      return (
        <Button
          ref={ref}
          variant="ghost"
          className={cn(
            "hover:glass-morphism transition-all",
            className
          )}
          size={size}
          {...props}
        />
      );
    }

    return (
      <Button
        ref={ref}
        variant="ghost"
        className={cn(
          "glass-morphism border border-border/50 font-medium",
          "text-foreground hover:text-foreground",
          "hover:border-ctp-lavender/50 transition-all",
          className
        )}
        size={size}
        {...props}
      />
    );
  }
);
GlassButton.displayName = "GlassButton";
