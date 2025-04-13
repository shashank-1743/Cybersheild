import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    attachment: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
        attachment: null
      });
    }, 3000);
  };

  return (
    <>
      <NavigationBar />
      
      {/* Hero Section */}
      <div className="overview-hero position-relative" ref={ref}>
        <div 
          className="hero-background"
          style={{
            backgroundImage: `url('/cyber.jpg')`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            zIndex: 1
          }}
        />
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="align-items-center min-vh-75">
            <Col lg={10} className="mx-auto text-center text-white">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h1 className="display-4 fw-bold mb-4">
                  Get in Touch with Us
                </h1>
                <p className="lead mb-4">
                  Need help? Reach out for support, inquiries, or reporting cyber threats.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        <Row className="g-5">
          {/* Contact Information */}
          <Col lg={5}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="mb-4">Contact Information</h2>
              <div className="contact-info mb-5">
                <div className="d-flex align-items-center mb-4">
                  <FaMapMarkerAlt className="text-primary me-3" size={24} />
                  <div>
                    <h5 className="mb-1">Address</h5>
                    <p className="mb-0 text-muted">
                      Manipal University Jaipur,<br />
                      Near GVK Toll Plaza, Dehmi Kalan,<br />
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <FaPhoneAlt className="text-primary me-3" size={24} />
                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p className="mb-0">
                      <a href="tel:1930" className="text-muted text-decoration-none">
                        Cyber Crime Helpline - 1930
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <FaEnvelope className="text-primary me-3" size={24} />
                  <div>
                    <h5 className="mb-1">Email</h5>
                    <p className="mb-0">
                      <a href="mailto:support@cybershieldindia.com" className="text-muted text-decoration-none">
                        support@cybershieldindia.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <h5 className="mb-3">Follow Us</h5>
              <div className="d-flex gap-3 mb-5">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="btn btn-light rounded-circle p-2">
                  <FaLinkedin size={24} className="text-primary" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="btn btn-light rounded-circle p-2">
                  <FaTwitter size={24} className="text-primary" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="btn btn-light rounded-circle p-2">
                  <FaFacebook size={24} className="text-primary" />
                </a>
              </div>

              {/* Emergency Contact Box */}
              <div className="bg-danger text-white p-4 rounded-3">
                <h5 className="mb-3">Emergency Helplines</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <strong>Cyber Crime:</strong> 1930
                  </li>
                  <li className="mb-2">
                    <strong>Women's Helpline:</strong> 1091
                  </li>
                  <li>
                    <a 
                      href="https://cybercrime.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none"
                    >
                      <strong>Official Portal:</strong> cybercrime.gov.in
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-light p-4 p-lg-5 rounded-3">
                <h2 className="mb-4">Send us a Message</h2>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4">
                    <Form.Label>Subject</Form.Label>
                    <Form.Select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option>General Inquiry</option>
                      <option>Report Issue</option>
                      <option>Legal Help</option>
                      <option>Feedback</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Attachment</Form.Label>
                    <Form.Control 
                      type="file"
                      onChange={(e) => setFormData({...formData, attachment: e.target.files[0]})}
                    />
                    <Form.Text className="text-muted">
                      Upload screenshots or relevant documents (Max size: 5MB)
                    </Form.Text>
                  </Form.Group>
                  <div className="d-grid">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : submitSuccess ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </div>
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Google Maps */}
        <Row className="mt-5">
          <Col>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4439080246814!2d75.56355731504417!3d26.84646898315771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b9cc44bdc2ffc86!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1647521714268!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Manipal University Jaipur Location"
                ></iframe>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Contact; 