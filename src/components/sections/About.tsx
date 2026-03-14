"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { AboutSection as AboutSectionType } from "@/types";

interface AboutProps {
  data: AboutSectionType;
}

export default function About({ data }: AboutProps) {
  const [activeTab, setActiveTab] = useState(0);
  // Use provided image or fallback to default
  const imageUrl = data.leftImage?.asset?.url || "/images/about-left-image-1.png";

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={imageUrl}
                alt="University campus"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute bottom-6 right-6 bg-primary text-white p-5 text-center shadow-xl">
              <span className="block font-serif text-3xl font-bold">{data.badgeValue}</span>
              <span className="block text-xs tracking-wider uppercase mt-1 text-white/80">{data.badgeLabel}</span>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <p className="section-eyebrow">{data.eyebrow}</p>
            <h2 className="section-title mb-5">{data.title}</h2>
            <p className="text-dark/60 text-sm leading-relaxed mb-6">{data.description}</p>

            {/* Tabs */}
            {data.tabs && data.tabs.length > 0 && (
              <div className="mb-6">
                <div className="flex gap-1 mb-4 border-b border-dark/10">
                  {data.tabs.map((tab, i) => (
                    <button
                      key={tab.label}
                      onClick={() => setActiveTab(i)}
                      className={`px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors border-b-2 -mb-px ${
                        activeTab === i
                          ? "border-primary text-primary"
                          : "border-transparent text-dark/50 hover:text-dark"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <p className="text-dark/60 text-sm leading-relaxed">
                  {data.tabs[activeTab]?.content}
                </p>
              </div>
            )}

            {/* Highlights */}
            {data.highlights && data.highlights.length > 0 && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {data.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-dark/70">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    {h.text}
                  </li>
                ))}
              </ul>
            )}

            <Link href={data.ctaHref} className="btn-primary text-xs">
              {data.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
