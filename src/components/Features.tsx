import { motion } from 'motion/react';
import { CreditCard, Users, Mail, HelpCircle, ShieldCheck, BarChart3, ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

export default function Features() {
  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.3em] text-brand-pink uppercase mb-4 block">A Solução Completa</span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark leading-tight">
              Tudo o que você precisa <br />
              <span className="text-brand-dark/40">em um só lugar.</span>
            </h2>
          </div>
          <p className="text-lg text-brand-dark/50 max-w-sm leading-relaxed">
            Elimine a complexidade de gerenciar múltiplas ferramentas. A Outseta unifica seu fluxo de trabalho para que você foque no que importa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <FeatureCard 
            className="md:col-span-3 lg:col-span-4"
            icon={<CreditCard className="text-blue-500" />}
            title="Pagamentos & Checkout"
            description="Conecte ao Stripe e comece a aceitar pagamentos em minutos com uma experiência de checkout otimizada para conversão."
            features={["Assinaturas Recorrentes", "Produtos Únicos", "Testes Gratuitos", "Faturamento Global"]}
            image="https://picsum.photos/seed/pay/800/400"
          />
          <FeatureCard 
            className="md:col-span-3 lg:col-span-2"
            icon={<Users className="text-orange-500" />}
            title="CRM de Membros"
            description="Dados centralizados para uma visão 360º dos seus membros."
            image="https://picsum.photos/seed/crm2/400/500"
          />
          <FeatureCard 
            className="md:col-span-2"
            icon={<Mail className="text-yellow-500" />}
            title="Email Marketing"
            description="Campanhas e automações com alta entregabilidade."
          />
          <FeatureCard 
            className="md:col-span-2"
            icon={<ShieldCheck className="text-green-500" />}
            title="Acesso Protegido"
            description="Login seguro e controle de conteúdo granular."
          />
          <FeatureCard 
            className="md:col-span-2"
            icon={<BarChart3 className="text-pink-500" />}
            title="Analytics Pro"
            description="Métricas de MRR e churn em tempo real."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, features, image, className }: { icon: ReactNode; title: string; description: string; features?: string[]; image?: string; className?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group p-8 rounded-[2.5rem] bg-brand-bg border border-black/5 flex flex-col h-full shadow-sm hover:shadow-premium transition-all ${className}`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-14 h-14 rounded-2xl bg-white shadow-premium flex items-center justify-center">
          {icon}
        </div>
        <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={18} className="text-brand-dark/40" />
        </div>
      </div>
      
      <h3 className="text-2xl font-display font-bold mb-4 text-brand-dark">{title}</h3>
      <p className="text-brand-dark/50 mb-8 leading-relaxed font-medium">{description}</p>
      
      {features && (
        <div className="flex flex-wrap gap-2 mb-8">
          {features.map((f, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white border border-black/5 text-[10px] font-bold text-brand-dark/60 uppercase tracking-wider">
              {f}
            </span>
          ))}
        </div>
      )}

      {image && (
        <div className="mt-auto overflow-hidden rounded-2xl border border-black/5">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
        </div>
      )}
    </motion.div>
  );
}
