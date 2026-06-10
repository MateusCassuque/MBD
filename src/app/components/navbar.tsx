"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import SideDrawer from "@/components/layout/OnUse/aside"


export default function Navbar() {
    return (
        <>
            <div className="not-sm:flex justify-between">
                <SideDrawer />
                <header className="sticky top-0 z-30 flex h-14 items-center justify-between backdrop-blur md:px-6 p-2">
                    <div className="">
                        <Link href={'/'} className="flex items-center gap-2">
                            <Image
                                alt={"Logotipo da 3M"}
                                src={'/images/logo.png'}
                                width={55}
                                height={55}
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex gap-8 text-sm text-gray-300">
                        <Link href={'/#'}>Home</Link>
                        <Link href={'/about'}>Sobre</Link>
                        <Link href={'/contactos'}>Contacto</Link>
                    </nav>

                    <Button className="not-sm:hidden bg-white text-black rounded-xl cursor-pointer hover:bg-yellow-300 hover:scale-105 
                hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300" asChild>
                        <Link href={'/quiz'}>
                            Analize
                        </Link>
                    </Button>
                </header>

            </div>
            <section className="text-center text-xs sm:text-sm text-gray-400 border-y border-white/10 p-3">
                Mais de <span className="text-white font-semibold">5.000 vistos aprovados</span> • Clientes em mais de 12 países • Taxa de sucesso acima de 95%
            </section>
        </>
    )
}
