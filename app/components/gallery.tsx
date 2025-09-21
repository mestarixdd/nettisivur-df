"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Timer, Award, Flag, BarChart4, Medal, TrendingUp, Clock, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-mobile"
import { useState, useEffect, useRef, useCallback } from "react"

export default function Gallery() {
  // All 8 achievements
  const saavutukset = [
    {
      id: 1,
      title: "Suomen Mestaruudet",
      description: "Vaasa 2024 100m, Espoo 2025 200m",
      image: "/images/kkvoitto2025.jpg",
      alt: "Riku maalissa",
      objectPosition: "object-left-center",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 2,
      title: "Suomen 4. nopein ikinä",
      description: "Ennätys 10,26s ja eroa Suomen Ennätykseen 0,15s",
      image: "/images/png.jpg",
      alt: "Riku juoksemassa kilpailussa valkoisessa paidassa oikeassa reunassa",
      objectPosition: "object-right",
      icon: <Timer className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 3,
      title: "Vuoden Vantaan urheilija",
      description: "Vantaa 2024",
      image: "/images/vantaa2025.jpg",
      alt: "Riku palkittuna",
      objectPosition: "object-center",
      icon: <Award className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 4,
      title: "Maajoukkue-edustuksia",
      description: "MM-, EM- ja PM-tasoilla aikuisissa sekä nuorissa",
      image: "/images/torun2.jpg",
      alt: "Juoksijat lähtötelineissä kilpailussa",
      objectPosition: "object-right",
      icon: <Flag className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 5,
      title: "U23 Suomen Ennätys 100m",
      description: "Tallinna 2021",
      image: "/images/tilastot.jpeg",
      alt: "Tilastot kaikkien aikojen tilastoissa",
      objectPosition: "object-center",
      icon: <BarChart4 className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 6,
      title: "Aikuisten SM-mitaleita",
      description: "12 kpl",
      image: "/images/jkljuoksu.jpeg",
      alt: "Riku juoksemassa SM-kilpailussa",
      objectPosition: "object-center",
      icon: <Medal className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 7,
      title: "Suomen 100m tilastokärki",
      description: "Vuosina 2021 & 2024",
      image: "/images/mustavalko.webp",
      alt: "Juoksijat lähtötelineissä mustavalkokuvassa",
      objectPosition: "object-center",
      icon: <TrendingUp className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 8,
      title: "10 parhaan ajan keskiarvo",
      description: "Keskiarvo: 10.296s",
      image: "/images/vaasa-riku.jpg",
      alt: "Riku juoksemassa kilpailussa Vaasassa",
      objectPosition: "object-center",
      icon: <Clock className="h-8 w-8 text-amber-500" />,
    },
  ]

  // Shared dotted texture style for headings
  const dottedTextureStyle = {
    position: "relative",
    color: "#2C3E50",
    WebkitTextFillColor: "#2C3E50",
  }

  // Shared dotted texture overlay style
  const dottedOverlayStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 0 0' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.25'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3Ccircle cx='50' cy='10' r='1.5'/%3E%3Ccircle cx='70' cy='10' r='1.5'/%3E%3Ccircle cx='90' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='50' cy='30' r='1.5'/%3E%3Ccircle cx='70' cy='30' r='1.5'/%3E%3Ccircle cx='90' cy='30' r='1.5'/%3E%3Ccircle cx='10' cy='50' r='1.5'/%3E%3Ccircle cx='30' cy='50' r='1.5'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3Ccircle cx='70' cy='50' r='1.5'/%3E%3Ccircle cx='90' cy='50' r='1.5'/%3E%3Ccircle cx='10' cy='70' r='1.5'/%3E%3Ccircle cx='30' cy='70' r='1.5'/%3E%3Ccircle cx='50' cy='70' r='1.5'/%3E%3Ccircle cx='70' cy='70' r='1.5'/%3E%3Ccircle cx='90' cy='70' r='1.5'/%3E%3Ccircle cx='10' cy='90' r='1.5'/%3E%3Ccircle cx='30' cy='90' r='1.5'/%3E%3Ccircle cx='50' cy='90' r='1.5'/%3E%3Ccircle cx='70' cy='90' r='1.5'/%3E%3Ccircle cx='90' cy='90' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
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

  // Function to scroll to a section
  const vieritaOsioon = (id: string) => {
    const elementti = document.getElementById(id)
    if (elementti) {
      window.scrollTo({
        top: elementti.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      })
    }
  }

  const onMobiili = useMediaQuery("(max-width: 768px)")
  const [activeIndex, setActiveIndex] = useState(-1)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(onMobiili)
  }, [onMobiili])

  // Alusta cardRefs-array
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, saavutukset.length)
  }, [saavutukset.length])

  // Lisää scroll-tapahtumankuuntelija mobiiliversiossa
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2

    // Etsi lähin kortti scrollausposition perusteella
    let closestIndex = -1
    let closestDistance = Number.POSITIVE_INFINITY

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect()
        const distance = Math.abs(rect.top + window.scrollY + rect.height / 2 - scrollPosition)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      }
    })

    setActiveIndex(closestIndex)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    window.addEventListener("scroll", handleScroll)
    // Kutsu kerran alustuksen yhteydessä
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile, handleScroll])

  // Lisää CSS-tyylit mobiiliversiolle
  useEffect(() => {
    if (typeof document !== "undefined" && isMobile) {
      const style = document.createElement("style")
      style.innerHTML = `
        @media (max-width: 768px) {
          .mobile-active .mobile-fade {
            background-color: rgba(255, 255, 255, 0.15);
          }
          .mobile-active .mobile-text {
            color: white;
          }
          /* Poistetaan hover-efektit mobiiliversiossa */
          .card:hover {
            box-shadow: none !important;
          }
        }
      `
      document.head.appendChild(style)

      return () => {
        document.head.removeChild(style)
      }
    }
  }, [isMobile])

  return (
    <section id="saavutukset" className="relative py-20 pt-32 bg-white dark:bg-midnight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.p
            className="text-lg md:text-xl font-medium tracking-widest text-midnight/70 uppercase mb-3 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            URHEILU-URAN
          </motion.p>
          <motion.h2
            className="text-4xl font-extrabold tracking-tight text-midnight dark:text-white sm:text-5xl lg:text-6xl mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={dottedTextureStyle}
          >
            <span style={dottedOverlayStyle}>Saavutukset</span>
            Saavutukset
          </motion.h2>
        </div>

        {/* Ruudukkoasettelu saavutuksille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saavutukset.map((kohde, index) => (
            <motion.div
              key={kohde.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="h-full"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <Card
                className={`overflow-hidden h-full flex flex-col rounded-md relative transition-all duration-300 ${
                  !isMobile ? "group hover:shadow-lg" : ""
                } ${isMobile && activeIndex === index ? "mobile-active" : ""}`}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Otsikko-osio sinisellä taustalla - kiinteä korkeus */}
                  <div className="h-[100px] flex justify-between items-start relative overflow-hidden bg-midnight text-white p-4">
                    {/* Valkoinen fade-efekti hover-tilassa - VAIN tekstilaatikon päällä */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 z-20 pointer-events-none ${
                        isMobile ? "mobile-fade bg-white/0" : "bg-white/0 group-hover:bg-white/15"
                      }`}
                    ></div>

                    {/* Visuaalinen elementti - pistekuvio koko alueelle */}
                    <div
                      className="absolute inset-0 z-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>

                    {/* Tekstisisältö */}
                    <div className="relative z-10 flex flex-col justify-center">
                      <h3 className="text-xl font-bold font-montserrat mb-1">{kohde.title}</h3>
                      <p
                        className={`text-sm font-poppins transition-colors duration-400 ease-in-out ${
                          isMobile ? "mobile-text text-white/50" : "text-white/50 group-hover:text-white"
                        }`}
                      >
                        {kohde.description}
                      </p>
                    </div>

                    {/* Ikoni */}
                    <div className="flex-shrink-0 ml-2 relative z-10">{kohde.icon}</div>
                  </div>

                  {/* Kuvakehys */}
                  <div className="mt-auto relative overflow-hidden">
                    <div className="aspect-video overflow-hidden group">
                      <div className="relative w-full h-full" style={{ aspectRatio: "16/9" }}>
                        <Image
                          src={kohde.image || "/placeholder.svg"}
                          alt={kohde.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className={`object-cover ${kohde.objectPosition} transition-transform duration-500`}
                          loading={index < 4 ? "eager" : "lazy"}
                          quality={70}
                        />
                      </div>

                      {/* Tumma overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lisätty teksti ruudukon jälkeen */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-lg text-midnight dark:text-white font-poppins"
        >
          Ja tulevaisuudessa <span className="font-bold">monia lisää</span>
        </motion.p>

        {/* Lisätty nappi "Kehitys"-osioon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="flex flex-col items-center">
            <Button
              onClick={() => vieritaOsioon("kehitys")}
              className="px-6 py-3 text-base bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600 transition-colors font-poppins font-semibold border-2 border-amber-400 rounded-md mb-4"
            >
              Kehitys
            </Button>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-amber-500"
            >
              <ChevronDown size={28} className="animate-bounce" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
