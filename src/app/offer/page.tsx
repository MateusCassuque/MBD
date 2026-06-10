"use client"

import { formatCurrency } from "@/lib/utils"
import { useLeadStore } from "@/stores/lead-store"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function OfferPage() {
    const { lead, result, setPlan } = useLeadStore()
    const router = useRouter()

    const isHot = lead?.status === "hot"

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-950 via-black to-black text-white px-6 py-16">
            <div className="max-w-5xl mx-auto">

                {/* HERO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        O teu caso para{" "}
                        <span className="text-blue-400">{lead?.country || "visto"}</span>{" "}
                        está a ser analisado
                    </h1>

                    <p className="text-white/70 mt-4 text-lg">
                        Criámos uma estratégia personalizada para o teu perfil de visto.
                    </p>

                    {isHot && (
                        <div className="mt-6 inline-block bg-red-500/20 border border-red-500 px-4 py-2 rounded-full text-red-300 text-sm">
                            ⚠️ Perfil urgente detectado — recomendação prioritária
                        </div>
                    )}
                </motion.div>

                {/* BENEFÍCIOS */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {[
                        "Análise completa do teu caso",
                        "Checklist personalizado de documentos",
                        "Estratégia para evitar rejeição",
                        "Apoio até aprovação final",
                    ].map((item) => (
                        <div
                            key={item}
                            className="bg-white/5 border border-white/10 p-4 rounded-xl"
                        >
                            ✔ {item}
                        </div>
                    ))}
                </div>

                {/* RESULTADO PERSONALIZADO */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-10">
                    <h2 className="text-xl font-semibold mb-2">
                        Análise do teu perfil
                    </h2>

                    <p className={`text-white/70 text-xs sm:text-sm`}>Nível: {' '}
                        <span className={`${result?.level ?
                            result.level === 'Baixo' ? 'text-red-500'
                                : result.level === "Médio" ? 'text-orange-300'
                                    : result?.level === "Alto" ? 'text-green-500'
                                        : ''
                            : ''}`}>{result?.level.toUpperCase()}</span>
                    </p>
                    <p className={`text-white/70 text-xs sm:text-sm`}>Score: {' '}
                        <span className={`${result?.score ?
                            result?.score < 50 ? 'text-red-500' : (result.score >= 50 && result.score <= 74) ? 'text-orange-400' : result.score >= 75 ? 'text-green-500' : ''
                            : ''}`}>{result?.score}%</span>
                    </p>
                    <p className={`text-white/70 text-xs sm:text-sm`}>
                        Status:{" "}
                        <span className={`${isHot ? 'text-red-500' : 'text-white font-bold'} `}>
                            {isHot ? "alta prioridade".toUpperCase() : "potencial moderado".toUpperCase()}
                        </span>
                    </p>
                    <br />
                    <p className="text-white/70 not-sm:text-sm"> {result?.message} </p>
                </div>

                {/* PLANOS */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">

                    {/* BASIC */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-lg font-bold">Básico</h3>
                        <p className="text-white/60 text-sm mt-2">
                            Consultoria inicial
                        </p>
                        <div className="text-2xl font-bold mt-4">{formatCurrency(15000)}</div>

                        <button
                            onClick={() => {
                                setPlan({
                                    name: 'Básico',
                                    price: formatCurrency(15000)
                                })
                                router.push("/checkout")
                            }}
                            className="mt-6 w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl">
                            Escolher
                        </button>
                    </div>

                    {/* PREMIUM (FOCO) */}
                    <div className="bg-blue-500/10 border border-blue-500 rounded-2xl p-6 scale-105">
                        <div className="text-blue-400 text-sm mb-2">Mais escolhido</div>

                        <h3 className="text-lg font-bold">Premium</h3>
                        <p className="text-white/60 text-sm mt-2">
                            Processo completo
                        </p>
                        <div className="text-2xl font-bold mt-4">Sob-Consulta</div>

                        <button
                            onClick={() => {
                                setPlan({
                                    name: 'Premium',
                                    price: 'Sob-Consulta'
                                })
                                router.push("/checkout")
                            }}
                            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-semibold"
                        >
                            Garantir vaga
                        </button>
                    </div>

                    {/* VIP */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-lg font-bold">VIP</h3>
                        <p className="text-white/60 text-sm mt-2">
                            Acompanhamento total
                        </p>
                        <div className="text-2xl font-bold mt-4">Sob-Consulta</div>

                        <button
                            onClick={() => {
                                setPlan({
                                    name: 'VIP',
                                    price: 'Sob-Consulta'
                                })
                                router.push("/checkout")
                            }}
                            className="mt-6 w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl">
                            Contactar
                        </button>
                    </div>
                </div>

                {/* CTA FINAL */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                >
                    <h2 className="text-xl font-bold mb-4">
                        Quer avançar agora com o teu processo?
                    </h2>

                    <button
                        onClick={() =>
                            window.open(
                                "https://wa.me/244953951694?text=Quero%20iniciar%20meu%20processo%20de%20visto",
                                "_blank"
                            )
                        }
                        className="bg-green-500 hover:bg-green-600 px-6 py-4 rounded-xl font-semibold"
                    >
                        Falar no WhatsApp agora
                    </button>

                    <p className="text-white/40 text-sm mt-4">
                        Resposta em menos de 10 minutos
                    </p>
                </motion.div>
            </div>
        </div>
    )
}