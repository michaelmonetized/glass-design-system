# Glass Design System — Project Brief

## Goal
Build a Next.js 16 demo site showcasing a native-ish web design system that combines:
1. **Apple Liquid Glass** refraction effect (SVG displacement filter + chromatic aberration)
2. **Animated conic-gradient borders** (rotating gradient with glow, using `@property` and mask compositing)
3. **Glass morphism** (backdrop-filter blur + layered transparency gradients)
4. **Jelly anchor-follow nav** (navigation indicator that follows the active link with a springy/jelly animation)
5. **shadcn/ui components** as the base component library
6. **Catppuccin Mocha (dark) / Latte (light)** color palette — real `dark:` classes, NO CSS filter hacks

## Tech Stack
- Next.js 16 (App Router)
- Tailwind CSS v4
- shadcn/ui (latest)
- TypeScript strict mode
- No paid services, no GitHub Actions

## Design System Components to Build

### Core Effects (utilities/primitives)
1. **GlassPanel** — The apple-glass refraction component, ported to React/Next.js
   - Props: width, height, radius, depth, blur, chromaticAberration
   - Uses SVG `feDisplacementMap` filter via `backdropFilter: url()`
   - Inner glow via box-shadow
   - Should work as a wrapper for any content
   
2. **AnimatedBorder** — Conic-gradient rotating border
   - Uses `@property --conic-gradient-angle` for smooth CSS animation
   - Mask compositing (`mask-composite: exclude`) for transparent fill
   - Optional glow effect (blurred version behind)
   - Configurable gradient colors, border width, radius, glow spread

3. **GlassMorphism** — The layered glass background
   - Multiple `linear-gradient` layers with `color-mix` transparency
   - Inner shadow for depth
   - Works on both light and dark backgrounds

### UI Components (shadcn + effects)
4. **GlassCard** — Card component combining GlassPanel + AnimatedBorder
   - For featured content, CTAs, pricing cards
   - AnimatedBorder activates on hover or for "featured" variant

5. **GlassNav** — Navigation bar with jelly anchor follow
   - Glass morphism background
   - Active link indicator that slides/morphs between nav items with spring physics
   - Sticky positioning
   - Mobile: glass drawer/sheet

6. **GlassButton** — Button variants
   - Default: glass morphism fill
   - CTA/Primary: animated conic-gradient border + glow
   - Ghost: transparent with glass hover state

7. **GlassDialog** — Modal/dialog with glass backdrop
8. **GlassSheet** — Side panel with glass effect
9. **GlassTooltip** — Tooltip with glass styling

### Demo Pages
- **/** — Hero with video background (like the original), showcasing all components
- **/components** — Component gallery/playground with controls
- **/about** — Example content page using the design system

## Color System — Catppuccin

### Mocha (Dark Mode)
```
Base: #1e1e2e    Surface0: #313244   Surface1: #45475a   Surface2: #585b70
Text: #cdd6f4    Subtext0: #a6adc8   Subtext1: #bac2de
Blue: #89b4fa    Mauve: #cba6f7      Pink: #f5c2e7       Rosewater: #f5e0dc
Lavender: #b4befe Red: #f38ba8       Peach: #fab387      Yellow: #f9e2af
Green: #a6e3a1   Teal: #94e2d5       Sky: #89dceb        Sapphire: #74c7ec
```

### Latte (Light Mode)
```
Base: #eff1f5    Surface0: #ccd0da   Surface1: #bcc0cc   Surface2: #acb0be
Text: #4c4f69    Subtext0: #6c6f85   Subtext1: #5c5f77
Blue: #1e66f5    Mauve: #8839ef      Pink: #ea76cb       Rosewater: #dc8a78
Lavender: #7287fd Red: #d20f39       Peach: #fe640b      Yellow: #df8e1d
Green: #40a02b   Teal: #179299       Sky: #04a5e5        Sapphire: #209fb5
```

### Gradient Accent Colors (for animated borders)
- Primary gradient: Pink → Blue → Pink (conic rotation)
- Dark mode: use Mocha Pink (#f5c2e7) → Mocha Blue (#89b4fa)
- Light mode: use Latte Pink (#ea76cb) → Latte Blue (#1e66f5)
- Glow intensity: 0.2 in dark, 0.4 in light (from original project)

## Reference Files
The following files contain the original implementations to port/adapt:

### Apple Glass (SVG displacement refraction)
- `/tmp/apple-glass-demo/src/GlassElement/GlassElement.tsx` — Main component
- `/tmp/apple-glass-demo/src/GlassElement/getDisplacementFilter.ts` — SVG filter generator
- `/tmp/apple-glass-demo/src/GlassElement/getDisplacementMap.ts` — Displacement map generator
- `/tmp/apple-glass-demo/src/GlassElement/GlassElement.module.css` — Base styles

### Animated Gradient Border + Glass Morphism
- `/Users/michael/Projects/Glass Animated Gradient Border/style.css` — Full implementation
  - `.glass` class — layered glass morphism with inner shadows
  - `.border-gradient` class — conic-gradient animated border via mask compositing
  - `.border-glow` class — blurred glow behind the border
  - `.animate-rotate-angle` — CSS animation for `--conic-gradient-angle`
  - `@property --conic-gradient-angle` — required for smooth angle animation
  - `--transparency()` CSS function — color-mix helper
  - Light/dark mode toggle with proper color switching

## Hard Rules
- NO `filter: invert()` or `filter: grayscale()` — real color values with `dark:` classes
- NO GitHub Actions or paid services
- Tailwind v4 only (no tailwind.config.ts — use CSS-based config)
- Next.js 16+ (rename middleware.ts → proxy.ts if using Clerk)
- Every component must work in both light and dark mode with Catppuccin colors
- Use `@property` for the conic gradient animation (required for smooth interpolation)
