'use client'

import { useState, useEffect, useRef } from 'react'

// ============================================================================
// TRANSFERTECH IPVALUE - ELITE EDITION v2.0
// ============================================================================
// 
// FUNDAMENTOS CIENTÍFICOS DE NEUROMARKETING APLICADOS:
// 
// 📊 PSICOLOGÍA DEL COLOR (Basado en investigación):
// - Navy Blue (#1B3A4B): Confianza, autoridad, profesionalismo, estabilidad
//   → Estudios muestran que blue aumenta percepción de confiabilidad en B2B
//   → "Navy blue projects authority and expertise" (Color Psychology Research)
// - Gold (#C9A227): Prestigio, valor, prosperidad, exclusividad
//   → "Gold increases perceived product value in luxury markets"
//   → Regla 10% para acentos de alto impacto
// - Obsidian (#08090A): Sofisticación, elegancia, premium
//   → "41% of high-income consumers attracted to premium black tones"
// 
// 📝 TIPOGRAFÍA CIENTÍFICA:
// - Display: Playfair Display (serif) - autoridad, tradición, expertise
// - Body: Inter (sans-serif) - legibilidad digital óptima, claridad
// - Base: 16px (estándar WCAG para accesibilidad)
// - Line-height: 1.6 (óptimo para lectura según investigación U.S. Web Design)
// - Measure: 45-90 caracteres por línea (recomendación científica)
// - Contraste: WCAG AA 4.5:1 mínimo
// 
// 🧠 NEUROMARKETING:
// - F-Pattern: Lectura occidental natural para contenido
// - Z-Pattern: Para landing pages y CTAs
// - Regla 60-30-10: Distribución de color óptima
// - Primacy Effect: Información clave arriba
// - Social Proof: Métricas y casos de éxito prominentes
// - Scarcity & Authority: Badges y credenciales
// 
// 🔍 SEMÁNTICA SEO - MATCHMAKING KEYWORDS:
// - "valoración activos intangibles Ecuador"
// - "NIC 38 NIIF consultora"
// - "propiedad intelectual patentes marcas"
// - "transferencia tecnológica OTRI"
// - "due diligence activos intangibles"
// - "capitalización software balance"
// 
// ============================================================================

export default function TransfertechElitePage() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [activeMethodology, setActiveMethodology] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredCase, setHoveredCase] = useState<number | null>(null)
  const [formData, setFormData] = useState({ 
    nombre: '', 
    email: '', 
    empresa: '', 
    cargo: '',
    mensaje: '', 
    servicio: '' 
  })
  const [activeTab, setActiveTab] = useState('todos')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ============================================================================
  // DATOS ESTRUCTURADOS - OPTIMIZADOS PARA SEO SEMÁNTICO
  // Keywords estratégicos integrados en cada descripción
  // ============================================================================

  const servicios = [
    {
      id: 1,
      icon: '◈',
      titulo: 'Valoración de Activos Intangibles',
      subtitulo: 'NIC 38 · NIIF · Due Diligence Financiero',
      headline: '¿Cuánto vale realmente su marca, software o patente?',
      descripcion: 'Determinamos el valor monetario de sus activos intangibles para capitalización en balance, fusiones, adquisiciones y cumplimiento normativo bajo estándares NIC 38 e IFRS.',
      features: [
        'Metodología Relief from Royalty para marcas y patentes',
        'Simulación Monte Carlo para tecnologías en desarrollo',
        'Análisis de Flujos Descontados (DCF) certificable',
        'Informes validados para auditoría externa (Big Four)',
        'Due Diligence de activos intangibles para M&A',
        'Optimización de EBITDA mediante activación contable'
      ],
      beneficios: [
        'Mejore sus ratios financieros ante inversionistas',
        'Cumpla requisitos de auditoría sin observaciones',
        'Maximice valor en procesos de venta o fusión'
      ],
      keywords: ['valoración activos intangibles', 'NIC 38', 'NIIF', 'due diligence', 'capitalización balance'],
      metricas: { proyectos: '147+', precision: '98.7%', valorado: '$4.2M USD' },
      color: '#C9A227',
      preguntasFrecuentes: [
        '¿Cómo valorar una patente en Ecuador?',
        '¿Qué es la capitalización de activos intangibles?',
        '¿Cuánto cuesta un informe de valoración NIC 38?'
      ]
    },
    {
      id: 2,
      icon: '⬡',
      titulo: 'Propiedad Intelectual',
      subtitulo: 'Registro · Protección · Defensa Legal',
      headline: '¿Su conocimiento está legalmente protegido?',
      descripcion: 'Boutique legal especializada en registro, gestión estratégica y defensa de marcas, patentes, software, derechos de autor y secretos industriales ante SENADI y oficinas internacionales.',
      features: [
        'Registro de marcas nacionales (SENADI) e internacionales',
        'Redacción y prosecutión de patentes de invención',
        'Protección de software, bases de datos y algoritmos',
        'Contratos de licencia, cesión y confidencialidad',
        'Defensa en procedimientos de infracción y oposición',
        'Auditorías de portafolio y estrategia de PI'
      ],
      beneficios: [
        'Proteja su ventaja competitiva legalmente',
        'Genere ingresos por licenciamiento de PI',
        'Prevenga infracciones y plagios costosos'
      ],
      keywords: ['propiedad intelectual Ecuador', 'registro marcas SENADI', 'patentes invención', 'defensa PI'],
      metricas: { registros: '456+', paises: '28', éxito: '97%' },
      color: '#1B3A4B',
      preguntasFrecuentes: [
        '¿Cómo registrar una marca en Ecuador?',
        '¿Cuánto tiempo tarda una patente?',
        '¿Cómo proteger mi software legalmente?'
      ]
    },
    {
      id: 3,
      icon: '◇',
      titulo: 'Transferencia Tecnológica',
      subtitulo: 'De la Investigación al Mercado',
      headline: '¿Su I+D genera retorno de inversión?',
      descripcion: 'Articulamos el ecosistema academia-empresa-gobierno para comercializar innovaciones, gestionar OTRIs y crear valor a partir de la investigación científica.',
      features: [
        'Diseño e implementación de Oficinas de Transferencia (OTRI)',
        'Gestión estratégica de portafolios de patentes',
        'Negociación de licencias y acuerdos tecnológicos',
        'Creación de spin-offs y startups de base científica',
        'Vigilancia tecnológica e inteligencia competitiva',
        'Roadmaps de comercialización de tecnologías'
      ],
      beneficios: [
        'Monetice su inversión en investigación',
        'Acelere el time-to-market de innovaciones',
        'Genere ingresos por royalties y licencias'
      ],
      keywords: ['transferencia tecnológica', 'OTRI', 'spin-off universidad', 'licenciamiento tecnología'],
      metricas: { tecnologias: '89+', licencias: '34', spinoffs: '12' },
      color: '#2D5A27',
      preguntasFrecuentes: [
        '¿Qué es una OTRI y para qué sirve?',
        '¿Cómo crear un spin-off universitario?',
        '¿Cómo negociar licencias de tecnología?'
      ]
    },
    {
      id: 4,
      icon: '◎',
      titulo: 'Gestión de Innovación',
      subtitulo: 'Ecosistemas CTI · Políticas Públicas',
      headline: '¿Su organización innova sistemáticamente?',
      descripcion: 'Diseñamos e implementamos sistemas de innovación, modelos de gestión para redes de laboratorios, centros de I+D y políticas públicas de ciencia, tecnología e innovación.',
      features: [
        'Diagnósticos de madurez TRL, MRL, SRL, CRL, IRL',
        'Modelos de gestión para redes de laboratorios',
        'Diseño de políticas públicas de CTI',
        'Estrategias de innovación abierta corporativa',
        'Proyectos de Smart Cities y GovTech',
        'Venture Building institucional'
      ],
      beneficios: [
        'Sistematice la innovación en su organización',
        'Acceda a fondos públicos de CTI',
        'Posicione su territorio como hub de innovación'
      ],
      keywords: ['gestión innovación', 'TRL MRL', 'ecosistemas CTI', 'políticas públicas innovación'],
      metricas: { ecosistemas: '15+', politicas: '8', labs: '23' },
      color: '#6B2D5C',
      preguntasFrecuentes: [
        '¿Qué es el nivel TRL de una tecnología?',
        '¿Cómo diseñar un ecosistema de innovación?',
        '¿Cómo gestionar una red de laboratorios?'
      ]
    },
    {
      id: 5,
      icon: '⬢',
      titulo: 'Inteligencia Artificial Aplicada',
      subtitulo: 'IA para Decisiones de PI e Innovación',
      headline: '¿Usa datos para decisiones de PI?',
      descripcion: 'Soluciones de inteligencia artificial para valoración predictiva, análisis masivo de patentes, vigilancia tecnológica automatizada y scoring de tecnologías emergentes.',
      features: [
        'Modelos predictivos de valor de activos de PI',
        'Análisis semántico de patentes con NLP',
        'Dashboards de inteligencia competitiva en tiempo real',
        'Automatización de vigilancia tecnológica',
        'Scoring y ranking de tecnologías emergentes',
        'APIs de valoración para integración empresarial'
      ],
      beneficios: [
        'Tome decisiones basadas en datos, no intuición',
        'Anticipe tendencias tecnológicas del mercado',
        'Automatice procesos de análisis de PI'
      ],
      keywords: ['inteligencia artificial patentes', 'machine learning PI', 'vigilancia tecnológica IA'],
      metricas: { modelos: '12', documentos: '2M+', precision: '94%' },
      color: '#4A1942',
      preguntasFrecuentes: [
        '¿Cómo usar IA para analizar patentes?',
        '¿Qué es la vigilancia tecnológica automatizada?',
        '¿Cómo predecir el valor de una tecnología?'
      ]
    },
    {
      id: 6,
      icon: '◉',
      titulo: 'Formación Especializada',
      subtitulo: 'Academia de Capital Intelectual',
      headline: '¿Su equipo domina la gestión de PI?',
      descripcion: 'Programas de formación ejecutiva para gestores de propiedad intelectual, valoradores de intangibles y líderes de innovación y transferencia tecnológica.',
      features: [
        'Diplomados en gestión estratégica de PI',
        'Certificación en valoración de activos intangibles',
        'Workshops de transferencia tecnológica',
        'Bootcamps de innovación corporativa',
        'Mentoría para emprendedores deep-tech',
        'Programas in-company personalizados'
      ],
      beneficios: [
        'Desarrolle capacidades internas en PI',
        'Certifique a su equipo con estándares internacionales',
        'Reduzca dependencia de consultores externos'
      ],
      keywords: ['formación propiedad intelectual', 'curso valoración intangibles', 'capacitación innovación'],
      metricas: { egresados: '890+', cursos: '34', nps: '4.9/5' },
      color: '#8B4513',
      preguntasFrecuentes: [
        '¿Dónde estudiar valoración de intangibles?',
        '¿Qué certificaciones hay en propiedad intelectual?',
        '¿Cómo capacitar a mi equipo en PI?'
      ]
    }
  ]

  const metodologias = [
    {
      nombre: 'Relief from Royalty',
      descripcion: 'Método estándar internacional que estima el valor de un activo intangible basándose en los royalties hipotéticos que la empresa se ahorra al ser propietaria del activo, en lugar de licenciarlo de un tercero.',
      pasos: [
        'Identificación y caracterización del activo intangible',
        'Análisis de tasas de royalty comparables en la industria',
        'Proyección de ingresos futuros atribuibles al activo',
        'Aplicación de tasa de royalty de mercado',
        'Descuento a valor presente con tasa apropiada'
      ],
      aplicacion: 'Marcas comerciales, patentes, software, franquicias, licencias',
      ventajas: ['Aceptado por Big Four', 'Datos de mercado verificables', 'Metodología robusta para auditoría'],
      icono: '📊',
      referencia: 'WIPO, IVSC, NIC 38'
    },
    {
      nombre: 'Simulación Monte Carlo',
      descripcion: 'Técnica de simulación probabilística que modela múltiples escenarios de flujos de caja bajo condiciones de incertidumbre, generando distribuciones de probabilidad del valor del activo.',
      pasos: [
        'Definición de variables estocásticas clave',
        'Asignación de distribuciones de probabilidad',
        'Generación de miles de escenarios aleatorios',
        'Análisis de sensibilidad multivariable',
        'Cálculo de intervalos de confianza del valor'
      ],
      aplicacion: 'Tecnologías en etapa temprana, patentes farmacéuticas, proyectos de I+D',
      ventajas: ['Captura incertidumbre real', 'Rangos de valor con probabilidad', 'Ideal para decisiones de inversión'],
      icono: '🎲',
      referencia: 'Damodaran, AICPA'
    },
    {
      nombre: 'Multi-Period Excess Earnings',
      descripcion: 'Método que aísla los flujos de caja atribuibles específicamente al activo intangible, después de descontar el retorno justo de todos los demás activos contributivos de la empresa.',
      pasos: [
        'Proyección de utilidades totales del negocio',
        'Cálculo de cargos contributivos por otros activos',
        'Identificación del exceso de beneficios residuales',
        'Atribución del exceso al activo intangible',
        'Determinación del valor terminal'
      ],
      aplicacion: 'Relaciones con clientes, know-how, tecnología propietaria, goodwill',
      ventajas: ['Separa valor de cada activo', 'Útil para PPA en adquisiciones', 'Defensible ante reguladores'],
      icono: '💎',
      referencia: 'FASB ASC 805, IFRS 3'
    },
    {
      nombre: 'Cost Approach',
      descripcion: 'Valoración basada en el costo histórico o de reposición para recrear o reemplazar el activo intangible, ajustado por obsolescencia funcional, tecnológica y económica.',
      pasos: [
        'Identificación de costos históricos de desarrollo',
        'Cálculo del costo de reproducción actual',
        'Ajuste por obsolescencia tecnológica',
        'Aplicación de factores de depreciación',
        'Determinación del valor neto de reposición'
      ],
      aplicacion: 'Software desarrollado internamente, bases de datos, procesos documentados, manuales',
      ventajas: ['Objetivo y verificable', 'Útil cuando no hay mercado', 'Base para negociaciones'],
      icono: '🔧',
      referencia: 'IVS, RICS'
    }
  ]

  const casos = [
    {
      cliente: 'ConQuito - Agencia de Promoción Económica',
      proyecto: 'Modelo de Gestión de la Red de Laboratorios del DMQ',
      sector: 'Gobierno',
      tipo: 'gobierno',
      descripcion: 'Diseño integral del modelo de gestión, gobernanza multinivel y sostenibilidad financiera para la Red de Laboratorios del Distrito Metropolitano de Quito, articulando 12 laboratorios de 9 universidades.',
      desafio: 'Articular laboratorios de múltiples instituciones con diferentes culturas organizacionales y modelos de gestión bajo un marco unificado.',
      resultados: [
        'Diagnóstico TRL/MRL/SRL de 130 variables por laboratorio',
        'Modelo de gobernanza multinivel con representación equitativa',
        'Proyección de sostenibilidad financiera a 10 años',
        'Cartera estandarizada de 45 servicios técnicos',
        'Manual de operaciones y procedimientos aprobado'
      ],
      impacto: '$300K USD potencial anual de servicios',
      año: '2025',
      duracion: '6 meses'
    },
    {
      cliente: 'Centro de Innovación iQ',
      proyecto: 'Modelo de Sostenibilidad Financiera',
      sector: 'Academia',
      tipo: 'academia',
      descripcion: 'Diseño del modelo de sostenibilidad financiera y operativa para centro de innovación universitario, incluyendo estrategia de relacionamiento con industria y diversificación de ingresos.',
      desafio: 'Reducir dependencia de fondos públicos y generar ingresos propios sin perder el foco académico.',
      resultados: [
        'Modelo de ingresos diversificado (servicios, proyectos, formación)',
        'Alianzas estratégicas formalizadas con 8 empresas ancla',
        'KPIs de impacto científico y económico definidos',
        'Roadmap de crecimiento a 5 años con hitos verificables',
        'Estructura organizacional optimizada'
      ],
      impacto: '$180K USD proyección anual',
      año: '2025',
      duracion: '4 meses'
    },
    {
      cliente: 'Empresa Farmacéutica Multinacional',
      proyecto: 'Due Diligence y Valoración de Portafolio de Patentes',
      sector: 'Industria',
      tipo: 'empresa',
      descripcion: 'Due diligence técnico-legal y valoración bajo NIC 38 de cartera de 23 patentes farmacéuticas para proceso de fusión con multinacional europea.',
      desafio: 'Valorar patentes en diferentes etapas de desarrollo con incertidumbre regulatoria significativa.',
      resultados: [
        'Valoración NIC 38 completa aceptada por auditor externo',
        'Análisis de libertad de operación (FTO) en 5 jurisdicciones',
        'Estrategia de licenciamiento diseñada para 8 patentes',
        'Informe ejecutivo para directorio aprobado unánimemente',
        'Negociación de precio de fusión exitosa'
      ],
      impacto: '$2.4M USD valoración total del portafolio',
      año: '2024',
      duracion: '3 meses'
    },
    {
      cliente: 'Startup Fintech Serie A',
      proyecto: 'Capitalización de Plataforma Tecnológica',
      sector: 'Tecnología',
      tipo: 'empresa',
      descripcion: 'Activación contable de software desarrollado internamente para optimización de estados financieros previo a ronda de inversión Serie A con fondos de Silicon Valley.',
      desafio: 'Demostrar valor de activos intangibles a inversionistas sofisticados con estándares IFRS rigurosos.',
      resultados: [
        'EBITDA optimizado en 340% por activación de intangibles',
        'Cumplimiento NIIF verificado por Big Four',
        'Inversión Serie A de $1.2M USD captada exitosamente',
        'Documentación completa para auditoría posterior',
        'Valoración pre-money incrementada en 45%'
      ],
      impacto: '$890K USD en activos activados',
      año: '2024',
      duracion: '2 meses'
    }
  ]

  const aliados = [
    { nombre: 'Connect Bogotá', tipo: 'Hub de Innovación Empresarial', pais: 'Colombia', logo: '🇨🇴' },
    { nombre: 'CamBioTec México', tipo: 'Centro de Transferencia Tecnológica', pais: 'México', logo: '🇲🇽' },
    { nombre: 'Red OTT México', tipo: 'Red Nacional de OTRIs', pais: 'México', logo: '🇲🇽' },
    { nombre: 'Ruta N Medellín', tipo: 'Ecosistema de Innovación CTI', pais: 'Colombia', logo: '🇨🇴' },
    { nombre: 'SENADI Ecuador', tipo: 'Oficina Nacional de Propiedad Intelectual', pais: 'Ecuador', logo: '🇪🇨' },
    { nombre: 'WIPO Academy', tipo: 'Formación Internacional en PI', pais: 'Global', logo: '🌍' }
  ]

  const recursos = [
    { 
      titulo: 'Guía Completa de Valoración bajo NIC 38', 
      tipo: 'Whitepaper', 
      paginas: 45, 
      descargas: 1234,
      descripcion: 'Todo lo que necesita saber sobre la valoración de activos intangibles según la normativa contable internacional.',
      temas: ['Metodologías', 'Requisitos NIIF', 'Casos prácticos']
    },
    { 
      titulo: 'Framework TRL/MRL para Laboratorios', 
      tipo: 'Metodología', 
      paginas: 32, 
      descargas: 890,
      descripcion: 'Herramienta de diagnóstico de madurez tecnológica y de mercado para laboratorios de I+D.',
      temas: ['Niveles TRL', 'Indicadores', 'Matrices de evaluación']
    },
    { 
      titulo: 'Vigilancia Tecnológica con IA', 
      tipo: 'Investigación', 
      paginas: 28, 
      descargas: 567,
      descripcion: 'Cómo implementar sistemas de vigilancia tecnológica automatizada usando inteligencia artificial.',
      temas: ['NLP para patentes', 'Alertas automáticas', 'Dashboards']
    },
    { 
      titulo: 'Contratos de Licencia: Guía Práctica', 
      tipo: 'Manual Legal', 
      paginas: 56, 
      descargas: 2341,
      descripcion: 'Modelos y mejores prácticas para negociar y redactar contratos de licenciamiento de PI.',
      temas: ['Cláusulas clave', 'Royalties', 'Modelos de contrato']
    }
  ]

  const testimonios = [
    {
      texto: "La valoración de TransferTech nos permitió capitalizar nuestro software y mejorar dramáticamente nuestros ratios financieros ante los inversionistas.",
      autor: "Director Financiero",
      empresa: "Startup Fintech",
      resultado: "+340% EBITDA"
    },
    {
      texto: "Su metodología de diagnóstico TRL/MRL nos dio una radiografía precisa de nuestros laboratorios. Fundamental para el modelo de gestión.",
      autor: "Director de Innovación",
      empresa: "ConQuito",
      resultado: "12 labs articulados"
    },
    {
      texto: "El informe de valoración de patentes fue aceptado sin observaciones por nuestro auditor externo. Profesionalismo excepcional.",
      autor: "Gerente Legal",
      empresa: "Empresa Farmacéutica",
      resultado: "$2.4M valorados"
    }
  ]

  const preguntasFrecuentes = [
    {
      pregunta: '¿Cómo valorar una patente en Ecuador?',
      respuesta: 'La valoración de patentes en Ecuador se realiza mediante metodologías internacionales aceptadas como Relief from Royalty, que estima el valor basándose en los royalties hipotéticos que se ahorran al poseer la patente, o el método de Excess Earnings para tecnologías que generan beneficios adicionales cuantificables. El proceso incluye análisis de mercado, proyección de flujos y descuento a valor presente.'
    },
    {
      pregunta: '¿Qué es la capitalización de activos intangibles bajo NIC 38?',
      respuesta: 'La capitalización es el proceso de registrar activos intangibles en el balance general de la empresa según la Norma Internacional de Contabilidad 38. Permite reconocer el valor de marcas, patentes, software y otros intangibles que cumplen criterios de identificabilidad, control y generación de beneficios económicos futuros.'
    },
    {
      pregunta: '¿Cuánto cuesta un servicio de valoración de intangibles?',
      respuesta: 'El costo depende de la complejidad del activo, la metodología requerida y el propósito de la valoración. Ofrecemos una consulta inicial gratuita para evaluar su caso específico y proporcionar un presupuesto detallado. Nuestros informes están diseñados para ser aceptados por auditores externos y entidades reguladoras.'
    },
    {
      pregunta: '¿Cómo registrar una marca en Ecuador?',
      respuesta: 'El registro de marcas en Ecuador se realiza ante SENADI (Servicio Nacional de Derechos Intelectuales). El proceso incluye búsqueda de antecedentes, clasificación según Niza, presentación de solicitud, publicación en Gaceta y emisión del título. El registro tiene validez de 10 años renovables indefinidamente.'
    }
  ]

  const casosFiltrados = activeTab === 'todos' 
    ? casos 
    : casos.filter(c => c.tipo === activeTab)

  return (
    <div className="min-h-screen bg-[#08090A] text-[#E8E6E3] overflow-x-hidden">
      <style jsx global>{`
        /* ================================================================
           SISTEMA TIPOGRÁFICO ÉLITE
           Basado en investigación científica de legibilidad
           
           Principios aplicados:
           - 16px base (WCAG optimal)
           - Line-height 1.6 (mejora lectura 20%)
           - 45-90 caracteres por línea
           - Escala modular 1.25
           ================================================================ */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        :root {
          /* SISTEMA DE COLOR NEUROMARKETING
             Basado en psicología del color B2B
             Regla 60-30-10 aplicada */
          
          /* 60% - Colores base (oscuros premium) */
          --obsidian: #08090A;
          --charcoal: #12141A;
          --slate: #1A1D24;
          
          /* 30% - Color secundario (confianza/autoridad) */
          --navy-deep: #0D1B2A;
          --navy-primary: #1B3A4B;
          --navy-light: #274C5B;
          
          /* 10% - Acento (valor/prestigio) */
          --gold-primary: #C9A227;
          --gold-light: #E5C76B;
          --gold-dark: #9A7B1C;
          
          /* Colores semánticos */
          --success: #1E5631;
          --success-light: #2D7A3D;
          
          /* Texto - Alto contraste (WCAG AA) */
          --text-primary: #F5F3EF;
          --text-secondary: #9CA3AF;
          --text-muted: #6B7280;
          
          /* Tipografía */
          --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
          --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
          
          /* Escala tipográfica modular (1.25) */
          --text-xs: 0.75rem;     /* 12px */
          --text-sm: 0.875rem;    /* 14px */
          --text-base: 1rem;      /* 16px */
          --text-lg: 1.125rem;    /* 18px */
          --text-xl: 1.25rem;     /* 20px */
          --text-2xl: 1.563rem;   /* 25px */
          --text-3xl: 1.953rem;   /* 31px */
          --text-4xl: 2.441rem;   /* 39px */
          --text-5xl: 3.052rem;   /* 49px */
          --text-6xl: 3.815rem;   /* 61px */
          
          /* Line heights optimizados */
          --leading-tight: 1.2;
          --leading-snug: 1.35;
          --leading-normal: 1.6;
          --leading-relaxed: 1.75;
          
          /* Espaciado coherente (8px grid) */
          --space-1: 0.25rem;
          --space-2: 0.5rem;
          --space-3: 0.75rem;
          --space-4: 1rem;
          --space-6: 1.5rem;
          --space-8: 2rem;
          --space-12: 3rem;
          --space-16: 4rem;
          --space-24: 6rem;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          font-size: 16px;
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        body {
          font-family: var(--font-body);
          font-weight: 400;
          line-height: var(--leading-normal);
          color: var(--text-primary);
          background: var(--obsidian);
        }
        
        /* Tipografía Display - Headings */
        h1, h2, h3, .font-display {
          font-family: var(--font-display);
          font-weight: 500;
          line-height: var(--leading-tight);
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }
        
        h1 { font-size: var(--text-5xl); }
        h2 { font-size: var(--text-4xl); }
        h3 { font-size: var(--text-2xl); }
        
        /* Texto body - Máxima legibilidad */
        p, .font-body {
          font-family: var(--font-body);
          font-weight: 400;
          line-height: var(--leading-normal);
          color: var(--text-secondary);
          max-width: 70ch; /* Medida óptima */
        }
        
        /* Monospace - Datos técnicos */
        code, .font-mono {
          font-family: var(--font-mono);
          font-size: 0.9em;
        }
        
        /* ================================================================
           EFECTOS VISUALES PREMIUM
           ================================================================ */
        
        /* Gradiente de texto dorado */
        .text-gradient-gold {
          background: linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-light) 50%, var(--gold-primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Glassmorphism card */
        .glass-card {
          background: rgba(18, 20, 26, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(201, 162, 39, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .glass-card:hover {
          border-color: rgba(201, 162, 39, 0.25);
          box-shadow: 0 25px 50px -12px rgba(201, 162, 39, 0.08);
          transform: translateY(-2px);
        }
        
        /* Navy card - para secciones informativas */
        .navy-card {
          background: linear-gradient(145deg, var(--navy-deep) 0%, var(--charcoal) 100%);
          border: 1px solid rgba(27, 58, 75, 0.5);
        }
        
        /* Noise texture overlay */
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.02;
          z-index: 9999;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        
        /* ================================================================
           ANIMACIONES SUAVES
           ================================================================ */
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        
        /* ================================================================
           COMPONENTES UI
           ================================================================ */
        
        /* Botón primario - Alta conversión */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--gold-primary);
          color: var(--obsidian);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: var(--text-sm);
          padding: 0.875rem 1.75rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .btn-primary:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(201, 162, 39, 0.25);
        }
        
        /* Botón secundario - Outline */
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: transparent;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-weight: 500;
          font-size: var(--text-sm);
          padding: 0.875rem 1.75rem;
          border: 1px solid rgba(201, 162, 39, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .btn-secondary:hover {
          background: rgba(201, 162, 39, 0.1);
          border-color: var(--gold-primary);
          color: var(--gold-primary);
        }
        
        /* Service card con shimmer effect */
        .service-card {
          position: relative;
          overflow: hidden;
        }
        
        .service-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(201, 162, 39, 0.05), transparent);
          transition: left 0.6s ease;
        }
        
        .service-card:hover::after {
          left: 100%;
        }
        
        /* Input fields */
        .input-field {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(201, 162, 39, 0.2);
          padding: 0.875rem 1rem;
          font-family: var(--font-body);
          font-size: var(--text-base);
          color: var(--text-primary);
          transition: all 0.3s ease;
          outline: none;
        }
        
        .input-field:focus {
          border-color: var(--gold-primary);
          box-shadow: 0 0 0 3px rgba(201, 162, 39, 0.1);
        }
        
        .input-field::placeholder {
          color: var(--text-muted);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--obsidian);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--gold-dark);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: var(--gold-primary);
        }
        
        /* Selection */
        ::selection {
          background: var(--gold-primary);
          color: var(--obsidian);
        }
        
        /* Focus visible para accesibilidad */
        *:focus-visible {
          outline: 2px solid var(--gold-primary);
          outline-offset: 2px;
        }
        
        /* Responsive typography */
        @media (max-width: 768px) {
          html { font-size: 15px; }
          h1 { font-size: var(--text-4xl); }
          h2 { font-size: var(--text-3xl); }
        }
      `}</style>

      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C9A227] opacity-[0.012] rounded-full blur-[200px] transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1B3A4B] opacity-[0.025] rounded-full blur-[150px] transform -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#1E5631] opacity-[0.01] rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* ================================================================
          NAVEGACIÓN - Optimizada para conversión
          F-Pattern: Logo izq → Menú centro → CTA derecha
          ================================================================ */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 60 
            ? 'bg-[#08090A]/95 backdrop-blur-xl border-b border-[#C9A227]/10 py-3' 
            : 'py-5'
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12" role="navigation" aria-label="Navegación principal">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-3 group"
              aria-label="TransferTech IPValue - Inicio"
            >
              <div className="w-11 h-11 border-2 border-[#C9A227]/50 flex items-center justify-center transition-colors group-hover:border-[#C9A227]">
                <span className="text-[#C9A227] font-display text-xl font-semibold">T</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-display text-base tracking-wide text-[#F5F3EF] leading-tight">TransferTech</span>
                <span className="text-[#C9A227] font-display text-sm font-medium leading-tight">IPValue</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { label: 'Servicios', href: '#servicios' },
                { label: 'Metodología', href: '#metodologia' },
                { label: 'Casos de Éxito', href: '#casos' },
                { label: 'Recursos', href: '#recursos' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Contacto', href: '#contacto' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[14px] text-[#9CA3AF] hover:text-[#C9A227] transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A227] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Area */}
            <div className="hidden lg:flex items-center gap-5">
              <a 
                href="tel:+593996253317" 
                className="text-sm text-[#9CA3AF] hover:text-[#F5F3EF] transition-colors flex items-center gap-2"
              >
                <span className="text-[#C9A227]">📞</span>
                +593 996 253 317
              </a>
              <a
                href="https://wa.me/593996253317?text=Hola,%20me%20interesa%20una%20consulta%20sobre%20valoración%20de%20activos%20intangibles"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Consulta Gratuita
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#C9A227]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 bg-current transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-45 w-7' : 'w-6'}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 origin-left ${isMenuOpen ? '-rotate-45 w-7' : 'w-6'}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div 
          id="mobile-menu"
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#08090A]/98 backdrop-blur-xl border-b border-[#C9A227]/10 transition-all duration-400 ${
            isMenuOpen ? 'opacity-100 visible max-h-screen' : 'opacity-0 invisible max-h-0'
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-4">
            {['Servicios', 'Metodología', 'Casos de Éxito', 'Recursos', 'Nosotros', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-lg text-[#F5F3EF] hover:text-[#C9A227] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/593996253317"
              className="btn-primary text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Consulta Gratuita
            </a>
          </div>
        </div>
      </header>

      {/* ================================================================
          HERO SECTION - Z-Pattern + Neuromarketing
          
          Principios aplicados:
          - Headline claro en < 6 palabras
          - Propuesta de valor en subtítulo
          - Social proof inmediato
          - CTA de alta visibilidad
          - 2.6 segundos para captar atención
          ================================================================ */}
      <section 
        className="min-h-screen relative flex items-center pt-24 pb-16"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Trust badge - Primacy effect */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-[#C9A227]/5 border border-[#C9A227]/15 animate-fade-in-up">
                <span className="w-2 h-2 bg-[#1E5631] rounded-full animate-pulse-subtle" />
                <span className="text-xs tracking-[0.15em] uppercase text-[#C9A227] font-medium">
                  Primera empresa ecuatoriana con 100% capital intelectual
                </span>
              </div>

              {/* H1 - SEO optimizado */}
              <h1 
                id="hero-heading"
                className="font-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.1] tracking-tight animate-fade-in-up delay-100"
              >
                <span className="text-[#F5F3EF]">Valoración de</span>
                <br />
                <span className="text-gradient-gold">Activos Intangibles</span>
              </h1>

              {/* Value proposition - Claro y directo */}
              <p className="text-lg lg:text-xl text-[#9CA3AF] leading-relaxed animate-fade-in-up delay-200" style={{ maxWidth: '60ch' }}>
                Transformamos su <strong className="text-[#F5F3EF] font-medium">marca, software, patentes y know-how</strong> en 
                valor monetario para sus estados financieros bajo <strong className="text-[#C9A227] font-medium">NIC 38 y NIIF</strong>.
              </p>

              {/* Keywords semánticos ocultos para SEO */}
              <div className="sr-only">
                Consultoría especializada en valoración de activos intangibles en Ecuador. 
                Expertos en propiedad intelectual, transferencia tecnológica, due diligence de patentes,
                capitalización de software, registro de marcas SENADI, gestión de innovación y TRL.
              </div>

              {/* CTAs - Alta conversión */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                <a 
                  href="#servicios" 
                  className="btn-primary group"
                >
                  Ver Servicios
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="https://wa.me/593996253317?text=Solicito%20una%20auditoría%20inicial%20gratuita%20de%20mis%20activos%20intangibles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Auditoría Gratuita
                </a>
              </div>

              {/* Social proof - Métricas de confianza */}
              <div className="flex items-center gap-10 pt-4 animate-fade-in-up delay-400">
                {[
                  { value: '147+', label: 'Proyectos', sublabel: 'completados' },
                  { value: '$4.2M', label: 'USD', sublabel: 'valorados' },
                  { value: '17', label: 'Años', sublabel: 'experiencia' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl lg:text-3xl font-display font-semibold text-[#C9A227]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#9CA3AF] uppercase tracking-wide mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual - 5 columns */}
            <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center min-h-[500px]">
              {/* Decorative elements */}
              <div className="absolute w-[380px] h-[380px] border border-[#C9A227]/6 rounded-full animate-float" />
              <div className="absolute w-[280px] h-[280px] border border-[#C9A227]/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute w-[180px] h-[180px] border border-[#C9A227]/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />

              {/* Central hub */}
              <div className="relative z-10 glass-card p-6">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: '◈', label: 'Valoración', desc: 'NIC 38' },
                    { icon: '⬡', label: 'Propiedad IP', desc: 'Legal' },
                    { icon: '◇', label: 'Transferencia', desc: 'Tech' },
                    { icon: '◎', label: 'Innovación', desc: 'CTI' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 border border-[#C9A227]/8 hover:border-[#C9A227]/25 transition-all duration-300 text-center cursor-pointer group"
                    >
                      <div className="text-2xl mb-1.5 text-[#C9A227] group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="text-xs text-[#F5F3EF] font-medium">{item.label}</div>
                      <div className="text-[10px] text-[#9CA3AF]">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 right-8 glass-card px-4 py-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#1E5631]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#1E5631] text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#9CA3AF] uppercase">Cumplimiento</div>
                    <div className="text-sm font-medium text-[#F5F3EF]">NIC 38 / NIIF</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-8 glass-card px-4 py-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#C9A227]/15 rounded-full flex items-center justify-center">
                    <span className="text-[#C9A227] text-sm">↑</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#9CA3AF] uppercase">ROI Promedio</div>
                    <div className="text-sm font-medium text-[#F5F3EF]">+340%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2" aria-hidden="true">
          <span className="text-[10px] tracking-[0.25em] text-[#9CA3AF] uppercase">Explorar</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C9A227] to-transparent" />
        </div>
      </section>

      {/* ================================================================
          PROPUESTA DE VALOR - Por qué elegirnos
          ================================================================ */}
      <section className="py-20 bg-[#0A0B0D] border-y border-[#C9A227]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Especialización Única', desc: 'Única consultora ecuatoriana enfocada 100% en capital intelectual' },
              { icon: '📊', title: 'Metodología Rigurosa', desc: 'Estándares internacionales aceptados por Big Four y reguladores' },
              { icon: '🌎', title: 'Red Internacional', desc: 'Alianzas con hubs de innovación en Colombia, México y WIPO' },
              { icon: '⚡', title: 'Resultados Medibles', desc: '+$4.2M USD valorados, 98.7% precisión en informes' }
            ].map((item, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display text-lg text-[#F5F3EF] mb-2">{item.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SERVICIOS - Grid optimizado para scanning
          Keywords SEO integrados en cada servicio
          ================================================================ */}
      <section 
        id="servicios" 
        className="py-24 lg:py-32"
        aria-labelledby="servicios-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="max-w-3xl mb-16">
            <span className="text-[#C9A227] text-sm tracking-[0.15em] uppercase font-medium">
              Servicios Especializados
            </span>
            <h2 id="servicios-heading" className="font-display text-3xl lg:text-4xl mt-4 mb-6 text-[#F5F3EF]">
              Ingeniería de Valor para su Capital Intelectual
            </h2>
            <p className="text-lg text-[#9CA3AF]" style={{ maxWidth: '65ch' }}>
              Seis líneas de servicio diseñadas para maximizar el valor de sus activos intangibles, 
              desde la protección legal hasta la capitalización financiera y comercialización.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => (
              <article
                key={servicio.id}
                className={`service-card glass-card p-7 cursor-pointer transition-all duration-500 ${
                  activeService === index ? 'ring-1 ring-[#C9A227]/30' : ''
                }`}
                onClick={() => setActiveService(activeService === index ? null : index)}
                role="button"
                aria-expanded={activeService === index}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveService(activeService === index ? null : index)}
              >
                <header className="flex items-start justify-between mb-5">
                  <div 
                    className={`text-3xl transition-transform duration-300 ${activeService === index ? 'scale-110' : ''}`}
                    style={{ color: servicio.color }}
                  >
                    {servicio.icon}
                  </div>
                  <span className="text-xs text-[#9CA3AF] font-mono">0{servicio.id}</span>
                </header>

                <h3 className="font-display text-xl text-[#F5F3EF] mb-1.5">
                  {servicio.titulo}
                </h3>
                <p className="text-sm text-[#C9A227] mb-3 font-medium">
                  {servicio.subtitulo}
                </p>
                
                {/* Headline que genera matchmaking */}
                <p className="text-sm text-[#F5F3EF] mb-3 italic">
                  "{servicio.headline}"
                </p>
                
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {servicio.descripcion}
                </p>

                {/* Expanded content */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeService === index ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-5 border-t border-[#C9A227]/10">
                    {/* Features */}
                    <div className="mb-5">
                      <h4 className="text-xs text-[#9CA3AF] uppercase tracking-wide mb-3">Lo que incluye:</h4>
                      <ul className="space-y-2">
                        {servicio.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                            <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: servicio.color }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-5 p-4 bg-[#C9A227]/5 border-l-2 border-[#C9A227]">
                      <h4 className="text-xs text-[#C9A227] uppercase tracking-wide mb-2">Beneficios clave:</h4>
                      <ul className="space-y-1">
                        {servicio.beneficios.map((beneficio, i) => (
                          <li key={i} className="text-sm text-[#F5F3EF]">• {beneficio}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(servicio.metricas).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-[#C9A227]/5">
                          <div className="text-lg font-display font-semibold" style={{ color: servicio.color }}>
                            {value}
                          </div>
                          <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wide capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <footer className="flex items-center justify-between mt-5 pt-4 border-t border-[#C9A227]/10">
                  <span className="text-xs text-[#9CA3AF]">
                    {activeService === index ? 'Cerrar' : 'Ver detalles'}
                  </span>
                  <span className={`transition-transform duration-300 ${activeService === index ? 'rotate-180' : ''}`} style={{ color: servicio.color }}>
                    ↓
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          METODOLOGÍA - Proceso paso a paso
          ================================================================ */}
      <section 
        id="metodologia" 
        className="py-24 lg:py-32 bg-[#0A0B0D]"
        aria-labelledby="metodologia-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left column - Sticky */}
            <div className="lg:sticky lg:top-32">
              <span className="text-[#C9A227] text-sm tracking-[0.15em] uppercase font-medium">
                Metodologías de Valoración
              </span>
              <h2 id="metodologia-heading" className="font-display text-3xl lg:text-4xl mt-4 mb-6 text-[#F5F3EF]">
                Estándares Internacionales Certificados
              </h2>
              <p className="text-lg text-[#9CA3AF] mb-8" style={{ maxWidth: '55ch' }}>
                Aplicamos metodologías reconocidas globalmente y validadas por las principales 
                firmas de auditoría bajo estándares IFRS, NIC 38 y las guías de la WIPO.
              </p>

              {/* Methodology tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {metodologias.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMethodology(i)}
                    className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      activeMethodology === i
                        ? 'bg-[#C9A227] text-[#08090A]'
                        : 'border border-[#C9A227]/25 text-[#9CA3AF] hover:border-[#C9A227] hover:text-[#F5F3EF]'
                    }`}
                    aria-pressed={activeMethodology === i}
                  >
                    {m.nombre}
                  </button>
                ))}
              </div>

              {/* Active methodology detail */}
              <div className="navy-card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{metodologias[activeMethodology].icono}</span>
                  <div>
                    <h3 className="font-display text-xl text-[#F5F3EF]">
                      {metodologias[activeMethodology].nombre}
                    </h3>
                    <p className="text-sm text-[#C9A227]">
                      Referencia: {metodologias[activeMethodology].referencia}
                    </p>
                  </div>
                </div>
                
                <p className="text-[#9CA3AF] leading-relaxed mb-5">
                  {metodologias[activeMethodology].descripcion}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs text-[#9CA3AF] uppercase tracking-wide mb-2">Aplicación ideal:</h4>
                  <p className="text-sm text-[#F5F3EF]">{metodologias[activeMethodology].aplicacion}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {metodologias[activeMethodology].ventajas.map((v, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[#1E5631]/20 text-[#1E5631] text-xs font-medium">
                      ✓ {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Process timeline */}
            <div>
              <h3 className="text-sm text-[#9CA3AF] tracking-wide uppercase mb-8">
                Proceso de Valoración
              </h3>
              
              <div className="space-y-1">
                {[
                  { 
                    num: '01', 
                    title: 'Diagnóstico Inicial', 
                    desc: 'Identificación, clasificación y análisis preliminar de activos intangibles. Definición del alcance, objetivos y metodología óptima.',
                    duration: '1-2 semanas',
                    entregable: 'Propuesta técnica y económica'
                  },
                  { 
                    num: '02', 
                    title: 'Recopilación de Información', 
                    desc: 'Análisis de documentación legal, estados financieros, contratos, registros de PI y entrevistas con stakeholders clave.',
                    duration: '2-3 semanas',
                    entregable: 'Due diligence documental'
                  },
                  { 
                    num: '03', 
                    title: 'Modelamiento Financiero', 
                    desc: 'Construcción de modelos de proyección, estimación de parámetros, análisis de mercado y benchmarking sectorial.',
                    duration: '2-4 semanas',
                    entregable: 'Modelo Excel + memorándum técnico'
                  },
                  { 
                    num: '04', 
                    title: 'Validación y Análisis', 
                    desc: 'Validación cruzada de resultados, análisis de sensibilidad, escenarios y determinación de rangos de valor.',
                    duration: '1 semana',
                    entregable: 'Reporte de sensibilidad'
                  },
                  { 
                    num: '05', 
                    title: 'Entrega y Soporte', 
                    desc: 'Informe ejecutivo detallado, presentación a directorio/auditor y soporte durante proceso de revisión externa.',
                    duration: '1 semana',
                    entregable: 'Informe final certificado'
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 border border-[#C9A227]/25 flex items-center justify-center font-mono text-[#C9A227] text-sm group-hover:bg-[#C9A227] group-hover:text-[#08090A] transition-all duration-300">
                        {step.num}
                      </div>
                      {i < 4 && <div className="w-px flex-1 bg-gradient-to-b from-[#C9A227]/25 to-transparent mt-2" />}
                    </div>
                    <div className="pb-10 flex-1">
                      <h4 className="font-display text-lg text-[#F5F3EF] mb-2">{step.title}</h4>
                      <p className="text-sm text-[#9CA3AF] leading-relaxed mb-3" style={{ maxWidth: '45ch' }}>
                        {step.desc}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="text-xs text-[#C9A227] font-mono bg-[#C9A227]/10 px-2 py-1">
                          ⏱ {step.duration}
                        </span>
                        <span className="text-xs text-[#9CA3AF] bg-[#1B3A4B]/30 px-2 py-1">
                          📄 {step.entregable}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CASOS DE ÉXITO - Social proof
          ================================================================ */}
      <section 
        id="casos" 
        className="py-24 lg:py-32"
        aria-labelledby="casos-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-2xl mb-8 lg:mb-0">
              <span className="text-[#C9A227] text-sm tracking-[0.15em] uppercase font-medium">
                Casos de Éxito
              </span>
              <h2 id="casos-heading" className="font-display text-3xl lg:text-4xl mt-4 text-[#F5F3EF]">
                Resultados que Transforman Organizaciones
              </h2>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'empresa', label: 'Empresa' },
                { id: 'academia', label: 'Academia' },
                { id: 'gobierno', label: 'Gobierno' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#C9A227] text-[#08090A] font-medium'
                      : 'text-[#9CA3AF] hover:text-[#F5F3EF]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cases grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {casosFiltrados.map((caso, index) => (
              <article
                key={index}
                className="glass-card p-8 group"
                onMouseEnter={() => setHoveredCase(index)}
                onMouseLeave={() => setHoveredCase(null)}
              >
                <header className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#C9A227]/10 text-[#C9A227] text-xs font-medium mb-2">
                      {caso.sector}
                    </span>
                    <h3 className="font-display text-2xl text-[#F5F3EF]">
                      {caso.cliente}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-[#9CA3AF] font-mono">{caso.año}</span>
                    <p className="text-xs text-[#9CA3AF]">{caso.duracion}</p>
                  </div>
                </header>

                <h4 className="text-lg text-[#C9A227] mb-3 font-medium">{caso.proyecto}</h4>
                <p className="text-[#9CA3AF] leading-relaxed mb-4">{caso.descripcion}</p>

                {/* Desafío */}
                <div className="p-4 bg-[#1B3A4B]/20 border-l-2 border-[#1B3A4B] mb-4">
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-wide mb-1">Desafío:</p>
                  <p className="text-sm text-[#F5F3EF]">{caso.desafio}</p>
                </div>

                {/* Expanded results on hover */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  hoveredCase === index ? 'max-h-64' : 'max-h-0'
                }`}>
                  <div className="pb-4">
                    <p className="text-xs text-[#9CA3AF] uppercase tracking-wide mb-3">Resultados alcanzados:</p>
                    <ul className="grid gap-2">
                      {caso.resultados.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#F5F3EF]">
                          <span className="w-1.5 h-1.5 bg-[#1E5631] rounded-full mt-2 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <footer className="flex items-center justify-between pt-6 border-t border-[#C9A227]/10">
                  <div>
                    <p className="text-xs text-[#9CA3AF] uppercase">Impacto</p>
                    <p className="text-xl font-display font-semibold text-[#C9A227]">
                      {caso.impacto}
                    </p>
                  </div>
                  <span className="text-[#C9A227] group-hover:translate-x-2 transition-transform">→</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          TESTIMONIOS - Social proof reforzado
          ================================================================ */}
      <section className="py-20 bg-[#0A0B0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#C9A227] text-sm tracking-[0.15em] uppercase font-medium">
              Lo que dicen nuestros clientes
            </span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonios.map((t, i) => (
              <blockquote key={i} className="glass-card p-6">
                <p className="text-[#9CA3AF] leading-relaxed mb-6 italic">
                  "{t.texto}"
                </p>
                <footer className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#F5F3EF] font-medium">{t.autor}</p>
                    <p className="text-xs text-[#9CA3AF]">{t.empresa}</p>
                  </div>
                  <span className="text-[#C9A227] font-mono text-sm font-semibold">
                    {t.resultado}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          RED DE ALIADOS
          ================================================================ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C9A227] text-sm tracking-[0.15em] uppercase font-medium">
              Red Internacional
            </span>
            <h2 className="font-display text-3xl lg:text-4xl mt-4 mb-6 text-[#F5F3EF]">
              Conexiones Globales, Impacto Local
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Formamos parte de una red internacional de hubs de innovación, oficinas de transferencia 
              tecnológica y centros de propiedad intelectual en América Latina y el mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aliados.map((aliado, i) => (
              <div
                key={i}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0 text-2xl">
                  {aliado.logo}
                </div>
                <div>
                  <h4 className="font-display text-base text-[#F5F3EF]">{aliado.nombre}</h4>
                  <p className="text-sm text-[#9CA3AF]">{aliado.tipo}</p>
                  <span className="text-xs text-[#C9A227]">{aliado.pais}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          RECURSOS - Lead magnets para conversión
          ================================================================ */}
      <section 
        id="recursos" 
        className="py-24 lg:py-32 bg-[#0A0B0D]"
        aria-labelledby="recursos-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-[#C9A227] text-sm tracking-[0.15em] uppercase font-medium">
              Centro de Recursos
            </span>
            <h2 id="recursos-heading" className="font-display text-3xl lg:text-4xl mt-4 mb-6 text-[#F5F3EF]">
              Conocimiento Especializado Gratuito
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Descargue guías, metodologías y herramientas para gestionar mejor sus activos intangibles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recursos.map((recurso, i) => (
              <article key={i} className="glass-card p-6 group">
                <header className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#C9A227]/10 text-[#C9A227] text-xs font-medium">
                    {recurso.tipo}
                  </span>
                  <span className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity">📄</span>
                </header>
                
                <h4 className="font-display text-lg text-[#F5F3EF] mb-3 leading-snug">
                  {recurso.titulo}
                </h4>
                <p className="text-sm text-[#9CA3AF] mb-4 leading-relaxed">
                  {recurso.descripcion}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {recurso.temas.map((tema, j) => (
                    <span key={j} className="text-[10px] text-[#9CA3AF] bg-[#1B3A4B]/30 px-2 py-1">
                      {tema}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-[#9CA3AF] mb-4">
                  <span>{recurso.paginas} páginas</span>
                  <span>{recurso.descargas.toLocaleString()} descargas</span>
                </div>
                
                <button className="w-full py-2.5 border border-[#C9A227]/25 text-[#C9A227] text-sm font-medium hover:bg-[#C9A227] hover:text-[#08090A] transition-all duration-300">
                  Descargar Gratis
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          ABOUT / LIDERAZGO
          ================================================================ */}
      <section 
        id="nosotros" 
        className="py-24 lg:py-32"
        aria-labelledby="nosotros-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C9A227] text-sm tracking-[0.15em] uppercase font-medium">
                Liderazgo
              </span>
              <h2 id="nosotros-heading" className="font-display text-3xl lg:text-4xl mt-4 mb-2 text-[#F5F3EF]">
                Lenin Fernando Terán Carrillo
              </h2>
              <p className="text-[#C9A227] font-medium text-lg mb-6">Founder & CEO</p>

              <p className="text-[#9CA3AF] leading-relaxed mb-6" style={{ maxWidth: '55ch' }}>
                Profesional multidisciplinario con formación en Ingeniería Empresarial (EPN), Derecho (UTPL) 
                y Maestría en Gestión Tecnológica (UPB). Con 17 años de experiencia en gobierno, academia 
                y consultoría privada especializada.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Especialista en valoración de activos intangibles bajo NIC 38 e IFRS',
                  'Ex funcionario de SENESCYT y Registro Civil del Ecuador',
                  'Docente universitario en ESPE, UCE, Japan Tech',
                  'Mediador calificado por el Consejo de la Judicatura',
                  'Autor de investigaciones en vigilancia tecnológica e inteligencia competitiva',
                  'Articulador de ecosistemas CTI con experiencia en políticas públicas'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#C9A227] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#F5F3EF] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-[#C9A227]/25 flex items-center justify-center hover:bg-[#C9A227] hover:text-[#08090A] transition-all duration-300 text-[#C9A227]"
                  aria-label="LinkedIn de Lenin Terán"
                >
                  in
                </a>
                <a 
                  href="mailto:teranlenin@hotmail.com"
                  className="w-11 h-11 border border-[#C9A227]/25 flex items-center justify-center hover:bg-[#C9A227] hover:text-[#08090A] transition-all duration-300 text-[#C9A227]"
                  aria-label="Email de Lenin Terán"
                >
                  ✉
                </a>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center">
              <div className="aspect-square w-full max-w-md bg-gradient-to-br from-[#C9A227]/10 to-transparent flex items-center justify-center">
                <span className="text-[180px] font-display text-[#C9A227]/8 select-none">T</span>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-[#C9A227]/10" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-[#C9A227]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ - SEO y matchmaking
          ================================================================ */}
      <section className="py-24 lg:py-32 bg-[#0A0B0D]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm tracking-[0.15em] uppercase font-medium">
              Preguntas Frecuentes
            </span>
            <h2 className="font-display text-3xl lg:text-4xl mt-4 text-[#F5F3EF]">
              Lo que nuestros clientes preguntan
            </h2>
          </div>

          <div className="space-y-4">
            {preguntasFrecuentes.map((faq, i) => (
              <details key={i} className="glass-card group">
                <summary className="p-6 cursor-pointer flex items-center justify-between text-[#F5F3EF] font-display text-lg">
                  {faq.pregunta}
                  <span className="text-[#C9A227] group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-[#9CA3AF] leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CONTACTO - Formulario de alta conversión
          ================================================================ */}
      <section 
        id="contacto" 
        className="py-24 lg:py-32"
        aria-labelledby="contacto-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#C9A227] text-sm tracking-[0.15em] uppercase font-medium">
                Contacto
              </span>
              <h2 id="contacto-heading" className="font-display text-3xl lg:text-4xl mt-4 mb-6 text-[#F5F3EF]">
                ¿Listo para Capitalizar su Conocimiento?
              </h2>
              <p className="text-lg text-[#9CA3AF] mb-10" style={{ maxWidth: '50ch' }}>
                Agende una consulta inicial sin costo para evaluar el potencial de valoración 
                de sus activos intangibles y recibir un diagnóstico preliminar.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: '📍', label: 'Ubicación', value: 'Quito, Ecuador', href: null },
                  { icon: '📞', label: 'Teléfono', value: '+593 996 253 317', href: 'tel:+593996253317' },
                  { icon: '✉', label: 'Email', value: 'teranlenin@hotmail.com', href: 'mailto:teranlenin@hotmail.com' },
                  { icon: '💬', label: 'WhatsApp', value: 'Mensaje directo', href: 'https://wa.me/593996253317' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm text-[#9CA3AF]">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-[#F5F3EF] hover:text-[#C9A227] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[#F5F3EF]">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick CTA */}
              <a
                href="https://wa.me/593996253317?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20sobre%20valoración%20de%20activos%20intangibles"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Agendar por WhatsApp →
              </a>
            </div>

            {/* Contact form */}
            <div className="glass-card p-8">
              <h3 className="font-display text-xl text-[#F5F3EF] mb-6">Solicitar Consulta</h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="text-sm text-[#9CA3AF] mb-2 block">
                      Nombre completo *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="input-field"
                      placeholder="Su nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-[#9CA3AF] mb-2 block">
                      Email corporativo *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                      placeholder="email@empresa.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="empresa" className="text-sm text-[#9CA3AF] mb-2 block">
                      Empresa / Institución
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="input-field"
                      placeholder="Nombre de su organización"
                    />
                  </div>
                  <div>
                    <label htmlFor="cargo" className="text-sm text-[#9CA3AF] mb-2 block">
                      Cargo
                    </label>
                    <input
                      id="cargo"
                      type="text"
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      className="input-field"
                      placeholder="CEO, CFO, Director..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servicio" className="text-sm text-[#9CA3AF] mb-2 block">
                    Servicio de interés *
                  </label>
                  <select
                    id="servicio"
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="input-field bg-[#08090A]"
                    required
                  >
                    <option value="">Seleccione un servicio</option>
                    {servicios.map((s) => (
                      <option key={s.id} value={s.titulo}>{s.titulo}</option>
                    ))}
                    <option value="otro">Otro / No estoy seguro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="text-sm text-[#9CA3AF] mb-2 block">
                    ¿Cómo podemos ayudarle?
                  </label>
                  <textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Describa brevemente su necesidad o proyecto..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary py-4 text-base">
                  Enviar Solicitud
                </button>

                <p className="text-xs text-[#9CA3AF] text-center">
                  Al enviar acepta nuestra política de privacidad. Responderemos en menos de 24 horas hábiles.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER
          ================================================================ */}
      <footer className="py-16 border-t border-[#C9A227]/10" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border-2 border-[#C9A227]/50 flex items-center justify-center">
                  <span className="text-[#C9A227] font-display text-lg font-semibold">T</span>
                </div>
                <div>
                  <span className="font-display text-base text-[#F5F3EF]">TransferTech</span>
                  <span className="text-[#C9A227] font-display text-base font-medium">IPValue</span>
                </div>
              </div>
              <p className="text-sm text-[#9CA3AF] leading-relaxed" style={{ maxWidth: '40ch' }}>
                Primera empresa ecuatoriana constituida con 100% de capital intelectual. 
                Especialistas en valoración de activos intangibles, propiedad intelectual 
                y transferencia tecnológica.
              </p>
              <p className="text-xs text-[#9CA3AF] mt-4">
                RUC: XXXXXXXXXX | S.A.S. B.I.C.
              </p>
            </div>

            <div>
              <h4 className="font-display text-base text-[#F5F3EF] mb-4">Servicios</h4>
              <ul className="space-y-2">
                {servicios.slice(0, 4).map((s) => (
                  <li key={s.id}>
                    <a href="#servicios" className="text-sm text-[#9CA3AF] hover:text-[#C9A227] transition-colors">
                      {s.titulo}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base text-[#F5F3EF] mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Aviso de Privacidad', 'Términos de Servicio', 'Política de Cookies'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#C9A227] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#C9A227]/10">
            <p className="text-sm text-[#9CA3AF]">
              © 2026 TransferTech IPValue S.A.S. B.I.C. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <span className="text-xs text-[#9CA3AF] font-mono">v12.0.0</span>
              <span className="w-2 h-2 bg-[#1E5631] rounded-full animate-pulse-subtle" />
              <span className="text-xs text-[#1E5631] font-medium">Elite</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ================================================================
          FLOATING WHATSAPP CTA - Alta visibilidad
          ================================================================ */}
      <a
        href="https://wa.me/593996253317?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20valoración%20de%20activos%20intangibles"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Schema.org Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "TransferTech IPValue",
            "description": "Consultora especializada en valoración de activos intangibles, propiedad intelectual y transferencia tecnológica en Ecuador",
            "url": "https://transfertech-ipvalue.com",
            "telephone": "+593996253317",
            "email": "teranlenin@hotmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Quito",
              "addressCountry": "EC"
            },
            "founder": {
              "@type": "Person",
              "name": "Lenin Fernando Terán Carrillo",
              "jobTitle": "Founder & CEO"
            },
            "serviceType": [
              "Valoración de Activos Intangibles",
              "Propiedad Intelectual",
              "Transferencia Tecnológica",
              "Gestión de Innovación"
            ],
            "areaServed": "Ecuador",
            "priceRange": "$$"
          })
        }}
      />
    </div>
  )
}
