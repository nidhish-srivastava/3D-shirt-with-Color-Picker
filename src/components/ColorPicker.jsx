import React,{useState} from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'


const ColorPicker = () =>{
  const snap = useSnapshot(state)

  // NOTE --> NO STATE UPDATION HAPPENS IF THIS IS IN THE AREA OF THE 3D MODEL
 
   
    return(
        <div className='color-picker'>
    <SketchPicker 
      color={snap.color}
      disableAlpha
      onChange={(color)=>state.color = color.hex}  //* Changing the state(of color dynamically by using the color picker)
     /> 
        </div>
    )
}

export default ColorPicker