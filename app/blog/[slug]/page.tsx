"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import { JsonLd } from "@/components/json-ld"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // En un sitio real, aquí se obtendría el artículo desde una base de datos o CMS
  // usando el slug como identificador

  // Artículo de ejemplo para mostrar la estructura
  const articulo = {
    titulo: "¿Por qué elegir drywall para remodelar tu casa en Lima?",
    resumen:
      "Descubre las ventajas del drywall frente a otros materiales de construcción tradicionales para remodelaciones en Lima.",
    contenido: `
      <p>El drywall se ha convertido en una de las opciones más populares para remodelaciones y construcciones en Lima, y por buenas razones. Este sistema constructivo ofrece numerosas ventajas que lo hacen ideal para el clima y las necesidades específicas de la capital peruana.</p>
      
      <h2>Ventajas del drywall en Lima</h2>
      
      <p>El drywall, también conocido como sistema de construcción en seco, presenta múltiples beneficios para los proyectos de remodelación en Lima:</p>
      
      <h3>1. Adaptabilidad al clima limeño</h3>
      
      <p>Lima tiene un clima húmedo durante gran parte del año. El drywall, cuando se instala correctamente con las placas adecuadas (como las resistentes a la humedad), puede soportar perfectamente estas condiciones sin deteriorarse.</p>
      
      <h3>2. Rapidez de instalación</h3>
      
      <p>A diferencia de los métodos tradicionales como el ladrillo y cemento, el drywall se instala en mucho menos tiempo. Esto significa menos molestias y una remodelación más rápida para tu hogar u oficina en Lima.</p>
      
      <h3>3. Excelente aislamiento acústico</h3>
      
      <p>En una ciudad ruidosa como Lima, el aislamiento acústico es fundamental. El drywall, especialmente cuando se instala con aislamiento interno, proporciona una excelente barrera contra el ruido exterior.</p>
      
      <h3>4. Versatilidad de diseño</h3>
      
      <p>El drywall permite crear diseños personalizados, desde paredes curvas hasta cielos rasos decorativos, dando a los espacios limeños un toque moderno y único.</p>
      
      <h3>5. Menor costo</h3>
      
      <p>En comparación con los métodos tradicionales, el drywall suele ser más económico, lo que lo convierte en una excelente opción para quienes buscan renovar sus espacios en Lima sin gastar demasiado.</p>
      
      <h2>Consideraciones importantes</h2>
      
      <p>Para obtener los mejores resultados con el drywall en Lima, es fundamental:</p>
      
      <ul>
        <li>Contratar profesionales con experiencia en instalación de drywall</li>
        <li>Utilizar materiales de calidad adaptados al clima limeño</li>
        <li>Considerar el uso de placas resistentes a la humedad en baños y cocinas</li>
        <li>Realizar un mantenimiento adecuado para prolongar la vida útil del sistema</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>El drywall representa una solución moderna, eficiente y adaptable para las remodelaciones en Lima. Su versatilidad, rapidez de instalación y buen comportamiento frente al clima limeño lo convierten en una opción superior a los métodos tradicionales en muchos casos.</p>
      
      <p>Si estás considerando una remodelación en Lima, el drywall definitivamente merece ser considerado como tu primera opción.</p>
    `,
    imagen: "/images/blog-beneficios-drywall.png",
    fecha: "15 de abril, 2023",
    autor: "Carlos Vasquez",
    slug: params.slug,
    categoria: "Drywall",
    tags: ["drywall", "remodelación", "construcción", "Lima", "Perú"],
  }

  // Artículos relacionados
  const articulosRelacionados = [
    {
      id: 1,
      titulo: "Ventajas de los cielos rasos de drywall en Lima",
      resumen:
        "Descubre por qué los cielos rasos de drywall son la mejor opción para viviendas y oficinas en el clima de Lima.",
      imagen: "/images/blog-techo-led.png",
      fecha: "5 de febrero, 2023",
      autor: "Carlos Vasquez",
      slug: "ventajas-cielos-rasos-drywall-lima",
    },
    {
      id: 2,
      titulo: "¿Cuánto cuesta una remodelación con drywall en Lima?",
      resumen:
        "Análisis de costos y factores que influyen en el presupuesto de una remodelación con drywall en Lima, Perú.",
      imagen: "/images/blog-construccion-drywall.png",
      fecha: "18 de enero, 2023",
      autor: "Carlos Vasquez",
      slug: "cuanto-cuesta-remodelacion-drywall-lima",
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
    },
  ]

  // URL canónica para SEO
  const canonicalUrl = `https://carlosvasquez.com/blog/${params.slug}`

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: articulo.titulo,
          description: articulo.resumen,
          image: `https://carlosvasquez.com${articulo.imagen}`,
          datePublished: "2023-04-15T08:00:00+00:00",
          dateModified: "2023-04-15T08:00:00+00:00",
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
            "@id": canonicalUrl,
          },
          keywords: articulo.tags.join(", "),
        }}
      />

      {/* Article Header */}
      <section className="relative">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative h-[40vh] min-h-[300px]">
          <Image
            src="/images/datos-de-contacto-scaled.jpeg"
            alt={articulo.titulo}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                  <ArrowLeft size={16} className="mr-2" />
                  Volver al blog
                </Link>
                <h1 className="mb-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{articulo.titulo}</h1>
                <p className="text-lg mb-6 text-white drop-shadow-md">{articulo.resumen}</p>
                <div className="flex items-center text-white/80 text-sm">
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">{articulo.fecha}</span>
                  <User size={16} className="mr-1" />
                  <span>{articulo.autor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src={articulo.imagen || "/placeholder.svg"}
              alt={articulo.titulo}
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: articulo.contenido }}
          ></div>

          {/* Share Buttons */}
          <div className="border-t border-b py-4 my-8">
            <div className="flex items-center">
              <span className="mr-4 font-medium">Compartir:</span>
              <div className="flex space-x-2">
                <button
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  aria-label="Compartir en Facebook"
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`,
                      "_blank",
                    )
                  }
                >
                  <Facebook size={18} />
                </button>
                <button
                  className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500"
                  aria-label="Compartir en Twitter"
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(articulo.titulo)}`,
                      "_blank",
                    )
                  }
                >
                  <Twitter size={18} />
                </button>
                <button
                  className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
                  aria-label="Compartir en LinkedIn"
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(canonicalUrl)}&title=${encodeURIComponent(articulo.titulo)}`,
                      "_blank",
                    )
                  }
                >
                  <Linkedin size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 sm:mb-0 sm:mr-4 relative overflow-hidden flex-shrink-0">
                <Image
                  src="/images/carlos-vasquez-profile.jpeg"
                  alt="Carlos Vasquez"
                  width={64}
                  height={64}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-lg">Carlos Vasquez</h3>
                <p className="text-gray-600">
                  Experto en drywall y servicios generales con más de 10 años de experiencia en Lima, Perú. Especialista
                  en soluciones de construcción y remodelación.
                </p>
                <a
                  href="https://www.linkedin.com/in/carlos-marino-vasquez-correa-806678113/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center mt-1 justify-center sm:justify-start"
                >
                  <Linkedin size={14} className="mr-1" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Artículos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {articulosRelacionados.map((articulo) => (
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
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{articulo.titulo}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{articulo.fecha}</span>
                  </div>
                  <Link
                    href={`/blog/${articulo.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Leer artículo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu espacio?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contáctanos hoy mismo para una cotización sin compromiso. Haremos realidad tu proyecto.
          </p>
          <Link
            href="/contacto"
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Solicitar Cotización Gratis
          </Link>
        </div>
      </section>
    </>
  )
}
