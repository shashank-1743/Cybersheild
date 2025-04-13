import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { 
  FaMoneyBill, 
  FaUserSecret, 
  FaUsers, 
  FaLaptopCode,
  FaExclamationTriangle,
  FaRupeeSign 
} from 'react-icons/fa';

function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const stats = [
    {
      icon: <FaMoneyBill size={40} />,
      number: 200000,
      suffix: "+",
      label: "Financial Fraud Cases",
      duration: 2.5,
      prefix: ""
    },
    {
      icon: <FaUserSecret size={40} />,
      number: 150000,
      suffix: "+",
      label: "Identity Theft Cases",
      duration: 2.5,
      prefix: ""
    },
    {
      icon: <FaUsers size={40} />,
      number: 100000,
      suffix: "+",
      label: "Social Media Crimes",
      duration: 2.5,
      prefix: ""
    },
    {
      icon: <FaLaptopCode size={40} />,
      number: 50000,
      suffix: "+",
      label: "Hacking Incidents",
      duration: 2,
      prefix: ""
    },
    {
      icon: <FaExclamationTriangle size={40} />,
      number: 7000,
      suffix: "+",
      label: "Daily Complaints",
      duration: 2,
      prefix: ""
    },
    {
      icon: <FaRupeeSign size={40} />,
      number: 1750,
      suffix: "+",
      label: "Total Financial Loss",
      duration: 2,
      prefix: "₹"
    }
  ];

  return (
    <section className="statistics py-5 bg-light" ref={ref}>
      <Container>
        <Row className="text-center">
          {stats.map((stat, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="stat-item"
              >
                <div className="text-primary mb-3">
                  {stat.icon}
                </div>
                <h2 className="text-primary fw-bold mb-2">
                  {stat.prefix}
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={stat.duration}
                    separator=","
                    useEasing={true}
                    useGrouping={true}
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                    scrollSpyDelay={200}
                  />
                  {stat.suffix}
                </h2>
                <p className="text-muted mb-1">{stat.label}</p>
                <small className="text-muted">{stat.suffix === "+" ? "cases/year" : "crore (2024)"}</small>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Statistics; 