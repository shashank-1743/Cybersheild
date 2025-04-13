import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaCreditCard, 
  FaShieldAlt,
  FaMobileAlt,
  FaLock,
  FaExclamationTriangle
} from 'react-icons/fa';

// Styles from PersonalSafety page
const cardStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
};

const cardBodyStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
};

const pointsStyle = {
  flex: 1
};

function FinancialSecurity() {
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

  const securityTopics = [
    {
      id: 'onlineBanking',
      title: 'Online Banking & UPI Safety',
      icon: <FaCreditCard size={40} className="text-primary mb-3" />,
      points: [
        'Never share UPI PIN, OTP, or banking passwords with anyone.',
        'Enable two-factor authentication for all financial accounts.',
        'Avoid clicking on suspicious payment links.',
        'Report unauthorized transactions immediately to your bank and cybercrime helpline.'
      ]
    },
    {
      id: 'digitalPayments',
      title: 'Digital Payment Protection',
      icon: <FaMobileAlt size={40} className="text-primary mb-3" />,
      points: [
        'Use official payment apps from trusted sources only.',
        'Verify merchant details before making payments.',
        'Keep payment apps updated with latest security patches.',
        'Enable transaction limits and notifications.'
      ]
    },
    {
      id: 'fraudPrevention',
      title: 'Financial Fraud Prevention',
      icon: <FaShieldAlt size={40} className="text-primary mb-3" />,
      points: [
        'Be wary of too-good-to-be-true investment schemes.',
        'Never share card details on unverified websites.',
        'Check website security (https://) before online purchases.',
        'Monitor your accounts regularly for suspicious activity.'
      ]
    }
  ];

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
                  Protect Your Financial Security Online
                </h1>
                <p className="lead mb-4">
                  Learn essential practices to safeguard your money, accounts, and digital transactions.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        {/* Security Topics */}
        <Row className="g-4">
          {securityTopics.map((topic, index) => (
            <Col lg={4} key={topic.id}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={cardStyle}
              >
                <Card className="h-100 border-0 shadow-sm safety-card">
                  <Card.Body className="text-center p-4" style={cardBodyStyle}>
                    {topic.icon}
                    <h3 className="h4 mb-4">{topic.title}</h3>
                    <ul className="list-unstyled text-start" style={pointsStyle}>
                      {topic.points.map((point, idx) => (
                        <li key={idx} className="mb-3 d-flex">
                          <span className="text-primary me-2">✔</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Detailed Safety Guide */}
        <Row className="mt-5">
          <Col lg={12}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-light p-4 p-lg-5 rounded-3"
            >
              <h2 className="mb-4">Essential Financial Safety Guidelines</h2>
              
              <div className="mb-5">
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaLock className="text-primary me-2" />
                  Secure Online Banking Practices
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Do Not Save Card Details on Websites – Always enter details manually for better security.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Use Virtual Keyboards – When available, use on-screen keyboards to prevent keyloggers.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Regular Password Updates – Change your banking passwords periodically.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaExclamationTriangle className="text-primary me-2" />
                  Common Financial Scams to Watch Out For
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Fake KYC Updates – Banks never ask for KYC updates through SMS or WhatsApp.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Lottery Scams – Beware of messages claiming you've won a lottery.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Job Fraud – Never pay money for job offers or interviews.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Emergency Contact Section */}
        <Row className="mt-5">
          <Col>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-danger text-white p-4 rounded-3"
            >
              <h3 className="mb-4">Victim of Financial Fraud?</h3>
              <Row className="g-4">
                <Col md={4}>
                  <Button 
                    variant="light" 
                    className="w-100 py-3 d-flex align-items-center justify-content-center"
                    href="tel:1930"
                  >
                    <FaLock className="me-3" size={24} />
                    <div className="text-start">
                      <h5 className="mb-1 text-danger">Cyber Crime Helpline</h5>
                      <p className="mb-0 text-danger">1930</p>
                    </div>
                  </Button>
                </Col>
                <Col md={4}>
                  <Button 
                    variant="light" 
                    className="w-100 py-3 d-flex align-items-center justify-content-center"
                    href="https://cms.rbi.org.in"
                    target="_blank"
                  >
                    <FaShieldAlt className="me-3" size={24} />
                    <div className="text-start">
                      <h5 className="mb-1 text-danger">RBI Complaints</h5>
                      <p className="mb-0 text-danger">cms.rbi.org.in</p>
                    </div>
                  </Button>
                </Col>
                <Col md={4}>
                  <Button 
                    variant="light" 
                    className="w-100 py-3 d-flex align-items-center justify-content-center"
                    href="https://cybercrime.gov.in"
                    target="_blank"
                  >
                    <FaExclamationTriangle className="me-3" size={24} />
                    <div className="text-start">
                      <h5 className="mb-1 text-danger">Report Online</h5>
                      <p className="mb-0 text-danger">cybercrime.gov.in</p>
                    </div>
                  </Button>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default FinancialSecurity;