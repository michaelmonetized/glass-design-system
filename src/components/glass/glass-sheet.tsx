"use client";

import { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export interface GlassSheetProps {
  children?: ReactNode;
  trigger?: ReactNode;
  title?: string;
  description?: string;
  footer?: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function GlassSheet({
  children,
  trigger,
  title,
  description,
  footer,
  side = "right",
  open,
  onOpenChange,
  className,
}: GlassSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}
      <SheetContent
        side={side}
        className={cn(
          "border-white/10 backdrop-blur-2xl",
          "[background:color-mix(in_srgb,var(--ctp-base)_85%,transparent)_!important]",
          "text-foreground",
          className
        )}
      >
        {(title || description) && (
          <SheetHeader>
            {title && <SheetTitle>{title}</SheetTitle>}
            {description && <SheetDescription>{description}</SheetDescription>}
          </SheetHeader>
        )}
        {children}
        {footer && <SheetFooter>{footer}</SheetFooter>}
      </SheetContent>
    </Sheet>
  );
}

export { SheetClose };
