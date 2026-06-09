import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { StarBackground } from './components/StarBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
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
          </Routes>
        </div>

        <FloatingCTA />
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}
