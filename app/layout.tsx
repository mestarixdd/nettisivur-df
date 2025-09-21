import "@/styles/globals.css"
import { Montserrat, Playfair_Display, Poppins, PT_Serif, Caveat } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

// Määritellään metadata hakukoneoptimointia varten
export const metadata: Metadata = {
  title: "Riku Illukka - Kohti Olympialaisia",
  description: "Suomalainen huippupikajuoksija, tavoitteena Los Angelesin Olympialaiset 2028",
  keywords: ["Riku Illukka", "pikajuoksija", "urheilu", "olympialaiset", "100m", "200m", "suomalainen urheilija"],
  robots: "index, follow",
  openGraph: {
    title: "Riku Illukka - Kohti Olympialaisia",
    description: "Suomalainen huippupikajuoksija, tavoitteena Los Angelesin Olympialaiset 2028",
    url: "https://rikuillukka.fi",
    siteName: "Riku Illukka",
    locale: "fi_FI",
    type: "website",
  },
    generator: 'v0.app'
}

// Fonttien määrittely optimoiduilla asetuksilla
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-playfair",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const ptSerif = PT_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-ptserif",
})

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2C3E50" />

        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-9YC4XGE74E`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9YC4XGE74E');
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} ${playfair.variable} ${poppins.variable} ${ptSerif.variable} ${caveat.variable} antialiased overflow-x-hidden`}
        style={{
          fontFamily: "var(--font-ptserif), serif",
        }}
      >
        {children}
      </body>
    </html>
  )
}
