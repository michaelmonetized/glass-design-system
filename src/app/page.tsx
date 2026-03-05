"use client";

import { GlassPanel } from "@/components/glass/glass-panel";
import { GlassCard } from "@/components/glass/glass-card";
import { GlassButton } from "@/components/glass/glass-button";
import { AnimatedBorder } from "@/components/glass/animated-border";
import { GlassDialog } from "@/components/glass/glass-dialog";
import { useState } from "react";

export default function HomePage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="relative">
      {/* ─── Hero Section ─── */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4">
        {/* Gradient background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-ctp-blue/10 via-transparent to-ctp-pink/10" />
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-ctp-blue/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-ctp-pink/5 blur-3xl" />
        </div>

        <div className="flex flex-col items-center gap-12 py-20">
          {/* Glass refraction hero piece */}
          <div className="relative">
            <AnimatedBorder
              borderRadius="1.5rem"
              glowSpread="4rem"
              glowBlur="3rem"
              showGlow
              animate
            >
              <GlassPanel
                width={480}
                height={280}
                radius={24}
                depth={10}
                blur={3}
                chromaticAberration={8}
                className="flex flex-col items-center justify-center gap-4 p-8"
              >
                <h1 className="text-center text-4xl font-black tracking-tight text-foreground md:text-5xl">
                  Glass Design
                  <br />
                  <span className="bg-gradient-to-r from-ctp-blue to-ctp-pink bg-clip-text text-transparent">
                    System
                  </span>
                </h1>
                <p className="max-w-sm text-center text-sm text-muted-foreground">
                  Apple Liquid Glass refraction, animated borders, glass morphism, and Catppuccin colors
                </p>
              </GlassPanel>
            </AnimatedBorder>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GlassButton variant="cta" size="lg" onClick={() => window.location.href = '/components'}>
              Explore Components
            </GlassButton>
            <GlassButton variant="default" size="lg" onClick={() => setDialogOpen(true)}>
              Learn More
            </GlassButton>
          </div>

          {/* Feature cards */}
          <div className="grid w-full max-w-5xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard featured>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ctp-blue/15 text-ctp-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" /><path d="m14 7 3 3" /><path d="M5 6v4" /><path d="M19 14v4" /><path d="M10 2v2" /><path d="M7 8H3" /><path d="M21 16h-4" /><path d="M11 3H9" /></svg>
                </div>
                <h3 className="text-lg font-bold text-foreground">Liquid Glass</h3>
                <p className="text-sm text-muted-foreground">
                  SVG displacement filter creates real refraction with chromatic aberration — not a blur hack.
                </p>
              </div>
            </GlassCard>

            <GlassCard hoverBorder>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ctp-pink/15 text-ctp-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-foreground">Animated Borders</h3>
                <p className="text-sm text-muted-foreground">
                  Conic-gradient rotation via @property with mask compositing for clean transparent fills.
                </p>
              </div>
            </GlassCard>

            <GlassCard hoverBorder>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ctp-mauve/15 text-ctp-mauve">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-foreground">Catppuccin Colors</h3>
                <p className="text-sm text-muted-foreground">
                  Mocha dark & Latte light palettes with real dark: classes — no filter hacks, ever.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Color palette showcase */}
          <div className="w-full max-w-5xl px-4">
            <GlassCard>
              <h3 className="mb-4 text-lg font-bold text-foreground">Catppuccin Palette</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Rosewater", cls: "bg-ctp-rosewater" },
                  { name: "Flamingo", cls: "bg-ctp-flamingo" },
                  { name: "Pink", cls: "bg-ctp-pink" },
                  { name: "Mauve", cls: "bg-ctp-mauve" },
                  { name: "Red", cls: "bg-ctp-red" },
                  { name: "Maroon", cls: "bg-ctp-maroon" },
                  { name: "Peach", cls: "bg-ctp-peach" },
                  { name: "Yellow", cls: "bg-ctp-yellow" },
                  { name: "Green", cls: "bg-ctp-green" },
                  { name: "Teal", cls: "bg-ctp-teal" },
                  { name: "Sky", cls: "bg-ctp-sky" },
                  { name: "Sapphire", cls: "bg-ctp-sapphire" },
                  { name: "Blue", cls: "bg-ctp-blue" },
                  { name: "Lavender", cls: "bg-ctp-lavender" },
                ].map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-1">
                    <div className={`h-8 w-8 rounded-lg ${c.cls}`} />
                    <span className="text-[10px] text-muted-foreground">{c.name}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Learn More Dialog */}
      <GlassDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="About Glass Design System"
        description="A native-ish web design system combining cutting-edge CSS techniques."
      >
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            This design system combines Apple&apos;s Liquid Glass refraction effect (SVG displacement filters),
            animated conic-gradient borders, layered glass morphism, and the Catppuccin color palette.
          </p>
          <p>
            Built with Next.js 16, Tailwind CSS v4, and shadcn/ui. Every component
            supports both light and dark modes using real color values — no filter hacks.
          </p>
        </div>
      </GlassDialog>
    </main>
  );
}
