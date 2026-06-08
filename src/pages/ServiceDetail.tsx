import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { Target, Megaphone, Users, Zap, ArrowLeft, CheckCircle2, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const icons = {
  Target: <Target className="w-6 h-6 text-primary-400" />,
  Megaphone: <Megaphone className="w-6 h-6 text-fuchsia-400" />,
  Users: <Users className="w-6 h-6 text-indigo-400" />,
  Zap: <Zap className="w-6 h-6 text-blue-400" />,
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="pt-32 pb-24 px-6 relative z-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-300 mb-6 border border-white/5">
            {service.subtitle}
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            <span className="font-serif italic font-bold text-primary-400 mr-4">{service.title}</span>
            <br className="md:hidden" />
            Capabilities.
          </h1>
          <p className="text-white/50 text-xl leading-relaxed max-w-3xl">
            {service.detailedContent.overview}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
          
          {/* SA Stats Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-primary-900/20 border border-primary-500/20 rounded-[32px] p-8 backdrop-blur-md relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-[40px] pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-5 h-5 text-primary-400" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">SA Market Intelligence</h3>
              </div>

              <div className="space-y-8 flex flex-col h-full">
                {service.detailedContent.saStats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-mono font-bold text-primary-400 tracking-tighter">{stat.stat}</span>
                    </div>
                    <span className="text-sm font-bold text-white uppercase tracking-wide">{stat.label}</span>
                    <p className="text-white/40 text-xs leading-relaxed">{stat.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What's Included Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-8 flex flex-col gap-6"
          >
            <div className="bg-space-900 border border-white/5 rounded-[32px] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Core Service Modules</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {service.detailedContent.whatIsIncluded.map((module, idx) => (
                  <div key={idx}>
                    <h4 className="text-primary-300 font-bold uppercase tracking-wide text-sm mb-4">{module.title}</h4>
                    <ul className="space-y-3">
                      {module.items.map((item, iDx) => (
                        <li key={iDx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary-500/70 shrink-0 mt-0.5" />
                          <span className="text-white/70 text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Block */}
            {service.detailedContent.chartData && service.detailedContent.chartConfig && (
              <div className="bg-space-900 border border-white/5 rounded-[32px] p-8 md:p-10 flex flex-col items-start gap-6 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">
                    {service.detailedContent.chartConfig.title}
                  </h3>
                </div>
                <div className="w-full h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={service.detailedContent.chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        stroke="#ffffff50" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                        dy={10}
                      />
                      <YAxis 
                        stroke="#ffffff50" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                        dx={-10}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0A0A10', 
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px'
                        }}
                        itemStyle={{ color: service.detailedContent.chartConfig.stroke }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey={service.detailedContent.chartConfig.dataKey} 
                        stroke={service.detailedContent.chartConfig.stroke} 
                        strokeWidth={3}
                        dot={{ fill: '#0A0A10', stroke: service.detailedContent.chartConfig.stroke, strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, fill: service.detailedContent.chartConfig.stroke }}
                        animationDuration={1500}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Outcome Block */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 group backdrop-blur-md">
              <div className="w-16 h-16 rounded-full bg-primary-500/20 border-2 border-primary-500/50 flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-primary-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary-400 mb-2">Projected Outcome</h3>
                <p className="text-white text-lg font-medium leading-relaxed">
                  {service.detailedContent.outcome}
                </p>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="bg-primary-600 hover:bg-primary-500 text-white rounded-[24px] p-8 flex items-center justify-between transition-colors group shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]"
            >
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wide">Initiate Diagnostics</h3>
                <span className="text-sm font-medium text-white/70 mt-1 block">Deploy {service.title} for your agency.</span>
              </div>
              <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>

          </motion.div>

        </div>
      </div>
    </main>
  );
}
