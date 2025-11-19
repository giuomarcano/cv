"use client"

import { Send } from "lucide-react"

interface WhatsAppCTAButtonProps {
  text?: string
  service?: string
  className?: string
  fullWidth?: boolean
}

export default function WhatsAppCTAButton({
  text = "Solicitar Cotización",
  service = "",
  className = "",
  fullWidth = false,
}: WhatsAppCTAButtonProps) {
  const handleWhatsAppClick = () => {
    let message = "Hola, estoy interesado en cotizar sus servicios generales."

    if (service) {
      message = `Hola, estoy interesado en cotizar su servicio de ${service}.`
    }

    message += " ¿Podría brindarme más información?"

    window.open(`https://wa.me/51930152346?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-md flex items-center justify-center ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      <Send size={18} className="mr-2" />
      {text}
    </button>
  )
}
