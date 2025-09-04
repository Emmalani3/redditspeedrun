import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './components/Carousel'
import Timer from './components/Timer'
import Header from './components/Header'
import DrawingArea from './components/DrawingArea'


function App() {

  return (
    <>
    <Header />
    <Carousel />
    <Timer />
    <DrawingArea />
    </>
  )
}

export default App
