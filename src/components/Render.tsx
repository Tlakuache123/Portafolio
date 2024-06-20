import { Canvas, useThree } from '@react-three/fiber'
import * as THREE from "three"
import { AsciiRenderer, Effects, OrbitControls } from '@react-three/drei'
import { Model } from './Model'
import { Pixelation } from '@react-three/postprocessing'


const Render = () => {

    return (
        <div className='flex justify-center'>
            <div className='w-280 aspect-square bg-sky-500'>
                <Canvas camera={{ position: [-8, 4, 0] }}>
                    <Pixelation granularity={8} />
                    <Model position={[0, 0, 0]} scale={4} />
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <OrbitControls />
                    <gridHelper />
                    <axesHelper args={
                        [5]
                    }/>
                </Canvas>
            </div>
        </div >
    )
}

export default Render;