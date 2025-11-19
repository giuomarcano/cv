import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from 'lucide-react'
// Importar el nuevo componente WhatsAppCTAButton
import WhatsAppCTAButton from "@/components/whatsapp-cta-button"

export default function Servicios() {
  return (
    <>
      {/* Hero Section - ACTUALIZADO CON NUEVA IMAGEN DE FONDO */}
      <section className="relative">
        <div className="relative h-[40vh] min-h-[300px]">
          <Image src="/images/banner001.jpg" alt="Servicios" fill priority className="object-cover object-center" />
          {/* Overlay con degradado */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-orange-500/80"></div>

          {/* Diagonal overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full transform -skew-y-6 bg-white/10 z-10"
              style={{ top: "-15%", height: "130%" }}
            ></div>
          </div>

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-bold drop-shadow-lg">Nuestros Servicios</h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
                Ofrecemos soluciones integrales para todo tipo de proyectos de construcción y remodelación en Lima,
                Perú.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="container-custom">
        {/* Drywall Service */}
        <div id="drywall" className="scroll-mt-20 mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Instalación de Drywall</h2>
              <p className="text-gray-600 mb-6">
                Somos especialistas en la instalación de sistemas de drywall para todo tipo de espacios. Creamos
                paredes, cielos rasos, tabiques y estructuras personalizadas según sus necesidades.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Paredes y divisiones de ambientes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Cielos rasos decorativos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Revestimientos acústicos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Estructuras para oficinas y locales comerciales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Soluciones antihumedad</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <WhatsAppCTAButton service="drywall" />
                <Link
                  href="/servicios/drywall"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-xl transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 border border-gray-300 inline-flex items-center"
                >
                  Ver más <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 h-64 md:h-80 relative rounded-lg overflow-hidden">
              <Image
                src="/images/especialistas-en-drywall.jpg"
                alt="Instalación de Drywall"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Painting Service */}
        <div id="pintura" className="scroll-mt-20 mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64 md:h-80 relative rounded-lg overflow-hidden">
              <Image src="/images/pintura-y-acabados.jpg" alt="Pintura y Acabados" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Pintura y Acabados</h2>
              <p className="text-gray-600 mb-6">
                Transformamos sus espacios con servicios profesionales de pintura interior y exterior. Utilizamos
                materiales de primera calidad para garantizar durabilidad y acabados perfectos.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Pintura interior y exterior</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Acabados texturizados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Empapelado y vinil decorativo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Tratamiento de superficies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Barnizado y lacado</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <WhatsAppCTAButton service="pintura" />
                <Link
                  href="/servicios/pintura"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-xl transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 border border-gray-300 inline-flex items-center"
                >
                  Ver más <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Remodeling Service */}
        <div id="remodelacion" className="scroll-mt-20 mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Remodelación de Espacios</h2>
              <p className="text-gray-600 mb-6">
                Transformamos cualquier espacio según sus necesidades con soluciones integrales. Desde pequeñas
                renovaciones hasta remodelaciones completas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Remodelación de cocinas y baños</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Ampliaciones de espacios</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Renovación de oficinas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Acondicionamiento de locales comerciales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Diseño de interiores</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <WhatsAppCTAButton service="remodelación" />
                <Link
                  href="/servicios/remodelacion"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-xl transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 border border-gray-300 inline-flex items-center"
                >
                  Ver más <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 h-64 md:h-80 relative rounded-lg overflow-hidden">
              <Image src="/images/drywall-acabados.jpeg" alt="Remodelación de Espacios" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Pintura de portones/puertas metálicas */}
        <div id="pintura-metalica" className="scroll-mt-20 mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64 md:h-80 relative rounded-lg overflow-hidden">
              <Image
                src="/images/pintura-metalica.jpeg"
                alt="Pintura de portones/puertas metálicas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Pintura de portones/puertas metálicas</h2>
              <p className="text-gray-600 mb-6">
                Servicio especializado de pintado de portones, puertas metálicas y estructuras con acabados de alta
                durabilidad.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Pintado de portones y puertas metálicas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Tratamiento anticorrosivo para estructuras metálicas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Acabados especiales para rejas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Pinturas resistentes a la intemperie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Restauración de superficies metálicas</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <WhatsAppCTAButton service="pintura de portones y puertas metálicas" />
                <Link
                  href="/servicios/pintura"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-xl transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 border border-gray-300 inline-flex items-center"
                >
                  Ver más <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner001.jpg"
            alt="Trabajadores de construcción"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay con degradado */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-orange-500/90"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">¿Necesitas un servicio personalizado?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white">
            Contáctanos para discutir tu proyecto específico. Ofrecemos soluciones a medida para cada cliente.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTAButton className="bg-white text-blue-600 hover:bg-gray-100" text="Contactar Ahora" />
          </div>
        </div>
      </section>
    </>
  )
}
