"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const team = [
    {
        name: 'M. Francisco Licronha Cassuque',
        cargo: 'Consultor de imigração',
        visa: '✔ +100 processos aprovados',
        img: '/images/team/mateusCassuque.jpg'
    },

    {
        name: 'Hermani Caio',
        cargo: 'Chefe de Secção',
        visa: '✔ + 200 Pocessos realizados',
        img: '/images/team/hermani.jpg'
    },

    // {
    //     name: 'Álvaro',
    //     cargo: 'Operador de Angendamentos',
    //     visa: '✔ + 163 Agendamentos realizados',
    //     // img: '/images/team/mateusCassuque.png'
    // },

    {
        name: 'J. Severino Sambuanda',
        cargo: 'Consultor de imigração',
        visa: '✔ +112 processos aprovados',
        // img: '/images/team/mateusCassuque.png'
    },
]

export default function AboutPageComponent() {
    return (
        <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

            {/* BACKGROUND EFFECT */}
            <div className="absolute inset-0 -z-10 not-sm:hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-yellow-400/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-150 h-75 bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            {/* HERO */}
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
                        src="/images/image_downloader_1661001638086.png"
                        className="w-full h-105 opacity-70 object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent flex items-center">

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl px-8"
                        >
                            <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-1 rounded-full text-xs mb-4">
                                Sobre a 3M Visa
                            </span>
                            <h1 className="text-3xl md:text-6xl font-semibold leading-tight tracking-tight">
                                Ajudamos você a conquistar o seu visto com segurança e sem erros
                            </h1>

                            <p className="mt-4 text-gray-300 max-w-xl">
                                Transformamos processos complexos em caminhos claros para que você possa viver, estudar ou trabalhar no exterior com tranquilidade
                            </p>

                            <Button className="mx-6 my-10 
                            bg-yellow-400 text-black cursor-pointer hover:bg-yellow-300 rounded-xl hover:scale-105 
                            hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300">
                                Falar com especialista
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* STATS */}
            <section className="mt-10 px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                >
                    <Stat number="+3.500" label="Vistos aprovados" />
                    <Stat number="98,7%" label="Taxa de aprovação" />
                    <Stat number="12+" label="Países atendidos" />
                    <Stat number="8+" label="Anos de experiência" />
                </motion.div>
            </section>

            {/* STORY */}
            <section className="mt-20 px-6 md:px-12 text-center">
                <h2 className="sm:text-3xl text-xl font-semibold">
                    Uma trajetória de confiança e resultados
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Ao longo dos anos ajudamos milhares de pessoas a conquistarem oportunidades reais no exterior com segurança e planejamento
                </p>

                <div className="mt-12 grid grid-cols-3 md:grid-cols-5 gap-6 sm:text-sm text-xs text-gray-300">
                    <Timeline year="2018" title="Início" />
                    <Timeline year="2019" title="Crescimento" />
                    <Timeline year="2021" title="Expansão" />
                    <Timeline year="2023" title="Reconhecimento" />
                    <Timeline year="2024+" title="Futuro" />
                </div>
            </section>

            {/* TEAM */}
            <section className="mt-24 px-6 md:px-12">
                <h2 className="sm:text-3xl text-xl text-center font-semibold mb-12">
                    Especialistas que cuidam do seu processo
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {team.map((i, k) => (
                        <Card key={k} className="bg-white/5 border-white/10 backdrop-blur-xl">
                            <CardContent className="p-6 text-center">
                                <div className="w-24 h-24 mx-auto rounded-full bg-gray-700 mb-4 relative">
                                    <Image
                                        fill
                                        src={i.img || '/placeholder.png'}
                                        alt={i.name}
                                        className="rounded-full"
                                    />
                                </div>

                                <h3 className="font-medium">{i.name}</h3>

                                <p className="text-sm text-gray-400 mt-2">
                                    {i.cargo}
                                </p>

                                <p className="text-xs text-green-400 mt-2">
                                    {i.visa}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* VALUES */}
            <section className="mt-24 px-6 md:px-12">
                <h2 className="sm:text-3xl text-xl text-center font-semibold mb-12">
                    Os princípios que guiam nosso trabalho
                </h2>

                <div className="grid md:grid-cols-5 gap-6">
                    <Value title="Segurança em cada etapa" />
                    <Value title="Processo claro e transparente" />
                    <Value title="Excelência no atendimento" />
                    <Value title="Compromisso real" />
                    <Value title="Atendimento humanizado" />
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className="mt-24 px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="sm:text-xl text-gray-300 leading-relaxed">
                            “Achei que seria complicado conseguir meu visto, mas a equipe tratou de tudo. Hoje estou na Europa e foi a melhor decisão que tomei.”
                        </p>

                        <p className="mt-4 text-sm text-gray-400">
                            Larissa Andrade • Portugal
                        </p>
                    </div>

                    <div className="w-full h-75 bg-gray-700 rounded-xl relative flex">
                        <Image
                            fill
                            src={'/placeholder.png'}
                            alt={'client'}
                            className="rounded-xl object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="mt-24 text-center p-6">
                <h2 className="smtext-3xl text-lg md:text-4xl font-semibold">
                    Agora é a sua vez de dar o próximo passo
                </h2>

                <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                    Fale com um especialista e descubra suas chances reais de aprovação
                </p>

                <Button className="mt-6 bg-yellow-400 text-black rounded-xl hover:scale-105 transition">
                    Começar agora
                </Button>
            </section>
        </div>
    )
}

/* COMPONENTS */

function Stat({ number, label }: any) {
    return (
        <div>
            <h3 className="text-2xl font-semibold">{number}</h3>
            <p className="text-gray-400 text-sm">{label}</p>
        </div>
    )
}

function Timeline({ year, title }: any) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <CheckCircle className="text-yellow-400 w-4 h-4" />
            </div>
            <span className="text-white">{year}</span>
            <span className="text-gray-400 text-xs">{title}</span>
        </div>
    )
}

function Value({ title }: any) {
    return (
        <Card className="bg-white/5 border-white/10 text-center backdrop-blur-xl">
            <CardContent className="p-6 text-sm text-gray-300">
                {title}
            </CardContent>
        </Card>
    )
}