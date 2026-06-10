import { useEffect } from "react";
import { BUSINESSES, Product } from "./products";
import { Lang } from "@/hooks/translations";

interface Props {
  product: Product;
  lang: Lang;
  onClose: () => void;
}

const BADGE_LABELS: Record<string, Record<Lang, string>> = {
  novo:       { pt: "Novo",       en: "New",       fr: "Nouveau" },
  destaque:   { pt: "Destaque",   en: "Featured",  fr: "En vedette" },
  limitado:   { pt: "Limitado",   en: "Limited",   fr: "Limité" },
  bestseller: { pt: "Bestseller", en: "Bestseller", fr: "Best-seller" },
};

export default function ProductModal({ product, lang, onClose }: Props) {
  const biz = BUSINESSES[product.business];

  const name = lang === "en" ? product.nameEn : lang === "fr" ? product.nameFr : product.name;
  const desc = lang === "en" ? product.descriptionEn : lang === "fr" ? product.descriptionFr : product.description;

  const labels = {
    pt: { minOrder: "Pedido mínimo", unit: "Unidade", contact: "Solicitar Orçamento", specs: "Especificações", tags: "Etiquetas", close: "Fechar", from: "A partir de", reviews: "avaliações" },
    en: { minOrder: "Minimum order", unit: "Unit", contact: "Request Quote", specs: "Specifications", tags: "Tags", close: "Close", from: "From", reviews: "reviews" },
    fr: { minOrder: "Commande min.", unit: "Unité", contact: "Demander un devis", specs: "Spécifications", tags: "Étiquettes", close: "Fermer", from: "À partir de", reviews: "avis" },
  }[lang];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[92vh] bg-[#141414] border border-[#c9a84c]/20 overflow-y-auto rounded-t-2xl md:rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header strip */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#141414]/95 backdrop-blur border-b border-[#c9a84c]/12">
          <div className="flex items-center gap-3">
            <span className="text-xl">{biz.icon}</span>
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#c9a84c]">{biz[lang === "en" ? "labelEn" : lang === "fr" ? "labelFr" : "label"]}</span>
            <span className="text-[#c9a84c]/30">·</span>
            <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[#888]">{product.category}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center border border-[#c9a84c]/20 text-[#888] hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors duration-200 text-sm"
          >
            ✕
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8">
            {/* Left: image placeholder + price */}
            <div>
              {/* Image block */}
              <div
                className="w-full aspect-square rounded-sm mb-4 flex items-center justify-center relative overflow-hidden"
                style={{ background: product.color }}
              >
                <span className="text-6xl opacity-60">{biz.icon}</span>
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#c9a84c] text-[#0a0a0a] text-[0.55rem] tracking-[0.2em] uppercase font-semibold px-2.5 py-1">
                    {BADGE_LABELS[product.badge][lang]}
                  </div>
                )}
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#c9a84c]/60" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#c9a84c]/60" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#c9a84c]/60" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#c9a84c]/60" />
              </div>

              {/* Price block */}
              <div className="bg-[#1a1a1a] border border-[#c9a84c]/15 p-5">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#888] mb-1">{labels.from}</p>
                <p className="font-['Cormorant_Garamond'] text-[2.8rem] font-light text-[#c9a84c] leading-none">
                  {product.price.toFixed(2)}<span className="text-xl ml-1">{product.currency}</span>
                </p>
                <p className="text-[0.7rem] text-[#888] mt-1">/ {product.unit}</p>
                <div className="h-px bg-[#c9a84c]/12 my-4" />
                <div className="flex items-center justify-between text-[0.72rem] text-[#f5f0e8]/60">
                  <span>{labels.minOrder}</span>
                  <span className="text-[#f5f0e8]">{product.minOrder} {product.unit}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className={`text-sm ${i <= Math.round(product.rating) ? "text-[#c9a84c]" : "text-[#333]"}`}>★</span>
                  ))}
                </div>
                <span className="text-[#c9a84c] text-[0.8rem] font-medium">{product.rating}</span>
                <span className="text-[#888] text-[0.72rem]">({product.reviews} {labels.reviews})</span>
              </div>

              {/* CTA */}
              <button className="mt-5 w-full relative overflow-hidden bg-[#c9a84c] text-[#0a0a0a] py-3.5 text-[0.7rem] tracking-[0.2em] uppercase font-semibold group transition-all duration-300">
                <span className="absolute inset-0 bg-[#e8c97a] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10">{labels.contact}</span>
              </button>
            </div>

            {/* Right: details */}
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-[2rem] font-light leading-[1.15] mb-4 text-[#f5f0e8]">
                {name}
              </h2>
              <p className="text-[0.83rem] leading-[1.85] text-[#f5f0e8]/65 mb-6">{desc}</p>

              {/* Specs */}
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-3">{labels.specs}</p>
              <div className="space-y-0">
                {product.specs.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex items-start justify-between py-2.5 text-[0.78rem] ${i < product.specs.length - 1 ? "border-b border-[#c9a84c]/10" : ""}`}
                  >
                    <span className="text-[#888] min-w-[120px]">{s.label}</span>
                    <span className="text-[#f5f0e8]/85 text-right">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#c9a84c] mt-6 mb-3">{labels.tags}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 border border-[#c9a84c]/20 text-[#888] text-[0.65rem] tracking-[0.1em] uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors duration-200 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
