import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaShieldAlt, FaGavel, FaUserShield } from 'react-icons/fa';

function DigitalRights() {
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
    }
  };

  const rights = [
    {
      title: "Right to Privacy",
      content: "Every individual has the fundamental right to privacy in the digital space, protected under Article 21 of the Indian Constitution and the Personal Data Protection Bill. This includes control over personal data collection, usage, and sharing.",
      keyPoints: [
        "Protection of personal information",
        "Consent for data collection",
        "Right to withdraw consent",
        "Protection against surveillance"
      ]
    },
    {
      title: "Right to Data Protection",
      content: "Under the Digital Personal Data Protection Act 2023, users have comprehensive rights regarding their personal data, including how it's collected, processed, and stored by organizations.",
      keyPoints: [
        "Access to stored personal data",
        "Data correction and erasure",
        "Data portability",
        "Breach notification"
      ]
    },
    {
      title: "Right to Internet Access",
      content: "Access to the internet is recognized as a fundamental right by the Supreme Court of India. Government initiatives aim to ensure affordable and accessible internet connectivity across the country.",
      keyPoints: [
        "Equal access to digital services",
        "Net neutrality protection",
        "Affordable connectivity",
        "Digital infrastructure"
      ]
    },
    {
      title: "Right to Be Forgotten",
      content: "Individuals can request the removal of personal information from online platforms when it's no longer necessary or relevant, as recognized by Indian courts and the DPDP Act 2023.",
      keyPoints: [
        "Request data deletion",
        "Remove outdated information",
        "Protection of reputation",
        "Privacy preservation"
      ]
    },
    {
      title: "Freedom of Expression Online",
      content: "Citizens have the constitutional right to express opinions online freely, subject to reasonable restrictions under Article 19(2) of the Indian Constitution.",
      keyPoints: [
        "Protection against censorship",
        "Responsible digital citizenship",
        "Content moderation transparency",
        "Appeal mechanisms"
      ]
    },
    {
      title: "Digital Security Rights",
      content: "Users have the right to secure digital transactions and protection against cyber threats under the IT Act 2000 and subsequent amendments.",
      keyPoints: [
        "Secure online transactions",
        "Encryption protection",
        "Cybercrime reporting",
        "Identity theft protection"
      ]
    }
  ];

  const filteredRights = rights.filter(right =>
    right.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    right.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    right.keyPoints.some(point => point.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <NavigationBar />
      <div className="digital-rights-container" ref={ref}>
        <Container className="py-5">
          {/* Header Section */}
          <Row className="mb-3">
            <Col className="text-center">
              <motion.h1 
                className="display-4 text-white fw-bold"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                The Digital Rights of India
              </motion.h1>
            </Col>
          </Row>

          {/* Search Section */}
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="search-card">
                  <Card.Body>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Search digital rights, protections, or specific topics..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Rights Cards */}
          <Row className="g-4">
            {filteredRights.length > 0 ? (
              filteredRights.map((right, index) => (
                <Col md={6} key={index}>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Card className="right-card h-100">
                      <Card.Body>
                        <h3 className="right-title">{right.title}</h3>
                        <p className="right-content">{right.content}</p>
                        <div className="right-key-points">
                          <h4>Key Points:</h4>
                          <ul>
                            {right.keyPoints.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))
            ) : (
              <Col className="text-center">
                <div className="no-results">
                  No rights found matching "<span>{searchTerm}</span>"
                </div>
              </Col>
            )}
          </Row>

          {/* Information Cards */}
          <Row className="mt-5 g-4">
            <Col md={6}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="content-card">
                  <Card.Body>
                    <h3 className="card-title">
                      <FaGavel className="me-2" />
                      Why Digital Rights Matter
                    </h3>
                    <ul className="card-list">
                      <li>Protects personal data and privacy in the digital age</li>
                      <li>Ensures safe and secure digital transactions</li>
                      <li>Safeguards freedom of expression online</li>
                      <li>Promotes equal access to digital resources</li>
                      <li>Guards against cyber harassment and abuse</li>
                      <li>Supports digital innovation and growth</li>
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="content-card">
                  <Card.Body>
                    <h3 className="card-title">
                      <FaShieldAlt className="me-2" />
                      How to Exercise Your Rights
                    </h3>
                    <ul className="card-list">
                      <li>File complaints with appropriate authorities (CERT-In, Cyber Crime Cell)</li>
                      <li>Use privacy settings and data protection tools</li>
                      <li>Stay informed about digital rights updates</li>
                      <li>Join digital rights advocacy groups</li>
                      <li>Report privacy violations to platforms</li>
                      <li>Seek legal assistance when rights are violated</li>
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Additional Resources */}
          <Row className="mt-5">
            <Col>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="content-card">
                  <Card.Body>
                    <h3 className="card-title">
                      <FaUserShield className="me-2" />
                      Important Resources
                    </h3>
                    <ul className="card-list">
                      <li>National Cyber Crime Portal (cybercrime.gov.in)</li>
                      <li>CERT-In for cybersecurity incidents (cert-in.org.in)</li>
                      <li>Data Protection Authority (upcoming under DPDP Act)</li>
                      <li>Digital Rights Organizations and NGOs</li>
                      <li>Legal Aid Services for digital rights violations</li>
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default DigitalRights;