import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = (props) => {
  const clickHandler = (event) => {
    const id = event.target.id
    props.setPage(id)
  }
  return (
    <Navbar bg="light" expand="xl">
      <Navbar.Brand onClick={clickHandler} id="main" href="#home">NAIL LOUNGE OF LA JOLLA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={clickHandler} class="link" id="services" href="#home">SERVICES</Nav.Link>
          <Nav.Link onClick={clickHandler} class="link"  id="about" href="#about-us">ABOUT US</Nav.Link>
          <Nav.Link onClick={clickHandler} class="link"  id="book" href="#book-now"> BOOK NOW</Nav.Link>
          <Nav.Link onClick={clickHandler} class="link" id="contact" href="#contact-us"> CONTACT US</Nav.Link>
          <NavDropdown title="YOUR ACCOUNT" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={clickHandler} id="logIn" href="#log-in">LOG IN</NavDropdown.Item>
            <NavDropdown.Item onClick={clickHandler} id="createAccount" href="#create-account">CREATE ACCOUNT</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={clickHandler} id="profile" href="#profile">PROFILE</NavDropdown.Item>
            <NavDropdown.Item href="#log-out">LOG OUT</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
  
}

export default NavBar;
