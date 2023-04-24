import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#"><b>Medicart</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <NavDropdown title="Medicines" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/pain-relievers">Pain Relievers</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/cold-flu">Cold &amp; Flu</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/allergy-sinus">Allergy &amp; Sinus</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/prescription-medicines">Prescription Medicines</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
          <Nav.Link as={Link} to="/medicine">Medicines</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
          <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

