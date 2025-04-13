import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope,
  FaMapMarkerAlt 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="footer-section pt-5">
      <Container>
        <Row className="g-4">
          {/* About Section */}
          <Col lg={3} md={6}>
            <motion.div
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <h5 className="text-white mb-4">About CyberShield</h5>
              <p className="mb-4" style={{ color: '#b3b9bf' }}>
                Empowering citizens with cyber law awareness and providing tools to protect 
                against digital threats.
              </p>
              <div className="social-icons d-flex gap-3 mt-4">
                <a 
                  href="https://facebook.com/cybershieldindia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary bg-light rounded-circle p-2"
                >
                  <FaFacebookF size={20} />
                </a>
                <a 
                  href="https://twitter.com/cybershieldindia"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-primary bg-light rounded-circle p-2"
                >
                  <FaXTwitter size={20} />
                </a>
                <a 
                  href="https://linkedin.com/company/cybershieldindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary bg-light rounded-circle p-2"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </motion.div>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6}>
            <motion.div
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <h5 className="text-white mb-4">Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/overview">Laws Overview</Link></li>
                <li><Link to="/laws/it-act">IT Act 2000</Link></li>
                <li><Link to="/helpline">Helplines</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </motion.div>
          </Col>

          {/* Safety & Resources */}
          <Col lg={3} md={6}>
            <motion.div
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <h5 className="text-white mb-4">Safety & Resources</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/safety/personal">Personal Safety</Link></li>
                <li><Link to="/safety/financial">Financial Security</Link></li>
                <li><Link to="/safety/social">Social Media Safety</Link></li>
                <li><Link to="/resources/documents">Legal Documents</Link></li>
                <li><Link to="/resources/portals">Government Portals</Link></li>
              </ul>
            </motion.div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <motion.div
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <h5 className="text-white mb-4">Contact Us</h5>
              <ul className="list-unstyled contact-info">
                <li className="d-flex mb-3">
                  <FaPhoneAlt className="text-primary me-3 mt-1" />
                  <div className="d-flex flex-column">
                    <a href="tel:18002589999" className="contact-link text-muted mb-1">
                      Emergency: 1800-258-9999
                    </a>
                    <a href="tel:1930" className="contact-link text-muted mb-1">
                      Cyber Crime: 1930
                    </a>
                    <a href="tel:1091" className="contact-link text-muted">
                      Women's Helpline: 1091
                    </a>
                  </div>
                </li>
                <li className="d-flex mb-3">
                  <FaEnvelope className="text-primary me-3 mt-1" />
                  <a 
                    href="mailto:support@cybershieldindia.com"
                    className="contact-link"
                  >
                    support@cybershieldindia.com
                  </a>
                </li>
                <li className="d-flex mb-3">
                  <FaMapMarkerAlt className="text-primary me-3 mt-1" />
                  <a 
                    href="https://www.google.com/maps/place/Manipal+University+Jaipur/@26.8464689,75.5635573,17z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Manipal University Jaipur,<br />
                    Near GVK Toll Plaza, Dehmi Kalan,<br />
                    Jaipur, Rajasthan, India
                  </a>
                </li>
              </ul>
              <Button 
                variant="danger" 
                className="mt-3 pulse-button d-flex align-items-center"
                href="https://cybercrime.gov.in"
                target="_blank"
              >
                Report a Cybercrime
              </Button>
            </motion.div>
          </Col>
        </Row>

        {/* Copyright */}
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center py-4 mt-5 border-top border-secondary"
        >
          <p className="mb-0" style={{ color: '#b3b9bf' }}>
            © {new Date().getFullYear()} CyberShield India. All rights reserved.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;