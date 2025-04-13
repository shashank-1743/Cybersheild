import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaMobileAlt, 
  FaWifi,
  FaShieldAlt,
  FaExclamationTriangle,
  FaLock,
  FaLaptop
} from 'react-icons/fa';

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

function DeviceSecurity() {
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
      id: 'malwareProtection',
      title: 'Malware Protection',
      icon: <FaShieldAlt size={40} className="text-primary mb-3" />,
      points: [
        'Install Trusted Antivirus Software – Use premium security tools to detect threats.',
        'Keep Apps & Software Updated – Updates fix security vulnerabilities.',
        'Download Only from Trusted Sources – Use official app stores only.',
        'Scan External Devices – Always scan USB drives and external storage.'
      ]
    },
    {
      id: 'deviceTheft',
      title: 'Device Theft Protection',
      icon: <FaMobileAlt size={40} className="text-primary mb-3" />,
      points: [
        'Track & Lock Device – Use Find My Device (Android/iOS) for tracking.',
        'Report to Police – Provide IMEI number in complaint.',
        'Erase Data Remotely – Wipe device to prevent unauthorized access.',
        'Back Up Regularly – Keep important data backed up securely.'
      ]
    },
    {
      id: 'networkSecurity',
      title: 'Network Security',
      icon: <FaWifi size={40} className="text-primary mb-3" />,
      points: [
        'Change Default Router Password – Use strong, unique passwords.',
        'Enable WPA3 Encryption – Use latest security protocols.',
        'Disable WPS – Remove this potential security vulnerability.',
        'Check Connected Devices – Monitor and remove unknown devices.'
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
                  Keep Your Devices Safe from Cyber Threats!
                </h1>
                <p className="lead mb-4">
                  Learn how to protect your phone, laptop, and Wi-Fi from hackers and malware.
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
          {securityTopics.map((topic) => (
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

        {/* Detailed Guidelines */}
        <Row className="mt-5">
          <Col lg={12}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-light p-4 p-lg-5 rounded-3"
            >
              <h2 className="mb-4">Device Security Guidelines</h2>
              
              <div className="mb-5">
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaLaptop className="text-primary me-2" />
                  How do I protect my devices from malware?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Install Trusted Antivirus Software – Use premium security tools from reputable companies.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Keep Software Updated – Regular updates include security patches for vulnerabilities.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Use Official App Stores – Avoid downloading apps from unknown sources.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaMobileAlt className="text-primary me-2" />
                  What should I do if my device is stolen?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Use Device Tracking – Enable and use Find My Device features.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>File a Police Report – Include the device's IMEI number in your complaint.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Remote Data Wipe – If possible, erase your data remotely to protect sensitive information.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaWifi className="text-primary me-2" />
                  How do I secure my Wi-Fi network?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Change Default Passwords – Router default passwords are easily guessable.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Use WPA3 Encryption – Choose the strongest available security protocol.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Monitor Connected Devices – Regularly check and remove unknown devices.</span>
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
              <h3 className="mb-4">Lost or Compromised Device?</h3>
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
                    href="https://www.google.com/android/find"
                    target="_blank"
                  >
                    <FaMobileAlt className="me-3" size={24} />
                    <div className="text-start">
                      <h5 className="mb-1 text-danger">Find My Device</h5>
                      <p className="mb-0 text-danger">Android/iOS</p>
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

export default DeviceSecurity;