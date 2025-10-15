import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Left Section */}
        <div className="top">
          <h2>Quick Links</h2>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="divider"></div>

        {/* Right Section */}
        <div className="bottom">
          <h2>Contact</h2>
          <div className='contact-info'>
            <p><a href="mailto:hurmfuse@gmail.com">hurmfuse@gmail.com</a></p>
            <p><a href="tel:+918595507101">+91 8595507101</a></p>
            <p>India</p>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="footer-logo">
        <h1>BUILD WITH IBRAHIM</h1>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Build With Ibrahim. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
