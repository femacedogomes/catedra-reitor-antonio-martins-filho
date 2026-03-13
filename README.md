# Univet University — Next.js + Sanity

Site institucional universitário construído com **Next.js 15**, **Tailwind CSS** e **Sanity CMS**.

---

## 🗂 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Homepage (Server Component, ISR)
│   ├── globals.css             # Estilos globais + Tailwind
│   └── studio/[[...tool]]/     # Sanity Studio embutido
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # "use client" — menu responsivo com dropdown
│   │   └── Footer.tsx          # Colunas de links + redes sociais
│   │
│   └── sections/
│       ├── Hero.tsx            # Seção hero com imagem de fundo
│       ├── About.tsx           # "use client" — tabs interativas
│       ├── StatsBar.tsx        # 3 colunas de estatísticas
│       ├── Programs.tsx        # Grid escuro com cards de programas
│       ├── ApplicationForm.tsx # "use client" — formulário de inscrição
│       ├── Testimonials.tsx    # "use client" — carrossel de depoimentos
│       ├── Courses.tsx         # Grid vinho com cursos
│       ├── News.tsx            # Cards de notícias
│       └── CampusLife.tsx      # Seção com imagem e galeria
│
├── lib/sanity/
│   ├── client.ts               # Configuração do Sanity Client + urlFor()
│   ├── queries.ts              # Queries GROQ para cada seção
│   └── mockData.ts             # Dados mock para fallback/dev
│
├── sanity/
│   ├── sanity.config.ts        # Configuração do Sanity Studio
│   └── schemas/
│       ├── homepage.ts         # Schema da homepage
│       └── index.ts            # Schemas: program, course, testimonial, newsPost, navigation, footer
│
└── types/
    └── index.ts                # TypeScript types para todos os dados
```

---

## 🚀 Como Rodar

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.local.example` e preencha:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=seu_token
```

### 3. Configurar o Sanity

1. Crie uma conta em [sanity.io](https://sanity.io)
2. Crie um novo projeto e pegue o **Project ID**
3. Gere um **token de API** com permissão de leitura em: `sanity.io/manage → API → Tokens`
4. Cole as credenciais no `.env.local`

### 4. Rodar o projeto

```bash
npm run dev
```

- **Site:** http://localhost:3000
- **Sanity Studio:** http://localhost:3000/studio

---

## 📦 Schemas do Sanity

| Schema | Descrição |
|---|---|
| `homepage` | Toda a homepage (hero, about, stats, form, etc.) |
| `program` | Programas acadêmicos (BA, MSc, PhD...) |
| `course` | Cursos individuais |
| `testimonial` | Depoimentos de alunos |
| `newsPost` | Notícias e artigos |
| `navigation` | Menu de navegação |
| `footer` | Rodapé com colunas e redes sociais |

---

## 🖼 Imagens

Adicione as imagens placeholder na pasta `public/images/`:

| Arquivo | Usado em |
|---|---|
| `hero-background-1.png` | Seção Hero |
| `about-left-image-1.png` | Seção About |
| `program-card-1..4.png` | Cards de Programas |
| `application-form-campus-1.png` | Formulário de inscrição |
| `testimonial-photo-1..3.png` | Fotos de depoimentos |
| `course-card-1..6.png` | Cards de Cursos |
| `news-card-1..3.png` | Cards de Notícias |
| `campus-life-main-1.png` | Seção Campus Life |
| `campus-gallery-1..4.png` | Galeria Campus Life |

---

## 🔑 Boas Práticas Aplicadas

- ✅ `"use client"` somente em componentes que usam hooks (`useState`)
- ✅ Server Components para fetch de dados (page.tsx, layout.tsx)
- ✅ ISR com `revalidate = 60` na homepage
- ✅ Fallback para mock data em desenvolvimento
- ✅ Todos os textos, cores e estruturas parametrizados no Sanity
- ✅ Padding/margin em vez de height/width fixos
- ✅ Responsivo: mobile-first com breakpoints `md:` e `lg:`
- ✅ TypeScript estrito em todos os arquivos

---

## 🎨 Cores (Tailwind)

| Token | Valor | Uso |
|---|---|---|
| `primary` | `#8B1A2B` | Botões, destaques, bordas |
| `primary-dark` | `#6B1221` | Hover de botões |
| `dark` | `#1a1a1a` | Fundo escuro, textos |
| `cream` | `#F5F0E8` | Fundo principal |
| `cream-dark` | `#EDE8DF` | Fundo alternativo |
