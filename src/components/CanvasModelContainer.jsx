import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import Shirt from './Shirt'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'

const CanvasModelContainer = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}    //* smaller fov large size(field of view)
      gl={{ preserveDrawingBuffer: true }}
      className='canvas-main-container'
      >
      <ambientLight intensity={0.3} />
      <Environment preset='city' />
      <CameraRig>
        <Backdrop/>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModelContainer