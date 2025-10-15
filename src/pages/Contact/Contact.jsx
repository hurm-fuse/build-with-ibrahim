import React from 'react'
import { Youtube, Instagram, Linkedin, Github } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="information">
        <h1>Get in Touch</h1>
        <p>I’d love to hear from you! Whether it’s a project, question, or just a hello 👋</p>
        <div className="contact-info-1">
          <div className="socials">
            <a href="https://www.youtube.com/@buildwithibrahim" target="_blank" rel="noopener noreferrer">
              <Youtube size={30} />
            </a>
            <a href="https://www.instagram.com/hurmfuse" target="_blank" rel="noopener noreferrer">
              <Instagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/hurm-fuse-62741a373/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={30} />
            </a>
            <a href="https://github.com/hurm-fuse" target="_blank" rel="noopener noreferrer">
              <Github size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <form className="form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="d2f4693c-30a9-4546-b849-d1a3bf0003ab" />

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
