import React from 'react'

const Services = () => {
  return (
    <div className="service">
      <h1>My Services</h1>
      <p>
        I provide a range of web development solutions tailored to your needs.
        From modern websites to responsive designs, here’s what I can do:
      </p>
      <div className="card-container">
        <div className="card">
          <h2>Web Design</h2>
          <p>Creating sleek, modern, and user-friendly designs that capture attention.</p>
        </div>
        <div className="card">
          <h2>Web Development</h2>
          <p>Building responsive, functional, and scalable websites with clean code.</p>
        </div>
        <div className="card">
          <h2>SEO Optimization</h2>
          <p>Improving visibility on search engines to help your site reach more people.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
