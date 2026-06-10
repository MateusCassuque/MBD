import { useState } from "react"
import { useReveal } from "../../../hooks/useReveal"
import { T } from "@/hooks/translations"

interface ServicesProps { t: T }

export default function Services({ t }: ServicesProps) {
  const left = useReveal()
  const right = useReveal()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="servicos" className="px-[8%] py-28 bg-[#181818] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 items-start">
      {/* Left */}
      <div
        ref={left.ref}
        className={`transition-all duration-700 ${left.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="flex items-center gap-4 text-[0.62rem] tracking-[0.35em] uppercase text-[#c9a84c] mb-6">
          {t.svc.label}
          <span className="inline-block w-8 h-px bg-[#c9a84c]" />
        </p>
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.2] mb-6">
          <em className="not-italic text-[#c9a84c]">{t.svc.title1}</em>
          <br />
          {t.svc.title2}
        </h2>
        <p className="text-[0.82rem] leading-[1.9] text-[#f5f0e8]/55 mt-6">{t.svc.desc}</p>
      </div>

      {/* Right: service list */}
      <div
        ref={right.ref}
        className={`transition-all duration-700 delay-150 ${right.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {t.svc.items.map((item, i) => (
          <div
            key={item.title}
            className="grid grid-cols-[auto_1fr_auto] gap-6 items-start py-8 border-b border-[#c9a84c]/18 first:border-t cursor-pointer group"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="font-['Cormorant_Garamond'] text-[0.9rem] text-[#c9a84c]/60 mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className={`font-['Cormorant_Garamond'] text-[1.3rem] font-normal transition-colors duration-300 mb-1 ${hovered === i ? "text-[#c9a84c]" : "text-[#f5f0e8]"}`}>
                {item.title}
              </p>
              <p className="text-[0.75rem] text-[#888] tracking-[0.05em]">{item.sub}</p>
            </div>
            <span className={`text-[#c9a84c] mt-0.5 transition-all duration-300 ${hovered === i ? "opacity-100 translate-x-1" : "opacity-0 -translate-x-1"}`}>
              →
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
