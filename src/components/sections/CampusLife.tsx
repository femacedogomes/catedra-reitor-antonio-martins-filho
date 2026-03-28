import Image from "next/image";
import Link from "next/link";
import type { CampusLifeSection as CampusLifeSectionType } from "@/types";

interface CampusLifeProps {
  data: CampusLifeSectionType;
}

export default function CampusLife({ data }: CampusLifeProps) {
  const mainImage = "/assets/campus-life-main.png";
  const galleryImages = [
    { url: "/assets/campus-gallery-1.jpg" },
    { url: "/assets/campus-gallery-2.jpg" },
    { url: "/assets/campus-gallery-3.jpg" },
    { url: "/assets/campus-gallery-4.jpg" },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-dark/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Image */}
          <div className="relative">
            <div className="relative aspect-auto w-full h-auto overflow-hidden">
              <Image src={mainImage} alt="Campus UFC"  width={800} height={400}  />
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <p className="text-dark/60 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-4">
              <span className="block w-6 h-0.5 bg-dark/60" />
              {data.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark mb-5">{data.title}</h2>
            {data.description && (
              <p className="text-dark/60 text-sm leading-relaxed mb-8">{data.description}</p>
            )}
            <Link href={data.ctaHref} className="border border-dark text-dark px-6 py-3 text-xs font-semibold tracking-wide uppercase hover:bg-dark hover:text-white transition-colors inline-block mb-8">
              {data.ctaLabel}
            </Link>

            {/* Gallery thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative w-28 h-20 flex-shrink-0 overflow-hidden border-2 border-dark/20 hover:border-terracota transition-colors cursor-pointer">
                  <Image
                    src={img.url}
                    alt={`Campus ${i + 1}`}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
