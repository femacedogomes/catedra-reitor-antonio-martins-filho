import type { HomepageData, NavigationData, FooterData } from "@/types";

// ─── Dados reais da Cátedra Reitor Antônio Martins Filho ─────────────────────

export const mockNavigation: NavigationData = {
  logoText: "CATEDRA",
  links: [
    { label: "A Cátedra", href: "/sobre-nos" },
    { label: "Responsáveis", href: "/responsaveis" },
    { label: "Bolsa Reitoral", href: "/bolsa-reitoral" },
    { label: "Edital", href: "/bolsa-reitoral/edital" },
    { label: "Notícias", href: "/noticias" },
    { label: "Contato", href: "/contato" },
  ],
  ctaLabel: "Inscreva-se",
  ctaHref: "https://forms.gle/83f89QL11ubfgoXPA",
};

export const mockFooter: FooterData = {
  logoText: "CATEDRA",
  tagline: "Cátedra Reitor Antônio Martins Filho: Liderança para o Desenvolvimento Nacional e do Ceará a partir da Educação",
  columns: [
    {
      title: "A Cátedra",
      links: [
        { label: "Quem Somos", href: "/about" },
        { label: "Reitor Antônio Martins Filho", href: "/about/reitor" },
        { label: "Colégio de Estudos Avançados", href: "/about/cea" },
        { label: "Instituto Mucuripe", href: "/about/mucuripe" },
        { label: "Parceiros e Financiadores", href: "/about/parceiros" },
      ],
    },
    {
      title: "Bolsa Reitoral",
      links: [
        { label: "Como Funciona", href: "/bolsa-reitoral" },
        { label: "Edital Completo", href: "/bolsa-reitoral/edital" },
        { label: "Cronograma", href: "/bolsa-reitoral/cronograma" },
        { label: "Perguntas Frequentes", href: "/bolsa-reitoral/faq" },
        { label: "Inscrições", href: "https://forms.gle/83f89QL11ubfgoXPA" },
      ],
    },
    {
      title: "Formação",
      links: [
        { label: "Trilha Teórica", href: "/formacao/trilha-teorica" },
        { label: "Trilha Prática", href: "/formacao/trilha-pratica" },
        { label: "Residência e Mentoria", href: "/formacao/residencia-mentoria" },
        { label: "Projeto de Conclusão", href: "/formacao/projeto-conclusao" },
        { label: "Perfil do Egresso", href: "/formacao/perfil-egresso" },
      ],
    },
    {
      title: "Institucional",
      links: [
        { label: "Universidade Federal do Ceará", href: "https://ufc.br" },
        { label: "Instituto Mucuripe", href: "https://institutomucuripe.org.br" },
        { label: "Fundação CETREDE", href: "https://cetrede.com.br" },
        { label: "Contato: catedraramf@ufc.br", href: "mailto:catedraramf@ufc.br" },
        { label: "Notícias", href: "/noticias" },
      ],
    },
  ],
  socialLinks: [
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "linkedin", href: "https://linkedin.com" },
    { platform: "youtube", href: "https://youtube.com" },
    { platform: "facebook", href: "https://facebook.com" },
    { platform: "twitter", href: "https://twitter.com" },
  ],
  copyright: "© 2025 Cátedra Reitor Antônio Martins Filho — UFC. Todos os direitos reservados.",
};

export const mockHomepage: HomepageData = {
  hero: {
    eyebrow: "Universidade Federal do Ceará — CEA/UFC",
    title: "Liderança para o\nDesenvolvimento Nacional\ne do Ceará",
    subtitle: "A primeira Cátedra da história da UFC e do Estado do Ceará. Formando os próximos líderes do setor público, privado e social.",
    ctaLabel: "Inscreva-se na Bolsa Reitoral",
    ctaHref: "https://forms.gle/83f89QL11ubfgoXPA",
    backgroundImage: { asset: { url: "/images/hero-background-1.png" } },
  },

  aboutSection: {
    eyebrow: "Cátedra Reitor Antônio Martins Filho",
    title: "Uma formação diferenciada para transformar o Ceará",
    description: "A Cátedra Reitor Antônio Martins Filho trabalha temas fundamentais da sociedade sob a ótica da história, da política, da economia e da área jurídica. Desenvolvida pela UFC em parceria com o Instituto Mucuripe, inaugura um ciclo de sete cátedras temáticas no âmbito do Colégio de Estudos Avançados.",
    tabs: [
      {
        label: "História",
        content: "Antônio Martins Filho foi fundador e primeiro reitor da UFC, responsável pela criação de não apenas 1, mas 3 universidades no Ceará no Século XX. Um feito revolucionário que moldou o ensino superior no estado e inspira a missão desta Cátedra.",
      },
      {
        label: "Formação",
        content: "1.500 horas distribuídas em 15 meses, com trilhas teórica e prática, residência em liderança com 4h semanais junto ao mentor, oficinas de competências e projeto de conclusão com impacto social real.",
      },
      {
        label: "Bolsistas",
        content: "21 vagas para estudantes de graduação da UFC com carga horária entre 40% e 75% integralizada. Os bolsistas ficam diretamente vinculados ao Gabinete do Reitor, que atua como patrono ao longo de todo o processo formativo.",
      },
    ],
    highlights: [
      { text: "Primeira Cátedra da história da UFC e do Ceará" },
      { text: "Parceria UFC + Instituto Mucuripe" },
      { text: "Financiada por emenda do Dep. Mauro Benevides Filho" },
      { text: "Mentoria com líderes do setor público, privado e social" },
    ],
    ctaLabel: "Conheça o Programa",
    ctaHref: "/bolsa-reitoral",
    leftImage: { asset: { url: "/images/about-left-image-1.png" } },
    badgeLabel: "Anos da UFC em 2026",
    badgeValue: "70",
  },

  statsBar: [
    {
      icon: "GraduationCap",
      value: "21",
      label: "Bolsas Disponíveis",
      description: "7 vagas reservadas para ações afirmativas (negros, indígenas, quilombolas e PcD)",
    },
    {
      icon: "BookOpen",
      value: "1.500h",
      label: "Carga Horária Total",
      description: "100 horas mensais ao longo de 15 meses — fev/2026 a abr/2027",
    },
    {
      icon: "Users",
      value: "R$ 1.500",
      label: "Bolsa Mensal",
      description: "Sem taxa de inscrição, mensalidade ou qualquer cobrança durante a vigência",
    },
  ],

  programsSection: {
    eyebrow: "Eixos do Programa",
    title: "Uma Formação Integral de 15 Meses",
    ctaLabel: "Ver Carga Horária Completa",
    ctaHref: "/formacao",
    programs: [
      {
        _id: "1",
        title: "Trilha Teórica",
        degree: "Seminários",
        description: "Pesquisa bibliográfica, ensaios acadêmicos e seminários com convidados. Temas: história do Brasil e do Ceará, organização política e econômica, agendas e desafios do século XXI. Total: 462h.",
        slug: { current: "trilha-teorica" },
      },
      {
        _id: "2",
        title: "Trilha Prática",
        degree: "Oficinas",
        description: "Oficinas voltadas ao desenvolvimento de habilidades práticas de liderança para o século XXI: gestão estratégica, comunicação institucional, negociação e tomada de decisão. Total: 60h.",
        slug: { current: "trilha-pratica" },
      },
      {
        _id: "3",
        title: "Residência e Mentoria",
        degree: "Mentoria",
        description: "Um mentor exclusivo para cada bolsista, escolhido entre líderes consolidados do setor de atuação desejado. 4 horas semanais de residência presencial ao longo de 10 meses. Total: 196h.",
        slug: { current: "residencia-mentoria" },
      },
      {
        _id: "4",
        title: "Projeto de Conclusão",
        degree: "Projeto Final",
        description: "Proposta de estratégia de intervenção ou política pública, elaborada em grupo sob orientação de tutores e mentores. Avaliada por banca especializada com potencial de captação de fomento. Total: 200h.",
        slug: { current: "projeto-conclusao" },
      },
    ],
  },

  applicationForm: {
    title: "Inscreva-se na Bolsa Reitoral",
    subtitle: "Inscrições de 15/10 a 14/11/2025 exclusivamente pelo formulário oficial. Não há taxa de inscrição. Dúvidas: catedraramf@ufc.br",
    fields: [
      { name: "firstName", label: "Nome", type: "text", placeholder: "Nome", required: true, halfWidth: true },
      { name: "lastName", label: "Sobrenome", type: "text", placeholder: "Sobrenome", required: true, halfWidth: true },
      { name: "email", label: "E-mail institucional UFC", type: "email", placeholder: "seu@alu.ufc.br", required: true, halfWidth: true },
      { name: "phone", label: "Telefone / WhatsApp", type: "tel", placeholder: "(85) 9 0000-0000", required: true, halfWidth: true },
      { name: "course", label: "Curso de Graduação", type: "text", placeholder: "Ex: Direito, Engenharia, Medicina...", required: true, halfWidth: true },
      { name: "semester", label: "% da CH Integralizada", type: "text", placeholder: "Entre 40% e 75%", required: true, halfWidth: true },
      { name: "message", label: "Projeto Pessoal de Liderança", type: "textarea", placeholder: "Descreva brevemente seu projeto de liderança e por que quer ser bolsista reitoral...", required: false, halfWidth: false },
    ],
    submitLabel: "Ir para o Formulário Oficial de Inscrição",
  },

  coordinatorsSection: {
    eyebrow: "Quem Acredita na Cátedra",
    title: "Vozes do Programa",
    ctaLabel: "Saiba Mais",
    ctaHref: "/about",
    coordinators: [
      {
        _id: "1",
        name: "João Bosco Ribeiro Neto",
        role: "Presidente do Instituto Mucuripe de Liderança e Desenvolvimento",
        quote: "A criação da Cátedra e o lançamento da Bolsa representam um passo decisivo na construção de uma nova geração de líderes cearenses, capazes de atuar de forma ética, técnica e inovadora diante dos desafios do século XXI.",
      },
      {
        _id: "2",
        name: "Profa. Dra. Cynara Monteiro Mariano",
        role: "Coordenadora da Cátedra Reitor Antônio Martins Filho — UFC",
        quote: "A Cátedra inaugura um ciclo inédito no ensino superior cearense. Estamos formando líderes com visão crítica, competências técnicas e compromisso com o desenvolvimento do Ceará e do Brasil.",
      },
      {
        _id: "3",
        name: "Bolsista Reitoral",
        role: "Estudante de Graduação — UFC",
        quote: "Estar vinculado ao Gabinete do Reitor e ter acesso a mentores de referência nos setores público e privado é uma experiência transformadora. Nunca imaginei ter esse nível de formação ainda na graduação.",
      },
    ],
  },

  coursesSection: {
    eyebrow: "Temas da Formação Teórica",
    title: "O Que Você Vai Estudar",
    ctaLabel: "Ver Grade Completa",
    ctaHref: "/formacao/grade",
    courses: [
      {
        _id: "1",
        title: "História do Brasil e do Ceará",
        category: "Trilha Teórica",
        description: "Formação social, política e econômica do Brasil e do Ceará. Da colonização às transformações contemporâneas, com ênfase no pensamento crítico e na leitura de conjuntura.",
        slug: { current: "historia-brasil-ceara" },
      },
      {
        _id: "2",
        title: "Ciência Política e Democracia",
        category: "Trilha Teórica",
        description: "Fundamentos da organização política, sistemas de governo, dilemas da democracia contemporânea e os desafios das instituições brasileiras no século XXI.",
        slug: { current: "ciencia-politica-democracia" },
      },
      {
        _id: "3",
        title: "Economia e Desenvolvimento Regional",
        category: "Trilha Teórica",
        description: "Perspectivas de desenvolvimento do Ceará, modelos de organização socioeconômica, desafios do subdesenvolvimento e vetores de mudança para a próxima década.",
        slug: { current: "economia-desenvolvimento-regional" },
      },
      {
        _id: "4",
        title: "Liderança e Gestão Estratégica",
        category: "Trilha Prática",
        description: "Ferramentas práticas de liderança para o século XXI: planejamento estratégico, gestão de pessoas, análise de risco, comunicação institucional e negociação em ambientes complexos.",
        slug: { current: "lideranca-gestao-estrategica" },
      },
      {
        _id: "5",
        title: "Políticas Públicas e Intervenção Social",
        category: "Trilha Prática",
        description: "Concepção, formulação e avaliação de políticas públicas. Os bolsistas desenvolvem proposta de intervenção real com orientação técnica e apresentação a banca especializada.",
        slug: { current: "politicas-publicas-intervencao" },
      },
      {
        _id: "6",
        title: "Curadoria Vocacional e de Carreiras",
        category: "Inserção Profissional",
        description: "Orientação estratégica para a construção de projetos de vida e carreira em espaços de liderança. Curadoria de oportunidades profissionais e acadêmicas de alto impacto.",
        slug: { current: "curadoria-vocacional-carreiras" },
      },
    ],
  },

  newsSection: {
    eyebrow: "Últimas Notícias",
    title: "Novidades da Cátedra",
    ctaLabel: "Ver Todas as Notícias",
    ctaHref: "/noticias",
    posts: [
      {
        _id: "1",
        title: "UFC e Mucuripe lançam edital para selecionar 21 bolsistas reitorais de liderança",
        category: "Edital",
        date: "2025-10-10",
        readTime: "5 min de leitura",
        slug: { current: "edital-bolsa-reitoral-lideranca" },
      },
      {
        _id: "2",
        title: "Termo Aditivo n° 01 atualiza regras de elegibilidade do processo seletivo",
        category: "Atualização",
        date: "2025-10-15",
        readTime: "3 min de leitura",
        slug: { current: "termo-aditivo-01-processo-seletivo" },
      },
      {
        _id: "3",
        title: "Primeira Cátedra da história da UFC é lançada nas comemorações dos 70 anos da universidade",
        category: "Institucional",
        date: "2025-10-08",
        readTime: "4 min de leitura",
        slug: { current: "lancamento-catedra-70-anos-ufc" },
      },
    ],
  },

  campusLifeSection: {
    eyebrow: "Vida na UFC",
    title: "Cátedra no Campus",
    description: "As atividades ocorrem presencialmente em Fortaleza, preferencialmente às quartas (13h–19h) e sextas (8h–18h), no âmbito do Colégio de Estudos Avançados da UFC, de fevereiro de 2026 a abril de 2027. A cerimônia de formatura está prevista para junho de 2027.",
    ctaLabel: "Conheça o CEA/UFC",
    ctaHref: "/about/cea",
    gallery: [],
  },
};
// ─── Notícias Mock ────────────────────────────────────────────────────────────

export const mockNewsPosts = [
  {
    _id: "1",
    title: "UFC e Mucuripe lançam edital para selecionar 21 bolsistas reitorais de liderança",
    category: "Edital",
    date: "2025-10-10",
    readTime: "5 min de leitura",
    slug: { current: "edital-bolsa-reitoral-lideranca" },
    image: { asset: { url: "/images/news-card-1.png" } },
    author: { name: "Equipe Cátedra", role: "UFC", photo: { asset: { url: "/images/author-avatar-1.png" } } },
  },
  {
    _id: "2",
    title: "Termo Aditivo n° 01 atualiza regras de elegibilidade do processo seletivo",
    category: "Atualização",
    date: "2025-10-15",
    readTime: "3 min de leitura",
    slug: { current: "termo-aditivo-01-processo-seletivo" },
    image: { asset: { url: "/images/news-card-2.png" } },
    author: { name: "Equipe Cátedra", role: "UFC", photo: { asset: { url: "/images/author-avatar-1.png" } } },
  },
  {
    _id: "3",
    title: "Primeira Cátedra da história da UFC é lançada nas comemorações dos 70 anos da universidade",
    category: "Institucional",
    date: "2025-10-08",
    readTime: "4 min de leitura",
    slug: { current: "lancamento-catedra-70-anos-ufc" },
    image: { asset: { url: "/images/news-card-3.png" } },
    author: { name: "Equipe Cátedra", role: "UFC", photo: { asset: { url: "/images/author-avatar-1.png" } } },
  },
  {
    _id: "4",
    title: "Bolsa Reitoral é inspirada em Rhodes Scholarships e Schwarzman Scholars",
    category: "Programa",
    date: "2025-10-05",
    readTime: "4 min de leitura",
    slug: { current: "inspiracao-bolsas-internacionais" },
    image: { asset: { url: "/images/news-card-1.png" } },
    author: { name: "Instituto Mucuripe", role: "Parceiro", photo: { asset: { url: "/images/author-avatar-2.png" } } },
  },
  {
    _id: "5",
    title: "Dep. Mauro Benevides Filho destaca importância da Bolsa Reitoral para o Ceará",
    category: "Política",
    date: "2025-10-03",
    readTime: "3 min de leitura",
    slug: { current: "mauro-benevides-bolsa-reitoral" },
    image: { asset: { url: "/images/news-card-2.png" } },
    author: { name: "Equipe Cátedra", role: "UFC", photo: { asset: { url: "/images/author-avatar-1.png" } } },
  },
  {
    _id: "6",
    title: "CEA/UFC apresenta ciclo de sete cátedras temáticas para os próximos anos",
    category: "Institucional",
    date: "2025-09-28",
    readTime: "5 min de leitura",
    slug: { current: "ciclo-catedras-cea-ufc" },
    image: { asset: { url: "/images/news-card-3.png" } },
    author: { name: "Equipe Cátedra", role: "UFC", photo: { asset: { url: "/images/author-avatar-1.png" } } },
  },
];

// ─── About Mock ───────────────────────────────────────────────────────────────

export const mockAboutPage = {
  mission: "Formar lideranças comprometidas com o desenvolvimento nacional e do Ceará, promovendo o debate qualificado sobre temas contemporâneos de interesse social sob a ótica da história, da política, da economia e da área jurídica.",
  history: "A Cátedra Reitor Antônio Martins Filho homenageia o fundador e primeiro reitor da UFC, cuja liderança foi decisiva para a consolidação do ensino superior no Ceará. Antônio Martins Filho foi responsável pela criação de 3 universidades no Ceará no Século XX — um feito sem precedentes que transformou o ensino superior do estado. A Cátedra inaugura um ciclo de sete cátedras temáticas no âmbito do Colégio de Estudos Avançados (CEA) da UFC.",
  team: [
    { name: "Profa. Dra. Cynara Monteiro Mariano", role: "Coordenadora da Cátedra", bio: "Professora da UFC e coordenadora da Cátedra Reitor Antônio Martins Filho.", photo: { asset: { url: "/images/team-1.png" } } },
    { name: "João Bosco Ribeiro Neto", role: "Presidente do Instituto Mucuripe", bio: "Fundador do Instituto Mucuripe de Liderança e Desenvolvimento e proponente técnico da Bolsa Reitoral.", photo: { asset: { url: "/images/team-2.png" } } },
  ],
  partners: [
    { name: "Universidade Federal do Ceará", href: "https://ufc.br" },
    { name: "Instituto Mucuripe de Liderança e Desenvolvimento", href: "https://institutomucuripe.org.br" },
    { name: "Fundação CETREDE", href: "https://cetrede.com.br" },
    { name: "Dep. Federal Mauro Benevides Filho", href: "#" },
  ],
};

// ─── Bolsa Reitoral Mock ──────────────────────────────────────────────────────

export const mockBolsaReitoralPage = {
  overview: "A Bolsa Reitoral de Liderança é o projeto inaugural da Cátedra Reitor Antônio Martins Filho, desenvolvida pela UFC em parceria com o Instituto Mucuripe. Inspirada em experiências internacionais como a Rhodes Scholarships, a Schwarzman Scholars e a Chevening Scholarships, o programa concede 21 bolsas mensais de R$ 1.500 a estudantes de graduação da UFC ao longo de 15 meses.",
  eligibility: [
    { text: "Estar regularmente matriculado em curso de graduação (bacharelado ou licenciatura) da UFC" },
    { text: "Ter entre 40% e 75% da carga horária do curso integralizada" },
    { text: "Não estar em regime de internato ou com matrícula inativa, trancada ou irregular" },
    { text: "Não possuir vínculo empregatício ou estágio remunerado incompatível com a carga horária da bolsa" },
    { text: "Não acumular outra bolsa de fomento governamental ou institucional" },
  ],
  timeline: [
    { period: "10/10/2025", activity: "Lançamento do edital do processo seletivo" },
    { period: "15/10 a 14/11/2025", activity: "Período de inscrições on-line" },
    { period: "17/11/2025", activity: "Divulgação das inscrições deferidas" },
    { period: "22/11 a 02/12/2025", activity: "Análise e avaliação documental" },
    { period: "03/12/2025", activity: "Resultado preliminar da 1ª fase" },
    { period: "09/12/2025", activity: "Resultado final da 1ª fase e convocação para entrevistas" },
    { period: "11 e 12/12/2025", activity: "Entrevistas presenciais" },
    { period: "12/01/2026", activity: "Resultado preliminar das entrevistas" },
    { period: "16/01/2026", activity: "Resultado definitivo do processo seletivo" },
    { period: "Fevereiro/2026", activity: "Início das atividades do programa" },
    { period: "Junho/2027", activity: "Cerimônia de formatura" },
  ],
  selectionStages: [
    {
      stage: "1ª Etapa",
      title: "Análise Documental — Eliminatória",
      description: "Avaliação da documentação enviada no ato da inscrição.",
      items: [
        { text: "Histórico Escolar (IRA) — até 1,0 ponto" },
        { text: "Curriculum Vitae com experiências de liderança — até 2,0 pontos" },
        { text: "Carta de Motivação (até 750 palavras) — até 2,0 pontos" },
        { text: "Ensaio dissertativo-argumentativo (até 6.000 caracteres) — até 5,0 pontos" },
      ],
    },
    {
      stage: "2ª Etapa",
      title: "Entrevista Presencial — Classificatória",
      description: "Entrevista de 30 minutos conduzida por banca com 3 avaliadores, incluindo um líder da sociedade civil cearense.",
      items: [
        { text: "Articulação da trajetória com o projeto de liderança — até 4,0 pontos" },
        { text: "Capacidade argumentativa sobre o programa — até 3,0 pontos" },
        { text: "Domínio do conteúdo do ensaio apresentado — até 3,0 pontos" },
      ],
    },
  ],
  affirmativeActions: {
    total: 7,
    description: "Das 21 vagas, 7 são destinadas a políticas de ações afirmativas: 6 para candidatos negros, indígenas e quilombolas, e 1 para pessoas com deficiência, conforme Resolução nº 15/CEPE de 01/12/2023.",
  },
  documentsRequired: [
    { text: "Documento oficial de identificação com foto (RG, CNH, Passaporte etc.)" },
    { text: "CPF (caso não conste no documento de identificação)" },
    { text: "Declaração ou atestado de matrícula regular na UFC" },
    { text: "Histórico escolar do curso de graduação (emitido pelo SIGAA)" },
    { text: "Curriculum Vitae — até 2 laudas com experiências de liderança e protagonismo" },
    { text: "Carta de Motivação — até 750 palavras com projeto pessoal de liderança" },
    { text: "Ensaio dissertativo-argumentativo — até 6.000 caracteres sobre tema do Anexo II" },
    { text: "Até 3 cartas de recomendação de mentores, orientadores ou lideranças" },
  ],
  ctaLabel: "Acessar Formulário de Inscrição",
  ctaHref: "https://forms.gle/83f89QL11ubfgoXPA",
};

// ─── Formação Mock ────────────────────────────────────────────────────────────

export const mockFormacaoPage = {
  overview: "O programa tem carga horária total de 1.500 horas distribuídas em 15 meses, com 100 horas mensais. A formação é estruturada em quatro grandes eixos: trilha teórica, trilha prática, residência e mentoria em liderança, e desenvolvimento do projeto de conclusão.",
  axes: [
    {
      title: "Trilha Teórica",
      type: "Seminários e Pesquisa",
      totalHours: "462h",
      description: "Pesquisa bibliográfica, elaboração de ensaios acadêmicos e seminários com convidados, abrangendo temas de história do Brasil e do Ceará, organização social, política e econômica nacional e internacional, agendas e desafios do século XXI.",
      items: [
        { text: "Atividades de pesquisa e orientação com tutores — 168h" },
        { text: "Seminários temáticos com autoridades e intelectuais — 126h" },
        { text: "Carga horária individual para pesquisa autônoma — 168h" },
      ],
    },
    {
      title: "Trilha Prática",
      type: "Oficinas de Liderança",
      totalHours: "60h",
      description: "Oficinas voltadas ao desenvolvimento de habilidades práticas de liderança para o século XXI: gestão estratégica, comunicação institucional, negociação, análise de risco e tomada de decisão em ambientes complexos.",
      items: [
        { text: "Oficinas de competências técnicas e estratégicas" },
        { text: "Instrumentalização com ferramentas de gestão e liderança organizacional" },
        { text: "Diálogo com lideranças do setor público, privado e social" },
      ],
    },
    {
      title: "Residência e Mentoria",
      type: "Orientação Individual",
      totalHours: "196h",
      description: "Cada bolsista recebe um mentor exclusivo, escolhido entre líderes consolidados do setor em que pretende atuar. São 4 horas semanais de residência presencial junto ao mentor ao longo de 10 meses.",
      items: [
        { text: "Residência em instituições parceiras — 136h" },
        { text: "Atividades de mentoria individual — 30h" },
        { text: "Sessões de orientação vocacional e de carreiras — 30h" },
      ],
    },
    {
      title: "Projeto de Conclusão",
      type: "Intervenção Social",
      totalHours: "200h",
      description: "Proposta de estratégia de intervenção ou política pública, elaborada em grupo sob orientação de tutores e mentores, com foco em soluções inovadoras para desafios sociais relevantes. Os melhores projetos podem receber apoio para captação de fomento.",
      items: [
        { text: "Formação teórico-prática em desenvolvimento de projetos — 40h" },
        { text: "Desenvolvimento e apresentação do projeto de conclusão — 200h" },
        { text: "Avaliação por comissão especializada" },
      ],
    },
  ],
  profiles: [
    { code: "PE1", title: "Análise crítica e leitura de conjuntura", description: "Compreende os elementos sociológicos, políticos e econômicos da sociedade contemporânea com robustez teórica e empírica." },
    { code: "PE2", title: "Diagnóstico e solução de problemas", description: "Domina ferramentas para mapear cenários, formular diagnósticos e propor soluções sustentadas em evidência e sensibilidade política." },
    { code: "PE3", title: "Competências técnicas de liderança", description: "Capacitado para planejamento estratégico, gestão de pessoas, comunicação institucional e tomada de decisão em diferentes esferas." },
    { code: "PE4", title: "Ética e responsabilidade pública", description: "Atua com clareza de propósito e compromisso com o bem comum, articulando vocação pessoal com princípios de justiça e sustentabilidade." },
    { code: "PE5", title: "Construção de consensos e alianças", description: "Mobiliza competências comunicacionais para mediar conflitos, construir consensos e estabelecer alianças com atores diversos." },
    { code: "PE6", title: "Rede intergeracional de lideranças", description: "Integra rede multissetorial de lideranças estratégicas, ampliando capacidade de incidência e desenvolvimento profissional." },
  ],
};

// ─── Contato Mock ─────────────────────────────────────────────────────────────

export const mockContatoPage = {
  email: "catedraramf@ufc.br",
  phone: null,
  address: "Colégio de Estudos Avançados — CEA/UFC, Fortaleza, Ceará",
  faq: [
    { question: "Quem pode se inscrever na Bolsa Reitoral?", answer: "Estudantes regularmente matriculados em qualquer curso de graduação (bacharelado ou licenciatura) da UFC, com carga horária integralizada entre 40% e 75% de seu curso." },
    { question: "Há alguma taxa de inscrição?", answer: "Não. Não será exigido nenhum tipo de pagamento — seja taxa de inscrição, matrícula, mensalidade ou qualquer outra cobrança — durante todo o processo e vigência da bolsa." },
    { question: "Qual é o valor da bolsa e por quanto tempo é paga?", answer: "R$ 1.500,00 mensais durante os 15 meses do programa, de fevereiro de 2026 a abril de 2027." },
    { question: "Posso acumular a Bolsa Reitoral com outro emprego ou estágio?", answer: "Não é permitido o acúmulo com vínculo empregatício ou estágio remunerado incompatível com a carga horária da bolsa (100h mensais), nem com outra bolsa de fomento governamental ou institucional." },
    { question: "As atividades são presenciais?", answer: "Sim. As atividades ocorrem presencialmente em Fortaleza, preferencialmente às quartas (13h–19h) e sextas (8h–18h). A frequência mínima exigida é de 75%, aferida mensalmente." },
    { question: "Como funciona a mentoria?", answer: "Cada bolsista recebe um mentor exclusivo, escolhido entre líderes consolidados do setor em que pretende atuar. São 4 horas semanais de residência junto ao mentor ao longo de 10 meses." },
    { question: "Posso enviar dúvidas sobre o processo seletivo?", answer: "Sim. Envie e-mail para catedraramf@ufc.br. Para cancelamento de inscrição ou correção de dados, o e-mail também é o canal oficial." },
  ],
};
