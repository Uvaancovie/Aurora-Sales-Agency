import { motion } from 'motion/react';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 px-6 relative z-10 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-6">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 bg-primary-600 rounded-[32px] p-10 flex flex-col justify-between text-white relative overflow-hidden h-fit"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
          
          <div>
            <div className="inline-block px-3 py-1 bg-black/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-200 mb-6 border border-white/10">
              Establish Connections
            </div>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4">
              Initiate <br />
              <span className="font-serif italic font-bold">Launch Sequence</span>
            </h1>
            <p className="text-primary-100/70 text-sm leading-relaxed mb-10 max-w-sm">
              Ready to break through the atmosphere? Dock with our team for a strategic sales diagnostic. Let's map out your trajectory.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-primary-200 font-mono">Comms Channel</span>
              <a href="mailto:hello@aurorasalesagency.net" className="text-lg font-medium hover:text-white/80 transition-colors">hello@aurorasalesagency.net</a>
            </div>
            <div className="w-full h-px bg-white/20"></div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-primary-200 font-mono">HQ Coordinates</span>
              <span className="text-sm font-medium">Digital First / Global Reach</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-md"
        >
          <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-2">Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-space-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-primary-500/50 focus:bg-primary-900/10 transition-all placeholder:text-white/20"
                  placeholder="John Shepard"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-2">Company</label>
                <input 
                  type="text" 
                  className="w-full bg-space-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-primary-500/50 focus:bg-primary-900/10 transition-all placeholder:text-white/20"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-2">Email Address *</label>
              <input 
                type="email" 
                required
                className="w-full bg-space-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-primary-500/50 focus:bg-primary-900/10 transition-all placeholder:text-white/20"
                placeholder="commander@acme.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-2">Project Details</label>
              <textarea 
                rows={6}
                className="w-full bg-space-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-primary-500/50 focus:bg-primary-900/10 transition-all placeholder:text-white/20 resize-none"
                placeholder="How can we help you grow?"
              />
            </div>

            <button type="submit" className="mt-4 w-full bg-primary-600 hover:bg-primary-500 text-white rounded-2xl py-4 text-sm font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
              Transmit Data
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
