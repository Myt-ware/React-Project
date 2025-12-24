import React from 'react'
import { useState } from "react";
import './Home.css'
import { Container, Dropdown, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
function HomeNavBar(){
  const [setIsOpen] = useState(false);
  return (
    <div>
      <Navbar expand="lg" className="main">
  <Container>

    <div className="d-flex align-items-center">
      <Image src="camera.png" width="50" className="me-2" />
      <Navbar.Brand className="text-light fw-bold fs-2">
        Photo Folio
      </Navbar.Brand>
    </div>

    <Navbar.Toggle className="bg-light" />
    <Navbar.Collapse className="justify-content-center">

      <Nav className="mx-auto
    d-flex
    align-items-center
    justify-content-center
    text-center
    w-100">

  <Nav.Link className="text-light b1" as={Link} to={"/"} onClick={() => setIsOpen(false)}>HOME</Nav.Link>
  
  <Nav.Link className="text-light b1" as={Link} to={"/About"} onClick={() => setIsOpen(false)}>ABOUT</Nav.Link>

  <Dropdown className='b1'>
    <Dropdown.Toggle className="bg-black text-light border-0 b1" onClick={() => setIsOpen(false)}>
      GALLERY
    </Dropdown.Toggle>

    <Dropdown.Menu>

      <Dropdown.Item>Nature</Dropdown.Item>
      <Dropdown.Item>People</Dropdown.Item>
      <Dropdown.Item>Architecture</Dropdown.Item>
      <Dropdown.Item>Animals</Dropdown.Item>
      <Dropdown.Item>Sports</Dropdown.Item>
      <Dropdown.Item>Travel</Dropdown.Item>

      <Dropdown.Divider />

      <Dropdown drop="end">
        <Dropdown.Toggle
          className="bg-white text-dark border-0 w-100 text-start">
          Deep Down 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className='b1'>Action</Dropdown.Item>
          <Dropdown.Item className='b1'>Another action</Dropdown.Item>
          <Dropdown.Item className='b1'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </Dropdown.Menu>
  </Dropdown>

  <Nav.Link className="text-light b1" as={Link} to={"/Services"} onClick={() => setIsOpen(false)}>SERVICES</Nav.Link>
  <Nav.Link className="text-light b1" as={Link} to={"/Contact"} onClick={() => setIsOpen(false)}>CONTACT</Nav.Link>

</Nav>

      <div className="d-flex gap-2 align-items-center
                justify-content-center
                justify-content-lg-end
                mt-3 mt-lg-0
                w-100 w-lg-auto">
        <FaInstagram size={22} className="social-icon1 text-light" />
        <FaFacebookF size={22} className="social-icon1 text-light" />
        <FaLinkedinIn size={22} className="social-icon1 text-light" />
        <FaYoutube size={22} className="social-icon1 text-light" />
      </div>

    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
export default HomeNavBar



