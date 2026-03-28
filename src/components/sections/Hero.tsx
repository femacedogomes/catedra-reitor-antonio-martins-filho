'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import type { HeroData } from "@/types";

interface HeroProps {
  data: HeroData;
}

const heroImages = ["/assets/hero-1.jpg", "/assets/hero-2.jpg", "/assets/hero-3.jpg"];

export default function Hero({ data }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 2500);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-[2500ms]"
            style={{ opacity: index === currentImageIndex ? 1 : 0, zIndex: index === currentImageIndex ? 10 : 0 }}
          >
            <Image src={image} alt="Campus" fill className="object-cover object-center" priority={index === 0} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-dark/20 z-20" />
      </div>
      {/* Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 md:px-8">
        {data.eyebrow && (
          <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">{data.eyebrow}</p>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-2xl whitespace-pre-line">
          {data.title}
        </h1>
        {data.subtitle && (
          <p className="text-white/70 text-base md:text-lg max-w-xl mb-8 leading-relaxed">{data.subtitle}</p>
        )}
        <Link href={data.ctaHref} className="btn-primary text-sm">{data.ctaLabel}</Link>
      </div>
    </section>
  );
}
