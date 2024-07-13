import { useGLTF } from "@react-three/drei";
import React from "react";
import type { Mesh } from "three";

const Model = React.forwardRef((props: any, ref) => {
  const { scene } = useGLTF("/src/assets/PortafolioAvatar.gltf");

  scene.traverse((object) => {
    if ((object as Mesh).isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });

  return (
    <primitive object={scene} ref={ref} position={[0, -0.8, 0]} receiveShadow />
  );
});

export default Model;
