"use client";

import { useEffect, useState, Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Scene: THREE.Group;
    // Add other specific node names from your model if needed
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

export function IPhone3DModel({
  inView,
  onError,
  onLoad,
}: {
  inView: boolean;
  onError: () => void;
  onLoad: () => void;
}) {
  const group = useRef<THREE.Group>(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  const { scene, materials } = useGLTF(
    "/models/iphone/iphone-15-pro.glb",
    true, // Add draco decoder
    true // Add KTX2 loader
  ) as GLTFResult;

  useEffect(() => {
    if (scene) {
      try {
        scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        setModelLoaded(true);
        onLoad();
      } catch (error) {
        console.error("Error setting up model:", error);
        onError();
      }
    }
  }, [scene, onLoad, onError]);

  useFrame((state) => {
    if (group.current && inView) {
      // Smooth continuous rotation
      group.current.rotation.y += 0.005;

      // Add floating up/down motion
      const floatingY = Math.sin(state.clock.elapsedTime) * 0.1;
      group.current.position.y = floatingY;

      // Add gentle tilting
      const tilt = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      group.current.rotation.x = tilt;

      // Smooth transitions
      group.current.position.lerp(new THREE.Vector3(0, floatingY, 0), 0.1);
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        tilt * 0.5,
        0.1
      );
    }
  });

  if (!modelLoaded) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <group ref={group} dispose={null} position={[0, 0, 0]} scale={21}>
        <primitive object={scene} />
      </group>
    </Suspense>
  );
}

// Preload with error handling
try {
  useGLTF.preload("/models/iphone/iphone-15-pro.glb");
} catch (error) {
  console.error("Error preloading model:", error);
}
