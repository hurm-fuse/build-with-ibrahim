import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <img src={hero} alt="Portfolio hero" />
      </div>
      <div className="right">
        <h1>Build with Ibrahim</h1>
        <p>I create modern, responsive, and user-friendly websites.</p>
        <div className="btn">
          <a href="#projects">View My Work</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
