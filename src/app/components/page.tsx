"use client";

import { useState } from "react";
import {
  AlertCircleIcon,
  ArrowRightIcon,
  BellIcon,
  BlocksIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartNoAxesColumnIcon,
  CheckIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  CircleDollarSignIcon,
  ClockIcon,
  CommandIcon,
  CreditCardIcon,
  FolderKanbanIcon,
  GalleryVerticalEndIcon,
  GripVerticalIcon,
  HashIcon,
  HeartIcon,
  InboxIcon,
  Layers3Icon,
  LayoutGridIcon,
  LinkIcon,
  LockIcon,
  LogOutIcon,
  MailIcon,
  MessageCircleIcon,
  MessageSquareQuoteIcon,
  MoreHorizontalIcon,
  PackageIcon,
  PaletteIcon,
  PencilIcon,
  PhoneIcon,
  PieChartIcon,
  PlusIcon,
  RefreshCwIcon,
  RocketIcon,
  SearchIcon,
  SendIcon,
  Settings2Icon,
  SettingsIcon,
  Share2Icon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  SmartphoneIcon,
  SparklesIcon,
  StarIcon,
  TagIcon,
  TruckIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
  WalletIcon,
  XIcon,
  ZapIcon,
} from "lucide-react";
import {
  AnimatedBorder,
  GlassButton,
  GlassCard,
  GlassDialog,
  GlassPanel,
  useSidebar,
} from "@/components/glass";
import {
  CtaBanner,
  FaqSection,
  FeatureCard,
  FeatureGrid,
  IconList,
  LogoCloud,
  PortfolioCard,
  PortfolioGrid,
  PricingCard,
  PricingGrid,
  SectionHeader,
  StatCard,
  StatsGrid,
  TeamGrid,
  TeamMemberCard,
  TestimonialCard,
  TestimonialGrid,
} from "@/components/layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// ─── Data ───────────────────────────────────────────────────────────────────

const logos = [
  "Aperture",
  "Northstar",
  "Prism",
  "Interval",
  "Helio",
  "Vector",
  "Mode",
  "Signal",
];

const faqItems = [
  {
    question: "How much of the official shadcn surface is covered here?",
    answer:
      "The library now includes a broad set of official shadcn primitives, plus custom layout blocks that cover the common page-level patterns those primitives are usually assembled into.",
  },
  {
    question: "How are the Elementor-style widgets represented?",
    answer:
      "The layout blocks map to the same real-world jobs: pricing tables, feature cards, counters, portfolios, team cards, testimonials, FAQ toggles, CTA sections, icon lists, logo clouds, and contact sections.",
  },
  {
    question: "Why keep both glass and standard primitives?",
    answer:
      "The standard primitives handle app UI and editorial content cleanly. The glass layer handles hero surfaces, premium accents, and interactive moments that benefit from refraction.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$24",
    description: "Landing pages, content blocks, and design system foundations.",
    features: [
      "33 UI primitives ready to compose",
      "Marketing sections and CTA blocks",
      "Glass buttons, panels, cards, and forms",
    ],
    note: "Good fit for content sites and brochureware.",
  },
  {
    name: "Growth",
    price: "$79",
    description: "For product marketing teams shipping pages every week.",
    features: [
      "Pricing, testimonial, FAQ, and portfolio sections",
      "Command menus, tabs, filters, and data views",
      "Shared variant system using cn + cva",
    ],
    note: "Covers most of the Elementor-style business stack.",
    featured: true as const,
  },
  {
    name: "Studio",
    price: "$149",
    description: "Opinionated production kit for agencies and app teams.",
    features: [
      "Higher-fidelity layout sections",
      "Composable shadcn primitives and glass accents",
      "Ready for custom dashboards and branded landing pages",
    ],
    note: "Designed for teams extending the library.",
  },
];

const testimonials = [
  {
    quote:
      "The component layer finally feels coherent. We can ship utilitarian screens and premium marketing surfaces from the same system.",
    name: "Avery Cole",
    role: "Design Director",
    company: "Northstar Labs",
    initials: "AC",
  },
  {
    quote:
      "This gives us the shadcn ergonomics we wanted, with the richer section patterns our WordPress clients expect.",
    name: "Monica Reed",
    role: "Creative Lead",
    company: "Mode Studio",
    initials: "MR",
  },
  {
    quote:
      "The glass layer works as a differentiator instead of a gimmick because the rest of the UI is still disciplined and reusable.",
    name: "Rohan Patel",
    role: "Product Engineer",
    company: "Signal Works",
    initials: "RP",
  },
];

const team = [
  {
    name: "Nina Park",
    role: "Creative Technologist",
    bio: "Builds the higher-order layout blocks and keeps the visual language intentional.",
    initials: "NP",
  },
  {
    name: "Julian Hart",
    role: "Design Systems Lead",
    bio: "Owns primitives, variants, accessibility contracts, and interaction consistency.",
    initials: "JH",
  },
  {
    name: "Sana Malik",
    role: "Frontend Architect",
    bio: "Translates page-builder expectations into composable JSX and predictable APIs.",
    initials: "SM",
  },
  {
    name: "Leo Grant",
    role: "Motion Designer",
    bio: "Focuses on animation timing, glass behavior, and premium interaction details.",
    initials: "LG",
  },
];

const portfolio = [
  {
    eyebrow: "Portfolio",
    title: "Agency Site Builder",
    description: "Hero, pricing, testimonial, and FAQ patterns assembled into a full landing stack.",
    meta: "Layout blocks + forms",
  },
  {
    eyebrow: "Dashboard",
    title: "Creative Ops Console",
    description: "Uses tabs, command search, tables, toggles, and filters to manage content operations.",
    meta: "Primitives + data views",
  },
  {
    eyebrow: "Commerce",
    title: "Product Story Pages",
    description: "Combines glass accents with testimonial cards, stats, and CTA banners for launches.",
    meta: "Sections + premium surfaces",
  },
];

const panelControls = [
  { label: "Width", valueKey: "width", min: 180, max: 520 },
  { label: "Height", valueKey: "height", min: 140, max: 360 },
  { label: "Radius", valueKey: "radius", min: 8, max: 90 },
  { label: "Depth", valueKey: "depth", min: 2, max: 20 },
  { label: "Blur", valueKey: "blur", min: 0, max: 8 },
  { label: "Chromatic", valueKey: "chromaticAberration", min: 0, max: 16 },
] as const;

// ─── Component ──────────────────────────────────────────────────────────────

export default function ComponentsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const { toggle: toggleSidebar } = useSidebar();
  const [panelSettings, setPanelSettings] = useState({
    width: 320,
    height: 220,
    radius: 28,
    depth: 8,
    blur: 2,
    chromaticAberration: 6,
  });

  return (
    <TooltipProvider>
      <main className="mx-auto max-w-7xl px-3 py-8 sm:px-4 sm:py-12 md:px-6">
        {/* ─── Header ─── */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Library"
            title="Component Gallery"
            description="Official shadcn primitives, original layout blocks inspired by shadcn UI Kit and Elementor-style page builders, plus the premium glass layer for standout surfaces."
            actions={
              <>
                <GlassButton variant="cta" onClick={() => setCommandOpen(true)}>
                  Open Command Palette
                </GlassButton>
                <GlassButton variant="default" onClick={() => setDialogOpen(true)}>
                  Preview Glass Dialog
                </GlassButton>
              </>
            }
          />

          <StatsGrid>
            <StatCard label="UI Primitives" value="33" delta="+30" progress={92} emphasis="strong" />
            <StatCard label="Layout Blocks" value="12" delta="+12" progress={86} />
            <StatCard label="Glass Components" value="9" delta="+4" progress={88} />
            <StatCard label="Coverage Target" value="Broad" delta="Now" progress={80} />
          </StatsGrid>
        </div>

        <div className="mt-10 space-y-12 sm:mt-16 sm:space-y-20">
          {/* ─── Glass Playground ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="glass-playground">
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-ctp-blue/30 via-ctp-mauve/20 to-ctp-pink/30 dark:from-ctp-blue/20 dark:via-ctp-mauve/15 dark:to-ctp-pink/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(137,180,250,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(203,166,247,0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
            </div>

            <SectionHeader
              eyebrow="Glass"
              title="Liquid Glass Playground"
              description="The same refraction system now drives panels, cards, and buttons. Use the official slider primitive to tune the glass surface live."
            />

            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-ctp-blue/20 via-ctp-mauve/10 to-ctp-pink/20 p-4 sm:rounded-[2rem] sm:p-6">
                <div className="flex min-h-[18rem] items-center justify-center rounded-xl border border-white/10 bg-black/10 p-4 sm:min-h-[26rem] sm:rounded-[1.5rem] sm:p-6">
                  <AnimatedBorder borderRadius="1.75rem" showGlow animate>
                    <GlassPanel
                      width={panelSettings.width}
                      height={panelSettings.height}
                      radius={panelSettings.radius}
                      depth={panelSettings.depth}
                      blur={panelSettings.blur}
                      chromaticAberration={panelSettings.chromaticAberration}
                      className="flex flex-col items-center justify-center gap-3 p-8 text-center"
                    >
                      <Badge variant="secondary" className="bg-white/15 text-white">
                        Click To Squeeze
                      </Badge>
                      <p className="text-2xl font-black text-white">Liquid Glass</p>
                      <p className="max-w-xs text-sm text-white/75">
                        Shared displacement-based refraction, chromatic aberration,
                        and press-depth response.
                      </p>
                    </GlassPanel>
                  </AnimatedBorder>
                </div>
              </div>

              <GlassCard hoverBorder={false} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Surface Controls</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    These controls use the standard shadcn slider primitive to tune the
                    same glass engine used by the hero surfaces.
                  </p>
                </div>

                <div className="space-y-5">
                  {panelControls.map((control) => (
                    <div key={control.label} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <Label>{control.label}</Label>
                        <span className="font-mono text-muted-foreground">
                          {panelSettings[control.valueKey]}
                        </span>
                      </div>
                      <Slider
                        min={control.min}
                        max={control.max}
                        step={1}
                        value={[panelSettings[control.valueKey]]}
                        onValueChange={(values) => {
                          const nextValue = values[0];
                          if (typeof nextValue !== "number") return;
                          setPanelSettings((current) => ({
                            ...current,
                            [control.valueKey]: nextValue,
                          }));
                        }}
                      />
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="flex flex-wrap gap-3">
                  <GlassButton variant="default">Default</GlassButton>
                  <GlassButton variant="cta">CTA</GlassButton>
                  <GlassButton variant="ghost">Ghost</GlassButton>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* ─── Core Primitives ─── */}
          <section className="space-y-8" id="primitives">
            <SectionHeader
              eyebrow="Foundations"
              title="Core shadcn Primitives"
              description="Alerts, badges, breadcrumbs, cards, avatars, tabs, and content structure pulled in as real reusable primitives rather than ad hoc page code."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr]">
              <Card className="border-border/60 bg-card/90">
                <CardHeader className="space-y-4">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Components</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Gallery</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <div className="flex flex-wrap gap-2">
                    <Badge>New</Badge>
                    <Badge variant="secondary">shadcn</Badge>
                    <Badge variant="outline">Elementor-style blocks</Badge>
                    <Badge variant="ghost">Glass layer</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircleIcon className="size-4" />
                    <AlertTitle>System update</AlertTitle>
                    <AlertDescription>
                      This gallery now mixes official shadcn primitives with original
                      layout blocks for landing pages, dashboards, and editorial builds.
                    </AlertDescription>
                  </Alert>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Card Primitive</CardTitle>
                        <CardDescription>
                          Base container for settings panes, tables, pricing, and feature
                          summaries.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Tabs Primitive</CardTitle>
                        <CardDescription>
                          Shared switcher for dashboard modules, filters, or knowledge
                          panels.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Avatar and Team Utilities</CardTitle>
                  <CardDescription>
                    Small details matter: grouped avatars, presence-friendly stacks, and
                    semantic card structure.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <AvatarGroup>
                    <Avatar size="lg">
                      <AvatarFallback>NP</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarFallback>JH</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <AvatarGroupCount>+4</AvatarGroupCount>
                  </AvatarGroup>

                  <Tabs defaultValue="design">
                    <TabsList>
                      <TabsTrigger value="design">Design</TabsTrigger>
                      <TabsTrigger value="build">Build</TabsTrigger>
                      <TabsTrigger value="ship">Ship</TabsTrigger>
                    </TabsList>
                    <TabsContent value="design" className="rounded-2xl border border-border/60 bg-background/60 p-4">
                      Color, spacing, variants, and the content-building layer.
                    </TabsContent>
                    <TabsContent value="build" className="rounded-2xl border border-border/60 bg-background/60 p-4">
                      Composable primitives with predictable class contracts and slots.
                    </TabsContent>
                    <TabsContent value="ship" className="rounded-2xl border border-border/60 bg-background/60 p-4">
                      Layout sections and production-ready surfaces for marketing pages.
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Forms ─── */}
          <section className="space-y-8" id="forms">
            <SectionHeader
              eyebrow="Forms"
              title="Inputs, Selection, and Toggles"
              description="Covers the common page-builder and app form controls: input, textarea, select, checkbox, radio group, switch, slider, and segmented toggle groups."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Form Controls</CardTitle>
                  <CardDescription>
                    Standard primitives for settings panels, lead capture, filters, and
                    wizard flows.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="component-search">Search</Label>
                    <Input id="component-search" placeholder="Search components, blocks, or widgets" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="component-notes">Textarea</Label>
                    <Textarea
                      id="component-notes"
                      placeholder="Describe the section or widget you want to assemble."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select defaultValue="marketing">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marketing">Marketing Blocks</SelectItem>
                        <SelectItem value="dashboard">Dashboard UI</SelectItem>
                        <SelectItem value="forms">Forms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Input Type</Label>
                    <RadioGroup defaultValue="page">
                      <Label className="flex items-center gap-3 rounded-xl border border-border/60 px-3 py-2">
                        <RadioGroupItem value="page" />
                        Page Builder
                      </Label>
                      <Label className="flex items-center gap-3 rounded-xl border border-border/60 px-3 py-2">
                        <RadioGroupItem value="app" />
                        App UI
                      </Label>
                    </RadioGroup>
                  </div>

                  <Label className="flex items-center gap-3 rounded-xl border border-border/60 px-3 py-2">
                    <Checkbox defaultChecked />
                    Include hover states
                  </Label>

                  <div className="flex items-center justify-between rounded-xl border border-border/60 px-3 py-2">
                    <span className="text-sm font-medium">Enable motion</span>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center justify-between text-sm">
                      <Label>Density</Label>
                      <span className="text-muted-foreground">72%</span>
                    </div>
                    <Slider defaultValue={[72]} max={100} />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Segments and Filters</CardTitle>
                  <CardDescription>
                    Useful for tabs, filters, content modes, toolbar controls, and
                    Elementor-style section options.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ToggleGroup type="single" variant="outline" defaultValue="overview">
                    <ToggleGroupItem value="overview">Overview</ToggleGroupItem>
                    <ToggleGroupItem value="content">Content</ToggleGroupItem>
                    <ToggleGroupItem value="style">Style</ToggleGroupItem>
                    <ToggleGroupItem value="advanced">Advanced</ToggleGroupItem>
                  </ToggleGroup>

                  <div className="flex flex-wrap gap-3">
                    <Toggle variant="outline" defaultPressed>
                      Compact
                    </Toggle>
                    <Toggle variant="outline">Media</Toggle>
                    <Toggle variant="outline">Analytics</Toggle>
                  </div>

                  <IconList
                    items={[
                      {
                        icon: <SearchIcon className="size-4" />,
                        title: "Search input",
                        description: "For quick filtering, command entry, and page-builder sidebars.",
                      },
                      {
                        icon: <Settings2Icon className="size-4" />,
                        title: "Segment controls",
                        description: "For modes, device breakpoints, and layout presets.",
                      },
                      {
                        icon: <Share2Icon className="size-4" />,
                        title: "Checkbox / switch / radio",
                        description: "For feature toggles, publishing states, and consent flows.",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Navigation ─── */}
          <section className="space-y-8" id="navigation">
            <SectionHeader
              eyebrow="Navigation"
              title="Menus, Overlays, and Discoverability"
              description="Menubars, navigation menus, hover cards, popovers, tooltips, command palettes, and pagination give the system the app-shell pieces it was missing."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-[1.05fr_0.95fr]">
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Navigation Primitives</CardTitle>
                  <CardDescription>
                    Multi-level menus for apps, documentation, and content hubs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger>File</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>
                          New Page
                          <MenubarShortcut>⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                          Duplicate
                          <MenubarShortcut>⌘D</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Archive</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger>View</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>Grid</MenubarItem>
                        <MenubarItem>List</MenubarItem>
                        <MenubarItem>Split Preview</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger>Share</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>Invite Team</MenubarItem>
                        <MenubarItem>Publish Preview</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>

                  <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Patterns</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-2 p-2 md:w-[22rem]">
                            <NavigationMenuLink href="#">
                              <span className="font-medium">Landing Pages</span>
                              <span className="text-muted-foreground">
                                Hero, pricing, FAQ, testimonials, and CTA sections.
                              </span>
                            </NavigationMenuLink>
                            <NavigationMenuLink href="#">
                              <span className="font-medium">Dashboards</span>
                              <span className="text-muted-foreground">
                                Stats, filters, tables, tabs, and command patterns.
                              </span>
                            </NavigationMenuLink>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink href="#" className="rounded-md px-4 py-2">
                          Pricing
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink href="#" className="rounded-md px-4 py-2">
                          Examples
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>

                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Popover, Hover, Tooltip, Command</CardTitle>
                  <CardDescription>
                    These patterns cover contextual help, inspector panes, and command
                    palette workflows.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex flex-wrap gap-3">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline">Open Popover</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverHeader>
                          <PopoverTitle>Widget Preset</PopoverTitle>
                          <PopoverDescription>
                            Save this combination of content, style, and advanced settings.
                          </PopoverDescription>
                        </PopoverHeader>
                      </PopoverContent>
                    </Popover>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="outline">Hover Card</Button>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        Use hover cards for profile previews, metadata, or inline help
                        without breaking flow.
                      </HoverCardContent>
                    </HoverCard>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Tooltip</Button>
                      </TooltipTrigger>
                      <TooltipContent sideOffset={6}>
                        Small utility hints and icon-button labels.
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <Button onClick={() => setCommandOpen(true)} className="w-full justify-between">
                    Open Command Palette
                    <CommandIcon className="size-4" />
                  </Button>

                  <Alert>
                    <BellIcon className="size-4" />
                    <AlertTitle>Sidebar integration</AlertTitle>
                    <AlertDescription>
                      The app shell keeps nav pinned while the sidebar only pushes the page
                      content area, not the header.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Data Views ─── */}
          <section className="space-y-8" id="data">
            <SectionHeader
              eyebrow="Data"
              title="Tables, Scroll Regions, Accordions, and Loading States"
              description="The structural side of the system: long-form content, analytics views, FAQ toggles, progress bars, and content placeholders."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Data Views</CardTitle>
                  <CardDescription>
                    Practical for dashboards, CMS screens, and commerce catalogs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Component</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Pricing Card</TableCell>
                        <TableCell>Layout</TableCell>
                        <TableCell>Ready</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Command Palette</TableCell>
                        <TableCell>Primitive</TableCell>
                        <TableCell>Ready</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Glass Panel</TableCell>
                        <TableCell>Effect</TableCell>
                        <TableCell>Ready</TableCell>
                      </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <ScrollArea className="h-44 rounded-2xl border border-border/60 bg-background/60 p-4">
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <p>
                        Scroll areas are useful for inspector panels, release logs, asset
                        lists, or long content blocks inside bounded cards.
                      </p>
                      <p>
                        This lets the gallery show overflow behavior without forcing the
                        whole page to become the scrolling context for every panel.
                      </p>
                      <p>
                        It is also a close match for page-builder sidebars and settings
                        drawers where long forms need bounded height.
                      </p>
                      <p>
                        The same primitive can be reused for notification trays, quick
                        previews, and compact documentation panes.
                      </p>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Disclosure and States</CardTitle>
                  <CardDescription>
                    Accordions, progress, and skeletons cover support content, staged
                    loading, and progressive reveal.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="one">
                      <AccordionTrigger>Accordion item</AccordionTrigger>
                      <AccordionContent>
                        Use this for FAQs, support docs, pricing details, or inspector
                        panels with optional advanced settings.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="two">
                      <AccordionTrigger>Nested content controls</AccordionTrigger>
                      <AccordionContent>
                        This covers the same job as many Elementor toggle and accordion
                        widgets, but with componentized JSX instead of page-builder config.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Implementation progress</span>
                      <span className="text-muted-foreground">84%</span>
                    </div>
                    <Progress value={84} />
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <Skeleton className="h-20 rounded-2xl" />
                    <Skeleton className="h-20 rounded-2xl" />
                    <Skeleton className="h-8 rounded-xl md:col-span-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Layout Blocks ─── */}
          <section className="space-y-8" id="blocks">
            <SectionHeader
              eyebrow="Blocks"
              title="Layout Blocks Inspired by shadcn UI Kit and Elementor"
              description="These are original local JSX components built with cn, variants, and shadcn primitives to cover the higher-level sections and widgets people expect from page-builder ecosystems."
            />

            <FeatureGrid>
              <FeatureCard
                tone="accent"
                badge="Icon Box"
                icon={<Layers3Icon className="size-5" />}
                title="Feature / Icon Cards"
                description="Covers the same job as icon boxes, image boxes, service cards, and marketing feature lists."
              />
              <FeatureCard
                badge="Counter"
                icon={<ChartNoAxesColumnIcon className="size-5" />}
                title="Stats and KPI Cards"
                description="For counters, metrics, progress, and headline numbers across dashboards and landing pages."
              />
              <FeatureCard
                badge="CTA"
                icon={<RocketIcon className="size-5" />}
                title="Call To Action Banners"
                description="For signup pushes, campaign banners, upgrade rails, and hero follow-up sections."
              />
            </FeatureGrid>

            <LogoCloud logos={logos} />

            <PricingGrid>
              {pricingTiers.map((tier) => (
                <PricingCard key={tier.name} {...tier} />
              ))}
            </PricingGrid>

            <TestimonialGrid>
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </TestimonialGrid>

            <TeamGrid>
              {team.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </TeamGrid>

            <PortfolioGrid>
              {portfolio.map((item) => (
                <PortfolioCard key={item.title} {...item} />
              ))}
            </PortfolioGrid>

            <FaqSection items={faqItems} />

            <CtaBanner
              title="Assemble sections like a page builder, but keep them as real components."
              description="That means props, variants, composition, and source-controlled JSX instead of a config-only editing surface."
              primaryAction={
                <Button>
                  Browse Blocks
                  <ArrowRightIcon className="size-4" />
                </Button>
              }
              secondaryAction={<Button variant="outline">Read the docs</Button>}
            />
          </section>

          {/* ═══════════════════════════════════════════════════════════════════════
              NEW SECTIONS: Payment, Products, Auth, Charts, Tasks, Users, etc.
          ═══════════════════════════════════════════════════════════════════════ */}

          {/* ─── Payment Methods & Checkout ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="payment">
            {/* Gradient background for commerce */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-ctp-green/10 via-ctp-teal/5 to-ctp-sapphire/10 dark:from-ctp-green/8 dark:via-ctp-teal/5 dark:to-ctp-sapphire/8" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(166,227,161,0.08),transparent_70%)]" />
              <div className="absolute inset-0 bg-background/70" />
            </div>

            <SectionHeader
              eyebrow="Commerce"
              title="Payment Methods & Checkout"
              description="Payment cards, checkout flows, and transaction confirmations. All variations use glass accents for premium surfaces."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Payment Card 1: Basic Card Display */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Payment Method</CardTitle>
                    <Badge variant="outline" className="border-ctp-green/40 text-ctp-green">Default</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-ctp-blue to-ctp-mauve">
                      <CreditCardIcon className="size-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/26</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm" className="text-ctp-red">Remove</Button>
                </CardFooter>
              </Card>

              {/* Payment Card 2: Add New Card Form */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle className="text-base">Add Payment Method</CardTitle>
                  <CardDescription>Enter your card details securely</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Card Number</Label>
                    <Input placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>Expiry</Label>
                      <Input placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label>CVC</Label>
                      <Input placeholder="123" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button>
                    <PlusIcon className="mr-2 size-4" />
                    Add Card
                  </Button>
                </CardFooter>
              </Card>

              {/* Payment Card 3: Wallet Style */}
              <GlassCard className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-ctp-peach/20">
                      <WalletIcon className="size-5 text-ctp-peach" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Apple Pay</p>
                      <p className="text-xs text-muted-foreground">Connected</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-ctp-blue/20">
                      <CreditCardIcon className="size-5 text-ctp-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Google Pay</p>
                      <p className="text-xs text-muted-foreground">Not connected</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </GlassCard>

              {/* Payment Card 4: Checkout Summary */}
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card shadow-lg md:col-span-2 xl:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <ShoppingCartIcon className="size-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>$149.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-ctp-green">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>$11.92</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$160.92</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <LockIcon className="mr-2 size-4" />
                    Checkout
                  </Button>
                </CardFooter>
              </Card>

              {/* Payment Card 5: Transaction Success */}
              <Card className="border-ctp-green/30 bg-gradient-to-br from-ctp-green/10 via-card to-card">
                <CardContent className="flex flex-col items-center py-8 text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-ctp-green/20">
                    <CheckCircle2Icon className="size-8 text-ctp-green" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Payment Successful</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your order #12345 has been confirmed
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">View Receipt</Button>
                    <Button size="sm">Track Order</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Product Cards ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="products">
            {/* Subtle product photography-inspired gradient */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-ctp-surface0/80 via-ctp-base to-ctp-surface1/60" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,224,220,0.1),transparent_60%)]" />
              <div className="absolute bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
            </div>

            <SectionHeader
              eyebrow="Commerce"
              title="Product Cards"
              description="Multiple product card variations for e-commerce: basic, featured, with discounts, ratings, countdown timers, and quick actions."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {/* Product 1: Basic */}
              <Card className="group overflow-hidden border-border/60 bg-card/90">
                <div className="relative h-48 bg-gradient-to-br from-ctp-surface0 to-ctp-surface1">
                  <div className="flex h-full items-center justify-center">
                    <PackageIcon className="size-16 text-muted-foreground/30" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Minimal Desk Lamp</CardTitle>
                  <CardDescription className="line-clamp-2">
                    Modern LED desk lamp with adjustable brightness
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-between">
                  <span className="text-lg font-bold">$49.99</span>
                  <Button size="sm">Add to Cart</Button>
                </CardFooter>
              </Card>

              {/* Product 2: With Discount Badge */}
              <Card className="group overflow-hidden border-border/60 bg-card/90">
                <div className="relative h-48 bg-gradient-to-br from-ctp-surface0 to-ctp-surface1">
                  <Badge className="absolute left-3 top-3 bg-ctp-red text-white">-30%</Badge>
                  <div className="flex h-full items-center justify-center">
                    <PackageIcon className="size-16 text-muted-foreground/30" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Wireless Charger Pro</CardTitle>
                  <CardDescription className="line-clamp-2">
                    Fast wireless charging pad for all devices
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">$34.99</span>
                    <span className="text-sm text-muted-foreground line-through">$49.99</span>
                  </div>
                  <Button size="sm">Add to Cart</Button>
                </CardFooter>
              </Card>

              {/* Product 3: With Ratings */}
              <Card className="group overflow-hidden border-border/60 bg-card/90">
                <div className="relative h-48 bg-gradient-to-br from-ctp-surface0 to-ctp-surface1">
                  <div className="flex h-full items-center justify-center">
                    <PackageIcon className="size-16 text-muted-foreground/30" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-1 text-ctp-yellow">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="size-4 fill-current" />
                    ))}
                    <span className="ml-1 text-sm text-muted-foreground">(128)</span>
                  </div>
                  <CardTitle className="text-base">Ergonomic Mouse</CardTitle>
                </CardHeader>
                <CardFooter className="justify-between">
                  <span className="text-lg font-bold">$79.99</span>
                  <Button size="sm">Add to Cart</Button>
                </CardFooter>
              </Card>

              {/* Product 4: Featured / Premium */}
              <Card className="group overflow-hidden border-ctp-mauve/40 bg-gradient-to-br from-ctp-mauve/10 via-card to-card shadow-lg">
                <div className="relative h-48 bg-gradient-to-br from-ctp-mauve/20 to-ctp-pink/20">
                  <Badge className="absolute left-3 top-3 bg-ctp-mauve text-white">Featured</Badge>
                  <div className="absolute right-3 top-3">
                    <Button variant="ghost" size="icon" className="size-8 rounded-full bg-white/80 text-ctp-red dark:bg-black/50">
                      <HeartIcon className="size-4" />
                    </Button>
                  </div>
                  <div className="flex h-full items-center justify-center">
                    <PackageIcon className="size-16 text-ctp-mauve/50" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Premium Headphones</CardTitle>
                  <CardDescription className="line-clamp-2">
                    Active noise cancellation with 40hr battery
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-between">
                  <span className="text-lg font-bold">$299.99</span>
                  <Button size="sm" className="bg-ctp-mauve hover:bg-ctp-mauve/90">Add to Cart</Button>
                </CardFooter>
              </Card>

              {/* Product 5: With Countdown Timer */}
              <Card className="group overflow-hidden border-ctp-peach/40 bg-card/90">
                <div className="relative h-48 bg-gradient-to-br from-ctp-surface0 to-ctp-surface1">
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                    <Badge className="bg-ctp-peach text-white">Flash Sale</Badge>
                    <div className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white">
                      <ClockIcon className="size-3" />
                      <span>02:45:30</span>
                    </div>
                  </div>
                  <div className="flex h-full items-center justify-center">
                    <PackageIcon className="size-16 text-muted-foreground/30" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Smart Watch Ultra</CardTitle>
                </CardHeader>
                <CardFooter className="justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-ctp-peach">$199.99</span>
                    <span className="text-sm text-muted-foreground line-through">$349.99</span>
                  </div>
                  <Button size="sm">Buy Now</Button>
                </CardFooter>
              </Card>

              {/* Product 6: Out of Stock */}
              <Card className="group overflow-hidden border-border/60 bg-card/90 opacity-75">
                <div className="relative h-48 bg-gradient-to-br from-ctp-surface0 to-ctp-surface1">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Badge variant="secondary" className="bg-black/80 text-white">Out of Stock</Badge>
                  </div>
                  <div className="flex h-full items-center justify-center">
                    <PackageIcon className="size-16 text-muted-foreground/30" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Limited Edition Speaker</CardTitle>
                </CardHeader>
                <CardFooter className="justify-between">
                  <span className="text-lg font-bold">$129.99</span>
                  <Button size="sm" disabled>Notify Me</Button>
                </CardFooter>
              </Card>

              {/* Product 7: Quick Add Hover */}
              <Card className="group relative overflow-hidden border-border/60 bg-card/90">
                <div className="relative h-48 bg-gradient-to-br from-ctp-surface0 to-ctp-surface1">
                  <div className="flex h-full items-center justify-center">
                    <PackageIcon className="size-16 text-muted-foreground/30" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform group-hover:translate-y-0">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="flex-1">Quick View</Button>
                      <Button size="sm" className="flex-1">Add to Cart</Button>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Portable SSD 1TB</CardTitle>
                </CardHeader>
                <CardFooter className="justify-between">
                  <span className="text-lg font-bold">$89.99</span>
                  <Badge variant="secondary">New</Badge>
                </CardFooter>
              </Card>

              {/* Product 8: Compact Variant */}
              <Card className="flex flex-row items-center gap-3 border-border/60 bg-card/90 p-3 sm:gap-4 sm:p-4">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-ctp-surface0 to-ctp-surface1 sm:size-20 sm:rounded-xl">
                  <PackageIcon className="size-6 text-muted-foreground/30 sm:size-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-sm font-semibold sm:text-base">USB-C Hub</h4>
                  <p className="text-xs text-muted-foreground sm:text-sm">7-in-1 adapter</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold sm:text-base">$59.99</span>
                    <Button size="sm" variant="ghost">
                      <PlusIcon className="size-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* ─── Authentication Forms ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="auth">
            {/* Login-inspired background with gradient + subtle grid pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-ctp-mauve/15 via-ctp-lavender/10 to-ctp-blue/15 dark:from-ctp-mauve/10 dark:via-ctp-lavender/8 dark:to-ctp-blue/10" />
              <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cba6f7' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute inset-0 bg-background/75 backdrop-blur-[0.5px]" />
            </div>

            <SectionHeader
              eyebrow="Auth"
              title="Authentication Forms"
              description="Login, signup, password reset, 2FA, social login, and magic link flows. Clean form patterns for onboarding and security."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Auth 1: Login */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <UserIcon className="size-6 text-primary" />
                  </div>
                  <CardTitle>Welcome Back</CardTitle>
                  <CardDescription>Sign in to your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="name@example.com" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Password</Label>
                      <Button variant="link" className="h-auto p-0 text-xs">Forgot?</Button>
                    </div>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <Label className="flex items-center gap-2 text-sm">
                    <Checkbox />
                    Remember me
                  </Label>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button className="w-full">Sign In</Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account? <Button variant="link" className="h-auto p-0">Sign up</Button>
                  </p>
                </CardFooter>
              </Card>

              {/* Auth 2: Sign Up */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-ctp-green/10">
                    <UserPlusIcon className="size-6 text-ctp-green" />
                  </div>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>Get started for free</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="name@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Password</Label>
                    <Input type="password" placeholder="Create a password" />
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button className="w-full bg-ctp-green hover:bg-ctp-green/90">Create Account</Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By signing up, you agree to our Terms and Privacy Policy
                  </p>
                </CardFooter>
              </Card>

              {/* Auth 3: Password Reset */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-ctp-yellow/10">
                    <LockIcon className="size-6 text-ctp-yellow" />
                  </div>
                  <CardTitle>Reset Password</CardTitle>
                  <CardDescription>We&apos;ll send you a reset link</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input type="email" placeholder="name@example.com" />
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button className="w-full">Send Reset Link</Button>
                  <Button variant="ghost" className="w-full">
                    <ArrowRightIcon className="mr-2 size-4 rotate-180" />
                    Back to Login
                  </Button>
                </CardFooter>
              </Card>

              {/* Auth 4: 2FA / OTP */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-ctp-mauve/10">
                    <ShieldCheckIcon className="size-6 text-ctp-mauve" />
                  </div>
                  <CardTitle>Two-Factor Auth</CardTitle>
                  <CardDescription>Enter the 6-digit code from your app</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-1.5 sm:gap-2">
                    {[...Array(6)].map((_, i) => (
                      <Input
                        key={i}
                        className="size-10 text-center text-base font-bold sm:size-12 sm:text-lg"
                        maxLength={1}
                      />
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button className="w-full bg-ctp-mauve hover:bg-ctp-mauve/90">Verify</Button>
                  <Button variant="link" className="text-sm">
                    Didn&apos;t receive a code? Resend
                  </Button>
                </CardFooter>
              </Card>

              {/* Auth 5: Social Login */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader className="text-center">
                  <CardTitle>Quick Sign In</CardTitle>
                  <CardDescription>Continue with your social account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <svg className="size-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Continue with GitHub
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Continue with X
                  </Button>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full items-center gap-3">
                    <Separator className="flex-1" />
                    <span className="text-xs text-muted-foreground">or</span>
                    <Separator className="flex-1" />
                  </div>
                </CardFooter>
              </Card>

              {/* Auth 6: Magic Link */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-ctp-sapphire/10">
                    <MailIcon className="size-6 text-ctp-sapphire" />
                  </div>
                  <CardTitle>Magic Link</CardTitle>
                  <CardDescription>Sign in without a password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input type="email" placeholder="name@example.com" />
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button className="w-full bg-ctp-sapphire hover:bg-ctp-sapphire/90">
                    <ZapIcon className="mr-2 size-4" />
                    Send Magic Link
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    We&apos;ll email you a link to sign in instantly
                  </p>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* ─── Charts & Analytics ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="charts">
            {/* Data visualization grid background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-ctp-surface0/50 via-ctp-base to-ctp-mantle/30" />
              <div 
                className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
                style={{
                  backgroundImage: `linear-gradient(rgba(137,180,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(137,180,250,0.5) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(137,180,250,0.08),transparent_60%),radial-gradient(ellipse_at_top_left,rgba(166,227,161,0.08),transparent_60%)]" />
              <div className="absolute inset-0 bg-background/60" />
            </div>

            <SectionHeader
              eyebrow="Analytics"
              title="Charts & Analytics"
              description="Dashboard metrics, KPI cards, and chart placeholders for analytics interfaces. Uses Catppuccin chart colors."
            />

            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
              {/* Metric Cards */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardDescription>Total Revenue</CardDescription>
                  <CircleDollarSignIcon className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$45,231.89</div>
                  <p className="text-xs text-ctp-green">+20.1% from last month</p>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/90">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardDescription>Active Users</CardDescription>
                  <UsersIcon className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">+2,350</div>
                  <p className="text-xs text-ctp-green">+180.1% from last month</p>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/90">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardDescription>Sales</CardDescription>
                  <CreditCardIcon className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">+12,234</div>
                  <p className="text-xs text-ctp-green">+19% from last month</p>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/90">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardDescription>Conversion</CardDescription>
                  <PieChartIcon className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">4.5%</div>
                  <p className="text-xs text-ctp-red">-2.3% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
              {/* Line Chart Placeholder */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Revenue Over Time</CardTitle>
                  <CardDescription>Monthly revenue for the past year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-48 items-end gap-1 sm:h-64 sm:gap-2">
                    {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 100].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-ctp-blue to-ctp-sapphire transition-all hover:from-ctp-mauve hover:to-ctp-pink"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>Jun</span>
                    <span>Sep</span>
                    <span>Dec</span>
                  </div>
                </CardContent>
              </Card>

              {/* Pie Chart Placeholder */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Where your visitors come from</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <div className="relative size-48">
                      <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="20" className="text-ctp-blue" strokeDasharray="125.6 251.2" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="20" className="text-ctp-green" strokeDasharray="75.4 251.2" strokeDashoffset="-125.6" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="20" className="text-ctp-mauve" strokeDasharray="37.7 251.2" strokeDashoffset="-201" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="20" className="text-ctp-peach" strokeDasharray="12.6 251.2" strokeDashoffset="-238.7" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-ctp-blue" />
                      <span className="text-sm">Direct (50%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-ctp-green" />
                      <span className="text-sm">Organic (30%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-ctp-mauve" />
                      <span className="text-sm">Social (15%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-ctp-peach" />
                      <span className="text-sm">Other (5%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Metrics */}
              <Card className="border-border/60 bg-card/90 xl:col-span-2">
                <CardHeader>
                  <CardTitle>Goal Progress</CardTitle>
                  <CardDescription>Track your quarterly objectives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Revenue Target</span>
                      <span className="text-muted-foreground">$45K / $60K</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>New Customers</span>
                      <span className="text-muted-foreground">892 / 1000</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Active Subscriptions</span>
                      <span className="text-muted-foreground">3,420 / 5000</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Support Tickets Resolved</span>
                      <span className="text-muted-foreground">156 / 160</span>
                    </div>
                    <Progress value={97} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Task/Card Management ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="tasks">
            {/* Productivity-focused clean gradient */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-ctp-lavender/8 via-ctp-surface0/40 to-ctp-base" />
              <div 
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(rgba(180,190,254,0.4) 1px, transparent 1px)`,
                  backgroundSize: '100% 60px',
                }}
              />
              <div className="absolute inset-0 bg-background/60" />
            </div>

            <SectionHeader
              eyebrow="Productivity"
              title="Task & Card Management"
              description="Kanban cards, task items, priority indicators, status badges, and drag handles for project management interfaces."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Task List */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Today&apos;s Tasks</CardTitle>
                    <Badge variant="secondary">4 tasks</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 p-3">
                    <Checkbox />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Review design mockups</p>
                      <p className="text-xs text-muted-foreground">Due in 2 hours</p>
                    </div>
                    <Badge variant="outline" className="border-ctp-red/40 text-ctp-red">High</Badge>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 p-3">
                    <Checkbox />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Update API documentation</p>
                      <p className="text-xs text-muted-foreground">Due today</p>
                    </div>
                    <Badge variant="outline" className="border-ctp-yellow/40 text-ctp-yellow">Medium</Badge>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 p-3 opacity-60">
                    <Checkbox defaultChecked />
                    <div className="flex-1">
                      <p className="text-sm font-medium line-through">Deploy staging build</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                    <Badge variant="secondary">Done</Badge>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 p-3">
                    <Checkbox />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Code review PR #234</p>
                      <p className="text-xs text-muted-foreground">Due tomorrow</p>
                    </div>
                    <Badge variant="outline" className="border-ctp-green/40 text-ctp-green">Low</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Kanban Column */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-ctp-blue" />
                      <CardTitle className="text-base">In Progress</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" className="size-8">
                      <PlusIcon className="size-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="cursor-grab rounded-xl border border-border/60 bg-background/60 p-3 transition-shadow hover:shadow-md active:cursor-grabbing">
                    <div className="mb-2 flex items-center gap-2">
                      <GripVerticalIcon className="size-4 text-muted-foreground" />
                      <Badge className="bg-ctp-mauve/20 text-ctp-mauve">Feature</Badge>
                    </div>
                    <p className="text-sm font-medium">Implement dark mode toggle</p>
                    <div className="mt-3 flex items-center justify-between">
                      <AvatarGroup>
                        <Avatar size="sm">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar size="sm">
                          <AvatarFallback>MK</AvatarFallback>
                        </Avatar>
                      </AvatarGroup>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MessageCircleIcon className="size-3" />
                        <span>3</span>
                      </div>
                    </div>
                  </div>
                  <div className="cursor-grab rounded-xl border border-border/60 bg-background/60 p-3 transition-shadow hover:shadow-md">
                    <div className="mb-2 flex items-center gap-2">
                      <GripVerticalIcon className="size-4 text-muted-foreground" />
                      <Badge className="bg-ctp-red/20 text-ctp-red">Bug</Badge>
                    </div>
                    <p className="text-sm font-medium">Fix mobile nav overflow</p>
                    <div className="mt-3 flex items-center justify-between">
                      <Avatar size="sm">
                        <AvatarFallback>AL</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MessageCircleIcon className="size-3" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Card */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-ctp-green/20 text-ctp-green">Active</Badge>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon className="size-4" />
                    </Button>
                  </div>
                  <CardTitle className="mt-2">Website Redesign</CardTitle>
                  <CardDescription>Complete overhaul of the marketing site</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="text-muted-foreground">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between">
                    <AvatarGroup>
                      <Avatar size="sm">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar size="sm">
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <Avatar size="sm">
                        <AvatarFallback>AL</AvatarFallback>
                      </Avatar>
                      <AvatarGroupCount>+2</AvatarGroupCount>
                    </AvatarGroup>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="size-4" />
                        <span>Mar 30</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sprint Overview */}
              <Card className="border-border/60 bg-card/90 md:col-span-2 xl:col-span-1">
                <CardHeader>
                  <CardTitle className="text-base">Sprint 24 Overview</CardTitle>
                  <CardDescription>Feb 26 - Mar 11</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="rounded-xl bg-ctp-surface0/50 p-3">
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-xs text-muted-foreground">Total</p>
                    </div>
                    <div className="rounded-xl bg-ctp-green/10 p-3">
                      <p className="text-2xl font-bold text-ctp-green">5</p>
                      <p className="text-xs text-muted-foreground">Done</p>
                    </div>
                    <div className="rounded-xl bg-ctp-blue/10 p-3">
                      <p className="text-2xl font-bold text-ctp-blue">4</p>
                      <p className="text-xs text-muted-foreground">Active</p>
                    </div>
                    <div className="rounded-xl bg-ctp-overlay0/30 p-3">
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-xs text-muted-foreground">Todo</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="size-2 rounded-full bg-ctp-green" />
                      <span className="flex-1">Completed</span>
                      <span className="font-medium">42%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="size-2 rounded-full bg-ctp-blue" />
                      <span className="flex-1">In Progress</span>
                      <span className="font-medium">33%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="size-2 rounded-full bg-ctp-overlay0" />
                      <span className="flex-1">Backlog</span>
                      <span className="font-medium">25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── User Menus & Profiles ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="profiles">
            {/* User/profile soft gradient */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-ctp-pink/8 via-ctp-flamingo/5 to-ctp-rosewater/8 dark:from-ctp-pink/6 dark:via-ctp-flamingo/4 dark:to-ctp-rosewater/6" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,194,231,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-background/70" />
            </div>

            <SectionHeader
              eyebrow="Users"
              title="User Menus & Profiles"
              description="Profile dropdowns, settings menus, user cards, and avatars with status indicators for account-related interfaces."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Profile Card */}
              <Card className="border-border/60 bg-card/90">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="size-20">
                      <AvatarFallback className="text-2xl">JD</AvatarFallback>
                      <AvatarBadge className="size-5 bg-ctp-green" />
                    </Avatar>
                    <h3 className="mt-4 text-lg font-semibold">Jane Doe</h3>
                    <p className="text-sm text-muted-foreground">Product Designer</p>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm">Message</Button>
                      <Button size="sm" variant="outline">Follow</Button>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold">234</p>
                      <p className="text-xs text-muted-foreground">Posts</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">1.2K</p>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">156</p>
                      <p className="text-xs text-muted-foreground">Following</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Menu Dropdown */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle className="text-base">Account Menu</CardTitle>
                  <CardDescription>Typical user dropdown content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1">
                  <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Jane Doe</p>
                      <p className="text-sm text-muted-foreground">jane@example.com</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <UserIcon className="size-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <SettingsIcon className="size-4" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <CreditCardIcon className="size-4" />
                    Billing
                  </Button>
                  <Separator />
                  <Button variant="ghost" className="w-full justify-start gap-2 text-ctp-red">
                    <LogOutIcon className="size-4" />
                    Sign Out
                  </Button>
                </CardContent>
              </Card>

              {/* Avatar with Status Variants */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle className="text-base">Avatar Status</CardTitle>
                  <CardDescription>Online, away, busy, offline indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <AvatarFallback>ON</AvatarFallback>
                      <AvatarBadge className="bg-ctp-green" />
                    </Avatar>
                    <div>
                      <p className="font-medium">Online</p>
                      <p className="text-sm text-muted-foreground">Available to chat</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <AvatarFallback>AW</AvatarFallback>
                      <AvatarBadge className="bg-ctp-yellow" />
                    </Avatar>
                    <div>
                      <p className="font-medium">Away</p>
                      <p className="text-sm text-muted-foreground">Back in 15 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <AvatarFallback>BY</AvatarFallback>
                      <AvatarBadge className="bg-ctp-red" />
                    </Avatar>
                    <div>
                      <p className="font-medium">Busy</p>
                      <p className="text-sm text-muted-foreground">Do not disturb</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <AvatarFallback>OF</AvatarFallback>
                      <AvatarBadge className="bg-ctp-overlay0" />
                    </Avatar>
                    <div>
                      <p className="font-medium">Offline</p>
                      <p className="text-sm text-muted-foreground">Last seen 2h ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Settings Panel */}
              <Card className="border-border/60 bg-card/90 md:col-span-2 xl:col-span-1">
                <CardHeader>
                  <CardTitle className="text-base">Notification Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                        <MailIcon className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">Receive email notifications</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-ctp-mauve/10">
                        <BellIcon className="size-5 text-ctp-mauve" />
                      </div>
                      <div>
                        <p className="font-medium">Push</p>
                        <p className="text-sm text-muted-foreground">Browser notifications</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-ctp-green/10">
                        <SmartphoneIcon className="size-5 text-ctp-green" />
                      </div>
                      <div>
                        <p className="font-medium">SMS</p>
                        <p className="text-sm text-muted-foreground">Text message alerts</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              {/* Team Members List */}
              <Card className="border-border/60 bg-card/90 xl:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Team Members</CardTitle>
                    <Button size="sm">
                      <UserPlusIcon className="mr-2 size-4" />
                      Invite
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Member</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar size="sm">
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Jane Doe</p>
                              <p className="text-xs text-muted-foreground">jane@example.com</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Admin</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-ctp-green/20 text-ctp-green">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="size-8">
                            <MoreHorizontalIcon className="size-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar size="sm">
                              <AvatarFallback>MK</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Mike King</p>
                              <p className="text-xs text-muted-foreground">mike@example.com</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Editor</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-ctp-green/20 text-ctp-green">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="size-8">
                            <MoreHorizontalIcon className="size-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar size="sm">
                              <AvatarFallback>AL</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Alice Lee</p>
                              <p className="text-xs text-muted-foreground">alice@example.com</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Viewer</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Pending</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="size-8">
                            <MoreHorizontalIcon className="size-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Welcome/Onboarding ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="welcome">
            {/* Celebratory gradient for onboarding */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 animate-gradient-shift-slow bg-[length:300%_300%] bg-gradient-to-br from-ctp-peach/15 via-ctp-yellow/10 to-ctp-green/15 dark:from-ctp-peach/10 dark:via-ctp-yellow/8 dark:to-ctp-green/10" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,179,135,0.12),transparent_60%)]" />
              <div className="absolute inset-0 bg-background/65" />
            </div>

            <SectionHeader
              eyebrow="Onboarding"
              title="Welcome & Onboarding"
              description="Welcome cards, hero banners, feature announcements, and empty states for first-run experiences."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              {/* Welcome Hero */}
              <GlassCard className="md:col-span-2">
                <div className="flex flex-col items-center py-6 text-center sm:py-8 md:py-12">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-ctp-blue to-ctp-mauve sm:size-20">
                    <SparklesIcon className="size-8 text-white sm:size-10" />
                  </div>
                  <h2 className="text-2xl font-black text-foreground sm:text-3xl">Welcome to Glass UI</h2>
                  <p className="mt-3 max-w-xl px-2 text-sm text-muted-foreground sm:px-0 sm:text-base">
                    You&apos;re all set up and ready to start building beautiful interfaces.
                    Let&apos;s explore what you can create.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <GlassButton variant="cta">Get Started</GlassButton>
                    <GlassButton variant="default">Watch Tutorial</GlassButton>
                  </div>
                </div>
              </GlassCard>

              {/* Feature Announcement */}
              <Card className="border-ctp-blue/30 bg-gradient-to-br from-ctp-blue/10 via-card to-card">
                <CardHeader>
                  <Badge className="w-fit bg-ctp-blue text-white">New Feature</Badge>
                  <CardTitle className="mt-2">Dark Mode Just Got Better</CardTitle>
                  <CardDescription>
                    Introducing system-aware theme switching with smooth transitions
                    between light and dark modes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Button>Try It Now</Button>
                    <Button variant="ghost">Learn More</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Getting Started Checklist */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle className="text-base">Getting Started</CardTitle>
                  <CardDescription>Complete these steps to set up your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 rounded-xl bg-ctp-green/10 p-3">
                    <div className="flex size-6 items-center justify-center rounded-full bg-ctp-green">
                      <CheckIcon className="size-4 text-white" />
                    </div>
                    <span className="flex-1 text-sm">Create your account</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-ctp-green/10 p-3">
                    <div className="flex size-6 items-center justify-center rounded-full bg-ctp-green">
                      <CheckIcon className="size-4 text-white" />
                    </div>
                    <span className="flex-1 text-sm">Verify your email</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-3">
                    <div className="flex size-6 items-center justify-center rounded-full border-2 border-primary">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <span className="flex-1 text-sm font-medium">Set up your workspace</span>
                    <ArrowRightIcon className="size-4 text-primary" />
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-border/60 p-3">
                    <div className="flex size-6 items-center justify-center rounded-full border-2 border-muted-foreground/30">
                      <span className="text-xs text-muted-foreground">4</span>
                    </div>
                    <span className="flex-1 text-sm text-muted-foreground">Invite team members</span>
                  </div>
                </CardContent>
              </Card>

              {/* Empty State - Projects */}
              <Card className="border-border/60 bg-card/90">
                <CardContent className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
                    <FolderKanbanIcon className="size-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">No Projects Yet</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Get started by creating your first project. It only takes a minute.
                  </p>
                  <Button className="mt-4">
                    <PlusIcon className="mr-2 size-4" />
                    Create Project
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions Grid */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                      <PlusIcon className="size-5" />
                      <span className="text-sm">New Project</span>
                    </Button>
                    <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                      <UserPlusIcon className="size-5" />
                      <span className="text-sm">Invite Team</span>
                    </Button>
                    <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                      <LinkIcon className="size-5" />
                      <span className="text-sm">Integrations</span>
                    </Button>
                    <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                      <BookOpenIcon className="size-5" />
                      <span className="text-sm">Read Docs</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Commerce Flows ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="commerce">
            {/* Commerce gradient with subtle depth */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-ctp-blue/10 via-transparent to-ctp-mauve/10 dark:from-ctp-blue/8 dark:to-ctp-mauve/8" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(137,180,250,0.08),transparent_60%)]" />
              <div className="absolute inset-0 bg-background/70" />
            </div>

            <SectionHeader
              eyebrow="Commerce"
              title="Commerce Flows"
              description="Product pages, shipping options, refund flows, and order tracking for e-commerce experiences."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Shipping Options */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle className="text-base">Shipping Method</CardTitle>
                  <CardDescription>Choose your preferred delivery option</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="standard" className="space-y-3">
                    <Label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-border/60 p-4 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="standard" />
                        <div>
                          <p className="font-medium">Standard Shipping</p>
                          <p className="text-sm text-muted-foreground">5-7 business days</p>
                        </div>
                      </div>
                      <span className="font-semibold">$4.99</span>
                    </Label>
                    <Label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-border/60 p-4 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="express" />
                        <div>
                          <p className="font-medium">Express Shipping</p>
                          <p className="text-sm text-muted-foreground">2-3 business days</p>
                        </div>
                      </div>
                      <span className="font-semibold">$9.99</span>
                    </Label>
                    <Label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-ctp-mauve/40 bg-ctp-mauve/5 p-4 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="overnight" />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">Overnight</p>
                            <Badge className="bg-ctp-mauve text-white">Fastest</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Next business day</p>
                        </div>
                      </div>
                      <span className="font-semibold">$19.99</span>
                    </Label>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Order Tracking */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">Order #12345</CardTitle>
                      <CardDescription>Estimated delivery: Mar 25</CardDescription>
                    </div>
                    <Badge className="bg-ctp-blue/20 text-ctp-blue">In Transit</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative space-y-4 pl-6">
                    <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-0.5 bg-ctp-green" />
                    <div className="relative flex gap-3">
                      <div className="absolute -left-6 top-0.5 size-4 rounded-full bg-ctp-green" />
                      <div>
                        <p className="font-medium">Order Confirmed</p>
                        <p className="text-sm text-muted-foreground">Mar 20, 10:30 AM</p>
                      </div>
                    </div>
                    <div className="relative flex gap-3">
                      <div className="absolute -left-6 top-0.5 size-4 rounded-full bg-ctp-green" />
                      <div>
                        <p className="font-medium">Shipped</p>
                        <p className="text-sm text-muted-foreground">Mar 21, 2:15 PM</p>
                      </div>
                    </div>
                    <div className="relative flex gap-3">
                      <div className="absolute -left-6 top-0.5 size-4 animate-pulse rounded-full bg-ctp-blue ring-4 ring-ctp-blue/20" />
                      <div>
                        <p className="font-medium">In Transit</p>
                        <p className="text-sm text-muted-foreground">Currently in Atlanta, GA</p>
                      </div>
                    </div>
                    <div className="relative flex gap-3 opacity-50">
                      <div className="absolute -left-6 top-0.5 size-4 rounded-full border-2 border-muted-foreground/30 bg-background" />
                      <div>
                        <p className="font-medium">Delivered</p>
                        <p className="text-sm text-muted-foreground">Pending</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Return/Refund Request */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle className="text-base">Request Return</CardTitle>
                  <CardDescription>We&apos;ll process your refund within 5 days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 rounded-xl border border-border/60 p-3">
                    <div className="flex size-16 items-center justify-center rounded-lg bg-muted">
                      <PackageIcon className="size-8 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Wireless Charger Pro</p>
                      <p className="text-sm text-muted-foreground">Qty: 1 · $34.99</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Reason for return</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="defective">Item is defective</SelectItem>
                        <SelectItem value="wrong">Wrong item received</SelectItem>
                        <SelectItem value="change">Changed my mind</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Additional details (optional)</Label>
                    <Textarea placeholder="Tell us more about the issue..." />
                  </div>
                </CardContent>
                <CardFooter className="justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Submit Request</Button>
                </CardFooter>
              </Card>

              {/* Cart Item */}
              <Card className="border-border/60 bg-card/90 md:col-span-2 xl:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <ShoppingCartIcon className="size-5" />
                    Cart Items
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <PackageIcon className="size-8 text-muted-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">Premium Headphones</p>
                      <p className="text-sm text-muted-foreground">Color: Black</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="size-8">-</Button>
                      <span className="w-8 text-center font-medium">1</span>
                      <Button variant="outline" size="icon" className="size-8">+</Button>
                    </div>
                    <p className="font-semibold">$299.99</p>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <PackageIcon className="size-8 text-muted-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">USB-C Hub</p>
                      <p className="text-sm text-muted-foreground">7-in-1</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="size-8">-</Button>
                      <span className="w-8 text-center font-medium">2</span>
                      <Button variant="outline" size="icon" className="size-8">+</Button>
                    </div>
                    <p className="font-semibold">$119.98</p>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Separator />
                  <div className="flex w-full justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>$419.97</span>
                  </div>
                </CardFooter>
              </Card>

              {/* Promo Code Input */}
              <Card className="border-border/60 bg-card/90 xl:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base">Apply Discount</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <TagIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Enter promo code" className="pl-10" />
                    </div>
                    <Button>Apply</Button>
                  </div>
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-ctp-green/10 p-3">
                    <CheckCircle2Icon className="size-5 text-ctp-green" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-ctp-green">SAVE20 applied!</p>
                      <p className="text-xs text-muted-foreground">20% off your order</p>
                    </div>
                    <Button variant="ghost" size="icon" className="size-8 text-muted-foreground">
                      <XIcon className="size-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Chat/Messaging ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="chat">
            {/* Chat-inspired background with subtle bubbles pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-ctp-sapphire/10 via-ctp-sky/5 to-ctp-teal/10 dark:from-ctp-sapphire/8 dark:via-ctp-sky/5 dark:to-ctp-teal/8" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(116,199,236,0.1),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(148,226,213,0.1),transparent_40%)]" />
              <div 
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='%2389b4fa' fill-opacity='0.3'/%3E%3Ccircle cx='75' cy='75' r='15' fill='%2394e2d5' fill-opacity='0.3'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                }}
              />
              <div className="absolute inset-0 bg-background/70" />
            </div>

            <SectionHeader
              eyebrow="Communication"
              title="Chat & Messaging"
              description="Message bubbles, chat threads, notification cards, and conversation interfaces."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Chat Thread */}
              <Card className="border-border/60 bg-card/90 md:col-span-2 xl:col-span-2">
                <CardHeader className="flex-row items-center gap-3 space-y-0">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                    <AvatarBadge className="bg-ctp-green" />
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-base">Jane Doe</CardTitle>
                    <CardDescription>Online</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon">
                    <PhoneIcon className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontalIcon className="size-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-80 pr-4">
                    <div className="space-y-4">
                      {/* Incoming message */}
                      <div className="flex gap-3">
                        <Avatar size="sm">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="max-w-[70%]">
                          <div className="rounded-2xl rounded-tl-sm bg-muted p-3">
                            <p className="text-sm">Hey! How&apos;s the new design system coming along?</p>
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">10:30 AM</p>
                        </div>
                      </div>
                      {/* Outgoing message */}
                      <div className="flex flex-row-reverse gap-3">
                        <Avatar size="sm">
                          <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                        <div className="max-w-[70%]">
                          <div className="rounded-2xl rounded-tr-sm bg-primary p-3 text-primary-foreground">
                            <p className="text-sm">Going great! Just finished the glass components. Check it out:</p>
                          </div>
                          <p className="mt-1 text-right text-xs text-muted-foreground">10:32 AM</p>
                        </div>
                      </div>
                      {/* Image message */}
                      <div className="flex flex-row-reverse gap-3">
                        <Avatar size="sm">
                          <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                        <div className="max-w-[70%]">
                          <div className="overflow-hidden rounded-2xl rounded-tr-sm bg-gradient-to-br from-ctp-blue/20 to-ctp-mauve/20 p-1">
                            <div className="flex h-32 items-center justify-center rounded-xl bg-muted/50">
                              <PackageIcon className="size-12 text-muted-foreground/30" />
                            </div>
                          </div>
                          <p className="mt-1 text-right text-xs text-muted-foreground">10:32 AM</p>
                        </div>
                      </div>
                      {/* Incoming message */}
                      <div className="flex gap-3">
                        <Avatar size="sm">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="max-w-[70%]">
                          <div className="rounded-2xl rounded-tl-sm bg-muted p-3">
                            <p className="text-sm">This looks amazing! 🔥 Love the liquid glass effect</p>
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">10:35 AM</p>
                        </div>
                      </div>
                      {/* Typing indicator */}
                      <div className="flex gap-3">
                        <Avatar size="sm">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="rounded-2xl rounded-tl-sm bg-muted p-3">
                          <div className="flex gap-1">
                            <span className="size-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "0ms" }} />
                            <span className="size-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "150ms" }} />
                            <span className="size-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "300ms" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="size-4" />
                  </Button>
                  <Input placeholder="Type a message..." className="flex-1" />
                  <Button size="icon">
                    <SendIcon className="size-4" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Notification Cards */}
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Notifications</CardTitle>
                    <Badge variant="secondary">3 new</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3 rounded-xl bg-ctp-blue/10 p-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ctp-blue">
                      <MessageCircleIcon className="size-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">New message from Jane</p>
                      <p className="truncate text-xs text-muted-foreground">Hey! How&apos;s the new design...</p>
                      <p className="mt-1 text-xs text-muted-foreground">2 min ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl bg-ctp-green/10 p-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ctp-green">
                      <CheckCircle2Icon className="size-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">Task completed</p>
                      <p className="truncate text-xs text-muted-foreground">Design review is done</p>
                      <p className="mt-1 text-xs text-muted-foreground">15 min ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl bg-ctp-mauve/10 p-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ctp-mauve">
                      <UserPlusIcon className="size-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">New team member</p>
                      <p className="truncate text-xs text-muted-foreground">Mike joined the project</p>
                      <p className="mt-1 text-xs text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">View All</Button>
                </CardFooter>
              </Card>

              {/* Conversation List */}
              <Card className="border-border/60 bg-card/90 md:col-span-2 xl:col-span-3">
                <CardHeader>
                  <CardTitle className="text-base">Recent Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-3">
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                        <AvatarBadge className="bg-ctp-green" />
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Jane Doe</p>
                          <span className="text-xs text-muted-foreground">10:35 AM</span>
                        </div>
                        <p className="truncate text-sm text-muted-foreground">This looks amazing! 🔥</p>
                      </div>
                      <Badge className="bg-primary">2</Badge>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/60 p-3 hover:bg-muted/50">
                      <Avatar>
                        <AvatarFallback>MK</AvatarFallback>
                        <AvatarBadge className="bg-ctp-yellow" />
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Mike King</p>
                          <span className="text-xs text-muted-foreground">9:15 AM</span>
                        </div>
                        <p className="truncate text-sm text-muted-foreground">Can you review my PR?</p>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/60 p-3 hover:bg-muted/50">
                      <Avatar>
                        <AvatarFallback>AL</AvatarFallback>
                        <AvatarBadge className="bg-ctp-overlay0" />
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Alice Lee</p>
                          <span className="text-xs text-muted-foreground">Yesterday</span>
                        </div>
                        <p className="truncate text-sm text-muted-foreground">Thanks for the help!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Empty States & Errors ─── */}
          <section className="relative -mx-3 space-y-8 overflow-hidden rounded-3xl px-3 py-12 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6" id="empty-states">
            {/* Subtle muted gradient for error/empty states */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-ctp-overlay0/10 via-ctp-surface0/20 to-ctp-base" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,112,134,0.05),transparent_70%)]" />
              <div className="absolute inset-0 bg-background/75" />
            </div>

            <SectionHeader
              eyebrow="States"
              title="Empty States & Errors"
              description="404 pages, error states, empty list states, and loading patterns for graceful failure and empty data handling."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* 404 State */}
              <Card className="border-border/60 bg-card/90 md:col-span-2 xl:col-span-1">
                <CardContent className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 text-6xl font-black text-muted-foreground/20 sm:text-8xl">404</div>
                  <h3 className="text-xl font-bold">Page Not Found</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Button variant="outline">Go Back</Button>
                    <Button>Go Home</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Error State */}
              <Card className="border-ctp-red/30 bg-gradient-to-br from-ctp-red/10 via-card to-card">
                <CardContent className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-ctp-red/20">
                    <AlertCircleIcon className="size-8 text-ctp-red" />
                  </div>
                  <h3 className="text-xl font-bold">Something Went Wrong</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    We encountered an error while processing your request. Please try again.
                  </p>
                  <Button className="mt-6">
                    <RefreshCwIcon className="mr-2 size-4" />
                    Try Again
                  </Button>
                </CardContent>
              </Card>

              {/* Empty Inbox */}
              <Card className="border-border/60 bg-card/90">
                <CardContent className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
                    <InboxIcon className="size-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Inbox Zero!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    You&apos;re all caught up. New messages will appear here.
                  </p>
                </CardContent>
              </Card>

              {/* No Search Results */}
              <Card className="border-border/60 bg-card/90">
                <CardContent className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
                    <SearchIcon className="size-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">No Results Found</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    We couldn&apos;t find anything matching &quot;glass components&quot;
                  </p>
                  <Button variant="outline" className="mt-4">Clear Search</Button>
                </CardContent>
              </Card>

              {/* Connection Lost */}
              <Card className="border-ctp-yellow/30 bg-gradient-to-br from-ctp-yellow/10 via-card to-card">
                <CardContent className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-ctp-yellow/20">
                    <svg className="size-8 text-ctp-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Connection Lost</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Please check your internet connection and try again.
                  </p>
                  <Button variant="outline" className="mt-4">
                    <RefreshCwIcon className="mr-2 size-4" />
                    Reconnect
                  </Button>
                </CardContent>
              </Card>

              {/* Loading State */}
              <Card className="border-border/60 bg-card/90">
                <CardContent className="py-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Skeleton className="size-12 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                      </div>
                    </div>
                    <Skeleton className="h-32 rounded-xl" />
                    <div className="flex gap-3">
                      <Skeleton className="h-10 flex-1 rounded-lg" />
                      <Skeleton className="h-10 flex-1 rounded-lg" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Element Coverage Summary ─── */}
          <section className="space-y-8" id="patterns">
            <SectionHeader
              eyebrow="Patterns"
              title="Element Coverage"
              description="A practical mapping of common public categories from shadcn, shadcn UI Kit, and Elementor-style ecosystems into reusable JSX."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-[0.95fr_1.05fr]">
              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Mapped Families</CardTitle>
                  <CardDescription>
                    Not just one-off pages. These are component families you can keep composing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <IconList
                    items={[
                      {
                        icon: <BlocksIcon className="size-4" />,
                        title: "Official primitives",
                        description: "Accordion, alert, avatar, badge, breadcrumb, card, command, input, popover, table, tabs, tooltip, and more.",
                      },
                      {
                        icon: <LayoutGridIcon className="size-4" />,
                        title: "Layout sections",
                        description: "Feature grids, pricing tables, team blocks, testimonials, logo clouds, portfolios, and CTA banners.",
                      },
                      {
                        icon: <FolderKanbanIcon className="size-4" />,
                        title: "Page-builder equivalents",
                        description: "Counters, icon lists, accordions, toggles, contact forms, review cards, and content rails.",
                      },
                      {
                        icon: <PaletteIcon className="size-4" />,
                        title: "Premium layer",
                        description: "Glass panels, refraction cards, animated borders, and squeeze interactions for hero surfaces.",
                      },
                    ]}
                  />
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle>Use Cases</CardTitle>
                  <CardDescription>
                    The goal is to cover actual production needs, not just check off component names.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <FeatureCard
                    tone="quiet"
                    badge="Marketing"
                    icon={<GalleryVerticalEndIcon className="size-5" />}
                    title="Landing pages"
                    description="Hero variants, logo clouds, testimonials, pricing, FAQ, CTA, and contact flows."
                  />
                  <FeatureCard
                    tone="quiet"
                    badge="App"
                    icon={<BookOpenIcon className="size-5" />}
                    title="Product surfaces"
                    description="Tables, tabs, filters, command search, dialogs, sidebars, and bounded panels."
                  />
                  <FeatureCard
                    tone="quiet"
                    badge="Editorial"
                    icon={<MessageSquareQuoteIcon className="size-5" />}
                    title="Content systems"
                    description="Alert rails, quote/testimonial cards, accordions, breadcrumbs, and pagination."
                  />
                  <FeatureCard
                    tone="quiet"
                    badge="Commerce"
                    icon={<CircleDollarSignIcon className="size-5" />}
                    title="Offer presentation"
                    description="Pricing tables, bundles, comparisons, FAQs, and trust-building review content."
                  />
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* ─── Dialogs ─── */}
        <GlassDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          title="Glass Dialog"
          description="This stays as the premium surface layer while the standard shadcn primitives cover the base system."
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Use the glass dialog for standout moments. Use the standard dialog primitive
              when you want the more neutral shadcn baseline.
            </p>
            <GlassButton variant="cta" onClick={toggleSidebar}>
              Open Sidebar
            </GlassButton>
          </div>
        </GlassDialog>

        <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
          <CommandInput placeholder="Search components, blocks, or examples..." />
          <CommandList>
            <CommandEmpty>No matching component.</CommandEmpty>
            <CommandGroup heading="Sections">
              <CommandItem>
                <SparklesIcon className="size-4" />
                Glass Playground
                <CommandShortcut>#glass-playground</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Layers3Icon className="size-4" />
                Primitives
                <CommandShortcut>#primitives</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <HashIcon className="size-4" />
                Forms
                <CommandShortcut>#forms</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Commerce">
              <CommandItem>
                <CreditCardIcon className="size-4" />
                Payment Methods
                <CommandShortcut>#payment</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <PackageIcon className="size-4" />
                Product Cards
                <CommandShortcut>#products</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ShoppingCartIcon className="size-4" />
                Commerce Flows
                <CommandShortcut>#commerce</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="App UI">
              <CommandItem>
                <UserIcon className="size-4" />
                Authentication
                <CommandShortcut>#auth</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ChartNoAxesColumnIcon className="size-4" />
                Charts & Analytics
                <CommandShortcut>#charts</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FolderKanbanIcon className="size-4" />
                Task Management
                <CommandShortcut>#tasks</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <UsersIcon className="size-4" />
                User Profiles
                <CommandShortcut>#profiles</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Communication">
              <CommandItem>
                <RocketIcon className="size-4" />
                Welcome & Onboarding
                <CommandShortcut>#welcome</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <MessageCircleIcon className="size-4" />
                Chat & Messaging
                <CommandShortcut>#chat</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <AlertCircleIcon className="size-4" />
                Empty States & Errors
                <CommandShortcut>#empty-states</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Layout Blocks">
              <CommandItem>
                <LayoutGridIcon className="size-4" />
                Feature Grid
              </CommandItem>
              <CommandItem>
                <CircleDollarSignIcon className="size-4" />
                Pricing Grid
              </CommandItem>
              <CommandItem>
                <MessageSquareQuoteIcon className="size-4" />
                Testimonials
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </main>
    </TooltipProvider>
  );
}