import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight, Clock, Award, UserCheck } from 'lucide-react'
import ImageComparison from "@/components/image-comparison"
import ProjectSlider from "@/components/project-slider"
import WorkProcessGallery from "@/components/work-process-gallery"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Carlos Vasquez - Expertos en Drywall y Servicios Generales en Lima, Perú",
  description:
    "Ofrecemos servicios profesionales de drywall, pintura, remodelación y construcción para viviendas, oficinas, locales comerciales e industriales en Lima. Calidad garantizada y atención personalizada. Consulta para cotizar sin compromiso.",
  keywords:
    "drywall Lima, servicios generales Lima, Carlos Vasquez drywall, remodelación Lima, expertos en drywall Perú, construcción Lima, remodelación oficinas, remodelación viviendas, remodelación locales comerciales, instalación drywall, pintura profesional",
}

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Instalación de Drywall",
      description: "Diseño e instalación de paredes, cielos rasos y estructuras de drywall para todo tipo de espacios.",
      imageSrc: "/images/real/drywall-ceiling-structure.jpg",
      category: "Drywall",
      href: "/servicios/drywall",
    },
    {
      id: 2,
      title: "Pintura y Acabados",
      description: "Servicios profesionales de pintura interior y exterior con acabados de primera calidad.",
      imageSrc: "/images/real/interior-painting-orange.jpg",
      category: "Pintura",
      href: "/servicios/pintura",
    },
    {
      id: 3,
      title: "Remodelación de Espacios",
      description: "Transformamos cualquier espacio según sus necesidades con soluciones integrales.",
      imageSrc: "/images/real/process-phase-3-finished.jpg",
      category: "Remodelación",
      href: "/servicios/remodelacion",
    },
    {
      id: 4,
      title: "Pintura de Fachadas",
      description:
        "Servicio especializado de pintado de fachadas y estructuras en altura con seguridad y garantía.",
      imageSrc: "/images/real/facade-painting-workers.jpg",
      category: "Pintura",
      href: "/servicios/pintura",
    },
    {
      id: 5,
      title: "Aislamiento Térmico y Acústico",
      description: "Instalación de fibra de vidrio y materiales aislantes para mayor confort.",
      imageSrc: "/images/real/drywall-insulation.jpg",
      category: "Techos",
      href: "/servicios/techos",
    },
    {
      id: 6,
      title: "Remodelación de Veterinaria",
      description: "Transformación completa de la fachada de una veterinaria en el Callao.",
      imageSrc: "/images/veterinaria-despues.jpeg",
      category: "Remodelación",
      href: "/trabajos",
    },
  ]

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Carlos Vasquez - Expertos en Drywall y Servicios Generales en Lima, Perú",
          description:
            "Ofrecemos servicios profesionales de drywall, pintura, remodelación y construcción para viviendas, oficinas, locales comerciales e industriales en Lima. Calidad garantizada y atención personalizada.",
          url: "https://carlosvasquez.com",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://carlosvasquez.com",
              },
            ],
          },
          mainEntity: {
            "@type": "LocalBusiness",
            name: "Carlos Vasquez - Servicios Generales & Expertos en Drywall",
            image: "https://carlosvasquez.com/logo.png",
            telephone: "+51-930-152-346",
            email: "contacto@carlosvasquez.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jose Granda 2466",
              addressLocality: "San Martin de Porres",
              addressRegion: "Lima",
              postalCode: "15102",
              addressCountry: "PE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -11.9953,
              longitude: -77.0731,
            },
            url: "https://carlosvasquez.com",
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://facebook.com/carlosvasquezdrywall",
              "https://instagram.com/carlosvasquezdrywall",
              "https://www.linkedin.com/in/carlos-marino-vasquez-correa-806678113/",
            ],
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 h-[70vh] min-h-[600px] md:min-h-[650px]">
          {/* Diagonal overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full transform -skew-y-6 bg-white/10 z-10"
              style={{ top: "-15%", height: "130%" }}
            ></div>
          </div>

          {/* Content container */}
          <div className="container mx-auto px-4 h-full relative z-20">
            <div className="flex flex-col h-full justify-center items-center text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">Carlos Vasquez</h1>
              <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-semibold drop-shadow-lg">
                Servicios Generales & Expertos en Drywall
              </h2>
              <p className="mb-8 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
                Soluciones profesionales para remodelación y construcción de viviendas, oficinas, locales comerciales e
                industriales en Lima, Perú. Calidad, puntualidad y garantía en todos nuestros trabajos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Solicitar Cotización
                </Link>
                <Link
                  href="/servicios"
                  className="bg-transparent hover:bg-blue-700 border border-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Nuestros Servicios
                </Link>
              </div>
            </div>
          </div>

          {/* Image grid overlay - ACTUALIZADO CON NUEVAS IMÁGENES */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 opacity-20 mix-blend-overlay">
            <div className="relative">
              <Image
                src="/images/real/drywall-ceiling-structure.jpg"
                alt="Instalación de drywall"
                fill
                className="object-cover"
                loading="lazy"
                sizes="25vw"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/real/facade-painting-workers.jpg"
                alt="Trabajos en fachada"
                fill
                className="object-cover"
                loading="lazy"
                sizes="25vw"
              />
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/images/real/interior-painting-orange.jpg"
                alt="Pintura de fachada"
                fill
                className="object-cover"
                loading="lazy"
                sizes="25vw"
              />
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/images/real/drywall-room-ladder.jpg"
                alt="Instalación de drywall interior"
                fill
                className="object-cover"
                loading="lazy"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Gallery Section */}
      <WorkProcessGallery />

      {/* Before/After Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Transformamos Espacios</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Mira la diferencia que podemos hacer en tu negocio o vivienda. Desliza para ver el antes y después de
            nuestros proyectos.
          </p>

          <div className="max-w-4xl mx-auto">
            <ImageComparison
              beforeImage="/images/veterinaria-antes.jpeg"
              afterImage="/images/veterinaria-despues.jpeg"
              beforeAlt="Veterinaria antes de la remodelación"
              afterAlt="Veterinaria después de la remodelación"
            />

            <div className="mt-6 bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Remodelación de Veterinaria "La Huellita Chalaca"</h3>
              <p className="text-gray-600">
                Transformamos completamente la fachada de esta veterinaria en el Callao, pasando de un local deteriorado
                a un espacio atractivo y con identidad visual. El proyecto incluyó trabajos de drywall, pintura
                especializada y acabados de alta calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container-custom">
        <h2 className="section-title">Nuestros Servicios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="/images/real/drywall-ceiling-structure.jpg"
                alt="Instalación de Drywall"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Instalación de Drywall</h3>
              <p className="text-gray-600 mb-4">
                Diseño e instalación de paredes, cielos rasos y estructuras de drywall para viviendas, oficinas y
                locales comerciales.
              </p>
              <Link
                href="/servicios/drywall"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Ver más <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="/images/real/interior-painting-orange.jpg"
                alt="Pintura y Acabados"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Pintura y Acabados</h3>
              <p className="text-gray-600 mb-4">
                Servicios profesionales de pintura interior y exterior con acabados de primera calidad para todo tipo de
                espacios.
              </p>
              <Link
                href="/servicios/pintura"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Ver más <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="/images/real/process-phase-3-finished.jpg"
                alt="Remodelación de Espacios"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Remodelación de Espacios</h3>
              <p className="text-gray-600 mb-4">
                Transformamos viviendas, oficinas y locales comerciales según sus necesidades con soluciones integrales.
              </p>
              <Link
                href="/servicios/remodelacion"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Ver más <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/servicios" className="btn-primary inline-flex items-center">
            Ver todos los servicios <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Mis Trabajos Realizados Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Mis Trabajos Realizados</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Conoce algunos de nuestros proyectos más destacados. Cada trabajo refleja nuestro compromiso con la calidad
            y la satisfacción del cliente.
          </p>

          <ProjectSlider projects={featuredProjects} />

          <div className="text-center mt-10">
            <Link href="/trabajos" className="btn-primary inline-flex items-center">
              Ver todos los proyectos <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Puntualidad</h3>
              <p className="text-gray-600">
                Respetamos los tiempos acordados. Tu proyecto estará listo cuando lo necesitas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experiencia</h3>
              <p className="text-gray-600">
                Más de 10 años en el sector nos respaldan. Conocemos cada detalle de nuestro trabajo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <UserCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Atención Directa</h3>
              <p className="text-gray-600">
                Carlos supervisa personalmente cada proyecto para garantizar la máxima calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container-custom">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex text-yellow-400 mb-3">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
            </div>
            <p className="text-gray-600 mb-4 italic">
              "Carlos y su equipo hicieron un trabajo excelente instalando drywall en mi oficina. Cumplieron con el
              tiempo acordado y el acabado es perfecto."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 relative overflow-hidden">
                <Image
                  src="/images/cliente-maria-rodriguez.png"
                  alt="María Rodríguez"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-semibold">María Rodríguez</p>
                <p className="text-sm text-gray-500">Miraflores, Lima</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex text-yellow-400 mb-3">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
            </div>
            <p className="text-gray-600 mb-4 italic">
              "Contraté a Carlos para remodelar mi departamento y quedé muy satisfecho. Su atención al detalle y
              profesionalismo son destacables."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 relative overflow-hidden">
                <Image
                  src="/images/cliente-juan-perez.png"
                  alt="Juan Pérez"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-semibold">Juan Pérez</p>
                <p className="text-sm text-gray-500">San Isidro, Lima</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex text-yellow-400 mb-3">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
            </div>
            <p className="text-gray-600 mb-4 italic">
              "Excelente servicio de pintura. Transformaron mi casa con un trabajo limpio y profesional. Definitivamente
              los recomiendo."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 relative overflow-hidden">
                <Image
                  src="/images/cliente-ana-gomez.png"
                  alt="Ana Gómez"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-semibold">Ana Gómez</p>
                <p className="text-sm text-gray-500">Surco, Lima</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - ACTUALIZADO CON NUEVA IMAGEN DE FONDO */}
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
          <h2 className="text-3xl font-bold mb-4 text-white">¿Listo para transformar tu espacio?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white">
            Contáctanos hoy mismo para una cotización sin compromiso. Haremos realidad tu proyecto.
          </p>
          <Link
            href="/contacto"
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Solicitar Cotización Gratis
          </Link>
        </div>
      </section>
    </>
  )
}
