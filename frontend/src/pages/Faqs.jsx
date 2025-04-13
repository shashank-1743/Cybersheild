import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Accordion, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaUserShield, 
  FaExclamationTriangle,
  FaGavel,
  FaShieldAlt,
  FaChild
} from 'react-icons/fa';

function Faqs() {
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

  const faqData = {
    itAct: {
      title: "IT Act 2000",
      icon: <FaGavel />,
      questions: [
        {
          q: "What is the IT Act 2000?",
          a: [
            "The Information Technology Act 2000 is India's primary law dealing with cybercrime and e-commerce regulations."
          ]
        },
        {
          q: "What are the key provisions of the IT Act 2000?",
          a: [
            "It covers electronic contracts, digital signatures, cybersecurity, and offenses like hacking and identity theft."
          ]
        },
        {
          q: "What amendments have been made to the IT Act?",
          a: [
            "The IT (Amendment) Act 2008 introduced provisions for data protection, cyber terrorism, and stricter penalties."
          ]
        }
      ]
    },
    penalties: {
      title: "Penalties & Cyber Crimes",
      icon: <FaExclamationTriangle />,
      questions: [
        {
          q: "What are the penalties for cybercrime in India?",
          a: [
            "Penalties vary based on the offense, including fines and imprisonment for hacking, data theft, and online fraud."
          ]
        },
        {
          q: "Is hacking a punishable offense in India?",
          a: [
            "Yes, under Section 66 of the IT Act, hacking can result in up to 3 years of imprisonment or a fine of ₹5 lakh."
          ]
        },
        {
          q: "What is the punishment for identity theft?",
          a: [
            "Section 66C prescribes imprisonment up to 3 years and a fine for using someone's identity fraudulently."
          ]
        }
      ]
    },
    digitalRights: {
      title: "Digital Rights & Privacy",
      icon: <FaUserShield />,
      questions: [
        {
          q: "What are my digital rights under Indian law?",
          a: [
            "Citizens have rights like data privacy, freedom of expression online, and protection against cyber threats."
          ]
        },
        {
          q: "Can social media platforms be held accountable for fake news?",
          a: [
            "Yes, under IT Rules 2021, platforms must remove fake news and harmful content promptly."
          ]
        },
        {
          q: "How can I protect my personal data online?",
          a: [
            "Use strong passwords, enable 2FA, and avoid sharing sensitive information on public platforms."
          ]
        }
      ]
    },
    reporting: {
      title: "Cybercrime Reporting & Safety",
      icon: <FaShieldAlt />,
      questions: [
        {
          q: "How can I report a cybercrime in India?",
          a: [
            "You can report incidents on the National Cyber Crime Reporting Portal (cybercrime.gov.in) or call 1930."
          ]
        },
        {
          q: "What should I do if I am a victim of financial fraud?",
          a: [
            "Immediately report the fraud to your bank and call the Cyber Fraud Helpline - 1930."
          ]
        },
        {
          q: "How can I protect myself from phishing attacks?",
          a: [
            "Never click on suspicious links, verify senders before sharing information, and use anti-phishing tools."
          ]
        }
      ]
    },
    womenSafety: {
      title: "Women & Child Safety",
      icon: <FaChild />,
      questions: [
        {
          q: "Where can I report online harassment and cyberstalking?",
          a: [
            "File a complaint on cybercrime.gov.in under 'Women & Child Safety' or call 1091."
          ]
        },
        {
          q: "What laws protect women from cyber harassment?",
          a: [
            "Section 66E (violation of privacy) and Section 67 (publishing obscene material) provide legal protection."
          ]
        },
        {
          q: "Can minors be punished for cyber offenses?",
          a: [
            "Yes, under the Juvenile Justice Act, minors involved in serious cybercrimes can face legal consequences."
          ]
        }
      ]
    }
  };

  // Filter FAQs based on search term
  const filterFAQs = (questions) => {
    return questions.filter(q => 
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.some(answer => answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  // Add this function to handle smooth scrolling with offset
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const offset = 100; // Adjust this value based on your navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

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
                  Frequently Asked Questions (FAQs)
                </h1>
                <p className="lead mb-4">
                  Find quick answers to common questions about cyber safety and security
                </p>
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
              <Form.Group className="mb-4">
                <Form.Control
                  type="search"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control-lg shadow-sm"
                />
              </Form.Group>
            </motion.div>
          </Col>
        </Row>

        {/* FAQ Sections */}
        <Row>
          <Col lg={3} className="mb-4 d-none d-lg-block">
            {/* Quick Navigation Sidebar */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="sticky-top pt-4"
              style={{ top: '2rem' }}
            >
              <h5 className="mb-3">Quick Navigation</h5>
              <div className="nav flex-column nav-pills">
                {Object.entries(faqData).map(([key, section]) => (
                  <a 
                    key={key}
                    className="nav-link mb-2"
                    href={`#${key}`}
                    onClick={(e) => scrollToSection(e, key)}
                  >
                    <span className="d-flex align-items-center">
                      {section.icon}
                      <span className="ms-2">{section.title}</span>
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={9}>
            {Object.entries(faqData).map(([key, section]) => (
              <motion.div
                key={key}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-5"
                id={key}
              >
                <h3 className="mb-4 d-flex align-items-center">
                  {section.icon}
                  <span className="ms-2">{section.title}</span>
                </h3>
                <Accordion>
                  {filterFAQs(section.questions).map((faq, index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                      <Accordion.Header>
                        <span className="fw-bold">{faq.q}</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-unstyled mb-0">
                          {faq.a.map((answer, idx) => (
                            <li key={idx} className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">✔</span>
                              {answer}
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </motion.div>
            ))}

            {/* Need More Help Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mt-5 pt-4 border-top"
            >
              <h4 className="mb-4">Need More Help?</h4>
              <p className="text-muted mb-4">
                Contact Cyber Crime Helpline for immediate assistance
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Button 
                  href="tel:1930"
                  variant="primary"
                  size="lg"
                  className="mb-2 mb-sm-0"
                >
                  📞 Call 1930
                </Button>
                <Button 
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  variant="danger"
                  size="lg"
                  className="pulse-button"
                >
                  <FaExclamationTriangle className="me-2" />
                  Report Online
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Faqs; 