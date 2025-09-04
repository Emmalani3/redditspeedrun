import React from 'react'
import Search from './Search'
import '../styles/styles.css'

function Header() {
  return (
    <div className='header'>
        <h1>I Draw Reddit</h1>
        <Search />
    </div>
  )
}

export default Header