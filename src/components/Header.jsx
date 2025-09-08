import React from 'react'
import Search from './Search'
import '../App.css'
import { loginToReddit } from '../features/reddit/signin'; 

function Header() {
  const token = localStorage.getItem('reddit_access_token');

  return (
    <div className='header'>
        <h1>I Draw Reddit</h1>
        {!token ? (
            <button onClick={loginToReddit}>Sign in with Reddit to search for inspiration!</button>
        ) : (
            <Search />
        )}
        
    </div>
  )
}

export default Header