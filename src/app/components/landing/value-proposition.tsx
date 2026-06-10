'use client'

import { motion } from 'framer-motion'

export default function ValueProposition() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center px-6"
            viewport={{ once: true }}
        >
            <h3 className="text-2xl font-semibold">
                Você não está sozinho nesse processo
            </h3>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                Nossa equipe analisa seu perfil, evita erros críticos e acompanha cada etapa até a decisão final
            </p>

            <div className="mt-6 flex justify-center gap-6 text-sm text-gray-300 flex-wrap">
                <span>✔ Análise completa</span>
                <span>✔ Correção de documentos</span>
                <span>✔ Suporte contínuo</span>
            </div>
        </motion.section>

    )
}