import { motion } from 'motion/react';

const industries = [
  "Agencies",
  "SaaS",
  "Professional Services",
  "Recruitment",
  "Construction & Industrial",
  "B2B Services"
];

export const Industries = () => {
  return (
    <section id="industries" className="relative py-24 px-6 z-10 border-t border-white/5 bg-gradient-to-b from-space-950 to-purple-950/20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] text-white/40 uppercase tracking-widest mb-10 block"
        >
          Accelerating growth across sectors
        </motion.h3>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-semibold uppercase tracking-wider hover:border-primary-500/50 hover:bg-primary-500/10 transition-all cursor-default"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
