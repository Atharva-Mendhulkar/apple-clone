"use client";

import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

export default function WatchSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="h-screen flex flex-col items-center justify-center bg-white text-black"
    >
      <div
        className={`space-y-4 text-center transform transition-all duration-1000 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-semibold">WATCH</h2>
        <p className="text-xl md:text-2xl">
          The most advanced Apple Watch yet.
        </p>
        <div className="flex items-center justify-center space-x-4 pt-4">
          <Button variant="link" className="text-blue-500 hover:text-blue-400">
            Learn more &gt;
          </Button>
          <Button variant="link" className="text-blue-500 hover:text-blue-400">
            Buy &gt;
          </Button>
        </div>
      </div>
      <div
        className={`mt-8 w-full max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <img
          src="/watch-removebg.png"
          alt="Apple Watch"
          className="w-full h-auto transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}
