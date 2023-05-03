import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

const CameraRig = ({ children }) => {
  const group = useRef()

  //* 0.This hook allows us to execute code on every render page
  useFrame((state, delta) => {

    //* 1.Setting the rotation of our model smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 8, 0],
      0.25,
      delta
    )

    //* 2. Setting the initial position of the model
    let targetPosition = [-0.4,0,2]

     //* 3. setting model camera position
     easing.damp3(state.camera.position,targetPosition,0.25,delta)
  })
  return (
    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRig