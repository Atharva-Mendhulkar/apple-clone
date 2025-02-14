"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (inView && headingRef.current) {
      headingRef.current.classList.add("animate-fade-in")
    }
  }, [inView])

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-black text-white">
      <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold opacity-0 transition-opacity duration-1000">
        Welcome to Apple
      </h1>
    </section>
  )
}

