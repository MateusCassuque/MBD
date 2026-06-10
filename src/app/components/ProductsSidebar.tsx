import { Lang } from "@/hooks/translations";
import { BUSINESSES, BusinessKey, CATEGORIES } from "./products";

interface Filters {
  businesses: BusinessKey[];
  categories: string[];
  priceMax: number;
  badge: string;
  sort: string;
}

interface Props {
  filters: Filters;
  setFilters: (f: Filters) => void;
  lang: Lang;
  totalCount: number;
}

const UI: Record<Lang, {
  filters: string; businesses: string; categories: string; price: string;
  badge: string; all: string; sort: string; sortOptions: { v: string; l: string }[];
  results: string;
}> = {
  pt: {
    filters: "Filtros", businesses: "Empresa", categories: "Categoria",
    price: "Preço máximo", badge: "Destacados", all: "Todos",
    sort: "Ordenar por",
    sortOptions: [
      { v: "default", l: "Relevância" },
      { v: "price_asc", l: "Preço ↑" },
      { v: "price_desc", l: "Preço ↓" },
      { v: "rating", l: "Melhor avaliação" },
      { v: "reviews", l: "Mais avaliados" },
    ],
    results: "resultados",
  },
  en: {
    filters: "Filters", businesses: "Business", categories: "Category",
    price: "Max price", badge: "Featured", all: "All",
    sort: "Sort by",
    sortOptions: [
      { v: "default", l: "Relevance" },
      { v: "price_asc", l: "Price ↑" },
      { v: "price_desc", l: "Price ↓" },
      { v: "rating", l: "Top rated" },
      { v: "reviews", l: "Most reviewed" },
    ],
    results: "results",
  },
  fr: {
    filters: "Filtres", businesses: "Entreprise", categories: "Catégorie",
    price: "Prix maximum", badge: "En vedette", all: "Tous",
    sort: "Trier par",
    sortOptions: [
      { v: "default", l: "Pertinence" },
      { v: "price_asc", l: "Prix ↑" },
      { v: "price_desc", l: "Prix ↓" },
      { v: "rating", l: "Mieux notés" },
      { v: "reviews", l: "Plus d'avis" },
    ],
    results: "résultats",
  },
};

const BADGE_OPTIONS: Record<Lang, { v: string; l: string }[]> = {
  pt: [{ v: "", l: "Todos" }, { v: "novo", l: "Novo" }, { v: "destaque", l: "Destaque" }, { v: "limitado", l: "Limitado" }, { v: "bestseller", l: "Bestseller" }],
  en: [{ v: "", l: "All" }, { v: "novo", l: "New" }, { v: "destaque", l: "Featured" }, { v: "limitado", l: "Limited" }, { v: "bestseller", l: "Bestseller" }],
  fr: [{ v: "", l: "Tous" }, { v: "novo", l: "Nouveau" }, { v: "destaque", l: "En vedette" }, { v: "limitado", l: "Limité" }, { v: "bestseller", l: "Best-seller" }],
};

export default function ProductsSidebar({ filters, setFilters, lang, totalCount }: Props) {
  const ui = UI[lang];

  const toggleBusiness = (b: BusinessKey) => {
    const next = filters.businesses.includes(b)
      ? filters.businesses.filter(x => x !== b)
      : [...filters.businesses, b];
    setFilters({ ...filters, businesses: next });
  };

  const toggleCategory = (c: string) => {
    const next = filters.categories.includes(c)
      ? filters.categories.filter(x => x !== c)
      : [...filters.categories, c];
    setFilters({ ...filters, categories: next });
  };

  // Gather all categories for currently selected businesses (or all)
  const activeBizKeys = filters.businesses.length > 0
    ? filters.businesses
    : (Object.keys(BUSINESSES) as BusinessKey[]);
  const allCategories = activeBizKeys.flatMap(b => CATEGORIES[b]);

  const labelClass = "text-[0.58rem] tracking-[0.28em] uppercase text-[#c9a84c] mb-3 block";
  const checkClass = (active: boolean) =>
    `flex items-center gap-2.5 cursor-pointer text-[0.75rem] py-1.5 transition-colors duration-200 ${active ? "text-[#f5f0e8]" : "text-[#888] hover:text-[#f5f0e8]"}`;

  return (
    <aside className="w-full md:w-56 shrink-0">
      {/* Results count */}
      <div className="mb-6 pb-5 border-b border-[#c9a84c]/12">
        <p className="text-[0.62rem] tracking-[0.25em] uppercase text-[#888]">
          <span className="text-[#c9a84c] font-medium text-[0.85rem] font-['Cormorant_Garamond']">{totalCount}</span>
          {" "}{ui.results}
        </p>
      </div>

      {/* Sort */}
      <div className="mb-6 pb-5 border-b border-[#c9a84c]/12">
        <span className={labelClass}>{ui.sort}</span>
        <select
          value={filters.sort}
          onChange={e => setFilters({ ...filters, sort: e.target.value })}
          className="w-full bg-[#1a1a1a] border border-[#c9a84c]/18 text-[#f5f0e8] text-[0.75rem] px-3 py-2 outline-none focus:border-[#c9a84c] appearance-none cursor-pointer font-['Montserrat']"
        >
          {ui.sortOptions.map(o => <option key={o.v} value={o.v} className="bg-[#1a1a1a]">{o.l}</option>)}
        </select>
      </div>

      {/* Businesses */}
      <div className="mb-6 pb-5 border-b border-[#c9a84c]/12">
        <span className={labelClass}>{ui.businesses}</span>
        {(Object.keys(BUSINESSES) as BusinessKey[]).map(b => {
          const active = filters.businesses.includes(b);
          return (
            <label key={b} className={checkClass(active)} onClick={() => toggleBusiness(b)}>
              <div className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 transition-all duration-200 ${active ? "border-[#c9a84c] bg-[#c9a84c]" : "border-[#444]"}`}>
                {active && <span className="text-[#0a0a0a] text-[0.55rem] leading-none">✓</span>}
              </div>
              <span>{BUSINESSES[b].icon}</span>
              <span>{BUSINESSES[b][lang === "en" ? "labelEn" : lang === "fr" ? "labelFr" : "label"]}</span>
            </label>
          );
        })}
      </div>

      {/* Categories */}
      <div className="mb-6 pb-5 border-b border-[#c9a84c]/12">
        <span className={labelClass}>{ui.categories}</span>
        {allCategories.map(c => {
          const active = filters.categories.includes(c);
          return (
            <label key={c} className={checkClass(active)} onClick={() => toggleCategory(c)}>
              <div className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 transition-all duration-200 ${active ? "border-[#c9a84c] bg-[#c9a84c]" : "border-[#444]"}`}>
                {active && <span className="text-[#0a0a0a] text-[0.55rem] leading-none">✓</span>}
              </div>
              {c}
            </label>
          );
        })}
      </div>

      {/* Max price */}
      <div className="mb-6 pb-5 border-b border-[#c9a84c]/12">
        <span className={labelClass}>{ui.price}</span>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-['Cormorant_Garamond'] text-[#c9a84c] text-[1.3rem]">{filters.priceMax}</span>
          <span className="text-[#888] text-[0.7rem]">€</span>
        </div>
        <input
          type="range" min={1} max={500} value={filters.priceMax}
          onChange={e => setFilters({ ...filters, priceMax: Number(e.target.value) })}
          className="w-full accent-[#c9a84c] cursor-pointer"
        />
        <div className="flex justify-between text-[0.6rem] text-[#555] mt-1">
          <span>1€</span><span>500€</span>
        </div>
      </div>

      {/* Badge filter */}
      <div className="mb-6">
        <span className={labelClass}>{ui.badge}</span>
        {BADGE_OPTIONS[lang].map(o => {
          const active = filters.badge === o.v;
          return (
            <label key={o.v} className={checkClass(active)} onClick={() => setFilters({ ...filters, badge: o.v })}>
              <div className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${active ? "border-[#c9a84c] bg-[#c9a84c]" : "border-[#444]"}`}>
                {active && <span className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full block" />}
              </div>
              {o.l}
            </label>
          );
        })}
      </div>
    </aside>
  );
}
