import React from 'react'
import Search from './Search'
import '../App.css'

function Header() {
  
  return (
    <div className='header'>
        <h1>I Draw Reddit</h1>
        <Search />
    </div>
  )
}

export default Header