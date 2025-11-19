import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="Carlos Vasquez Logo" width={40} height={40} className="mr-3" />
              <h3 className="text-xl font-bold">Carlos Vasquez</h3>
            </div>
            <p className="mb-4 text-gray-300">
              Servicios Generales & Expertos en Drywall en Lima, Perú. Ofrecemos soluciones profesionales para
              remodelación y construcción.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="mailto:cvserviciosgenerales.pe@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/trabajos" className="text-gray-300 hover:text-white transition-colors">
                  Trabajos Realizados
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-gray-300 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+51 930 152 346</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-gray-300 mt-1 flex-shrink-0" />
                <span className="text-gray-300">cvserviciosgenerales.pe@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-300 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Carlos Vasquez - Servicios Generales & Expertos en Drywall. Todos los derechos
            reservados.
          </p>
          <p className="mt-2">
            Hecho por{" "}
            <a
              href="https://designifyperu.com/"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              designify
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
