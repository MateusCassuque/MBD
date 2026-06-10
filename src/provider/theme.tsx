'use client'

import { useEffect } from 'react'

export function ThemeProvider({ children, theme }: { children: React.ReactNode, theme: any }) {
    useEffect(() => {
        if (!theme) return

        const root = document.documentElement

        // 🎨 cores principais
        if (theme.primary) {
            root.style.setProperty('--primary', theme.primary)
        }

        if (theme.background) {
            root.style.setProperty('--background', theme.background)
        }

        if (theme.foreground) {
            root.style.setProperty('--foreground', theme.foreground)
        }

        if (theme.accent) {
            root.style.setProperty('--accent', theme.accent)
        }

        if (theme.muted) {
            root.style.setProperty('--muted', theme.muted)
        }

        if (theme.border) {
            root.style.setProperty('--border', theme.border)
        }

        // 🧠 sidebar (teu sistema já suporta isso 🔥)
        if (theme.sidebar) {
            root.style.setProperty('--sidebar', theme.sidebar)
        }

        // 🌙 modo
        if (theme.mode === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [theme])

    return <>{children} </>
}