import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Globe,
  Layers,
  Code2,
  Bot,
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Shield,
  Cpu,
  Database,
  Network,
  Star,
  ChevronRight,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const pillars = [
  {
    id: 'seo',
    icon: Search,
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.6)',
    glowSoft: 'rgba(139,92,246,0.15)',
    accent: 'text-violet-400',
    border: 'border-violet-500/30',
    label: 'SEO',
    title: 'SEO Acceleration Engine',
    subtitle: 'Dominate Search. Own Organic Traffic.',
    description:
      'We engineer deep technical SEO architectures — from Core Web Vitals to semantic content authority — that compounds your organic traffic over time and turns Google into your highest-ROI acquisition channel.',
    features: [
      'Technical SEO Audits & Remediation',
      'Semantic Content Cluster Strategy',
      'Core Web Vitals Optimization',
      'Schema Markup & Structured Data',
      'Backlink Authority Building',
      'Local & International SEO',
    ],
    stats: [
      { value: '312%', label: 'Avg. Organic Growth', context: 'within 6 months' },
      { value: '#1', label: 'SERP Rankings', context: 'target keyword positioning' },
      { value: '0.8s', label: 'LCP Target', context: 'Core Web Vitals score' },
    ],
    stack: ['Next.js', 'Screaming Frog', 'Ahrefs', 'Google Search Console', 'Schema.org'],
  },
  {
    id: 'webservice',
    icon: Globe,
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.6)',
    glowSoft: 'rgba(6,182,212,0.15)',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/30',
    label: 'Web Services',
    title: 'Web Service Development',
    subtitle: 'Scalable APIs & Backend Architecture.',
    description:
      'We design and build high-performance web services, RESTful & GraphQL APIs, and cloud-native microservices that power your digital products with enterprise-grade reliability and speed.',
    features: [
      'RESTful & GraphQL API Design',
      'Microservices & Event-Driven Systems',
      'Cloud-Native Architecture (AWS / GCP)',
      'Real-Time WebSocket Infrastructure',
      'API Gateway & Rate Limiting',
      'CI/CD Pipeline Integration',
    ],
    stats: [
      { value: '99.9%', label: 'Uptime SLA', context: 'guaranteed infrastructure' },
      { value: '<50ms', label: 'API Response', context: 'average latency target' },
      { value: '10x', label: 'Scalability', context: 'traffic spike handling' },
    ],
    stack: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    id: 'saas',
    icon: Layers,
    color: 'from-fuchsia-500 to-pink-600',
    glow: 'rgba(217,70,239,0.6)',
    glowSoft: 'rgba(217,70,239,0.15)',
    accent: 'text-fuchsia-400',
    border: 'border-fuchsia-500/30',
    label: 'SaaS',
    title: 'SaaS Platform Engineering',
    subtitle: 'End-to-End Product, Built to Scale.',
    description:
      'From MVP to enterprise-ready SaaS platforms, we architect multi-tenant systems, subscription billing engines, and feature-rich dashboards that turn your idea into a market-ready product.',
    features: [
      'Multi-Tenant Architecture Design',
      'Subscription Billing (Stripe / Paddle)',
      'Role-Based Access Control (RBAC)',
      'Analytics & Usage Dashboards',
      'Onboarding & Trial Flows',
      'White-Label Ready Deployments',
    ],
    stats: [
      { value: '4 wks', label: 'MVP Delivery', context: 'from scoping to launch' },
      { value: '3-Tier', label: 'Multi-Tenancy', context: 'scalable isolation model' },
      { value: '∞', label: 'Scalable Users', context: 'elastic cloud infrastructure' },
    ],
    stack: ['React', 'Next.js', 'Supabase', 'Stripe', 'Prisma', 'Vercel', 'Clerk'],
  },
  {
    id: 'website',
    icon: Code2,
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.6)',
    glowSoft: 'rgba(16,185,129,0.15)',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/30',
    label: 'Web Design',
    title: 'Premium Website Development',
    subtitle: 'Convert Visitors Into Clients.',
    description:
      'We craft conversion-optimised, visually stunning websites with flawless performance scores. From marketing sites to complex portals — built to make your brand unforgettable.',
    features: [
      'High-Converting Landing Pages',
      'Responsive & Mobile-First Design',
      'Micro-Animations & Interactions',
      'CMS Integration (Sanity / Contentful)',
      'A/B Testing & CRO Strategy',
      'Performance-First Architecture',
    ],
    stats: [
      { value: '100', label: 'Lighthouse Score', context: 'Performance & Accessibility' },
      { value: '2.4x', label: 'Conversion Lift', context: 'vs. average web templates' },
      { value: '<1s', label: 'Page Load', context: 'globally optimized CDN' },
    ],
    stack: ['React', 'Next.js', 'Framer Motion', 'Sanity CMS', 'Tailwind', 'Cloudflare'],
  },
  {
    id: 'ai',
    icon: Bot,
    color: 'from-orange-500 to-amber-600',
    glow: 'rgba(249,115,22,0.6)',
    glowSoft: 'rgba(249,115,22,0.15)',
    accent: 'text-orange-400',
    border: 'border-orange-500/30',
    label: 'AI & Agents',
    title: 'Custom AI Workflows & Agents',
    subtitle: 'Autonomous Intelligence, Built for Revenue.',
    description:
      'We design and deploy custom AI agents, autonomous multi-agent pipelines, RAG systems, and LLM-powered workflows that eliminate repetitive work and create 24/7 intelligent business systems.',
    features: [
      'Autonomous AI Sales Agents',
      'Multi-Agent Pipeline Orchestration',
      'Retrieval-Augmented Generation (RAG)',
      'Custom LLM Fine-Tuning & Deployment',
      'AI-Powered CRM & Data Enrichment',
      'Voice AI & Conversational Interfaces',
    ],
    stats: [
      { value: '24/7', label: 'Autonomous Operation', context: 'zero-downtime AI agents' },
      { value: '80%', label: 'Task Automation', context: 'of repetitive workflows' },
      { value: '6x', label: 'Productivity Gain', context: 'measured across clients' },
    ],
    stack: ['LangChain', 'OpenAI', 'Gemini', 'Pinecone', 'n8n', 'Vapi', 'Python'],
  },
];

const metrics = [
  { icon: TrendingUp, value: '312%', label: 'Avg. Organic Traffic Growth' },
  { icon: Zap, value: '<50ms', label: 'API Response Latency' },
  { icon: Bot, value: '80%', label: 'Workflow Automation Rate' },
  { icon: Shield, value: '99.9%', label: 'Infrastructure Uptime' },
];

/* ─────────────────────────────────────────────
   PILLAR CARD
───────────────────────────────────────────── */
function PillarCard({
  pillar,
  active,
  onClick,
  index,
}: {
  key?: React.Key;
  pillar: (typeof pillars)[0];
  active: boolean;
  onClick: () => void;
  index: number;
}) {
  const Icon = pillar.icon;
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, type: 'spring', bounce: 0.3 }}
      onClick={onClick}
      className={`relative w-full text-left p-5 rounded-2xl border transition-all duration-300 group cursor-pointer focus:outline-none ${
        active
          ? `bg-white/5 ${pillar.border} shadow-[0_0_30px_${pillar.glow}20]`
          : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
      }`}
    >
      {active && (
        <motion.div
          layoutId="pillar-active-bg"
          className="absolute inset-0 rounded-2xl"
          style={{ background: `radial-gradient(circle at 20% 50%, ${pillar.glowSoft}, transparent 70%)` }}
        />
      )}
      <div className="relative z-10 flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${pillar.color} shadow-lg`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${active ? pillar.accent : 'text-white/30'}`}>
            {pillar.label}
          </div>
          <div className={`text-sm font-semibold leading-tight ${active ? 'text-white' : 'text-white/60'}`}>
            {pillar.title}
          </div>
        </div>
        <ChevronRight
          className={`w-4 h-4 ml-auto transition-transform ${active ? `${pillar.accent} rotate-90` : 'text-white/20'}`}
        />
      </div>
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   PILLAR DETAIL PANEL
───────────────────────────────────────────── */
function PillarDetail({ pillar }: { pillar: (typeof pillars)[0] }) {
  const Icon = pillar.icon;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pillar.id}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="h-full"
      >
        <div
          className={`h-full relative rounded-3xl border ${pillar.border} bg-space-900/80 backdrop-blur-md overflow-hidden`}
        >
          {/* Glow blob */}
          <div
            className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: pillar.glowSoft }}
          />

          <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start gap-5 mb-8">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${pillar.color}`}
                style={{ boxShadow: `0 0 30px ${pillar.glow}50` }}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${pillar.accent}`}>
                  {pillar.label}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{pillar.title}</h3>
                <p className={`text-sm mt-1 ${pillar.accent}`}>{pillar.subtitle}</p>
              </div>
            </div>

            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">{pillar.description}</p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {pillar.features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2.5 text-sm text-white/70"
                >
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 ${pillar.accent}`} />
                  {f}
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {pillar.stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className={`p-4 rounded-2xl border ${pillar.border} bg-white/[0.03] text-center`}
                >
                  <div className={`text-2xl font-black ${pillar.accent}`}>{s.value}</div>
                  <div className="text-white/70 text-xs font-semibold mt-1">{s.label}</div>
                  <div className="text-white/30 text-[10px] mt-0.5">{s.context}</div>
                </motion.div>
              ))}
            </div>

            {/* Stack */}
            <div className="mt-auto">
              <div className="text-[10px] text-white/30 uppercase tracking-widest mb-3 font-bold">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {pillar.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-[11px] font-mono border border-white/10 bg-white/5 text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function DigitalSolutions() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <main className="pt-20 pb-10 relative overflow-hidden">
      {/* ── Global ambient blobs ── */}
       {/* ──────────────────────────────────────────
          HERO — CINEMATIC FULL VIEWPORT
      ────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">

        {/* ── 3-D perspective grid floor ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.03) 100%)',
            maskImage: 'linear-gradient(to top, black 0%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 80%)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(139,92,246,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              transform: 'perspective(800px) rotateX(55deg)',
              transformOrigin: 'top center',
            }}
          />
        </div>

        {/* ── Deep glow orbs ── */}
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
        <div className="absolute bottom-[20%] left-[35%] w-[350px] h-[350px] rounded-full bg-fuchsia-600/8 blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '7s' }} />

        {/* ── Animated orbital rings ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[
            { size: 340, dur: 35, cw: true,  dot: { color: 'bg-violet-400', glow: 'rgba(139,92,246,1)', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' } },
            { size: 520, dur: 50, cw: false, dot: { color: 'bg-cyan-400',   glow: 'rgba(6,182,212,1)',   pos: 'bottom-0 right-1/4' } },
            { size: 700, dur: 70, cw: true,  dot: { color: 'bg-fuchsia-400',glow: 'rgba(217,70,239,1)', pos: 'top-1/4 right-0' } },
            { size: 900, dur: 95, cw: false, dot: null },
          ].map((ring, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/[0.05]"
              style={{ width: ring.size, height: ring.size }}
              animate={{ rotate: ring.cw ? 360 : -360 }}
              transition={{ duration: ring.dur, repeat: Infinity, ease: 'linear' }}
            >
              {ring.dot && (
                <div
                  className={`absolute w-3 h-3 rounded-full ${ring.dot.color} ${ring.dot.pos}`}
                  style={{ boxShadow: `0 0 16px 4px ${ring.dot.glow}` }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Floating service pills (left + right) ── */}
        {/* Left pill cluster */}
        <div className="absolute left-[3%] xl:left-[6%] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 pointer-events-none z-20">
          {[
            { icon: Search,  label: 'SEO',          sub: 'Organic Search',      color: 'from-violet-600/20 to-violet-900/10', border: 'border-violet-500/25', dot: 'bg-violet-400' },
            { icon: Layers,  label: 'SaaS Dev',     sub: 'Platform Engineering',color: 'from-fuchsia-600/20 to-fuchsia-900/10', border: 'border-fuchsia-500/25', dot: 'bg-fuchsia-400' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.2, duration: 0.7, type: 'spring', bounce: 0.3 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} backdrop-blur-md shadow-xl`}
                style={{ minWidth: 190 }}
              >
                <div className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border ${item.border}`}>
                  <Icon className="w-4 h-4 text-white/80" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">{item.label}</div>
                  <div className="text-[10px] text-white/40">{item.sub}</div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  className={`w-2 h-2 rounded-full ${item.dot} ml-auto`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Right pill cluster */}
        <div className="absolute right-[3%] xl:right-[6%] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 pointer-events-none z-20">
          {[
            { icon: Globe,  label: 'Web Services', sub: 'API & Cloud',          color: 'from-cyan-600/20 to-cyan-900/10',     border: 'border-cyan-500/25',     dot: 'bg-cyan-400' },
            { icon: Code2,  label: 'Web Design',   sub: 'UI/UX Development',    color: 'from-emerald-600/20 to-emerald-900/10',border: 'border-emerald-500/25', dot: 'bg-emerald-400' },
            { icon: Bot,    label: 'AI Agents',    sub: 'Autonomous Workflows', color: 'from-orange-600/20 to-orange-900/10',  border: 'border-orange-500/25',   dot: 'bg-orange-400' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.2, duration: 0.7, type: 'spring', bounce: 0.3 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} backdrop-blur-md shadow-xl`}
                style={{ minWidth: 210 }}
              >
                <div className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border ${item.border}`}>
                  <Icon className="w-4 h-4 text-white/80" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">{item.label}</div>
                  <div className="text-[10px] text-white/40">{item.sub}</div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className={`w-2 h-2 rounded-full ${item.dot} ml-auto`}
                />
              </motion.div>
            );
          })}
        </div>



        {/* ── Main text block ── */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-0">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.05] border border-violet-500/20 backdrop-blur-md mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-300 text-[10px] font-bold uppercase tracking-[0.2em]">
              Digital Infrastructure &amp; AI Engineering
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, type: 'spring', bounce: 0.25 }}
            className="text-6xl md:text-8xl font-light tracking-tight text-white leading-[1.0] mb-8"
          >
            Build the{' '}
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="italic font-serif bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
                Future Stack.
              </span>
              {/* Underline glow */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 rounded-full origin-left"
                style={{ boxShadow: '0 0 12px rgba(139,92,246,0.8)' }}
              />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-white/45 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          >
            SEO that compounds. APIs that scale. SaaS platforms built to win. Websites that convert.
            AI agents that work while you sleep.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black text-sm uppercase tracking-widest hover:shadow-[0_0_40px_rgba(139,92,246,0.55)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Launch a Project
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-white/65 font-semibold text-sm uppercase tracking-widest hover:border-white/25 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            >
              Explore Capabilities
            </a>
          </motion.div>

          {/* ── Glassmorphism stat bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="inline-flex flex-wrap justify-center gap-px rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-md overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
          >
            {[
              { value: '312%', label: 'Organic Growth', icon: TrendingUp, color: 'text-violet-400' },
              { value: '< 50ms', label: 'API Latency',    icon: Zap,         color: 'text-cyan-400' },
              { value: '80%',   label: 'Automated',       icon: Bot,         color: 'text-orange-400' },
              { value: '99.9%', label: 'Uptime SLA',      icon: Shield,      color: 'text-emerald-400' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 py-4 border-r border-white/5 last:border-r-0 hover:bg-white/[0.04] transition-colors"
                >
                  <Icon className={`w-4 h-4 ${s.color} flex-shrink-0`} />
                  <div className="text-left">
                    <div className={`text-base font-black ${s.color}`}>{s.value}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ── HUD bottom strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] pointer-events-none"
        >
          <span>System v2.4.1</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All Services Online
          </span>
          <span>Infrastructure: Active</span>
        </motion.div>
      </section>


      {/* ──────────────────────────────────────────
          METRICS BAR
      ────────────────────────────────────────── */}
      <section className="relative border-b border-white/5 bg-white/[0.02] backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <div className="text-xl font-black text-white">{m.value}</div>
                  <div className="text-xs text-white/40">{m.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ──────────────────────────────────────────
          CAPABILITIES / PILLAR EXPLORER
      ────────────────────────────────────────── */}
      <section id="capabilities" className="relative py-28 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-900/30 border border-violet-500/20 text-violet-300 text-[10px] uppercase tracking-widest font-bold mb-8"
            >
              <Network className="w-3 h-3" />
              Core Capabilities
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6"
            >
              Five Pillars.{' '}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                One System.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Select a capability to explore what we build, how we build it, and the outcomes it delivers.
            </motion.p>
          </div>

          {/* Explorer layout */}
          <div className="grid lg:grid-cols-[340px_1fr] gap-6 items-start">
            {/* Left – Pillar selector */}
            <div className="flex flex-col gap-3">
              {pillars.map((p, i) => (
                <PillarCard
                  key={p.id}
                  pillar={p}
                  active={activePillar === i}
                  onClick={() => setActivePillar(i)}
                  index={i}
                />
              ))}
            </div>

            {/* Right – Detail panel */}
            <div className="min-h-[620px]">
              <PillarDetail pillar={pillars[activePillar]} />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          AI DEEP-DIVE SPOTLIGHT
      ────────────────────────────────────────── */}
      <section className="relative py-28 px-6 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-900/30 border border-orange-500/20 text-orange-300 text-[10px] uppercase tracking-widest font-bold mb-8"
              >
                <Bot className="w-3 h-3" />
                AI & Autonomous Agents
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight"
              >
                Your Business,{' '}
                <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  Running Autonomously.
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/50 text-lg leading-relaxed mb-8"
              >
                We go beyond basic chatbots. Our custom AI agents reason, plan, and execute across your business
                systems — qualifying leads, enriching your CRM, handling customer queries, and orchestrating complex
                multi-step workflows at machine speed.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-10"
              >
                {[
                  { icon: Bot, text: 'Autonomous AI sales & outreach agents' },
                  { icon: Database, text: 'RAG systems over your proprietary data' },
                  { icon: Network, text: 'Multi-agent orchestration pipelines' },
                  { icon: Cpu, text: 'Custom LLM fine-tuning & deployment' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 text-white/70">
                      <div className="w-8 h-8 rounded-lg bg-orange-900/30 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-orange-400" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all hover:scale-105 active:scale-95"
                >
                  Build My AI Agent <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Visual – Animated agent network */}
            <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Rings */}
                {[180, 280, 380].map((s, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-orange-500/10"
                    style={{ width: s, height: s }}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 30 + i * 10, repeat: Infinity, ease: 'linear' }}
                  />
                ))}

                {/* Central brain */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], boxShadow: ['0 0 30px rgba(249,115,22,0.3)', '0 0 60px rgba(249,115,22,0.6)', '0 0 30px rgba(249,115,22,0.3)'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-20 h-20 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center z-10 border border-orange-400/50"
                >
                  <Bot className="w-10 h-10 text-white" />
                </motion.div>

                {/* Orbiting nodes */}
                {[
                  { angle: 0, label: 'CRM', color: 'bg-violet-500', size: 140 },
                  { angle: 72, label: 'Email', color: 'bg-cyan-500', size: 140 },
                  { angle: 144, label: 'Data', color: 'bg-emerald-500', size: 140 },
                  { angle: 216, label: 'Voice', color: 'bg-fuchsia-500', size: 140 },
                  { angle: 288, label: 'Slack', color: 'bg-blue-500', size: 140 },
                ].map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * node.size;
                  const y = Math.sin(rad) * node.size;
                  return (
                    <motion.div
                      key={i}
                      className="absolute z-20"
                      style={{ translateX: x, translateY: y }}
                      animate={{ scale: [0.9, 1.05, 0.9] }}
                      transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    >
                      <div className={`w-10 h-10 rounded-xl ${node.color} flex items-center justify-center shadow-lg`}>
                        <span className="text-[9px] text-white font-bold">{node.label}</span>
                      </div>
                      {/* Connector line */}
                      <svg
                        className="absolute top-1/2 left-1/2 pointer-events-none"
                        style={{
                          width: Math.abs(x),
                          height: Math.abs(y),
                          transform: `translate(-${x > 0 ? 0 : Math.abs(x)}px, -${y > 0 ? 0 : Math.abs(y)}px)`,
                          overflow: 'visible',
                        }}
                      />
                    </motion.div>
                  );
                })}

                {/* Pulsing particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-orange-400"
                    animate={{
                      x: [0, (Math.random() - 0.5) * 300],
                      y: [0, (Math.random() - 0.5) * 300],
                      scale: [1, 0],
                      opacity: [0.8, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.35, ease: 'easeOut' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PROCESS STEPS
      ────────────────────────────────────────── */}
      <section className="relative py-28 px-6 z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/20 text-cyan-300 text-[10px] uppercase tracking-widest font-bold mb-8"
            >
              <Zap className="w-3 h-3" />
              How We Deliver
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
            >
              From Discovery to{' '}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Deployment.
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-[1px] bg-white/5 z-0">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-violet-500/0 via-fuchsia-400 to-cyan-500/0"
              />
            </div>

            {[
              { n: '01', label: 'Discovery & Scope', desc: 'Deep-dive into your goals, current stack, and ideal outcomes. We define scope and KPIs together.' },
              { n: '02', label: 'Architecture & Design', desc: 'We design system architecture, wireframes, and AI models before a single line of code is written.' },
              { n: '03', label: 'Build & Integrate', desc: 'Agile sprints. Weekly demos. Full integration with your existing tools, data, and workflows.' },
              { n: '04', label: 'Launch & Scale', desc: 'We deploy, monitor, and continuously optimize — with ongoing support and iterative growth cycles.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', bounce: 0.35 }}
                className="relative bg-space-900 border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center z-10 hover:border-violet-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.3)] transition-all duration-300 group"
              >
                <div className="text-[10px] font-mono font-bold text-violet-500/60 uppercase tracking-[0.2em] mb-4 bg-violet-900/20 px-3 py-1 rounded-full border border-violet-500/20">
                  Phase {step.n}
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{step.label}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          CTA
      ────────────────────────────────────────── */}
      <section className="relative py-28 px-6 z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glow behind CTA */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[300px] rounded-full bg-violet-600/10 blur-[100px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase tracking-widest font-bold mb-10"
          >
            <Star className="w-3 h-3 text-yellow-400" />
            Ready to Build?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
          >
            Let's Engineer Your{' '}
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
              Digital Advantage.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Whether you need a high-performing SaaS platform, autonomous AI agents, SEO dominance, or a
            world-class web presence — we build it fast and right.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 text-white font-black text-sm uppercase tracking-widest hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all hover:scale-105 active:scale-95"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-white/10 text-white/70 font-semibold text-sm uppercase tracking-widest hover:border-white/30 hover:text-white transition-all"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
