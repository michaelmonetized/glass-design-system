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
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: Video Hero — Glass refraction over looping video
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Fixed video background */}
        <div className="fixed inset-0 -z-20">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            loop
            poster="/bg/video-production.png"
          >
            <source
              src="https://www.hustlelaunch.com/wp-content/uploads/2024/07/attraction-silent-backdrop.webm"
              type="video/webm"
            />
          </video>
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-12 px-4 py-20">
          {/* Main hero glass piece — refraction visible through video */}
          <AnimatedBorder
            borderRadius="1.5rem"
            glowSpread="4rem"
            glowBlur="3rem"
            showGlow
            animate
          >
            <GlassPanel
              width={520}
              height={320}
              radius={24}
              depth={12}
              blur={3}
              chromaticAberration={8}
              className="flex flex-col items-center justify-center gap-6 p-10"
            >
              <h1 className="text-center text-4xl font-black tracking-tight text-white drop-shadow-lg md:text-6xl">
                Glass Design
                <br />
                <span className="bg-gradient-to-r from-ctp-blue to-ctp-pink bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="max-w-md text-center text-sm text-white/80">
                Apple Liquid Glass refraction · Animated borders · Glass
                morphism · Catppuccin colors
              </p>
            </GlassPanel>
          </AnimatedBorder>

          {/* Floating glass panels at different settings */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <GlassPanel
              width={180}
              height={180}
              radius={90}
              depth={10}
              blur={4}
              chromaticAberration={0}
              className="flex items-center justify-center"
            >
              <span className="text-sm font-medium text-white/90">
                No Chromatic
              </span>
            </GlassPanel>

            <GlassPanel
              width={180}
              height={180}
              radius={24}
              depth={14}
              blur={2}
              chromaticAberration={12}
              className="flex items-center justify-center"
            >
              <span className="text-sm font-medium text-white/90">
                High Chromatic
              </span>
            </GlassPanel>

            <GlassPanel
              width={180}
              height={180}
              radius={40}
              depth={6}
              blur={5}
              chromaticAberration={4}
              className="flex items-center justify-center"
            >
              <span className="text-sm font-medium text-white/90">
                Heavy Blur
              </span>
            </GlassPanel>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GlassButton
              variant="cta"
              size="lg"
              onClick={() => (window.location.href = "/components")}
            >
              Explore Components
            </GlassButton>
            <GlassButton
              variant="default"
              size="lg"
              onClick={() => setDialogOpen(true)}
            >
              Learn More
            </GlassButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: Cinematic Theater — refraction over dramatic lighting
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/bg/video-production.png"
            alt="Cinematic theater with dramatic lighting"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-white drop-shadow-lg md:text-5xl">
              Refraction Through Light
            </h2>
            <p className="mt-3 text-white/70">
              Glass panels distort the scene behind them — click to squeeze
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex justify-center">
              <AnimatedBorder borderRadius="1.5rem" showGlow animate>
                <GlassPanel
                  width={340}
                  height={260}
                  radius={24}
                  depth={10}
                  blur={3}
                  chromaticAberration={6}
                  className="flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-bold text-white">Liquid Glass</h3>
                  <p className="mt-1 text-sm text-white/70">
                    SVG feDisplacementMap creates real optical distortion, not
                    just a backdrop blur.
                  </p>
                </GlassPanel>
              </AnimatedBorder>
            </div>

            <div className="flex justify-center">
              <AnimatedBorder borderRadius="1.5rem" showGlow animate>
                <GlassPanel
                  width={340}
                  height={260}
                  radius={24}
                  depth={16}
                  blur={1}
                  chromaticAberration={14}
                  className="flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-bold text-white">
                    Chromatic Aberration
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    RGB channels displaced separately for that rainbow fringe
                    at the edges.
                  </p>
                </GlassPanel>
              </AnimatedBorder>
            </div>

            <div className="flex justify-center sm:col-span-2 lg:col-span-1">
              <AnimatedBorder borderRadius="1.5rem" showGlow animate>
                <GlassPanel
                  width={340}
                  height={260}
                  radius={24}
                  depth={8}
                  blur={6}
                  chromaticAberration={2}
                  className="flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-bold text-white">Frosted</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Heavier blur with subtle displacement — the frosted glass
                    look.
                  </p>
                </GlassPanel>
              </AnimatedBorder>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: Goal Targets — Maximum refraction (bokeh + color)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/bg/goal-first.webp"
            alt="Target pins on teal surface"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-white drop-shadow-lg md:text-5xl">
              Maximum Refraction
            </h2>
            <p className="mt-3 text-white/70">
              Colorful bokeh backgrounds make the displacement effect pop
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <GlassPanel
              width={200}
              height={200}
              radius={100}
              depth={14}
              blur={1}
              chromaticAberration={16}
              className="flex items-center justify-center"
            >
              <span className="text-center text-xs font-bold text-white">
                Circle
                <br />
                Max Chromatic
              </span>
            </GlassPanel>

            <GlassPanel
              width={280}
              height={200}
              radius={16}
              depth={12}
              blur={2}
              chromaticAberration={8}
              className="flex items-center justify-center"
            >
              <span className="text-center text-xs font-bold text-white">
                Rectangle
                <br />
                Medium Chromatic
              </span>
            </GlassPanel>

            <GlassPanel
              width={200}
              height={280}
              radius={32}
              depth={10}
              blur={4}
              chromaticAberration={4}
              className="flex items-center justify-center"
            >
              <span className="text-center text-xs font-bold text-white">
                Tall
                <br />
                Subtle
              </span>
            </GlassPanel>

            <GlassPanel
              width={200}
              height={200}
              radius={24}
              depth={20}
              blur={1}
              chromaticAberration={20}
              className="flex items-center justify-center"
            >
              <span className="text-center text-xs font-bold text-white">
                Square
                <br />
                Extreme
              </span>
            </GlassPanel>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: Analytics Dashboard — Animated borders + buttons
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/bg/campaign-monitoring.webp"
            alt="Analytics dashboard with world map"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-white drop-shadow-lg md:text-5xl">
              Animated Borders + Glass
            </h2>
            <p className="mt-3 text-white/70">
              Conic-gradient rotation with glow over data
            </p>
          </div>

          {/* Wide glass panel with animated border */}
          <div className="mb-12 flex justify-center">
            <AnimatedBorder
              borderRadius="1.5rem"
              glowSpread="5rem"
              glowBlur="3.5rem"
              showGlow
              animate
            >
              <GlassPanel
                width={720}
                height={200}
                radius={24}
                depth={10}
                blur={2}
                chromaticAberration={6}
                className="flex items-center justify-center gap-8 p-8"
              >
                <div className="text-center">
                  <p className="text-5xl font-black text-white">48px</p>
                  <p className="text-sm text-white/60">Border Radius</p>
                </div>
                <div className="h-16 w-px bg-white/20" />
                <div className="text-center">
                  <p className="text-5xl font-black text-white">360°</p>
                  <p className="text-sm text-white/60">Rotation</p>
                </div>
                <div className="h-16 w-px bg-white/20" />
                <div className="text-center">
                  <p className="text-5xl font-black text-white">3s</p>
                  <p className="text-sm text-white/60">Loop</p>
                </div>
              </GlassPanel>
            </AnimatedBorder>
          </div>

          {/* Button showcase */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GlassButton variant="cta" size="lg">
              CTA with Glow
            </GlassButton>
            <GlassButton variant="default" size="lg">
              Glass Default
            </GlassButton>
            <GlassButton variant="ghost" size="lg">
              Ghost
            </GlassButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: Creative Studio — Glass cards over portrait
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/bg/direct-approach.png"
            alt="Creative studio workspace"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-white drop-shadow-lg md:text-5xl">
              Glass Card Components
            </h2>
            <p className="mt-3 text-white/70">
              Feature cards with refraction, animated borders, and glass
              morphism
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard featured>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ctp-blue/15 text-ctp-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" /><path d="m14 7 3 3" /><path d="M5 6v4" /><path d="M19 14v4" /><path d="M10 2v2" /><path d="M7 8H3" /><path d="M21 16h-4" /><path d="M11 3H9" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white">Liquid Glass</h3>
                <p className="text-sm text-white/70">
                  SVG displacement filter creates real refraction with chromatic
                  aberration — not a blur hack.
                </p>
              </div>
            </GlassCard>

            <GlassCard hoverBorder>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ctp-pink/15 text-ctp-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Animated Borders
                </h3>
                <p className="text-sm text-white/70">
                  Conic-gradient rotation via @property with mask compositing
                  for transparent fills.
                </p>
              </div>
            </GlassCard>

            <GlassCard hoverBorder>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ctp-mauve/15 text-ctp-mauve">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Catppuccin Colors
                </h3>
                <p className="text-sm text-white/70">
                  Mocha dark & Latte light palettes with real dark: classes — no
                  filter hacks, ever.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: Catppuccin palette (solid bg for readability)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-background px-4 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-black text-foreground md:text-5xl">
            Design System Components
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Built on shadcn/ui with Catppuccin Mocha & Latte
          </p>

          {/* Color palette showcase */}
          <GlassCard>
            <h3 className="mb-4 text-lg font-bold text-foreground">
              Catppuccin Palette
            </h3>
            <div className="flex flex-wrap gap-3">
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
                  <div
                    className={`h-10 w-10 rounded-lg ${c.cls} shadow-md`}
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* User behavior section */}
          <div className="relative mt-12 overflow-hidden rounded-2xl">
            <img
              src="/bg/user-behavior.webp"
              alt="Data visualization"
              className="h-64 w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <GlassPanel
                width={400}
                height={160}
                radius={20}
                depth={10}
                blur={3}
                chromaticAberration={6}
                className="flex flex-col items-center justify-center gap-2 p-6"
              >
                <p className="text-lg font-bold text-white">
                  Works Everywhere
                </p>
                <p className="text-center text-sm text-white/70">
                  Inline glass panels over any image — cards, heroes, banners
                </p>
              </GlassPanel>
            </div>
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
            This design system combines Apple&apos;s Liquid Glass refraction
            effect (SVG displacement filters), animated conic-gradient borders,
            layered glass morphism, and the Catppuccin color palette.
          </p>
          <p>
            Built with Next.js 16, Tailwind CSS v4, and shadcn/ui. Every
            component supports both light and dark modes using real color values
            — no filter hacks.
          </p>
        </div>
      </GlassDialog>
    </main>
  );
}
