import React from 'react'
import hero from '../assets/hero.png'

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">About Us</h1>
      <div className="about-container">
        <div className="left">
          <img src={hero} alt="About section" />
        </div>
        <div className="right">
          <h1>Build with Ibrahim</h1>
          <p>
            I’m Ibrahim, a passionate web developer focused on building clean,
            responsive, and user-friendly websites. With a strong eye for design
            and detail, I love turning ideas into functional digital experiences.
          </p>
          <div className="btn">
            <a href="/contact">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
