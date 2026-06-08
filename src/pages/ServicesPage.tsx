import { Services } from '../components/Services';
import { motion } from 'motion/react';
import { Network, Search, Rocket, BarChart, RefreshCw, Zap } from 'lucide-react';

const roadmapSteps = [
  {
    icon: <Search className="w-6 h-6 text-indigo-400" />,
    title: "Diagnostic & Discovery",
    desc: "We analyze your current pipeline, CRM hygiene, and historic lead data to identify bottlenecks and ideal customer profiles (ICPs)."
  },
  {
    icon: <Network className="w-6 h-6 text-primary-400" />,
    title: "Strategy & Vector Alignment",
    desc: "Developing multi-channel outreach architectures, targeted lists, and tailored copywriting specific to your B2B sector."
  },
  {
    icon: <Rocket className="w-6 h-6 text-fuchsia-400" />,
    title: "Launch & Campaign Execution",
    desc: "Deploying automated LinkedIn messaging, cold call cadences, and personalized email sequences to your targeted prospects."
  },
  {
    icon: <BarChart className="w-6 h-6 text-blue-400" />,
    title: "Telemetry & Optimization",
    desc: "Constant tracking of open rates, reply velocities, and meeting conversions. Iterating A/B tests to maximize engagement."
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
    title: "Scale & Revenue Momentum",
    desc: "Once predictable benchmarks are established, we scale the outbound engine, ensuring continuous qualified meetings booked."
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-20 pb-10 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Moving Graphic (Data Reactor) */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="text-center absolute z-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/5 text-primary-300 text-[10px] uppercase tracking-widest font-bold mb-6 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
            System Architecture
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4"
          >
            The Growth <span className="italic font-serif text-primary-400">Reactor.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/50 text-lg md:max-w-2xl mx-auto"
          >
            Watch how our core capabilities integrate to form a relentless revenue-generating machine.
          </motion.p>
        </div>

        {/* 3D-Like Animated Reactor */}
        <div className="relative w-full h-full flex items-center justify-center perspective-1000 z-10">
          <motion.div 
            className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-primary-500/20 border-dashed"
            animate={{ rotateX: 60, rotateZ: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border border-indigo-400/30"
            animate={{ rotateX: 60, rotateZ: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 right-1/4 w-3 h-3 md:w-4 md:h-4 bg-indigo-400 rounded-full shadow-[0_0_15px_#818cf8]" />
            <div className="absolute bottom-0 left-1/4 w-2 h-2 md:w-3 md:h-3 bg-primary-400 rounded-full shadow-[0_0_15px_#a855f7]" />
          </motion.div>
          <motion.div 
            className="absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full bg-primary-900/10 border-2 border-primary-400/50 backdrop-blur-sm"
            animate={{ rotateX: 60, rotateZ: 360, boxShadow: ["0 0 20px rgba(168,85,247,0.2)", "0 0 50px rgba(168,85,247,0.5)", "0 0 20px rgba(168,85,247,0.2)"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Central Energy Core */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-primary-600 to-indigo-500 shadow-[0_0_50px_rgba(168,85,247,0.8)] flex items-center justify-center z-20"
          >
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white blur-[5px] opacity-50" />
            
            {/* Particles emitting from core */}
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
                animate={{ 
                  y: [0, (Math.random() - 0.5) * 400], 
                  x: [0, (Math.random() - 0.5) * 400], 
                  scale: [1, 0], 
                  opacity: [1, 0] 
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  repeat: Infinity, 
                  delay: i * 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Floating Particles/Nodes */}
      <motion.div 
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10], rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-[10%] w-32 h-32 border border-primary-500/10 rounded-full flex items-center justify-center opacity-50 z-0 pointer-events-none"
      >
        <div className="w-2 h-2 bg-primary-400 rounded-full shadow-[0_0_10px_#a855f7]" />
      </motion.div>
      <motion.div 
        animate={{ y: [30, -30, 30], x: [20, -20, 20], rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[40%] left-[5%] w-48 h-48 border border-indigo-500/10 rounded-full flex items-center justify-center opacity-30 z-0 pointer-events-none"
      >
        <div className="absolute top-0 w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_15px_#818cf8]" />
        <div className="absolute bottom-0 w-1.5 h-1.5 bg-fuchsia-400 rounded-full shadow-[0_0_10px_#e879f9]" />
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[15%] w-64 h-64 border border-white/5 bg-gradient-to-tr from-primary-500/5 to-transparent rounded-full z-0 pointer-events-none"
      />

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <Services />

      {/* Proven Track Record / Process Roadmap Section */}
      <section className="relative py-32 px-6 z-10 border-t border-white/5 bg-space-950/80 backdrop-blur-sm overflow-hidden">
        {/* Animated Orbits */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full pointer-events-none z-0">
           <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full border-dashed opacity-50"
          >
            <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_#a855f7]" />
          </motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full opacity-30"
          >
            <div className="absolute bottom-0 right-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1]" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 relative">
            <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-primary-900/0 via-primary-500/5 to-primary-900/0 blur-xl pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-primary-900/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-300 mb-8 border border-primary-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <Zap className="w-3 h-3" />
              Operational Blueprint
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
            >
              Our Proven <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Track Record</span> Pipeline.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            >
              How we transform stagnant prospect lists into high-velocity revenue generation engines through systematic execution.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-[85px] left-[10%] right-[10%] h-[2px] bg-white/5 z-0">
               <motion.div 
                 initial={{ scaleX: 0, originX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                 className="h-full bg-gradient-to-r from-primary-500/0 via-primary-400 to-primary-500/0"
               />
            </div>

            {roadmapSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", bounce: 0.4 }}
                className="relative bg-space-900 border border-white/5 p-8 rounded-[32px] flex flex-col items-center text-center z-10 hover:border-primary-500/30 transition-all hover:translate-y-[-8px] hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.3)] group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[30px] group-hover:bg-primary-500/10 transition-colors pointer-events-none" />
                
                <div className="w-16 h-16 rounded-2xl bg-space-950 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:border-primary-500/50 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {step.icon}
                </div>
                
                <div className="text-[10px] font-mono font-bold text-primary-500/70 uppercase tracking-[0.2em] mb-4 bg-primary-900/20 px-3 py-1 rounded-full border border-primary-500/20">Phase 0{idx + 1}</div>
                <h4 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-primary-300 transition-colors">{step.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
