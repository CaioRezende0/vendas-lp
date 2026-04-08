import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import BrandCustomizer from './components/BrandCustomizer';
import Comparison from './components/Comparison';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof / Logos Section */}
        <section className="py-20 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-[10px] font-bold tracking-[0.4em] text-brand-dark/20 uppercase mb-12">
              CONFIADO POR LÍDERES EM COMUNIDADES E SAAS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              <LogoPlaceholder name="Webflow" />
              <LogoPlaceholder name="Framer" />
              <LogoPlaceholder name="WordPress" />
              <LogoPlaceholder name="Ghost" />
              <LogoPlaceholder name="Zapier" />
              <LogoPlaceholder name="Slack" />
            </div>
          </div>
        </section>

        <Features />
        
        <BrandCustomizer />
        
        <Comparison />

        {/* Final CTA Section */}
        <section className="py-40 px-4 bg-brand-dark text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-bold tracking-[0.4em] text-brand-pink uppercase mb-8 block">Comece sua jornada</span>
              <h2 className="text-5xl md:text-8xl font-display font-extrabold mb-10 leading-[0.9]">
                Pronto para <br />
                <span className="text-brand-pink">escalar?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                Junte-se a milhares de criadores que construíram negócios de sucesso com a Outseta. Teste grátis por 7 dias.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto bg-brand-pink text-white px-12 py-6 rounded-2xl text-xl font-bold hover:scale-105 transition-all shadow-2xl shadow-brand-pink/20 active:scale-95">
                  Começar Teste Gratuito
                </button>
                <button className="w-full sm:w-auto border border-white/10 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white/5 transition-all">
                  Falar com Vendas
                </button>
              </div>
              <p className="mt-8 text-sm text-white/20 font-medium">Cartão de crédito não é obrigatório para o teste.</p>
            </motion.div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-pink/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[150px]" />
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Help Button */}
      <button className="fixed bottom-8 right-8 glass text-brand-dark px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm z-50 hover:scale-105 transition-all active:scale-95 group">
        <div className="relative">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
        </div>
        Suporte Online
        <div className="w-8 h-8 rounded-lg bg-brand-dark text-white flex items-center justify-center ml-2 group-hover:bg-brand-pink transition-colors">
          <ArrowUpRight size={14} />
        </div>
      </button>
    </div>
  );
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 font-bold text-xl">
      <div className="w-6 h-6 bg-current rounded-sm" />
      {name}
    </div>
  );
}

