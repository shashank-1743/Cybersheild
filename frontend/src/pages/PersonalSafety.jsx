import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaUserShield, 
  FaUserSecret,
  FaShieldAlt,
  FaExclamationTriangle,
  FaLock
} from 'react-icons/fa';

// Add this CSS to make cards equal height
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

function PersonalSafety() {
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
      id: 'harassment',
      title: 'Online Harassment & Cyberbullying',
      icon: <FaUserShield size={40} className="text-primary mb-3" />,
      points: [
        'Block and Report – Use platform features to block and report abusive users.',
        'Avoid Engagement – Don\'t respond to online trolls or threats.',
        'Secure Accounts – Strengthen privacy settings to control who can contact you.',
        'Legal Help – If harassment includes threats or stalking, report it via cybercrime.gov.in or call 1930.'
      ]
    },
    {
      id: 'fakeProfiles',
      title: 'Fake Profiles & Impersonation',
      icon: <FaUserSecret size={40} className="text-primary mb-3" />,
      points: [
        'Report to Platforms – Use the report function on Facebook, Instagram, or other platforms.',
        'Warn Your Contacts – Inform friends and family about the fake profile.',
        'Legal Action – If the fake account is used for fraud, report it to the Cyber Crime Helpline.'
      ]
    },
    {
      id: 'phishing',
      title: 'Phishing & Scam Awareness',
      icon: <FaShieldAlt size={40} className="text-primary mb-3" />,
      points: [
        'Spot Fake Emails & Messages – Look for spelling errors, urgent requests, and suspicious links.',
        'Verify the Sender – Check email addresses and hover over links before clicking.',
        'Enable Multi-Factor Authentication (MFA) – Add an extra layer of security to your accounts.'
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
                  Stay Safe Online: Protect Yourself from Cyber Threats
                </h1>
                <p className="lead mb-4">
                  Learn essential cybersecurity practices to safeguard your personal data, 
                  social media, and digital identity.
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
              <h2 className="mb-4">Detailed Safety Guidelines</h2>
              
              <div className="mb-5">
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaUserShield className="text-primary me-2" />
                  How can I protect myself from online harassment?
                </h3>
                <p>Online harassment can take many forms, including cyberstalking, trolling, and threats. To stay safe:</p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Block and Report – Most social media and messaging platforms have a block/report feature. Use it to stop interactions with harassers.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Avoid Engagement – Do not reply or engage with online bullies. Responding may escalate the situation.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Secure Your Account – Change your privacy settings to restrict who can contact you.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Seek Legal Help – If the harassment involves threats, stalking, or blackmail, report it to the National Cyber Crime Portal (cybercrime.gov.in) or call 1930.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaUserSecret className="text-primary me-2" />
                  What should I do if someone creates a fake profile?
                </h3>
                <p>Fake profiles can be used for scams, defamation, or impersonation. If this happens:</p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Report to the Platform – Use the report feature on Facebook, Instagram, or any other platform. Most social networks take impersonation seriously.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Warn Others – Inform your friends and family so they don't fall for scams.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Take Legal Action – If the fake account is used for fraud or defamation, report it to the Cyber Crime Helpline 1930 and provide proof.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="h5 d-flex align-items-center mb-4">
                  <FaShieldAlt className="text-primary me-2" />
                  How can I recognize phishing attempts?
                </h3>
                <p>Cybercriminals use phishing to steal sensitive information through fake emails, SMS, or links. To spot them:</p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Check for Errors – Phishing emails often contain spelling mistakes and generic greetings like "Dear Customer."</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Verify the Sender – Look at the email address. Scammers often use emails that look like real companies but have slight variations.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Do Not Click Suspicious Links – Hover over links before clicking to check if they lead to a legitimate website.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <span className="text-primary me-2">✔</span>
                    <span>Use Multi-Factor Authentication (MFA) – Even if your password is compromised, MFA adds an extra layer of security.</span>
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
              <h3 className="mb-4">Need Immediate Help?</h3>
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
                    href="tel:1091"
                  >
                    <FaUserShield className="me-3" size={24} />
                    <div className="text-start">
                      <h5 className="mb-1 text-danger">Women's Helpline</h5>
                      <p className="mb-0 text-danger">1091</p>
                    </div>
                  </Button>
                </Col>
                <Col md={4}>
                  <Button 
                    variant="light" 
                    className="w-100 py-3 d-flex align-items-center justify-content-center"
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
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

export default PersonalSafety; 