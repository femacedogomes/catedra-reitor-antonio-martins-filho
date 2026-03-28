import Image from "next/image";
import Link from "next/link";
import type { CampusLifeSection as CampusLifeSectionType } from "@/types";

interface CampusLifeProps {
  data: CampusLifeSectionType;
}

export default function CampusLife({ data }: CampusLifeProps) {
  const galleryImages = data.gallery?.length
    ? data.gallery
    : Array.from({ length: 4 }, (_, i) => ({ asset: { url: `/images/campus-gallery-${i + 1}.png` } }));

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={data.mainImage?.asset?.url || "/images/campus-life-main-1.png"} alt="Campus UFC" fill className="object-cover" />
          <div className="absolute inset-0 bg-dark/60" />
        </div>


        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="max-w-xl">
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-4">
              <span className="block w-6 h-0.5 bg-white/60" />
              {data.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-5">{data.title}</h2>
            {data.description && (
              <p className="text-white/70 text-sm leading-relaxed mb-8">{data.description}</p>
            )}
            <Link href={data.ctaHref} className="border border-white text-white px-6 py-3 text-xs font-semibold tracking-wide uppercase hover:bg-white hover:text-dark transition-colors inline-block">
              {data.ctaLabel}
            </Link>
          </div>

          {/* Gallery thumbnails */}
          <div className="flex gap-3 mt-10 overflow-x-auto pb-2">
            {galleryImages.slice(0, 4).map((img, i) => (
              <div key={i} className="relative w-28 h-20 flex-shrink-0 overflow-hidden border-2 border-white/30 hover:border-terracota transition-colors cursor-pointer">
                <Image
                  src={img.asset?.url || `/images/campus-gallery-${i + 1}.png`}
                  alt={`Campus ${i + 1}`}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
