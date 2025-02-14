"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { IPhone3DModel } from "./IPhone3DModel";
import { Suspense } from "react";

export default function IPhoneSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="h-[150vh] flex flex-col items-center justify-start bg-black text-white pt-16 overflow-hidden"
    >
      <div
        className={`space-y-6 text-center transform transition-all duration-1000 pt-10
                   ${
                     inView
                       ? "translate-y-0 opacity-100"
                       : "translate-y-10 opacity-0"
                   }`}
      >
        <h2
          className="text-6xl md:text-7xl font-semibold tracking-tight
                      animate-slow-rainbow-glow"
        >
          iPhone 15 Pro
        </h2>
        <p
          className="text-2xl md:text-3xl font-medium
                     bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text
                     hover:text-transparent transition-all duration-300"
        >
          Titanium. So strong. So light. So Pro.
        </p>
        <div className="flex items-center justify-center space-x-6 pt-3">
          <Button
            variant="link"
            className="text-blue-500 hover:text-blue-400 text-xl
                       transform hover:scale-110 transition-all duration-300
                       hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            Learn more &gt;
          </Button>
          <Button
            variant="link"
            className="text-blue-500 hover:text-blue-400 text-xl
                       transform hover:scale-110 transition-all duration-300
                       hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            Buy &gt;
          </Button>
        </div>
      </div>
      <div
        className={`w-full min-w-[1800px] h-[2400px] max-w-none mx-auto transform transition-all duration-1000 delay-300
                   ${
                     inView
                       ? "translate-y-0 opacity-100"
                       : "translate-y-10 opacity-0"
                   }`}
      >
        <Canvas
          camera={{ position: [0, 0, 1080], fov: 25 }}
          style={{ width: "1800px", height: "100%" }}
          className="mx-auto"
        >
          <Suspense fallback={null}>
            <IPhone3DModel inView={inView} />
            <Environment preset="studio" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
