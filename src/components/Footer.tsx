import { Twitter, Linkedin, Instagram, Github, ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <a href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
                <div className="w-4 h-4 bg-brand-pink rounded-full" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-brand-dark">Outseta</span>
            </a>
            <p className="text-brand-dark/50 text-lg leading-relaxed mb-10 max-w-sm">
              A plataforma tudo-em-um projetada para a nova era de negócios de membros e comunidades.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Twitter size={18} />} />
              <SocialLink icon={<Linkedin size={18} />} />
              <SocialLink icon={<Instagram size={18} />} />
              <SocialLink icon={<Github size={18} />} />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-brand-dark/30 mb-8">Produto</h4>
            <FooterLinks links={['Pagamentos', 'Auth e CRM', 'Email Marketing', 'Help Desk', 'Preços']} />
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-brand-dark/30 mb-8">Empresa</h4>
            <FooterLinks links={['Sobre nós', 'Blog', 'Parceiros', 'Privacidade', 'Termos']} />
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-brand-dark/30 mb-8">Recursos</h4>
            <FooterLinks links={['Integrações', 'Base de Conhecimento', 'Agências', 'Docs API']} />
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-brand-dark/30 mb-8">Newsletter</h4>
            <p className="text-sm text-brand-dark/50 mb-6">Receba dicas semanais sobre como escalar sua comunidade.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="w-full bg-brand-bg border border-black/5 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-pink/20 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-dark text-white rounded-lg flex items-center justify-center hover:bg-brand-pink transition-colors">
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-8">
          <div className="flex items-center gap-8">
            <p className="text-xs font-bold text-brand-dark/30 uppercase tracking-widest">© 2026 Outseta</p>
            <div className="flex gap-6">
              <a href="#" className="text-xs font-bold text-brand-dark/30 hover:text-brand-dark transition-colors uppercase tracking-widest">Status</a>
              <a href="#" className="text-xs font-bold text-brand-dark/30 hover:text-brand-dark transition-colors uppercase tracking-widest">Segurança</a>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-bold tracking-widest text-brand-dark/40 uppercase">Stripe Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-[10px] font-bold tracking-widest text-brand-dark/40 uppercase">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ links }: { links: string[] }) {
  return (
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-sm font-semibold text-brand-dark/50 hover:text-brand-pink transition-colors">{link}</a>
        </li>
      ))}
    </ul>
  );
}

function SocialLink({ icon }: { icon: ReactNode }) {
  return (
    <a href="#" className="w-11 h-11 rounded-xl border border-black/5 flex items-center justify-center text-brand-dark/40 hover:text-brand-pink hover:border-brand-pink hover:bg-brand-pink/5 transition-all">
      {icon}
    </a>
  );
}
