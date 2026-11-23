import { Reveal } from './Section';
import { BOOKING_URL } from '../../data/site';

export const FinalCTA = () => (
  <section className="relative z-10 py-28 px-6 border-t border-white/5 bg-gradient-to-b from-space-950 to-purple-950/30">
    <Reveal className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
      <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.1]">
        Ready for a calendar full of <span className="italic font-serif text-primary-400">qualified meetings?</span>
      </h2>
      <p className="text-lg text-white/50 max-w-xl">Book a 15-minute call. We'll look at who you sell to and show you how we'd reach them.</p>
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="h-12 px-8 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-xs font-bold uppercase tracking-widest flex items-center transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]">
        Book a 15-minute call
      </a>
    </Reveal>
  </section>
);
