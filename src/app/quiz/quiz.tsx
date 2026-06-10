"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useLeadStore } from "@/stores/lead-store"
import { calculateVisaApprovalScore } from "../offer/taxCalc"

const steps = [
    {
        question: "Para qual país quer o visto?",
        options: ["Portugal", "Espanha", "França", "Brasil", "Alemanha", "África do Sul"],
        key: "country",
    },
    {
        question: "Tipo de visto desejado?",
        options: ["Turismo", "Estudo", "Trabalho", "Procura de trabalho"],
        key: "visaType",
    },
    {
        question: "Já teve visto recusado antes?",
        options: ["Sim", "Não"],
        key: "deniedBefore",
    },
    {
        question: "Quando pretende viajar?",
        options: ["Urgente (0-30 dias)", "1-3 meses", "3-6 meses", "Ainda não sei"],
        key: "travelDate",
    },
    {
        question: "Já tens documentos preparados?",
        options: ["Sim", "Alguns", "Não"],
        key: "documentsReady",
    },
]

export default function QuizPage() {
    const [step, setStep] = useState(0)
    const { lead, setLead, setResult } = useLeadStore()
    const router = useRouter()

    const current = steps[step]

    const handleSelect = (value: string) => {
        setLead({ [current.key]: value } as any)

        if (step < steps.length - 1) {
            setStep(step + 1)
        } else {
            evaluateLead(value)
        }
    }

    const evaluateLead = (res: string) => {
        let status: "cold" | "warm" | "hot" = "cold"

        if (lead?.visaType === "Trabalho" || lead?.travelDate === "Urgente (0-30 dias)") {
            status = "hot"
        } else if (lead?.visaType === "Estudo" || lead?.visaType === "Turismo") {
            status = "warm"
        }

        setLead({ status })

        if (lead) {
            const res = calculateVisaApprovalScore(lead)
            setResult(res)
        }

        router.push("/offer")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-950 to-black text-white px-6">
            <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xl text-center"
            >
                {/* Progress */}
                <div className="mb-6 text-sm text-white/60">
                    Passo {step + 1} de {steps.length}
                </div>

                {/* Question */}
                <h1 className="text-2xl md:text-3xl font-bold mb-8">
                    {current.question}
                </h1>

                {/* Options */}
                <div className="grid gap-4">
                    {current.options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10 text-lg"
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {/* Progress bar */}
                <div className="mt-10 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-500 transition-all"
                        style={{
                            width: `${((step + 1) / steps.length) * 100}%`,
                        }}
                    />
                </div>
            </motion.div>
        </div>
    )
}