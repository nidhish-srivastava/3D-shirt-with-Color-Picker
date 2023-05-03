import React from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import state from '../store'
import {useSnapshot} from 'valtio'

const Shirt = () => {

  const snap = useSnapshot(state)


  //* Now begins the 3d shit
  const {nodes,materials} = useGLTF('/shirt_baked.glb')

  //* For smooth animation for color,when we change the color using colorPicker
  useFrame((state,delta)=>{
    easing.dampC(materials.lambert1.color,snap.color,0.25,delta)
  })

  const stateString = JSON.stringify(snap)

  return (
    <group key={stateString}>
      <mesh
       castShadow
       geometry={nodes.T_Shirt_male.geometry}
       material={materials.lambert1}
       material-roughness = {1}
       dispose = {null}
      >
      </mesh>
    </group>
  )
}

export default Shirt