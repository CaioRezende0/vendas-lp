import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Comparison() {
  return (
    <section className="py-32 px-4 bg-brand-bg relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/50 -skew-x-12 translate-x-1/4 -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-pink uppercase mb-4 block">Eficiência Operacional</span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 text-brand-dark">Chega de pular de contexto</h2>
          <p className="text-xl text-brand-dark/50 max-w-2xl mx-auto leading-relaxed">
            Gerenciar um negócio de membros não deveria ser um quebra-cabeça de ferramentas desconectadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-10 shadow-premium border border-black/5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold tracking-widest uppercase mb-10">
              O Caos Atual
            </div>
            <ul className="space-y-6">
              <ComparisonItem 
                icon={<XCircle className="text-red-400" size={24} />} 
                title="Fragmentação"
                text="Troca constante entre 5+ abas para gerenciar um único membro." 
              />
              <ComparisonItem 
                icon={<XCircle className="text-red-400" size={24} />} 
                title="Fragilidade"
                text="Automações complexas que quebram sem aviso prévio." 
              />
              <ComparisonItem 
                icon={<XCircle className="text-red-400" size={24} />} 
                title="Custo Oculto"
                text="Múltiplas assinaturas que somam centenas de dólares por mês." 
              />
              <ComparisonItem 
                icon={<XCircle className="text-red-400" size={24} />} 
                title="Dados Sujos"
                text="Informações de membros duplicadas ou desatualizadas em diferentes CRMs." 
              />
            </ul>
          </motion.div>

          <div className="flex justify-center md:rotate-90">
            <div className="w-16 h-16 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink animate-bounce">
              <ArrowRight size={32} />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark rounded-[3rem] p-10 shadow-2xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/20 blur-[60px] rounded-full" />
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink/20 text-brand-pink text-[10px] font-bold tracking-widest uppercase mb-10 relative z-10">
              A Experiência Outseta
            </div>
            <ul className="space-y-6 relative z-10">
              <ComparisonItem 
                icon={<CheckCircle2 className="text-brand-pink" size={24} />} 
                title="Unificação"
                text="Um único dashboard para pagamentos, CRM, email e suporte." 
                isDark
              />
              <ComparisonItem 
                icon={<CheckCircle2 className="text-brand-pink" size={24} />} 
                title="Estabilidade"
                text="Funcionalidades nativas que trabalham juntas sem necessidade de colas." 
                isDark
              />
              <ComparisonItem 
                icon={<CheckCircle2 className="text-brand-pink" size={24} />} 
                title="Economia"
                text="Uma única assinatura previsível que substitui todo o seu stack." 
                isDark
              />
              <ComparisonItem 
                icon={<CheckCircle2 className="text-brand-pink" size={24} />} 
                title="Dados em Tempo Real"
                text="Uma única fonte da verdade para todos os dados dos seus membros." 
                isDark
              />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComparisonItem({ icon, title, text, isDark }: { icon: ReactNode; title: string; text: string; isDark?: boolean }) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0 mt-1">{icon}</div>
      <div>
        <h4 className={cn("font-bold text-lg mb-1", isDark ? "text-white" : "text-brand-dark")}>{title}</h4>
        <p className={cn("text-sm leading-relaxed", isDark ? "text-white/50" : "text-brand-dark/50")}>{text}</p>
      </div>
    </li>
  );
}
