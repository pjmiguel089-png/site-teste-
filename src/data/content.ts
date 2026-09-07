import { ServiceItem, CaseStudy, Testimonial, StatMetric } from '../types';

export const AGENCY_INFO = {
  name: "Luiz Miguel Ramos Lima Carneiro",
  shortName: "Luiz Miguel",
  badge: "Transforme seu negócio digital",
  slogan: "Engenharia de tráfego, dados e conversão para marcas que recusam o segundo lugar.",
  phone: "(81) 99413-8431",
  rawPhone: "5581994138431",
  address: "Avenida dos Girassóis, 03",
  email: "contato@luizmiguellima.com.br",
  consultationCta: "Agendar Consultoria Gratuita",
  primaryCta: "Entrar em contato",
};

export const STATS: StatMetric[] = [
  {
    id: "clients",
    value: 350,
    suffix: "+",
    label: "Clientes Escaldos",
    sublabel: "Negócios transformados em líderes de seus nichos"
  },
  {
    id: "leads",
    value: 12,
    suffix: "M+",
    label: "Leads Qualificados Gerados",
    sublabel: "Volume expressivo com alta taxa de conversão em vendas"
  },
  {
    id: "satisfaction",
    value: 98,
    suffix: "%",
    label: "Taxa de Satisfação",
    sublabel: "Retenção contratual e relacionamento de longo prazo"
  },
  {
    id: "roi",
    value: 5,
    suffix: "x",
    label: "ROI Médio Comprovado",
    sublabel: "Multiplicação sustentável de capital investido em mídia"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "seo",
    title: "SEO de Alta Performance",
    tagline: "Domínio orgânico absoluto nas primeiras posições de busca.",
    category: "Busca Orgânica",
    badge: "Volume & Autoridade",
    iconName: "Search",
    description: "Estruturamos arquiteturas semânticas complexas, otimização Core Web Vitals e autoridade temática para capturar intenção de compra antes de qualquer concorrente.",
    deliverables: [
      "Auditoria Técnica Profunda e Correção de Core Web Vitals",
      "Mapeamento de Palavras-Chave de Alta Intenção Transacional",
      "Clusterização Semântica e Estratégia de Topic Clusters",
      "Link Building Institucional e RP Digital de Alto DA"
    ],
    metrics: "+340% de tráfego orgânico médio em 6 meses"
  },
  {
    id: "trafego-pago",
    title: "Tráfego Pago & Performance Escalar",
    tagline: "Escala agressiva com previsibilidade cirúrgica de CAC e ROAS.",
    category: "Mídia Paga",
    badge: "Escala Imediata",
    iconName: "TrendingUp",
    description: "Gestão científica de capital em Meta Ads, Google Ads, TikTok e LinkedIn Ads. Testes contínuos de criativos, lookalike de alto valor e bidding inteligente.",
    deliverables: [
      "Campanhas de Google Search, Performance Max & YouTube Ads",
      "Meta Ads (Instagram/Facebook) com Funil de Retargeting Dinâmico",
      "Modelos Preditivos de Lance para Minimização de CAC",
      "Framework de Teste Contínuo de Criativos em Escala"
    ],
    metrics: "ROAS médio consolidado de 4.8x a 8.2x"
  },
  {
    id: "branding",
    title: "Branding & Autoridade de Marca",
    tagline: "Percepção de luxo e diferenciação contra comoditização.",
    category: "Identidade & Valor",
    badge: "Alto Ticket",
    iconName: "Crown",
    description: "Posicionamos seu negócio como o padrão de excelência de mercado. Elevamos o valor percebido para destravar cobrança de preços premium e lealdade genuína.",
    deliverables: [
      "Identidade Visual Contemporânea e Diretrizes de Marca",
      "Manifesto de Marca, Tom de Voz e Posicionamento Único",
      "Design de Interfaces e Experiência Digital de Nível Internacional",
      "Assets Gráficos e Direção de Arte de Alto Padrão"
    ],
    metrics: "Aumento médio de +45% no ticket médio percebido"
  },
  {
    id: "social-media",
    title: "Social Media Estratégica",
    tagline: "Comunidade engajada com narrativa desenhada para vender.",
    category: "Engajamento",
    badge: "Retenção & Conexão",
    iconName: "Share2",
    description: "Não produzimos postagens vazias. Criamos linhas editoriais afiadas, com roteiros hipnóticos que constroem audiência fiel e geram leads diários nos canais sociais.",
    deliverables: [
      "Planejamento Editorial Estratégico Alinhado a Metas de Venda",
      "Roteirização Especializada para Reels, Shorts e TikTok",
      "Estratégia de Gestão de Crise e SAC 3.0 Humanizado",
      "Colaborações com Criadores e Micro-Influenciadores de Nicho"
    ],
    metrics: "Taxas de engajamento 3.2x superiores à média do mercado"
  },
  {
    id: "email-marketing",
    title: "Email Marketing & Automação",
    tagline: "Máxima monetização da sua base através de fluxos inteligentes.",
    category: "LTV & Retenção",
    badge: "Receita Recorrente",
    iconName: "Mail",
    description: "Desenvolvemos réguas automatizadas de nutrição, carrinhos abandonados, pós-venda e cross-sell que transformam contatos inativos em receita previsível todos os dias.",
    deliverables: [
      "Segmentação Dinâmica por Comportamento de Compra e RFM",
      "Fluxos de Boas-vindas, Abandono de Checkout e Reengajamento",
      "Copywriting Persuasivo com Testes A/B de Assuntos e CTAs",
      "Integrações Avançadas com CRMs (HubSpot, RD Station, ActiveCampaign)"
    ],
    metrics: "Representatividade de até 35% do faturamento total"
  },
  {
    id: "analytics",
    title: "Analytics & Inteligência de Dados",
    tagline: "Decisões baseadas em números reais, não em intuição.",
    category: "Business Intelligence",
    badge: "Precisão Cirúrgica",
    iconName: "BarChart3",
    description: "Implementamos infraestrutura de medição de ponta com GA4 Server-Side, dashboards executivos em tempo real e modelagem de atribuição para eliminar desperdício de verba.",
    deliverables: [
      "Configuração de GA4 Server-Side e API de Conversões (CAPI)",
      "Dashboards Executivos Customizados com KPIs em Tempo Real",
      "Modelagem de Atribuição Multi-Touch e Análise de Coorte",
      "Auditoria Semanal de Desempenho e Rebalanceamento de Verba"
    ],
    metrics: "Redução de até 28% no desperdício de orçamento de mídia"
  }
];

export const CASES: CaseStudy[] = [
  {
    id: "case-1",
    client: "Imperium Tech & SaaS",
    segment: "B2B Software Enterprise",
    growth: "+480%",
    timeline: "9 meses de aceleração",
    description: "Reestruturação completa da jornada de captação de leads corporativos com campanhas de Google Search de alta intenção e automação de qualificação SDR.",
    metrics: [
      { label: "CAC Reduzido", value: "-52%", trend: "down" },
      { label: "Leads Qualificados (SQL)", value: "14.200+", trend: "up" },
      { label: "Faturamento Anual Gerado", value: "R$ 8.4M", trend: "up" }
    ],
    quote: "A equipe do Luiz Miguel profissionalizou nosso processo de aquisição. Saímos da dependência de indicações para uma máquina previsível com mais de 100 demonstrações por semana.",
    author: "Rafael Vasconcelos",
    role: "Chief Revenue Officer",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "case-2",
    client: "Vitalis Pet Care & Nutrição",
    segment: "E-commerce & Alimentação Pet Premium",
    growth: "+620%",
    timeline: "6 meses de campanha",
    description: "Lançamento de produto e tração com estratégias combinadas de criativos de alta conversão no Meta Ads, SEO para termos de saúde pet e fluxos de recompra por email.",
    metrics: [
      { label: "ROAS Consolidado", value: "6.8x", trend: "up" },
      { label: "Taxa de Recompra (LTV)", value: "+74%", trend: "up" },
      { label: "Assinaturas Recorrentes", value: "3.850+", trend: "up" }
    ],
    quote: "Eles entenderam a fundo as dores do tutor de pet exigente. Em apenas um semestre nos tornamos a marca mais lembrada no segmento de alimentação natural para pets.",
    author: "Dra. Camila Albuquerque",
    role: "Fundadora & Diretora Executiva",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "case-3",
    client: "Aura Haute Joalheria",
    segment: "Varejo de Luxo & Alta Renda",
    growth: "+310%",
    timeline: "12 meses de gestão",
    description: "Posicionamento de marca de alto padrão com campanhas hipersegmentadas para o público classe A, remarketing com catálogo dinâmico exclusivo e atendimento VIP.",
    metrics: [
      { label: "Ticket Médio", value: "R$ 4.250", trend: "up" },
      { label: "ROI Total", value: "7.4x", trend: "up" },
      { label: "Novos Clientes VIP", value: "1.920+", trend: "up" }
    ],
    quote: "O refinamento estético e o respeito ao nosso posicionamento de luxo foram impecáveis. Luiz Miguel e sua equipe entregam o que nenhuma agência tradicional conseguiu.",
    author: "Rodrigo Mendonça",
    role: "Diretor Comercial",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Carlos Eduardo Mendes",
    role: "CEO & Co-fundador",
    company: "Veloce Commerce Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    text: "A agência do Luiz Miguel transformou nosso tráfego de um custo incerto em uma máquina matemática e previsível de receita. Saímos de R$ 350k/mês para mais de R$ 1.8M com ROI consistente de 5.4x. Não há agência no Brasil que opere nesse nível de seriedade.",
    rating: 5,
    highlight: "Multiplicação de 5.4x no ROI em 8 meses",
    metric: "R$ 1.8M/mês"
  },
  {
    id: "test-2",
    name: "Dra. Mariana Fontes",
    role: "Diretora de Operações",
    company: "VitalPet & Saúde Animal",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    text: "Trabalhar com o Luiz Miguel nos deu a clareza que faltava. Eles reduziram nosso custo de aquisição por lead em 62% e posicionaram nossa marca como autoridade indiscutível. O suporte e a atenção aos mínimos detalhes são impressionantes.",
    rating: 5,
    highlight: "-62% no Custo de Aquisição (CAC)",
    metric: "-62% CAC"
  },
  {
    id: "test-3",
    name: "Rafael Nogueira",
    role: "Head de Growth",
    company: "Nexus Scale B2B Tech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    text: "Eles não entregam relatórios com métricas de vaidade. Entregam contratos assinados, leads pré-qualificados e dinheiro em caixa. Toda semana temos reuniões de alinhamento com insights que moldam a nossa estratégia de produto.",
    rating: 5,
    highlight: "+12.000 leads qualificados entregues",
    metric: "+12k Leads"
  }
];

export const TRUST_PARTNERS = [
  { name: "Google Partner Premier", tag: "Premier 2026" },
  { name: "Meta Business Partner", tag: "Tier 1 Elite" },
  { name: "TikTok Marketing Partner", tag: "Certified" },
  { name: "HubSpot Platinum Agency", tag: "Certified Partner" },
  { name: "SEMrush Master", tag: "Data Partner" },
  { name: "Klaviyo Elite Advisor", tag: "Lifecycle Expert" }
];
