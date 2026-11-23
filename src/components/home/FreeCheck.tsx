import { Check, Eyebrow, Reveal } from './Section';
import { CONTACT_EMAIL } from '../../data/site';

const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free target market check')}&body=${encodeURIComponent('Company website:\nWhat we sell:\nWho we want to reach:')}`;

export const FreeCheck = () => (
  <section id="free-check" className="relative z-10 py-24 px-6">
    <Reveal className="max-w-7xl mx-auto">
      <div className="rounded-[40px] border border-primary-500/30 bg-gradient-to-br from-primary-900/30 via-space-900 to-indigo-950/40 p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative">
          <Eyebrow>Free · no obligation</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-5">
            Get a free <span className="italic font-serif text-primary-400">Target Market Check.</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">Tell us what you sell and who you'd love to sell to. Within a day, we'll send you 25 real decision-makers we'd reach out to for you, plus the opening message we'd send them.</p>
        </div>
        <div className="relative flex flex-col gap-6">
          <ul className="flex flex-col gap-3 text-white/70">
            <li className="flex gap-3"><Check /><span>25 sample decision-makers in your target market</span></li>
            <li className="flex gap-3"><Check /><span>Your ideal client profile, written down</span></li>
            <li className="flex gap-3"><Check /><span>A sample outreach message you can keep</span></li>
          </ul>
          <a href={mailto} className="self-start h-12 px-8 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-xs font-bold uppercase tracking-widest flex items-center transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            Request my free check
          </a>
        </div>
      </div>
    </Reveal>
  </section>
);
