"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FinalCTA() {
    return (
        <section className="py-15 px-6 text-center bg-primary/25 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-semibold">
                A decisão que você tomar hoje pode mudar sua vida
            </h2>

            <Button className="mt-6 bg-yellow-400 text-black cursor-pointer hover:bg-yellow-300 rounded-xl hover:scale-105 
                hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300" asChild>
                <Link href={'/quiz'}>
                    Começar agora ✔
                </Link>
            </Button>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                Cada dia sem agir é mais tempo longe das oportunidades que você merece
            </p>

            {/* <section className="mt-24 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Seu visto pode estar mais próximo do que imagina
                </h2>

                <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                    Fale com um especialista agora e descubra suas chances reais de aprovação
                </p>

                <Button className="mt-6 bg-yellow-400 text-black rounded-xl hover:scale-105 transition">
                    Falar com especialista
                </Button>
            </section> */}
        </section>
    )
}