import { useState } from "react";
import { useReveal } from "../../../hooks/useReveal";
import { T } from "@/hooks/translations";

interface ContactProps { t: T }

export default function Contact({ t }: ContactProps) {
  const header = useReveal();
  const formRef = useReveal();
  const infoRef = useReveal();
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full bg-[#1e1e1e] border border-[#c9a84c]/18 text-[#f5f0e8] px-4 py-3.5 font-['Montserrat'] text-[0.82rem] font-light outline-none transition-colors duration-300 focus:border-[#c9a84c] placeholder:text-[#888]/50";

  const infoItems = [
    { label: t.ct.info.address, value: t.ct.info.addressVal },
    { label: t.ct.info.email, value: "geral@grupombd.com" },
    { label: t.ct.info.phone, value: "+351 000 000 000" },
    { label: t.ct.info.hours, value: t.ct.info.hoursVal },
  ];

  return (
    <section id="contacto" className="px-[8%] py-28 bg-[#0a0a0a]">
      {/* Header */}
      <div
        ref={header.ref}
        className={`mb-16 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="flex items-center gap-4 text-[0.62rem] tracking-[0.35em] uppercase text-[#c9a84c] mb-6">
          {t.ct.label}
          <span className="inline-block w-8 h-px bg-[#c9a84c]" />
        </p>
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.2]">
          <em className="not-italic text-[#c9a84c]">{t.ct.title1}</em>{" "}
          {t.ct.title2}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Form */}
        <div
          ref={formRef.ref}
          className={`flex flex-col gap-5 transition-all duration-700 ${formRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <label className="block text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">{t.ct.form.name}</label>
            <input type="text" className={inputClass} placeholder={t.ct.form.name} />
          </div>
          <div>
            <label className="block text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">{t.ct.form.email}</label>
            <input type="email" className={inputClass} placeholder="email@exemplo.com" />
          </div>
          <div>
            <label className="block text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">{t.ct.form.subject}</label>
            <select className={`${inputClass} appearance-none cursor-pointer`}>
              {t.ct.form.opts.map((o) => (
                <option key={o} className="bg-[#1e1e1e]">{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">{t.ct.form.msg}</label>
            <textarea className={`${inputClass} resize-none h-32`} placeholder="..." />
          </div>
          <button
            onClick={() => setSent(true)}
            className="relative self-start inline-block px-10 py-3.5 bg-[#c9a84c] text-[#0a0a0a] text-[0.7rem] tracking-[0.2em] uppercase font-medium overflow-hidden group transition-all duration-300 border-none cursor-pointer"
          >
            <span className="absolute inset-0 bg-[#e8c97a] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10">{sent ? "✓" : t.ct.form.send}</span>
          </button>
        </div>

        {/* Info */}
        <div
          ref={infoRef.ref}
          className={`pt-4 transition-all duration-700 delay-150 ${infoRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {infoItems.map((item, i) => (
            <div
              key={item.label}
              className={`pb-10 mb-10 ${i < infoItems.length - 1 ? "border-b border-[#c9a84c]/18" : ""}`}
            >
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[#c9a84c] mb-3">{item.label}</p>
              <p className="font-['Cormorant_Garamond'] text-[1.2rem] font-light leading-[1.7] text-[#f5f0e8]/80 whitespace-pre-line">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
