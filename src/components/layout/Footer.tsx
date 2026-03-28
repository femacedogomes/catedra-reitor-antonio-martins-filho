import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import type { FooterData } from "@/types";

interface FooterProps {
  data: FooterData;
}

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <Facebook size={18} />,
  twitter: <Twitter size={18} />,
  instagram: <Instagram size={18} />,
  linkedin: <Linkedin size={18} />,
  youtube: <Youtube size={18} />,
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="relative bg-dark text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image src="/assets/logo-mono.svg" alt="Cátedra RMF" width={160} height={50} className="w-40 h-auto brightness-0 invert opacity-80" />
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-6">{data.tagline}</p>
            <div className="flex items-center gap-3">
              {data.socialLinks.map((social: { platform: string; href: string }) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  className="w-9 h-9 bg-white/10 hover:bg-terracota flex items-center justify-center transition-colors"
                  aria-label={social.platform}
                >
                  {socialIcons[social.platform] || <span className="text-xs">{social.platform[0].toUpperCase()}</span>}
                </Link>
              ))}
            </div>
          </div>

          {/* Columns */}
          {data.columns.map((col: FooterColumn) => (
            <div key={col.title}>
              <h4 className="text-white font-serif text-base mb-5">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link: { label: string; href: string }) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">{data.copyright}</p>
          {/* Logo Bolsa */}
        <div className=" border-white/10">
          <Image src="/assets/regua-cor.svg" alt="Bolsa Reitoral de Liderança" width={400} height={40} className="w-96 h-auto" />
        </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacidade</Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">Termos de Uso</Link>
            <Link href="/sitemap" className="text-white/40 hover:text-white/70 text-xs transition-colors">Mapa do Site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
