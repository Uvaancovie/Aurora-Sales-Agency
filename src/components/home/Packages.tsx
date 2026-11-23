import { Check, Eyebrow, Reveal } from './Section';
import { BOOKING_URL } from '../../data/site';

const packages = [
  { name: 'Ignite', tagline: 'Get a consistent outbound engine running.', featured: false,
    items: [['1 LinkedIn profile', ': your own, connected securely'], ['200 targeted emails', ' a day'], ['', 'Warm calling and follow-ups'], ['', 'List building, copy and CRM']] },
  { name: 'Ascend', tagline: 'Triple your LinkedIn reach.', featured: true,
    items: [['3 LinkedIn profiles', ': warmed up and branded to your company'], ['600 connection requests', ' a week (around)'], ['200 targeted emails', ' a day'], ['', 'Everything in Ignite']] },
  { name: 'Supernova', tagline: 'High-volume outbound across both channels.', featured: false,
    items: [['3 LinkedIn profiles', ': warmed up and branded to your company'], ['1,000 targeted emails', ' a day (around)'], ['', 'Everything in Ignite']] },
];

export const Packages = () => (
  <section id="packages" className="relative z-10 py-24 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <Eyebrow>Packages</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
          Pick the volume that fits <span className="italic font-serif text-primary-400">your growth.</span>
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-12">Every package includes list building, copywriting, warm calling, follow-ups, CRM management and reporting. Billed month to month.</p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5 items-stretch">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className={`h-full rounded-[32px] p-8 flex flex-col gap-6 border ${p.featured ? 'bg-primary-900/30 border-primary-500/50 shadow-[0_0_40px_rgba(168,85,247,0.25)]' : 'bg-white/5 border-white/10'}`}>
              <div>
                {p.featured && <span className="inline-block mb-3 px-3 py-1 rounded-full bg-primary-500 text-white text-[10px] font-bold uppercase tracking-widest">Most popular</span>}
                <h3 className="font-display text-3xl font-bold text-white mb-2">{p.name}</h3>
                <p className="text-white/50">{p.tagline}</p>
              </div>
              <ul className="flex flex-col gap-3 flex-grow">
                {p.items.map(([b, rest]) => (
                  <li key={b + rest} className="flex gap-3 text-sm text-white/70"><Check /><span>{b && <strong className="text-white">{b}</strong>}{rest}</span></li>
                ))}
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className={`h-12 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center transition-all ${p.featured ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'}`}>
                Ask about {p.name}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
