import React, {useState, useEffect} from 'react'

function DrawingArea() {
  const outline = {
    border: '2px solid green',
  }
  const svg = {
    width:'90%',
    height: '500',
    backgroundColor:'white'
  }
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const[tracking, setTracking] = useState(true)

  const logMousePosition = e => {
      setX(e.clientX)
      setY(e.clientY)
  }
  useEffect(() => {
      if(tracking) {
          window.addEventListener('mousemove', logMousePosition)
      }
      return () => {
          window.removeEventListener('mousemove', logMousePosition)
      }
  }, [tracking]) // ← this setup runs only once, but keeps the listener active

  const changeTracking = () => {
      setTracking(!tracking);
      setX(0);
      setY(0);
  }
  
  return (
    <div style={outline}>
        <p>DrawingArea</p>
        <svg className="canvas" style={svg}>
          
        </svg>
        <p>I also hold the drawing tool selectors like color size clear-all turn-on-timer</p>
        
        <h2>UseEffect to Track Mouse</h2>
        <p>Mouse Position:</p> 
        <p>X: {x} Y: {y} </p>
        {tracking ? (
            <button onClick={changeTracking}>Stop Tracking Mouse</button>
            ) : (
            <button onClick={changeTracking}>Track Mouse</button>
        )}
    </div>
  )
}

export default DrawingArea