"use client";

import { CSSProperties, ReactNode, useCallback, useMemo, useState } from "react";
import { getDisplacementFilter, getDisplacementMap } from "@/lib/displacement";
import { cn } from "@/lib/utils";

export interface GlassPanelProps {
  children?: ReactNode;
  width: number;
  height: number;
  radius?: number;
  depth?: number;
  blur?: number;
  strength?: number;
  chromaticAberration?: number;
  debug?: boolean;
  className?: string;
  onClick?: () => void;
}

export function GlassPanel({
  children,
  width,
  height,
  radius = 24,
  depth = 8,
  blur = 2,
  strength = 100,
  chromaticAberration = 6,
  debug = false,
  className,
  onClick,
}: GlassPanelProps) {
  const [pressed, setPressed] = useState(false);
  const currentDepth = pressed ? depth / 0.7 : depth;

  const filterUri = useMemo(
    () =>
      getDisplacementFilter({
        height,
        width,
        radius,
        depth: currentDepth,
        strength,
        chromaticAberration,
      }),
    [height, width, radius, currentDepth, strength, chromaticAberration]
  );

  const mapUri = useMemo(
    () =>
      getDisplacementMap({ height, width, radius, depth: currentDepth }),
    [height, width, radius, currentDepth]
  );

  const style = useMemo<CSSProperties>(() => {
    const base: CSSProperties = {
      height: `${height}px`,
      width: `${width}px`,
      borderRadius: `${radius}px`,
    };

    if (debug) {
      base.background = `url("${mapUri}")`;
      base.boxShadow = "none";
    } else {
      base.backdropFilter = `blur(${blur / 2}px) url('${filterUri}') blur(${blur}px) brightness(1.1) saturate(1.5)`;
      base.background = "rgba(255, 255, 255, 0.15)";
      base.boxShadow = "inset 0 0 4px 0px rgba(255, 255, 255, 0.5)";
    }

    return base;
  }, [height, width, radius, blur, filterUri, mapUri, debug]);

  const handleMouseDown = useCallback(() => setPressed(true), []);
  const handleMouseUp = useCallback(() => setPressed(false), []);

  return (
    <div
      className={cn("cursor-pointer select-none", className)}
      style={style}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
