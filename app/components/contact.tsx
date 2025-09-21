"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Instagram, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function Contact() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [kopioitu, setKopioitu] = useState(false)
  const onMobiili = useMediaQuery("(max-width: 768px)")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || !isMounted) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Aseta canvas-koko vain kerran
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || 600
    }

    resizeCanvas()

    // Mobiiliversiossa käytetään vähemmän partikkeleita
    const partikkeliMaara = onMobiili ? 15 : 70
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
        koko: Math.random() * (onMobiili ? 1 : 2) + 0.1,
        nopeusX: Math.random() * 2 - 1,
        nopeusY: Math.random() * 2 - 1,
      })
    }

    // Mobiiliversiossa käytetään staattisia partikkeleita
    if (onMobiili) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const partikkeli of partikkelit) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
        ctx.beginPath()
        ctx.arc(partikkeli.x, partikkeli.y, partikkeli.koko, 0, Math.PI * 2)
        ctx.fill()
      }

      // Lisää vain resize-kuuntelija
      window.addEventListener("resize", resizeCanvas)
      return () => {
        window.removeEventListener("resize", resizeCanvas)
      }
    }

    // Optimoitu animaatiofunktio työpöytäversioon
    let animaatioId: number
    let viimeisinAika = 0

    function animoi(aikaleima: number) {
      // Rajoitetaan päivitysnopeus
      const fps = 33 // ~30fps
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
          ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
          ctx.beginPath()
          ctx.arc(partikkeli.x, partikkeli.y, partikkeli.koko, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animaatioId = requestAnimationFrame(animoi)
    }

    animaatioId = requestAnimationFrame(animoi)

    // Siivoa animaatio ja event listener
    return () => {
      cancelAnimationFrame(animaatioId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [onMobiili, isMounted])

  const vieritaOsioon = (id: string) => {
    const elementti = document.getElementById(id)
    if (elementti) {
      window.scrollTo({
        top: elementti.offsetTop - 80, // Offset navbarin korkeudelle
        behavior: "smooth",
      })
    }
  }

  const kopioiLeikepöydälle = (teksti: string) => {
    navigator.clipboard.writeText(teksti).then(
      () => {
        setKopioitu(true)
        setTimeout(() => setKopioitu(false), 2000)
      },
      (virhe) => {
        console.error("Tekstin kopiointi epäonnistui: ", virhe)
      },
    )
  }

  // Shared dotted texture style for headings
  const dottedTextureStyle = {
    position: "relative",
    color: "#2C3E50",
    WebkitTextFillColor: "#2C3E50",
  }

  // Shared dotted texture overlay style
  const dottedOverlayStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.25'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3Ccircle cx='50' cy='10' r='1.5'/%3E%3Ccircle cx='70' cy='10' r='1.5'/%3E%3Ccircle cx='90' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='50' cy='30' r='1.5'/%3E%3Ccircle cx='70' cy='30' r='1.5'/%3E%3Ccircle cx='90' cy='30' r='1.5'/%3E%3Ccircle cx='10' cy='50' r='1.5'/%3E%3Ccircle cx='30' cy='50' r='1.5'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3Ccircle cx='70' cy='50' r='1.5'/%3E%3Ccircle cx='90' cy='50' r='1.5'/%3E%3Ccircle cx='10' cy='70' r='1.5'/%3E%3Ccircle cx='30' cy='70' r='1.5'/%3E%3Ccircle cx='50' cy='70' r='1.5'/%3E%3Ccircle cx='70' cy='70' r='1.5'/%3E%3Ccircle cx='90' cy='70' r='1.5'/%3E%3Ccircle cx='10' cy='90' r='1.5'/%3E%3Ccircle cx='30' cy='90' r='1.5'/%3E%3Ccircle cx='50' cy='90' r='1.5'/%3E%3Ccircle cx='70' cy='90' r='1.5'/%3E%3Ccircle cx='90' cy='90' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mixBlendMode: "soft-light",
    backgroundSize: "15px 15px",
    filter: "blur(0.5px)",
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  }

  // Optimoitu mobiiliversio
  if (onMobiili) {
    return (
      <section id="yhteystiedot" className="relative overflow-hidden bg-white py-16">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-center text-sm font-medium tracking-widest text-midnight/70 mb-2 font-montserrat">
              Puhelin, S-posti & IG
            </p>
            <h2
              className="mb-8 text-2xl font-bold tracking-tighter text-midnight sm:text-3xl font-montserrat relative"
              style={dottedTextureStyle}
            >
              Ota Yhteyttä
            </h2>

            <div className="grid gap-8">
              {/* Puhelin */}
              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-platinum">
                  <Phone className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-midnight font-montserrat">Puhelin</h3>
                <p className="mb-2 text-gray-600 font-poppins text-sm">
                  Soita tai laita viestiä <span className="text-[#25D366] font-semibold">WhatsAppissa</span>
                </p>
                <Button
                  className="bg-gradient-to-r from-midnight to-midnight-light text-white font-poppins font-semibold rounded-md text-sm px-4 py-1"
                  onClick={() => (window.location.href = "tel:+358451343191")}
                >
                  Soita
                </Button>
              </div>

              {/* Sähköposti */}
              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-platinum">
                  <Mail className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-midnight font-montserrat">Sähköposti</h3>
                <p className="text-gray-600 font-poppins mb-2 text-sm">riku.illukka@hotmail.com</p>
                <Button
                  className="bg-gradient-to-r from-midnight to-midnight-light text-white font-poppins font-semibold rounded-md text-sm px-4 py-1"
                  onClick={() => kopioiLeikepöydälle("riku.illukka@hotmail.com")}
                >
                  {kopioitu ? (
                    <>
                      <Check className="mr-1 h-3 w-3" />
                      Kopioitu
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1 h-3 w-3" />
                      Kopioi
                    </>
                  )}
                </Button>
              </div>

              {/* Instagram */}
              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-platinum">
                  <Instagram className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-midnight font-montserrat">Instagram</h3>
                <p className="mb-2 text-gray-600 font-poppins text-sm">
                  Lähetä viesti{" "}
                  <span
                    className="font-semibold"
                    style={{
                      background: "linear-gradient(to bottom, #C13584 0%, #F77737 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                      display: "inline-block",
                    }}
                  >
                    Instagramissa
                  </span>
                </p>
                <a
                  href="https://www.instagram.com/rikuillukka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-midnight to-midnight-light text-white font-poppins font-semibold rounded-md text-sm"
                >
                  @rikuillukka
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="yhteystiedot" className="relative overflow-hidden bg-white py-20">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-center text-sm font-medium tracking-widest text-midnight/70 mb-2 font-montserrat">
            Puhelin, S-posti & IG
          </p>
          <h2
            className="mb-12 text-3xl font-bold tracking-tighter text-midnight sm:text-4xl font-montserrat relative"
            style={dottedTextureStyle}
          >
            <span style={dottedOverlayStyle}>Ota Yhteyttä</span>
            Ota Yhteyttä
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {/* Puhelin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-platinum">
                <Phone className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-midnight font-montserrat">Puhelin</h3>
              <p className="mb-2 text-gray-600 font-poppins">
                Soita tai laita viestiä <span className="text-[#25D366] font-semibold">WhatsAppissa</span>
              </p>
              <Button
                className="bg-gradient-to-r from-midnight to-midnight-light text-white hover:from-blue-900 hover:to-midnight transition-colors font-poppins font-semibold rounded-md mt-auto"
                onClick={() => (window.location.href = "tel:+358451343191")}
              >
                Soita
              </Button>
            </motion.div>

            {/* Sähköposti */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-platinum">
                <Mail className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-midnight font-montserrat">Sähköposti</h3>
              <p className="text-gray-600 font-poppins mb-2">riku.illukka@hotmail.com</p>
              <Button
                className="bg-gradient-to-r from-midnight to-midnight-light text-white hover:from-blue-900 hover:to-midnight transition-colors font-poppins font-semibold rounded-md mt-auto"
                onClick={() => kopioiLeikepöydälle("riku.illukka@hotmail.com")}
              >
                {kopioitu ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Kopioitu
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Kopioi
                  </>
                )}
              </Button>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-platinum">
                <Instagram className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-midnight font-montserrat">Instagram</h3>
              <p className="mb-2 text-gray-600 font-poppins">
                Lähetä viesti{" "}
                <span
                  className="font-semibold"
                  style={{
                    background: "linear-gradient(to bottom, #C13584 0%, #F77737 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  Instagramissa
                </span>
              </p>
              <a
                href="https://www.instagram.com/rikuillukka/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-midnight to-midnight-light text-white hover:from-blue-900 hover:to-midnight transition-colors font-poppins font-semibold rounded-md mt-auto"
              >
                @rikuillukka
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
