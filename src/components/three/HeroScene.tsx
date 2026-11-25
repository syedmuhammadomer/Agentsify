"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(() => import("./SceneCanvas"), {
  ssr: false,
  loading: () => <div aria-hidden="true" className="h-full w-full" />,
});

export function HeroScene() {
  return (
    <div aria-hidden="true" className="h-full w-full">
      <SceneCanvas />
    </div>
  );
}
