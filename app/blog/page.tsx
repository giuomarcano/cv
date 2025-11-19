import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog sobre Drywall y Remodelación en Lima | Carlos Vasquez",
  description:
    "Artículos, consejos y novedades sobre drywall, remodelación y servicios generales para viviendas, oficinas y locales comerciales en Lima, Perú.",
  keywords:
    "blog drywall, blog remodelación, consejos construcción Lima, tendencias drywall, remodelación oficinas Lima, remodelación viviendas Perú",
  alternates: {
    canonical: "https://carlosvasquez.com/blog",
  },
  openGraph: {
    title: "Blog sobre Drywall y Remodelación en Lima | Carlos Vasquez",
    description: "Artículos, consejos y novedades sobre drywall, remodelación y servicios generales en Lima, Perú.",
    url: "https://carlosvasquez.com/blog",
    type: "website",
  },
}

export default function Blog() {
  const articulos = [
    {
      id: 1,
      titulo: "¿Por qué elegir drywall para remodelar tu casa en Lima?",
      resumen:
        "Descubre las ventajas del drywall frente a otros materiales de construcción tradicionales para remodelaciones en Lima.",
      imagen: "/images/blog-beneficios-drywall.png",
      fecha: "15 de abril, 2023",
      autor: "Carlos Vasquez",
      slug: "por-que-elegir-drywall-para-remodelar",
      categoria: "Drywall",
      tags: ["drywall", "remodelación", "viviendas", "Lima"],
    },
    {
      id: 2,
      titulo: "Consejos para ahorrar al contratar servicios generales en Perú",
      resumen:
        "Aprende cómo optimizar tu presupuesto sin sacrificar calidad cuando contrates servicios de remodelación y construcción.",
      imagen: "/images/blog-presupuesto.png",
      fecha: "28 de marzo, 2023",
      autor: "Carlos Vasquez",
      slug: "consejos-para-ahorrar-al-contratar-servicios",
      categoria: "Consejos",
      tags: ["presupuesto", "ahorro", "servicios generales", "remodelación"],
    },
    {
      id: 3,
      titulo: "5 tendencias en diseño de interiores con drywall para 2023",
      resumen:
        "Conoce las últimas tendencias en diseño de interiores utilizando drywall que están marcando pauta este año en Lima.",
      imagen: "/images/blog-mueble-tv.png",
      fecha: "10 de marzo, 2023",
      autor: "Carlos Vasquez",
      slug: "tendencias-diseno-interiores-drywall",
      categoria: "Tendencias",
      tags: ["tendencias", "diseño interiores", "drywall", "2023"],
    },
    {
      id: 4,
      titulo: "Guía completa: Cómo remodelar tu oficina con drywall",
      resumen:
        "Todo lo que necesitas saber para transformar tu espacio de trabajo utilizando soluciones en drywall prácticas y modernas.",
      imagen: "/images/blog-antes-despues.png",
      fecha: "22 de febrero, 2023",
      autor: "Carlos Vasquez",
      slug: "guia-remodelar-oficina-drywall",
      categoria: "Oficinas",
      tags: ["oficinas", "remodelación", "drywall", "espacios de trabajo"],
    },
    {
      id: 5,
      titulo: "Ventajas de los cielos rasos de drywall en Lima",
      resumen:
        "Descubre por qué los cielos rasos de drywall son la mejor opción para viviendas y oficinas en el clima de Lima.",
      imagen: "/images/blog-techo-led.png",
      fecha: "5 de febrero, 2023",
      autor: "Carlos Vasquez",
      slug: "ventajas-cielos-rasos-drywall-lima",
      categoria: "Cielos Rasos",
      tags: ["cielos rasos", "drywall", "Lima", "viviendas", "oficinas"],
    },
    {
      id: 6,
      titulo: "¿Cuánto cuesta una remodelación con drywall en Lima?",
      resumen:
        "Análisis de costos y factores que influyen en el presupuesto de una remodelación con drywall en Lima, Perú.",
      imagen: "/images/blog-construccion-drywall.png",
      fecha: "18 de enero, 2023",
      autor: "Carlos Vasquez",
      slug: "cuanto-cuesta-remodelacion-drywall-lima",
      categoria: "Presupuesto",
      tags: ["costos", "presupuesto", "drywall", "remodelación", "Lima"],
    },
  ]

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          headline: "Blog sobre Drywall y Remodelación en Lima",
          description:
            "Artículos, consejos y novedades sobre drywall, remodelación y servicios generales en Lima, Perú.",
          author: {
            "@type": "Person",
            name: "Carlos Marino Vasquez Correa",
            jobTitle: "Experto en drywall y servicios generales",
            description:
              "Experto con más de 10 años de experiencia en Lima, Perú. Especialista en soluciones de construcción y remodelación.",
            url: "https://www.linkedin.com/in/carlos-marino-vasquez-correa-806678113/",
            image: "https://carlosvasquez.com/images/carlos-vasquez-profile.jpeg",
          },
          publisher: {
            "@type": "Organization",
            name: "Carlos Vasquez - Servicios Generales & Expertos en Drywall",
            logo: {
              "@type": "ImageObject",
              url: "https://carlosvasquez.com/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://carlosvasquez.com/blog",
          },
          blogPost: articulos.map((articulo) => ({
            "@type": "BlogPosting",
            headline: articulo.titulo,
            description: articulo.resumen,
            image: `https://carlosvasquez.com${articulo.imagen}`,
            url: `https://carlosvasquez.com/blog/${articulo.slug}`,
            datePublished: "2023-04-15T08:00:00+00:00",
            author: {
              "@type": "Person",
              name: "Carlos Marino Vasquez Correa",
            },
            publisher: {
              "@type": "Organization",
              name: "Carlos Vasquez - Servicios Generales & Expertos en Drywall",
              logo: {
                "@type": "ImageObject",
                url: "https://carlosvasquez.com/logo.png",
              },
            },
            keywords: articulo.tags.join(", "),
          })),
        }}
      />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative h-[40vh] min-h-[300px]">
          <Image
            src="/images/datos-de-contacto-scaled.jpeg"
            alt="Blog"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-bold drop-shadow-lg">Blog</h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
                Artículos, consejos y novedades sobre drywall, remodelación y servicios generales en Lima, Perú.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container-custom">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-64 md:h-full relative">
                <Image
                  src={articulos[0].imagen || "/placeholder.svg"}
                  alt={articulos[0].titulo}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
                {articulos[0].categoria}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{articulos[0].titulo}</h2>
              <p className="text-gray-600 mb-4">{articulos[0].resumen}</p>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar size={16} className="mr-1" />
                <span className="mr-4">{articulos[0].fecha}</span>
                <User size={16} className="mr-1" />
                <span>{articulos[0].autor}</span>
              </div>
              <Link href={`/blog/${articulos[0].slug}`} className="btn-primary inline-flex items-center">
                Leer artículo completo <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulos.slice(1).map((articulo) => (
            <div
              key={articulo.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <Image
                  src={articulo.imagen || "/placeholder.svg"}
                  alt={articulo.titulo}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {articulo.categoria}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{articulo.titulo}</h3>
                <p className="text-gray-600 mb-4">{articulo.resumen}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">{articulo.fecha}</span>
                  <User size={16} className="mr-1" />
                  <span>{articulo.autor}</span>
                </div>
                <Link
                  href={`/blog/${articulo.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Leer más <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro boletín</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
            Recibe consejos, novedades y ofertas especiales directamente en tu correo.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Suscribirme
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Nunca compartiremos tu correo electrónico. Puedes darte de baja en cualquier momento.
            </p>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda con tu proyecto?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contáctanos hoy mismo para una consulta gratuita. Nuestro equipo está listo para ayudarte.
          </p>
          <Link
            href="/contacto"
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </>
  )
}
