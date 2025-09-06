import { useState, useRef } from 'react'
import { Provider } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import './styles/styles.css'
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
  
  return (
    <>
      <Provider store={store}>
        <div>
          <Header />
        </div>
        <div className='main' style={page}>
            <div  className="left-col">
            <Gallery />
          </div>
          <div className="right-col">
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
