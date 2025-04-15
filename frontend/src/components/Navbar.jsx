import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { FaExclamationTriangle, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { trackButtonClick } from '../utils/analytics';

function NavigationBar() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      trackButtonClick('login_signup', { method: 'google' });
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      trackButtonClick('sign_out');
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleHaveProblemClick = () => {
    trackButtonClick('have_problem', { user_id: user?.uid });
  };

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

            {user ? (
              <>
                <NavDropdown title={user.displayName || 'User'} id="user-dropdown">
                  <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
                </NavDropdown>
                <Button 
                  variant="danger" 
                  className="ms-2 pulse-button d-flex align-items-center"
                  as={Link}
                  to="/have-problem"
                  onClick={handleHaveProblemClick}
                >
                  <FaExclamationTriangle className="me-2" />
                  Have a Problem?
                </Button>
              </>
            ) : (
              <Button 
                variant="primary" 
                className="ms-2 d-flex align-items-center"
                onClick={signInWithGoogle}
              >
                <FaSignInAlt className="me-2" />
                Login/Sign Up
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;