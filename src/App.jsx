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
            <DrawingArea />
          </div>
        </div>
      </Provider>
    </>
  )
}

export default App
