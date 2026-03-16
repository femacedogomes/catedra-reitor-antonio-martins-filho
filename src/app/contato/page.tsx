"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";

const contactCards = [
  {
    icon: <Mail size={28} />,
    title: "E-mail",
    lines: ["catedraramf@ufc.br"],
  },
  {
    icon: <Phone size={28} />,
    title: "Telefone",
    lines: ["UFC — (85) 3366-7000"],
  },
  {
    icon: <MapPin size={28} />,
    title: "Endereço",
    lines: ["Colégio de Estudos Avançados", "CEA/UFC — Fortaleza, Ceará"],
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Inscrições",
    lines: ["catedraramf@ufc.br"],
  },
];

export default function ContatoPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "", save: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [target.name]: target.type === "checkbox" ? target.checked : target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHeader
        eyebrow="Cátedra Reitor Antônio Martins Filho"
        title="Contato"
        subtitle="Tire suas dúvidas sobre o processo seletivo ou o programa. Nossa equipe responde pelo e-mail oficial."
        image="/images/contato-header-1.png"
      />

      {/* Info Cards */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card) => (
              <div key={card.title} className="bg-white shadow-sm p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {card.icon}
                </div>
                <h3 className="font-serif text-base text-dark mb-3">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-dark/55 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mande uma mensagem */}
      <section className="bg-dark py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
                <span className="block w-6 h-0.5 bg-primary" />
                Fale Conosco
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Mande uma mensagem</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-10">
                Envie sua mensagem e nossa equipe retornará pelo e-mail informado. Para dúvidas urgentes sobre o processo seletivo, use diretamente o e-mail{" "}
                <a href="mailto:catedraramf@ufc.br" className="text-primary hover:underline">catedraramf@ufc.br</a>.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-sm">C</span>
                </div>
                <div>
                  <p className="text-white font-serif font-bold tracking-wider text-base">CATEDRA</p>
                  <p className="text-white/40 text-xs">UFC — CEA</p>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-primary/20 border border-primary/30 p-10 text-center">
                  <p className="font-serif text-xl text-white mb-2">Mensagem enviada!</p>
                  <p className="text-white/60 text-sm">Nossa equipe entrará em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="firstName" placeholder="First Name*" required onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors" />
                    <input type="text" name="lastName" placeholder="Last Name*" required onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <input type="email" name="email" placeholder="Email Address" required onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors" />
                  <textarea name="message" placeholder="Enter Your Message...*" required rows={5} onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors resize-none" />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="save" onChange={handleChange} className="mt-0.5 accent-primary" />
                    <span className="text-white/40 text-xs leading-relaxed">
                      Save my name &amp; email into browser for the next time I comment
                    </span>
                  </label>
                  <button type="submit" className="btn-primary w-full text-center py-4 text-sm">
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-80 md:h-96 bg-cream-dark overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.259!2d-38.5434!3d-3.7466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748c1b23a98c3%3A0x6da1f1a6f6b29d93!2sUniversidade%20Federal%20do%20Cear%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa UFC"
        />
      </section>
    </>
  );
}
