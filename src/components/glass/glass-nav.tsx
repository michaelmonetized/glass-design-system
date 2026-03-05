"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { GlassSheet } from "./glass-sheet";
import { GlassButton } from "./glass-button";

export interface NavItem {
  label: string;
  href: string;
}

const defaultItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "About", href: "/about" },
];

export interface GlassNavProps {
  items?: NavItem[];
  className?: string;
}

export function GlassNav({ items = defaultItems, className }: GlassNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateIndicator = useCallback(() => {
    const activeRef = itemRefs.current.get(pathname);
    const nav = navRef.current;
    if (activeRef && nav) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeRef.getBoundingClientRect();
      setIndicator({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    }
  }, [pathname]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const setRef = useCallback(
    (href: string) => (el: HTMLAnchorElement | null) => {
      if (el) itemRefs.current.set(href, el);
      else itemRefs.current.delete(href);
    },
    []
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "glass-morphism border-b border-border/40",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-mono text-sm">G</span>
          Glass
        </Link>

        {/* Desktop nav with jelly indicator */}
        <nav ref={navRef} className="relative hidden items-center gap-1 md:flex">
          {indicator.width > 0 && (
            <motion.div
              className="absolute top-1/2 h-9 rounded-lg bg-ctp-surface0 dark:bg-ctp-surface1"
              initial={false}
              animate={{
                left: indicator.left,
                width: indicator.width,
                y: "-50%",
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
                mass: 0.8,
              }}
            />
          )}
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              ref={setRef(item.href)}
              className={cn(
                "relative z-10 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu */}
          <div className="md:hidden">
            <GlassSheet
              trigger={
                <GlassButton variant="ghost" size="icon" className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </GlassButton>
              }
              title="Navigation"
              side="right"
              open={mobileOpen}
              onOpenChange={setMobileOpen}
            >
              <nav className="flex flex-col gap-2 pt-4">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      pathname === item.href
                        ? "bg-ctp-surface0 dark:bg-ctp-surface1 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-ctp-surface0/50"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </GlassSheet>
          </div>
        </div>
      </div>
    </header>
  );
}
