import { Reveal } from './Section';

const clients = [
  'Southern Ropes', 'Crystal Forge Technologies', 'Greenovations', 'NEWORDER', 'GX Energy', 'StoreHub',
  'IT ServiSource', 'Synergy Digital Marketing', 'Metamorph', 'Odyssey Talent Management', 'Cannabus', 'Dynamic Vision',
];

export const ClientsStrip = () => (
  <section aria-label="Companies we work with" className="relative z-10 border-y border-white/5 bg-white/[0.02] py-12 px-6">
    <Reveal className="max-w-7xl mx-auto text-center">
      <p className="text-[10px] text-white/40 uppercase tracking-widest mb-8">Trusted by B2B teams across South Africa and beyond</p>
      <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 font-display text-white/50 text-base md:text-lg font-semibold">
        {clients.map((c) => (
          <li key={c} className="hover:text-white transition-colors">{c}</li>
        ))}
      </ul>
    </Reveal>
  </section>
);
