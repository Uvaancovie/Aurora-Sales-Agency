import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-space-950 border-t border-white/5">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-8 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 rounded-full border-2 border-primary-500 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_6px_white]" />
            </div>
            <span className="text-sm font-bold tracking-tighter uppercase text-white">
              Aurora <span className="text-primary-400">Sales Agency</span>
            </span>
          </Link>
          <p className="text-[11px] text-white/30 leading-relaxed max-w-[180px]">
            Revenue-generating systems built for ambitious businesses.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">Navigation</div>
          <ul className="space-y-2.5">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/services', label: 'Services' },
              { to: '/contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[11px] text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">Digital Solutions</div>
          <ul className="space-y-2.5">
            {[
              { to: '/digital-solutions', label: 'SEO' },
              { to: '/digital-solutions', label: 'Web Services' },
              { to: '/digital-solutions', label: 'SaaS Development' },
              { to: '/digital-solutions', label: 'Website Design' },
              { to: '/digital-solutions', label: 'AI Agents' },
            ].map((l, i) => (
              <li key={i}>
                <Link to={l.to} className="text-[11px] text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Status */}
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">System</div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-white/40 uppercase tracking-widest">All Systems Active</span>
          </div>
          <Link
            to="/contact"
            className="inline-block mt-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/30 text-[10px] font-bold uppercase tracking-widest text-primary-400 hover:bg-primary-600/20 transition-all"
          >
            Initiate Launch →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-8 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] text-white/25 font-mono uppercase tracking-[0.15em]">
        <span>Coordinates: 26.2041° S, 28.0473° E · Johannesburg, ZA</span>
        <span>Aurora Sales Agency © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
