'use client'

import { CheckCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface IConfirmaProps {
  perfil?: boolean
  skills?: boolean
  image?: boolean
}
export default function Confirmacao({ perfil, skills, image }: IConfirmaProps) {
  const route = useRouter()


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="mb-6"
      >
        <CheckCircle size={64} className="text-primary" />
      </motion.div>
      <h1 className="text-3xl font-bold mb-2">
        {perfil ? '🎉 Registro confirmado!' : '🎉 Cadastro confirmado!'}
      </h1>
      <p className="text-muted-foreground mb-6">
        {perfil ?
          `Obrigado por Configurar devidamente o teu perfil. 
          clica em continuar para salvar e seguir 🚀`
          :
          'Obrigado por se juntar a nós. Em breve você receberá novidades por e-mail🚀'}
      </p>

      {perfil ? (
        <Link
          href="#"
          className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl hover:scale-105 transition"
          onClick={(e) => {
            e.preventDefault()
            // savePerfil()
          }}
        >
          Continuar
        </Link>
      ) : (
        <Link
          href="#"
          className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl hover:scale-105 transition"
          onClick={(e) => {
            e.preventDefault()
            route.replace('/entrar')
          }}
        >
          Entrar na Conta
        </Link>
      )}
    </div>
  )
}
