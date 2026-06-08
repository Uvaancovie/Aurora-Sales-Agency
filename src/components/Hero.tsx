import { motion } from 'motion/react';
import { ChevronRight, Rocket, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/5 text-primary-300 text-[10px] uppercase tracking-widest font-bold mb-8 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
            Elevating B2B Growth
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-sans font-light tracking-tight text-white mb-6 leading-[1.1]"
          >
            Scale Your Sales.<br />
            <span className="italic font-serif text-primary-400 relative inline-block">
              Ignite Your Growth.
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-primary-400 to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/50 max-w-lg mb-10 leading-relaxed"
          >
            Aurora empowers B2B companies with full-funnel lead generation, marketing engines, and dedicated support specialists. Turn your pipeline into predictable revenue.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link to="/services" className="h-12 px-8 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] group">
              Explore Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="h-12 px-8 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest border border-white/10 flex items-center transition-all">
              Book a Strategy Call
            </Link>
          </motion.div>
        </div>

        {/* Visual Element: Rocket Landing / Orbit */}
        <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center perspective-1000">
          {/* Constellation / Grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]"></div>
          
          <motion.div 
            className="relative w-[400px] h-[400px] rounded-full border border-white/5 border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            {/* Planet 1 */}
            <div className="absolute top-0 left-1/2 -ml-8 -mt-8 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-900 shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center justify-center">
              <Star className="w-4 h-4 text-white/50" />
            </div>
            {/* Planet 2 */}
            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-gradient-to-tr from-fuchsia-600 to-purple-800 shadow-[0_0_40px_rgba(192,38,211,0.3)] opacity-60"></div>
          </motion.div>
          
          <motion.div 
            className="absolute w-[250px] h-[250px] rounded-full border border-primary-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {/* Small orbit item */}
             <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-primary-400 shadow-[0_0_20px_#a855f7]"></div>
          </motion.div>

          {/* Central Rocket Landing */}
          <motion.div
            initial={{ y: -300, scale: 0.5, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.5 }}
            className="absolute z-20 flex flex-col items-center"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-32 h-32 bg-primary-900/40 border border-primary-500/30 rounded-full flex items-center justify-center backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-400/20 to-transparent"></div>
                <Rocket className="w-16 h-16 text-primary-300 relative z-10" />
                {/* Thruster glow */}
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-0 w-8 h-8 bg-orange-500/50 blur-[15px] rounded-full translate-y-1/2"
                />
              </div>
            </motion.div>
            {/* Landing Pad Rings */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 relative w-48 h-12"
            >
              <div className="w-full h-full border-2 border-primary-500/50 rounded-[100%] shadow-[0_0_20px_#a855f7_inset,0_0_20px_#a855f7] rotate-x-60 absolute"></div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full h-full border-2 border-primary-400 rounded-[100%] absolute rotate-x-60"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
