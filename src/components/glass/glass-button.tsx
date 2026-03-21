"use client";

import { CSSProperties, FocusEvent, PointerEvent, forwardRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useGlassSurface } from "./use-glass-surface";

export interface GlassButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "cta" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

function callAll<T>(...handlers: Array<((event: T) => void) | undefined>) {
  return (event: T) => {
    handlers.forEach((handler) => handler?.(event));
  };
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      style: styleProp,
      disabled,
      onPointerDown,
      onPointerUp,
      onPointerCancel,
      onPointerLeave,
      onBlur,
      ...props
    },
    ref
  ) => {
    const { ref: surfaceRef, style: surfaceStyle, interactionHandlers } =
      useGlassSurface<HTMLButtonElement>({
        depth: variant === "cta" ? 8 : 6,
        blur: 2,
        strength: variant === "cta" ? 100 : 90,
        chromaticAberration: variant === "cta" ? 6 : 4,
        disabled,
      });

    const setRefs = useCallback(
      (node: HTMLButtonElement | null) => {
        surfaceRef(node);

        if (typeof ref === "function") {
          ref(node);
          return;
        }

        if (ref) {
          ref.current = node;
        }
      },
      [ref, surfaceRef]
    );

    const button = (
      <Button
        ref={setRefs}
        variant="ghost"
        className={cn(
          "relative z-10 text-white drop-shadow-md",
          variant === "cta" && "border-0 font-semibold hover:text-white",
          variant === "ghost" &&
            "border border-white/0 text-white/80 hover:border-white/10 hover:text-white",
          variant === "default" &&
            "border border-white/20 font-medium hover:border-white/40 hover:text-white",
          className,
        )}
        size={size}
        style={{ ...surfaceStyle, ...(styleProp as CSSProperties | undefined) }}
        disabled={disabled}
        onPointerDown={callAll<PointerEvent<HTMLButtonElement>>(
          interactionHandlers.onPointerDown,
          onPointerDown
        )}
        onPointerUp={callAll<PointerEvent<HTMLButtonElement>>(
          interactionHandlers.onPointerUp,
          onPointerUp
        )}
        onPointerCancel={callAll<PointerEvent<HTMLButtonElement>>(
          interactionHandlers.onPointerCancel,
          onPointerCancel
        )}
        onPointerLeave={callAll<PointerEvent<HTMLButtonElement>>(
          interactionHandlers.onPointerLeave,
          onPointerLeave
        )}
        onBlur={callAll<FocusEvent<HTMLButtonElement>>(
          interactionHandlers.onBlur,
          onBlur
        )}
        {...props}
      />
    );

    if (variant === "cta") {
      return (
        <div
          className={cn(
            "animated-border-wrap animated-border-glow animated-border-spin",
            className?.includes("w-full") ? "flex w-full" : "inline-flex"
          )}
          style={
            {
              "--ab-border-radius": "var(--radius-md)",
              "--ab-border-width": "2px",
              "--ab-glow-spread": "2rem",
              "--ab-glow-blur": "1.5rem",
            } as CSSProperties
          }
        >
          {button}
        </div>
      );
    }

    return button;
  },
);
GlassButton.displayName = "GlassButton";
