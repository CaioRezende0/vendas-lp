import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-48 pb-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-yellow-200/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-premium border border-black/5 text-brand-dark/60 text-[10px] font-bold tracking-widest uppercase mb-10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Stripe Verified Partner
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight text-brand-dark mb-8 leading-[0.95] text-gradient">
            Lance e Escale sua <br />
            <span className="relative">
              Comunidade
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11C50 3 150 3 299 11" stroke="#ff4eb1" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-dark/50 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            A plataforma definitiva para criadores. Integre <span className="text-brand-dark">pagamentos</span>, <span className="text-brand-dark">conteúdo</span>, <span className="text-brand-dark">CRM</span> e <span className="text-brand-dark">automação</span> em um único fluxo de trabalho elegante.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative w-full sm:w-auto bg-brand-dark text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-[1.02] transition-all shadow-2xl shadow-brand-dark/20 active:scale-95">
              Começar agora
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="w-full sm:w-auto glass text-brand-dark px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white transition-all flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink">
                <Play size={14} fill="currentColor" />
              </div>
              Ver Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HeroCard 
              image="https://picsum.photos/seed/course1/800/600"
              title="Mastering Webflow"
              subtitle="Curso • Design"
              author="Show Them"
              delay={0.5}
            />
            <HeroCard 
              image="https://picsum.photos/seed/design2/800/600"
              title="UX Strategy 2026"
              subtitle="Workshop • Estratégia"
              author="Making UX Decisions"
              highlight
              delay={0.6}
            />
            <HeroCard 
              image="https://picsum.photos/seed/dev3/800/600"
              title="The SaaS Blueprint"
              subtitle="Ebook • Business"
              author="OSMO"
              delay={0.7}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroCard({ image, title, subtitle, author, highlight, delay }: { image: string; title: string; subtitle: string; author: string; highlight?: boolean; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`group relative bg-white rounded-[2.5rem] p-3 shadow-premium transition-all hover:shadow-premium-hover ${highlight ? 'md:-translate-y-8' : ''}`}
    >
      <div className="aspect-[4/3] relative overflow-hidden rounded-[2rem]">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6 text-left">
        <span className="text-[10px] font-bold tracking-[0.2em] text-brand-pink uppercase mb-2 block">{subtitle}</span>
        <h3 className="font-display font-bold text-xl mb-3 text-brand-dark">{title}</h3>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-brand-bg border border-black/5" />
          <span className="text-xs font-semibold text-brand-dark/40">{author}</span>
        </div>
      </div>
      {highlight && (
        <div className="absolute -top-4 -right-4 bg-brand-pink text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
          POPULAR
        </div>
      )}
    </motion.div>
  );
}
