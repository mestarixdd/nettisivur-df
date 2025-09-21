"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-mobile"
import Image from "next/image"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const onMobiili = useMediaQuery("(max-width: 768px)")
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Optimoitu partikkelianimaatio
  useEffect(() => {
    if (!canvasRef.current || !isMounted) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Aseta canvas-koko vain kerran
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
    }

    resizeCanvas()

    // Mobiiliversiossa käytetään vähemmän partikkeleita ja ei animaatiota
    if (onMobiili) {
      // Piirrä staattiset partikkelit mobiiliversiossa - vähemmän partikkeleita
      const partikkeliMaara = 70 // Kasvatettu määrä (aiemmin 15)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < partikkeliMaara; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const koko = Math.random() * 0.8 + 0.1 // Pienempi koko

        ctx.fillStyle = "rgba(0, 0, 0, 0.3)" // Muutettu läpinäkyvyys samaksi kuin yhteystiedot-osiossa
        ctx.beginPath()
        ctx.arc(x, y, koko, 0, Math.PI * 2)
        ctx.fill()
      }

      // Lisää resize-kuuntelija, mutta vain mobiilissa
      window.addEventListener("resize", resizeCanvas)
      return () => {
        window.removeEventListener("resize", resizeCanvas)
      }
    }

    // Työpöytäversiossa käytetään animoituja partikkeleita
    const partikkeliMaara = 70 // Kasvatettu määrä (aiemmin 50)
    const partikkelit: {
      x: number
      y: number
      koko: number
      nopeusX: number
      nopeusY: number
    }[] = []

    // Yksinkertaistettu partikkeliluokka
    for (let i = 0; i < partikkeliMaara; i++) {
      partikkelit.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        koko: Math.random() * 2 + 0.5,
        nopeusX: Math.random() * 1 - 0.5,
        nopeusY: Math.random() * 1 - 0.5,
      })
    }

    // Optimoitu animaatiofunktio
    let animaatioId: number
    let viimeisinAika = 0
    const fps = 20

    function animoi(aikaleima: number) {
      // Rajoitetaan päivitysnopeus
      const kulunutAika = aikaleima - viimeisinAika

      if (kulunutAika > fps) {
        viimeisinAika = aikaleima
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (const partikkeli of partikkelit) {
          // Päivitä sijainti
          partikkeli.x += partikkeli.nopeusX
          partikkeli.y += partikkeli.nopeusY

          // Yksinkertaistettu reunojen käsittely
          if (partikkeli.x > canvas.width) partikkeli.x = 0
          if (partikkeli.x < 0) partikkeli.x = canvas.width
          if (partikkeli.y > canvas.height) partikkeli.y = 0
          if (partikkeli.y < 0) partikkeli.y = canvas.height

          // Piirrä partikkeli
          ctx.fillStyle = "rgba(0, 0, 0, 0.5)" // Muutettu läpinäkyvyys samaksi kuin yhteystiedot-osiossa
          ctx.beginPath()
          ctx.arc(partikkeli.x, partikkeli.y, partikkeli.koko, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animaatioId = requestAnimationFrame(animoi)
    }

    // Viivästetään animaation aloitusta hieman
    setTimeout(() => {
      animaatioId = requestAnimationFrame(animoi)
      setIsLoaded(true)
    }, 100)

    // Lisää resize-kuuntelija
    window.addEventListener("resize", resizeCanvas)

    // Siivoa animaatio ja event listener
    return () => {
      if (animaatioId) cancelAnimationFrame(animaatioId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [onMobiili, isMounted])

  const vieritaOsioon = (id: string) => {
    const elementti = document.getElementById(id)
    if (elementti) {
      window.scrollTo({
        top: elementti.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  // Kumppanit data - järjestetty vasemmalta oikealle: Bäck, Salamat, Vantaa, New Balance
  const yhteistyokumppanit = [
    { id: 4, name: "Bäck Management", image: "/images/managment.png" },
    { id: 3, name: "Vantaan Salamat", image: "/images/salamat.jpg" },
    { id: 2, name: "Vantaan Kaupunki", image: "/images/vantaa2.png" },
    { id: 1, name: "New Balance", image: "/images/nblogo.png" },
  ]

  // Mobiiliversiossa käytetään yksinkertaisempaa rakennetta
  if (onMobiili) {
    return (
      <div className="relative w-full min-h-[100vh] overflow-hidden">
        {/* Yksinkertaistettu tausta mobiilille */}
        <div className="absolute inset-0 z-0 bg-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('/images/hero-texture.jpg')",
            }}
          ></div>
        </div>

        {/* Valkoinen häivytys alareunassa - yksinkertaistettu */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[1] h-24"
          style={{
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
          }}
        ></div>

        {/* Partikkelit - staattinen versio mobiilille */}
        <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

        {/* Sisältö */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] pt-8 px-4">
          <div className="text-center max-w-4xl">
            <p className="text-base font-medium tracking-widest text-midnight uppercase mb-2 font-montserrat">
              PIKAJUOKSIJA
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight text-midnight mb-6 font-montserrat">RIKU ILLUKKA</h1>

            <p className="text-lg text-midnight mb-8 max-w-2xl mx-auto font-poppins">
              Suomalainen <span className="font-bold">huippupikajuoksija</span>, tavoitteena
              <br />
              <span className="font-bold relative inline-block" style={{ color: "rgb(74, 107, 138)" }}>
                Los Angelesin Olympialaiset 2028
                <span
                  className="absolute left-0 right-0 bottom-[-4px] h-[3px]"
                  style={{
                    background: "#2C3E50",
                    borderRadius: "2px",
                    backgroundImage:
                      "linear-gradient(90deg, transparent 0%, #2C3E50 15%, #2C3E50 85%, transparent 100%)",
                  }}
                ></span>
              </span>
              .
            </p>

            {/* Optimoitu kuvakehys - käytetään tavallista img-tagia mobiilissa */}
            <div className="relative mx-auto max-w-3xl mb-8">
              <div className="p-[3px] bg-black rounded-md">
                <div className="p-[1px] bg-white rounded-sm">
                  <div className="overflow-hidden relative aspect-video">
                    <img
                      src="/images/kansiriku.jpg"
                      alt="Riku Illukka"
                      className="object-cover object-center w-full h-full"
                      loading="eager"
                      width={640}
                      height={360}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Kumppanit - yksinkertaistettu versio */}
            <div className="mb-4">
              <span className="text-sm text-midnight font-semibold font-poppins block mb-2">Matkassa mukana</span>
              <div className="flex -space-x-4 justify-center">
                {yhteistyokumppanit.map((kumppani, index) => (
                  <div
                    key={kumppani.id}
                    className="w-8 h-8 rounded-full overflow-hidden p-[1px] bg-black relative"
                    title={kumppani.name}
                    style={{
                      zIndex: index,
                    }}
                  >
                    <div className="w-full h-full rounded-full p-[1px] bg-white">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img
                          src={kumppani.image || "/placeholder.svg"}
                          alt={kumppani.name}
                          className="w-full h-full object-contain"
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* "Lue lisää" -nappi */}
            <div className="mt-4">
              <Button
                onClick={() => vieritaOsioon("tietoja")}
                className="px-5 py-2 text-base bg-gradient-to-r from-amber-600 to-amber-500 text-white font-poppins font-semibold border-2 border-amber-400 rounded-md"
              >
                Lue lisää
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Työpöytäversio pysyy ennallaan
  return (
    <div className={`relative w-full overflow-hidden h-screen`}>
      {/* Optimoitu tausta */}
      <div className="absolute inset-0 z-0">
        {/* Taustakuva - yksinkertaistettu */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-texture.jpg')",
          }}
        ></div>

        {/* Sininen overlay valkoiseen häivytyksellä - yksinkertaistettu */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(100, 150, 220, 0.15) 0%, rgba(100, 150, 220, 0.08) 50%, rgba(255, 255, 255, 0.5) 85%, rgba(255, 255, 255, 0.9) 95%, rgba(255, 255, 255, 1) 100%)",
          }}
        ></div>
      </div>

      {/* Valkoinen häivytys alareunassa - yksinkertaistettu */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.9) 80%, rgba(255, 255, 255, 1) 100%)",
        }}
      ></div>

      {/* Partikkelit */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

      {/* Sisältö */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl">
          <motion.p
            className="text-base md:text-lg font-medium tracking-widest text-midnight uppercase mb-2 font-montserrat"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            PIKAJUOKSIJA
          </motion.p>

          <motion.h1
            className="text-6xl font-extrabold tracking-tight text-midnight sm:text-7xl lg:text-8xl mb-6 font-montserrat relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              position: "relative",
              color: "#2C3E50",
            }}
          >
            {/* Pistekuvio tekstuuri overlay - näytetään vain työpöytäversiossa */}
            <span
              className="absolute inset-0 z-10 flex items-center justify-center"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1.5px, transparent 1.5px)`,
                backgroundSize: "20px 20px",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mixBlendMode: "soft-light",
                opacity: 0.6,
              }}
            >
              RIKU ILLUKKA
            </span>
            RIKU ILLUKKA
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-midnight mb-10 max-w-2xl mx-auto font-poppins"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Suomalainen <span className="font-bold">huippupikajuoksija</span>, tavoitteena
            <br />
            <span className="font-bold relative inline-block" style={{ color: "rgb(74, 107, 138)" }}>
              Los Angelesin Olympialaiset 2028
              <span
                className="absolute left-0 right-0 bottom-[-4px] h-[3px]"
                style={{
                  background: "#2C3E50",
                  borderRadius: "2px",
                  backgroundImage: "linear-gradient(90deg, transparent 0%, #2C3E50 15%, #2C3E50 85%, transparent 100%)",
                }}
              ></span>
            </span>
            .
          </motion.p>

          {/* Optimoitu kuvakehys - käytetään next/image */}
          <motion.div
            className="relative mx-auto max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* Musta kehys */}
            <div className="p-[4px] bg-black rounded-md">
              {/* Valkoinen väli */}
              <div className="p-[1px] bg-white rounded-sm">
                <div className="overflow-hidden relative aspect-video">
                  <Image
                    src="/images/kansiriku.jpg"
                    alt="Riku Illukka"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority={true}
                    className="object-cover object-center"
                    width={1200}
                    height={675}
                    loading="eager"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* "Lue lisää" -nappi - vain työpöytäversiossa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-6"
          >
            <Button
              onClick={() => vieritaOsioon("tietoja")}
              className="px-6 py-3 text-base md:px-8 md:py-4 md:text-lg bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600 transition-colors font-poppins font-semibold border-2 border-amber-400 rounded-md"
            >
              Lue lisää
            </Button>
          </motion.div>

          {/* Kumppanit-osio - näkyy vain työpöytäversiossa - yksinkertaistettu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex items-center justify-center flex-wrap gap-2"
          >
            <div className="flex items-center">
              <div className="flex -space-x-6 mr-3 relative">
                {yhteistyokumppanit.map((kumppani, index) => (
                  <motion.div
                    key={kumppani.id}
                    className="w-10 h-10 rounded-full overflow-hidden p-[2px] bg-black relative"
                    title={kumppani.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    style={{
                      zIndex: index, // Asetetaan z-indeksi niin että oikealla oleva on päällimmäisenä
                    }}
                  >
                    <div className="w-full h-full rounded-full p-[1px] bg-white">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img
                          src={kumppani.image || "/placeholder.svg"}
                          alt={kumppani.name}
                          className="w-full h-full object-contain"
                          width={40}
                          height={40}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/* Poistetaan hover-tilan z-indeksi CSS */}
                  </motion.div>
                ))}
              </div>
              <motion.span
                className="text-sm text-midnight font-semibold font-poppins"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                Matkassa mukana
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
