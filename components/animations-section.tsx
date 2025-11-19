"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// Importamos el componente LottieAnimation con ssr: false
const LottieAnimation = dynamic(() => import("@/components/lottie-animation-client"), { ssr: false })

// Importamos las animaciones directamente como objetos JavaScript
import drywallAnimation from "@/app/animations/drywall-animation"
import paintingAnimation from "@/app/animations/painting-animation"
import toolsAnimation from "@/app/animations/tools-animation"

export default function AnimationsSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <section className="py-12 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Nuestras Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholders para las animaciones */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-64 mx-auto bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400">Cargando animación...</p>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Expertos en Drywall</h3>
              <p className="text-gray-600">
                Instalamos sistemas de drywall con precisión y calidad, creando espacios modernos y funcionales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-64 mx-auto bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400">Cargando animación...</p>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Pintura Profesional</h3>
              <p className="text-gray-600">
                Transformamos espacios con acabados de pintura de primera calidad y técnicas profesionales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-64 mx-auto bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400">Cargando animación...</p>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Servicios Generales</h3>
              <p className="text-gray-600">
                Ofrecemos soluciones integrales para todo tipo de proyectos de construcción y remodelación.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Nuestras Especialidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-64 mx-auto">
              <LottieAnimation animationData={drywallAnimation} loop={true} autoplay={true} className="h-full w-full" />
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Expertos en Drywall</h3>
            <p className="text-gray-600">
              Instalamos sistemas de drywall con precisión y calidad, creando espacios modernos y funcionales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-64 mx-auto">
              <LottieAnimation
                animationData={paintingAnimation}
                loop={true}
                autoplay={true}
                className="h-full w-full"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Pintura Profesional</h3>
            <p className="text-gray-600">
              Transformamos espacios con acabados de pintura de primera calidad y técnicas profesionales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-64 mx-auto">
              <LottieAnimation animationData={toolsAnimation} loop={true} autoplay={true} className="h-full w-full" />
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Servicios Generales</h3>
            <p className="text-gray-600">
              Ofrecemos soluciones integrales para todo tipo de proyectos de construcción y remodelación.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
