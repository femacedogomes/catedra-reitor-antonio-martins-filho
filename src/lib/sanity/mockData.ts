import type { HomepageData, NavigationData, FooterData } from "@/types";

// ─── Dados reais da Cátedra Reitor Antônio Martins Filho ─────────────────────

export const mockNavigation: NavigationData = {
  logoText: "CATEDRA",
  links: [
    { label: "A Cátedra", href: "/about" },
    {
      label: "Formação",
      href: "/formacao",
      children: [
        { label: "Trilha Teórica", href: "/formacao/trilha-teorica" },
        { label: "Trilha Prática", href: "/formacao/trilha-pratica" },
        { label: "Residência e Mentoria", href: "/formacao/residencia-mentoria" },
        { label: "Projeto de Conclusão", href: "/formacao/projeto-conclusao" },
      ],
    },
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

  testimonialsSection: {
    eyebrow: "Quem Acredita na Cátedra",
    title: "Vozes do Programa",
    ctaLabel: "Saiba Mais",
    ctaHref: "/about",
    testimonials: [
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
