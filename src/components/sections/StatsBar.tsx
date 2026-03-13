import { GraduationCap, BookOpen, Users, Award, Globe, Lightbulb } from "lucide-react";
import type { StatItem } from "@/types";

interface StatsBarProps {
  data: StatItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={28} />,
  BookOpen: <BookOpen size={28} />,
  Users: <Users size={28} />,
  Award: <Award size={28} />,
  Globe: <Globe size={28} />,
  Lightbulb: <Lightbulb size={28} />,
};

export default function StatsBar({ data }: StatsBarProps) {
  return (
    <section className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dark/10">
          {data.map((stat, i) => (
            <div
              key={i}
              className={`flex items-center gap-5 px-6 py-8 ${i === 1 ? "bg-primary text-white" : "text-dark"}`}
            >
              <div className={`flex-shrink-0 ${i === 1 ? "text-white" : "text-primary"}`}>
                {iconMap[stat.icon] || <GraduationCap size={28} />}
              </div>
              <div>
                <div className={`font-serif text-2xl font-bold leading-none mb-1 ${i === 1 ? "text-white" : "text-dark"}`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-semibold mb-1 ${i === 1 ? "text-white" : "text-dark"}`}>
                  {stat.label}
                </div>
                <div className={`text-xs leading-relaxed ${i === 1 ? "text-white/70" : "text-dark/50"}`}>
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
