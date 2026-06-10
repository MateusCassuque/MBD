import { Lang } from "@/hooks/translations";
import { BUSINESSES, Product } from "./products";

interface Props {
  product: Product;
  lang: Lang;
  onClick: () => void;
}

const BADGE_LABELS: Record<string, Record<Lang, string>> = {
  novo:       { pt: "Novo",       en: "New",       fr: "Nouveau" },
  destaque:   { pt: "Destaque",   en: "Featured",  fr: "En vedette" },
  limitado:   { pt: "Limitado",   en: "Limited",   fr: "Limité" },
  bestseller: { pt: "Bestseller", en: "Bestseller", fr: "Best-seller" },
};

export default function ProductCard({ product, lang, onClick }: Props) {
  const biz = BUSINESSES[product.business];
  const name = lang === "en" ? product.nameEn : lang === "fr" ? product.nameFr : product.name;

  return (
    <div
      onClick={onClick}
      className="group bg-[#161616] border border-[#c9a84c]/12 cursor-pointer transition-all duration-400 hover:-translate-y-1 hover:border-[#c9a84c]/35 hover:shadow-[0_8px_32px_rgba(201,168,76,0.08)] relative overflow-hidden flex flex-col"
    >
      {/* Bottom shine */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c9a84c] to-transparent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

      {/* Image area */}
      <div
        className="relative aspect-[4/3] flex items-center justify-center overflow-hidden"
        style={{ background: product.color }}
      >
        <span className="text-5xl opacity-50 group-hover:scale-110 transition-transform duration-500">{biz.icon}</span>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 bg-[#c9a84c] text-[#0a0a0a] text-[0.52rem] tracking-[0.2em] uppercase font-semibold px-2 py-0.5">
            {BADGE_LABELS[product.badge][lang]}
          </div>
        )}

        {/* Business tag */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-sm border border-[#c9a84c]/20 text-[#c9a84c] text-[0.52rem] tracking-[0.15em] uppercase px-2 py-0.5">
          {biz[lang === "en" ? "labelEn" : lang === "fr" ? "labelFr" : "label"]}
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#c9a84c]/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#c9a84c]/40" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[0.58rem] tracking-[0.2em] uppercase text-[#888] mb-1.5">{product.category}</p>
        <h3 className="font-['Cormorant_Garamond'] text-[1.15rem] font-normal leading-[1.3] text-[#f5f0e8] mb-3 group-hover:text-[#e8c97a] transition-colors duration-300 flex-1">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <span key={i} className={`text-[0.65rem] ${i <= Math.round(product.rating) ? "text-[#c9a84c]" : "text-[#2a2a2a]"}`}>★</span>
            ))}
          </div>
          <span className="text-[0.65rem] text-[#888]">({product.reviews})</span>
        </div>

        {/* Price row */}
        <div className="flex items-end justify-between pt-3 border-t border-[#c9a84c]/10">
          <div>
            <p className="text-[0.55rem] tracking-[0.15em] uppercase text-[#888]">
              {lang === "pt" ? "A partir de" : lang === "en" ? "From" : "À partir de"}
            </p>
            <p className="font-['Cormorant_Garamond'] text-[1.5rem] font-light text-[#c9a84c] leading-none">
              {product.price.toFixed(2)}<span className="text-sm ml-0.5">{product.currency}</span>
            </p>
            <p className="text-[0.58rem] text-[#888]">/ {product.unit}</p>
          </div>
          <div className="w-8 h-8 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]/40 group-hover:border-[#c9a84c] group-hover:text-[#c9a84c] group-hover:bg-[#c9a84c]/08 transition-all duration-300 text-sm">
            →
          </div>
        </div>
      </div>
    </div>
  );
}
