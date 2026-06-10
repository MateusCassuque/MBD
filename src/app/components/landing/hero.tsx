'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function Hero() {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="px-6 md:px-12 py-10"
            >

                <div className="relative rounded-2xl overflow-hidden">
                    <img
                        // src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                        src="/images/janelaDeAviao.png"
                        className="w-full h-105 opacity-70 object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent flex items-center">

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl px-8"
                        >
                            <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-1 rounded-full text-xs mb-4">
                                +5.000 vistos aprovados
                            </span>
                            <h1 className="text-3xl md:text-6xl font-semibold leading-tight tracking-tight">
                                Realize seu sonho de viver no exterior
                            </h1>

                            <p className="mt-4 text-gray-300">
                                Assessoria completa para vistos de turismo, estudo, trabalho e residência.
                            </p>
                            <p className="mt-4 text-gray-300">
                                Nós tratamos de todo o processo enquanto você foca no seu futuro no exterior
                            </p>

                            <Button className="mt-6 
                            bg-yellow-400 text-black cursor-pointer hover:bg-yellow-300 rounded-xl hover:scale-105 
                            hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300" asChild>
                                <Link href={'/quiz'}>
                                    Analisar meu Estado
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* SECTION CTA */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center my-20 px-6"
            >
                <h2 className="text-3xl md:text-6xl font-semibold leading-tight tracking-tight">
                    Vistos aprovados com segurança e rapidez
                </h2>

                {/* <Button className="mt-6 
                            bg-yellow-400 text-black cursor-pointer hover:bg-yellow-300 rounded-xl hover:scale-105 
                            hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300">
                    Consultar meu visto agora
                </Button> */}
            </motion.section>
        </>
    )
}