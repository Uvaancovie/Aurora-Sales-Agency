import { motion } from 'motion/react';
import { Target, Megaphone, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const icons = {
  Target: <Target className="w-8 h-8 text-primary-400" />,
  Megaphone: <Megaphone className="w-8 h-8 text-fuchsia-400" />,
  Users: <Users className="w-8 h-8 text-indigo-400" />,
  Zap: <Zap className="w-8 h-8 text-blue-400" />,
};

export const Services = () => {
  return (
    <section id="services" className="relative py-24 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-sans font-light tracking-tight text-white mb-6"
          >
            Capabilities engineered for <span className="italic font-serif text-primary-400">scale.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            From generating initial interest to closing the deal and managing operations, our holistic pillars support your entire revenue journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-4 gap-4">
          {servicesData.map((service, index) => {
            const gridClasses = [
              "md:col-span-7 md:row-span-2 bg-white/5 border border-white/10 overflow-hidden relative group hover:-translate-y-1 transition-transform duration-500", 
              "md:col-span-5 md:row-span-2 bg-space-900 border border-white/5 group hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden", 
              "md:col-span-5 md:row-span-2 bg-indigo-950/20 border border-white/5 group hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden", 
              "md:col-span-7 md:row-span-2 bg-white/5 border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 cursor-pointer" 
            ][index];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                className={gridClasses}
              >
                {/* Animated Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <Link to={`/services/${service.id}`} className="block h-full w-full p-8 rounded-[32px] flex flex-col backdrop-blur-md transition-colors hover:border-primary-500/50 z-10 relative">
                  {index === 0 && (
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_60%)] pointer-events-none group-hover:bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.25),transparent_70%)] transition-all"></div>
                  )}
                  {index === 3 && (
                    <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-primary-900/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary-900/20 transition-all"></div>
                  )}

                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 relative z-10 group-hover:scale-110 transition-transform bg-primary-900/20 text-white">
                    {icons[service.iconName]}
                  </div>
                  
                  <div className="relative z-10 flex-grow flex flex-col">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest mb-2 block">{service.subtitle}</span>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">{service.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                    
                    <ul className="space-y-3 mt-auto">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-xs font-medium text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
