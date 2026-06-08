import { motion } from 'motion/react';

export const StarBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-space-950">
      {/* Ambient Space Glow */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px]"
      />
      
      <motion.div 
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-150px] left-[-100px] w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[150px]"
      />
    </div>
  );
};
