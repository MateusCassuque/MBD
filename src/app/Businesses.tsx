import { T } from "@/hooks/translations"
import { useReveal } from "../hooks/useReveal"

interface BusinessesProps { t: T; onViewProducts: () => void }

export default function Businesses({ t, onViewProducts }: BusinessesProps) {
  const header = useReveal()

  return (
    <section id="empresas" className="px-[8%] py-28 bg-[#0a0a0a]">
      <div
        ref={header.ref}
        className={`transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="flex items-center gap-4 text-[0.62rem] tracking-[0.35em] uppercase text-[#c9a84c] mb-6">
          {t.biz.label}
          <span className="inline-block w-8 h-px bg-[#c9a84c]" />
        </p>
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.2]">
          <em className="not-italic text-[#c9a84c]">{t.biz.title1}</em>{" "}
          {t.biz.title2}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {t.biz.items.map((item, i) => (
          <BizCard key={item.name} item={item} index={i + 1} onViewProducts={onViewProducts} />
        ))}
      </div>
    </section>
  )
}

function BizCard({
  item,
  index,
  onViewProducts,
}: {
  item: { cat: string, name: string, desc: string, icon: string }
  index: number
  onViewProducts: () => void
}) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`relative bg-[#1e1e1e] border border-[#c9a84c]/18 p-10 overflow-hidden cursor-pointer group
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        hover:-translate-y-1 hover:border-[#c9a84c]/35`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onViewProducts}
    >
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-[#c9a84c] to-transparent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
      <span className="absolute top-6 right-6 font-['Cormorant_Garamond'] text-[3.5rem] font-light text-[#c9a84c]/06 leading-none select-none">
        {String(index).padStart(2, "0")}
      </span>
      <div className="w-14 h-14 border border-[#c9a84c]/18 flex items-center justify-center text-[1.4rem] mb-8 transition-all duration-500 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/08">
        {item.icon}
      </div>
      <p className="text-[0.58rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-3">{item.cat}</p>
      <h3 className="font-['Cormorant_Garamond'] text-[1.6rem] font-normal leading-[1.2] mb-4">{item.name}</h3>
      <p className="text-[0.8rem] leading-[1.8] text-[#f5f0e8]/55">{item.desc}</p>
    </div>
  )
}
