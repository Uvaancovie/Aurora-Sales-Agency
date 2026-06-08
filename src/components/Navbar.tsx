import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-white border-b border-primary-500 pb-1" : "hover:text-white transition-colors pb-1";
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-10 py-6 border-b border-white/5 bg-space-950/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-primary-500 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white]"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase text-white">Aurora <span className="text-primary-400">Sales Agency</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 uppercase tracking-widest">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/services" className={isActive('/services')}>Services</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>

        <Link to="/contact" className="px-5 py-2 bg-primary-600/10 border border-primary-500/50 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary-600/20 transition-all text-white">
          Initiate Launch
        </Link>
      </div>
    </motion.nav>
  );
};
