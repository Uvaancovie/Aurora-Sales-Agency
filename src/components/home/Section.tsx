import { motion } from 'motion/react';
import type { FC, ReactNode } from 'react';

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/30 border border-primary-500/20 text-primary-300 text-[10px] uppercase tracking-widest font-bold mb-6">
    <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
    {children}
  </div>
);

export const Reveal: FC<{ children: ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Check = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="flex-none mt-0.5">
    <path d="M4 10.5l4 4 8-9" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
