import React from 'react'

function Footer() {
    const yr = document.getElementById('yr');
    if (yr) yr.textContent = new Date().getFullYear();

  return (
    <div>
        <footer>
        <small>© <span id="yr"></span>Built by: Emma Lani Bufalini</small>
        </footer>
    </div>
  )
}

export default Footer