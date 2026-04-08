import { motion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className="bg-yellow-400/90 backdrop-blur-sm py-1 px-4 text-center rounded-t-2xl border-x border-t border-yellow-500/20">
          <p className="text-[10px] font-bold tracking-widest text-yellow-900 uppercase">
            Migrando do <span className="underline decoration-2 underline-offset-2">HubSpot?</span> →
          </p>
        </div>
        <div className="glass rounded-b-2xl shadow-premium px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-brand-dark rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
                <div className="w-4 h-4 bg-brand-pink rounded-full" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-brand-dark">Outseta</span>
            </a>
            
            <div className="hidden lg:flex items-center gap-8">
              <NavItem label="Aprender" hasDropdown />
              <NavItem label="Produto" hasDropdown />
              <NavItem label="Preços" />
              <NavItem label="Suporte" hasDropdown />
              <NavItem label="Empresa" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm font-semibold text-brand-dark/60 hover:text-brand-dark transition-colors">Entrar</button>
            <button className="bg-brand-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-dark/90 transition-all shadow-lg shadow-brand-dark/10 active:scale-95">
              Cadastrar
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-dark">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="lg:hidden mt-2 max-w-7xl mx-auto glass rounded-2xl shadow-2xl p-6 flex flex-col gap-4 pointer-events-auto"
        >
          <a href="#" className="text-xl font-bold text-brand-dark">Aprender</a>
          <a href="#" className="text-xl font-bold text-brand-dark">Produto</a>
          <a href="#" className="text-xl font-bold text-brand-dark">Preços</a>
          <a href="#" className="text-xl font-bold text-brand-dark">Suporte</a>
          <a href="#" className="text-xl font-bold text-brand-dark">Empresa</a>
          <hr className="border-brand-dark/5" />
          <div className="grid grid-cols-2 gap-4">
            <button className="py-4 font-bold text-brand-dark/60">Entrar</button>
            <button className="bg-brand-pink text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-pink/20">
              Cadastrar
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function NavItem({ label, hasDropdown }: { label: string; hasDropdown?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-1 text-sm font-semibold text-brand-dark/60 hover:text-brand-dark transition-colors">
      {label}
      {hasDropdown && <ChevronDown size={14} className="opacity-40" />}
    </a>
  );
}
