"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";

/* =====================================================================================
   1. SISTEMA DE UTILIDADES & SEO TÉCNICO
   ===================================================================================== */

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

/* =====================================================================================
   2. MATRIZ DE CONOCIMIENTO (EL CEREBRO DEL MATCHMAKING)
   Sustento: KVA, NIC 38, VAIC, TRL 1-9.
   ===================================================================================== */

const KNOWLEDGE_MATRIX = {
  transferencia: {
    label: "Transferencia Tecnológica",
    img: "/1.png",
    header: "Science-to-Market: Ciclo TRL 1-9",
    novice_desc: "Llevamos sus invenciones del laboratorio al mercado, creando empresas (Spin-offs) y protegiendo legalmente sus ideas para generar rentabilidad.",
    expert_desc: "Gestión de activos basada en trayectorias tecnológicas. De-risking financiero mediante protocolos de Disclosure y análisis de Libertad de Operación (FTO).",
    pillars: [
      { name: "Oficinas de Transferencia (OTT)", details: ["Gobernanza Institucional I+D", "Mapeo de Literatura Gris", "Inventario de Capital Tácito"] },
      { name: "Venture Building", details: ["Estructuración de Equity", "Cap Table Dinámico", "Spin-offs Universitarias"] }
    ],
    technical_stats: ["TRL Validation", "FTO Analysis"]
  },
  valoracion: {
    label: "Valoración Financiera",
    img: "/4.png",
    header: "Ingeniería Financiera & NIC 38",
    novice_desc: "Damos valor monetario real a su marca, software y patentes para que aparezcan como activos en sus estados financieros.",
    expert_desc: "Determinación de CIV (Luthy) y KVA (Knowledge Value Added). Métodos de ingresos (Income Approach) y simulaciones estocásticas de Razgaitis.",
    pillars: [
      { name: "Metodologías de Valoración", details: ["Simulación Monte Carlo", "Relief from Royalty", "KVA ROI de Procesos"] },
      { name: "Capitalización en Balance", details: ["Cumplimiento NIIF / NIC 38", "Activación de Software Propio", "Optimización de EBITDA"] }
    ],
    technical_stats: ["KVA ROI", "NIC 38 Compliance"]
  },
  inteligencia: {
    label: "Inteligencia & LegalTech",
    img: "/2.png",
    header: "Soberanía & Gobernanza IA",
    novice_desc: "Utilizamos Inteligencia Artificial para vigilar a su competencia y automatizar sus procesos legales con seguridad jurídica.",
    expert_desc: "Vigilancia estratégica UNE 166006 y auditoría forense de algoritmos. Compliance con AI Act y soberanía de datos corporativos.",
    pillars: [
      { name: "Inteligencia Competitiva", details: ["Detección de Señales Débiles", "Benchmarking Tecnológico", "Norma UNE 166006"] },
      { name: "Gobernanza Algorítmica", details: ["Explainable IA (XAI)", "Auditoría de Sesgos", "Smart Contracts"] }
    ],
    technical_stats: ["AI Bias Audit", "XAI Implementation"]
  }
};

/* =====================================================================================
   3. COMPONENTES VISUALES DE ÉLITE
   ===================================================================================== */

const ImpactCard = ({ icon, title, description, metrics, color }: any) => (
  <div className={cn(
    "p-10 rounded-[3rem] border transition-all duration-700 group relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl",
    color === "emerald" ? "bg-emerald-50 border-emerald-100 hover:border-emerald-300" :
    color === "blue" ? "bg-blue-50 border-blue-100 hover:border-blue-300" : "bg-slate-950 border-slate-800 text-white"
  )}>
     <div className="text-6xl mb-8 group-hover:scale-110 transition-transform leading-none select-none">{icon}</div>
     <h3 className={cn("text-2xl font-black mb-4 uppercase tracking-tight", color === "slate" ? "text-white" : "text-slate-900")}>{title}</h3>
     <p className={cn("text-sm leading-relaxed mb-10 italic border-l-4 pl-6 opacity-80 text-left", color === "slate" ? "border-emerald-500 text-slate-400" : "border-emerald-500 text-slate-600")}>{description}</p>
     <ul className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em] opacity-60 text-left">
        {metrics.map((m: string, i: number) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-current"></span> {m}</li>)}
     </ul>
  </div>
);

const WhatsAppPulse = () => {
  const [msg, setMsg] = useState("¿Agendamos una Valoración?");
  useEffect(() => {
    const seq = ["¿Agendamos una Valoración?", "Auditoría NIC 38", "Match de Negocios", "Consultar a Expertos"];
    let i = 0;
    const interval = setInterval(() => { i = (i + 1) % seq.length; setMsg(seq[i]); }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end gap-3 group">
      <div className="bg-slate-950 text-white text-[9px] font-black py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest border border-slate-800 shadow-xl translate-x-4 group-hover:translate-x-0">{msg}</div>
      <a href="https://wa.me/593996253317?text=Hola,%20quisiera%20agendar%20una%20reunión%20de%20matchmaking%20tecnológico." className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(37,211,102,0.4)] border-4 border-white hover:scale-110 transition-transform relative overflow-hidden">
        <div className="absolute inset-0 bg-white/20 animate-ping rounded-full"></div>
        <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  );
};

/* =====================================================================================
   4. FOOTER DEFINITIVO (RECONSTRUCCIÓN EXACTA PARA MATCHMAKING)
   ===================================================================================== */

const FinalSection = () => (
  <footer className="bg-[#020617] text-white pt-24 pb-12 px-8 border-t border-slate-900">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 text-left">
        
        {/* IDENTIDAD DE MARCA */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-5 group cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-slate-950 text-4xl shadow-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">T</div>
            <div className="flex flex-col">
              <span className="font-black text-3xl tracking-tighter uppercase leading-none text-white group-hover:text-emerald-400 transition-colors">TransferTech</span>
              <span className="text-sm text-emerald-600 font-bold uppercase tracking-[0.4em] mt-1 group-hover:text-white transition-colors">IPValue Hub</span>
            </div>
          </div>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed border-l-[6px] border-emerald-500 pl-8 font-medium italic opacity-90 hover:opacity-100 transition-opacity">
            "Primera empresa ecuatoriana con 100% de capital intelectual. Liderando la soberanía tecnológica regional."
          </p>
        </div>

        {/* MATCHMAKING (SEO LOCAL) */}
        <div className="flex flex-col">
          <h5 className="font-black text-[11px] uppercase tracking-[0.6em] text-emerald-500 mb-10 underline underline-offset-[16px] decoration-2">Matchmaking</h5>
          <ul className="space-y-6 text-sm font-bold text-slate-300">
            <li className="flex items-center gap-4 group cursor-pointer">
              <span className="text-2xl group-hover:scale-125 transition-transform">📍</span> 
              <span className="group-hover:text-white transition-colors">Quito - Ecuador (Global Reach)</span>
            </li>
            <li className="flex items-center gap-4 text-emerald-400 group cursor-pointer">
              <span className="text-2xl group-hover:animate-pulse">📱</span> 
              <span className="font-black tracking-widest group-hover:text-white transition-colors">+593 996 253 317</span>
            </li>
            <li className="flex items-center gap-4 text-slate-500 italic group cursor-pointer">
              <span className="text-2xl">✉️</span> 
              <span className="group-hover:text-emerald-400 transition-colors underline decoration-slate-700 underline-offset-4">teranlenin@hotmail.com</span>
            </li>
          </ul>
        </div>

        {/* MARCO TÉCNICO (SEO CIENTÍFICO) */}
        <div className="flex flex-col">
          <h5 className="font-black text-[11px] uppercase tracking-[0.6em] text-emerald-500 mb-10 underline underline-offset-[16px] decoration-2">Marco Técnico</h5>
          <ul className="space-y-5 text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">
            <li className="hover:text-white transition-all cursor-pointer flex items-center gap-3 group/link"><span className="text-emerald-500 text-lg group-hover/link:translate-x-2 transition-transform">▪</span> Framework KVA</li>
            <li className="hover:text-white transition-all cursor-pointer flex items-center gap-3 group/link"><span className="text-emerald-500 text-lg group-hover/link:translate-x-2 transition-transform">▪</span> Capitalización NIIF</li>
            <li className="hover:text-white transition-all cursor-pointer flex items-center gap-3 group/link"><span className="text-emerald-500 text-lg group-hover/link:translate-x-2 transition-transform">▪</span> Gobernanza IA</li>
            <li className="hover:text-white transition-all cursor-pointer flex items-center gap-3 group/link"><span className="text-emerald-500 text-lg group-hover/link:translate-x-2 transition-transform">▪</span> Auditoría Forense</li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] text-slate-800 italic">
        <p className="opacity-40 hover:opacity-100 transition-opacity">© 2026 TransferTech IPValue S.A.S. B.I.C.</p>
        <p className="text-emerald-900 font-black mt-4 md:mt-0 hover:text-emerald-600 transition-colors cursor-help" title="Sistema Verificado">v10.0.0-Elite</p>
      </div>
    </div>
  </footer>
);

/* =====================================================================================
   5. RENDERIZADO PRINCIPAL (HOME)
   ===================================================================================== */

export default function Home() {
  const [expertMode, setExpertMode] = useState(false);
  const [activeHub, setActiveHub] = useState("valoracion");
  
  const currentHub = useMemo(() => KNOWLEDGE_MATRIX[activeHub as keyof typeof KNOWLEDGE_MATRIX], [activeHub]);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-[150] bg-white/90 backdrop-blur-xl border-b border-slate-100 px-6 h-20 flex items-center shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollTo('inicio')}>
             <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center font-black text-emerald-400 text-xl shadow-lg group-hover:bg-emerald-600 transition-colors">T</div>
             <div className="flex flex-col text-left">
                <span className="font-black text-lg tracking-tighter uppercase group-hover:text-emerald-600 transition-colors leading-none">TransferTech</span>
                <span className="text-[9px] font-bold text-emerald-600 tracking-[0.4em] uppercase mt-1">IPValue Hub</span>
             </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
               <button onClick={() => scrollTo('catalogo')} className="hover:text-emerald-600 transition-all hover:-translate-y-0.5">Portafolio</button>
               <button onClick={() => scrollTo('sectores')} className="hover:text-emerald-600 transition-all hover:-translate-y-0.5 font-bold underline decoration-emerald-500 underline-offset-4 decoration-2">Impacto</button>
               <Link href="/conocimiento" className="hover:text-emerald-600 transition-all hover:-translate-y-0.5 flex items-center gap-2">
                  Ingeniería <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[8px] border border-slate-200">KVA</span>
               </Link>
            </div>
            
            <button 
              onClick={() => setExpertMode(!expertMode)} 
              className="flex items-center gap-3 bg-slate-50 px-5 py-2.5 rounded-full text-[9px] font-black border border-slate-200 uppercase transition-all hover:border-emerald-300 hover:shadow-md group"
            >
               <span className={cn("w-2 h-2 rounded-full transition-all", expertMode ? "bg-emerald-500 shadow-[0_0_10px_#10b981]" : "bg-slate-300 group-hover:bg-slate-400")}></span>
               {expertMode ? "Modo Experto: ON" : "Modo Básico"}
            </button>
            
            <a href="https://wa.me/593996253317" className="bg-[#0F172A] text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase shadow-xl hover:bg-emerald-600 transition-all hover:-translate-y-1 active:scale-95 tracking-widest">
              Matchmaking
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION (OPTIMIZADO PARA SEO Y AUTORIDAD) */}
      <section id="inicio" className="pt-32 pb-48 px-6 text-left max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 -z-10 opacity-5">
           <div className="text-[400px] font-black leading-none text-slate-900 select-none overflow-hidden pointer-events-none">IP</div>
        </div>

        <div className="inline-flex items-center gap-3 bg-slate-900 text-emerald-400 text-[9px] font-black px-5 py-2 rounded-lg mb-10 border border-slate-700 uppercase tracking-[0.3em] shadow-2xl">
           <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
           Capitalización de Intangibles
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black text-slate-900 mb-10 leading-[0.9] tracking-tighter">
           El Conocimiento <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-500 italic underline decoration-emerald-500 underline-offset-[16px] decoration-[6px] md:decoration-[10px]">Es Capital.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed max-w-3xl border-l-[8px] border-emerald-500 pl-10 font-medium italic">
          {expertMode 
            ? "Implementamos modelos estocásticos de valoración (KVA, CIV) bajo normativa NIC 38 para la activación financiera de activos intangibles." 
            : "Transformamos su marca, software y conocimiento en dinero real para su balance. No deje que su valor permanezca oculto."}
        </p>
        
        <div id="sectores" className="grid lg:grid-cols-3 gap-10 text-left">
           <ImpactCard 
             icon="🏢" 
             title="Empresa" 
             description="Maximización de EBITDA mediante activación de intangibles y valoración de marca." 
             metrics={["Auditoría NIC 38", "M&A Due Diligence", "Estrategia Fiscal"]} 
             color="emerald" 
           />
           <ImpactCard 
             icon="🎓" 
             title="Academia" 
             description="Institucionalización de la transferencia tecnológica TRL 1-9 y creación de Spin-offs." 
             metrics={["Gestión de OTRI", "Portafolio de Patentes", "Venture Building"]} 
             color="blue" 
           />
           <ImpactCard 
             icon="🏛️" 
             title="Estado" 
             description="Diseño de políticas públicas de CTI y soberanía tecnológica nacional." 
             metrics={["GovTech Strategy", "Smart Cities", "Soberanía de Datos"]} 
             color="slate" 
           />
        </div>
      </section>

      {/* CATÁLOGO HUB (ESTRUCTURA DE NAVEGACIÓN PROFUNDA) */}
      <section id="catalogo" className="py-44 px-6 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">Arquitectura de Soluciones</h2>
             <p className="text-slate-500 max-w-2xl mx-auto text-lg">Seleccione un área de ingeniería para desplegar nuestra metodología.</p>
          </div>

          <div className="bg-white rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row min-h-[800px]">
            {/* SIDEBAR DE NAVEGACIÓN */}
            <div className="w-full lg:w-[450px] bg-[#0F172A] p-12 space-y-6 flex flex-col text-left relative z-10">
               <div className="mb-8 pl-4 border-l-4 border-emerald-500">
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Navegación Táctica</span>
               </div>
               {Object.keys(KNOWLEDGE_MATRIX).map(key => (
                 <button 
                   key={key} 
                   onClick={() => setActiveHub(key)} 
                   className={cn(
                     "w-full text-left p-8 rounded-[2.5rem] transition-all duration-500 flex items-center justify-between group border border-transparent", 
                     activeHub === key ? "bg-emerald-600 text-white shadow-2xl scale-105 border-emerald-400/50" : "text-slate-500 hover:bg-slate-800 hover:text-white border-slate-800"
                   )}
                 >
                    <span className="font-black uppercase text-[11px] tracking-[0.2em]">{KNOWLEDGE_MATRIX[key as keyof typeof KNOWLEDGE_MATRIX].label}</span>
                    <span className={cn("text-xl transition-all duration-300", activeHub === key ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0")}>→</span>
                 </button>
               ))}
               
               <div className="mt-auto bg-slate-900/50 p-8 rounded-[3rem] border border-slate-800 text-center">
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-4">Metodologías Certificadas</p>
                  <div className="flex justify-center gap-4 opacity-50">
                     <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                     <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                     <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                  </div>
               </div>
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="flex-1 p-12 lg:p-28 text-left relative overflow-hidden bg-white flex flex-col justify-center">
               {/* TIPOGRAFÍA DE FONDO (EFECTO ÉLITE) */}
               <div className="absolute -top-20 -right-20 opacity-[0.04] text-[400px] font-black text-slate-900 leading-none pointer-events-none uppercase select-none transition-all duration-1000 transform translate-x-10">
                 {currentHub.label[0]}
               </div>
               
               <div className="relative z-10 space-y-16 animate-fadeIn">
                  <div className="pb-12 border-b-2 border-slate-100">
                    <div className="flex items-center gap-4 mb-8">
                       <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black px-3 py-1 rounded uppercase tracking-widest">Enfoque Técnico</span>
                       {expertMode && <span className="bg-slate-100 text-slate-600 text-[9px] font-black px-3 py-1 rounded uppercase tracking-widest border border-slate-200">Nivel Avanzado</span>}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[0.95]">
                      {currentHub.header}
                    </h3>
                    <p className="text-xl md:text-2xl leading-relaxed italic text-slate-500 border-l-[6px] border-emerald-500 pl-10">
                      {expertMode ? currentHub.expert_desc : currentHub.novice_desc}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-16">
                    {currentHub.pillars.map((p, i) => (
                      <div key={i} className="space-y-8 group">
                        <h4 className="text-emerald-700 font-black text-[11px] uppercase tracking-[0.4em] border-b border-emerald-100 pb-4 group-hover:border-emerald-500 transition-colors inline-block">
                          {p.name}
                        </h4>
                        <ul className="space-y-5">
                          {p.items.map((d, j) => (
                            <li key={j} className="flex gap-5 items-start text-slate-600 text-base font-bold leading-tight group/item">
                              <span className="text-emerald-400 group-hover/item:text-emerald-600 transition-colors text-lg mt-0.5">▶</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <FinalSection />
      <WhatsAppPulse />
    </main>
  );
}