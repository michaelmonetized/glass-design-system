"use client";

import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";

export interface GlassSheetProps {
  children?: ReactNode;
  trigger?: ReactNode;
  title?: string;
  description?: string;
  footer?: ReactNode;
  side?: "right" | "left";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  /** Width of the sidebar panel */
  width?: string;
}

export function GlassSheet({
  children,
  trigger,
  title,
  description,
  footer,
  side = "right",
  open = false,
  onOpenChange,
  className,
  width = "20rem",
}: GlassSheetProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange?.(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  return (
    <>
      {/* Trigger */}
      {trigger && (
        <div onClick={() => onOpenChange?.(!open)} className="inline-flex">
          {trigger}
        </div>
      )}

      {/* Panel — no overlay, no blocking, Apple-style sidebar */}
      <div
        ref={panelRef}
        className={cn(
          // Positioning: inset from corner by 0.5rem, below nav
          "fixed z-40 top-[calc(4rem+0.5rem)] bottom-2",
          side === "right" ? "right-2" : "left-2",
          // Sizing
          "flex flex-col",
          // Glass effect — mostly transparent
          "glass-morphism",
          "rounded-2xl",
          "border border-white/10",
          "p-4",
          "overflow-y-auto overflow-x-hidden",
          // Shadow for depth
          "shadow-xl shadow-black/10",
          // Transition
          "transition-all duration-300 ease-out",
          // Open/closed state
          open
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : side === "right"
              ? "translate-x-[120%] opacity-0 pointer-events-none"
              : "-translate-x-[120%] opacity-0 pointer-events-none",
          className
        )}
        style={{ width }}
      >
        {/* Header */}
        {(title || description) && (
          <div className="mb-3 flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1">
              {title && (
                <h3 className="text-sm font-semibold text-white drop-shadow-md">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-xs text-white/60 drop-shadow-sm">
                  {description}
                </p>
              )}
            </div>
            <button
              onClick={() => onOpenChange?.(false)}
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            >
              <XIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 text-white drop-shadow-sm">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="mt-3 border-t border-white/10 pt-3">{footer}</div>
        )}
      </div>
    </>
  );
}

export function SheetClose({
  children,
  onClick,
  className,
}: {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
