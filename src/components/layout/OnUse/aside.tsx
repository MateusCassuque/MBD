'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, LogOut, Mail, Menu, PhoneIncoming, Settings, User, X } from 'lucide-react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

const SideDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const toggleDrawer = () => setIsOpen(!isOpen)

    const navItems = [
        { icon: <Home  className='w-4 h-4 text-yellow-400' />, label: 'Home', href: '/' },
        { icon: <Settings className='w-4 h-4 text-yellow-400' />, label: 'Sobre Nós', href: '/about' },
        { icon: <PhoneIncoming className='w-4 h-4 text-yellow-400' />, label: 'Contactos', href: '/contactos' },
        // { icon: <Settings className='w-6 h-6 text-primary' />, label: 'Configurações', href: '/settings' },
    ]

    return (
        <div className='mb-16 sm:hidden'>
            {/* Botão de Toggle */}
            <Button
                onClick={toggleDrawer}
                className="fixed z-50 top-4 left-4 p-2 rounded-lg"
                variant={'outline'}
            >
                {isOpen ? <X  /> : <Menu size={24} />}
            </Button>


            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleDrawer}
                        className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed z-50 top-0 left-0 h-full w-64 bg-background shadow-xl"
                    >
                        <div className="flex flex-col h-full p-4">
                            {/* Cabeçalho */}
                            <div className="flex items-center justify-between mb-8 p-2">
                                <h2 className="text-2xl font-bold text-yellow-400">3M Visa</h2>
                                <button
                                    onClick={toggleDrawer}
                                    className="p-1 rounded-full hover:bg-gray-100"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Itens de Navegação */}
                            <nav className="flex-1">
                                <ul className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <a
                                                href={item.href}
                                                className="flex items-center p-3 rounded-lg text-secondary-foreground hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                                onClick={(e) => {
                                                    setIsOpen(!isOpen)
                                                }}
                                            >
                                                <span className="mr-3">{item.icon}</span>
                                                <span className='text-muted-foreground text-sm'>{item.label}</span>
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Rodapé */}
                            {/* <div className="mt-auto pt-4 border-t border-gray-200">
                                <Link
                                    href={'#'}
                                    className="flex items-center w-full p-3 text-muted-foreground hover:text-primary transition-colors font-medium"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        signOut()
                                    }}>
                                    <LogOut size={20} className="mr-3" />
                                    Sair
                                </Link>
                            </div> */}
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SideDrawer