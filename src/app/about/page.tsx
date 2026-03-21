import {
  BlocksIcon,
  LayoutGridIcon,
  PaletteIcon,
  SparklesIcon,
} from "lucide-react";
import {
  CtaBanner,
  FaqSection,
  FeatureCard,
  FeatureGrid,
  LogoCloud,
  SectionHeader,
  StatCard,
  StatsGrid,
  TeamGrid,
  TeamMemberCard,
  TestimonialCard,
  TestimonialGrid,
} from "@/components/layout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const coverageFaq = [
  {
    question: "What changed in the scope of this system?",
    answer:
      "It no longer stops at a few premium glass demos. The library now includes a much broader primitive layer and a reusable block layer for real page assembly.",
  },
  {
    question: "How does it relate to shadcn/ui?",
    answer:
      "shadcn/ui remains the baseline primitive layer. This project uses that component model and extends it with custom layout blocks and a premium glass effect system.",
  },
  {
    question: "How does it relate to Elementor-style workflows?",
    answer:
      "The layout blocks target the same outcomes as page-builder widgets, but as source-controlled JSX components with props, variants, and composition instead of one-off visual config.",
  },
];

const logos = ["Signal", "Northstar", "Mode", "Prism", "Relay", "Aperture", "Canvas", "Orbit"];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="space-y-16">
        <section className="space-y-8">
          <SectionHeader
            eyebrow="About"
            title="A broader design system, not just a glass effect demo"
            description="The goal is to combine disciplined shadcn-style primitives, reusable layout sections, and a premium glass surface layer in one codebase that can cover both application UI and high-touch marketing pages."
          />

          <Alert>
            <SparklesIcon className="size-4" />
            <AlertTitle>Coverage expanded</AlertTitle>
            <AlertDescription>
              This library now spans official-style primitives, higher-order layout blocks,
              and glass-specific components so it can support app shells, landing pages,
              editorial systems, and portfolio-style builds from one shared vocabulary.
            </AlertDescription>
          </Alert>

          <StatsGrid>
            <StatCard label="Primitives" value="33" delta="+30" progress={92} emphasis="strong" />
            <StatCard label="Layout Blocks" value="12" delta="+12" progress={86} />
            <StatCard label="Glass Layer" value="9" delta="+4" progress={88} />
            <StatCard label="Theme Tokens" value="Catppuccin" delta="Dual mode" progress={100} />
          </StatsGrid>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Architecture"
            title="Three stacked layers"
            description="The system is easier to extend when the responsibilities stay separate: primitives for mechanics, layout blocks for composition, and premium glass components for standout surfaces."
          />

          <FeatureGrid>
            <FeatureCard
              tone="accent"
              badge="Layer 1"
              icon={<BlocksIcon className="size-5" />}
              title="Primitive UI"
              description="Buttons, badges, cards, breadcrumbs, tabs, tables, inputs, overlays, toggles, scroll regions, and command patterns."
            />
            <FeatureCard
              badge="Layer 2"
              icon={<LayoutGridIcon className="size-5" />}
              title="Layout Blocks"
              description="Feature grids, logo clouds, pricing sections, testimonials, team cards, FAQ rails, CTA banners, and portfolio blocks."
            />
            <FeatureCard
              badge="Layer 3"
              icon={<PaletteIcon className="size-5" />}
              title="Glass Surfaces"
              description="Refraction panels, squeeze interactions, animated borders, and premium accents for heroes, cards, and buttons."
            />
          </FeatureGrid>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Reference"
            title="What the system is trying to cover"
            description="The target is not one vendor’s exact implementation. It is the common surface area teams actually need across app UI, marketing UI, and page-builder style content assembly."
          />

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <Card className="border-border/60 bg-card/90">
              <CardHeader>
                <CardTitle>Coverage map</CardTitle>
                <CardDescription>
                  A practical translation of public component families into reusable React building blocks.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  <Badge>Forms</Badge>
                  <Badge variant="secondary">Navigation</Badge>
                  <Badge variant="outline">Testimonials</Badge>
                  <Badge variant="outline">Pricing</Badge>
                  <Badge variant="outline">Portfolio</Badge>
                  <Badge variant="outline">FAQ</Badge>
                  <Badge variant="ghost">Command</Badge>
                  <Badge variant="ghost">Glass</Badge>
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>App UI coverage</span>
                      <span className="text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Marketing section coverage</span>
                      <span className="text-muted-foreground">84%</span>
                    </div>
                    <Progress value={84} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Premium interaction coverage</span>
                      <span className="text-muted-foreground">88%</span>
                    </div>
                    <Progress value={88} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/90">
              <CardHeader>
                <CardTitle>Composition model</CardTitle>
                <CardDescription>
                  Keep it extensible: primitives stay small, blocks stay legible, and the premium layer stays optional.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="primitives">
                  <TabsList>
                    <TabsTrigger value="primitives">Primitives</TabsTrigger>
                    <TabsTrigger value="blocks">Blocks</TabsTrigger>
                    <TabsTrigger value="glass">Glass</TabsTrigger>
                  </TabsList>
                  <TabsContent value="primitives" className="rounded-2xl border border-border/60 bg-background/60 p-4 text-sm text-muted-foreground">
                    Use when the goal is raw interaction and structure: forms, tabs,
                    data tables, menus, popovers, tooltips, dialogs, pagination.
                  </TabsContent>
                  <TabsContent value="blocks" className="rounded-2xl border border-border/60 bg-background/60 p-4 text-sm text-muted-foreground">
                    Use when the goal is page composition: pricing cards, testimonial
                    grids, CTA banners, team sections, FAQ rails, portfolio rows.
                  </TabsContent>
                  <TabsContent value="glass" className="rounded-2xl border border-border/60 bg-background/60 p-4 text-sm text-muted-foreground">
                    Use when you want a premium or editorial moment: hero panels,
                    refraction callouts, animated borders, and tactile glass controls.
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Examples"
            title="Higher-order blocks now in the library"
            description="These cover much of the public section/widget surface area people expect from shadcn UI kits and page-builder ecosystems."
          />

          <LogoCloud logos={logos} />

          <TestimonialGrid>
            <TestimonialCard
              quote="We can now build a startup landing page and an internal dashboard without changing mental models."
              name="Maya Lee"
              role="Product Designer"
              company="Relay"
              initials="ML"
            />
            <TestimonialCard
              quote="The block layer closes the gap between raw primitives and what a content team actually needs to ship."
              name="Victor Hale"
              role="Design Engineer"
              company="Orbit"
              initials="VH"
            />
            <TestimonialCard
              quote="The glass layer is strong, but the important part is that it sits on top of a much more complete foundation now."
              name="Tara Ng"
              role="Creative Director"
              company="Canvas"
              initials="TN"
            />
          </TestimonialGrid>

          <TeamGrid>
            <TeamMemberCard
              name="Mina Brooks"
              role="System Strategist"
              bio="Drives coverage decisions so the library stays useful for real product and marketing teams."
              initials="MB"
            />
            <TeamMemberCard
              name="Owen Scott"
              role="UI Engineer"
              bio="Focuses on the primitive layer, semantics, and keeping APIs clean as the surface area expands."
              initials="OS"
            />
            <TeamMemberCard
              name="Priya Das"
              role="Layout Architect"
              bio="Builds reusable section patterns that avoid the generic page-builder look."
              initials="PD"
            />
            <TeamMemberCard
              name="Eli Ross"
              role="Interaction Designer"
              bio="Owns motion, hover states, and the tactile quality of the glass components."
              initials="ER"
            />
          </TeamGrid>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="FAQ"
            title="How to think about the system"
            description="This is the working model for extending the codebase without collapsing back into one-off page code."
          />

          <FaqSection items={coverageFaq} />
        </section>

        <section>
          <CtaBanner
            tone="dark"
            title="Compose pages like a UI kit, ship them like a codebase."
            description="That is the direction here: broad component coverage, page-level building blocks, and enough visual identity to avoid looking like another generic Tailwind demo."
            primaryAction={<Badge variant="secondary" className="bg-white/10 text-white">System Layering</Badge>}
            secondaryAction={<Badge variant="secondary" className="bg-white/10 text-white">Reusable JSX</Badge>}
          />
        </section>
      </div>
    </main>
  );
}
