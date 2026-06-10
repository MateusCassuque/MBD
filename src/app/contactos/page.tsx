
import Contact from "./components/contact"

export const metadata = {
    title: '3M Visa - Contactos',
    description: 'Site Oficial da 3M Visa',
}
const imgUrl = `${process.env.NEXTAUTH_URL}/images/fundo-gotadsol.jpg`

export default function ContatoPage() {
    return (
        <>
            {/* Open Graph + SEO */}
            <head>
                <title>{'3M Visa - Contactos'}</title>
                <meta property="og:type" content="contact" />
                <meta property="og:title" content={'3M Visa - Contactos'} />
                <meta property="og:description" content={'Página de contactos da 3M Visa'} />
                <meta property="og:image" content={'/images/fundo-gotadsol.jpg'} />
                <meta property="og:image:alt" content={'Bagajens'} />
                <meta property="og:url" content={imgUrl} />
                <meta property="og:site_name" content="3M Visa" />
                {/* <meta property="product:price:amount" content={formatCurrency(og.price || 0)} /> */}
                {/* <meta property="product:price:currency" content={og.currency} /> */}
                {/* <meta property="product:availability" content={og.availability} /> */}

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'3M Visa - Contactos'} />
                <meta name="twitter:description" content={'Página de contactos da 3M Visa'} />
                <meta name="twitter:image" content={imgUrl} />
            </head>

            <div className=" bg-black/80">
                <Contact />
            </div>
        </>
    )
}