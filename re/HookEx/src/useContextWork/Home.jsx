import React from 'react'
import { useTheme } from './ThemeContext'

function Home() {
    const {theme}=useTheme();
  return (
    <div className="home">

      <h1>Welcome to React</h1>

      <h2>
        Current Theme: {theme}
      </h2>

      <p>
        This is a React useContext
        Dark and Light Theme example.
      </p>

    </div>
  )
}

export default Home
