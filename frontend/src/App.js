import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Overview from './pages/Overview';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Helpline from './pages/Helpline';
import GovernmentPortals from './pages/GovernmentPortals';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import PersonalSafety from './pages/PersonalSafety';
import FinancialSecurity from './pages/FinancialSecurity';
import SocialMediaSafety from './pages/SocialMediaSafety';
import DeviceSecurity from './pages/DeviceSecurity';
import HaveProblem from './pages/HaveProblem';
import ITAct from './pages/ITAct';
import Penalties from './pages/Penalties';
import DigitalRights from './pages/DigitalRights';
import { trackPageView } from './utils/analytics';

// Analytics wrapper component
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    const pageName = location.pathname.substring(1) || 'home';
    trackPageView(pageName);
  }, [location]);

  return null;
}

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight * 100}%`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <PageViewTracker />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/resources/helplines" element={<Navigate to="/helpline" replace />} />
        <Route path="/resources/portals" element={<GovernmentPortals />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safety/personal" element={<PersonalSafety />} />
        <Route path="/safety/financial" element={<FinancialSecurity />} />
        <Route path="/safety/social" element={<SocialMediaSafety />} />
        <Route path="/safety/device" element={<DeviceSecurity />} />
        <Route path="/have-problem" element={<HaveProblem />} />
        <Route path="/laws/it-act" element={<ITAct />} />
        <Route path="/laws/penalties" element={<Penalties />} />
        <Route path="/laws/rights" element={<DigitalRights />} />
      </Routes>
      <div 
        className="scroll-progress"
        style={{
          width: scrollProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          background: '#1a237e',
          zIndex: 9999,
          transition: 'width 0.1s ease'
        }}
      />
    </Router>
  );
}

export default App;
