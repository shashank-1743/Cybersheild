import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaGavel,
  FaMoneyBill,
  FaBuilding,
  FaClipboardCheck,
  FaSearch
} from 'react-icons/fa';

function Penalties() {
  const [searchTerm, setSearchTerm] = useState('');
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

  const penaltyTypes = [
    {
      title: "Financial Penalties",
      icon: <FaMoneyBill />,
      content: [
        "Unauthorized access or data theft (Up to ₹1 crore in compensation)",
        "Computer system tampering (Up to ₹5 lakhs fine)",
        "Breach of confidentiality (Up to ₹5 lakhs fine)",
        "Failure to protect data (Up to ₹25,000 per day of continuing failure)"
      ]
    },
    {
      title: "Criminal Penalties",
      icon: <FaGavel />,
      content: [
        "Cyber terrorism (Life imprisonment)",
        "Identity theft (Up to 3 years imprisonment)",
        "Publishing obscene material (Up to 5 years imprisonment)",
        "Child pornography (Up to 7 years imprisonment)"
      ]
    },
    {
      title: "Corporate Offenses",
      icon: <FaBuilding />,
      content: [
        "Data protection negligence (Up to ₹5 crores fine)",
        "Non-compliance with security guidelines",
        "Failure to report breaches",
        "Intermediary liability violations"
      ]
    },
    {
      title: "Regulatory Compliance",
      icon: <FaClipboardCheck />,
      content: [
        "Non-maintenance of records (Up to ₹10,000 per day)",
        "Failure to furnish documents (Up to ₹1.5 lakhs)",
        "Non-compliance with directions (Up to ₹25,000)",
        "Violation of privacy guidelines"
      ]
    }
  ];

  const penalties = [
    {
      section: "Section 43 - Penalty for Damage to Computer System",
      description: "Unauthorized access, downloading, data theft, virus spreading, system damage",
      penalty: "Compensation up to ₹1 crore to affected person",
      category: "Financial"
    },
    {
      section: "Section 66 - Computer Related Offenses",
      description: "Dishonestly or fraudulently accessing computer systems",
      penalty: "Up to 3 years imprisonment or fine up to ₹5 lakhs, or both",
      category: "Criminal"
    },
    {
      section: "Section 66B - Receiving Stolen Computer Resource",
      description: "Dishonestly receiving stolen computer resource or communication device",
      penalty: "Up to 3 years imprisonment or fine up to ₹1 lakh, or both",
      category: "Criminal"
    },
    {
      section: "Section 66C - Identity Theft",
      description: "Fraudulently using others' digital signature, password, or unique ID",
      penalty: "Up to 3 years imprisonment and fine up to ₹1 lakh",
      category: "Criminal"
    },
    {
      section: "Section 66E - Privacy Violation",
      description: "Capturing, publishing or transmitting private images",
      penalty: "Up to 3 years imprisonment or fine up to ₹2 lakhs, or both",
      category: "Criminal"
    },
    {
      section: "Section 66F - Cyber Terrorism",
      description: "Threatening unity, integrity, security of India through computer resources",
      penalty: "Life imprisonment",
      category: "Criminal"
    },
    {
      section: "Section 67 - Publishing Obscene Material",
      description: "Publishing or transmitting obscene material in electronic form",
      penalty: "First conviction: 3 years and ₹5 lakhs; Subsequent: 5 years and ₹10 lakhs",
      category: "Criminal"
    },
    {
      section: "Section 67A - Publishing Sexually Explicit Content",
      description: "Publishing or transmitting sexually explicit acts in electronic form",
      penalty: "First conviction: 5 years and ₹10 lakhs; Subsequent: 7 years and ₹10 lakhs",
      category: "Criminal"
    },
    {
      section: "Section 67B - Child Pornography",
      description: "Publishing or transmitting material depicting children in sexually explicit acts",
      penalty: "First conviction: 5 years and ₹10 lakhs; Subsequent: 7 years and ₹10 lakhs",
      category: "Criminal"
    },
    {
      section: "Section 69 - Failure to Decrypt Information",
      description: "Failure to assist in decryption of information for security",
      penalty: "Up to 7 years imprisonment and fine",
      category: "Regulatory"
    },
    {
      section: "Section 43A - Failure to Protect Data",
      description: "Failure to implement reasonable security practices to protect sensitive data",
      penalty: "Compensation to affected person, amount decided by adjudicating officer",
      category: "Corporate"
    },
    {
      section: "Section 72 - Breach of Confidentiality",
      description: "Disclosure of information in breach of lawful contract",
      penalty: "Up to 2 years imprisonment or fine up to ₹1 lakh, or both",
      category: "Corporate"
    }
  ];

  const filteredPenalties = penalties.filter(penalty =>
    penalty.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
    penalty.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    penalty.penalty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    penalty.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavigationBar />
      <div className="penalties-container" ref={ref}>
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
            opacity: 0.1,
            zIndex: 1
          }}
        />
        <Container className="py-5 position-relative" style={{ zIndex: 2 }}>
          <Row className="mb-4">
            <Col lg={10} className="mx-auto text-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h1 className="penalties-title">Cybercrime Penalties in India</h1>
                <p className="penalties-subtitle">
                  Understanding the legal consequences of cyber offenses under IT Act 2000 and IPC
                </p>
              </motion.div>
            </Col>
          </Row>

          {/* Penalty Types Section */}
          <Row className="g-4 mb-5">
            {penaltyTypes.map((type, index) => (
              <Col md={6} lg={3} key={index}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="penalty-type-card h-100">
                    <Card.Body>
                      <div className="penalty-type-icon">
                        {type.icon}
                      </div>
                      <h3 className="penalty-type-title">{type.title}</h3>
                      <ul className="penalty-type-list">
                        {type.content.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Search Section */}
          <Row className="mb-4">
            <Col lg={8} className="mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="search-card">
                  <Card.Body>
                    <div className="search-wrapper">
                      <FaSearch className="search-icon" />
                      <Form.Control
                        type="text"
                        placeholder="Search penalties by section, description, or category..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Penalties List */}
          <Row className="g-4">
            {filteredPenalties.map((penalty, index) => (
              <Col md={6} key={index}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="penalty-card">
                    <Card.Body>
                      <div className="penalty-category-badge">{penalty.category}</div>
                      <h3 className="penalty-section">{penalty.section}</h3>
                      <p className="penalty-description">{penalty.description}</p>
                      <div className="penalty-box">
                        <strong>Penalty: </strong>
                        <span className="penalty-text">{penalty.penalty}</span>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Penalties;