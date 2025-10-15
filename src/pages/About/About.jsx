import React from 'react'
import hero from '../../assets/hero.png'
import './About.css'

const About = () => {
  return (
    <div className="about-us">
      <div className="hero">
        <div className="left">
          <img src={hero} alt="" />
        </div>
        <div className="right">
          <h1>About Me</h1>
          <p>
            I’m a passionate web developer who enjoys building clean and
            responsive websites. Always learning, always creating, and
            constantly improving my craft.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
