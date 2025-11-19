import Image from "next/image"
import { CheckCircle } from 'lucide-react'
import { JsonLd } from "@/components/json-ld"
import WhatsAppCTAButton from "@/components/whatsapp-cta-button"

export const metadata = {
  title: "Remodelación de Espacios en Lima | Transformación Integral | Carlos Vasquez",
  description:
    "Servicio profesional de remodelación de espacios en Lima. Transformamos viviendas, oficinas y locales comerciales con soluciones integrales y acabados de calidad.",
}

export default function RemodelacionPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Remodelación de Espacios",
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
            "Transformamos cualquier espacio según sus necesidades con soluciones integrales. Desde pequeñas renovaciones hasta remodelaciones completas en Lima, Perú.",
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
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 h-[40vh] min-h-[300px]">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-full transform -skew-y-6 bg-white/10 z-10"
                style={{ top: "-15%", height: "130%" }}
              ></div>
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="mb-4 text-4xl md:text-5xl font-bold drop-shadow-lg">Remodelación de Espacios</h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
                  Transformamos cualquier espacio según sus necesidades con soluciones integrales en Lima, Perú.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Expertos en Remodelación</h2>
              <p className="text-gray-600 mb-6">
                En Carlos Vasquez nos especializamos en transformar cualquier espacio según sus necesidades con
                soluciones integrales. Desde pequeñas renovaciones hasta remodelaciones completas, nuestro equipo está
                preparado para hacer realidad su visión.
              </p>
              <p className="text-gray-600 mb-6">
                Combinamos nuestra experiencia en drywall, pintura, electricidad y acabados para ofrecer un servicio
                completo que transformará su hogar, oficina o local comercial en Lima.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Diseño personalizado según sus necesidades</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Materiales de primera calidad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Cumplimiento de plazos acordados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Supervisión constante del proyecto</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/remodelacion-espacios.jpeg"
                alt="Remodelación de espacios"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Servicios de Remodelación</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Remodelación de Viviendas</h3>
                <p className="text-gray-600 mb-4">
                  Transformamos su hogar con soluciones personalizadas que optimizan el espacio y mejoran la
                  funcionalidad y estética de cada ambiente.
                </p>
                <Image
                  src="/images/remodelacion-viviendas.jpeg"
                  alt="Remodelación de viviendas"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Remodelación de Oficinas</h3>
                <p className="text-gray-600 mb-4">
                  Creamos espacios de trabajo modernos y funcionales que reflejan la identidad de su empresa y mejoran
                  la productividad.
                </p>
                <Image
                  src="/images/remodelacion-oficinas.webp"
                  alt="Remodelación de oficinas"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Locales Comerciales</h3>
                <p className="text-gray-600 mb-4">
                  Diseñamos y remodelamos locales comerciales atractivos que captan la atención de los clientes y
                  optimizan el espacio de venta.
                </p>
                <Image
                  src="/images/locales-comerciales.jpeg"
                  alt="Remodelación de locales comerciales"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Before/After */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Transformaciones Reales</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Antes</h3>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/veterinaria-antes.jpeg"
                      alt="Antes de la remodelación"
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Después</h3>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/veterinaria-despues.jpeg"
                      alt="Después de la remodelación"
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Remodelación de Veterinaria "La Huellita Chalaca"</h3>
                <p className="text-gray-600">
                  Transformamos completamente la fachada de esta veterinaria en el Callao, pasando de un local
                  deteriorado a un espacio atractivo y con identidad visual clara. El proyecto incluyó trabajos de
                  drywall, pintura especializada y acabados de alta calidad.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Proceso de Trabajo</h2>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Consulta</h3>
                <p className="text-gray-600">Evaluamos sus necesidades y objetivos para el espacio.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Diseño</h3>
                <p className="text-gray-600">Creamos un diseño personalizado según sus requerimientos.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Presupuesto</h3>
                <p className="text-gray-600">Elaboramos un presupuesto detallado y transparente.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Ejecución</h3>
                <p className="text-gray-600">Realizamos los trabajos con profesionalismo y calidad.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  5
                </div>
                <h3 className="text-lg font-bold mb-2">Entrega</h3>
                <p className="text-gray-600">Entregamos el proyecto terminado con garantía incluida.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">¿Cuánto tiempo toma una remodelación completa?</h3>
                <p className="text-gray-600">
                  El tiempo varía según la complejidad y tamaño del proyecto. Una remodelación básica puede tomar 2-3
                  semanas, mientras que proyectos más complejos pueden extenderse a 1-2 meses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">
                  ¿Necesito desocupar completamente el espacio durante la remodelación?
                </h3>
                <p className="text-gray-600">
                  Depende del alcance del proyecto. Para remodelaciones parciales, podemos trabajar por áreas para
                  minimizar las molestias. Para remodelaciones completas, es recomendable desocupar el espacio.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">¿Ofrecen garantía por los trabajos de remodelación?</h3>
                <p className="text-gray-600">
                  Sí, todos nuestros trabajos de remodelación cuentan con garantía. El período varía según el tipo de
                  trabajo, pero generalmente es de 6 meses a 1 año para instalaciones y acabados.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu espacio?</h2>
            <p className="max-w-2xl mx-auto mb-6 text-lg">
              Contáctanos hoy mismo para una consulta gratuita. Nuestro equipo de expertos en Lima está listo para hacer
              realidad tu proyecto.
            </p>
            <div className="flex justify-center">
              <WhatsAppCTAButton
                service="remodelación"
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
