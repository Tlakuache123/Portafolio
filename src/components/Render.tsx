import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { useEffect, useRef } from "react";

const Scene = () => {
  const modelRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      camera.position.set(2, 1.8, 2);

      camera.lookAt(modelRef.current.position);
    }
  }, [camera]);

  return <Model ref={modelRef} position={[0.5, 0, 0.5]} />;
};

const Render = () => {
  return (
    <div className="flex justify-center">
      <div className="w-280 aspect-square bg-sky-500">
        <Canvas camera={{ position: [-8, 4, 0] }}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Scene />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default Render;
