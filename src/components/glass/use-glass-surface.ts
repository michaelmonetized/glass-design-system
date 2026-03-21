"use client";

import {
  CSSProperties,
  FocusEventHandler,
  PointerEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getDisplacementFilter, getDisplacementMap } from "@/lib/displacement";

const GLASS_BACKGROUND =
  "linear-gradient(135deg, transparent 0%, color-mix(in srgb, var(--background) 5%, transparent) 50%, color-mix(in srgb, var(--background) 8%, transparent) 60%, transparent 70%, color-mix(in srgb, var(--background) 5%, transparent) 80%, transparent 100%) repeat fixed top left / 25dvw 25dvh";

const GLASS_INSET_SHADOW =
  "inset 0 1px 0 0 color-mix(in srgb, white 10%, transparent), inset 0 -1px 0 0 color-mix(in srgb, white 5%, transparent)";

type GlassSurfaceOptions = {
  depth?: number;
  blur?: number;
  strength?: number;
  chromaticAberration?: number;
  disabled?: boolean;
  debug?: boolean;
};

type SurfaceMetrics = {
  width: number;
  height: number;
  radius: number;
};

export function useGlassSurface<T extends HTMLElement>({
  depth = 8,
  blur = 2,
  strength = 100,
  chromaticAberration = 6,
  disabled = false,
  debug = false,
}: GlassSurfaceOptions = {}) {
  const [node, setNode] = useState<T | null>(null);
  const [metrics, setMetrics] = useState<SurfaceMetrics>({
    width: 0,
    height: 0,
    radius: 0,
  });
  const [pressed, setPressed] = useState(false);

  const currentDepth = pressed ? depth / 0.7 : depth;

  const ref = useCallback((nextNode: T | null) => {
    setNode(nextNode);
  }, []);

  useEffect(() => {
    if (!node) return;

    let frame = 0;

    const updateMetrics = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const styles = window.getComputedStyle(node);
        const radius = Math.min(
          parseFloat(styles.borderTopLeftRadius) || 0,
          Math.min(rect.width, rect.height) / 2,
        );

        const nextMetrics = {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          radius: Math.round(radius),
        };

        setMetrics((current) => {
          if (
            current.width === nextMetrics.width &&
            current.height === nextMetrics.height &&
            current.radius === nextMetrics.radius
          ) {
            return current;
          }

          return nextMetrics;
        });
      });
    };

    updateMetrics();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateMetrics);

      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", updateMetrics);
      };
    }

    const resizeObserver = new ResizeObserver(updateMetrics);
    resizeObserver.observe(node);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [node]);

  const filterUri = useMemo(() => {
    if (!metrics.width || !metrics.height) return null;

    return getDisplacementFilter({
      width: metrics.width,
      height: metrics.height,
      radius: metrics.radius,
      depth: currentDepth,
      strength,
      chromaticAberration,
    });
  }, [
    chromaticAberration,
    currentDepth,
    metrics.height,
    metrics.radius,
    metrics.width,
    strength,
  ]);

  const mapUri = useMemo(() => {
    if (!metrics.width || !metrics.height) return null;

    return getDisplacementMap({
      width: metrics.width,
      height: metrics.height,
      radius: metrics.radius,
      depth: currentDepth,
    });
  }, [currentDepth, metrics.height, metrics.radius, metrics.width]);

  const style = useMemo<CSSProperties>(() => {
    const base: CSSProperties = {
      background: GLASS_BACKGROUND,
    };

    if (debug) {
      if (mapUri) {
        base.background = `url("${mapUri}")`;
      }
      base.boxShadow = "none";
      return base;
    }

    base.boxShadow = GLASS_INSET_SHADOW;

    const backdrop = filterUri
      ? `blur(${blur / 2}px) url('${filterUri}') blur(${blur}px) brightness(1.1) saturate(1.5)`
      : `blur(${blur}px) brightness(1.1) saturate(1.5)`;

    base.backdropFilter = backdrop;
    base.WebkitBackdropFilter = backdrop;

    return base;
  }, [blur, debug, filterUri, mapUri]);

  const handlePointerDown = useCallback<PointerEventHandler<T>>(() => {
    if (!disabled) {
      setPressed(true);
    }
  }, [disabled]);

  const handleRelease = useCallback(() => {
    setPressed(false);
  }, []);

  const handlePointerUp = useCallback<PointerEventHandler<T>>(() => {
    handleRelease();
  }, [handleRelease]);

  const handlePointerCancel = useCallback<PointerEventHandler<T>>(() => {
    handleRelease();
  }, [handleRelease]);

  const handlePointerLeave = useCallback<PointerEventHandler<T>>(() => {
    handleRelease();
  }, [handleRelease]);

  const handleBlur = useCallback<FocusEventHandler<T>>(() => {
    handleRelease();
  }, [handleRelease]);

  return {
    ref,
    style,
    interactionHandlers: {
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerCancel,
      onPointerLeave: handlePointerLeave,
      onBlur: handleBlur,
    },
  };
}
