import React from 'react'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h1>Contact Me</h1>
        <p>If you’d like to work together or have any questions, feel free to reach out.</p>
      </div>
      <div className="right">
        <form action="https://api.web3forms.com/submit" method="POST">
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