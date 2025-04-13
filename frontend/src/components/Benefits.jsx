import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt, FaClipboardList, FaUserLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

function Benefits() {
  const benefits = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "Simplified Cyber Laws",
      description: "We break down complex legal jargon into easy-to-understand explanations, so you don't need a legal background to know your rights. Our platform makes cyber law awareness simple and accessible for everyone.",
      points: [
        "Clear explanations of cyber laws",
        "Real-world examples and cases",
        "Regular updates on new regulations"
      ]
    },
    {
      icon: <FaClipboardList size={40} />,
      title: "Step-by-Step Reporting Guides",
      description: "If you become a victim of cybercrime, our platform provides a clear, structured guide on how to file a complaint. We walk you through the entire process with detailed instructions.",
      points: [
        "Document requirements checklist",
        "Where to report specific cybercrimes",
        "Follow-up procedure guidance"
      ]
    },
    {
      icon: <FaUserLock size={40} />,
      title: "Cyber Safety Tips",
      description: "We equip you with essential security tips to protect your data, avoid scams, and secure your online presence against hackers, fraudsters, and cyber threats. Stay informed and protected.",
      points: [
        "Preventive security measures",
        "Latest threat alerts",
        "Best practices for online safety"
      ]
    }
  ];

  return (
    <section className="benefits-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="gradient-text mb-3">Why Use Our Website?</h2>
          <p className="lead text-muted">
            At CyberShield India, we make cyber law awareness simple and accessible for everyone. 
            Our platform is designed to educate, guide, and protect you in the digital world.
          </p>
        </motion.div>

        <Row className="g-4">
          {benefits.map((benefit, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="benefit-card h-100"
              >
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="text-primary mb-4 benefit-icon">
                      {benefit.icon}
                    </div>
                    <h3 className="h4 mb-3">{benefit.title}</h3>
                    <p className="text-muted mb-4">{benefit.description}</p>
                    <ul className="list-unstyled mb-0">
                      {benefit.points.map((point, idx) => (
                        <li key={idx} className="mb-2 text-muted">
                          <i className="fas fa-check text-primary me-2"></i>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-5"
        >
          <p className="lead mb-0">
            With CyberShield India, you don't just learn about cyber laws—you get the tools 
            and guidance to act when needed. <strong>Stay informed. Stay protected.</strong>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Benefits; 