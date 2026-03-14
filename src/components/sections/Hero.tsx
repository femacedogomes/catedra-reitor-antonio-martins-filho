import Image from "next/image";
import Link from "next/link";
import type { HeroData } from "@/types";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  // Use provided background image or fallback to default
  const backgroundImageUrl = data.backgroundImage?.asset?.url || "/images/hero-background-1.png";

  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImageUrl}
          alt="University campus"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-dark/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        {data.eyebrow && (
          <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">
            {data.eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-2xl whitespace-pre-line">
          {data.title}
        </h1>
        {data.subtitle && (
          <p className="text-white/70 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            {data.subtitle}
          </p>
        )}
        <Link href={data.ctaHref} className="btn-primary text-sm">
          {data.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
