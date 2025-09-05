import React from 'react'

function Tile() {
  const outline = {
    border: '2px solid purple',
  }
  return (
    <div style={outline}>
      <p>Im a tile</p>
      <p>I display the image from reddit the title of the post and the select button</p>
    </div>
  )
}

export default Tile