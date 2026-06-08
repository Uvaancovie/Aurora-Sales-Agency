import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does Aurora integrate with our in-house team?",
    answer: "We seamlessly act as an extension of your company. We align with your internal communication tools (Slack, Teams), adopt your brand voice, and work directly with your stakeholders to ensure complete transparency and tight collaboration."
  },
  {
    question: "What are the benefits of outsourcing to an agency vs. hiring internally?",
    answer: "Outsourcing grants you immediate access to specialized, senior-level expertise without the traditional hiring lag, training costs, or long-term overhead. You get a fully functional growth engine or specialized team from day one, allowing you to scale capacity dynamically as needs change."
  },
  {
    question: "What does your typical onboarding process look like?",
    answer: "Our onboarding is streamlined into a rapid 14-day launch sequence. We start with a strategic kickoff, followed by deep-dive systems access, technical setup, and finalize with the deployment of your customized outbound or operational campaigns."
  },
  {
    question: "How do you track and report on performance?",
    answer: "We believe in radical transparency. You'll receive continuous access to real-time performance dashboards, backed by weekly cadence calls and comprehensive end-of-month reporting to review KPIs, attribute revenue, and optimize strategies."
  },
  {
    question: "Can your services scale as our company grows?",
    answer: "Absolutely. Our infrastructure is designed to be highly elastic. Whether you need to ramp up outbound sales volume, deploy additional digital products, or scale your outsourced engineering team, we adapt to your growth trajectory instantly."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 z-10 border-t border-white/5 bg-space-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-900/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-300 mb-6 border border-primary-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            Knowledge Base
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-white mb-6"
          >
            Frequently Asked <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Questions.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-primary-900/20 border-primary-500/30 shadow-[0_10px_30px_-15px_rgba(168,85,247,0.2)]' : 'bg-white/5 hover:bg-white/[0.07]'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => toggleFaq(index)}
              >
                <span className={`text-base font-bold transition-colors ${openIndex === index ? 'text-primary-300' : 'text-white group-hover:text-primary-300'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary-400' : 'text-white/50 group-hover:text-primary-300'}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
