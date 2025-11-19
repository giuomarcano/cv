"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface ImageComparisonProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export default function ImageComparison({ beforeImage, afterImage, beforeAlt, afterAlt }: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault() // Prevenir selección de texto
    isDragging.current = true
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const offsetX = e.clientX - containerRect.left
      const newPosition = (offsetX / containerRect.width) * 100
      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    isDragging.current = false
  }

  const calculateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const containerWidth = containerRect.width
    const offsetX = clientX - containerRect.left
    const newPosition = (offsetX / containerWidth) * 100

    // Clamp the position between 0 and 100
    return Math.max(0, Math.min(100, newPosition))
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault() // Prevenir selección de texto
    const newPosition = calculateSliderPosition(e.clientX)
    if (newPosition !== undefined) {
      setSliderPosition(newPosition)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current || !e.touches[0]) return
    e.preventDefault() // Prevenir comportamiento por defecto en móviles
    const newPosition = calculateSliderPosition(e.touches[0].clientX)
    if (newPosition !== undefined) {
      setSliderPosition(newPosition)
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove, { passive: false })
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg select-none" // Añadido select-none
      style={{ touchAction: "none" }} // Prevenir comportamientos táctiles por defecto
    >
      {/* After Image (Full width) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          loading="lazy"
          draggable="false" // Prevenir arrastre de imagen
        />
      </div>

      {/* Before Image (Partial width based on slider) */}
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: "none" }}
          loading="lazy"
          draggable="false" // Prevenir arrastre de imagen
        />
      </div>

      {/* Slider Control */}
      <div className="absolute inset-y-0 z-10" style={{ left: `calc(${sliderPosition}% - 2px)` }}>
        <div className="absolute inset-y-0 w-1 bg-white"></div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-move transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
        style={{ left: `${sliderPosition}%`, top: "50%" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="flex items-center justify-center">
          <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">Antes</div>
      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">Después</div>
    </div>
  )
}
