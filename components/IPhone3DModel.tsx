"use client";

import { useEffect, useState } from "react";
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

export function IPhone3DModel({ inView }: { inView: boolean }) {
  const group = useRef<THREE.Group>(null);
  const [modelError, setModelError] = useState(false);

  const { scene, nodes, materials } = useGLTF(
    "/models/iphone/apple_iphone_15_pro_max_black(2).glb"
  ) as GLTFResult;

  useEffect(() => {
    if (!scene) {
      setModelError(true);
      return;
    }

    try {
      Object.values(materials).forEach((material: THREE.Material) => {
        if ((material as any).map) {
          (material as any).map.path =
            "/models/iphone/textures/" + (material as any).map.name;
        }
      });
    } catch (error) {
      console.error("Error setting up materials:", error);
      setModelError(true);
    }
  }, [materials, scene]);

  useFrame((state) => {
    if (group.current && inView) {
      // Add constant rotation
      group.current.rotation.y += 0.002;

      // Add subtle oscillation on top of constant rotation
      const oscillation = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        group.current.rotation.y + oscillation,
        0.05
      );
    }
  });

  if (modelError) {
    return (
      <mesh>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  return (
    <group ref={group} dispose={null} position={[0, 4, 0]} scale={792}>
      <primitive object={scene} />
    </group>
  );
}

// Pre-load the model
useGLTF.preload("/models/iphone/apple_iphone_15_pro_max_black(2).glb");
