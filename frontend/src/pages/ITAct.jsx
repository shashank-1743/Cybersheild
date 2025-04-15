import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaGavel, 
  FaFileContract,
  FaUserShield,
  FaGlobe,
  FaExclamationTriangle,
  FaFileAlt
} from 'react-icons/fa';

function ITAct() {
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

  const laws = [
    {
      title: "🔐 Digital Signatures (Section 3)",
      content: "Authentication of electronic records using digital signatures. Explains the legal recognition and validation process of digital signatures.",
      penalty: "Invalid digital signatures can lead to document rejection and legal consequences"
    },
    {
      title: "⚖️ Cyber Crimes (Section 66)",
      content: "Covers unauthorized access, data theft, hacking, system damage, and other computer-related offences.",
      penalty: "Up to 3 years imprisonment or fine up to ₹5 lakhs, or both"
    },
    {
      title: "🛡️ Data Protection (Section 43A)",
      content: "Mandates corporate bodies to implement reasonable security practices to protect sensitive personal data.",
      penalty: "Compensation to affected persons for negligent handling of data"
    },
    {
      title: "📱 Intermediary Guidelines (Section 79)",
      content: "Rules for social media platforms, digital media, and other online intermediaries regarding content moderation and user safety.",
      penalty: "Loss of safe harbor protection and legal liability"
    },
    {
      title: "🔒 Privacy Violation (Section 66E)",
      content: "Violation of privacy by capturing, publishing, or transmitting private images or information without consent.",
      penalty: "Up to 3 years imprisonment or fine up to ₹2 lakhs, or both"
    },
    {
      title: "🚨 Cyber Terrorism (Section 66F)",
      content: "Acts threatening the unity, integrity, security, or sovereignty of India through computer resources.",
      penalty: "Life imprisonment"
    },
    {
      title: "👤 Identity Theft (Section 66C)",
      content: "Fraudulently using others' digital signature, password, or other unique identification features.",
      penalty: "Up to 3 years imprisonment and fine up to ₹1 lakh"
    },
    {
      title: "💬 Online Harassment (Section 66A)",
      content: "Sending offensive messages through communication services. Note: This section was struck down by Supreme Court but historical context is important.",
      penalty: "Section invalidated by Supreme Court in Shreya Singhal case"
    },
    {
      title: "📊 Data Retention (Section 67C)",
      content: "Intermediaries must preserve and retain information as prescribed by central government.",
      penalty: "Up to 3 years imprisonment and fine"
    },
    {
      title: "🔍 Power to Monitor (Section 69)",
      content: "Government's power to intercept, monitor, or decrypt digital information for national security.",
      penalty: "Up to 7 years imprisonment and fine for non-compliance"
    },
    {
      title: "🌐 Electronic Governance (Section 4-10)",
      content: "Legal recognition of electronic records and digital signatures in government and public services.",
      penalty: "Varies based on specific violation"
    },
    {
      title: "💼 Corporate Responsibility (Section 85)",
      content: "Liability of companies and their officers for violations under the Act.",
      penalty: "Officers in charge can be held personally liable"
    }
  ];

  const filteredLaws = laws.filter(law =>
    law.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    law.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    law.penalty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavigationBar />
      <div className="it-act-container" ref={ref}>
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
            opacity: 0.1,
            zIndex: 1
          }}
        />
        <Container className="py-5 position-relative" style={{ zIndex: 2 }}>
          <Row className="mb-4">
            <Col lg={10} className="mx-auto text-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h1 className="it-act-title">Information Technology Act, 2000</h1>
                <p className="it-act-subtitle">
                  Understanding India's primary legislation governing cybercrime and electronic commerce
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col lg={8} className="mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="search-card">
                  <Card.Body>
                    <Form.Control
                      type="text"
                      placeholder="Search IT Act sections, penalties, or specific terms..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4">
            {searchTerm ? (
              filteredLaws.length > 0 ? (
                filteredLaws.map((law, index) => (
                  <Col md={6} key={index}>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Card className="law-card">
                        <Card.Body>
                          <h3 className="law-title">{law.title}</h3>
                          <p className="law-content">{law.content}</p>
                          <div className="penalty-box">
                            <strong>Penalty: </strong>
                            <span className="penalty-content">{law.penalty}</span>
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))
              ) : (
                <Col>
                  <div className="no-results">
                    No results found for "<span>{searchTerm}</span>"
                  </div>
                </Col>
              )
            ) : (
              <>
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
                          <FaGavel className="section-icon" />
                          Key Objectives
                        </h3>
                        <ul className="card-list">
                          <li>Legal recognition of electronic documents</li>
                          <li>Legal recognition of digital signatures</li>
                          <li>Cybercrime prevention and prosecution</li>
                          <li>Facilitation of e-governance</li>
                          <li>Protection of sensitive personal data</li>
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
                          <FaFileContract className="section-icon" />
                          Major Provisions
                        </h3>
                        <ul className="card-list">
                          <li>Digital signature certificates and authentication</li>
                          <li>Electronic governance framework</li>
                          <li>Cybercrime definitions and penalties</li>
                          <li>Intermediary guidelines and compliance</li>
                          <li>Data protection requirements</li>
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
                          <FaExclamationTriangle className="section-icon" />
                          Covered Cybercrimes
                        </h3>
                        <ul className="card-list">
                          <li>Hacking and unauthorized access</li>
                          <li>Data theft and privacy breaches</li>
                          <li>Identity theft and phishing</li>
                          <li>Cyber terrorism and security threats</li>
                          <li>Publishing of obscene content</li>
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
                          <FaFileAlt className="section-icon" />
                          Amendments and Updates
                        </h3>
                        <ul className="card-list">
                          <li>IT Act Amendment 2008</li>
                          <li>Enhanced cybersecurity measures</li>
                          <li>Strengthened privacy provisions</li>
                          <li>Corporate compliance requirements</li>
                          <li>Updated penalty framework</li>
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
                          <FaUserShield className="section-icon" />
                          Data Protection
                        </h3>
                        <ul className="card-list">
                          <li>Reasonable security practices</li>
                          <li>Sensitive personal data handling</li>
                          <li>Data retention requirements</li>
                          <li>Privacy and consent rules</li>
                          <li>Cross-border data transfer</li>
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
                          <FaGlobe className="section-icon" />
                          Intermediary Guidelines
                        </h3>
                        <ul className="card-list">
                          <li>Due diligence requirements</li>
                          <li>Content moderation rules</li>
                          <li>User grievance mechanisms</li>
                          <li>Reporting obligations</li>
                          <li>Safe harbor provisions</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ITAct;