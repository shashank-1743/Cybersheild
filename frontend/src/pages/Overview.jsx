import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaShieldAlt, FaBalanceScale, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [scrollY, setScrollY] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  An Introduction to Cyber Laws in India
                </h1>
                <p className="lead mb-4">
                  Understanding the foundations of digital rights and legal protections in cyberspace
                </p>
                <Button 
                  as={Link} 
                  to="/laws/it-act" 
                  variant="outline-light" 
                  className="mt-3"
                >
                  Continue to IT Act 2000 <i className="fas fa-arrow-right ms-2"></i>
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        {/* What Are Cyber Laws Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm overview-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <FaShieldAlt className="text-primary me-3" size={30} />
                    <h2 className="mb-0">What Are Cyber Laws?</h2>
                  </div>
                  <p className="lead mb-4">
                    Cyber laws are a set of legal guidelines designed to protect individuals, businesses, and governments from crimes committed in the digital space.
                  </p>
                  <div className="mb-4">
                    <h5 className="text-primary mb-3">Why Cyber Laws Matter?</h5>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <strong>Rising Cybercrimes:</strong> India has witnessed a 300% increase in cybercrime cases in recent years. From phishing scams to ransomware attacks, online threats continue to evolve.
                      </li>
                      <li className="mb-3">
                        <strong>Data Protection:</strong> Every time you shop online, use social media, or store personal data on the cloud, cyber laws ensure that your privacy is safeguarded.
                      </li>
                      <li>
                        <strong>Legal Protection:</strong> Understanding cyber laws helps you know your rights and how to take action if you become a victim of cybercrime.
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Key Features Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm overview-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <FaBalanceScale className="text-primary me-3" size={30} />
                    <h2 className="mb-0">Key Features of Indian Cyber Laws</h2>
                  </div>
                  <div className="feature-list">
                    <div className="mb-4">
                      <h5>IT Act 2000 (Information Technology Act)</h5>
                      <p>The IT Act 2000 is India's primary law governing cyber activities. It regulates electronic transactions, cybercrimes, and digital signatures. The law has been amended over time to address modern threats like data breaches, cyberstalking, and online defamation.</p>
                    </div>
                    <div className="mb-4">
                      <h5>Data Protection & Privacy</h5>
                      <p>With increasing concerns over data misuse, India is working on strict data protection regulations. The Digital Personal Data Protection (DPDP) Act is a recent step towards safeguarding personal data.</p>
                    </div>
                    <div>
                      <h5>Cybercrimes & Penalties</h5>
                      <ul>
                        <li>Hacking (Section 66B IT Act) – Up to 3 years imprisonment & fines</li>
                        <li>Online Defamation (Section 499 IPC) – Legal action for spreading false information online</li>
                        <li>Financial Fraud (Section 66C IT Act) – Punishable for using stolen credit card or bank details</li>
                        <li>Cyberstalking & Harassment – Strict legal actions against online harassment</li>
                      </ul>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Rights & Responsibilities Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm overview-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <FaUserShield className="text-primary me-3" size={30} />
                    <h2 className="mb-0">Your Rights & Responsibilities</h2>
                  </div>
                  <div className="rights-section">
                    <Row>
                      <Col lg={6} className="mb-4 mb-lg-0">
                        <div className="rights-column p-3 h-100">
                          <h5 className="text-primary">Digital Rights</h5>
                          <ul>
                            <li>Right to privacy and data protection</li>
                            <li>Freedom of expression online</li>
                            <li>Access to information</li>
                            <li>Right to be forgotten</li>
                          </ul>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="rights-column p-3 h-100">
                          <h5 className="text-primary">Online Responsibilities</h5>
                          <ul>
                            <li>Maintaining digital security</li>
                            <li>Respecting others' privacy</li>
                            <li>Following cyber ethics</li>
                            <li>Reporting cybercrimes</li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* How CyberShield India Helps Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm overview-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <FaShieldAlt className="text-primary me-3" size={30} />
                    <h2 className="mb-0">How CyberShield India Helps?</h2>
                  </div>
                  <div className="help-section">
                    <div className="mb-3">
                      <h5>🔹 Simplified Explanations</h5>
                      <p>We break down complex cyber laws into easy-to-understand language. No legal jargon, just straightforward insights.</p>
                    </div>
                    <div className="mb-3">
                      <h5>🔹 Step-by-Step Guides</h5>
                      <p>If you're a victim of cybercrime, our platform guides you on how to file complaints with cyber police and authorities.</p>
                    </div>
                    <div>
                      <h5>🔹 Cyber Safety Tips</h5>
                      <p>We help you stay protected online with tips on strong passwords, social media privacy, and avoiding online scams.</p>
                    </div>
                  </div>
                  <div className="text-center mt-4 d-flex justify-content-center gap-3">
                    <Button 
                      as={Link}
                      to="/laws/it-act"
                      variant="primary"
                      style={{ width: '200px' }}
                    >
                      Learn More About the IT Act
                    </Button>
                    <Button
                      href="https://cybercrime.gov.in"
                      target="_blank"
                      variant="danger"
                      style={{ width: '200px' }}
                    >
                      Report a Cyber Crime
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Overview; 