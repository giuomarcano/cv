import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from 'lucide-react'
import { JsonLd } from "@/components/json-ld"
// Importar el componente WhatsAppCTAButton
import WhatsAppCTAButton from "@/components/whatsapp-cta-button"

export const metadata = {
  title: "Servicios de Pintura en Lima | Acabados Profesionales | Carlos Vasquez",
  description:
    "Servicios profesionales de pintura interior y exterior en Lima. Transformamos espacios con acabados de primera calidad, técnicas modernas y materiales duraderos.",
}

export default function PinturaPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Servicios de Pintura y Acabados",
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
            "Servicios profesionales de pintura interior y exterior con acabados de primera calidad en Lima, Perú.",
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
              src="/images/real/interior-painting-orange.jpg"
              alt="Pintura y Acabados"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Overlay con degradado */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-orange-600/80"></div>

            {/* Diagonal overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-full transform -skew-y-6 bg-white/10 z-10"
                style={{ top: "-15%", height: "130%" }}
              ></div>
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="mb-4 text-4xl md:text-5xl font-bold drop-shadow-lg">Pintura y Acabados</h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
                  Transformamos espacios con servicios profesionales de pintura interior y exterior en Lima, Perú.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Expertos en Pintura</h2>
              <p className="text-gray-600 mb-6">
                En Carlos Vasquez transformamos sus espacios con servicios profesionales de pintura interior y exterior.
                Utilizamos materiales de primera calidad para garantizar durabilidad y acabados perfectos en cada
                proyecto.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestro equipo de pintores profesionales cuenta con amplia experiencia en el mercado limeño, asegurando
                un trabajo limpio, preciso y con resultados que superarán sus expectativas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Pinturas de alta calidad y durabilidad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Técnicas modernas de aplicación</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Preparación adecuada de superficies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Acabados perfectos garantizados</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/real/facade-painting-workers.jpg"
                alt="Pintura profesional"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Servicios de Pintura</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Pintura Interior</h3>
                <p className="text-gray-600 mb-4">
                  Renovamos los interiores de su hogar u oficina con colores modernos y acabados impecables,
                  transformando completamente sus espacios.
                </p>
                <Image
                  src="/images/real/interior-painting-orange.jpg"
                  alt="Pintura interior"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Pintura Exterior</h3>
                <p className="text-gray-600 mb-4">
                  Protegemos y embellecemos la fachada de su propiedad con pinturas resistentes al clima de Lima,
                  garantizando durabilidad y excelente apariencia.
                </p>
                <Image
                  src="/images/real/facade-painting-workers.jpg"
                  alt="Pintura exterior"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Acabados Especiales</h3>
                <p className="text-gray-600 mb-4">
                  Ofrecemos acabados texturizados, efectos decorativos y técnicas especiales para crear espacios únicos
                  y personalizados según sus preferencias.
                </p>
                <Image
                  src="/images/real/process-phase-3-finished.jpg"
                  alt="Acabados especiales"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Proceso de Trabajo</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Evaluación</h3>
                <p className="text-gray-600">Evaluamos el estado de las superficies y sus necesidades específicas.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Preparación</h3>
                <p className="text-gray-600">
                  Preparamos adecuadamente las superficies para garantizar un acabado perfecto.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Aplicación</h3>
                <p className="text-gray-600">
                  Aplicamos la pintura con técnicas profesionales y materiales de calidad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Acabado</h3>
                <p className="text-gray-600">Realizamos los acabados finales y limpieza completa del área.</p>
              </div>
            </div>
          </div>

          {/* Featured Project */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Proyecto Destacado</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Transformación de Veterinaria "La Huellita Chalaca"</h3>
                  <p className="text-gray-600 mb-4">
                    Realizamos la transformación completa de la fachada de esta veterinaria en el Callao, pasando de un
                    local deteriorado a un espacio atractivo y con identidad visual clara.
                  </p>
                  <p className="text-gray-600 mb-4">
                    El proyecto incluyó preparación de superficies, aplicación de pintura especializada para exteriores
                    y acabados de alta calidad que resistirán el clima costero de Lima.
                  </p>
                  <Link
                    href="/trabajos"
                    className="text-orange-500 hover:text-orange-700 font-medium inline-flex items-center"
                  >
                    Ver más proyectos
                  </Link>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/veterinaria-despues.jpeg"
                    alt="Transformación de Veterinaria"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">¿Qué tipo de pinturas utilizan?</h3>
                <p className="text-gray-600">
                  Utilizamos pinturas de alta calidad de marcas reconocidas, seleccionadas específicamente para cada
                  tipo de superficie y necesidad, garantizando durabilidad y excelentes acabados.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">¿Cuánto tiempo toma pintar una casa en Lima?</h3>
                <p className="text-gray-600">
                  El tiempo varía según el tamaño y estado de las superficies. Una casa promedio puede tomar entre 3-5
                  días, incluyendo preparación, aplicación y acabados.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">¿Las pinturas son resistentes a la humedad de Lima?</h3>
                <p className="text-gray-600">
                  Sí, utilizamos pinturas especialmente formuladas para resistir la humedad característica de Lima,
                  previniendo problemas como hongos y descascaramiento.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para renovar tus espacios?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Contáctanos hoy mismo para una cotización sin compromiso. Transformaremos tus espacios con los mejores
              acabados de pintura en Lima.
            </p>
            <div className="flex justify-center">
              <WhatsAppCTAButton
                service="pintura"
                className="bg-white text-orange-500 hover:bg-gray-100"
                text="Solicitar Cotización Gratis"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
