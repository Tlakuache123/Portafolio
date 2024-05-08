import { Canvas, useThree } from '@react-three/fiber'
import * as THREE from "three"
import { OrbitControls } from '@react-three/drei'
import { Model } from './Model'


const Render = () => {

    return (
        <div className='flex justify-center'>
            <div className='h-120 w-120'>
                <Canvas camera={{ position: [-8, 6, 0] }}>
                    <Model position={[0, 0, 0]} scale={4} />
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <OrbitControls />
                    <axesHelper args={[16]} />
                    <gridHelper />
                </Canvas>
            </div>
        </div >
    )
}

export default Render;