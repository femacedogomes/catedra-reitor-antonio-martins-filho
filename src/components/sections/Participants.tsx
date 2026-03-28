"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ParticipantsSection as ParticipantsSectionType } from "@/types";

interface ParticipantsProps {
  data: ParticipantsSectionType;
}

const CARDS_PER_PAGE = 3;

export default function Participants({ data }: ParticipantsProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(data.participants.length / CARDS_PER_PAGE);
  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  const visible = data.participants.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#101d1e" }}>


      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-terracota text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
              <span className="block w-6 h-0.5 bg-terracota" />
              {data.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">{data.title}</h2>
          </div>
          <Link
            href={data.ctaHref}
            className="border border-white/30 text-white px-6 py-3 text-xs font-semibold tracking-wide uppercase hover:bg-white hover:text-dark transition-colors whitespace-nowrap"
          >
            {data.ctaLabel}
          </Link>
        </div>

        <p className="text-white/50 text-sm leading-relaxed max-w-2xl mb-12">{data.subtitle}</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((student, i) => {
            const globalIndex = page * CARDS_PER_PAGE + i;
            return (
              <div key={student._id} className="bg-white/5 border border-white/10 flex flex-col sm:flex-row overflow-hidden">
                <div className="relative w-full sm:w-36 flex-shrink-0 aspect-[4/3] sm:aspect-auto">
                  <Image
                    src={student.photo?.asset?.url || `/images/participant-photo-${globalIndex + 1}.png`}
                    alt={student.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 w-7 h-7 bg-terracota flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{globalIndex + 1}</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="mb-3 pb-3 border-b border-white/10">
                    <h4 className="font-serif text-sm text-white leading-snug mb-1">{student.name}</h4>
                    <p className="text-terracota text-xs font-semibold tracking-wide uppercase">{student.course}</p>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{student.bio}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={prev} className="w-9 h-9 bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === page ? "bg-terracota" : "bg-white/20"}`}
            />
          ))}
          <button onClick={next} className="w-9 h-9 bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
