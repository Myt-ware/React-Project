import React from 'react'
import './Services.css'
import HomeNavBar from './HomeNavBar'


function Services() {
  return (
    <div>
<HomeNavBar/>

      <section class="services">
    <div class="services-header">
      <h1>Our Services</h1>
      <p>What we can do for you</p>
    </div>

    <div class="services-container">

      <div class="service-card">
        <h3>Wedding Photography</h3>
        <p>
        We capture your special day with timeless photos that tell your love story, focusing on genuine emotions, candid moments, and beautiful details.        </p>
      </div>

      <div class="service-card">
        <h3>Portrait Photography</h3>
        <p>
          Professional portrait sessions designed to highlight personality and confidence, perfect for individuals, families, and personal branding.
        </p>
      </div>

      <div class="service-card">
        <h3>Event Photography</h3>
        <p>
          From corporate events to private functions, we document every important moment with creativity, clarity, and attention to detail.
        </p>
      </div>

      <div class="service-card">
        <h3>Product Photography</h3>
        <p>
          High-quality product images that enhance brand value, ideal for e-commerce, social media, and marketing campaigns.
        </p>
      </div>

      <div class="service-card">
        <h3>Travel & Landscape Photography</h3>
        <p>
          Stunning visuals that capture the beauty of locations, nature, and culture, suitable for magazines, blogs, and promotional use.
        </p>
      </div>

      <div class="service-card">
        <h3>Commercial Photography</h3>
        <p>
          Creative and professional photography solutions for businesses, helping brands communicate their story through powerful visuals.
        </p>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Services
