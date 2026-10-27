import React from 'react'
import { useTheme } from './ThemeContext'

function Navbar() {
    const {theme, toggleTheme}=useTheme();
  return (
   <nav className='navbar'>
    <h2>KICT Website</h2>
    <button onClick={toggleTheme}>
        {theme==="light"?"switch to  dark":"switch to  light"}
    </button>
   </nav>
  )
}

export default Navbar
