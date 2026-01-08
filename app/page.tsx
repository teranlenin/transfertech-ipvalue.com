"use client";
import React, { useState, useEffect, useMemo } from "react";

function cn(...classes) { return classes.filter(Boolean).join(" "); }

const KNOWLEDGE_MATRIX = {
  transferencia: {
    label: "Transferencia Tech",
    img: "/1.png",
    header: "Science-to-Market: TRL 1-9",
    novice: "Llevamos sus invenciones del laboratorio al mercado, creando empresas y protegiendo sus ideas.",
    expert: "ImplementaciÃ³n de protocolos de 'Disclosure' y anÃ¡lisis de FTO. De-risking financiero mediante maduraciÃ³n tecnolÃ³gica.",
    pillars: [
      { name: "OTT / OTRI", items: ["Gobernanza Institucional", "Mapeo de Literatura Gris"] },
      { name: "Spin-offs", items: ["Equity dinÃ¡mico", "Venture Building"] }
    ]
  },
  valoracion: {
    label: "ValoraciÃ³n & Capital",
    img: "/4.png",
    header: "IngenierÃ­a Financiera & NIC 38",
    novice: "Damos valor econÃ³mico real a sus intangibles para capitalizar sus balances financieros.",
    expert: "DeterminaciÃ³n de CIV (Luthy) y KVA (Knowledge Value Added). MÃ©todos Relief from Royalty y Monte Carlo.",
    pillars: [
      { name: "MetodologÃ­as", items: ["Modelos de Monte Carlo", "KVA ROI de Procesos"] },
      { name: "CapitalizaciÃ³n", items: ["Cumplimiento NIC 38", "EBITDA Optimization"] }
    ]
  },
  inteligencia: {
    label: "Inteligencia & IA",
    img: "/2.png",
    header: "SoberanÃ­a & Gobernanza IA",
    novice: "IA para vigilancia competitiva y automatizaciÃ³n legal con seguridad jurÃ­dica total.",
    expert: "Vigilancia estratÃ©gica UNE 166006 y auditorÃ­a forense de algoritmos. Compliance con AI Act.",
    pillars: [
      { name: "Inteligencia", items: ["Benchmarking TecnolÃ³gico", "UNE 166006"] },
      { name: "Gobernanza", items: ["Explainable IA (XAI)", "Bias Audit"] }
    ]
  }
};

const ImpactCard = ({ icon, title, description, metrics, color }) => (
  <div className={cn("p-8 rounded-[3rem] border transition-all duration-700 shadow-sm", color === "emerald" ? "bg-emerald-50 border-emerald-100" : color === "blue" ? "bg-blue-50 border-blue-100" : "bg-slate-900 border-slate-800 text-white")}>
     <div className="text-5xl mb-6 leading-none">{icon}</div>
     <h3 className="text-xl font-black mb-3 uppercase">{title}</h3>
     <p className="text-sm leading-relaxed mb-8 italic border-l-4 border-emerald-500 pl-4 opacity-80 text-left">{description}</p>
     <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest opacity-40 text-left">
        {metrics.map((m, i) => <li key={i}>â€¢ {m}</li>)}
     </ul>
  </div>
);

const FinalSection = () => (
  <footer className="bg-[#020617] text-white pt-20 pb-10 px-8 border-t border-slate-900">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-left">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center font-black text-slate-950 text-3xl">T</div>
            <div className="flex flex-col"><span className="font-black text-2xl uppercase leading-none">TransferTech</span><span className="text-sm text-emerald-600 font-light uppercase tracking-[0.3em] mt-1">IPValue Hub</span></div>
          </div>
          <p className="text-slate-400 text-base max-w-md border-l-4 border-emerald-500 pl-8 font-medium italic opacity-90">"Primera empresa ecuatoriana con 100% de capital intelectual. Liderando la soberanÃ­a tecnolÃ³gica regional."</p>
        </div>
        <div>
          <h5 className="font-black text-[10px] uppercase tracking-[0.5em] text-emerald-500 mb-8 border-b border-slate-800 pb-2">Matchmaking</h5>
          <ul className="space-y-6 text-sm font-bold text-slate-300">
            <li className="flex items-center gap-4"><span>ðŸ“</span> Quito - Ecuador</li>
            <li className="flex items-center gap-4 text-emerald-400 font-black"><span>ðŸ“±</span> +593 996 253 317</li>
            <li className="flex items-center gap-4 text-slate-500 italic"><span>âœ‰ï¸</span> teranlenin@hotmail.com</li>
          </ul>
        </div>
        <div>
          <h5 className="font-black text-[10px] uppercase tracking-[0.5em] text-emerald-500 mb-8 border-b border-slate-800 pb-2">Marco TÃ©cnico</h5>
          <ul className="space-y-4 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
            <li>â–ª Framework KVA</li><li>â–ª CapitalizaciÃ³n NIIF</li><li>â–ª Gobernanza IA</li><li>â–ª AuditorÃ­a Forense</li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-900 flex justify-between text-[8px] font-black uppercase text-slate-800 italic">
        <p>Â© 2026 TransferTech IPValue S.A.S. B.I.C.</p>
        <p className="text-emerald-900">v9.0.0-Elite</p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  const [expertMode, setExpertMode] = useState(false);
  const [activeHub, setActiveHub] = useState("valoracion");
  const currentHub = KNOWLEDGE_MATRIX[activeHub];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="sticky top-0 z-[150] bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 h-20 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center font-black text-emerald-400">T</div>
             <span className="font-black text-lg tracking-tighter uppercase">TransferTech</span>
          </div>
          <div className="flex items-center gap-10">
            <button onClick={() => setExpertMode(!expertMode)} className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-[9px] font-black border border-slate-200 uppercase">{expertMode ? "Modo Experto" : "Modo BÃ¡sico"}</button>
            <a href="https://wa.me/593996253317" className="bg-[#0F172A] text-white px-8 py-3 rounded-xl text-[9px] font-black uppercase">Matchmaking</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-48 px-6 text-left max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-black mb-10 leading-[1] tracking-tighter">Conocimiento <br/><span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-500 italic underline decoration-emerald-500 underline-offset-[16px] decoration-8">Auditado.</span></h1>
        <p className="text-lg md:text-xl text-slate-500 mb-16 leading-relaxed max-w-2xl border-l-[12px] border-emerald-500 pl-14 font-medium italic">{expertMode ? "Modelos de valoraciÃ³n prospectiva bajo NIC 38 y metodologÃ­a KVA." : "Transformamos su marca y conocimiento en capital real para su balance."}</p>
        <div className="grid lg:grid-cols-3 gap-10">
           <ImpactCard icon="ðŸ¢" title="Empresa" description="MaximizaciÃ³n de EBITDA mediante activaciÃ³n de intangibles." metrics={["NIC 38 Audit", "M&A Ready"]} color="emerald" />
           <ImpactCard icon="ðŸŽ“" title="Academia" description="InstitucionalizaciÃ³n de la transferencia TRL 1-9." metrics={["OTT Hubs", "Spin-offs"]} color="blue" />
           <ImpactCard icon="ðŸ›ï¸" title="Estado" description="PolÃ­ticas CTI para soberanÃ­a tecnolÃ³gica nacional." metrics={["GovTech", "Smart Cities"]} color="slate" />
        </div>
      </section>

      <section id="catalogo" className="py-44 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[850px]">
            <div className="w-full lg:w-[450px] bg-slate-900 p-12 space-y-8 flex flex-col text-left">
               {Object.keys(KNOWLEDGE_MATRIX).map(key => (
                 <button key={key} onClick={() => setActiveHub(key)} className={cn("w-full text-left p-10 rounded-[3rem] transition-all flex items-center justify-between group", activeHub === key ? "bg-emerald-600 text-white shadow-xl scale-105" : "text-slate-500 hover:bg-slate-800")}><span className="font-black uppercase text-sm tracking-[0.2em]">{KNOWLEDGE_MATRIX[key].label}</span><span className="opacity-0 group-hover:opacity-100 text-2xl">â†’</span></button>
               ))}
            </div>
            <div className="flex-1 p-14 lg:p-28 text-left relative overflow-hidden bg-white">
               <div className="absolute top-0 right-0 p-32 opacity-[0.03] text-[250px] font-black text-slate-900 leading-none pointer-events-none uppercase">{currentHub.label[0]}</div>
               <div className="space-y-16">
                  <div className="pb-12 border-b-2 border-slate-50"><h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[0.95]">{currentHub.header}</h3><p className="text-lg md:text-2xl leading-relaxed italic border-l-8 border-emerald-500 pl-10">{expertMode ? currentHub.expert : currentHub.novice}</p></div>
                  <div className="grid md:grid-cols-2 gap-16">
                    {currentHub.pillars.map((p, i) => (
                      <div key={i} className="space-y-8"><h4 className="text-emerald-600 font-black text-xs uppercase tracking-[0.5em] border-l-8 border-emerald-500 pl-6">{p.name}</h4><ul className="space-y-6">{p.items.map((d, j) => (<li key={j} className="flex gap-4 items-start text-slate-700 text-lg font-bold"><span>â–¶</span>{d}</li>))}</ul></div>
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
