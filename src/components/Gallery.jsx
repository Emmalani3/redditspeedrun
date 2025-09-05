import React from 'react'
import Tile from './Tile'


function Carousel() {
  const outline = {
    border: '2px solid yellow',
  }
  return (
    <div style={outline}>
      <h2>Gallery!</h2>
      <p> I hold the tiles</p>
      <Tile />
      <Tile />
      <Tile />
    </div>
  )
}

export default Carousel