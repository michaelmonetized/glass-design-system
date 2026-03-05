"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { GlassButton } from "./glass-button";
import { useSidebar } from "./glass-sidebar";

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
  const { toggle: toggleSidebar } = useSidebar();

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
        "border-b border-white/10",
        "backdrop-blur-xl bg-black/20 dark:bg-black/30",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white drop-shadow-md">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-white font-mono text-sm">G</span>
          Glass
        </Link>

        {/* Desktop nav with jelly indicator */}
        <nav ref={navRef} className="relative hidden items-center gap-1 md:flex">
          {indicator.width > 0 && (
            <motion.div
              className="absolute top-1/2 h-9 rounded-lg bg-white/15"
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
                "relative z-10 rounded-lg px-4 py-2 text-sm font-medium transition-colors drop-shadow-md",
                pathname === item.href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Sidebar toggle */}
          <GlassButton variant="ghost" size="icon" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M15 3v18" />
            </svg>
          </GlassButton>
        </div>
      </div>
    </header>
  );
}
