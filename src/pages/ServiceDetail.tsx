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
    <main className="pt-32 pb-24 relative z-10 min-h-screen overflow-hidden">
      {/* Dynamic Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white mb-10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-primary-900/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-300 mb-6 border border-primary-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            {service.subtitle}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light leading-tight mb-6"
          >
            <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400 mr-4">{service.title}</span>
            <br className="md:hidden" />
            Capabilities.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/60 text-xl leading-relaxed max-w-3xl backdrop-blur-sm"
          >
            {service.detailedContent.overview}
          </motion.p>
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
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                    className="flex flex-col gap-2 group hover:translate-x-2 transition-transform cursor-default"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-mono font-bold text-primary-400 tracking-tighter group-hover:text-primary-300 transition-colors">{stat.stat}</span>
                    </div>
                    <span className="text-sm font-bold text-white uppercase tracking-wide">{stat.label}</span>
                    <p className="text-white/40 text-xs leading-relaxed">{stat.context}</p>
                  </motion.div>
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
            <div className="bg-space-900 border border-white/5 rounded-[32px] p-8 md:p-10 relative overflow-hidden group hover:border-primary-500/20 transition-colors">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-primary-500/10 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center border border-primary-500/20">
                    <Zap className="w-4 h-4 text-primary-400" />
                  </span>
                Core Service Modules
              </h3>
              <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                {service.detailedContent.whatIsIncluded.map((module, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                  >
                    <h4 className="text-primary-300 font-bold uppercase tracking-wide text-sm mb-4 flex items-center gap-2">
                       <span className="w-1 h-3 bg-primary-500 rounded-full" />
                      {module.title}
                    </h4>
                    <ul className="space-y-3">
                      {module.items.map((item, iDx) => (
                        <motion.li 
                          key={iDx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (idx * 0.1) + (iDx * 0.1) }}
                          className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary-500/70 shrink-0 mt-0.5 group-hover/item:text-primary-400 transition-colors" />
                          <span className="text-white/70 text-sm leading-snug group-hover/item:text-white/90 transition-colors">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
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
                        activeDot={{ r: 8, fill: service.detailedContent.chartConfig.stroke }}
                        animationDuration={2000}
                        animationEasing="ease-in-out"
                        isAnimationActive={true}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Outcome Block */}
            <div className="relative border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 group backdrop-blur-md overflow-hidden bg-space-900/50 hover:bg-space-900 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative w-16 h-16 rounded-full bg-primary-500/20 border-2 border-primary-500/50 flex items-center justify-center shrink-0">
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-primary-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <Target className="w-8 h-8 text-primary-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1 relative z-10">
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
