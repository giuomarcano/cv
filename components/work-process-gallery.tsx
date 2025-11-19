"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Hammer, Paintbrush, CheckCircle2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    id: "tarrajeo",
    title: "1. Tarrajeo y Estructura",
    description: "Preparación inicial de la superficie y montaje de andamios. Nivelación de muros para asegurar una base sólida.",
    image: "/images/real/process-phase-1-plaster.jpg",
    icon: Hammer,
    color: "bg-gray-500",
  },
  {
    id: "empastado",
    title: "2. Empastado y Lijado",
    description: "Aplicación de pasta mural para alisar imperfecciones. Lijado fino para obtener una textura suave y uniforme.",
    image: "/images/real/process-phase-2-priming.jpg",
    icon: Paintbrush,
    color: "bg-blue-500",
  },
  {
    id: "acabado",
    title: "3. Pintura y Acabado Final",
    description: "Aplicación de pintura de alta calidad con colores vibrantes y duraderos. Limpieza final y entrega.",
    image: "/images/real/process-phase-3-finished.jpg",
    icon: CheckCircle2,
    color: "bg-green-500",
  },
]

export function WorkProcessGallery() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">Nuestro Proceso</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Transformación Real: Paso a Paso
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Vea cómo transformamos un espacio desde la obra gris hasta el acabado final impecable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Steps Navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                  activeStep === index
                    ? "bg-white dark:bg-slate-800 border-blue-600 shadow-lg scale-105"
                    : "bg-white/50 dark:bg-slate-800/50 border-transparent hover:bg-white dark:hover:bg-slate-800"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${activeStep === index ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-500"}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${activeStep === index ? "text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"}`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-9 bottom-[-24px] w-0.5 h-6 bg-slate-300 dark:bg-slate-700 hidden lg:block" />
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Image Display */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={steps[activeStep].image || "/placeholder.svg"}
                  alt={steps[activeStep].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-2">
                      Fase {activeStep + 1}
                    </span>
                    <h3 className="text-2xl font-bold">{steps[activeStep].title}</h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcessGallery
