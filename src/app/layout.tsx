import "./globals.css"
import { ThemeProvider } from "next-themes"
import MySessionProvider from "@/provider/session"
import { Toaster } from "sonner"
import { EasterEggs } from "@/components/layout/OnUse/EasterEggs"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { Phone } from "lucide-react"


export const metadata = {
  title: '3M Visa',
  description: 'Site Oficial da 3M Visa',
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  console.log("%cFeito com ❤ por Mateus Cassuque 🐱‍👤", "color:#0f4f27; font-size:14px; font-weight: bold;")


  return (
    <html lang="pt-Ao" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a498f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <meta name="author" content="Mateus Cassuque" />
        <meta name="designer" content="Mateus Cassuque" />
        <meta name="copyright" content="© 2025 Mateus Cassuque" />

      </head>

      <body
        className={` antialiased`}
      >
        <MySessionProvider>
          <ThemeProvider
            enableSystem={true}
            attribute="class"
            defaultTheme={'dark'}
          // disableTransitionOnChange
          >
            {/* {userId && <NotificationProvider userId={userId} />} */}
            {/* {userId && <OneSignalManager userId={userId} />} */}
            {/* <div className="absolute inset-0 bg-linear-to-br from-primary/3 via-transparent to-orange-400/10 blur-3xl" /> */}

            <main className="relative">

              {children}

              <a
                href="https://wa.me/244953951694/"
                className="fixed flex gap-1 items-center bottom-25 sm:bottom-10 right-6 bg-green-600 font-medium px-2 py-2 rounded-full shadow-lg hover:scale-105 transition z-50"
              >
                <Phone />
                WhatsApp
              </a>
            </main>


            <EasterEggs />
            <Toaster richColors position="top-right" closeButton />
          </ThemeProvider>
        </MySessionProvider>
      </body>
    </html>
  )
}
