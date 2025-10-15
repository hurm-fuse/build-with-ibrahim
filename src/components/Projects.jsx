import React from 'react'
import one from "../assets/1.png"
import two from '../assets/2.png'
import three from '../assets/3.png'

const Projects = () => {
  return (
    <div className="project" id="projects">
      <h1>My Projects</h1>
      <p>Here are some of the projects I’ve worked on recently. Check them out live:</p>
      <div className="cards">
        <div className="card">
          <img src={three} alt="Project 1 - Print Capital" />
          <div className="padding">
            <h2>Print Capital</h2>
            <p>Custom printing solutions for businesses and individuals.</p>
            <a href="https://www.printcapital.in" target="_blank" rel="noopener noreferrer">
              <button className="btn">→</button>
            </a>
          </div>
        </div>

        <div className="card">
          <img src={one} alt="Project 2 - WJM Aethex" />
          <div className="padding">
            <h2>WJM Aethex</h2>
            <p>A modern web platform built for dynamic online experiences.</p>
            <a href="https://wjm.aethex.online" target="_blank" rel="noopener noreferrer">
              <button className="btn">→</button>
            </a>
          </div>
        </div>

        <div className="card">
          <img src={two} alt="Project 3 - Fearless Fixing" />
          <div className="padding">
            <h2>Fearless Fixing</h2>
            <p>Reliable repair services with a focus on speed and quality.</p>
            <a href="https://fearless-fixing.com" target="_blank" rel="noopener noreferrer">
              <button className="btn">→</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
