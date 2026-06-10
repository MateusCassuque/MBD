'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function Country() {

    return (
        <AnimatePresence>
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-20 px-6 text-center"
            >
                <h3 className="text-2xl">Países mais solicitados</h3>

                <div className="flex justify-center gap-6 mt-8 flex-wrap">
                    {["🇺🇸", "🇨🇦", "🇵🇹", "🇪🇸", "🇫🇷", "🇬🇧", "🇦🇺"].map((flag, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.3 }}
                            className="text-4xl transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                        >
                            {flag}
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </AnimatePresence>
    )
}