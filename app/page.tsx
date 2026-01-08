"use client";

import React, { useState, useEffect, useMemo } from "react";

/* =====================================================================================
   1. UTILIDADES Y COMPONENTES (DECLARADOS ANTES PARA EVITAR REFERENCE ERROR)
   ===================================================================================== */

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const KNOWLEDGE_MATRIX = {
  transferencia: {
    label: "Transferencia Tech",
    img: "/1.png",
    header: "Science-to-Market: TRL 1-9",
    novice: "Llevamos sus invenciones del laboratorio al mercado, creando empresas y protegiendo sus ideas.",
    expert: "Protocolos de 'Disclosure' y análisis de FTO. De-risking financiero mediante maduración tecnológica.",
    pillars: [
      { name: "OTT / OTRI", items: ["Gobernanza Institucional", "Mapeo de Literatura Gris"] },
      { name: "Spin-offs", items: ["Equity dinámico", "Venture Building"] }
    ]
  },
  valoracion: {
    label: "Valoración & Capital",
    img: "/4.png",
    header: "Ingeniería Financiera & NIC 38",
    novice: "Damos valor económico real a sus intangibles para capitalizar sus balances financieros.",
    expert: "Determinación de CIV (Luthy) y KVA. Métodos Relief from Royalty y simulaciones Monte Carlo.",
    pillars: [
      { name: "Metodologías", items: ["Modelos de Monte Carlo", "KVA ROI de Procesos"] },
      { name: "Capitalización", items: ["Cumplimiento NIC 38", "EBITDA Optimization"] }
    ]
  },
  inteligencia: {
    label: "Inteligencia & IA",
    img: "/2.png",
    header: "Soberanía & Gobernanza IA",
    novice: "IA para vigilancia competitiva y automatización legal con seguridad jurídica total.",
    expert: "Vigilancia estratégica UNE 166006 y auditoría forense de algoritmos. Compliance AI Act.",
    pillars: [
      { name: "Inteligencia", items: ["Benchmarking Tecnológico", "UNE 166006"] },
      { name: "Gobernanza", items: ["Explainable IA (XAI)", "Bias Audit"] }
    ]
  }
};

const ImpactCard = ({ icon, title, description, metrics, color }: any) => (
  <div className={cn(
    "p-8 rounded-[3rem] border transition-all duration-700 shadow-sm",
    color === "emerald" ? "bg-emerald-50 border-emerald-100" :
    color === "blue" ? "bg-blue-50 border-blue-100" : "bg-slate-900 border-slate-800 text-white"
  )}>
     <div className="text-5xl mb-6 leading-none">{icon}</div>
     <h3 className="text-xl font-black mb-3 uppercase tracking-tight">{title}</h3>
     <p className="text-sm leading-relaxed mb-8 italic border-l-4 border-emerald-500 pl-4 opacity-80 text-left">{description}</p>
     <ul className="space-y-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-40 text-left text-inherit">
        {metrics.map((m: string, i: number) => <li key={i}>• {m}</li>)}
     </ul>
  </div>
);

const FinalSection = () => (
  <footer className="bg-[#020617] text-white pt-20 pb-10 px-8 border-t border-slate-900">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center font-black text-slate-950 text-3xl">T</div>
            <div className="flex flex-col">
              <span className="font-black text-2xl uppercase leading-none">TransferTech</span>
              <span className="text-sm text-emerald-600 font-light uppercase tracking-[0.3em] mt-1">IPValue Hub</span>
            </div>
          </div>
          <p className="text-slate-400 text-base max-w-md border-l-4 border-emerald-500 pl-8 font-medium italic opacity-90">
            "Primera empresa ecuatoriana con 100% de capital intelectual. Liderando la soberanía tecnológica regional."
          </p>
        </div>
        <div className="text-left">
          <h5 className="font-black text-[10px] uppercase tracking-[0.5em] text-emerald-500 mb-8 border-b border-slate-800 pb-2">Matchmaking</h5>
          <ul className="space-y-6 text-sm font-bold text-slate-300">
            <li className="flex items-center gap-4"><span>📍</span> Quito - Ecuador</li>
            <li className="flex items-center gap-4 text-emerald-400 font-black"><span>📱</span> +593 996 253 317</li>
            <li className="flex items-center gap-4 text-slate-500 italic"><span>✉️</span> teranlenin@hotmail.com</li>
          </ul>
        </div>
        <div className="text-left">
          <h5 className="font-black text-[10px] uppercase tracking-[0.5em] text-emerald-500 mb-8 border-b border-slate-800 pb-2">Marco Técnico</h5>
          <ul className="space-y-4 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
            <li className="hover:text-white transition-colors">▪ Framework KVA</li>
            <li className="hover:text-white transition-colors">▪ Capitalización NIIF</li>
            <li className="hover:text-white transition-colors">▪ Gobernanza IA</li>
            <li className="hover:text-white transition-colors">▪ Auditoría Forense</li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-900 flex justify-between text-[8px] font-black uppercase text-slate-800 italic">
        <p>© 2026 TransferTech IPValue S.A.S. B.I.C. Todos los derechos reservados.</p>
        <p className="text-emerald-900">v9.5.0-Master Elite</p>
      </div>
    </div>
  </footer>
);

/* =====================================================================================
   2. RENDERIZADO PRINCIPAL
   ===================================================================================== */

export default function Home() {
  const [expertMode, setExpertMode] = useState(false);
  const [activeHub, setActiveHub] = useState("valoracion");
  
  const currentHub = useMemo(() => KNOWLEDGE_MATRIX[activeHub as keyof typeof KNOWLEDGE_MATRIX], [activeHub]);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
      
      <nav className="sticky top-0 z-[150] bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 h-16 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-left">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('inicio')}>
             <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center font-black text-emerald-400">T</div>
             <span className="font-black text-base md:text-lg tracking-tighter uppercase group-hover:text-emerald-600 transition-colors">TransferTech</span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
               <button onClick={() => scrollTo('catalogo')} className="hover:text-emerald-600 transition-all">Portafolio</button>
               <button onClick={() => scrollTo('sectores')} className="hover:text-emerald-600 transition-all font-bold underline decoration-emerald-500 underline-offset-4">Impacto</button>
            </div>
            <button onClick={() => setExpertMode(!expertMode)} className="flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full text-[9px] font-black border border-slate-200 uppercase transition-all">
               <span className={cn("w-1.5 h-1.5 rounded-full", expertMode ? "bg-emerald-500 animate-pulse" : "bg-slate-300")}></span>
               {expertMode ? "Modo Experto" : "Modo Básico"}
            </button>
            <a href="https://wa.me/593996253317" className="bg-[#0F172A] text-white px-6 py-2 rounded-xl text-[9px] font-black uppercase shadow-lg hover:bg-emerald-600 transition-all">Matchmaking</a>
          </div>
        </div>
      </nav>

      <section id="inicio" className="pt-24 pb-40 md:pt-32 md:pb-48 px-6 text-left max-w-7xl mx-auto">
        <div className="inline-block bg-slate-100 text-slate-500 text-[9px] font-black px-4 py-1.5 rounded-lg mb-8 uppercase tracking-[0.3em]">Capitalización de Intangibles</div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1] tracking-tighter">Conocimiento <br/><span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-500 italic underline decoration-emerald-500 underline-offset-[14px] decoration-4 md:decoration-8">Auditado.</span></h1>
        <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl border-l-[8px] border-emerald-500 pl-8 font-medium italic">
          {expertMode ? "Modelos de valoración prospectiva bajo NIC 38 y metodología KVA para el reconocimiento financiero de activos." : "Transformamos su marca, software y conocimiento en capital real para su balance. Proteja sus ideas legalmente."}
        </p>
        <div id="sectores" className="grid lg:grid-cols-3 gap-8 text-left">
           <ImpactCard icon="🏢" title="Empresa" description="Maximización de EBITDA mediante activación de intangibles." metrics={["NIC 38 Audit", "M&A Ready"]} color="emerald" />
           <ImpactCard icon="🎓" title="Academia" description="Institucionalización de la transferencia TRL 1-9." metrics={["OTT Hubs", "Spin-offs"]} color="blue" />
           <ImpactCard icon="🏛️" title="Estado" description="Políticas CTI para soberanía tecnológica nacional." metrics={["GovTech", "Smart Cities"]} color="slate" />
        </div>
      </section>

      <section id="catalogo" className="py-32 md:py-44 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row min-h-[750px]">
            <div className="w-full lg:w-[400px] bg-[#0F172A] p-10 space-y-4 flex flex-col text-left">
               {Object.keys(KNOWLEDGE_MATRIX).map(key => (
                 <button key={key} onClick={() => setActiveHub(key)} className={cn("w-full text-left p-8 rounded-[2rem] transition-all flex items-center justify-between group", activeHub === key ? "bg-emerald-600 text-white shadow-xl scale-105" : "text-slate-500 hover:bg-slate-800")}>
                    <span className="font-black uppercase text-[12px] tracking-[0.2em]">{KNOWLEDGE_MATRIX[key as keyof typeof KNOWLEDGE_MATRIX].label}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-xl transition-all">→</span>
                 </button>
               ))}
            </div>
            <div className="flex-1 p-10 lg:p-24 text-left relative overflow-hidden bg-white">
               <div className="absolute top-0 right-0 p-32 opacity-[0.03] text-[250px] font-black text-slate-900 leading-none pointer-events-none uppercase">{currentHub.label[0]}</div>
               <div className="relative z-10 space-y-12">
                  <div className="pb-10 border-b-2 border-slate-50 text-left"><h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-[0.95]">{currentHub.header}</h3><p className="text-lg md:text-2xl leading-relaxed italic border-l-8 border-emerald-500 pl-8 transition-all">{expertMode ? currentHub.expert : currentHub.novice}</p></div>
                  <div className="grid md:grid-cols-2 gap-12 text-left">
                    {currentHub.pillars.map((p, i) => (
                      <div key={i} className="space-y-6 text-left"><h4 className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.4em] border-l-4 border-emerald-500 pl-4">{p.name}</h4><ul className="space-y-4">{p.items.map((d, j) => (<li key={j} className="flex gap-4 items-start text-slate-700 text-base font-bold leading-tight"><span>▶</span>{d}</li>))}</ul></div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <FinalSection />
      
    </main>
  );
}