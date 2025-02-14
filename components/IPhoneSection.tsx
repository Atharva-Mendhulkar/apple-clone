"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

export default function IPhoneSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="h-[180vh] flex flex-col items-center justify-start bg-black text-white pt-20"
    >
      <div
        className={`space-y-4 text-center transform transition-all duration-1000 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-6xl md:text-7xl font-semibold tracking-tight">
          iPhone 15 Pro
        </h2>
        <p className="text-2xl md:text-3xl font-medium">
          Titanium. So strong. So light. So Pro.
        </p>
        <div className="flex items-center justify-center space-x-6 pt-3">
          <Button
            variant="link"
            className="text-blue-500 hover:text-blue-400 text-xl"
          >
            Learn more &gt;
          </Button>
          <Button
            variant="link"
            className="text-blue-500 hover:text-blue-400 text-xl"
          >
            Buy &gt;
          </Button>
        </div>
      </div>
      <div
        className={`-mt- w-full max-w-7xl mx-auto transform transition-all duration-1000 delay-300 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <img
          ref={imageRef}
          src="/download.png"
          alt="iPhone 15 Pro"
          className="w-full h-auto will-change-transform scale-150"
        />
      </div>
    </section>
  );
}
