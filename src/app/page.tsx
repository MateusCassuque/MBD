'use client'

import { Lang, translations } from "@/hooks/translations"
import { useState } from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Businesses from "./Businesses"
import Footer from "./Footer"
import ProductsPage from "./ProductsPage"
import Services from "./Services"
import Contact from "./Contact"

type Page = "home" | "products"

function Divider() {
    return (
        <div className="h-px bg-linear-to-r from-transparent via-[#c9a84c]/25 to-transparent" />
    )
}

export default function App() {
    const [lang, setLang] = useState<Lang>("pt")
    const [page, setPage] = useState<Page>("home")
    const t = translations[lang]

    return (
        <div className="bg-[#0a0a0a] text-[#f5f0e8] font-['Montserrat'] font-light overflow-x-hidden">

            {/* Navbar — always visible, passes page state */}
            <Navbar lang={lang} setLang={setLang} t={t} page={page} setPage={setPage} />

            {page === "home" ? (
                <>
                    <Hero t={t} onCatalogueClick={() => setPage("products")} />
                    <Divider />
                    <About t={t} />
                    <Divider />
                    <Businesses t={t} onViewProducts={() => setPage("products")} />
                    <Divider />
                    <Services t={t} />
                    <Divider />
                    <Contact t={t} />
                    <Footer lang={lang} t={t} onCatalogueClick={() => setPage("products")} />
                </>
            ) : (
                <ProductsPage lang={lang} />
            )}
        </div>
    )
}
