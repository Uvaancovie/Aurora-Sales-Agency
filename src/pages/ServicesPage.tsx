import { Services } from '../components/Services';
import { motion } from 'motion/react';
import { Network, Search, Rocket, BarChart, RefreshCw } from 'lucide-react';

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
    <main className="pt-20 pb-10">
      <Services />

      {/* Proven Track Record / Process Roadmap Section */}
      <section className="relative py-24 px-6 z-10 border-t border-white/5 bg-space-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-300 mb-6 border border-white/5"
            >
              Operational Blueprint
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-light text-white mb-6"
            >
              Our Proven <span className="font-serif italic font-bold text-primary-400">Track Record</span> Pipeline.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 max-w-2xl mx-auto text-lg"
            >
              How we transform stagnant prospect lists into high-velocity revenue generation engines.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

            {roadmapSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-white/5 border border-white/10 p-6 rounded-[24px] flex flex-col items-center text-center z-10 backdrop-blur-md hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-space-900 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest mb-3">Phase 0{idx + 1}</div>
                <h4 className="text-lg font-bold text-white mb-3 leading-snug">{step.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
