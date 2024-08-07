import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense, useEffect, useRef } from "react";
import type { Object3D } from "three";

const Scene = () => {
  const modelRef = useRef<Object3D>();
  const { camera } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      camera.position.set(0.2, 0, -1.8);

      camera.lookAt(modelRef.current.position);
    }
  }, [camera]);

  return (
    <>
      <Suspense fallback={null}>
        <Model ref={modelRef} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2.0}
      />
    </>
  );
};

const Render = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 lg:w-1/4 mt-[-20px] aspect-square">
        <Canvas camera={{ position: [0.2, 0, -1.9] }} shadows>
          <ambientLight intensity={2} color={0xFDF6E3} />
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};

export default Render;
