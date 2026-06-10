import { Lang, T } from "@/hooks/translations";

interface FooterProps { lang: Lang; t: T; onCatalogueClick: () => void }

export const Footer: React.FC<FooterProps> = ({ t, lang, onCatalogueClick }) => {
  const catalogueLabel = { pt: "Catálogo", en: "Catalogue", fr: "Catalogue" }[lang];

  return (
    <footer className="bg-[#111111] border-t border-[#c9a84c]/18 px-[8%] py-12 flex flex-wrap items-center justify-between gap-4">
      <div className="font-['Cormorant_Garamond'] text-[1.5rem] font-semibold text-[#c9a84c]">
        MBD <span className="text-[#f5f0e8] font-light"> Group</span>
      </div>
      <ul className="flex gap-8 list-none flex-wrap">
        {[
          { href: "#sobre", label: t.nav.about },
          { href: "#empresas", label: t.nav.businesses },
          { href: "#contacto", label: t.nav.contact },
        ].map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-[#888] no-underline text-[0.65rem] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[#c9a84c]">
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <button onClick={onCatalogueClick} className="text-[#888] bg-transparent border-none cursor-pointer text-[0.65rem] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[#c9a84c] p-0">
            {catalogueLabel}
          </button>
        </li>
      </ul>
      <p className="text-[#888] text-[0.65rem] tracking-widest">
        © 2026 3M, Powerd by Grupo MBD. {t.footer.rights}
      </p>
    </footer>
  );
}
