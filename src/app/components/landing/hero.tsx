import { T } from "@/hooks/translations";
import { useEffect, useRef, useState } from "react";

interface HeroProps { t: T; onCatalogueClick: () => void }

// Three business pillars shown on the right panel
const PILLARS = [
  {
    icon: "🍽",
    keyPt: "Restaurante", keyEn: "Restaurant", keyFr: "Restaurant",
    descPt: "Gastronomia & Eventos",
    descEn: "Gastronomy & Events",
    descFr: "Gastronomie & Événements",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    icon: "👗",
    keyPt: "Boutique", keyEn: "Boutique", keyFr: "Boutique",
    descPt: "Moda & Acessórios",
    descEn: "Fashion & Accessories",
    descFr: "Mode & Accessoires",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    icon: "🧵",
    keyPt: "Têxtil", keyEn: "Textiles", keyFr: "Textile",
    descPt: "Comércio de Fios",
    descEn: "Yarn Trading",
    descFr: "Commerce de Fils",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
  },
];

export function HeroPage({ t, onCatalogueClick }: HeroProps) {
  const [activePillar, setActivePillar] = useState(0);
  const [lineReady, setLineReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Animate the gold line on mount
  useEffect(() => {
    const t = setTimeout(() => setLineReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  // Parallax scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-cycle pillars
  useEffect(() => {
    const id = setInterval(() => setActivePillar(p => (p + 1) % 3), 3200);
    return () => clearInterval(id);
  }, []);

  const lang = (t.hero.tag === "Grupo de Referência") ? "pt"
             : (t.hero.tag === "Reference Group")     ? "en"
             : "fr";

  const pillar = PILLARS[activePillar];
  const pillarKey   = lang === "pt" ? pillar.keyPt   : lang === "en" ? pillar.keyEn   : pillar.keyFr;
  const pillarDesc  = lang === "pt" ? pillar.descPt  : lang === "en" ? pillar.descEn  : pillar.descFr;
  const scrollLabel = { pt: "Explorar", en: "Explore", fr: "Explorer" }[lang];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ── BACKGROUND IMAGE with parallax ── */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)`, willChange: "transform" }}
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
          alt=""
          className="w-full h-full object-cover scale-110"
          style={{ filter: "brightness(0.32) saturate(0.7)" }}
        />
      </div>

      {/* ── GRADIENT OVERLAYS ── */}
      {/* Left dark vignette — keeps text readable */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#080808]/95 via-[#080808]/70 to-transparent" />
      {/* Bottom fade to site bg */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      {/* Subtle gold radial behind text */}
      <div className="absolute top-[30%] left-[8%] w-[500px] h-[500px] z-[1] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)" }} />

      {/* ── CONTENT WRAPPER ── */}
      <div className="relative z-10 flex w-full min-h-screen">

        {/* ────── LEFT PANEL ────── */}
        <div className="flex flex-col justify-center px-[8%] py-32 w-full lg:w-[58%]">

          {/* Tag line */}
          <div
            className="flex items-center gap-0 mb-10 overflow-hidden"
            style={{ animation: "fadeUp 0.8s 0.2s both" }}
          >
            <span
              className="inline-block h-px bg-[#c9a84c] transition-all duration-[1200ms] ease-out"
              style={{ width: lineReady ? "2.5rem" : "0", marginRight: lineReady ? "1rem" : "0" }}
            />
            <span className="text-[0.6rem] tracking-[0.4em] uppercase text-[#c9a84c] whitespace-nowrap">
              {t.hero.tag}
            </span>
            <span
              className="inline-block h-px bg-[#c9a84c]/30 ml-4 transition-all duration-[1800ms] ease-out delay-300"
              style={{ width: lineReady ? "100px" : "0" }}
            />
          </div>

          {/* Main heading */}
          <h1
            className="font-['Cormorant_Garamond'] leading-[0.95] mb-8"
            style={{
              fontSize: "clamp(4rem, 9vw, 8.5rem)",
              fontWeight: 300,
              animation: "fadeUp 1s 0.5s both",
            }}
          >
            <span className="block text-[#f5f0e8]">{t.hero.title1}</span>
            <span
              className="block italic"
              style={{
                color: "#c9a84c",
                WebkitTextStroke: "0px",
                textShadow: "0 0 80px rgba(201,168,76,0.4)",
              }}
            >
              {t.hero.title2}
            </span>
          </h1>

          {/* Thin horizontal rule — editorial signature */}
          <div
            className="h-px mb-8 transition-all duration-[1400ms] ease-out"
            style={{
              width: lineReady ? "min(420px, 80%)" : "0",
              background: "linear-gradient(to right, rgba(201,168,76,0.6), transparent)",
              transitionDelay: "700ms",
            }}
          />

          {/* Description */}
          <p
            className="max-w-[440px] text-[0.86rem] leading-[1.95] text-[#f5f0e8]/55 mb-12"
            style={{ animation: "fadeUp 1s 0.9s both" }}
          >
            {t.hero.desc}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "fadeUp 1s 1.1s both" }}
          >
            {/* Primary */}
            <button
              onClick={onCatalogueClick}
              className="group relative overflow-hidden border-none cursor-pointer"
              style={{
                padding: "1rem 2.8rem",
                background: "#c9a84c",
                color: "#080808",
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span className="absolute inset-0 bg-[#e8c97a] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10">{t.hero.cta1}</span>
            </button>

            {/* Secondary */}
            <a
              href="#contacto"
              className="flex items-center gap-3 no-underline group"
              style={{
                padding: "1rem 2rem",
                border: "1px solid rgba(201,168,76,0.25)",
                color: "#f5f0e8",
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a84c";
                (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.25)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#f5f0e8";
              }}
            >
              {t.hero.cta2}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex gap-10 mt-16 pt-8"
            style={{
              borderTop: "1px solid rgba(201,168,76,0.12)",
              animation: "fadeUp 1s 1.3s both",
            }}
          >
            {[
              { num: "3", label: { pt: "Sectores", en: "Sectors", fr: "Secteurs" } },
              { num: "100%", label: { pt: "Qualidade", en: "Quality", fr: "Qualité" } },
              { num: "24h", label: { pt: "Dedicação", en: "Dedication", fr: "Dédication" } },
            ].map(s => (
              <div key={s.num}>
                <div
                  className="font-['Cormorant_Garamond'] text-[#c9a84c]"
                  style={{ fontSize: "2rem", fontWeight: 300, lineHeight: 1 }}
                >
                  {s.num}
                </div>
                <div
                  className="text-[#888] mt-1"
                  style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
                >
                  {s.label[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ────── RIGHT PANEL — Business Pillars ────── */}
        <div className="hidden lg:flex flex-col justify-center pr-[5%] pl-8 w-[42%] gap-3">
          {PILLARS.map((p, i) => {
            const isActive = activePillar === i;
            const key  = lang === "pt" ? p.keyPt  : lang === "en" ? p.keyEn  : p.keyFr;
            const desc = lang === "pt" ? p.descPt : lang === "en" ? p.descEn : p.descFr;

            return (
              <button
                key={i}
                onClick={() => setActivePillar(i)}
                className="relative overflow-hidden text-left border-none cursor-pointer group transition-all duration-500"
                style={{
                  background: isActive ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${isActive ? "rgba(201,168,76,0.35)" : "rgba(201,168,76,0.1)"}`,
                  padding: isActive ? "1.8rem 2rem" : "1.2rem 2rem",
                  borderRadius: 0,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Background image on active */}
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    backgroundImage: `url(${p.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: isActive ? 0.12 : 0,
                    filter: "saturate(0.4)",
                  }}
                />

                {/* Active left bar */}
                <div
                  className="absolute left-0 top-0 w-0.5 transition-all duration-500"
                  style={{
                    height: isActive ? "100%" : "0%",
                    background: "linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.2))",
                  }}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <span
                    className="transition-all duration-300"
                    style={{ fontSize: isActive ? "1.6rem" : "1.2rem", opacity: isActive ? 1 : 0.5 }}
                  >
                    {p.icon}
                  </span>
                  <div className="flex-1">
                    <div
                      className="font-['Cormorant_Garamond'] transition-all duration-300"
                      style={{
                        fontSize: isActive ? "1.35rem" : "1.1rem",
                        fontWeight: 400,
                        color: isActive ? "#f5f0e8" : "rgba(245,240,232,0.45)",
                        letterSpacing: "0.03em",
                        lineHeight: 1.2,
                      }}
                    >
                      {key}
                    </div>
                    <div
                      className="transition-all duration-500 overflow-hidden"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#c9a84c",
                        opacity: isActive ? 1 : 0,
                        maxHeight: isActive ? "2rem" : "0",
                        marginTop: isActive ? "0.3rem" : "0",
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                  <span
                    className="transition-all duration-300"
                    style={{
                      color: "#c9a84c",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateX(0)" : "translateX(-6px)",
                      fontSize: "0.9rem",
                    }}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}

          {/* Active pillar featured image */}
          <div
            className="relative overflow-hidden mt-2 transition-all duration-700"
            style={{ height: "200px" }}
          >
            {PILLARS.map((p, i) => (
              <img
                key={i}
                src={p.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                style={{
                  opacity: activePillar === i ? 1 : 0,
                  transform: activePillar === i ? "scale(1)" : "scale(1.05)",
                  filter: "brightness(0.7) saturate(0.8)",
                }}
              />
            ))}
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c9a84c] z-10" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c9a84c] z-10" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c9a84c] z-10" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c9a84c] z-10" />
            {/* Label overlay */}
            <div className="absolute bottom-3 left-4 z-10">
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  background: "rgba(8,8,8,0.7)",
                  padding: "0.2rem 0.6rem",
                  backdropFilter: "blur(4px)",
                }}
              >
                MBD · {pillarKey}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div
        className="absolute bottom-10 left-[8%] z-20 flex items-center gap-3"
        style={{ animation: "fadeUp 1s 1.6s both" }}
      >
        <div className="relative w-5 h-8 border border-[#c9a84c]/35 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-[#c9a84c] rounded-full animate-bounce" />
        </div>
        <span
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(201,168,76,0.5)",
          }}
        >
          {scrollLabel}
        </span>
      </div>

      {/* ── PILLAR INDEX DOTS — mobile ── */}
      <div className="absolute bottom-10 right-[8%] z-20 flex gap-2 lg:hidden">
        {PILLARS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActivePillar(i)}
            className="border-none cursor-pointer p-0 transition-all duration-300"
            style={{
              width: activePillar === i ? "1.5rem" : "0.4rem",
              height: "0.4rem",
              borderRadius: "2px",
              background: activePillar === i ? "#c9a84c" : "rgba(201,168,76,0.3)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
