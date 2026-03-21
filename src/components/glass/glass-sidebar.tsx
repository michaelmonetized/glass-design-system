"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";

/* ─── Context ─── */
interface SidebarContextValue {
  open: boolean;
  toggle: () => void;
  setOpen: (v: boolean) => void;
  side: "left" | "right";
  width: string;
}

const SidebarContext = createContext<SidebarContextValue>({
  open: false,
  toggle: () => {},
  setOpen: () => {},
  side: "right",
  width: "20rem",
});

export const useSidebar = () => useContext(SidebarContext);

/* ─── Provider (wraps layout) ─── */
export interface GlassSidebarProviderProps {
  children: ReactNode;
  side?: "left" | "right";
  width?: string;
  defaultOpen?: boolean;
}

export function GlassSidebarProvider({
  children,
  side = "right",
  width = "20rem",
  defaultOpen = false,
}: GlassSidebarProviderProps) {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <SidebarContext.Provider value={{ open, toggle, setOpen, side, width }}>
      <div className="min-h-screen">{children}</div>
    </SidebarContext.Provider>
  );
}

/* ─── Main content area (shifts when sidebar opens) ─── */
export function SidebarMain({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open, side, width } = useSidebar();

  return (
    <div
      className={cn("flex-1 min-w-0 transition-all duration-300 ease-out", className)}
      style={{
        marginLeft: side === "left" && open ? width : "0",
        marginRight: side === "right" && open ? width : "0",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Sidebar panel ─── */
export interface GlassSidebarProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  footer?: ReactNode;
  className?: string;
}

export function GlassSidebar({
  children,
  title,
  description,
  footer,
  className,
}: GlassSidebarProps) {
  const { open, setOpen, side, width } = useSidebar();

  return (
    <aside
      className={cn(
        // Fixed positioning with 0.5rem inset from edges
        "fixed z-40 top-[calc(4rem+0.5rem)] bottom-2",
        side === "right" ? "right-2" : "left-2",
        // Glass effect
        "glass-morphism",
        "rounded-2xl",
        "border border-white/10",
        "p-4",
        "overflow-y-auto overflow-x-hidden",
        "shadow-xl shadow-black/10",
        // Transition
        "transition-all duration-300 ease-out",
        // Open/closed
        open
          ? "translate-x-0 opacity-100"
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
            onClick={() => setOpen(false)}
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
    </aside>
  );
}
