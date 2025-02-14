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
      className="h-screen flex flex-col items-center justify-center bg-black text-white pt-56"
    >
      <div
        className={`space-y-4 text-center transform transition-all duration-1000 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-semibold">iPhone 15 Pro</h2>
        <p className="text-xl md:text-2xl">
          Titanium. So strong. So light. So Pro.
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
        className={`mt-8 w-full max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <img
          ref={imageRef}
          src="/download.png"
          alt="iPhone 15 Pro"
          className="w-full h-auto will-change-transform"
        />
      </div>
    </section>
  );
}
