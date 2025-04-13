import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  FaSearch, 
  FaShieldAlt, 
  FaUserShield, 
  FaGlobe,
  FaCreditCard,
  FaUsers,
  FaChild,
  FaMobile,
  FaShoppingCart,
  FaPhoneAlt,
  FaExclamationTriangle
} from 'react-icons/fa';

function Helpline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [scrollY, setScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const helplineData = [
    {
      title: "National Cyber Crime Helpline (India)",
      icon: <FaShieldAlt />,
      phone: "1930",
      website: "cybercrime.gov.in",
      email: null,
      description: "For financial frauds, cyber scams, and online harassment."
    },
    {
      title: "CERT-In (Indian Computer Emergency Response Team)",
      icon: <FaUserShield />,
      phone: "+91-1800-11-4949",
      website: "cert-in.org.in",
      email: "incident@cert-in.org.in",
      description: "For hacking attempts, security breaches, malware attacks, cybersecurity incidents."
    },
    {
      title: "Local Police (Cyber Crime Cells)",
      icon: <FaUsers />,
      phone: "112",
      website: "cybercrime.gov.in",
      email: null,
      description: "Filing FIRs related to cyber frauds, online abuse, identity theft."
    },
    {
      title: "RBI Digital Payment Fraud Helpline",
      icon: <FaCreditCard />,
      phone: "14440",
      website: "cms.rbi.org.in",
      email: null,
      description: "UPI fraud, credit/debit card fraud, unauthorized transactions."
    },
    {
      title: "Women & Child Safety Helpline",
      icon: <FaChild />,
      phone: "7827 170 170",
      website: "ncwapps.nic.in",
      email: null,
      description: "Cyberstalking, online harassment, revenge porn. For children, call 1098."
    },
    {
      title: "TRAI - SIM Card & Mobile Fraud",
      icon: <FaMobile />,
      phone: "1909",
      website: "trai.gov.in",
      email: null,
      description: "SIM swapping fraud, phishing calls, unsolicited messages."
    },
    {
      title: "IT Ministry Grievance Officer",
      icon: <FaGlobe />,
      phone: "011-24301851",
      website: "meity.gov.in",
      email: "grievance.meity@gov.in",
      description: "Fake news, hate speech, content takedown requests."
    },
    {
      title: "Consumer Complaints (Online Shopping)",
      icon: <FaShoppingCart />,
      phone: "1800-11-4000",
      website: "consumerhelpline.gov.in",
      email: "consumerhelpline@nic.in",
      description: "E-commerce frauds, fake products, refund scams. Alternative number: 1915"
    }
  ];

  // Filter helplines based on search term
  const filteredHelplines = helplineData.filter(helpline => 
    helpline.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    helpline.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (helpline.phone && helpline.phone.includes(searchTerm))
  );

  return (
    <>
      <NavigationBar />
      
      {/* Hero Section */}
      <div className="overview-hero position-relative" ref={ref}>
        <div 
          className="hero-background"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
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
                  🚨 Cyber Crime Helplines & Reporting Channels
                </h1>
                <p className="lead mb-4">
                  Get instant assistance for cyber fraud, online scams, and digital security issues
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mx-auto" style={{ maxWidth: '500px' }}>
                  <Button 
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    variant="danger"
                    className="pulse-button flex-grow-1"
                    style={{ minWidth: '200px' }}
                  >
                    Report Cyber Crime
                  </Button>
                  <Button 
                    as={Link}
                    to="/overview"
                    variant="outline-light"
                    className="flex-grow-1"
                    style={{ minWidth: '200px' }}
                  >
                    Know Your Rights
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        {/* Search Bar */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search helpline numbers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </motion.div>
          </Col>
        </Row>

        {/* Helpline Cards */}
        <Row className="g-4">
          {filteredHelplines.length > 0 ? (
            filteredHelplines.map((helpline, index) => (
              <Col lg={6} key={index} className="d-flex">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-100"
                >
                  <Card className="border-0 shadow-sm helpline-card h-100">
                    <Card.Body className="p-4 d-flex flex-column">
                      <div className="d-flex align-items-center mb-3">
                        <span className="text-primary me-3" style={{ fontSize: '24px' }}>
                          {helpline.icon}
                        </span>
                        <h3 className="h5 mb-0">{helpline.title}</h3>
                      </div>
                      <p className="text-muted mb-3">{helpline.description}</p>
                      <div className="contact-details mt-auto">
                        {helpline.phone && (
                          <div className="mb-2 d-flex align-items-center justify-content-between">
                            <p className="mb-0">
                              <strong>📞 Phone:</strong> {helpline.phone}
                            </p>
                            <a 
                              href={`tel:${helpline.phone.replace(/\s+/g, '')}`}
                              className="btn btn-primary btn-sm d-md-none"
                              aria-label={`Call ${helpline.title}`}
                            >
                              <FaPhoneAlt size={14} />
                            </a>
                          </div>
                        )}
                        {helpline.email && (
                          <p className="mb-2">
                            <strong>📧 Email:</strong> {helpline.email}
                          </p>
                        )}
                        <p className="mb-0">
                          <strong>🌐 Website:</strong>{' '}
                          <a 
                            href={`https://${helpline.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {helpline.website}
                          </a>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-center py-5">
                  <FaSearch className="text-muted mb-3" size={40} />
                  <h3 className="h4 text-muted">No results found</h3>
                  <p className="text-muted mb-0">
                    Try different keywords or check for spelling errors
                  </p>
                </div>
              </motion.div>
            </Col>
          )}
        </Row>
      </Container>

      {/* Floating Action Button */}
      <div className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1000 }}>
        <Button
          variant="danger"
          className="rounded-pill d-flex align-items-center justify-content-center px-3 py-2 shadow"
          href="https://cybercrime.gov.in"
          target="_blank"
        >
          <FaExclamationTriangle className="me-2" size={16} />
          Report Crime
        </Button>
      </div>

      <Footer />
    </>
  );
}

export default Helpline; 