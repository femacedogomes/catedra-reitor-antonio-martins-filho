"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ParticipantsSection as ParticipantsSectionType } from "@/types";

interface ParticipantsProps {
  data: ParticipantsSectionType;
}

// Mostra 3 cards por vez no desktop (carousel), 1 no mobile
const CARDS_PER_PAGE = 3;

export default function Participants({ data }: ParticipantsProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(data.participants.length / CARDS_PER_PAGE);

  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  const visible = data.participants.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-eyebrow">{data.eyebrow}</p>
            <h2 className="section-title">{data.title}</h2>
          </div>
          <Link href={data.ctaHref} className="btn-outline text-xs whitespace-nowrap">
            {data.ctaLabel}
          </Link>
        </div>

        {/* Subtitle */}
        <p className="text-dark/60 text-sm leading-relaxed max-w-2xl mb-10">
          {data.subtitle}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visible.map((student, i) => {
            const globalIndex = page * CARDS_PER_PAGE + i;
            return (
              <div
                key={student._id}
                className="bg-white shadow-sm flex flex-col sm:flex-row overflow-hidden"
              >
                {/* Photo */}
                <div className="relative w-full sm:w-36 flex-shrink-0 aspect-[4/3] sm:aspect-auto">
                  <Image
                    src={student.photo?.asset?.url || `/images/participant-photo-${globalIndex + 1}.png`}
                    alt={student.name}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 w-7 h-7 bg-primary flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{globalIndex + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="mb-3 pb-3 border-b border-dark/5">
                    <h4 className="font-serif text-sm text-dark leading-snug mb-1">{student.name}</h4>
                    <p className="text-primary text-xs font-semibold tracking-wide uppercase">
                      {student.course}
                    </p>
                  </div>
                  <p className="text-dark/55 text-xs leading-relaxed">{student.bio}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination dots + arrows */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-9 h-9 bg-white border border-dark/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === page ? "bg-primary" : "bg-dark/20"
              }`}
              aria-label={`Página ${i + 1}`}
            />
          ))}

          <button
            onClick={next}
            className="w-9 h-9 bg-white border border-dark/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
