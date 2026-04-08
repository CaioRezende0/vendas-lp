import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Palette, MousePointer2, SunMoon, Check } from 'lucide-react';
import { ReactNode } from 'react';

export default function BrandCustomizer() {
  const [activeColor, setActiveColor] = useState('#ff4eb1');
  const [radius, setRadius] = useState('rounded-2xl');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const colors = [
    { name: 'Pink', value: '#ff4eb1' },
    { name: 'Purple', value: '#3a0066' },
    { name: 'Blue', value: '#00c2ff' },
    { name: 'Green', value: '#00d1a0' },
    { name: 'Slate', value: '#0f172a' },
  ];

  const radii = [
    { name: 'Sharp', value: 'rounded-none' },
    { name: 'Soft', value: 'rounded-xl' },
    { name: 'Curvy', value: 'rounded-[2rem]' },
    { name: 'Pill', value: 'rounded-full' },
  ];

  return (
    <section className="py-32 px-4 bg-brand-dark text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.3em] text-brand-pink uppercase mb-6 block">Personalização Total</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-[0.9]">
              Sua marca, <br />
              <span className="text-white/30 italic">suas regras.</span>
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-md leading-relaxed">
              Não somos apenas uma ferramenta, somos uma extensão do seu design. Ajuste cada detalhe para que a Outseta pareça ter sido construída por você.
            </p>

            <div className="space-y-10">
              <ControlGroup label="Cor da Identidade" icon={<Palette size={14} />}>
                <div className="flex gap-4">
                  {colors.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setActiveColor(c.value)}
                      className={cn(
                        "w-12 h-12 rounded-2xl border-2 transition-all relative flex items-center justify-center",
                        activeColor === c.value ? "border-white scale-110 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                      )}
                      style={{ backgroundColor: c.value }}
                    >
                      {activeColor === c.value && <Check size={16} className="text-white" />}
                    </button>
                  ))}
                </div>
              </ControlGroup>

              <ControlGroup label="Estilo de Bordas" icon={<MousePointer2 size={14} />}>
                <div className="flex flex-wrap gap-3">
                  {radii.map((r) => (
                    <button
                      key={r.value}
                      onClick={() => setRadius(r.value)}
                      className={cn(
                        "px-6 py-2.5 border text-xs font-bold uppercase tracking-widest transition-all",
                        radius === r.value ? "bg-white text-brand-dark border-white" : "border-white/10 hover:bg-white/5",
                        r.value
                      )}
                    >
                      {r.name}
                    </button>
                  ))}
                </div>
              </ControlGroup>

              <ControlGroup label="Modo de Visualização" icon={<SunMoon size={14} />}>
                <div className="flex p-1 bg-white/5 rounded-xl w-fit">
                  <button
                    onClick={() => setTheme('light')}
                    className={cn(
                      "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                      theme === 'light' ? "bg-white text-brand-dark shadow-lg" : "text-white/40 hover:text-white"
                    )}
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={cn(
                      "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                      theme === 'dark' ? "bg-white text-brand-dark shadow-lg" : "text-white/40 hover:text-white"
                    )}
                  >
                    Dark
                  </button>
                </div>
              </ControlGroup>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="absolute inset-0 bg-brand-pink/20 blur-[120px] rounded-full -z-10" />
          
          <motion.div 
            layout
            className={cn(
              "p-12 w-full max-w-xl mx-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-[0.16,1,0.3,1]",
              theme === 'light' ? "bg-white text-brand-dark" : "bg-[#1e293b] text-white",
              radius
            )}
          >
            <div className="text-center mb-12">
              <motion.div 
                layout
                className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl" 
                style={{ backgroundColor: activeColor }}
              >
                <div className="w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm" />
              </motion.div>
              <h3 className="text-3xl font-display font-bold">Crie sua conta</h3>
              <p className="text-sm opacity-50 mt-2">Comece sua jornada em segundos.</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Input label="Nome" theme={theme} radius={radius} />
                <Input label="Sobrenome" theme={theme} radius={radius} />
              </div>
              <Input label="Email Profissional" theme={theme} radius={radius} />
              
              <motion.button 
                layout
                className={cn("w-full py-4 font-bold text-white transition-all mt-6 shadow-xl active:scale-95", radius)}
                style={{ backgroundColor: activeColor }}
              >
                Cadastrar Agora
              </motion.button>

              <div className="relative py-6">
                <div className="absolute inset-0 flex items-center"><div className={cn("w-full border-t", theme === 'light' ? "border-black/5" : "border-white/5")}></div></div>
                <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest"><span className={cn("px-4", theme === 'light' ? "bg-white text-black/30" : "bg-[#1e293b] text-white/30")}>Ou continue com</span></div>
              </div>

              <button className={cn("w-full py-4 border font-bold flex items-center justify-center gap-3 transition-all hover:bg-black/5", theme === 'light' ? "border-black/5" : "border-white/5 hover:bg-white/5", radius)}>
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                Google Workspace
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ControlGroup({ label, icon, children }: { label: string; icon: ReactNode; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
        {icon}
        {label}
      </div>
      {children}
    </div>
  );
}

function Input({ label, theme, radius }: { label: string; theme: 'light' | 'dark'; radius: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">{label}</label>
      <input 
        type="text" 
        placeholder={`Seu ${label.toLowerCase()}`}
        className={cn(
          "w-full px-5 py-3 text-sm border transition-all outline-none focus:ring-4 focus:ring-brand-pink/10",
          theme === 'light' ? "bg-gray-50 border-black/5 focus:border-brand-pink/30" : "bg-white/5 border-white/10 focus:border-brand-pink/30",
          radius
        )}
      />
    </div>
  );
}
