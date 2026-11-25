"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const isHovering = useRef(false);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => {
      isHovering.current = true;
      dot.style.width = "6px";
      dot.style.height = "6px";
      ringEl.style.width = "56px";
      ringEl.style.height = "56px";
      ringEl.style.background = "rgba(255,209,0,0.06)";
      ringEl.style.borderColor = "rgba(255,209,0,0.9)";
    };

    const onLeave = () => {
      isHovering.current = false;
      dot.style.width = "8px";
      dot.style.height = "8px";
      ringEl.style.width = "38px";
      ringEl.style.height = "38px";
      ringEl.style.background = "transparent";
      ringEl.style.borderColor = "rgba(255,209,0,0.55)";
    };

    // Attach hover effect to interactive elements
    const addListeners = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addListeners();

    // Observe DOM mutations so dynamically rendered elements also get the effect
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMove);

    // RAF loop — dot follows instantly, ring lags with lerp
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      dot.style.left = `${mouse.current.x}px`;
      dot.style.top = `${mouse.current.y}px`;

      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.14);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.14);
      ringEl.style.left = `${ring.current.x}px`;
      ringEl.style.top = `${ring.current.y}px`;

      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
