"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type AnimationSetup = (scope: HTMLElement | undefined) => void;

export function useGsapAnimation(
  setup: AnimationSetup,
  scope: RefObject<HTMLElement | null>,
) {
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      setup(scope.current ?? undefined);
    });

    return () => media.revert();
  }, { scope });
}

export { gsap, ScrollTrigger };