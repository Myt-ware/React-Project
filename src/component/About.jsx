import React from 'react'
import './About.css'
import { Container, Dropdown, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";


function about() {
  return (
    <div>
      <section class="about">
    <div class="about-container">
      <div class="about-text">
        <h1>About Us</h1>
        <p class="subtitle">Who we are & what we do</p>

        <p>
          We are passionate developers focused on creating clean, responsive,
          and user-friendly web applications. Our goal is to deliver modern
          digital experiences using the latest technologies.
        </p>

        <p>
          With strong skills in HTML, CSS, JavaScript, Bootstrap, and React,
          we build projects that are fast, scalable, and visually appealing.
        </p>

        <button class="bt11">Contact Us</button>
      </div>

      <div class="about-img">
        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
             alt="About Image"/>
      </div>
    </div>
  </section>
</div>
  )
}

export default about
