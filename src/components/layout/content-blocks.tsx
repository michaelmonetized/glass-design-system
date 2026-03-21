import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  TrendingUpIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const sectionHeaderVariants = cva("flex flex-col gap-3", {
  variants: {
    align: {
      left: "items-start text-left",
      center: "items-center text-center",
    },
  },
  defaultVariants: {
    align: "left",
  },
});

const featureCardVariants = cva("h-full border-border/60 bg-card/85 backdrop-blur", {
  variants: {
    tone: {
      default: "",
      accent:
        "border-primary/35 bg-gradient-to-br from-primary/8 via-card to-card shadow-lg shadow-primary/10",
      quiet: "bg-background/60 shadow-none",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

const statCardVariants = cva("h-full border-border/60 bg-card/85 backdrop-blur", {
  variants: {
    emphasis: {
      default: "",
      strong: "border-primary/35 shadow-lg shadow-primary/10",
    },
  },
  defaultVariants: {
    emphasis: "default",
  },
});

const pricingCardVariants = cva("h-full border-border/60 bg-card/90 backdrop-blur", {
  variants: {
    featured: {
      false: "",
      true: "border-primary/40 bg-gradient-to-b from-primary/10 via-card to-card shadow-xl shadow-primary/10",
    },
  },
  defaultVariants: {
    featured: false,
  },
});

const ctaBannerVariants = cva(
  "relative overflow-hidden rounded-3xl border px-6 py-8 sm:px-8 sm:py-10",
  {
    variants: {
      tone: {
        default: "border-border/60 bg-card/90",
        accent:
          "border-primary/30 bg-gradient-to-r from-primary/12 via-background to-accent/12",
        dark: "border-white/10 bg-slate-950 text-white",
      },
    },
    defaultVariants: {
      tone: "accent",
    },
  }
);

type SectionHeaderProps = VariantProps<typeof sectionHeaderVariants> & {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
  align,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(sectionHeaderVariants({ align }), className)}>
      {eyebrow ? (
        <Badge variant="outline" className="border-primary/30 text-primary">
          {eyebrow}
        </Badge>
      ) : null}
      <div className="space-y-2">
        <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
    </div>
  );
}

export function FeatureGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("grid gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>{children}</div>;
}

type FeatureCardProps = VariantProps<typeof featureCardVariants> & {
  title: string;
  description: string;
  icon?: ReactNode;
  badge?: string;
  footer?: ReactNode;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon,
  badge,
  footer,
  tone,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn(featureCardVariants({ tone }), className)}>
      <CardHeader className="gap-4">
        <div className="flex items-start justify-between gap-4">
          {icon ? (
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              {icon}
            </div>
          ) : null}
          {badge ? (
            <Badge variant="secondary" className="bg-secondary/60">
              {badge}
            </Badge>
          ) : null}
        </div>
        <div className="space-y-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      {footer ? <CardFooter className="mt-auto">{footer}</CardFooter> : null}
    </Card>
  );
}

export function StatsGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("grid gap-4 sm:grid-cols-2 xl:grid-cols-4", className)}>{children}</div>;
}

type StatCardProps = VariantProps<typeof statCardVariants> & {
  label: string;
  value: string;
  delta?: string;
  progress?: number;
  className?: string;
};

export function StatCard({
  label,
  value,
  delta,
  progress,
  emphasis,
  className,
}: StatCardProps) {
  return (
    <Card className={cn(statCardVariants({ emphasis }), className)}>
      <CardHeader className="gap-3">
        <CardDescription className="text-xs uppercase tracking-[0.2em]">
          {label}
        </CardDescription>
        <div className="flex items-end justify-between gap-3">
          <CardTitle className="text-3xl font-black">{value}</CardTitle>
          {delta ? (
            <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600">
              <TrendingUpIcon className="size-3.5" />
              {delta}
            </div>
          ) : null}
        </div>
      </CardHeader>
      {typeof progress === "number" ? (
        <CardContent className="space-y-2">
          <Progress value={progress} />
          <p className="text-xs text-muted-foreground">{progress}% benchmark coverage</p>
        </CardContent>
      ) : null}
    </Card>
  );
}

export function LogoCloud({
  logos,
  className,
}: {
  logos: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-3 rounded-3xl border border-border/60 bg-card/70 p-5 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {logos.map((logo) => (
        <div
          key={logo}
          className="flex min-h-16 items-center justify-center rounded-2xl border border-dashed border-border/60 bg-background/60 px-4 text-center text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase"
        >
          {logo}
        </div>
      ))}
    </div>
  );
}

type PricingCardProps = VariantProps<typeof pricingCardVariants> & {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta?: string;
  note?: string;
  className?: string;
};

export function PricingGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("grid gap-5 lg:grid-cols-3", className)}>{children}</div>;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  cta = "Start now",
  note,
  featured,
  className,
}: PricingCardProps) {
  return (
    <Card className={cn(pricingCardVariants({ featured }), className)}>
      <CardHeader className="gap-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle>{name}</CardTitle>
          {featured ? <Badge>Popular</Badge> : null}
        </div>
        <CardDescription>{description}</CardDescription>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-black tracking-tight">{price}</span>
          <span className="pb-1 text-sm text-muted-foreground">/ month</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Separator />
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckIcon className="mt-0.5 size-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto flex-col items-stretch gap-3">
        <Button variant={featured ? "default" : "outline"} className="w-full">
          {cta}
        </Button>
        {note ? <p className="text-xs text-muted-foreground">{note}</p> : null}
      </CardFooter>
    </Card>
  );
}

export function TestimonialGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("grid gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>{children}</div>;
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  initials,
  image,
  rating = 5,
  className,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  image?: string;
  rating?: number;
  className?: string;
}) {
  return (
    <Card className={cn("h-full border-border/60 bg-card/90", className)}>
      <CardHeader className="gap-4">
        <div className="flex items-center gap-1 text-amber-500">
          {Array.from({ length: rating }).map((_, index) => (
            <StarIcon key={index} className="size-4 fill-current" />
          ))}
        </div>
        <CardDescription className="text-base leading-7 text-foreground">
          “{quote}”
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar size="lg">
            {image ? <AvatarImage src={image} alt={name} /> : null}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export function TeamGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("grid gap-5 md:grid-cols-2 xl:grid-cols-4", className)}>{children}</div>;
}

export function TeamMemberCard({
  name,
  role,
  bio,
  initials,
  image,
  className,
}: {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
  className?: string;
}) {
  return (
    <Card className={cn("h-full border-border/60 bg-card/85", className)}>
      <CardHeader className="items-center text-center">
        <Avatar size="lg" className="size-16">
          {image ? <AvatarImage src={image} alt={name} /> : null}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
}

export function PortfolioGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("grid gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>{children}</div>;
}

export function PortfolioCard({
  eyebrow,
  title,
  description,
  meta,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  className?: string;
}) {
  return (
    <Card className={cn("h-full overflow-hidden border-border/60 bg-card/85", className)}>
      <div className="h-32 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/30" />
      <CardHeader className="gap-2">
        <Badge variant="outline" className="w-fit">
          {eyebrow}
        </Badge>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-between">
        <span className="text-sm text-muted-foreground">{meta}</span>
        <Button variant="ghost" size="sm">
          View
          <ArrowRightIcon className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export function IconList({
  items,
  className,
}: {
  items: Array<{ icon?: ReactNode; title: string; description?: string }>;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => (
        <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/70 p-4">
          <div className="mt-0.5 flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {item.icon ?? <CheckIcon className="size-4" />}
          </div>
          <div className="space-y-1">
            <p className="font-medium text-foreground">{item.title}</p>
            {item.description ? (
              <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CtaBanner({
  title,
  description,
  primaryAction,
  secondaryAction,
  tone,
  className,
}: VariantProps<typeof ctaBannerVariants> & {
  title: string;
  description: string;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn(ctaBannerVariants({ tone }), className)}>
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <Badge variant={tone === "dark" ? "secondary" : "outline"} className={tone === "dark" ? "bg-white/10 text-white" : ""}>
            Call To Action
          </Badge>
          <h3 className={cn("text-3xl font-black tracking-tight", tone === "dark" ? "text-white" : "text-foreground")}>
            {title}
          </h3>
          <p className={cn("text-sm leading-6 md:text-base", tone === "dark" ? "text-white/70" : "text-muted-foreground")}>
            {description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {primaryAction}
          {secondaryAction}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/10 to-transparent" />
    </section>
  );
}

export function FaqSection({
  items,
  className,
}: {
  items: Array<{ question: string; answer: string }>;
  className?: string;
}) {
  return (
    <Card className={cn("border-border/60 bg-card/90", className)}>
      <CardHeader>
        <CardTitle>FAQ / Accordion</CardTitle>
        <CardDescription>
          Shared pattern for support docs, pricing pages, help centers, and Elementor-style toggle content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
