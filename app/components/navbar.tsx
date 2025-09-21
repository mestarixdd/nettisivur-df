"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function Navbar() {
  const [vieritetty, setVieritetty] = useState(false)
  const [aktiivinenValilehti, setAktiivinenValilehti] = useState("")
  const [asennettu, setAsennettu] = useState(false)
  const onMobiili = useMediaQuery("(max-width: 768px)")

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setAsennettu(true)
  }, [])

  useEffect(() => {
    const kasitteleVieritys = () => {
      const onVieritetty = window.scrollY > 10
      if (onVieritetty !== vieritetty) {
        setVieritetty(onVieritetty)
      }
    }

    window.addEventListener("scroll", kasitteleVieritys)
    return () => window.removeEventListener("scroll", kasitteleVieritys)
  }, [vieritetty])

  const vieritaOsioon = (id: string) => {
    setAktiivinenValilehti(id)
    const elementti = document.getElementById(id)
    if (elementti) {
      window.scrollTo({
        top: elementti.offsetTop - 80, // Offset navbarin korkeudelle
        behavior: "smooth",
      })
    }
  }

  // Muutetaan navigointikohteiden id:t vastaamaan suomenkielisiä nimiä

  const navigointiKohteet = [
    { id: "tietoja", label: "Tietoja" },
    { id: "saavutukset", label: "Saavutukset" },
    { id: "kehitys", label: "Kehitys" },
    { id: "tavoitteet", label: "Tavoitteet" },
    { id: "kumppanit", label: "Kumppanit" },
  ]

  // Don't render navbar at all on mobile
  if (onMobiili) {
    return null
  }

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        vieritetty ? "bg-white backdrop-blur-md shadow-sm" : "bg-white backdrop-blur-sm"
      } ${vieritetty ? "py-3" : "py-5"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo-paikanpitäjä - vasen puoli */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer focus:outline-none"
              aria-label="Scroll to top"
            >
              <span className="text-xl font-bold text-midnight font-montserrat">RI</span>
            </button>
          </div>

          {/* Navigointi - keskellä */}
          <div className="flex items-center justify-center flex-1">
            <ul className="flex items-center justify-center gap-4">
              {navigointiKohteet.map((kohde) => (
                <li key={kohde.id}>
                  <button
                    onClick={() => vieritaOsioon(kohde.id)}
                    className={`px-3 py-2 text-sm transition-all md:text-base font-montserrat font-semibold ${
                      aktiivinenValilehti === kohde.id ? "text-midnight" : "text-gray-800 hover:text-midnight"
                    }`}
                  >
                    {kohde.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Oikea puoli - Ota yhteyttä -nappi */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => vieritaOsioon("yhteystiedot")}
              className="px-4 py-2 text-sm md:px-6 bg-gradient-to-r from-midnight to-midnight-light text-white hover:from-blue-900 hover:to-midnight transition-colors font-poppins font-semibold rounded-md"
            >
              Ota Yhteyttä
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
