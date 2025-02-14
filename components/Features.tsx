"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const features = [
  { title: "Powerful A15 Bionic chip", description: "Blazing fast performance for all your tasks" },
  { title: "Pro camera system", description: "Capture stunning photos and videos in any light" },
  { title: "Super Retina XDR display", description: "Vibrant colors and incredible contrast" },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView && containerRef.current) {
      containerRef.current.classList.add("animate-fade-in")
    }
  }, [inView])

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div ref={containerRef} className="container mx-auto px-4 opacity-0 transition-opacity duration-1000">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

