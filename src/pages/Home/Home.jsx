import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

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
