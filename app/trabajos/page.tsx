import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"

export default function Trabajos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Remodelación de Oficina Corporativa",
      descripcion: "Instalación de drywall, pintura y techos para una oficina moderna en el distrito financiero.",
      ubicacion: "San Isidro, Lima",
      fecha: "Marzo 2025",
      categoria: "Oficinas",
      imagenes: ["/images/drywall-acabados.jpeg"],
    },
    {
      id: 2,
      titulo: "Ampliación de Vivienda Familiar",
      descripcion: "Construcción de habitación adicional con drywall, instalación eléctrica y acabados de pintura.",
      ubicacion: "Santa Anita, Lima",
      fecha: "Noviembre 2024",
      categoria: "Residencial",
      imagenes: ["/images/drywall-estructura-metalica.jpeg"],
    },
    {
      id: 3,
      titulo: "Renovación de Fachada Comercial",
      descripcion: "Servicio de pintura para fachada empresarial, incluyendo nueva paleta de colores y aplicación de pintura metálica en portones.",
      ubicacion: "Breña, Lima",
      fecha: "Enero 2023",
      categoria: "Comercial",
      imagenes: ["/images/pintura-taller-plano.jpeg"],
    },
    {
      id: 4,
      titulo: "Instalación de Cielo Raso Decorativo",
      descripcion: "Diseño e instalación de cielo raso con iluminación LED integrada para restaurante.",
      ubicacion: "Ate, Lima",
      fecha: "Octubre 2022",
      categoria: "Restaurantes",
      imagenes: ["/images/drywall-estructura.jpeg"],
    },
    {
      id: 5,
      titulo: "Remodelación de Baños",
      descripcion:
        "Renovación completa de baños con paredes de drywall resistente a la humedad y pintura especializada.",
      ubicacion: "Los Olivos, Lima",
      fecha: "Septiembre 2022",
      categoria: "Residencial",
      imagenes: ["/images/pintura-dormitorio.jpeg"],
    },
    {
      id: 6,
      titulo: "División de Ambientes para Coworking",
      descripcion: "Creación de espacios de trabajo independientes con drywall acústico y acabados modernos.",
      ubicacion: "San Martin de Porres, Lima",
      fecha: "Agosto 2022",
      categoria: "Oficinas",
      imagenes: ["/images/drywall-estructura-metalica-2.jpeg"],
    },
  ]

  return (
    <>
      {/* Hero Section - ACTUALIZADO CON NUEVA IMAGEN DE FONDO */}
      <section className="relative">
        <div className="relative h-[40vh] min-h-[300px]">
          <Image
            src="/images/banner001.jpg"
            alt="Trabajos Realizados"
            fill
            priority
            className="object-cover object-center"
          />
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
              <h1 className="mb-4 text-4xl md:text-5xl font-bold drop-shadow-lg">Trabajos Realizados</h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
                Conoce algunos de nuestros proyectos más destacados. Calidad y profesionalismo en cada trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-64 relative">
                <Image
                  src={proyecto.imagenes[0] || "/placeholder.svg"}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {proyecto.categoria}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span>{proyecto.ubicacion}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-1" />
                  <span>{proyecto.fecha}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nuestro Proceso de Trabajo</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Consulta Inicial</h3>
                <p className="text-gray-600">
                  Nos reunimos para entender tus necesidades y objetivos. Evaluamos el espacio y discutimos posibles
                  soluciones.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Propuesta y Presupuesto</h3>
                <p className="text-gray-600">
                  Elaboramos una propuesta detallada con opciones, materiales y presupuesto claro para tu aprobación.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Ejecución del Proyecto</h3>
                <p className="text-gray-600">
                  Realizamos el trabajo con profesionalismo, respetando tiempos y manteniendo la limpieza del espacio.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Entrega y Garantía</h3>
                <p className="text-gray-600">
                  Entregamos el proyecto terminado y ofrecemos garantía en todos nuestros trabajos para tu tranquilidad.
                </p>
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
          <h2 className="text-3xl font-bold mb-4 text-white">¿Listo para comenzar tu proyecto?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white">
            Contáctanos hoy mismo para una consulta gratuita. Haremos realidad tu visión.
          </p>
          <Link
            href="/contacto"
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Solicitar Consulta Gratuita
          </Link>
        </div>
      </section>
    </>
  )
}
