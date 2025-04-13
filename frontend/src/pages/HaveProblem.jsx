import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaExclamationTriangle, FaFileAlt, FaSpinner } from 'react-icons/fa';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

function HaveProblem() {
  const ref = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    incidentTime: '',
    location: '',
    incidentType: '',
    description: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const res = await fetch(`${apiUrl}/api/report`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit report');
      }

      setResponse(data);
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        incidentTime: '',
        location: '',
        incidentType: '',
        description: '',
        consent: false
      });

      // Scroll to response
      const responseElement = document.getElementById('analysis-response');
      if (responseElement) {
        responseElement.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
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
                animate="visible"
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h1 className="display-4 fw-bold mb-4">
                  Report a Cyber Incident
                </h1>
                <p className="lead mb-4">
                  Tell us about your cybersecurity issue, and we'll help you understand your rights and next steps.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-light p-4 rounded-3 mb-4">
                <h4 className="d-flex align-items-center mb-3">
                  <FaShieldAlt className="text-primary me-2" />
                  Why Report?
                </h4>
                <p className="text-muted">
                  Your report helps us analyze the incident, identify applicable laws, and guide you through the 
                  proper reporting channels. We'll provide personalized recommendations based on your situation.
                </p>
              </div>

              <div className="bg-light p-4 rounded-3 mb-4">
                <h4 className="d-flex align-items-center mb-3">
                  <FaExclamationTriangle className="text-primary me-2" />
                  Emergency?
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <strong>Cyber Crime Helpline:</strong><br />
                    <a href="tel:1930" className="text-danger">1930</a>
                  </li>
                  <li className="mb-2">
                    <strong>Women's Helpline:</strong><br />
                    <a href="tel:1091" className="text-danger">1091</a>
                  </li>
                  <li>
                    <strong>Report Online:</strong><br />
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-danger">
                      cybercrime.gov.in
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-light p-4 rounded-3">
                <h4 className="d-flex align-items-center mb-3">
                  <FaFileAlt className="text-primary me-2" />
                  What to Include
                </h4>
                <ul className="list-unstyled mb-0 text-muted">
                  <li className="mb-2">✔ Detailed description of the incident</li>
                  <li className="mb-2">✔ Time and date of occurrence</li>
                  <li className="mb-2">✔ Any available evidence</li>
                  <li>✔ Your contact information</li>
                </ul>
              </div>
            </motion.div>
          </Col>

          <Col lg={8}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="have-problem-section"
            >
              <h2 className="mb-4">Incident Report Form</h2>

              {error && (
                <Alert variant="danger" className="error-state">
                  {error}
                </Alert>
              )}

              <Form className="incident-report-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Full Name (Optional)</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email Address (Optional)</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  <Form.Text className="text-muted">
                    We'll send you a copy of the analysis to this email.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>When did the incident occur?*</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="incidentTime"
                    value={formData.incidentTime}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Incident Type</Form.Label>
                  <Form.Select
                    name="incidentType"
                    value={formData.incidentType}
                    onChange={handleChange}
                  >
                    <option value="">Select incident type</option>
                    <option value="financial_fraud">Financial Fraud</option>
                    <option value="cyberbullying">Cyberbullying</option>
                    <option value="identity_theft">Identity Theft</option>
                    <option value="hacking">Hacking</option>
                    <option value="phishing">Phishing</option>
                    <option value="data_breach">Data Breach</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Detailed Description*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please describe what happened in detail. Include any relevant information that might help us analyze your situation."
                    required
                  />
                  <Form.Text className="text-muted">
                    The more details you provide, the better we can assist you.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    label="I consent to sharing this information for analysis and assistance purposes."
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    size="lg"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <FaSpinner className="me-2 spinner" /> Analyzing...
                      </>
                    ) : (
                      'Submit Report'
                    )}
                  </Button>
                </div>
              </Form>

              {isLoading && (
                <div className="incident-form-loading">
                  <FaSpinner size={32} className="spinner" />
                  <p className="mt-3">Analyzing your incident...</p>
                </div>
              )}

              {response && (
                <div id="analysis-response" className="analysis-response">
                  <h2 className="mb-4">Analysis Results</h2>
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: response.data.analysis 
                    }} 
                  />
                  <Button 
                    variant="outline-primary" 
                    onClick={() => window.print()}
                    className="mt-4 print-button"
                  >
                    Print Analysis
                  </Button>
                </div>
              )}

              <Alert variant="info" className="mt-4">
                <h5>💡 Note:</h5>
                <p className="mb-0">
                  This form helps analyze your situation and provides guidance. For immediate assistance or to file an official complaint, 
                  please contact the Cyber Crime Helpline at 1930 or visit cybercrime.gov.in
                </p>
              </Alert>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default HaveProblem;