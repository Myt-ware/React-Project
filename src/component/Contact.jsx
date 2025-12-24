import React from 'react';
import './Contact.css'
import HomeNavBar from './HomeNavBar';

function Contact() {
  return (
    <div>
<HomeNavBar/>

      <section className="contact">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Let’s work together. Feel free to reach out.</p>
        </div>

        <div className="contact-container">
          
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: yourname@email.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Kerala, India</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required />
            <button type="submit" className="bt2">Send Message</button>
          </form>

        </div>
      </section>
    </div>
  );
}

export default Contact;
