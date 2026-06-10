"use client"

import { useLeadStore } from "@/stores/lead-store"
import { motion } from "framer-motion"
import { useState } from "react"

export default function CheckoutPage() {
    const { lead, plan } = useLeadStore()
    const [loading, setLoading] = useState(false)

    const selectedPlan = plan
    const price = plan?.price

    const handlePayment = async () => {
        setLoading(true)

        // Simulação de pagamento (substituir por Stripe / gateway local)
        setTimeout(() => {
            window.open(
                "https://wa.me/244953951694?text=Pagamento%20feito%20-%20quero%20iniciar%20meu%20processo",
                "_blank"
            )
            setLoading(false)
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-950 via-black to-black text-white px-6 py-16">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

                {/* LEFT - RESUMO */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                    <h2 className="text-xl font-bold mb-4">
                        Resumo do teu processo
                    </h2>

                    <div className="space-y-3 text-white/70">
                        <p>🌍 País: <span className="text-white">{lead?.country}</span></p>
                        <p>📄 Tipo: <span className="text-white">{lead?.visaType}</span></p>
                        <p>⚡ Prioridade: <span className="text-white">{lead?.status}</span></p>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-4">
                        <p className="text-white/60">Plano selecionado</p>
                        <h3 className="text-2xl font-bold">{selectedPlan?.name}</h3>

                        <div className="text-3xl font-bold text-blue-400 mt-2">
                            {price}
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT - PAGAMENTO */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                    <h2 className="text-xl font-bold mb-6">
                        Finalizar processo
                    </h2>

                    {/* BENEFÍCIOS */}
                    <div className="space-y-2 text-white/70 text-sm mb-6">
                        <p>✔ Análise completa do caso</p>
                        <p>✔ Checklist personalizado</p>
                        <p>✔ Estratégia anti-rejeição</p>
                        {plan?.name != 'Básico' ? <p>✔ Acompanhamento até aprovação</p> : null}
                        {plan?.name === 'VIP' ? <p>✔ Acompanhamento até a Partida e Legalização</p> : null}
                    </div>

                    {/* ALERTA URGÊNCIA */}
                    <div className="bg-red-500/10 border border-red-500/30 text-red-300 text-sm p-3 rounded-xl mb-6">
                        ⚠️ Vagas limitadas por semana para garantir qualidade do atendimento
                    </div>

                    {/* BOTÃO PAGAMENTO */}
                    <button
                        onClick={handlePayment}
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 py-4 rounded-xl font-semibold transition"
                    >
                        {loading ? "Processando..." : "Confirmar e iniciar processo"}
                    </button>

                    {/* WHATSAPP FALLBACK */}
                    <button
                        onClick={() =>
                            window.open(
                                "https://wa.me/244953951694?text=Quero%20confirmar%20meu%20processo%20de%20visto",
                                "_blank"
                            )
                        }
                        className="w-full mt-3 bg-green-500 hover:bg-green-600 py-4 rounded-xl font-semibold"
                    >
                        Continuar no WhatsApp
                    </button>

                    <p className="text-center text-white/40 text-xs mt-4">
                        Resposta em até 10 minutos
                    </p>
                </motion.div>
            </div>
        </div>
    )
}