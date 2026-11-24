import { useMemo, useState } from 'react';
import { Eyebrow } from '../components/home/Section';
import { BOOKING_URL } from '../data/site';

type Package = { name: string; note: string; lo: number; hi: number };

const PACKAGES: Package[] = [
  { name: 'Ignite', note: 'Lean outbound', lo: 5, hi: 20 },
  { name: 'Ascend', note: 'More reach', lo: 10, hi: 45 },
  { name: 'Supernova', note: 'High volume', lo: 15, hi: 75 },
];

const zar = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
  maximumFractionDigits: 0,
});

const R = (value: number) => zar.format(Math.round(value));
const f1 = (value: number) => (Math.round(value * 10) / 10).toLocaleString('en-US');

const range = (lo: number, hi: number, fmt: (v: number) => string) =>
  `${fmt(lo)} – ${fmt(hi)}`;

export default function RoiCalculator() {
  const [deal, setDeal] = useState(50000);
  const [pkg, setPkg] = useState(0);
  const [meet, setMeet] = useState(40);
  const [close, setClose] = useState(20);

  const result = useMemo(() => {
    const k = PACKAGES[pkg];
    const m = meet / 100;
    const c = close / 100;

    const meetingsLo = k.lo * m;
    const meetingsHi = k.hi * m;
    const dealsLo = k.lo * m * c;
    const dealsHi = k.hi * m * c;
    const monthlyLo = dealsLo * deal;
    const monthlyHi = dealsHi * deal;

    return {
      package: k,
      conversations: { lo: k.lo, hi: k.hi },
      meetings: { lo: meetingsLo, hi: meetingsHi },
      deals: { lo: dealsLo, hi: dealsHi },
      monthly: { lo: monthlyLo, hi: monthlyHi },
      yearly: { lo: monthlyLo * 12, hi: monthlyHi * 12 },
    };
  }, [deal, pkg, meet, close]);

  return (
    <main className="relative z-10 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>ROI calculator</Eyebrow>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4 text-balance max-w-3xl">
          What would outbound be worth to{' '}
          <span className="italic font-serif text-primary-400">your business?</span>
        </h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Enter your average deal value and how often you close. See how many deals a month a month
          of outreach could bring in — and what that's worth.
        </p>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.15fr] gap-6 items-start">
          <section
            aria-label="Your numbers"
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <label htmlFor="deal" className="block text-sm font-bold text-white">
              Average deal value (R)
            </label>
            <input
              id="deal"
              type="number"
              min={0}
              step={1000}
              inputMode="numeric"
              value={deal}
              onChange={(e) => setDeal(Math.max(0, Number(e.target.value) || 0))}
              className="mt-2 w-full rounded-xl border border-white/10 bg-space-950 px-4 py-3 text-base text-white focus:outline-none focus:border-primary-500/60"
            />
            <p className="mt-2 text-xs text-white/40">
              What a new client is worth to you, first year or first order.
            </p>

            <div className="mt-6 text-sm font-bold text-white">Aurora package</div>
            <div className="mt-2 grid grid-cols-3 gap-2" role="group" aria-label="Package">
              {PACKAGES.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  aria-pressed={pkg === i}
                  onClick={() => setPkg(i)}
                  className={`rounded-xl border px-2 py-3 text-sm leading-tight transition-colors ${
                    pkg === i
                      ? 'border-primary-500 bg-primary-600 text-white'
                      : 'border-white/10 bg-space-950 text-white hover:border-white/20'
                  }`}
                >
                  {p.name}
                  <span
                    className={`mt-1 block text-[11px] font-normal ${
                      pkg === i ? 'text-white/80' : 'text-white/40'
                    }`}
                  >
                    {p.note}
                  </span>
                </button>
              ))}
            </div>

            <label htmlFor="meet" className="mt-6 flex items-center justify-between text-sm font-bold text-white">
              <span>Positive conversations that become a meeting</span>
              <span className="text-primary-400">{meet}%</span>
            </label>
            <input
              id="meet"
              type="range"
              min={10}
              max={80}
              step={5}
              value={meet}
              onChange={(e) => setMeet(Number(e.target.value))}
              className="mt-2 w-full accent-primary-500"
            />

            <label htmlFor="close" className="mt-6 flex items-center justify-between text-sm font-bold text-white">
              <span>Meetings you turn into a sale</span>
              <span className="text-primary-400">{close}%</span>
            </label>
            <input
              id="close"
              type="range"
              min={5}
              max={60}
              step={5}
              value={close}
              onChange={(e) => setClose(Number(e.target.value))}
              className="mt-2 w-full accent-primary-500"
            />
            <p className="mt-2 text-xs text-white/40">
              Your own close rate. Be conservative if you're not sure.
            </p>
          </section>

          <section
            aria-live="polite"
            className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary-900/40 via-space-900 to-indigo-950/50 border border-primary-500/20 p-6 md:p-8"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary-600/20 blur-[90px] pointer-events-none" />
            <div className="relative">
              <div className="text-5xl md:text-6xl font-extrabold leading-none text-primary-300 whitespace-nowrap">
                {deal > 0 ? `${f1(result.deals.lo)}–${f1(result.deals.hi)}` : '—'}
              </div>
              <p className="mt-3 text-lg text-white/70 max-w-md">
                new deals a month at full volume
              </p>

              <div className="mt-6 divide-y divide-white/10 border-t border-white/10">
                {[
                  ['Positive conversations a month*', `${result.conversations.lo}–${result.conversations.hi}`],
                  ['Meetings a month', range(result.meetings.lo, result.meetings.hi, f1)],
                  ['New deals a month', range(result.deals.lo, result.deals.hi, f1)],
                  ['New business a month', range(result.monthly.lo, result.monthly.hi, R)],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 py-3 text-sm">
                    <span className="text-white/50">{label}</span>
                    <span className="font-bold text-white text-right whitespace-nowrap">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-primary-600/20 p-5">
                <span className="text-sm text-white/70">Estimated new business a year</span>
                <strong className="mt-1 block text-2xl md:text-3xl font-extrabold text-white whitespace-nowrap">
                  {deal > 0 ? range(result.yearly.lo, result.yearly.hi, R) : '—'}
                </strong>
              </div>
            </div>
          </section>
        </div>

        <p className="mt-8 text-xs text-white/35 max-w-4xl leading-relaxed">
          *Estimated at full volume (month 3 onwards), from Aurora's own campaign rates: 15–25% of
          LinkedIn requests accepted, 20–35% of new connections reply, 1–3% email reply rate. Ranges
          show a cautious and a strong month. These are planning estimates, not a guarantee; results
          depend on your market, offer and follow-up.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-full bg-primary-600 px-6 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary-500"
          >
            Book a 15-minute call
          </a>
          <p className="text-sm text-white/40">
            We'll run these numbers with you for your market.
          </p>
        </div>
      </div>
    </main>
  );
}
