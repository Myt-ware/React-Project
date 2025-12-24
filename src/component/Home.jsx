import React from 'react'
import './Home.css'
import { Container, Dropdown, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HomeNavBar from './HomeNavBar';



function Home() {
  return (
    <div>
      <HomeNavBar/>
        <div className='page1 mt-5'>
<h1 className="w-50 m-auto mainhead">
  I'm{" "}
  <span
    style={{
      background: "linear-gradient(to top, rgb(5, 184, 124) 50%, transparent 50%)"
    }}
  >
    Jenny Wilson
  </span>{" "}
  a Professional Photographer from New York City
</h1>
            <p className='w-50 m-auto pera'>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
          <Link to={"/About"}> 
            <button className='bt1'>AVAILABLE FOR HIRE</button>
        </Link> 
        </div> 

        <section id="gallery" class="gallery section">

      <div class="container-fluid aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 justify-content-center">

          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-8-2.jpg" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-1.jpg" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-2.jpg" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-3.jpg" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-4.jpg" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-5.jpg" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-6.jpg" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-7.jpg" class="img-fluid" alt=""/>
            </div>
          </div>

        </div>

      </div>

    </section>

    {/* <footer id="footer" class="footer">
    <div class="container">
      <div class="copyright text-center ">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">PhotoFolio</strong> <span>All Rights Reserved</span></p>
      </div>
      <div class="social-links d-flex justify-content-center">
         <FaInstagram size={22} className="social-icon text-light" />
        <FaFacebookF size={22} className="social-icon text-light" />
        <FaLinkedinIn size={22} className="social-icon text-light" />
        <FaYoutube size={22} className="social-icon text-light" />
      </div>
      <div class="credits">
       <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer> */}
    </div>
  )
}

export default Home
