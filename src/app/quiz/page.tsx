import QuizPage from "./quiz"


export const metadata = {
    title: '3M Visa - Consulta Gratís',
    description: 'Ánalise de probabilidade de aquisição de Visto',
}

const imgUrl = `${process.env.NEXTAUTH_URL}/images/image_downloader_1661001638086.png`

export default function AboutPage() {
    return (
        <>
            {/* Open Graph + SEO */}
            <head>
                <title>{'3M Visa - Consulta Gratís'}</title>
                <meta property="og:type" content="about" />
                <meta property="og:title" content={'3M Visa - Consulta Gratís'} />
                <meta property="og:description" content={'Página de Consulta Gratís da 3M Visa'} />
                <meta property="og:image" content={'/images/image_downloader_1661001638086.png'} />
                <meta property="og:image:alt" content={'Jovem com Bagajens'} />
                <meta property="og:url" content={imgUrl} />
                <meta property="og:site_name" content="3M Visa" />
                {/* <meta property="product:price:amount" content={formatCurrency(og.price || 0)} /> */}
                {/* <meta property="product:price:currency" content={og.currency} /> */}
                {/* <meta property="product:availability" content={og.availability} /> */}

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'3M Visa - Consulta Gratís'} />
                <meta name="twitter:description" content={'Página de Consulta Gratís da 3M Visa'} />
                <meta name="twitter:image" content={imgUrl} />
            </head>

            <div className="min-h-screen bg-linear-to-b from-[#050816] to-[#0a0f2c] text-white">
                <QuizPage />
            </div>
        </>
    )
}


