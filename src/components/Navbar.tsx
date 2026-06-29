import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-white border-b border-primary-500 pb-1" : "hover:text-white transition-colors pb-1";
  };

  const isActiveSub = (path: string) => {
    return location.pathname.startsWith(path) ? "text-white border-b border-primary-500 pb-1" : "hover:text-white transition-colors pb-1";
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 md:py-6 border-b border-white/5 bg-space-950/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-primary-500 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white]"></div>
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tighter uppercase text-white">Aurora <span className="text-primary-400">Sales Agency</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 uppercase tracking-widest">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/services" className={isActive('/services')}>Services</Link>
          <Link to="/digital-solutions" className={isActiveSub('/digital-solutions')}>Digital & AI</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>

        <Link to="/contact" className="hidden md:block px-5 py-2 bg-primary-600/10 border border-primary-500/50 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary-600/20 transition-all text-white">
          Initiate Launch
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-space-950 border-t border-white/10 mt-4 absolute left-0 right-0 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-6 gap-6 text-sm font-medium text-white/60 uppercase tracking-widest">
              <Link to="/" onClick={closeMenu} className={isActive('/')}>Home</Link>
              <Link to="/about" onClick={closeMenu} className={isActive('/about')}>About</Link>
              <Link to="/services" onClick={closeMenu} className={isActive('/services')}>Services</Link>
              <Link to="/digital-solutions" onClick={closeMenu} className={isActiveSub('/digital-solutions')}>Digital & AI</Link>
              <Link to="/contact" onClick={closeMenu} className={isActive('/contact')}>Contact</Link>
              <Link to="/contact" onClick={closeMenu} className="inline-block mt-4 text-center px-5 py-3 bg-primary-600 hover:bg-primary-500 rounded-full text-white font-bold transition-all w-full">
                Initiate Launch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
