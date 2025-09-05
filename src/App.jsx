import { useState, useRef } from 'react'
import { Provider } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import Header from './components/Header'
import DrawingArea from './components/DrawingArea'
import Gallery from './components/Gallery'
import { store } from './store.js'
import CanvasControls from './features/drawing/CanvasControls'
import DomCapture from './features/screencapture/DomCapture.jsx'

function App() {
  const canvasRef = useRef(null); 
  
  const page = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    columnGap: '20px',
  }
  const outline = {
    border:'2px solid hotPink',
    padding: '10px',
    margin: '10px'
  }
  return (
    <>
      <Provider store={store}>
        <div>
          <Header />
        </div>
        <div style={page}>
            <div>
            <Gallery />
            <Timer />
          </div>
          <div >
            <DrawingArea canvasRef={canvasRef}/>
            <CanvasControls />
            <DomCapture canvasRef={canvasRef} defaultFilename="my-drawing"/>
          </div>
        </div>
      </Provider>
    </>
  )
}

export default App
