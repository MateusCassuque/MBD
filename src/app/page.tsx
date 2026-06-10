
import Home from "./components/home/HomeComponente"

export const metadata = {
    title: 'MBD - Oficial',
    description: 'Site Oficial da Empresa',
}

const imgUrl = `${process.env.NEXTAUTH_URL}/images/oficialLogo.png`

export default function LandingPage() {
    return (
        <>
            <head>
                <title>{'3M Visa'}</title>
                <meta property="og:type" content="about" />
                <meta property="og:title" content={'MBD'} />
                <meta property="og:description" content={'Site Official da MBD'} />
                <meta property="og:image" content={'/images/oficialLogo.png'} />
                <meta property="og:image:alt" content={'Logotipo da MBD'} />
                <meta property="og:url" content={imgUrl} />
                <meta property="og:site_name" content="MBD" />
                {/* <meta property="product:price:amount" content={formatCurrency(og.price || 0)} /> */}
                {/* <meta property="product:price:currency" content={og.currency} /> */}
                {/* <meta property="product:availability" content={og.availability} /> */}

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'MBD'} />
                <meta name="twitter:description" content={'Página da MBD'} />
                <meta name="twitter:image" content={imgUrl} />
            </head>

            {/* HERO */}
            <Home />

        </>
    )
}




