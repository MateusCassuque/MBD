'use client'

import { useEffect } from "react"

export const EasterEggs: React.FC = () => {

  useEffect(() => {
    console.log('Desenvolvido por Mateus Cassuque 🐱‍👤 🐱‍🏍')
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'm') {
        alert('Desenvolvido por Mateus Cassuque 🐱‍👤 🐱‍🏍')
      }
    }

    window.addEventListener('keydown', handler)
    // window.addEventListener('', handler)

    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (<></>)
}