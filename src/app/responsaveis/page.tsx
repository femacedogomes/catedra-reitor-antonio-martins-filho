import Image from "next/image";
import { Mail, Linkedin, GraduationCap } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";

export const revalidate = 60;

// ─── Coordenação e Responsáveis ──────────────────────────────────────────────

const coordinators = [
  {
    _id: "1",
    name: "Profa. Dra. Cynara Monteiro Mariano",
    role: "Coordenadora da Cátedra",
    institution: "Universidade Federal do Ceará — UFC",
    bio: "Professora da UFC e coordenadora da Cátedra Reitor Antônio Martins Filho. Responsável pela concepção acadêmica e condução do programa de formação de lideranças para o desenvolvimento nacional e do Ceará.",
    photo: "/images/coordinator-photo-1.png",
    email: "catedraramf@ufc.br",
    linkedin: null,
    tags: ["Coordenação Acadêmica", "UFC", "CEA"],
  },
  {
    _id: "2",
    name: "João Bosco Ribeiro Neto",
    role: "Presidente do Instituto Mucuripe",
    institution: "Instituto Mucuripe de Liderança e Desenvolvimento",
    bio: "Fundador e presidente do Instituto Mucuripe de Liderança e Desenvolvimento. Proponente técnico da Bolsa Reitoral e responsável pela concepção metodológica da Cátedra em parceria com a UFC.",
    photo: "/images/coordinator-photo-2.png",
    email: null,
    linkedin: null,
    tags: ["Instituto Mucuripe", "Metodologia", "Parceiro Técnico"],
  },
  {
    _id: "3",
    name: "Dep. Federal Mauro Benevides Filho",
    role: "Financiador e Apoiador Institucional",
    institution: "Câmara dos Deputados — Brasília/DF",
    bio: "Deputado federal pelo Ceará, responsável pela emenda parlamentar que viabiliza o financiamento da Bolsa Reitoral de Liderança. Seu apoio integra as comemorações pelos 70 anos da UFC.",
    photo: "/images/coordinator-photo-3.png",
    email: null,
    linkedin: null,
    tags: ["Financiamento", "Emenda Parlamentar", "Câmara Federal"],
  },
  {
    _id: "4",
    name: "Reitor da UFC",
    role: "Patrono da Bolsa Reitoral",
    institution: "Universidade Federal do Ceará — UFC",
    bio: "O Reitor da UFC atua como patrono do grupo de bolsistas ao longo de todo o processo formativo, conferindo ao programa um vínculo direto com a mais alta liderança acadêmica da universidade.",
    photo: "/images/coordinator-photo-4.png",
    email: null,
    linkedin: null,
    tags: ["Patrono", "UFC", "Gabinete do Reitor"],
  },
];

// ─── Bolsistas Reitorais — Turma 2026 ────────────────────────────────────────

const participants = Array.from({ length: 21 }, (_, i) => ({
  _id: `p${i + 1}`,
  name: `Aluno ${i + 1}`,
  course: "Curso na UFC",
  photo: `/images/participant-photo-${i + 1}.png`,
  bio: "Estudante de graduação da Universidade Federal do Ceará, selecionado(a) para a turma inaugural da Bolsa Reitoral de Liderança. Ao longo de 15 meses, participará de trilhas formativas, residência com mentor e desenvolvimento de projeto de impacto social.",
}));

// ─── Card component compartilhado ────────────────────────────────────────────

interface PersonCardProps {
  name: string;
  role?: string;
  institution?: string;
  course?: string;
  bio: string;
  photo: string;
  email?: string | null;
  linkedin?: string | null;
  tags?: string[];
  index: number;
}

function PersonCard({ name, role, institution, course, bio, photo, email, linkedin, tags, index }: PersonCardProps) {
  return (
    <div className="bg-white shadow-sm flex flex-col sm:flex-row overflow-hidden">
      {/* Photo */}
      <div className="relative w-full sm:w-44 flex-shrink-0 aspect-[4/3] sm:aspect-auto">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover object-top"
        />
        {/* Number badge — só para bolsistas */}
        {!role && (
          <div className="absolute top-3 left-3 w-7 h-7 bg-primary flex items-center justify-center">
            <span className="text-white text-xs font-bold">{index + 1}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4 pb-4 border-b border-dark/5">
          <h3 className="font-serif text-base text-dark leading-snug mb-1">{name}</h3>
          {role && (
            <p className="text-primary text-xs font-semibold tracking-wide uppercase">{role}</p>
          )}
          {institution && (
            <p className="text-dark/40 text-xs mt-0.5">{institution}</p>
          )}
          {course && (
            <p className="text-primary text-xs font-semibold tracking-wide uppercase">{course}</p>
          )}
        </div>

        <p className="text-dark/60 text-sm leading-relaxed flex-1 mb-4">{bio}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1">
                {tag}
              </span>
            ))}
          </div>
        )}

        {(email || linkedin) && (
          <div className="flex items-center gap-3">
            {email && (
              <a href={`mailto:${email}`} className="flex items-center gap-1.5 text-xs text-dark/50 hover:text-primary transition-colors">
                <Mail size={13} /> {email}
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-dark/50 hover:text-primary transition-colors">
                <Linkedin size={13} /> LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CoordinatorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cátedra Reitor Antônio Martins Filho"
        title="Coordenação e Bolsistas"
        subtitle="Conheça os responsáveis pelo programa e os 21 bolsistas da turma inaugural da Bolsa Reitoral de Liderança — UFC 2026."
        image="/images/coordinators-header-1.png"
      />

      {/* ── Seção 1: Coordenação ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="section-eyebrow justify-center">Coordenação</p>
            <h2 className="section-title mb-5">Quem está por trás da Cátedra</h2>
            <p className="text-dark/60 text-sm leading-relaxed">
              A Cátedra Reitor Antônio Martins Filho é resultado de uma parceria entre a
              Universidade Federal do Ceará e o Instituto Mucuripe de Liderança e Desenvolvimento,
              com apoio parlamentar do Dep. Mauro Benevides Filho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coordinators.map((person) => (
              <PersonCard
                key={person._id}
                name={person.name}
                role={person.role}
                institution={person.institution}
                bio={person.bio}
                photo={person.photo}
                email={person.email}
                linkedin={person.linkedin}
                tags={person.tags}
                index={0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Divisor stats ────────────────────────────────────────────────────── */}
      <section className="bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { icon: <GraduationCap size={24} />, value: "21", label: "Bolsistas Reitorais", desc: "Turma inaugural — 2026", highlight: false },
              { icon: <GraduationCap size={24} />, value: "15", label: "Meses de Formação",  desc: "Fev/2026 a Abr/2027",   highlight: true  },
              { icon: <GraduationCap size={24} />, value: "R$ 1.500", label: "Bolsa Mensal", desc: "Sem taxa de inscrição",  highlight: false },
            ].map((stat, i) => (
              <div key={i} className={`flex items-center gap-5 px-8 py-8 ${stat.highlight ? "bg-primary" : ""}`}>
                <div className="text-white/50 flex-shrink-0">{stat.icon}</div>
                <div>
                  <p className="font-serif text-3xl text-white font-bold leading-none">{stat.value}</p>
                  <p className="text-white text-sm font-semibold mt-1">{stat.label}</p>
                  <p className={`text-xs mt-0.5 ${stat.highlight ? "text-white/70" : "text-white/40"}`}>{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seção 2: Bolsistas ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="section-eyebrow justify-center">Turma Inaugural 2026</p>
            <h2 className="section-title mb-5">Os 21 Bolsistas Reitorais</h2>
            <p className="text-dark/60 text-sm leading-relaxed">
              Selecionados entre estudantes de graduação de todos os cursos da UFC, os bolsistas
              representam a diversidade acadêmica da universidade e o compromisso com o
              desenvolvimento do Ceará e do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {participants.map((student, i) => (
              <PersonCard
                key={student._id}
                name={student.name}
                course={student.course}
                bio={student.bio}
                photo={student.photo}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Instituições parceiras ───────────────────────────────────────────── */}
      <section className="bg-dark py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center text-white/30 text-xs tracking-widest uppercase mb-10">
            Instituições envolvidas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { name: "Universidade Federal do Ceará", abbr: "UFC", desc: "Instituidora da Cátedra e responsável acadêmica do programa",        href: "https://ufc.br" },
              { name: "Instituto Mucuripe",             abbr: "IM",  desc: "Proponente técnico e parceiro metodológico da Bolsa Reitoral",        href: "#" },
              { name: "Fundação CETREDE",               abbr: "FC",  desc: "Fundação de apoio responsável pela gestão financeira das bolsas",     href: "https://cetrede.com.br" },
              { name: "Câmara dos Deputados",           abbr: "CD",  desc: "Emenda parlamentar do Dep. Mauro Benevides Filho viabiliza o programa", href: "https://camara.leg.br" },
            ].map((inst) => (
              <a
                key={inst.name}
                href={inst.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark hover:bg-white/5 transition-colors p-8 flex flex-col gap-3 group"
              >
                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">{inst.abbr}</span>
                </div>
                <p className="font-serif text-white text-base group-hover:text-primary transition-colors">{inst.name}</p>
                <p className="text-white/40 text-xs leading-relaxed">{inst.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
