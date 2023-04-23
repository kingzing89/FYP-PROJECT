import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">My Pharmacy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Medicines" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">Pain Relievers</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.2">Cold &amp; Flu</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.3">Allergy &amp; Sinus</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1.4">Prescription Medicines</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#signin">Sign In</Nav.Link>
          <Nav.Link href="#signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

