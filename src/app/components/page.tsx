"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/glass/glass-panel";
import { GlassCard } from "@/components/glass/glass-card";
import { GlassButton } from "@/components/glass/glass-button";
import { AnimatedBorder } from "@/components/glass/animated-border";
import { GlassDialog } from "@/components/glass/glass-dialog";
import { useSidebar } from "@/components/glass/glass-sidebar";
import { GlassInput, GlassTextarea, GlassSelect, GlassCheckbox, GlassContactForm } from "@/components/glass/glass-form";

export default function ComponentsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toggle: toggleSidebar } = useSidebar();

  const [panelWidth, setPanelWidth] = useState(320);
  const [panelHeight, setPanelHeight] = useState(200);
  const [panelRadius, setPanelRadius] = useState(24);
  const [panelDepth, setPanelDepth] = useState(8);
  const [panelBlur, setPanelBlur] = useState(2);
  const [panelCA, setPanelCA] = useState(6);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="mb-12">
        <h1 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
          Component Gallery
        </h1>
        <p className="mt-2 text-muted-foreground">
          Interactive playground for every Glass Design System component.
        </p>
      </div>

      <div className="space-y-16">
        {/* ─── GlassPanel ─── */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">GlassPanel</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Apple Liquid Glass refraction via SVG displacement filter. Click it to see the depth change.
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-ctp-blue/20 via-ctp-mauve/10 to-ctp-pink/20 p-8">
              <GlassPanel
                width={panelWidth}
                height={panelHeight}
                radius={panelRadius}
                depth={panelDepth}
                blur={panelBlur}
                chromaticAberration={panelCA}
                className="flex items-center justify-center"
              >
                <span className="text-sm font-medium text-foreground/80">Click me</span>
              </GlassPanel>
            </div>

            <GlassCard>
              <h3 className="mb-4 text-sm font-bold text-foreground">Controls</h3>
              <div className="space-y-4">
                {[
                  { label: "Width", value: panelWidth, set: setPanelWidth, min: 100, max: 600 },
                  { label: "Height", value: panelHeight, set: setPanelHeight, min: 80, max: 400 },
                  { label: "Radius", value: panelRadius, set: setPanelRadius, min: 0, max: 100 },
                  { label: "Depth", value: panelDepth, set: setPanelDepth, min: 1, max: 30 },
                  { label: "Blur", value: panelBlur, set: setPanelBlur, min: 0, max: 10 },
                  { label: "Chromatic Aberration", value: panelCA, set: setPanelCA, min: 0, max: 20 },
                ].map((ctrl) => (
                  <div key={ctrl.label} className="flex items-center gap-3">
                    <label className="w-40 text-xs font-medium text-muted-foreground">{ctrl.label}</label>
                    <input
                      type="range"
                      min={ctrl.min}
                      max={ctrl.max}
                      value={ctrl.value}
                      onChange={(e) => ctrl.set(Number(e.target.value))}
                      className="flex-1 accent-ctp-blue"
                    />
                    <span className="w-10 text-right text-xs font-mono text-muted-foreground">{ctrl.value}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        {/* ─── AnimatedBorder ─── */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">AnimatedBorder</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Rotating conic-gradient border using @property for smooth angle interpolation, with mask compositing for transparent fill.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedBorder animate showGlow>
              <div className="glass-morphism flex h-48 items-center justify-center rounded-2xl p-6">
                <span className="text-sm text-muted-foreground">Border + Glow</span>
              </div>
            </AnimatedBorder>

            <AnimatedBorder animate showGlow={false}>
              <div className="glass-morphism flex h-48 items-center justify-center rounded-2xl p-6">
                <span className="text-sm text-muted-foreground">Border Only</span>
              </div>
            </AnimatedBorder>

            <AnimatedBorder animate showGlow duration={8}>
              <div className="glass-morphism flex h-48 items-center justify-center rounded-2xl p-6">
                <span className="text-sm text-muted-foreground">Slow (8s)</span>
              </div>
            </AnimatedBorder>
          </div>
        </section>

        {/* ─── GlassCard ─── */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">GlassCard</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Combines glass morphism with optional animated border. &ldquo;Featured&rdquo; cards get a permanent spinning border, others get it on hover.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard featured>
              <h3 className="text-lg font-bold text-foreground">Featured</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Permanent animated border with glow effect.
              </p>
            </GlassCard>

            <GlassCard hoverBorder>
              <h3 className="text-lg font-bold text-foreground">Hover Border</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Animated border appears on hover.
              </p>
            </GlassCard>

            <GlassCard hoverBorder={false}>
              <h3 className="text-lg font-bold text-foreground">Plain Glass</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Glass morphism only, no animated border.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* ─── GlassButton ─── */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">GlassButton</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Three variants: default glass morphism, CTA with animated border + glow, and ghost with glass hover.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <GlassButton variant="default">Default</GlassButton>
            <GlassButton variant="cta">Call to Action</GlassButton>
            <GlassButton variant="ghost">Ghost</GlassButton>
            <GlassButton variant="default" size="sm">Small</GlassButton>
            <GlassButton variant="default" size="lg">Large</GlassButton>
          </div>
        </section>

        {/* ─── GlassDialog ─── */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">GlassDialog</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Modal dialog with glass morphism backdrop and styling.
          </p>

          <GlassButton variant="default" onClick={() => setDialogOpen(true)}>
            Open Dialog
          </GlassButton>

          <GlassDialog
            open={dialogOpen}
            onOpenChange={setDialogOpen}
            title="Glass Dialog"
            description="A dialog with glass morphism background effects."
          >
            <p className="text-sm text-muted-foreground">
              This dialog uses glass morphism for its background, with the Catppuccin
              color palette for all text and accent colors. It works in both light and dark mode.
            </p>
          </GlassDialog>
        </section>

        {/* ─── GlassSidebar ─── */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">GlassSidebar</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Apple-style sidebar that shifts main content. No overlay — main area
            stays interactive and scrollable. 0.5rem corner inset, 1rem radius, glass morphism.
          </p>

          <GlassButton variant="default" onClick={toggleSidebar}>
            Toggle Sidebar
          </GlassButton>
        </section>

        {/* ─── Glass Form Components ─── */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Glass Forms</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Transparent form inputs designed for glass surfaces. Best viewed over
            image or gradient backgrounds.
          </p>

          {/* Form demo over image bg */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/bg/direct-approach.png')" }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative z-10 p-8 md:p-12">
              <div className="mx-auto max-w-md">
                <h3 className="mb-6 text-lg font-bold text-white drop-shadow-md">
                  Contact Form
                </h3>
                <GlassContactForm />
                <div className="mt-5">
                  <GlassButton variant="cta" className="w-full">
                    Submit
                  </GlassButton>
                </div>
              </div>
            </div>
          </div>

          {/* Individual inputs demo */}
          <div className="relative mt-8 overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/bg/campaign-monitoring.webp')" }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 grid gap-6 p-8 md:grid-cols-2 md:p-12">
              <GlassInput label="Text Input" placeholder="Type something..." />
              <GlassInput label="With Error" placeholder="Invalid" error="This field is required" />
              <GlassSelect
                label="Select"
                options={[
                  { value: "", label: "Choose an option..." },
                  { value: "a", label: "Option A" },
                  { value: "b", label: "Option B" },
                ]}
              />
              <div className="flex flex-col gap-3">
                <GlassCheckbox label="Checkbox unchecked" />
                <GlassCheckbox label="Checkbox checked" defaultChecked />
              </div>
              <div className="md:col-span-2">
                <GlassTextarea label="Textarea" placeholder="Write a longer message..." rows={3} />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Glass Morphism ─── */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Glass Morphism</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            The base glass effect using layered gradients, backdrop-filter blur, and inner shadows.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ctp-blue/30 to-ctp-pink/30 p-8">
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="font-bold text-foreground">On gradient background</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Glass morphism looks best over colorful or image backgrounds.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-ctp-surface0 p-8">
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="font-bold text-foreground">On surface background</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Subtle but still distinct on solid surface colors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
