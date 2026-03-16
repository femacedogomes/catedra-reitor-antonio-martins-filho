"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const menuItems = [
  { label: "Quem Somos", href: "/about", active: true },
  { label: "História", href: "/about/historia" },
  { label: "Coordenação", href: "/about/coordenacao" },
  { label: "Mapa do Campus", href: "/about/campus-map" },
];

export default function AboutSidebar() {
  const [active, setActive] = useState("Quem Somos");

  return (
    <div className="sticky top-28">
      {/* Menu title */}
      <p className="text-xs font-bold tracking-widest uppercase text-dark/40 mb-3 px-1">
        Cátedra Inside
      </p>

      {/* Nav items */}
      <nav className="flex flex-col mb-6">
        {menuItems.map((item) => {
          const isActive = active === item.label;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`flex items-center justify-between px-4 py-3 text-sm font-semibold border-b border-dark/5 transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-dark/60 hover:text-dark hover:bg-white"
              }`}
            >
              {item.label}
              <ArrowRight size={14} className={isActive ? "text-white" : "text-dark/30"} />
            </Link>
          );
        })}
      </nav>

      {/* Campus image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src="/images/about-sidebar-campus-1.png"
          alt="CEA UFC"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
