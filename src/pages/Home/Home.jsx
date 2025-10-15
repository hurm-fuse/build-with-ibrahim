import React from 'react'
import './Home.css'
import Hero from '../../components/hero'
import About from '../../components/About'
import Services from '../../components/Services'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact/>
    </div>
  )
}

export default Home
