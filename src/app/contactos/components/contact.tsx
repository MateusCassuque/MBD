'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from './Contact-Form'

export default function Contact() {
    return (
        <div className="min-h-screen text-white mx-2 bg-[url('/images/fundo-gotadsol.jpg')] bg-center bg-cover"
            id='contato'
        >
            <section className="container py-16 md:py-24 mx-auto">
                {/* Cabeçalho com animação */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Vamos Conversar</h1>
                    <p className="text-lg rounded-full p-2 mx-auto shadow">
                        Preencha o formulário ou entre em contato diretamente.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Formulário com animação */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-black/70 p-8 rounded-xl shadow-lg mx-1"
                    >
                        <h2 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h2>
                        <ContactForm />
                    </motion.div>

                    {/* Informações de contato com animação */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8 bg-black/85 rounded-3xl shadow-2xl p-8 mx-1"
                    >
                        <div className="space-y-4 mx-2">
                            <h2 className="text-2xl font-semibold">Informações de Contato</h2>
                            <p className="">
                                Estamos disponível para responder suas dúvidas e discutir oportunidades de colaboração.
                            </p>
                        </div>

                        <div className="space-y-6 mx-2">
                            {/* Item de contato 1 */}
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-4"
                            >
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="h-5 w-5 text-yellow-500" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <a
                                        href="mailto:geral@kodeza.site"
                                        className=" text-yellow-500 transition-colors"
                                    >
                                        geral@kodeza.site
                                    </a>
                                </div>
                            </motion.div>

                            {/* Item de contato 2 */}
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-4"
                            >
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Phone className="h-5 w-5 text-yellow-500" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Telefone</h3>
                                    <a
                                        href="tel:+244953951694"
                                        className=" text-yellow-500 transition-colors"
                                    >
                                        (+244) 953 951 694
                                    </a> | &nbsp;
                                    <a
                                        href="tel:+244935044500"
                                        className=" text-yellow-500 transition-colors"
                                    >
                                        935 044 500
                                    </a>
                                </div>
                            </motion.div>

                            {/* Item de contato 3 */}
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-4"
                            >
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <MapPin className="h-5 w-5 text-yellow-500" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Localização</h3>
                                    <p className="">
                                        Luanda, Ingombotas, av. de Portugal, Angola.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Botão de agendamento */}
                        {/* <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <Button asChild size="lg" className="w-full sm:w-fit">
                <Link
                  href="/schedule"
                  className="gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Agendar Chamada
                </Link>
              </Button>

              <Button asChild size="lg" variant={'outline'} className="w-full sm:w-fit">
                <Link
                  href="/"
                  className="gap-2"
                >
                  <ArrowBigLeft className="h-4 w-4" />
                  Voltar
                </Link>
              </Button>

            </motion.div> */}
                    </motion.div>
                </div>
            </section>

            {/* Mapa animado */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="container pb-16 mx-auto"
            >
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg aspect-video bg-muted/30">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.9652042326293!2d13.284301963754256!3d-8.789339252134193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f18c0b3024d3%3A0x9ff1d742bf2a2900!2sGota%20D&#39;%20Sol%20Lda!5e0!3m2!1spt-PT!2sao!4v1744051173324!5m2!1spt-PT!2sao"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </motion.div>
        </div>
    )
}