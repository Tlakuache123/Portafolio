import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

const Model = React.forwardRef((props: any, ref) => {
  const { nodes, materials } = useGLTF("/src/assets/PortafolioAvatar.gltf");

  return (
    <group {...props} dispose={null} ref={ref}>
      <group rotation={[0, -Math.PI / 0.8, 0]}>
        <group position={[-0.102, 0.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.front.geometry}
            material={nodes.front.material}
            position={[-0.289, 0.25, -0.25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.back.geometry}
            material={nodes.back.material}
            position={[0.289, 0.219, -0.25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.antena.geometry}
            material={nodes.antena.material}
            position={[0.512, 1.137, -0.25]}
            rotation={[0, 0, 1.309]}
          />
        </group>
        <group position={[0, 0.063, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cuboid.geometry}
            material={nodes.cuboid.material}
            position={[-0.083, 0.052, -0.313]}
            rotation={[0, -0.262, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cuboid_1.geometry}
            material={nodes.cuboid_1.material}
            position={[-0.083, 0.052, 0.313]}
            rotation={[0, 0.262, 0]}
          />
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/src/assets/PortafolioAvatar.gltf");

export default Model;
