import { Eyebrow, Reveal } from './Section';

const steps = [
  ['Week 1', 'Strategy', 'You complete our go-to-market brief and we agree your ideal client profile, target markets and exclusions.'],
  ['Weeks 1–2', 'Build and warm up', 'We build your lists, write the messaging for your approval, set up the mailboxes and warm them up until inbox placement tests come back clean.'],
  ['Month 1', 'Launch', 'Email and LinkedIn campaigns go live. Replies are handled, interested prospects get a warm call and meetings get booked.'],
  ['Months 2–3', 'Optimise and scale', "We test, refine and double down on what's converting, so your pipeline keeps filling month after month."],
];

export const HowItWorks = () => (
  <section id="how" className="relative z-10 py-24 px-6 border-t border-white/5 bg-gradient-to-b from-space-950 to-purple-950/20">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <Eyebrow>How it works</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-12">
          From first call to a <span className="italic font-serif text-primary-400">full pipeline.</span>
        </h2>
      </Reveal>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(([when, title, body], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <li className="list-none border-t border-primary-500/40 pt-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-400">{when}</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
