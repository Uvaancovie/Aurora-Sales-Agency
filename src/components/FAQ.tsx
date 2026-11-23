import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is there a long-term contract?",
    answer: "No. We bill month to month. We recommend giving it three months, because the first weeks go into warming up mailboxes and building the pipeline, and results build from month two."
  },
  {
    question: "Will emails come from my main domain?",
    answer: "No. We set up separate domains and mailboxes that represent your company, so we can send at volume without putting your main domain's reputation at risk."
  },
  {
    question: "Do you see my personal LinkedIn messages?",
    answer: "No. On Ignite, your profile is connected to our platform and we only see replies to our campaigns. On Ascend and Supernova, we use three of our own warmed-up profiles, branded to your company."
  },
  {
    question: "Will the messages sound automated?",
    answer: "No. Our team writes the copy for each industry and role, and real people handle every reply in your voice. If a question gets technical, we check with you before answering."
  },
  {
    question: "Do I approve what goes out?",
    answer: "Yes. You sign off your ideal client profile and messaging before anything is sent."
  },
  {
    question: "What happens after a meeting is booked?",
    answer: "It lands in your calendar with notes on the prospect and the conversation so far. You run the sales call, and your feedback helps us sharpen targeting."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-6 z-10 border-t border-white/5 bg-space-950/50">
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
