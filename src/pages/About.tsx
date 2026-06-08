import { motion } from 'motion/react';
import { ArrowRight, Handshake, Zap, Target, Hexagon, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const domains = [
  {
    role: "Outbound Sales & Pipeline Generation",
    category: "B2B Growth",
    desc: "We build and execute sophisticated, multi-channel outbound systems using personalized automation to deliver predictable appointment setting and pipeline growth."
  },
  {
    role: "Digital Products & SaaS",
    category: "Product Strategy",
    desc: "From conceptualization to go-to-market strategies, we help software companies scale MRR, optimize user acquisition, and improve retention metrics."
  },
  {
    role: "Global Talent Outsourcing",
    category: "Staff Augmentation",
    desc: "We provide access to top-tier global talent across Software Engineering, Data Science, DevOps, and Sales—allowing you to scale your team efficiently."
  },
  {
    role: "CRM & Sales Operations",
    category: "Infrastructure",
    desc: "We architect scalable CRM setups and complex automation workflows that remove friction, reduce manual tasks, and accelerate the sales cycle."
  },
  {
    role: "Brand Partnerships",
    category: "Strategic Alliances",
    desc: "We design and execute cross-promotional campaigns and joint giveaways that drive organic email growth and mutually beneficial lead generation."
  },
  {
    role: "Cybersecurity & IT Solutions",
    category: "Technical Sales",
    desc: "Navigating complex technical markets with specialized sales approaches tailored for cybersecurity, network infrastructure, and enterprise IT services."
  }
];

export default function About() {
  return (
    <main className="pt-32 pb-24 px-6 relative z-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Section 1: Intro & Mission */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-24 text-center max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 bg-primary-900/30 rounded-full text-xs font-bold uppercase tracking-widest text-primary-300 mb-6 border border-primary-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            Agency Capabilities
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-white">
            Navigating the complexities of <span className="italic font-serif text-primary-400 font-bold">Digital Growth.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            Aurora is a full-service growth agency specializing in outsourced B2B sales, digital product development, and staff augmentation. We partner with fast-growing companies to architect sophisticated pipeline engines, deploy high-performing operational talent, and scale digital revenue streams. From crafting outbound infrastructure to placing top-tier technical and sales professionals, our team acts as an extension of yours to drive predictable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Section 2: Core Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-space-900 border border-white/5 rounded-[32px] p-10 relative overflow-hidden group hover:border-primary-500/30 transition-colors"
          >
            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-primary-600/10 rounded-full blur-[50px] group-hover:bg-primary-500/20 transition-all"></div>
            <Zap className="w-10 h-10 text-primary-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Adaptable Outsourcing</h3>
            <p className="text-white/50 leading-relaxed">
              We seamlessly integrate with your existing operations—whether deploying a remote data science team, building out your digital product ecosystem, or taking over edge-to-edge sales development—delivering precision and agility at scale.
            </p>
          </motion.div>

          {/* Section 3: Brand Partnerships */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-[32px] p-10 relative overflow-hidden backdrop-blur-md group hover:border-indigo-500/30 transition-colors"
          >
            <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-indigo-600/10 rounded-full blur-[50px] group-hover:bg-indigo-500/20 transition-all"></div>
            <Handshake className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Strategic Brand Partnerships</h3>
            <p className="text-white/50 leading-relaxed">
              Beyond talent and pipeline creation, we specialize in cross-promotional campaigns. By aligning complementary brands on joint initiatives, we amplify reach, drive high-quality organic lead generation, and multiply your measurable ROI.
            </p>
          </motion.div>
        </div>

        {/* Section 4: Proven Track Record (Timeline) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">Our Specialized <span className="italic font-serif text-primary-400 font-bold">Domains</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">Providing cross-functional expertise and scalable resources for modern digital enterprises.</p>
          </div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 md:translate-x-[-1px] space-y-12">
            {domains.map((domain, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                {/* Timeline Node */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-1 w-4 h-4 rounded-full bg-space-950 border-2 border-primary-500 z-10 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
                >
                  <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-primary-500/20 hover:bg-white/10 transition-colors group">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary-300 mb-2 block">{domain.category}</span>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{domain.role}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 5: Mission CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-primary-600 rounded-[32px] p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-white/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-black/20 rounded-full blur-[80px]"></div>
          
          <Rocket className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to break through revenue plateaus?</h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-10">
            I am always open to connecting with SaaS founders, revenue leaders, and anyone passionate about accelerating growth and forging win-win partnerships.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-space-950 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:scale-105"
          >
            Initiate Contact
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
