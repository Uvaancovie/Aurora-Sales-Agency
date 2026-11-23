import { Eyebrow, Reveal } from './Section';

const items = [
  ['Go-to-market strategy', 'A brief that defines who you sell to, what you offer and why it matters, so every list and message is built on it.'],
  ['List building', 'Decision-makers who match your ideal client, with your existing clients and pipeline excluded.'],
  ['Email infrastructure', 'Dedicated domains and mailboxes, set up and warmed up properly, so your messages land in the inbox and your main domain stays protected.'],
  ['Copywriting', 'Messages written by people and tailored to each industry and role. Conversational, never robotic.'],
  ['LinkedIn outreach', 'Connection requests and soft, relevant conversation starters. When someone replies, a real person picks it up in your voice.'],
  ['Warm calling and follow-ups', "Engaged prospects get a call from someone they've already spoken to, and every \"get back to me next week\" is followed up."],
  ['CRM management', 'Every lead, reply and meeting tracked with notes, so nothing gets lost between outreach and your sales call.'],
  ['Reporting', "Clear analytics on emails, replies, positive replies and meetings, so you can see what's working."],
];

export const Included = () => (
  <section id="included" className="relative z-10 py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <Eyebrow>What's included</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-12">
          Everything it takes to <span className="italic font-serif text-primary-400">book the meeting.</span>
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(([title, body], i) => (
          <Reveal key={title} delay={i * 0.05}>
            <div className="h-full rounded-3xl bg-white/5 border border-white/10 p-7 hover:border-primary-500/40 hover:bg-primary-900/10 transition-all">
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
