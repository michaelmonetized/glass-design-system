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
          "glass-morphism border-ctp-surface1/50 backdrop-blur-xl",
          "bg-ctp-base/80 dark:bg-ctp-base/70",
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
