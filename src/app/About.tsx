import { T } from "@/hooks/translations"
import { useReveal } from "../hooks/useReveal"

interface AboutProps { t: T }

const stats = (t: T) => [
    { num: "3", label: t.about.stat.sectors },
    { num: "∞", label: t.about.stat.ambition },
    { num: "1°", label: t.about.stat.quality },
    { num: "24h", label: t.about.stat.service },
]

export default function About({ t }: AboutProps) {
    const left = useReveal()
    const right = useReveal()

    return (
        <section id="sobre" className="px-[8%] py-28 bg-[#111111] grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            {/* Visual side */}
            <div
                ref={left.ref}
                className={`relative h-120 transition-all duration-700 ${left.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                {/* Outer offset border */}
                <div className="absolute -top-6 -left-6 right-6 bottom-6 border border-[#c9a84c]/08" />
                {/* Main box */}
                <div className="absolute inset-0 border border-[#c9a84c]/18 bg-gradient-to-br from-[#c9a84c]/05 to-transparent" />
                {/* Badge */}
                <div className="absolute top-8 left-8 bg-[#c9a84c] text-[#0a0a0a] px-6 py-4 text-[0.65rem] tracking-[0.15em] uppercase font-semibold">
                    {t.about.badge}
                </div>
                {/* Ghost text */}
                <div className="absolute sm:top-13 top-25 left-20 sm:left-30 font-['Cormorant_Garamond'] sm:text-[8rem] text-[7rem] font-light text-[#c9a84c]/08 leading-none select-none">
                    <img src="/images/oficialLogo.png" alt="MBD Logo" className="sm:w-56 sm:h-56 h-40 w-40" />
                </div>
                {/* Stats grid */}
                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-px">
                    {stats(t).map((s) => (
                        <div key={s.label} className="bg-[#1e1e1e] border border-[#c9a84c]/18 px-6 py-5">
                            <div className="font-['Cormorant_Garamond'] text-[2.5rem] font-light text-[#c9a84c] leading-none mb-1">
                                {s.num}
                            </div>
                            <div className="text-[0.65rem] tracking-[0.15em] uppercase text-[#888]">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Text side */}
            <div
                ref={right.ref}
                className={`transition-all duration-700 delay-150 ${right.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <p className="flex items-center gap-4 text-[0.62rem] tracking-[0.35em] uppercase text-[#c9a84c] mb-6">
                    {t.about.label}
                    <span className="inline-block w-8 h-px bg-[#c9a84c]" />
                </p>
                <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.2] mb-6">
                    <em className="not-italic text-[#c9a84c]">{t.about.title1}</em>{" "}
                    {t.about.title2}
                </h2>
                <p className="text-[0.88rem] leading-[1.9] text-[#f5f0e8]/65 mb-5">{t.about.p1}</p>
                <p className="text-[0.88rem] leading-[1.9] text-[#f5f0e8]/65 mb-5">{t.about.p2}</p>
                <p className="text-[0.88rem] leading-[1.9] text-[#f5f0e8]/65">{t.about.p3}</p>
            </div>
        </section>
    )
}
