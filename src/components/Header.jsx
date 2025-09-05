import React from 'react'
import Search from './Search'
import '../styles/styles.css'

function Header() {
  const outline= {
    border: "2px solid aqua",
  }
  return (
    <div className='header'>
        <h1 style={outline}>I Draw Reddit</h1>
        <Search />
    </div>
  )
}

export default Header