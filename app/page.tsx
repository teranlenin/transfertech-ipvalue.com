"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";

/* =====================================================================================
   UTILIDADES & ESTILOS
   ===================================================================================== */

// Utilidad para clases CSS condicionales (previene errores de hidratación)
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

/* =====================================================================================
   TIPOS TYPESCRIPT
   ===================================================================================== */

interface Pillar {
  title: string;
  points: string[];
}

interface KnowledgeItem {
  id: string;
  label: string;
  icon: string;
  header: string;
  description: {
    basic: string;
    expert: string;
  };
  pillars: Pillar[];
}

interface KnowledgeMatrix {
  transferencia: KnowledgeItem;
  valoracion: KnowledgeItem;
  inteligencia: KnowledgeItem;
}

interface ImpactCardProps {
  icon: string;
  title: string;
  description: string;
  metrics: string[];
  color: "emerald" | "blue" | "slate";
}

/* =====================================================================================
   DATOS ESTRATÉGICOS (BASE DE CONOCIMIENTO)
   ===================================================================================== */

const KNOWLEDGE_MATRIX: KnowledgeMatrix = {
  transferencia: {
    id: "transferencia",
    label: "Transferencia Tech",
    icon: "🔬",
    header: "Science-to-Market: Ciclo TRL 1-9",
    description: {
      basic: "Llevamos invenciones del laboratorio al mercado, creando Spin-offs y protegiendo ideas.",
      expert: "Gestión de activos basada en trayectorias tecnológicas. De-risking financiero mediante protocolos de Disclosure y análisis de Libertad de Operación (FTO)."
    },
    pillars: [
      { 
        title: "Oficinas de Transferencia (OTT)", 
        points: ["Gobernanza Institucional I+D", "Mapeo de Literatura Gris", "Inventario de Capital Tácito"] 
      },
      { 
        title: "Venture Building", 
        points: ["Estructuración de Equity", "Cap Table Dinámico", "Spin-offs Universitarias"] 
      }
    ]
  },
  valoracion: {
    id: "valoracion",
    label: "Valoración Financiera",
    icon: "📈",
    header: "Ingeniería Financiera & NIC 38",
    description: {
      basic: "Damos valor monetario real a su marca, software y patentes en sus estados financieros.",
      expert: "Determinación de CIV (Luthy) y KVA (Knowledge Value Added). Métodos de ingresos (Income Approach) y simulaciones estocásticas de Razgaitis."
    },
    pillars: [
      { 
        title: "Metodologías de Valoración", 
        points: ["Simulación Monte Carlo", "Relief from Royalty", "KVA ROI de Procesos"] 
      },
      { 
        title: "Capitalización en Balance", 
        points: ["Cumplimiento NIIF / NIC 38", "Activación de Software Propio", "Optimización de EBITDA"] 
      }
    ]
  },
  inteligencia: {
    id: "inteligencia",
    label: "Inteligencia & IA",
    icon: "🤖",
    header: "Soberanía & Gobernanza IA",
    description: {
      basic: "IA para vigilancia competitiva y automatización legal con seguridad jurídica.",
      expert: "Vigilancia estratégica UNE 166006 y auditoría forense de algoritmos. Compliance con AI Act y soberanía de datos corporativos."
    },
    pillars: [
      { 
        title: "Inteligencia Competitiva", 
        points: ["Detección de Señales Débiles", "Benchmarking Tecnológico", "Norma UNE 166006"] 
      },
      { 
        title: "Gobernanza Algorítmica", 
        points: ["Explainable IA (XAI)", "Auditoría de Sesgos", "Smart Contracts"] 
      }
    ]
  }
};

/* =====================================================================================
   COMPONENTES DE LA INTERFAZ (UI)
   ===================================================================================== */

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, title, description, metrics, color }) => (
  <div className={cn(
    "p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full",
    color === "emerald" ? "bg-emerald-50 border-emerald-100 hover:border-emerald-300" :
    color === "blue" ? "bg-blue-50 border-blue-100 hover:border-blue-300" : "bg-slate-900 border-slate-800 text-white"
  )}>
     <div className="text-5xl mb-6" role="img" aria-label={title}>{icon}</div>
     <h3 className={cn("text-xl font-black mb-4 uppercase tracking-tight", color === "slate" ? "text-white" : "text-slate-900")}>{title}</h3>
     <p className={cn("text-sm leading-relaxed mb-8 flex-grow opacity-90", color === "slate" ? "text-slate-400" : "text-slate-600")}>{description}</p>
     <div className="border-t border-current opacity-10 mb-6"></div>
     <ul className="space-y-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-70">
        {metrics.map((m, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className={cn("w-1.5 h-1.5 rounded-full", color === "slate" ? "bg-emerald-500" : "bg-slate-900")}></span> 
            {m}
          </li>
        ))}
     </ul>
  </div>
);

const WhatsAppPulse: React.FC = () => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 group" aria-label="Contacto WhatsApp">
      <div className={cn(
        "bg-slate-900 text-white text-[10px] font-black py-2 px-4 rounded-full shadow-xl transition-all duration-500 uppercase tracking-widest",
        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      )}>
        ¿Agendamos una Valoración?
      </div>
      <a 
        href="https://wa.me/593996253317?text=Hola,%20deseo%20una%20consultoría%20sobre%20valoración%20de%20intangibles."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp para contacto"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
        <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

/* =====================================================================================
   PÁGINA PRINCIPAL: ORQUESTACIÓN DE CONTENIDO
   ===================================================================================== */

export default function Home() {
  const [expertMode, setExpertMode] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof KnowledgeMatrix>("valoracion");
  
  const currentData = useMemo(() => KNOWLEDGE_MATRIX[activeTab], [activeTab]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const toggleExpertMode = useCallback(() => {
    setExpertMode(prev => !prev);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 h-20 flex items-center px-6 transition-all" role="navigation" aria-label="Navegación principal">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <button 
            onClick={() => scrollTo('inicio')}
            className="flex items-center gap-3 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg p-2"
            aria-label="Ir al inicio"
          >
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-emerald-400 font-black text-xl group-hover:bg-emerald-600 transition-colors">T</div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter uppercase leading-none">TransferTech</span>
              <span className="text-[9px] font-bold text-slate-500 tracking-[0.3em] uppercase">IPValue Hub</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <button 
                onClick={() => scrollTo('soluciones')} 
                className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-label="Ir a soluciones"
              >
                Soluciones
              </button>
              <button 
                onClick={() => scrollTo('impacto')} 
                className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-label="Ir a impacto"
              >
                Impacto
              </button>
              <Link 
                href="/conocimiento" 
                className="hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-label="Ir a recursos"
              >
                Recursos
              </Link>
            </div>
            
            <button 
              onClick={toggleExpertMode}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-[9px] font-black uppercase border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
                expertMode ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-500 border-slate-200"
              )}
              aria-label={expertMode ? "Desactivar modo experto" : "Activar modo experto"}
              aria-pressed={expertMode}
            >
              <div className={cn("w-2 h-2 rounded-full", expertMode ? "bg-emerald-400 animate-pulse" : "bg-slate-300")}></div>
              {expertMode ? "Modo Experto" : "Modo Básico"}
            </button>

            <a 
              href="https://wa.me/593996253317" 
              className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Contactar por WhatsApp"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="pt-32 pb-32 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Capitalización de Intangibles</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
          El Conocimiento <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 italic decoration-emerald-500 underline underline-offset-[12px] decoration-[6px]">
            Es Capital.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl leading-relaxed border-l-[6px] border-emerald-500 pl-8 font-medium">
          {expertMode 
            ? "Implementamos modelos de valoración prospectiva bajo NIC 38 y metodología KVA para el reconocimiento financiero de activos." 
            : "Transformamos su marca, software y conocimiento en dinero real para su balance. No deje que su valor permanezca oculto."}
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button 
            onClick={() => scrollTo('soluciones')} 
            className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-sm tracking-wide hover:bg-emerald-600 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            aria-label="Explorar soluciones"
          >
            Explorar Soluciones
          </button>
          <a 
            href="https://wa.me/593996253317" 
            className="px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-sm tracking-wide hover:border-emerald-500 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            aria-label="Solicitar auditoría por WhatsApp"
          >
            Solicitar Auditoría
          </a>
        </div>
      </section>

      {/* SOLUTIONS HUB */}
      <section id="soluciones" className="py-32 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Ingeniería de Valor</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Seleccione una vertical para desplegar nuestra metodología de intervención.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100">
            {/* Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-4" role="tablist" aria-label="Categorías de soluciones">
              {Object.values(KNOWLEDGE_MATRIX).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as keyof KnowledgeMatrix)}
                  role="tab"
                  aria-selected={activeTab === item.id}
                  aria-controls={`panel-${item.id}`}
                  className={cn(
                    "p-6 rounded-[2rem] text-left transition-all border group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
                    activeTab === item.id 
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg" 
                      : "bg-white text-slate-500 border-slate-100 hover:border-emerald-200"
                  )}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                    <span className={cn("text-2xl opacity-0 group-hover:opacity-100 transition-opacity", activeTab === item.id && "opacity-100 text-emerald-400")} aria-hidden="true">→</span>
                  </div>
                  <span className="font-black text-sm uppercase tracking-widest">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div 
              id={`panel-${currentData.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${currentData.id}`}
              className="lg:col-span-8 bg-slate-50 rounded-[2.5rem] p-10 flex flex-col justify-center border border-slate-100"
            >
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
                  Enfoque Técnico
                </span>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tight">
                  {currentData.header}
                </h3>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed border-l-4 border-emerald-400 pl-6 italic">
                  {expertMode ? currentData.description.expert : currentData.description.basic}
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  {currentData.pillars.map((pillar, idx) => (
                    <div key={idx}>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">
                        {pillar.title}
                      </h4>
                      <ul className="space-y-3">
                        {pillar.points.map((pt, pIdx) => (
                          <li key={pIdx} className="text-sm text-slate-500 flex items-start gap-3">
                            <span className="text-emerald-500 mt-1" aria-hidden="true">●</span>
                            {pt}
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

      {/* IMPACT CARDS */}
      <section id="impacto" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <ImpactCard 
            color="emerald"
            icon="🏢"
            title="Empresa"
            description="Maximización de EBITDA mediante activación de intangibles y valoración de marca."
            metrics={["Auditoría NIC 38", "M&A Due Diligence"]}
          />
          <ImpactCard 
            color="blue"
            icon="🎓"
            title="Academia"
            description="Institucionalización de la transferencia tecnológica y creación de Spin-offs rentables."
            metrics={["Gestión OTRI", "Venture Building"]}
          />
          <ImpactCard 
            color="slate"
            icon="🏛️"
            title="Gobierno"
            description="Diseño de políticas públicas de CTI y estrategias de soberanía tecnológica nacional."
            metrics={["GovTech", "Smart Cities"]}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] text-white pt-24 pb-10 px-6 border-t border-slate-900" role="contentinfo">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-slate-900 font-black text-2xl">T</div>
              <span className="font-black text-2xl uppercase tracking-tighter">TransferTech</span>
            </div>
            <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
              Primera empresa ecuatoriana con 100% de capital intelectual. Liderando la soberanía tecnológica regional.
            </p>
          </div>
          <div>
            <h5 className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em] mb-8">Contacto</h5>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li>Quito, Ecuador</li>
              <li>
                <a href="tel:+593996253317" className="hover:text-emerald-400 transition-colors">+593 996 253 317</a>
              </li>
              <li>
                <a href="mailto:teranlenin@hotmail.com" className="hover:text-emerald-400 transition-colors">teranlenin@hotmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em] mb-8">Legal</h5>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Compliance Corporativo</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-600">
          <p>© 2026 TransferTech IPValue S.A.S.</p>
          <p>System v12.0.0 (Stable)</p>
        </div>
      </footer>

      <WhatsAppPulse />
    </main>
  );
}
