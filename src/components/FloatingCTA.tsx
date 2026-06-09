import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { PhoneCall, Phone, MicOff, Loader2, X } from 'lucide-react';
import Vapi from '@vapi-ai/web';

// Initialize Vapi with the Public API Key
const vapi = new Vapi('c0d5b4b9-94c0-4bdb-b6e0-5c0160d6acbc');

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [callStatus, setCallStatus] = useState<'inactive' | 'loading' | 'active' | 'error'>('inactive');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);

    // Vapi Event Listeners
    vapi.on('call-start', () => setCallStatus('active'));
    vapi.on('call-end', () => setCallStatus('inactive'));
    vapi.on('error', (e) => {
      console.error('Vapi Error:', e);
      setCallStatus('error');
      setTimeout(() => setCallStatus('inactive'), 3000);
    });

    return () => {
      clearTimeout(timer);
      vapi.removeAllListeners();
    };
  }, []);

  const toggleCall = async () => {
    if (callStatus === 'active') {
      vapi.stop();
      setCallStatus('inactive');
    } else {
      setCallStatus('loading');
      try {
        await vapi.start('26e9874e-7e57-414d-a833-ef65b8a79b2c');
      } catch (err) {
        console.error('Failed to start call:', err);
        setCallStatus('error');
        setTimeout(() => setCallStatus('inactive'), 3000);
      }
    }
  };

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
          {isHovered && callStatus !== 'active' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mr-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-xl hidden sm:block whitespace-nowrap"
            >
              {callStatus === 'error' ? 'Microphone error!' : 'Talk to AI Assistant'}
            </motion.div>
          )}
          
          <div className="relative">
            {callStatus === 'active' && (
              <div className="absolute inset-0 bg-red-500 rounded-full blur-[20px] opacity-70 animate-pulse"></div>
            )}
            {(callStatus === 'inactive' || callStatus === 'loading') && (
              <div className="absolute inset-0 bg-primary-500 rounded-full blur-[20px] opacity-50 animate-pulse"></div>
            )}
            
            <button
              onClick={toggleCall}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              disabled={callStatus === 'loading'}
              className={`relative w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg border border-white/20 transition-all ${
                callStatus === 'active' 
                  ? 'bg-red-600 hover:bg-red-500 animate-pulse' 
                  : callStatus === 'error'
                  ? 'bg-yellow-600 hover:bg-yellow-500'
                  : 'bg-primary-600 hover:bg-primary-500'
              }`}
            >
              {callStatus === 'loading' ? (
                <Loader2 className="w-7 h-7 animate-spin" />
              ) : callStatus === 'active' ? (
                <Phone className="w-7 h-7" />
              ) : callStatus === 'error' ? (
                <MicOff className="w-7 h-7" />
              ) : (
                <PhoneCall className="w-7 h-7" />
              )}
            </button>
          </div>
          
          {callStatus === 'inactive' && (
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 bg-space-900 border border-white/20 rounded-full p-1 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
