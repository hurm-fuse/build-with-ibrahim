import React from 'react'
import red from '../../assets/red.jpg'
import './GetWebsite.css'

const GetWebsite = () => {
  return (
    <div className="get-website">
      <div className="left">
        <h1>Get Your Website Today</h1>
        <p>
          Want a professional, modern, and responsive website for your business or idea?
          Fill out the details below and I’ll get in touch with you.
        </p>
      </div>

      <div className="right">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="d2f4693c-30a9-4546-b849-d1a3bf0003ab" />

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="business" placeholder="Business/Project Name" required />
          <textarea name="details" placeholder="Tell me about your website needs..." rows="5" required></textarea>

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  )
}

export default GetWebsite
