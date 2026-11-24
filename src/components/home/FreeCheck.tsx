import { useState, type FormEvent } from 'react';
import { Check, Eyebrow, Reveal } from './Section';
import { BOOKING_URL, CONTACT_EMAIL } from '../../data/site';

type Status = 'closed' | 'open' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary-500/60 transition-colors';

export const FreeCheck = () => {
  const [status, setStatus] = useState<Status>('closed');
  const [form, setForm] = useState({ name: '', email: '', company: '', website: '', sell: '', audience: '' });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/free-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
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
            {status === 'closed' && (
              <>
                <ul className="flex flex-col gap-3 text-white/70">
                  <li className="flex gap-3"><Check /><span>25 sample decision-makers in your target market</span></li>
                  <li className="flex gap-3"><Check /><span>Your ideal client profile, written down</span></li>
                  <li className="flex gap-3"><Check /><span>A sample outreach message you can keep</span></li>
                </ul>
                <button
                  type="button"
                  onClick={() => setStatus('open')}
                  className="self-start h-12 px-8 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-xs font-bold uppercase tracking-widest flex items-center transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                  Request my free check
                </button>
              </>
            )}

            {(status === 'open' || status === 'loading' || status === 'error') && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input required className={inputClass} placeholder="Your name" value={form.name} onChange={update('name')} />
                  <input required type="email" className={inputClass} placeholder="Work email" value={form.email} onChange={update('email')} />
                  <input className={inputClass} placeholder="Company" value={form.company} onChange={update('company')} />
                  <input className={inputClass} placeholder="Company website" value={form.website} onChange={update('website')} />
                </div>
                <textarea required rows={2} className={inputClass} placeholder="What do you sell?" value={form.sell} onChange={update('sell')} />
                <textarea required rows={2} className={inputClass} placeholder="Who would you love to sell to? (industry, job titles, location)" value={form.audience} onChange={update('audience')} />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="self-start h-12 px-8 rounded-full bg-primary-600 hover:bg-primary-500 disabled:opacity-60 text-white text-xs font-bold uppercase tracking-widest flex items-center transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                  {status === 'loading' ? 'Sending…' : 'Send my request'}
                </button>
                {status === 'error' && (
                  <p className="text-sm text-white/60">
                    Something went wrong sending that. Please email us at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary-400 underline">{CONTACT_EMAIL}</a>{' '}
                    or <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">book a quick call</a>.
                  </p>
                )}
              </form>
            )}

            {status === 'success' && (
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-light text-white">Thanks, your request is in.</p>
                <p className="text-white/60 leading-relaxed">
                  We'll email your Target Market Check within one working day. Want to talk it through sooner?
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start h-12 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-widest flex items-center transition-all"
                >
                  Book a 15-minute call
                </a>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
