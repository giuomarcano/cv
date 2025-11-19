import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollToTop from "@/components/scroll-to-top"
import { JsonLd } from "@/components/json-ld"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Carlos Vasquez – Expertos en Drywall y Servicios Generales en Lima, Perú",
  description:
    "Servicios profesionales de drywall, pintura, remodelación y construcción para viviendas, oficinas, locales comerciales e industriales en Lima, Perú. Trabajos garantizados con atención directa y puntual. Consulta para cotizar sin compromiso.",
  keywords:
    "drywall Lima, servicios generales Lima, Carlos Vasquez drywall, remodelación Lima, expertos en drywall Perú, construcción Lima, remodelación oficinas, remodelación viviendas, remodelación locales comerciales, instalación drywall, pintura profesional, cielos rasos, acabados especiales",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://carlosvasquez.com",
  },
  openGraph: {
    type: "website",
    url: "https://carlosvasquez.com",
    title: "Carlos Vasquez – Expertos en Drywall y Servicios Generales en Lima, Perú",
    description:
      "Servicios profesionales de drywall, pintura, remodelación y construcción para viviendas, oficinas, locales comerciales e industriales en Lima, Perú.",
    siteName: "Carlos Vasquez",
    images: [
      {
        url: "https://carlosvasquez.com/logo.png",
        width: 800,
        height: 600,
        alt: "Carlos Vasquez Logo",
      },
    ],
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Vasquez – Expertos en Drywall y Servicios Generales en Lima, Perú",
    description:
      "Servicios profesionales de drywall, pintura, remodelación y construcción para viviendas, oficinas, locales comerciales e industriales en Lima, Perú.",
    images: ["https://carlosvasquez.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verificación-google",
  },
  category: "construcción, remodelación, drywall, servicios generales",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Carlos Vasquez - Servicios Generales & Expertos en Drywall",
            url: "https://carlosvasquez.com",
            logo: "https://carlosvasquez.com/logo.png",
            description:
              "Servicios profesionales de drywall, pintura, remodelación y construcción para viviendas, oficinas, locales comerciales e industriales en Lima, Perú.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+51-930-152-346",
              contactType: "customer service",
              areaServed: "Lima, Perú",
              availableLanguage: "Spanish",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jose Granda 2466",
              addressLocality: "San Martin de Porres",
              addressRegion: "Lima",
              postalCode: "15102",
              addressCountry: "PE",
            },
            sameAs: [
              "https://facebook.com/carlosvasquezdrywall",
              "https://instagram.com/carlosvasquezdrywall",
              "https://www.linkedin.com/in/carlos-marino-vasquez-correa-806678113/",
            ],
            founder: {
              "@type": "Person",
              name: "Carlos Marino Vasquez Correa",
              jobTitle: "Experto en drywall y servicios generales",
              description:
                "Experto con más de 10 años de experiencia en Lima, Perú. Especialista en soluciones de construcción y remodelación.",
              sameAs: "https://www.linkedin.com/in/carlos-marino-vasquez-correa-806678113/",
            },
            areaServed: {
              "@type": "City",
              name: "Lima",
              containsPlace: {
                "@type": "State",
                name: "Lima",
                containsPlace: {
                  "@type": "Country",
                  name: "Perú",
                },
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de Drywall y Remodelación",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Instalación de Drywall",
                    description:
                      "Diseño e instalación de paredes, cielos rasos y estructuras de drywall para todo tipo de espacios.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pintura y Acabados",
                    description:
                      "Servicios profesionales de pintura interior y exterior con acabados de primera calidad.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Remodelación de Espacios",
                    description: "Transformamos cualquier espacio según sus necesidades con soluciones integrales.",
                  },
                },
              ],
            },
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
