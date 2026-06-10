"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function HowItWorks() {
    return (
        
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-20 p-6 md:py-20 md:px-12"
            >
                <h3 className="text-center text-2xl mb-10">
                    Por que escolher nossa agência
                </h3>

                <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <Item text="Experiência de 10 anos" />
                    <Item text="Equipe especializada" />
                    <Item text="Consultoria completa" />
                    <Item text="Suporte 24/7" />
                </div>
            </motion.section>
    )
}

function Item({ text }: any) {
    return (
        <div className="flex items-center gap-3 text-gray-300">
            <CheckCircle className="text-yellow-400" />
            <span>{text}</span>
        </div>
    )
}