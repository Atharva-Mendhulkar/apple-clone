"use client"

import { useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Box, OrbitControls, Environment } from "@react-three/drei"
import { useInView } from "react-intersection-observer"

function SimpleBox() {
  return (
    <Box args={[1, 1, 1]}>
      <meshStandardMaterial color="silver" />
    </Box>
  )
}

export default function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView && canvasRef.current) {
      canvasRef.current.classList.add("animate-fade-in")
    }
  }, [inView])

  return (
    <section ref={ref} className="h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-4xl font-bold mb-8">Explore Our Product</h2>
      <div ref={canvasRef} className="w-full h-[60vh] opacity-0 transition-opacity duration-1000">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <SimpleBox />
          <OrbitControls enableZoom={false} />
          <Environment preset="studio" />
        </Canvas>
      </div>
    </section>
  )
}

