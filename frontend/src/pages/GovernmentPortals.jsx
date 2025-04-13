import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Nav, Tab } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaShieldAlt, 
  FaGavel, 
  FaUserShield, 
  FaCreditCard,
  FaChild,
  FaLightbulb,
  FaExternalLinkAlt,
  FaExclamationTriangle
} from 'react-icons/fa';

function GovernmentPortals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [scrollY, setScrollY] = useState(0);

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

  const categories = [
    {
      key: "reporting",
      title: "🚔 Cyber Crime Reporting & Helpline Portals",
      icon: <FaShieldAlt />,
      portals: [
        {
          name: "National Cyber Crime Reporting Portal",
          link: "https://cybercrime.gov.in",
          description: "File complaints related to cyber fraud, online harassment, and financial scams."
        },
        {
          name: "Cyber Swachhta Kendra",
          link: "https://www.cyberswachhtakendra.gov.in",
          description: "Provides free tools to detect and remove malware from devices."
        },
        {
          name: "Indian Cyber Crime Coordination Centre (I4C)",
          link: "https://mha.gov.in/en/I4C",
          description: "Central government initiative for cybercrime investigation and response."
        }
      ]
    },
    {
      key: "security",
      title: "🛡️ Cybersecurity & Digital Protection",
      icon: <FaUserShield />,
      portals: [
        {
          name: "CERT-In (Indian Computer Emergency Response Team)",
          link: "https://www.cert-in.org.in",
          description: "National agency for handling cybersecurity incidents and vulnerabilities."
        },
        {
          name: "Ministry of Electronics & IT (MeitY)",
          link: "https://www.meity.gov.in",
          description: "Governs digital policies, IT Act, and cybersecurity regulations in India."
        },
        {
          name: "RBI Ombudsman for Digital Transactions",
          link: "https://cms.rbi.org.in",
          description: "Redressal mechanism for digital banking and payment fraud complaints."
        }
      ]
    },
    {
      key: "laws",
      title: "📜 Cyber Law & Digital Rights",
      icon: <FaGavel />,
      portals: [
        {
          name: "IT Act, 2000 & Amendments (MeitY)",
          link: "https://www.meity.gov.in/content/information-technology-act",
          description: "Full text of the IT Act, 2000, including rules and amendments."
        },
        {
          name: "Digital Personal Data Protection Act, 2023",
          link: "https://www.meity.gov.in/data-protection-framework",
          description: "Governs data protection and privacy rights in India."
        },
        {
          name: "TRAI (Telecom Regulatory Authority of India)",
          link: "https://www.trai.gov.in",
          description: "Regulates mobile network frauds, spam calls, and digital communication rules."
        }
      ]
    },
    {
      key: "safety",
      title: "👩‍⚖️ Women & Child Safety",
      icon: <FaChild />,
      portals: [
        {
          name: "National Commission for Women (NCW)",
          link: "https://ncwapps.nic.in",
          description: "File complaints regarding cyberstalking, harassment, and online abuse against women."
        },
        {
          name: "Childline India",
          link: "https://www.childlineindia.org",
          description: "24x7 helpline to report online exploitation and child abuse cases."
        }
      ]
    },
    {
      key: "financial",
      title: "💳 Financial & Consumer Fraud Protection",
      icon: <FaCreditCard />,
      portals: [
        {
          name: "National Consumer Helpline (NCH)",
          link: "https://consumerhelpline.gov.in",
          description: "File complaints against e-commerce frauds, digital payment issues, and online scams."
        },
        {
          name: "SEBI SCORES",
          link: "https://scores.gov.in",
          description: "Report stock market and online trading frauds."
        }
      ]
    },
    {
      key: "awareness",
      title: "🔍 Digital Awareness & Prevention",
      icon: <FaLightbulb />,
      portals: [
        {
          name: "Cyber Dost",
          link: "https://twitter.com/cyberdost",
          description: "Official Twitter handle for cyber safety tips and scam alerts."
        },
        {
          name: "Stay Safe Online",
          link: "https://www.staysafeonline.in",
          description: "Educates users about phishing, frauds, and digital safety best practices."
        }
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
                  Government Portals for Cyber Protection & Legal Assistance
                </h1>
                <p className="lead mb-4">
                  Access official resources for reporting cybercrimes, security alerts, and digital fraud prevention
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        <Tab.Container defaultActiveKey="reporting">
          {/* Category Navigation */}
          <Row className="mb-5 mt-4">
            <Col lg={12}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="pt-3"
              >
                <Nav variant="pills" className="flex-row flex-nowrap overflow-auto">
                  {categories.map((category) => (
                    <Nav.Item key={category.key}>
                      <Nav.Link eventKey={category.key} className="me-2 mb-2">
                        <span className="d-flex align-items-center">
                          {category.icon}
                          <span className="ms-2">{category.title}</span>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </motion.div>
            </Col>
          </Row>

          {/* Portal Cards */}
          <Tab.Content className="mt-4 mb-5">
            {categories.map((category) => (
              <Tab.Pane key={category.key} eventKey={category.key}>
                <Row className="g-4 mb-4">
                  {category.portals.map((portal, index) => (
                    <Col lg={6} key={index} className="d-flex">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-100"
                      >
                        <Card className="border-0 shadow-sm portal-card h-100">
                          <Card.Body className="p-4 d-flex flex-column">
                            <h3 className="h5 mb-3">{portal.name}</h3>
                            <p className="text-muted mb-4">{portal.description}</p>
                            <Button 
                              href={portal.link}
                              target="_blank"
                              variant="primary"
                              className="mt-auto align-self-start"
                            >
                              Visit Portal <FaExternalLinkAlt className="ms-2" size={14} />
                            </Button>
                          </Card.Body>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
                
                {/* Report Button Section */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center mt-5"
                >
                  <p className="text-muted mb-4">Need to report a cybercrime incident?</p>
                  <Button 
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    variant="danger"
                    size="lg"
                    className="pulse-button"
                  >
                    <FaExclamationTriangle className="me-2" />
                    Report a Cybercrime
                  </Button>
                </motion.div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>

      <Footer />
    </>
  );
}

export default GovernmentPortals; 