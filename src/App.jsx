import React from 'react'
import data from './data.js'
import Hero from '../components/Hero.jsx'
import NavBar from '../components/NavBar.jsx'

function App() {
  const tiles = data.map(tile => {
    return (
      <Hero 
        key= {tile.id}
        {...tile}
      />
    )
  })

  return (
    <div className="final-score">
      <div className="main--component">
        <NavBar />
      
        <section className="tiles">
          {tiles}  
        </section>

      </div>
    </div>
    
  )
}

export default App
