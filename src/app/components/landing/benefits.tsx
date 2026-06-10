"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Globe, Shield, Phone } from "lucide-react"

export default function Benefits() {
    return (
        <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-20 px-6 md:px-12"
            >

                <h3 className="text-center text-2xl mb-10">Benefícios</h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Benefit icon={<Shield />} title="Taxa acima de 95%" />
                    <Benefit icon={<Globe />} title="100% online" />
                    <Benefit icon={<Calendar />} title="Atendimento em português" />
                    <Benefit icon={<CheckCircle />} title="Acompanhamento personalizado" />
                </div>
            </motion.section>
    )
}

function Benefit({ icon, title }: any) {
    return (
        <motion.div whileHover={{ y: -5 }}>
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 text-center hover:bg-white/10 transition">
                <CardContent className="p-6 flex flex-col items-center gap-4">
                    <div className="text-yellow-400">{icon}</div>
                    <p className="text-sm">{title}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}