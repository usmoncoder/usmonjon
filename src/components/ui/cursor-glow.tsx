"use client";

import { useCallback, useEffect, useRef } from "react";

export function CursorGlow() {
  const primary = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  const animate = useCallback(() => {
    pos.current.x += (target.current.x - pos.current.x) * 0.06;
    pos.current.y += (target.current.y - pos.current.y) * 0.06;
    ringPos.current.x += (target.current.x - ringPos.current.x) * 0.03;
    ringPos.current.y += (target.current.y - ringPos.current.y) * 0.03;

    if (primary.current) {
      primary.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    }
    if (ring.current) {
      ring.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
    }

    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden dark:block"
      aria-hidden
    >
      {/* Primary glow — follows cursor closely */}
      <div
        ref={primary}
        className="absolute -left-[250px] -top-[250px] h-[500px] w-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.08) 0%, rgba(0,229,255,0.03) 35%, transparent 65%)",
          willChange: "transform",
        }}
      />

      {/* Outer ring — follows with more delay for depth */}
      <div
        ref={ring}
        className="absolute -left-[400px] -top-[400px] h-[800px] w-[800px]"
        style={{
          background:
            "radial-gradient(circle, transparent 30%, rgba(0,229,255,0.015) 50%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Static ambient nodes */}
      <div className="absolute left-[10%] top-[15%] h-1 w-1 rounded-full bg-accent/30" />
      <div className="absolute left-[80%] top-[25%] h-0.5 w-0.5 rounded-full bg-accent/20" />
      <div className="absolute left-[60%] top-[70%] h-1 w-1 rounded-full bg-accent/20" />
      <div className="absolute left-[25%] top-[85%] h-0.5 w-0.5 rounded-full bg-accent/30" />
    </div>
  );
}
