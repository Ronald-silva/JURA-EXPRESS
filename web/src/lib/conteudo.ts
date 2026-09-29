/**
 * Conteúdo da página, centralizado para edição rápida durante a apresentação.
 *
 * Os textos vêm do site atual (juraexpress.com.br), reescritos para falar com
 * um público só: a empresa que contrata entregas. O recrutamento de motoboys
 * sai da página principal e fica como link discreto.
 *
 * Campos marcados A_CONFIRMAR são dados que só a Jura Express tem. Aparecem na
 * interface como espaço reservado visível, nunca como número inventado.
 */

export const A_CONFIRMAR = null;

export const EMPRESA = {
  nome: "Jura Express",
  /** O melhor ativo da marca. Estava em letra miúda no rodapé do site antigo. */
  assinatura: "Juro que chega rápido!",
  instagram: "juraexpressbrasil",
  instagramUrl: "https://instagram.com/juraexpressbrasil",
  email: "suporte@juraexpress.com",
  site: "juraexpress.com.br",
  /** Preencher antes da apresentação: é o maior vazamento de leads do site atual. */
  whatsapp: A_CONFIRMAR as string | null,
  cidade: A_CONFIRMAR as string | null,
  playStoreUrl: A_CONFIRMAR as string | null,
};

/** Assinatura técnica de quem desenvolve o site. */
export const DESENVOLVEDOR = {
  nome: "RonalDigital Tech",
  url: "https://www.ronaldigital.tech/",
};

export const HERO = {
  sobretitulo: "Plataforma de entregas",
  titulo: "Juro que chega rápido.",
  subtitulo:
    "Motoboys credenciados, rastreamento em tempo real e um painel onde você acompanha cada etapa. Sua operação de entregas funcionando sem você precisar administrar motoboy.",
  // Curto de propósito: com "Pedir orçamento no WhatsApp" o botão quebrava em
  // duas linhas entre 1024 e 1440px. O ícone já diz qual é o canal.
  ctaPrimario: "Orçamento no WhatsApp",
  ctaSecundario: "Calcular quanto economizo",
};

/** Provas de operação real, extraídas do site atual. Substituem adjetivos por factos. */
export const PROVAS = [
  { rotulo: "App próprio", detalhe: "Disponível na Google Play" },
  { rotulo: "Entregas seguradas", detalhe: "Parceria com a 88i Seguradora" },
  { rotulo: "Motoboys credenciados", detalhe: "Treinados e identificados" },
  { rotulo: "Rastreamento", detalhe: "Acompanhamento em tempo real" },
];

export const DIFERENCIAIS = [
  {
    icone: "Gauge",
    titulo: "Eficiência operacional",
    texto:
      "Gestão de entregas com pontualidade e precisão em cada serviço, sem você ter de coordenar rotas.",
  },
  {
    icone: "Radar",
    titulo: "Tecnologia de ponta",
    texto:
      "Sistema e aplicativo com rastreamento em tempo real: você acompanha cada entrega do pedido à confirmação.",
  },
  {
    icone: "Headset",
    titulo: "Atendimento dedicado",
    texto:
      "Equipe pronta para resolver imprevistos da sua operação — não um formulário sem resposta.",
  },
  {
    icone: "ShieldCheck",
    titulo: "Segurança em cada etapa",
    texto:
      "Roteirização específica, entregadores treinados e cobertura de seguradora para a integridade das entregas.",
  },
];

export const SERVICOS = [
  {
    icone: "Package",
    titulo: "Entregas convencionais",
    texto:
      "Eletrônicos, roupas, livros, lanches, alimentos, medicamentos e encomendas do dia a dia.",
    exemplos: ["Restaurantes", "Farmácias", "Lojas", "E-commerce"],
  },
  {
    icone: "Gift",
    titulo: "Entregas especializadas",
    texto:
      "Informativos, convites, brindes e encomendas que exigem cuidado e comprovação de entrega.",
    exemplos: ["Convites", "Brindes", "Informativos", "Documentos"],
  },
  {
    icone: "Route",
    titulo: "Logística personalizada",
    texto:
      "Construímos um serviço sob medida para a sua empresa, tratando a sua logística como única.",
    exemplos: ["Rotas fixas", "Volume alto", "Horário dedicado", "SLA próprio"],
  },
];

export const FERRAMENTAS = [
  {
    icone: "MonitorSmartphone",
    titulo: "Web Panel",
    texto:
      "Solicite entregas, acompanhe status e consulte o histórico completo da operação pelo navegador.",
    itens: [
      "Pedidos em tempo real",
      "Histórico e relatórios",
      "Gestão de endereços",
    ],
  },
  {
    icone: "Smartphone",
    titulo: "App Mobile",
    texto:
      "O aplicativo da Jura Express acompanha a entrega do despacho à confirmação, direto no celular.",
    itens: ["Rastreio ao vivo", "Notificações", "Comprovante digital"],
  },
];

export const FAQ = [
  {
    pergunta: "Como começo a usar a Jura Express?",
    resposta:
      "Você fala com a nossa equipe pelo WhatsApp, entende o volume e o perfil das suas entregas, e recebe uma proposta. O cadastro no Web Panel é feito junto com você.",
  },
  {
    pergunta: "Vocês atendem qual região?",
    resposta:
      "Fale com a nossa equipe para confirmar a cobertura no seu endereço e o prazo para a sua região.",
  },
  {
    pergunta: "Como acompanho minhas entregas?",
    resposta:
      "Pelo Web Panel no navegador ou pelo aplicativo. Você vê o status de cada entrega em tempo real, do despacho à confirmação.",
  },
  {
    pergunta: "E se acontecer algo com a encomenda?",
    resposta:
      "Nossas entregas contam com cobertura da 88i Seguradora Digital, e nossos entregadores são motociclistas credenciados e treinados.",
  },
  {
    pergunta: "Preciso de contrato ou volume mínimo?",
    resposta:
      "Montamos o formato conforme a sua operação: da demanda pontual à rota fixa dedicada. Fale com a equipe para avaliar o seu caso.",
  },
];
