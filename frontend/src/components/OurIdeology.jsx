import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

function OurIdeology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

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

  return (
    <section className="our-ideology py-5 mt-5" ref={ref}>
      <Container>
        <Row className="align-items-center py-5 flex-column-reverse flex-lg-row">
          <Col lg={6} className="mt-4 mt-lg-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center text-lg-start"
            >
              <h2 className="text-primary mb-4">OUR IDEOLOGY</h2>
              <p className="text-muted mb-4 lead">
                In today's digital world, <strong>awareness is the first step toward protection</strong>. 
                We believe that every citizen should have easy access to <strong>cyber laws</strong>, 
                understand their <strong>rights</strong>, and know how to <strong>report cybercrimes</strong> effectively.
              </p>
              <p className="text-muted mb-4 lead">
                Our mission is to <strong>simplify complex legal frameworks</strong> and make the internet 
                safer for everyone.
              </p>
              <button className="btn btn-outline-primary px-4 mb-4 mb-lg-0">Learn More</button>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.4 }}
              className="ps-lg-5"
            >
              <div className="image-container">
                <img 
                  src="/ideology.jpg" 
                  alt="Cyber Law Awareness" 
                  className="img-fluid rounded shadow-lg w-100"
                  style={{ 
                    maxHeight: '400px', 
                    objectFit: 'cover',
                    width: '100%'
                  }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurIdeology; 