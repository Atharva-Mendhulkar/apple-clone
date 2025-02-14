"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const ValentinesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hearts, setHearts] = useState<Array<{ id: number; style: any }>>([]);

  useEffect(() => {
    if (inView) {
      const newHearts = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          color: ["#FF69B4", "#FF1493", "#FF0000"][
            Math.floor(Math.random() * 3)
          ],
        },
      }));
      setHearts(newHearts);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="h-screen flex flex-col items-center justify-center bg-pink-50 relative overflow-hidden"
    >
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute w-6 h-6 animate-float"
          style={heart.style}
        />
      ))}
      <div
        className={`space-y-4 text-center z-10 transform transition-all duration-1000 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="w-32 h-32 mx-auto mb-6">
          <img
            src="/heart.gif"
            alt="Valentines Heart"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-5xl md:text-6xl font-semibold text-pink-600">
          Valentine's Day
        </h2>
        <p className="text-xl md:text-2xl text-pink-500">
          Give something wonderful.
        </p>
        <div className="flex items-center justify-center space-x-4 pt-4">
          <Button variant="link" className="text-pink-600 hover:text-pink-400">
            Shop gifts &gt;
          </Button>
        </div>
      </div>
    </section>
  );
};

export { ValentinesSection };
