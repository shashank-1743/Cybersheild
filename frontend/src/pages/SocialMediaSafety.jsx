import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaUserShield, 
  FaNewspaper,
  FaLock,
  FaExclamationTriangle,
  FaShieldAlt
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

function SocialMediaSafety() {
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

  const safetyTopics = [
    {
      id: 'privacy',
      title: 'Privacy Settings & Security',
      icon: <FaLock size={40} className="text-primary mb-3" />,
      points: [
        'Set Your Profile to Private – Control who can view your posts and personal information.',
        'Enable Two-Factor Authentication (2FA) – Adds an extra layer of security against hacking.',
        'Restrict Personal Info Sharing – Avoid posting your phone number, email, or location publicly.',
        'Review Connected Apps – Regularly check and remove unnecessary third-party app access.'
      ]
    },
    {
      id: 'cyberbullying',
      title: 'Handle Cyberbullying',
      icon: <FaUserShield size={40} className="text-primary mb-3" />,
      points: [
        'Document the Abuse – Take screenshots of messages/comments for evidence.',
        'Block & Report – Most platforms allow reporting of abusive behavior.',
        'Seek Help – If cyberbullying is severe, file a complaint on Cybercrime.gov.in.',
        'Talk to Someone – Share your experience with trusted friends or family.'
      ]
    },
    {
      id: 'fakenews',
      title: 'Combat Fake News',
      icon: <FaNewspaper size={40} className="text-primary mb-3" />,
      points: [
        'Check Multiple Sources – Compare news with reliable platforms like BBC, The Hindu, or PIB.',
        'Look for Verified Signs – Use fact-checking websites like AltNews.',
        'Avoid Forwarding Without Verification – Stop the spread of misinformation.',
        'Report False Information – Use platform tools to report fake news.'
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
                  Stay Safe, Stay Smart on Social Media!
                </h1>
                <p className="lead mb-4">
                  Learn how to protect your privacy, handle cyberbullying, and detect fake news.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        {/* Safety Topics */}
        <Row className="g-4">
          {safetyTopics.map((topic, index) => (
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
              <h2 className="mb-4">Social Media Safety Guidelines</h2>
              
              <div className="mb-5">
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaLock className="text-primary me-2" />
                  How do I improve my privacy on social media?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Set Your Profile to Private – Control who can view your posts and personal information.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Enable Two-Factor Authentication (2FA) – Add an extra layer of security to prevent unauthorized access.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Restrict Personal Info Sharing – Never share sensitive details like phone numbers or addresses publicly.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaUserShield className="text-primary me-2" />
                  What should I do if I am a victim of cyberbullying?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Document the Abuse – Take screenshots and save evidence of harassment.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Block & Report – Use platform tools to block harassers and report abusive behavior.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Seek Help – Report severe cases to cybercrime.gov.in or call the cybercrime helpline.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaNewspaper className="text-primary me-2" />
                  How do I detect fake news or misinformation?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Check Multiple Sources – Verify news with reliable platforms like BBC, The Hindu, or PIB.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Look for Verified Signs – Use fact-checking websites and official sources.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Avoid Forwarding Without Verification – Help stop the spread of misinformation.</span>
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
              <h3 className="mb-4">Need Help with Social Media Issues?</h3>
              <Row className="g-4">
                <Col md={4}>
                  <Button 
                    variant="light" 
                    className="w-100 py-3 d-flex align-items-center justify-content-center"
                    href="tel:1930"
                  >
                    <FaShieldAlt className="me-3" size={24} />
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
                <Col md={4}>
                  <Button 
                    variant="light" 
                    className="w-100 py-3 d-flex align-items-center justify-content-center"
                    href="https://www.altnews.in"
                    target="_blank"
                  >
                    <FaNewspaper className="me-3" size={24} />
                    <div className="text-start">
                      <h5 className="mb-1 text-danger">Fact Check</h5>
                      <p className="mb-0 text-danger">AltNews.in</p>
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

export default SocialMediaSafety;