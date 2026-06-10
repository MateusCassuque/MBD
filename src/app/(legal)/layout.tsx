import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
    title: 'Termos e Condições',
    description: 'Leia os termos de uso da plataforma'
  }

export default function LegalLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-muted/40">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">

                {/* Sidebar */}
                <aside className="sticky top-20 h-fit bg-background border rounded-2xl p-4 shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">Legal</h2>

                    <nav className="flex flex-col gap-2 text-sm">
                        <Link href="/termos" className="hover:underline">
                            Termos e Condições
                        </Link>
                        <Link href="/privacidade" className="hover:underline">
                            Política de Privacidade
                        </Link>
                        <Link href="/" className="hover:underline flex gap-4">
                            <ArrowLeft/>
                            Voltar
                        </Link>
                    </nav>
                </aside>

                {/* Conteúdo */}
                <main className="bg-background border rounded-2xl p-6 md:p-10 shadow-sm">
                    {children}
                </main>
            </div>
        </div>
    )
}
