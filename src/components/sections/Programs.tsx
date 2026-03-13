import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProgramsSection as ProgramsSectionType } from "@/types";

interface ProgramsProps {
  data: ProgramsSectionType;
}

export default function Programs({ data }: ProgramsProps) {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
              <span className="block w-6 h-0.5 bg-primary" />
              {data.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">{data.title}</h2>
          </div>
          <Link href={data.ctaHref} className="btn-outline text-xs whitespace-nowrap">
            {data.ctaLabel}
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {data.programs.map((program, i) => (
            <Link
              key={program._id}
              href={`/programs/${program.slug.current}`}
              className="group relative overflow-hidden bg-dark"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={program.image?.asset?.url || `/images/program-card-${i + 1}.png`}
                  alt={program.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-1">
                  {program.degree}
                </p>
                <h3 className="font-serif text-xl text-white mb-2">{program.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-4">
                  {program.description}
                </p>
                <span className="text-primary text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
