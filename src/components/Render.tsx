import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense, useEffect, useRef, useState } from "react";

const Scene = () => {
  const modelRef = useRef();
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
      <div className="w-1/2 lg:w-1/4 aspect-square">
        <Canvas camera={{ position: [0.2, 0, -1.8] }} shadows>
          <ambientLight intensity={0.5} />
          <spotLight position={[-2, -10, -8]} decay={0} intensity={Math.PI} />
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};

export default Render;
