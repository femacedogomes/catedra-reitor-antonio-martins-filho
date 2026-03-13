import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { NewsSection as NewsSectionType } from "@/types";

interface NewsProps {
  data: NewsSectionType;
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function News({ data }: NewsProps) {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-eyebrow">{data.eyebrow}</p>
            <h2 className="section-title">{data.title}</h2>
          </div>
          <Link href={data.ctaHref} className="btn-outline text-xs whitespace-nowrap">
            {data.ctaLabel}
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.posts.map((post, i) => (
            <Link
              key={post._id}
              href={`/news/${post.slug.current}`}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-5">
                <Image
                  src={post.image?.asset?.url || `/images/news-card-${i + 1}.png`}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 tracking-wide uppercase">
                    {post.category}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-dark/40 text-xs mb-3">
                  <span>{formatDate(post.date)}</span>
                  {post.readTime && (
                    <>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </>
                  )}
                </div>
                <h3 className="font-serif text-base text-dark leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <span className="text-primary text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary" : "bg-dark/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
