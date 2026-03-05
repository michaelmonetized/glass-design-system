import { GlassCard } from "@/components/glass/glass-card";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <div className="mb-12">
        <h1 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
          About Glass Design System
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A native-ish web design system combining cutting-edge CSS techniques with
          the Catppuccin color palette.
        </p>
      </div>

      <div className="space-y-8">
        <GlassCard>
          <h2 className="text-xl font-bold text-foreground">The Vision</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Glass Design System brings together techniques that push the
              boundaries of what&apos;s possible with modern CSS and SVG. Instead of
              flat colors or simple shadows, every surface refracts, glows, and
              breathes.
            </p>
            <p>
              The system is built on three pillars: <strong className="text-foreground">Liquid Glass</strong> for
              realistic refraction using SVG displacement filters, <strong className="text-foreground">Animated
              Borders</strong> using conic-gradient rotation with @property, and <strong className="text-foreground">Glass
              Morphism</strong> for layered transparency effects.
            </p>
          </div>
        </GlassCard>

        <div className="grid gap-6 sm:grid-cols-2">
          <GlassCard hoverBorder>
            <h3 className="text-lg font-bold text-foreground">Tech Stack</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-blue" />
                Next.js 16 (App Router)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-teal" />
                Tailwind CSS v4
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-mauve" />
                shadcn/ui components
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-pink" />
                Framer Motion (spring physics)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-peach" />
                TypeScript strict mode
              </li>
            </ul>
          </GlassCard>

          <GlassCard hoverBorder>
            <h3 className="text-lg font-bold text-foreground">Design Principles</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-green" />
                No filter hacks for dark mode
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-yellow" />
                Real Catppuccin color values
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-red" />
                Performant CSS animations
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-sky" />
                Composable effect primitives
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-lavender" />
                Zero paid dependencies
              </li>
            </ul>
          </GlassCard>
        </div>

        <GlassCard>
          <h2 className="text-xl font-bold text-foreground">Color System: Catppuccin</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              The design system uses <strong className="text-foreground">Catppuccin Mocha</strong> for
              dark mode and <strong className="text-foreground">Catppuccin Latte</strong> for light mode.
              Every color is a real hex value applied through CSS custom properties —
              no <code className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-xs font-mono text-foreground">filter: invert()</code> or <code className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-xs font-mono text-foreground">filter: grayscale()</code> hacks.
            </p>
            <p>
              The palette maps to shadcn/ui&apos;s semantic tokens (background, foreground,
              primary, secondary, etc.) and also exposes every Catppuccin color directly
              as Tailwind utilities like <code className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-xs font-mono text-foreground">bg-ctp-blue</code> or <code className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-xs font-mono text-foreground">text-ctp-pink</code>.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-7 gap-2 sm:grid-cols-14">
            {[
              "bg-ctp-rosewater", "bg-ctp-flamingo", "bg-ctp-pink", "bg-ctp-mauve",
              "bg-ctp-red", "bg-ctp-maroon", "bg-ctp-peach", "bg-ctp-yellow",
              "bg-ctp-green", "bg-ctp-teal", "bg-ctp-sky", "bg-ctp-sapphire",
              "bg-ctp-blue", "bg-ctp-lavender",
            ].map((cls) => (
              <div key={cls} className={`h-6 w-full rounded ${cls}`} />
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-xl font-bold text-foreground">How It Works</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground">Liquid Glass Refraction</h3>
              <p className="mt-1">
                Uses an SVG <code className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-xs font-mono text-foreground">feDisplacementMap</code> filter
                applied via <code className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-xs font-mono text-foreground">backdrop-filter: url()</code>. The displacement map
                is procedurally generated based on the element&apos;s dimensions and border radius. Chromatic
                aberration splits RGB channels at different displacement scales.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Animated Borders</h3>
              <p className="mt-1">
                A <code className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-xs font-mono text-foreground">conic-gradient</code> rotates smoothly using a
                CSS <code className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-xs font-mono text-foreground">@property</code> registered custom property for the
                angle. Mask compositing (<code className="rounded bg-ctp-surface0 px-1.5 py-0.5 text-xs font-mono text-foreground">mask-composite: exclude</code>)
                cuts out the fill, leaving only the border visible.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Jelly Navigation</h3>
              <p className="mt-1">
                Framer Motion&apos;s spring physics animate an indicator blob between nav items.
                The spring configuration (stiffness: 350, damping: 30) gives it a satisfying
                jelly-like bounce as it slides between positions.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
