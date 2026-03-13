"use client";

import { useState } from "react";
import Image from "next/image";
import type { ApplicationForm as ApplicationFormType } from "@/types";

interface ApplicationFormProps {
  data: ApplicationFormType;
}

export default function ApplicationForm({ data }: ApplicationFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to API / form service
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="section-eyebrow justify-center">{data.title}</p>
            <p className="text-dark/60 text-sm leading-relaxed max-w-xl mx-auto">{data.subtitle}</p>
          </div>

          {submitted ? (
            <div className="bg-primary text-white text-center py-12 px-8">
              <h3 className="font-serif text-2xl mb-3">Application Received!</h3>
              <p className="text-white/80 text-sm">Our admissions team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white shadow-sm p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {data.fields.map((field) => {
                  const className = field.halfWidth ? "" : "sm:col-span-2";
                  if (field.type === "textarea") {
                    return (
                      <div key={field.name} className={className}>
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          rows={4}
                          onChange={handleChange}
                          className="w-full border border-dark/10 px-4 py-3 text-sm text-dark placeholder-dark/30 focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                      </div>
                    );
                  }
                  return (
                    <div key={field.name} className={className}>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={handleChange}
                        className="w-full border border-dark/10 px-4 py-3 text-sm text-dark placeholder-dark/30 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  );
                })}
              </div>
              <button type="submit" className="btn-primary w-full text-center text-sm py-4">
                {data.submitLabel}
              </button>
            </form>
          )}

          {/* Campus image */}
          <div className="relative mt-6 aspect-[16/5] overflow-hidden">
            <Image
              src="/images/application-form-campus-1.png"
              alt="University campus"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
