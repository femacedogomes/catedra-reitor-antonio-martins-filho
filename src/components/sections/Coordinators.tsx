"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CoordinatorsSection as CoordinatorsSectionType } from "@/types";

interface CoordinatorsProps {
  data: CoordinatorsSectionType;
}

export default function Coordinators({ data }: CoordinatorsProps) {
  const [active, setActive] = useState(0);
  const prev = () => setActive((p) => (p === 0 ? data.coordinators.length - 1 : p - 1));
  const next = () => setActive((p) => (p === data.coordinators.length - 1 ? 0 : p + 1));

  return (
    <section className="relative py-16 md:py-24 bg-cream overflow-hidden">



      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-eyebrow">{data.eyebrow}</p>
            <h2 className="section-title">{data.title}</h2>
          </div>
          <Link href={data.ctaHref} className="btn-outline text-xs whitespace-nowrap">{data.ctaLabel}</Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.coordinators.map((t, i) => (
            <div
              key={t._id}
              className={`transition-all duration-300 ${i === active ? "opacity-100" : "opacity-40 hidden md:block"}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-5">
                  <Image
                    src={t.photo?.asset?.url || `/images/coordinator-photo-${i + 1}.png`}
                    alt={t.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-serif text-lg text-dark mb-1">{t.name}</h4>
                <p className="text-primary text-xs font-semibold tracking-wide uppercase mb-4">{t.role}</p>
                <p className="text-dark/60 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots + Arrows */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={prev} className="w-9 h-9 bg-white border border-dark/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
            <ChevronLeft size={16} />
          </button>
          {data.coordinators.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-dark/20"}`}
            />
          ))}
          <button onClick={next} className="w-9 h-9 bg-white border border-dark/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
