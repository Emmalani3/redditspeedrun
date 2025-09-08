import { useState, useRef } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import './index.css'
import Header from './components/Header'
import DrawingArea from './components/DrawingArea'
import Gallery from './components/Gallery'
import { store } from './store.js'
import CanvasControls from './features/drawing/CanvasControls'
import DomCapture from './features/screencapture/DomCapture.jsx'
import About from './components/about.jsx'
import Footer from './components/Footer.jsx'

function App() {
 
 // create a single canvas ref for the drawing area & tools
  const canvasRef = useRef(null);
   
 
  return (
    <>
      <Provider store={store}>
        <div>
          <Header />
        </div>
        <div className='col'>
            <div  className="left-col">  
            <Gallery />
          </div>
          <div className="right-col">
            <DrawingArea canvasRef={canvasRef}/>
            <CanvasControls />
            <DomCapture canvasRef={canvasRef} defaultFilename="my-drawing"/>
          </div>
        </div>
        <div>
          <About />
        </div>
        <div>
          <Footer />
        </div>
      </Provider>
    </>
  )
}

export default App
