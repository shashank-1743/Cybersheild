import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center brand-container">
          <div className="logo-wrapper me-2">
            <img
              src="/logo.jpg"
              className="brand-logo"
              alt="CyberShield Logo"
            />
          </div>
          <div className="brand-text">
            <span className="brand-name">CyberShield</span>
            <span className="brand-tagline">India</span>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            
            <NavDropdown title="Laws" id="laws-dropdown">
              <NavDropdown.Item as={Link} to="/overview">Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/laws/it-act">IT Act 2000</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/laws/penalties">Penalties</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/laws/rights">Digital Rights</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Safety Tips" id="safety-dropdown">
              <NavDropdown.Item as={Link} to="/safety/personal">Personal Safety</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/safety/financial">Financial Security</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/safety/social">Social Media Safety</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/safety/device">Device Security</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="resources-dropdown">
              <NavDropdown.Item as={Link} to="/resources/documents">Legal Documents</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/resources/portals">Government Portals</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/helpline">Helpline Numbers</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/faqs">FAQs</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            <Button 
              variant="danger" 
              className="ms-2 pulse-button d-flex align-items-center"
              as={Link}
              to="/have-problem"
            >
              <FaExclamationTriangle className="me-2" />
              Have a Problem?
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;