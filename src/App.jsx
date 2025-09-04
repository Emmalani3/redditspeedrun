import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import Header from './components/Header'
import DrawingArea from './components/DrawingArea'
import Gallery from './components/Gallery'

function App() {

  return (
    <>
      <Header />
      <Gallery />
      <Timer />
      <DrawingArea />
    </>
  )
}

export default App
