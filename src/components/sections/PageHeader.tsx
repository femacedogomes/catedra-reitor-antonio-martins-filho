import Image from "next/image";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHeader({ eyebrow, title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 flex items-center overflow-hidden min-h-[320px]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={image || "/images/page-header-default-1.png"}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        {eyebrow && (
          <p className="text-primary text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
            <span className="block w-6 h-0.5 bg-primary" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-base max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
