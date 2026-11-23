import { Eyebrow, Reveal } from './Section';

const cases = [
  {
    tag: 'Case study · Manufacturing',
    name: 'Southern Ropes',
    intro: 'A South African rope manufacturer growing into international markets. We ran LinkedIn and email outreach to procurement, engineering and operations leaders in marine, logistics and industrial companies.',
    stats: [['15', 'meetings and presentation requests'], ['4', 'countries: US, Canada, UK, Netherlands'], ['59', 'LinkedIn replies in 19 days']],
    note: 'Highlights include a US procurement director requesting a quote for 18,000 ft of rope, and conversations with engineering heads at marine and machinery manufacturers.',
  },
  {
    tag: 'Case study · Industrial technology',
    name: 'Crystal Forge Technologies',
    intro: 'An industrial technology company selling into mining, processing and manufacturing. We targeted operations, plant and technical managers across Southern Africa.',
    stats: [['7', 'appointments and qualified opportunities'], ['16', 'LinkedIn replies in one week'], ['41', 'new decision-maker connections that week']],
    note: 'Opportunities span global mining equipment, mining operations, processing and manufacturing companies, all inside the sectors the client set out to reach.',
  },
];

export const Results = () => (
  <section id="results" className="relative z-10 py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <Eyebrow>Results</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-12">
          What it looks like <span className="italic font-serif text-primary-400">in practice.</span>
        </h2>
      </Reveal>
      <div className="grid lg:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.1}>
            <article className="h-full rounded-[32px] bg-white/5 border border-white/10 p-8 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_60%)] pointer-events-none" />
              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary-400 mb-2">{c.tag}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{c.name}</h3>
                <p className="text-white/50 leading-relaxed">{c.intro}</p>
              </div>
              <div className="relative grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {c.stats.map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display text-4xl font-bold text-white">{n}</p>
                    <p className="text-xs text-white/50 mt-1 leading-snug">{l}</p>
                  </div>
                ))}
              </div>
              <p className="relative text-sm text-white/50 leading-relaxed">{c.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
