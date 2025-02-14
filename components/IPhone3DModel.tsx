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
  const [modelError, setModelError] = useState(false);

  // Fix the model path to match the actual file location
  const { scene, nodes, materials } = useGLTF(
    "/models/iphone/iphone-15-pro.glb"
  ) as GLTFResult;

  // Add error logging for debugging
  useEffect(() => {
    if (!scene) {
      console.error("Failed to load scene");
      setModelError(true);
      onError();
      return;
    }

    try {
      Object.values(materials).forEach((material: THREE.Material) => {
        if ((material as any).map) {
          const texturePath =
            "/models/iphone/textures/" + (material as any).map.name;
          console.log("Loading texture:", texturePath);
          (material as any).map.path = texturePath;
        }
      });
      onLoad(); // Call onLoad when the model is ready
    } catch (error) {
      console.error("Error setting up materials:", error);
      setModelError(true);
      onError();
    }
  }, [materials, scene, onError, onLoad]);

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

  if (modelError) {
    return (
      <mesh>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]} scale={21}>
      <primitive object={scene} />
    </group>
  );
}

// Fix the preload path to use forward slashes
useGLTF.preload("/models/iphone/iphone-15-pro.glb");
