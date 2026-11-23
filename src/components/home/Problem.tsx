import { Reveal } from './Section';

export const Problem = () => (
  <section className="relative z-10 py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
          Your team is great at closing. <span className="italic font-serif text-primary-400">Prospecting is the part that slips.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="space-y-5 text-lg text-white/50 leading-relaxed">
        <p>Referrals and word of mouth dry up. Cold calling eats the week. And when someone says "contact me next Tuesday", it slips through the cracks.</p>
        <p>We take the whole top of your funnel off your plate: finding the right decision-makers, starting conversations, following up and getting meetings booked.</p>
      </Reveal>
    </div>
  </section>
);
