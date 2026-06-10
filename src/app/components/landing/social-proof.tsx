"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function SocialProof() {
    return (
       
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-20 px-6 md:px-12"
            >
                <h3 className="text-2xl text-center mb-10">
                    Resultados reais de clientes reais
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Carlos M.",
                            text: "Tive 2 recusas antes. Com a 3M consegui aprovação em 3 semanas.",
                            country: "Portugal"
                        },
                        {
                            name: "Ana P.",
                            text: "Processo rápido e sem complicações. Valeu cada centavo.",
                            country: "França"
                        },
                        {
                            name: "João D.",
                            text: "Achei que não tinha chance. Hoje estou a trabalhar na Europa.",
                            country: "Alemanha"
                        }
                    ].map((item, i) => (
                        <Card key={i} className="bg-white/5 border-white/10">
                            <CardContent className="p-6 space-y-4">
                                <p className="text-gray-300 text-sm\">"{item.text}"</p>

                                <div className="text-xs text-gray-400">
                                    {item.name} • {item.country}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.section>
    )
  }