"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import lottie, { type AnimationItem } from "lottie-web"

interface LottieAnimationProps {
  animationPath?: string
  animationData?: object
  loop?: boolean
  autoplay?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function LottieAnimation({
  animationPath,
  animationData,
  loop = true,
  autoplay = true,
  className = "",
  style = {},
}: LottieAnimationProps) {
  const animationContainer = useRef<HTMLDivElement>(null)
  const animationInstance = useRef<AnimationItem | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!animationContainer.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(animationContainer.current)

    // Definimos una animación básica por defecto en caso de error
    const defaultAnimation = {
      v: "5.7.4",
      fr: 30,
      ip: 0,
      op: 60,
      w: 300,
      h: 300,
      nm: "Default Animation",
      ddd: 0,
      assets: [],
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Shape Layer",
          sr: 1,
          ks: {
            o: { a: 0, k: 100 },
            r: { a: 0, k: 0 },
            p: { a: 0, k: [150, 150, 0] },
            a: { a: 0, k: [0, 0, 0] },
            s: { a: 0, k: [100, 100, 100] },
          },
          ao: 0,
          shapes: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [100, 100] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 0 },
              nm: "Rectangle Path",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.2, 0.4, 0.8, 1] },
              o: { a: 0, k: 100 },
              r: 1,
              bm: 0,
              nm: "Fill",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
          ],
          ip: 0,
          op: 60,
          st: 0,
          bm: 0,
        },
      ],
      markers: [],
    }

    // Cargamos la animación
    try {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData: animationData || defaultAnimation,
        path: animationPath,
      })
    } catch (error) {
      console.error("Error loading animation:", error)

      // En caso de error, cargamos la animación por defecto
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData: defaultAnimation,
      })
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy()
      }
      if (animationContainer.current) {
        observer.unobserve(animationContainer.current)
      }
    }
  }, [animationData, animationPath, loop, autoplay])

  useEffect(() => {
    if (!animationInstance.current) return

    if (isVisible) {
      animationInstance.current.play()
    } else {
      animationInstance.current.pause()
    }
  }, [isVisible])

  return <div ref={animationContainer} className={className} style={style}></div>
}
