import Image from "next/image";
import Link from "next/link";
import { Tag, Calendar } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import { mockNewsPosts } from "@/lib/sanity/mockData";

export const revalidate = 60;

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function NoticiasPage() {
  const posts = mockNewsPosts;

  return (
    <>
      <PageHeader
        eyebrow="Cátedra Reitor Antônio Martins Filho"
        title="Notícias"
        subtitle="Acompanhe as novidades da Cátedra, da Bolsa Reitoral de Liderança e do Instituto Mucuripe."
        image="/images/news-header-1.png"
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Grid 3 colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link
                key={post._id}
                href={`/noticias/${post.slug.current}`}
                className="group bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Imagem */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image?.asset?.url || `/images/news-card-${(i % 3) + 1}.png`}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Categoria + Data */}
                  <div className="flex items-center gap-3 text-xs mb-3 flex-wrap">
                    <span className="flex items-center gap-1 text-primary font-semibold">
                      <Tag size={11} />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-dark/40">
                      <Calendar size={11} />
                      {formatDate(post.date)}
                    </span>
                  </div>

                  {/* Título */}
                  <h2 className="font-serif text-base text-dark leading-snug mb-5 group-hover:text-primary transition-colors flex-1">
                    {post.title}
                  </h2>

                  {/* Autor */}
                  <div className="flex items-center gap-3 pt-4 border-t border-dark/5">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-cream-dark flex-shrink-0">
                      <Image
                        src={post.author?.photo?.asset?.url || "/images/author-avatar-1.png"}
                        alt={post.author?.name || "Autor"}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-semibold text-dark">
                      {post.author?.name || "Equipe Cátedra"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Paginação */}
          <div className="flex items-center justify-center gap-2 mt-14">
            <button className="w-9 h-9 bg-primary text-white text-sm font-semibold flex items-center justify-center">
              1
            </button>
            <button className="w-9 h-9 bg-white border border-dark/10 text-dark/60 text-sm font-semibold flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
              2
            </button>
            <button className="w-9 h-9 bg-white border border-dark/10 text-dark/60 text-sm font-bold flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
              +
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
