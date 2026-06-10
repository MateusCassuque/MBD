'use client'

import { Lang, translations } from "@/hooks/translations"
import { useState } from "react"
import Navbar from "./components/home/Navbar"
import { About } from "./components/home/About"
import { Businesses } from "./components/home/Businesses"
import { Services } from "./components/home/Services"
import { Contact } from "./components/home/Contact"
import { Footer } from "./components/home/Footer"
import { ProductsPage } from "./components/ProductsPage"

type Page = "home" | "products"

function Divider() {
    return (
        <div className="h-px bg-linear-to-r from-transparent via-[#c9a84c]/25 to-transparent" />
    )
}

export default function Home() {
    const [lang, setLang] = useState<Lang>("pt")
    const [page, setPage] = useState<Page>("home")
    const t = translations[lang]

    return (
        <div className="bg-[#0a0a0a] text-[#f5f0e8] font-['Montserrat'] font-light overflow-x-hidden">

            {/* Navbar — always visible, passes page state */}
            <Navbar lang={lang} setLang={setLang} t={t} page={page} setPage={setPage} />

            {page === "home" ? (
                <>
                    {/* <HeroPage t={t} onCatalogueClick={() => setPage("products")} /> */}
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
