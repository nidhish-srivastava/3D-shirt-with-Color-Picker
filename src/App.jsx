import React, { useState } from 'react'
import CanvasModelContainer from './components/CanvasModelContainer'
import ColorPicker from './components/ColorPicker'


function App() {
  return (
    <React.Fragment>
    <main className='app'>
      <ColorPicker/>
      <CanvasModelContainer/>
    </main>
    </React.Fragment>
  )
}

export default App