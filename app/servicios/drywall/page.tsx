import Image from "next/image"
import { CheckCircle } from 'lucide-react'
import { JsonLd } from "@/components/json-ld"
// Importar el componente WhatsAppCTAButton
import WhatsAppCTAButton from "@/components/whatsapp-cta-button"

export const metadata = {
  title: "Drywall en Lima | El mejor servicio de Perú | Carlos Vasquez",
  description:
    "Ofrecemos el mejor servicio de drywall del Perú, con atención rápida y trabajos garantizados en Lima. Especialistas en instalación de paredes, cielos rasos y estructuras personalizadas.",
}

export default function DrywallPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Instalación de Drywall",
          provider: {
            "@type": "Organization",
            name: "Carlos Vasquez - Servicios Generales & Expertos en Drywall",
            url: "https://carlosvasquez.com",
          },
          areaServed: {
            "@type": "City",
            name: "Lima",
          },
          description:
            "Servicios profesionales de instalación de drywall para todo tipo de espacios en Lima, Perú. Paredes, cielos rasos y estructuras personalizadas.",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            areaServed: "Lima, Perú",
          },
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[40vh] min-h-[300px]">
            <Image
              src="/images/real/drywall-ceiling-structure.jpg"
              alt="Instalación de Drywall"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Overlay con degradado */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>

            {/* Diagonal overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-full transform -skew-y-6 bg-white/10 z-10"
                style={{ top: "-15%", height: "130%" }}
              ></div>
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="mb-4 text-4xl md:text-5xl font-bold drop-shadow-lg">Instalación de Drywall</h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
                  Expertos en instalación de sistemas de drywall para todo tipo de espacios en Lima, Perú.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Vea Nuestro Trabajo en Acción</h2>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <video 
              className="w-full aspect-video object-cover" 
              controls 
              poster="/images/real/drywall-ceiling-structure.jpg"
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drywall%204-V4tGAxM733LRY7wA55ltmvq7q49zMp.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Especialistas en Drywall</h2>
              <p className="text-gray-600 mb-6">
                En Carlos Vasquez somos especialistas en la instalación de sistemas de drywall para todo tipo de
                espacios. Creamos paredes, cielos rasos, tabiques y estructuras personalizadas según sus necesidades
                específicas.
              </p>
              <p className="text-gray-600 mb-6">
                Con más de 10 años de experiencia en el mercado limeño, nuestro equipo de profesionales garantiza un
                trabajo de calidad, con acabados perfectos y en el tiempo acordado.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Materiales de primera calidad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Instalación rápida y limpia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Presupuestos sin compromiso</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Garantía en todos nuestros trabajos</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/real/drywall-room-ladder.jpg"
                alt="Estructura metálica para drywall"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Servicios de Drywall</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Paredes y Divisiones</h3>
                <p className="text-gray-600 mb-4">
                  Creamos paredes y divisiones de ambientes con drywall, ideales para optimizar espacios en oficinas,
                  viviendas y locales comerciales en Lima.
                </p>
                <Image
                  src="/images/real/drywall-room-ladder.jpg"
                  alt="Paredes y divisiones de drywall"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Cielos Rasos</h3>
                <p className="text-gray-600 mb-4">
                  Instalamos cielos rasos decorativos que transforman cualquier ambiente, con diseños personalizados y
                  opciones de iluminación integrada.
                </p>
                <Image
                  src="/images/real/drywall-ceiling-structure.jpg"
                  alt="Cielos rasos de drywall"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Aislamiento Térmico</h3>
                <p className="text-gray-600 mb-4">
                  Ofrecemos soluciones de revestimiento con fibra de vidrio para mejorar el aislamiento acústico y
                  térmico, ideal para el clima de Lima.
                </p>
                <Image
                  src="/images/real/drywall-insulation.jpg"
                  alt="Revestimientos de drywall"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6">Ventajas del Drywall</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Rapidez de Instalación</h3>
                <p className="text-gray-600 mb-4">
                  El drywall se instala en mucho menos tiempo que los métodos tradicionales, reduciendo las molestias y
                  permitiéndote disfrutar de tu espacio renovado más rápido.
                </p>

                <h3 className="text-xl font-bold mb-3">Versatilidad de Diseño</h3>
                <p className="text-gray-600 mb-4">
                  Permite crear diseños personalizados, desde paredes curvas hasta cielos rasos decorativos, dando a los
                  espacios limeños un toque moderno y único.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Excelente Aislamiento</h3>
                <p className="text-gray-600 mb-4">
                  En una ciudad ruidosa como Lima, el drywall proporciona un excelente aislamiento acústico,
                  especialmente cuando se instala con materiales aislantes internos.
                </p>

                <h3 className="text-xl font-bold mb-3">Menor Costo</h3>
                <p className="text-gray-600 mb-4">
                  En comparación con los métodos tradicionales, el drywall suele ser más económico, lo que lo convierte
                  en una excelente opción para renovar espacios en Lima sin gastar demasiado.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Proceso de Trabajo</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Evaluación</h3>
                <p className="text-gray-600">Visitamos tu espacio y evaluamos tus necesidades específicas.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Diseño</h3>
                <p className="text-gray-600">Creamos un diseño personalizado según tus requerimientos.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Instalación</h3>
                <p className="text-gray-600">Nuestro equipo realiza la instalación con precisión y limpieza.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Acabados</h3>
                <p className="text-gray-600">Finalizamos con acabados perfectos y limpieza del área.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">¿Cuánto tiempo toma instalar drywall?</h3>
                <p className="text-gray-600">
                  El tiempo de instalación depende del tamaño y complejidad del proyecto. Una pared simple puede
                  instalarse en 1-2 días, mientras que proyectos más grandes pueden tomar una semana o más.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">¿El drywall es resistente a la humedad de Lima?</h3>
                <p className="text-gray-600">
                  Sí, utilizamos placas de drywall resistentes a la humedad (RH) especialmente en zonas como baños y
                  cocinas, ideales para el clima húmedo de Lima.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">¿Puedo colgar objetos pesados en paredes de drywall?</h3>
                <p className="text-gray-600">
                  Sí, con los anclajes adecuados es posible colgar objetos pesados. Para elementos muy pesados,
                  reforzamos la estructura interna durante la instalación.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu espacio con drywall?</h2>
            <p className="max-w-2xl mx-auto mb-6 text-lg">
              Contáctanos hoy mismo para una cotización sin compromiso. Nuestro equipo de expertos en Lima está listo
              para ayudarte.
            </p>
            <div className="flex justify-center">
              <WhatsAppCTAButton
                service="drywall"
                className="bg-white text-blue-600 hover:bg-gray-100"
                text="Solicitar Cotización Gratis"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
