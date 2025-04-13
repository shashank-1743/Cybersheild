import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion'; // Add useInView
import { useRef } from 'react'; // Add useRef
import { Link } from 'react-router-dom';

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Set once: false to repeat animation
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
    <div className="hero-section position-relative" ref={ref}>
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
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto text-center text-white">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="display-4 fw-bold mb-4">
                Empowering You with Cyber Law Awareness
              </h1>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="lead mb-4">
                Understand your rights before lodging a cybercrime complaint.
              </p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.6 }}
              className="d-flex gap-3 justify-content-center"
            >
              <Button 
                as={Link} 
                to="/overview" 
                variant="light" 
                size="lg"
              >
                Learn About Cyber Laws
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                href="https://cybercrime.gov.in"
                target="_blank"
              >
                Report a Cybercrime
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection; 