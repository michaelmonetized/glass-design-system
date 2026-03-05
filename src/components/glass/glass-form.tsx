"use client";

import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/* ─── Glass Input ─── */
export interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium text-white/80 drop-shadow-sm"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-10 w-full rounded-xl px-3 text-sm text-white placeholder:text-white/40",
            "bg-white/[0.07] backdrop-blur-sm",
            "border border-white/10 hover:border-white/20 focus:border-white/30",
            "outline-none transition-all duration-200",
            "focus:ring-2 focus:ring-white/10",
            "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
            error && "border-red-400/50 focus:border-red-400/70 focus:ring-red-400/20",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-400 drop-shadow-sm">{error}</p>
        )}
      </div>
    );
  }
);
GlassInput.displayName = "GlassInput";

/* ─── Glass Textarea ─── */
export interface GlassTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const GlassTextarea = forwardRef<
  HTMLTextAreaElement,
  GlassTextareaProps
>(({ className, label, error, id, ...props }, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-medium text-white/80 drop-shadow-sm"
        >
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={inputId}
        className={cn(
          "min-h-[5rem] w-full rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/40",
          "bg-white/[0.07] backdrop-blur-sm",
          "border border-white/10 hover:border-white/20 focus:border-white/30",
          "outline-none transition-all duration-200 resize-none",
          "focus:ring-2 focus:ring-white/10",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
          error && "border-red-400/50 focus:border-red-400/70 focus:ring-red-400/20",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-400 drop-shadow-sm">{error}</p>
      )}
    </div>
  );
});
GlassTextarea.displayName = "GlassTextarea";

/* ─── Glass Select ─── */
export interface GlassSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const GlassSelect = forwardRef<HTMLSelectElement, GlassSelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium text-white/80 drop-shadow-sm"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={inputId}
          className={cn(
            "h-10 w-full rounded-xl px-3 text-sm text-white appearance-none",
            "bg-white/[0.07] backdrop-blur-sm",
            "border border-white/10 hover:border-white/20 focus:border-white/30",
            "outline-none transition-all duration-200",
            "focus:ring-2 focus:ring-white/10",
            "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
            // Custom dropdown arrow
            "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.5)%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat",
            error && "border-red-400/50",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-neutral-900 text-white">
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-xs text-red-400 drop-shadow-sm">{error}</p>
        )}
      </div>
    );
  }
);
GlassSelect.displayName = "GlassSelect";

/* ─── Glass Checkbox ─── */
export interface GlassCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const GlassCheckbox = forwardRef<HTMLInputElement, GlassCheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <label
        htmlFor={inputId}
        className="flex items-center gap-2.5 cursor-pointer group"
      >
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          className={cn(
            "h-4.5 w-4.5 rounded-md appearance-none cursor-pointer",
            "bg-white/[0.07] backdrop-blur-sm",
            "border border-white/15 hover:border-white/25",
            "checked:bg-ctp-blue checked:border-ctp-blue",
            "transition-all duration-200",
            "relative",
            // Checkmark via pseudo-element in CSS
            className
          )}
          {...props}
        />
        <span className="text-sm text-white/80 group-hover:text-white drop-shadow-sm transition-colors">
          {label}
        </span>
      </label>
    );
  }
);
GlassCheckbox.displayName = "GlassCheckbox";

/* ─── Glass Contact Form (prebuilt) ─── */
export function GlassContactForm({
  className,
  onSubmit,
}: {
  className?: string;
  onSubmit?: (e: React.FormEvent) => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(e);
      }}
      className={cn("flex flex-col gap-4", className)}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <GlassInput label="First Name" placeholder="John" required />
        <GlassInput label="Last Name" placeholder="Doe" required />
      </div>
      <GlassInput label="Email" type="email" placeholder="john@example.com" required />
      <GlassInput label="Phone" type="tel" placeholder="(555) 123-4567" />
      <GlassSelect
        label="How can we help?"
        options={[
          { value: "", label: "Select a topic..." },
          { value: "general", label: "General Inquiry" },
          { value: "project", label: "Start a Project" },
          { value: "support", label: "Support" },
          { value: "partnership", label: "Partnership" },
        ]}
      />
      <GlassTextarea
        label="Message"
        placeholder="Tell us about your project..."
        rows={4}
      />
      <GlassCheckbox label="I agree to the privacy policy" />
    </form>
  );
}
