import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Globe, CheckCircle } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import AboutSidebar from "@/components/sections/AboutSidebar";
import AboutFeedback from "@/components/sections/AboutFeedback";

export const revalidate = 60;

const stats = [
  { icon: <GraduationCap size={20} />, value: "21", label: "Bolsistas Reitorais" },
  { icon: <Users size={20} />, value: "150+", label: "Mentores e Parceiros" },
  { icon: <Globe size={20} />, value: "70+", label: "Anos da UFC" },
];

const visionCards = [
  {
    icon: "🎯",
    title: "Formação Transversal",
    description:
      "A Cátedra trabalha temas fundamentais da sociedade sob a ótica da história, da política, da economia e da área jurídica.",
  },
  {
    icon: "🏛️",
    title: "Vínculo Institucional",
    description:
      "Os bolsistas ficam diretamente vinculados ao Gabinete do Reitor, que atua como patrono ao longo de todo o processo formativo.",
  },
  {
    icon: "🤝",
    title: "Rede de Liderança",
    description:
      "Integração com líderes consolidados do setor público, privado e social, formando redes orgânicas de diálogo e cooperação.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Universidade Federal do Ceará"
        title="Sobre nos"
        subtitle="Conheça a Cátedra Reitor Antônio Martins Filho: a primeira Cátedra da história da UFC e do Estado do Ceará."
        image="/images/about-header-1.png"
      />

      {/* Main layout: sidebar + content */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Sidebar — desktop */}
            <aside className="lg:w-64 flex-shrink-0">
              <AboutSidebar />
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">

              {/* Sobre a Cátedra */}
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-5">
                Sobre a Cátedra Reitor Antônio Martins Filho
              </h2>
              <p className="text-dark/60 text-sm leading-relaxed mb-4">
                A Cátedra Reitor Antônio Martins Filho é uma iniciativa pioneira da Universidade
                Federal do Ceará, desenvolvida em parceria com o Instituto Mucuripe de Liderança
                e Desenvolvimento. Voltada à formação de lideranças comprometidas com o
                desenvolvimento do Estado e do país, a Cátedra busca promover o debate
                qualificado sobre temas contemporâneos de interesse social.
              </p>
              <p className="text-dark/60 text-sm leading-relaxed mb-8">
                Homenageia o fundador e primeiro reitor da UFC, cuja liderança foi decisiva para
                a consolidação do ensino superior no Ceará — responsável pela criação de 3
                universidades no Século XX, um feito revolucionário que moldou o ensino superior
                do estado. A Cátedra inaugura um ciclo de sete cátedras temáticas no âmbito do
                Colégio de Estudos Avançados (CEA/UFC).
              </p>

              {/* Citação em destaque */}
              <blockquote className="bg-white border-l-4 border-primary p-6 mb-8 shadow-sm">
                <span className="block text-primary text-3xl font-serif leading-none mb-3">"</span>
                <p className="text-dark/70 text-sm leading-relaxed italic mb-4">
                  A criação da Cátedra e o lançamento da Bolsa representam um passo decisivo na
                  construção de uma nova geração de líderes cearenses, capazes de atuar de forma
                  ética, técnica e inovadora diante dos desafios do século XXI.
                </p>
                <cite className="text-dark font-semibold text-sm not-italic">
                  João Bosco Ribeiro Neto
                  <span className="block text-dark/40 font-normal text-xs mt-0.5">
                    Presidente do Instituto Mucuripe
                  </span>
                </cite>
              </blockquote>

              <p className="text-dark/60 text-sm leading-relaxed mb-10">
                O programa é financiado por emenda parlamentar do deputado federal Mauro
                Benevides Filho e integra as comemorações pelos 70 anos da Universidade Federal
                do Ceará, reafirmando seu papel histórico na formação de quadros estratégicos e
                no fortalecimento das instituições do Estado. Inspirada em experiências
                internacionais como a Rhodes Scholarships e a Schwarzman Scholars, a Bolsa
                Reitoral de Liderança concederá 21 bolsas mensais de R$ 1.500 a estudantes de
                graduação da UFC ao longo de 15 meses.
              </p>

              {/* Duas imagens lado a lado com badge */}
              <div className="relative grid grid-cols-2 gap-3 mb-8">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/about-photo-left-1.png"
                    alt="Cátedra UFC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/about-photo-right-1.png"
                    alt="Campus UFC"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Badge central */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-primary border-4 border-white flex items-center justify-center shadow-lg">
                  <GraduationCap size={24} className="text-white" />
                </div>
              </div>

              {/* Stats bar escura */}
              <div className="bg-dark grid grid-cols-3 divide-x divide-white/10 mb-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3 px-5 py-5">
                    <div className="text-primary flex-shrink-0">{stat.icon}</div>
                    <div>
                      <p className="font-serif text-xl text-white font-bold leading-none">{stat.value}</p>
                      <p className="text-white/50 text-xs mt-1">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Our Vision */}
              <h2 className="font-serif text-2xl text-dark mb-4">Nossa Visão</h2>
              <p className="text-dark/60 text-sm leading-relaxed mb-8">
                Formar lideranças comprometidas com o desenvolvimento nacional e do Ceará,
                promovendo o debate qualificado sobre temas contemporâneos. Selecionar quadros
                jovens com potencial demonstrado de liderança e habilitá-los a atuar em prol do
                desenvolvimento nacional e do Ceará, munindo-os dos saberes necessários ao
                exercício de uma liderança qualificada.
              </p>

              {/* Vision cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
                {visionCards.map((card) => (
                  <div key={card.title} className="bg-white p-6 shadow-sm text-center">
                    <span className="text-3xl mb-4 block">{card.icon}</span>
                    <h4 className="font-serif text-sm text-dark mb-2">{card.title}</h4>
                    <p className="text-dark/55 text-xs leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>

              {/* Campus Tour */}
              <h2 className="font-serif text-2xl text-dark mb-4">A Cátedra no Campus</h2>
              <p className="text-dark/60 text-sm leading-relaxed mb-6">
                As atividades ocorrem presencialmente em Fortaleza, no âmbito do Colégio de
                Estudos Avançados da UFC. Preferencialmente às quartas (13h–19h) e sextas
                (8h–18h), de fevereiro de 2026 a abril de 2027, com cerimônia de formatura
                prevista para junho de 2027.
              </p>
              <div className="relative aspect-[16/7] overflow-hidden mb-14">
                <Image
                  src="/images/about-campus-tour-1.png"
                  alt="Campus UFC"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Student Feedback */}
              <h2 className="font-serif text-2xl text-dark mb-3">Depoimentos</h2>
              <p className="text-dark/60 text-sm leading-relaxed mb-8">
                O que dizem sobre a Cátedra Reitor Antônio Martins Filho e a Bolsa Reitoral de
                Liderança.
              </p>
              <AboutFeedback />

            </div>
          </div>
        </div>
      </section>

      {/* Campus Life CTA */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/6] md:aspect-[16/5]">
          <Image
            src="/images/about-campus-life-1.png"
            alt="Vida no Campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/campus-life"
              className="bg-primary text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
              Conheça a Vida no Campus
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
