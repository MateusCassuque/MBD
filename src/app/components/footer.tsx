"use client"

export default function Footer() {
    return (
        <footer className="py-4 px-6 border-t">
            <div className="max-w-5xl mx-auto text-sm text-center flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-muted-foreground">&copy; 2026 Kodeza Lda, powerd by K-Tech. Todos os direitos reservados a 3M Visa.</p>
                <div className="flex gap-6">
                    <a href="/termos" className="hover:text-primary">Termos</a>
                    <a href="/privacidade" className="hover:text-primary">Privacidade</a>
                    <a href="#" className="hover:text-primary">Contato</a>
                </div>
            </div>
        </footer>
    )
}