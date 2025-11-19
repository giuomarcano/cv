"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import Image from "next/image"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          servicio: "",
          mensaje: "",
        })
      } else {
        setSubmitError(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative h-[40vh] min-h-[300px]">
          <Image
            src="/images/datos-de-contacto-scaled.jpeg"
            alt="Contacto"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-bold drop-shadow-lg">Contacto</h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
                Estamos listos para ayudarte con tu proyecto. Contáctanos hoy mismo para una consulta gratuita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                ¡Gracias por contactarnos! Te responderemos a la brevedad.
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                Hubo un error al enviar el formulario. Por favor, intenta nuevamente.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
                  Servicio de interés
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="drywall">Instalación de Drywall</option>
                  <option value="pintura">Pintura y Acabados</option>
                  <option value="remodelacion">Remodelación de Espacios</option>
                  <option value="pintura-metalica">Pintura de portones/puertas metálicas</option>
                  <option value="techos">Instalación de Techos</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-gray-600">+51 930 152 346</p>
                    <p className="text-gray-600">Lunes a Sábado, 8:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Correo electrónico</h3>
                    <p className="text-gray-600">cvserviciosgenerales.pe@gmail.com</p>
                    <p className="text-gray-600">Respuesta en menos de 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Ubicación</h3>
                    <p className="text-gray-600">Lima, Perú</p>
                    <p className="text-gray-600">Servicio en toda la ciudad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-16">
        <div className="h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8566112872!2d-77.0731!3d-11.9953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce527f37af29%3A0x7e1d1ed3e9f13a01!2sAv.%20Jos%C3%A9%20Granda%202466%2C%20San%20Mart%C3%ADn%20de%20Porres%2015102%2C%20Per%C3%BA!5e0!3m2!1ses!2s!4v1714953651234!5m2!1ses!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Carlos Vasquez - Av. José Granda 2466, San Martín de Porres, Lima, Perú"
            aria-label="Mapa de ubicación"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-custom">
        <h2 className="section-title">Preguntas frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">¿Cuál es el área de servicio?</h3>
              <p className="text-gray-600">
                Ofrecemos nuestros servicios en toda Lima Metropolitana y alrededores. Contáctanos para confirmar
                disponibilidad en tu zona.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">¿Cómo solicito una cotización?</h3>
              <p className="text-gray-600">
                Puedes solicitar una cotización a través de nuestro formulario de contacto, llamando al teléfono
                indicado o enviando un mensaje por WhatsApp. Te responderemos en menos de 24 horas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">¿Ofrecen garantía por los trabajos?</h3>
              <p className="text-gray-600">
                Sí, todos nuestros trabajos cuentan con garantía. El período de garantía varía según el tipo de
                servicio, pero generalmente es de 6 meses a 1 año para instalaciones de drywall y trabajos de
                remodelación.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">¿Cuáles son las formas de pago aceptadas?</h3>
              <p className="text-gray-600">
                Aceptamos pagos en efectivo, transferencias bancarias y depósitos. Para proyectos grandes, trabajamos
                con un sistema de pagos por avance de obra.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
