import { motion } from 'motion/react';
import { ArrowRight, Handshake, Zap, Target, Hexagon, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    role: "Founder & Outbound Strategist",
    company: "Aurora Sales Agency",
    date: "Jan 2020 - Present",
    desc: "Helping businesses build predictable sales pipelines through sophisticated lead generation, B2B appointment setting, and CRM & outreach automation."
  },
  {
    role: "Snr Account Manager",
    company: "The Growth Center",
    date: "Sep 2025 - Present",
    desc: "Partnering with B2B SaaS companies to scale revenue. Monitored key SaaS metrics (ARR, conversion rates, retention) and optimized done-for-you pipeline growth systems."
  },
  {
    role: "Account Manager",
    company: "Recess",
    date: "Apr 2025 - Sep 2025",
    desc: "Managed the full sales cycle for an all-in-one business management platform. Empowered fitness studios with branded mobile apps and scheduling tools."
  },
  {
    role: "Business Development Lead",
    company: "CodeCrew INC",
    date: "Aug 2024 - Apr 2025",
    desc: "Drove organic email list growth through cross-brand giveaways. Crafted personalized automation and engaging content for maximum deliverability."
  },
  {
    role: "Senior Business Development Partner",
    company: "Coders Connect",
    date: "Jan 2024 - Aug 2024",
    desc: "Specialized in technology recruitment for global tech start-ups across Software Engineering, Data Science, and DevOps roles."
  },
  {
    role: "Customer Success / BDR",
    company: "The Sales Centre",
    date: "Apr 2020 - Jan 2024",
    desc: "Leveraged tools like Apollo and Dux-Soup for targeted outreach. Ensured clients exceeded growth targets by converting high-quality leads into loyal customers."
  },
  {
    role: "Sales & Production Manager",
    company: "Arum Group Holdings",
    date: "Jan 2010 - Apr 2020",
    desc: "Led complex construction sales and end-to-end project management across corporate, commercial, and residential markets."
  },
  {
    role: "Sales & Biz Dev Exec",
    company: "Discovery Limited",
    date: "Apr 2004 - Jan 2010",
    desc: "Specialized in outbound sales for healthcare and financial sectors, building strong relationships and driving value-driven conversations."
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
            Commander's Status
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-white">
            Navigating the complexities of <span className="italic font-serif text-primary-400 font-bold">Revenue Growth.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            With a diverse background spanning Financial Services, SaaS, Recruitment, Cybersecurity, Email Marketing, Organic Lead List Growth Strategies, Software Animation, and B2B Global Trade—I bring a wealth of experience in Sales, Business Development, and Customer Success. My passion lies in crafting strategic sales approaches tailored to unique industry needs, driving explosive revenue growth, and building long-lasting client relationships.
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
            <h3 className="text-2xl font-bold text-white mb-4">Adaptability & Precision</h3>
            <p className="text-white/50 leading-relaxed">
              I thrive in dynamic environments—whether navigating complex financial solutions, leveraging cutting-edge SaaS technologies, or addressing evolving cybersecurity challenges. My ability to adapt fast and execute with precision ensures I consistently exceed client expectations and unlock sustainable growth.
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
              Beyond core outbound strategy, I specialize in brand partnerships for joint giveaways. By aligning complementary brands on cross-promotional campaigns, we amplify reach, drive high-quality lead generation, and deliver measurable ROI—cultivating vast networks while sharing resources.
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
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">The <span className="italic font-serif text-primary-400 font-bold">Orbit</span> Trajectory</h2>
            <p className="text-white/50 max-w-2xl mx-auto">A proven history of driving growth across fast-paced sectors and leading B2B organizations.</p>
          </div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 md:translate-x-[-1px] space-y-12">
            {experiences.map((exp, idx) => (
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
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary-300 mb-2 block">{exp.date}</span>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">{exp.role}</h4>
                    <h5 className="text-sm font-medium text-white/70 mb-4">{exp.company}</h5>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {exp.desc}
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
