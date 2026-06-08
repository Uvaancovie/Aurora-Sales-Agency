import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { PhoneCall, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center"
        >
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mr-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-xl hidden sm:block"
            >
              Free Discovery Call
            </motion.div>
          )}
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500 rounded-full blur-[20px] opacity-50 animate-pulse"></div>
            <Link
              to="/contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-14 h-14 bg-primary-600 hover:bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg border border-primary-400/50 transition-colors"
            >
              <PhoneCall className="w-6 h-6" />
            </Link>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-space-900 border border-white/20 rounded-full p-1 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
