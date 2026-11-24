import { Eyebrow, Reveal } from './Section';

type Reply = { role: string; quote: string };

const replies: Reply[] = [
  {
    role: 'Founder & CEO · UK tech company',
    quote:
      'Lovely to hear from you. Yes, I would be interested in a conversation. Do you have a Calendly link I can use to book a call?',
  },
  {
    role: 'CEO & Founder · SA fintech',
    quote: 'Please book a call using the link. Thanks.',
  },
  {
    role: 'Hemp construction campaign',
    quote:
      'We are interested. Would you like to arrange a meeting or a call to explore synergy further?',
  },
  {
    role: 'Head of Solutions · SA construction',
    quote:
      'We are keen to connect to understand hemp as a material. Do you have a site in Johannesburg? Looking forward to connecting!',
  },
  {
    role: 'Director · UK steel supplier',
    quote: 'This sounds interesting to me — can we schedule a meeting?',
  },
  {
    role: 'Founder · SA team-building company',
    quote: "OK — let's chat tomorrow. How's 11:00? MS Teams?",
  },
  {
    role: 'Aurora outreach · SA B2B',
    quote: "This sounds great. I'm interested!",
  },
  {
    role: 'Delivery lead · SA logistics',
    quote: 'Can we get on a call on Wednesday 2pm if that works for you?',
  },
  {
    role: 'Aurora outreach · SA B2B',
    quote: 'I can do Wed at 11am for 30 mins if that works?',
  },
  {
    role: 'Business Development · SA company',
    quote:
      "A colleague passed on your note about Aurora's outbound sales offering, and we would like to set up a meeting to learn more.",
  },
  {
    role: 'Aurora outreach · SA B2B',
    quote: 'Please tell me more?',
  },
  {
    role: 'VP of Operations · US maritime company',
    quote: 'I would! Would you be free around 10:00 (CST) in the morning?',
  },
  {
    role: 'Deputy Director · US defence maintenance',
    quote:
      "I'm not sure I got a reply back on this, so wondering if you are interested or just want to discuss individually.",
  },
  {
    role: 'Editor · African mining publication',
    quote:
      "Thank you for reaching out. Your approach is relevant to our readers, and I'd like to invite you to feature in the January–March 2027 Mining Indaba edition.",
  },
  {
    role: 'Mining executive',
    quote:
      'Thanks for your email and making time to meet when I was in South Africa. I look forward to looking for opportunities to collaborate.',
  },
  {
    role: 'Project Engineer · solar energy company',
    quote:
      'Thank you for the email. Can you please email me more technical literature regarding your drone application and solar panel cleaning?',
  },
  {
    role: 'Prospect · SA ICT company',
    quote: 'Good day, all is going well thanks. You can send your profile.',
  },
];

const ReplyCard = ({ reply }: { reply: Reply }) => (
  <article className="h-full rounded-2xl bg-white p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] ring-1 ring-black/5 flex flex-col">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-[#DDD6FE] flex-none" aria-hidden="true" />
      <div className="flex-1 min-w-0">
        <div className="h-2.5 w-24 rounded-full bg-[#C9C1DA]" aria-hidden="true" />
        <p className="mt-2 text-xs leading-snug text-[#5E5A73]">{reply.role}</p>
      </div>
      <span className="flex-none rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-700">
        Interested
      </span>
    </div>
    <p className="mt-5 text-[15px] leading-relaxed text-[#1B1633]">{reply.quote}</p>
  </article>
);

export const ReplyCards = () => (
  <section id="prospects" className="relative z-10 py-24 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <Eyebrow>Real replies</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
          What prospects <span className="italic font-serif text-primary-400">say.</span>
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-12">
          Actual replies from Aurora-run campaigns. Names withheld for privacy — the outcomes are
          not.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {replies.map((reply, i) => (
          <Reveal key={`${reply.role}-${i}`} delay={Math.min(i, 8) * 0.04}>
            <ReplyCard reply={reply} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/30 font-mono">
          Real replies · Aurora-run campaigns · aurorasalesagency.net
        </p>
      </Reveal>
    </div>
  </section>
);
