import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Model'


const Render = () => {

  return (
    <div className='flex justify-center'>
      <div className='h-80 w-80'>
        <Canvas camera={{ position: [0, 2, -8] }}>
          <Model position={[0, -3, 0]} scale={4} />
          <ambientLight intensity={Math.PI / 2} />
          <OrbitControls />
        </Canvas>
      </div>
    </div >
  )
}

export default Render;