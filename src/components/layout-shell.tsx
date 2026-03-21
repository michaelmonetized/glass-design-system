"use client";

import { ReactNode } from "react";
import { GlassNav } from "@/components/glass/glass-nav";
import {
  GlassSidebarProvider,
  GlassSidebar,
  SidebarMain,
} from "@/components/glass/glass-sidebar";
import {
  GlassInput,
  GlassTextarea,
  GlassSelect,
  GlassCheckbox,
} from "@/components/glass/glass-form";
import { GlassButton } from "@/components/glass/glass-button";

export function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <GlassSidebarProvider side="right" width="20rem">
      <GlassNav />
      <SidebarMain>{children}</SidebarMain>

      <GlassSidebar
        title="Quick Contact"
        description="Send us a message — we'll get back to you fast."
      >
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <GlassInput label="Name" placeholder="Your name" />
          <GlassInput
            label="Email"
            type="email"
            placeholder="you@example.com"
          />
          <GlassSelect
            label="Topic"
            options={[
              { value: "", label: "Select..." },
              { value: "general", label: "General" },
              { value: "project", label: "Start a Project" },
              { value: "support", label: "Support" },
            ]}
          />
          <GlassTextarea label="Message" placeholder="How can we help?" rows={3} />
          <GlassCheckbox label="Send me updates" />
          <GlassButton variant="cta" size="sm" className="mt-1 w-full">
            Send Message
          </GlassButton>
        </form>
      </GlassSidebar>
    </GlassSidebarProvider>
  );
}
