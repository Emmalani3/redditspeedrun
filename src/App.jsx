import { useState } from 'react'
import { Provider } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import Header from './components/Header'
import DrawingArea from './components/DrawingArea'
import Gallery from './components/Gallery'
import { store } from './store'

function App() {

  return (
    <>
    <Provider store={store}>
      <Header />
      <Gallery />
      <Timer />
      <DrawingArea />
    </Provider>
    </>
  )
}

export default App
