import { useState, useMemo } from "react"
import { PRODUCTS, Product, BusinessKey } from "./products"
import ProductCard from "./ProductCard"
import ProductModal from "./ProductModal"
import ProductsSidebar from "./ProductsSidebar"
import { Lang } from "@/hooks/translations"

interface Props { lang: Lang }

interface Filters {
  businesses: BusinessKey[]
  categories: string[]
  priceMax: number
  badge: string
  sort: string
}

const UI: Record<Lang, { title: string, sub: string, search: string, noResults: string, reset: string, catalogue: string }> = {
  pt: { title: "Catálogo", sub: "Explore os produtos e serviços do Grupo MBD", search: "Pesquisar produtos...", noResults: "Nenhum produto encontrado.", reset: "Limpar filtros", catalogue: "Catálogo MBD" },
  en: { title: "Catalogue", sub: "Explore the products and services of MBD Group", search: "Search products...", noResults: "No products found.", reset: "Clear filters", catalogue: "MBD Catalogue" },
  fr: { title: "Catalogue", sub: "Découvrez les produits et services du Groupe MBD", search: "Rechercher des produits...", noResults: "Aucun produit trouvé.", reset: "Réinitialiser", catalogue: "Catalogue MBD" },
}

const DEFAULT_FILTERS: Filters = {
  businesses: [],
  categories: [],
  priceMax: 500,
  badge: "",
  sort: "default",
}

export const ProductsPage: React.FC<Props> = ({ lang }) => {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<Product | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const ui = UI[lang]

  const filtered = useMemo(() => {
    let result = [...PRODUCTS]

    // Business filter
    if (filters.businesses.length > 0)
      result = result.filter(p => filters.businesses.includes(p.business))

    // Category filter
    if (filters.categories.length > 0)
      result = result.filter(p => filters.categories.includes(p.category))

    // Price filter
    result = result.filter(p => p.price <= filters.priceMax)

    // Badge filter
    if (filters.badge)
      result = result.filter(p => p.badge === filters.badge)

    // Search
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.nameFr.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      )
    }

    // Sort
    if (filters.sort === "price_asc") result.sort((a, b) => a.price - b.price)
    if (filters.sort === "price_desc") result.sort((a, b) => b.price - a.price)
    if (filters.sort === "rating") result.sort((a, b) => b.rating - a.rating)
    if (filters.sort === "reviews") result.sort((a, b) => b.reviews - a.reviews)

    return result
  }, [filters, search])

  const hasActiveFilters = filters.businesses.length > 0 || filters.categories.length > 0 ||
    filters.priceMax < 500 || filters.badge !== "" || search.trim() !== ""

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Page header */}
      <div className="relative px-[6%] pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,168,76,0.07),transparent)]" />
        <div className="relative z-10">
          <p className="flex items-center gap-4 text-[0.6rem] tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
            <span className="inline-block w-8 h-px bg-[#c9a84c]" />
            {ui.catalogue}
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,6vw,5rem)] font-light leading-none text-[#f5f0e8] mb-3">
            {ui.title}
          </h1>
          <p className="text-[0.82rem] text-[#888] tracking-[0.05em]">{ui.sub}</p>
        </div>
      </div>

      <div className="h-px bg-linear-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      {/* Toolbar */}
      <div className="sticky top-0 z-40 bg-[#0d0d0d]/95 backdrop-blur border-b border-[#c9a84c]/10 px-[6%] py-3 flex items-center gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888] text-sm">🔍</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={ui.search}
            className="w-full bg-[#1a1a1a] border border-[#c9a84c]/15 text-[#f5f0e8] pl-9 pr-4 py-2.5 text-[0.78rem] font-['Montserrat'] font-light outline-none focus:border-[#c9a84c]/50 placeholder:text-[#555] transition-colors duration-300"
          />
        </div>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setSidebarOpen(s => !s)}
          className="md:hidden px-4 py-2.5 border border-[#c9a84c]/20 text-[#888] text-[0.7rem] tracking-[0.15em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-200"
        >
          ⚙ Filtros
        </button>

        {/* Reset */}
        {hasActiveFilters && (
          <button
            onClick={() => { setFilters(DEFAULT_FILTERS); setSearch("") }}
            className="text-[0.65rem] tracking-[0.15em] uppercase text-[#c9a84c]/70 hover:text-[#c9a84c] transition-colors duration-200 border border-[#c9a84c]/15 px-3 py-2 hover:border-[#c9a84c]/40"
          >
            ✕ {ui.reset}
          </button>
        )}
      </div>

      {/* Body */}
      <div className="flex gap-8 px-[6%] py-10">
        {/* Sidebar — desktop always visible, mobile overlay */}
        <div className={`
          ${sidebarOpen ? "fixed inset-0 z-50 flex" : "hidden"}
          md:relative md:flex md:inset-auto md:z-auto
        `}>
          {/* Mobile backdrop */}
          {sidebarOpen && (
            <div className="absolute inset-0 bg-black/70 md:hidden" onClick={() => setSidebarOpen(false)} />
          )}
          <div className="relative z-10 bg-[#0d0d0d] md:bg-transparent h-full overflow-y-auto md:overflow-visible w-72 md:w-auto p-6 md:p-0 border-r border-[#c9a84c]/10 md:border-none">
            {/* Mobile close */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="mb-6 md:hidden text-[#888] text-[0.65rem] tracking-[0.2em] uppercase hover:text-[#c9a84c]"
            >
              ✕ Fechar
            </button>
            <ProductsSidebar
              filters={filters}
              setFilters={(f) => { setFilters(f); setSidebarOpen(false) }}
              lang={lang}
              totalCount={filtered.length}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="text-5xl mb-4 opacity-30">🔍</span>
              <p className="font-['Cormorant_Garamond'] text-[1.5rem] text-[#888]">{ui.noResults}</p>
              <button
                onClick={() => { setFilters(DEFAULT_FILTERS); setSearch("") }}
                className="mt-4 text-[0.65rem] tracking-[0.2em] uppercase text-[#c9a84c] hover:underline"
              >
                {ui.reset}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} lang={lang} onClick={() => setSelected(p)} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProductModal product={selected} lang={lang} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
