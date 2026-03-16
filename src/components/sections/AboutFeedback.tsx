"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const feedbacks = [
  {
    name: "João Bosco Ribeiro Neto",
    role: "Presidente do Instituto Mucuripe",
    rating: 5,
    quote:
      "A criação da Cátedra representa um passo decisivo na construção de uma nova geração de líderes cearenses, capazes de atuar de forma ética, técnica e inovadora.",
  },
  {
    name: "Profa. Dra. Cynara Mariano",
    role: "Coordenadora da Cátedra — UFC",
    rating: 5,
    quote:
      "Estamos inaugurando um ciclo inédito no ensino superior cearense. A Cátedra forma líderes com visão crítica e compromisso real com o desenvolvimento do Ceará.",
  },
  {
    name: "Bolsista Reitoral",
    role: "Estudante de Graduação — UFC",
    rating: 5,
    quote:
      "Nunca imaginei ter esse nível de formação ainda na graduação. O acesso a mentores de referência e ao Gabinete do Reitor é simplesmente transformador.",
  },
  {
    name: "Mentor do Programa",
    role: "Liderança do Setor Público",
    rating: 5,
    quote:
      "Ver jovens tão comprometidos com o futuro do Ceará renova a esperança. A Cátedra está construindo algo que vai impactar o estado por décadas.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= count ? "text-yellow-400 fill-yellow-400" : "text-dark/20"}
        />
      ))}
    </div>
  );
}

export default function AboutFeedback() {
  const [page, setPage] = useState(0);
  // Show 2 cards per page
  const pairs = [feedbacks.slice(0, 2), feedbacks.slice(2, 4)];
  const current = pairs[page];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        {current.map((fb, i) => (
          <div key={i} className="bg-white shadow-sm p-6 border border-dark/5">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-semibold text-sm text-dark">{fb.name}</p>
                <p className="text-dark/40 text-xs mt-0.5">{fb.role}</p>
              </div>
              {/* Quote icon */}
              <span className="text-primary/20 font-serif text-4xl leading-none">"</span>
            </div>

            {/* Stars + rating */}
            <div className="flex items-center gap-2 mb-3">
              <StarRating count={fb.rating} />
              <span className="text-dark font-bold text-sm">{fb.rating}.0</span>
            </div>

            {/* Quote */}
            <p className="text-dark/60 text-xs leading-relaxed italic">
              "{fb.quote}"
            </p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {pairs.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === page ? "bg-primary" : "bg-dark/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
