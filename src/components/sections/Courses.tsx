import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CoursesSection as CoursesSectionType } from "@/types";

interface CoursesProps {
  data: CoursesSectionType;
}

export default function Courses({ data }: CoursesProps) {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
              <span className="block w-6 h-0.5 bg-white/60" />
              {data.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">{data.title}</h2>
          </div>
          <Link
            href={data.ctaHref}
            className="border border-white text-white px-6 py-3 text-xs font-semibold tracking-wide uppercase hover:bg-white hover:text-primary transition-colors whitespace-nowrap inline-block"
          >
            {data.ctaLabel}
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20">
          {data.courses.map((course, i) => (
            <Link
              key={course._id}
              href={`/courses/${course.slug.current}`}
              className="group relative overflow-hidden bg-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image?.asset?.url || `/images/course-card-${i + 1}.png`}
                  alt={course.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-1">{course.category}</p>
                <h3 className="font-serif text-base text-white leading-snug">{course.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
