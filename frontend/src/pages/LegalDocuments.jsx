import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaFileContract, FaBalanceScale, FaGavel, FaFileAlt } from 'react-icons/fa';

function LegalDocuments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [scrollY, setScrollY] = React.useState(0);

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

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const documents = [
    {
      id: 1,
      title: 'IT Act and Amendments',
      icon: <FaGavel className="text-primary mb-4" size={40} />,
      description: 'Access the complete Information Technology Act, 2000 and its amendments.',
      link: 'https://www.meity.gov.in/documents/act-and-policies'
    },
    {
      id: 2,
      title: 'Cybercrime Reporting Guidelines',
      icon: <FaFileContract className="text-primary mb-4" size={40} />,
      description: 'Official guidelines for reporting cybercrimes to law enforcement agencies.',
      link: 'https://cybercrime.gov.in'
    },
    {
      id: 3,
      title: 'Data Protection Framework',
      icon: <FaFileAlt className="text-primary mb-4" size={40} />,
      description: 'Guidelines and frameworks for protecting personal and sensitive data.',
      link: 'https://www.meity.gov.in/data-protection-framework'
    },
    {
      id: 4,
      title: 'Digital Evidence Guidelines',
      icon: <FaBalanceScale className="text-primary mb-4" size={40} />,
      description: 'Guidelines for handling digital evidence in cybercrime cases.',
      link: 'https://www.mha.gov.in/sites/default/files/CSGuide_240620.pdf'
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
                  Legal Documents & Guidelines
                </h1>
                <p className="lead mb-4">
                  Access official documents, guidelines, and frameworks related to cybersecurity and digital rights in India
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        <Row className="g-4">
          {documents.map((doc) => (
            <Col lg={6} key={doc.id}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    {doc.icon}
                    <h3 className="h4 mb-3">{doc.title}</h3>
                    <p className="text-muted mb-4">{doc.description}</p>
                    <Button
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-primary"
                    >
                      View Document
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Additional Resources Section */}
        <Row className="mt-5">
          <Col lg={12}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-light p-4 p-lg-5 rounded-3"
            >
              <h2 className="mb-4">Need Legal Assistance?</h2>
              <p className="lead mb-4">
                If you need help understanding these documents or require legal assistance, 
                you can reach out to cybercrime authorities or legal experts.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button
                  as="a"
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  variant="primary"
                >
                  Contact Cyber Police
                </Button>
                <Button
                  as="a"
                  href="/helpline"
                  variant="outline-primary"
                >
                  View Helpline Numbers
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

export default LegalDocuments;