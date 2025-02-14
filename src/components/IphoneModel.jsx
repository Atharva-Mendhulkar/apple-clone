import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense, useEffect } from 'react'

const IphoneModel = () => {
  const MODEL_PATH = '/models/iphone/iphone-15-pro.glb'
  
  useEffect(() => {
    console.log('Attempting to load model from:', MODEL_PATH)
  }, [])

  try {
    const gltf = useLoader(GLTFLoader, MODEL_PATH)
    
    return (
      <primitive 
        object={gltf.scene}
        scale={1}
        position={[0, 0, 0]}
      />
    )
  } catch (error) {
    console.error('Error loading model:', error)
    return null
  }
}

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <IphoneModel />
    </Suspense>
  )
}
