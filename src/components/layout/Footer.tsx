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
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">U</span>
              </div>
              <span className="text-white font-serif font-bold text-xl tracking-wider">
                {data.logoText}
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{data.tagline}</p>
            <div className="flex items-center gap-3">
              {data.socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  className="w-9 h-9 bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.platform}
                >
                  {socialIcons[social.platform] || <span className="text-xs">{social.platform[0].toUpperCase()}</span>}
                </Link>
              ))}
            </div>
          </div>

          {/* Columns */}
          {data.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-serif text-base mb-5">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">{data.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-white/40 hover:text-white/70 text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
