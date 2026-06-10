import { Lang, T } from "@/hooks/translations";
import { useState, useEffect } from "react";

type Page = "home" | "products";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
  page: Page;
  setPage: (p: Page) => void;
}

export default function Navbar({ lang, setLang, t, page, setPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const catalogueLabel = { pt: "Catálogo", en: "Catalogue", fr: "Catalogue" }[lang];
  const homeLabel = { pt: "Início", en: "Home", fr: "Accueil" }[lang];
  const langs: Lang[] = ["pt", "en", "fr"];

  const homeLinks = [
    { href: "#sobre", label: t.nav.about },
    { href: "#empresas", label: t.nav.businesses },
    { href: "#servicos", label: t.nav.services },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[8%] transition-all duration-500
        ${scrolled || page === "products"
          ? "py-4 bg-[#0a0a0a]/97 border-b border-[#c9a84c]/18"
          : "py-6 bg-linear-to-b from-[#0a0a0a]/97 to-transparent"
        }`}
    >
      {/* Logo */}
      <button
        onClick={() => setPage("home")}
        className="font-['Cormorant_Garamond'] text-[1.8rem] font-semibold tracking-[0.08em] text-[#c9a84c] bg-transparent border-none cursor-pointer p-0"
      >
        <a
          href={'/#'}
        >
          {/* MBD<span className="text-[#f5f0e8] font-light"> Group</span> */}
                    <img src="/placeholder.png" alt="MBD Logo" className="sm:w-15 sm:h-15 h-12 w-12" />

        </a>
      </button>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none items-center">
        {page === "products" ? (
          <li>
            <button
              onClick={() => setPage("home")}
              className="text-[#f5f0e8]/70 bg-transparent border-none cursor-pointer text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-300 hover:text-[#c9a84c]"
            >
              ← {homeLabel}
            </button>
          </li>
        ) : (
          homeLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#f5f0e8]/70 no-underline text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-300 hover:text-[#c9a84c]"
              >
                {l.label}
              </a>
            </li>
          ))
        )}
        <li>
          <button
            onClick={() => setPage(page === "products" ? "home" : "products")}
            className={`px-4 py-2 border text-[0.7rem] tracking-[0.15em] uppercase transition-all duration-300 bg-transparent cursor-pointer
              ${page === "products"
                ? "border-[#c9a84c] text-[#c9a84c]"
                : "border-[#c9a84c]/30 text-[#c9a84c]/70 hover:border-[#c9a84c] hover:text-[#c9a84c]"
              }`}
          >
            {catalogueLabel}
          </button>
        </li>
      </ul>

      {/* Lang switcher */}
      <div className="flex items-center gap-1 text-[0.65rem] tracking-[0.15em]">
        {langs.map((l, i) => (
          <span key={l} className="flex items-center gap-1">
            {i > 0 && <span className="text-[#c9a84c]/30">|</span>}
            <button
              onClick={() => setLang(l)}
              className={`bg-transparent border-none cursor-pointer font-['Montserrat'] text-[0.65rem] tracking-[0.15em] uppercase px-1 py-0.5 transition-colors duration-300
                ${lang === l ? "text-[#c9a84c]" : "text-[#888] hover:text-[#c9a84c]"}`}
            >
              {l.toUpperCase()}
            </button>
          </span>
        ))}
      </div>
    </nav>
  );
}
