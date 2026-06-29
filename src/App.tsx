import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { StarBackground } from './components/StarBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import AuroraVoiceChat from './components/AuroraVoiceChat';
import FloatingCTA from './components/FloatingCTA';
import { useVisitorTracker } from './hooks/useVisitorTracker';

import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import DigitalSolutions from './pages/DigitalSolutions';

export default function App() {
  useVisitorTracker();
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-space-950 selection:bg-primary-500 selection:text-white pb-0 flex flex-col">
        <StarBackground />
        <Navbar />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/digital-solutions" element={<DigitalSolutions />} />
          </Routes>
        </div>

        <FloatingCTA />
        <Footer />
        <AuroraVoiceChat />
      </div>
    </Router>
  );
}
