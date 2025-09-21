"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"

export default function Kumppanit() {
  const [isMounted, setIsMounted] = useState(false)
  const onMobiili = useMediaQuery("(max-width: 768px)")

  // Ensure we only run client-side code after mounting
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Muuta records-muuttujan nimi:
  const aikakirjaukset = [
    { year: 2016, time: "11,04s", color: "bg-gray-200" },
    { year: 2017, time: "10,63s", color: "bg-gray-200" },
    { year: 2018, time: "10,53s", color: "bg-gray-200" },
    { year: 2019, time: "10,46s", color: "bg-blue-100" },
    { year: 2020, time: "10,37w", color: "bg-blue-100" },
    { year: 2021, time: "10,26s", color: "bg-blue-100" },
    { year: 2022, time: "-", color: "bg-blue-200" },
    { year: 2023, time: "10,31s", color: "bg-blue-300" },
    { year: 2024, time: "10,26s", color: "bg-blue-400" },
    { year: 2025, time: "10,23w", color: "bg-blue-400" }, // Updated color
  ]

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

  // Lisää vieritaOsioon-funktio
  const vieritaOsioon = (id: string) => {
    const elementti = document.getElementById(id)
    if (elementti) {
      window.scrollTo({
        top: elementti.offsetTop - 80, // Offset navbarin korkeudelle
        behavior: "smooth",
      })
    }
  }

  // Tumma pistekuvio laatikoiden taustalle
  const dotPatternStyle = {
    backgroundImage: `radial-gradient(circle, rgba(44, 62, 80, 0.6) 0.8px, transparent 0.8px)`,
    backgroundSize: "20px 20px",
    position: "absolute",
    inset: 0,
    opacity: 0.15,
    zIndex: 0,
  }

  // Don't render anything until client-side
  if (!isMounted) return null

  return (
    <section id="kehitys" className="bg-white py-20">
      {/* Osion otsikko */}
      <div className="bg-white py-8 pt-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium tracking-widest text-midnight/70 uppercase mb-2 font-montserrat">
            KUINKA KOVAA SATKU ON LIIKKUNUT ERI VUOSINA
          </p>
          <motion.h2
            className="text-center text-3xl font-bold tracking-tighter text-midnight sm:text-4xl mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={dottedTextureStyle}
          >
            <span style={dottedOverlayStyle}>100m Kehitys</span>
            100m Kehitys
          </motion.h2>
        </div>
      </div>

      {/* Vain mobiilissa näkyvä pystysuora aikajana */}
      <div className="md:hidden container mx-auto px-4 mb-12">
        <div className="relative">
          {/* Pystysuora viiva */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-200 via-blue-200 to-blue-400 transform -translate-x-1/2"></div>

          {/* Aikakirjauslaatikot */}
          <div className="relative">
            {aikakirjaukset.map((kirjaus, index) => (
              <motion.div
                key={kirjaus.year}
                className={`relative mb-10 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Aikakirjauslaatikko */}
                <div
                  className={`${kirjaus.color} p-4 rounded-lg shadow-md w-36 text-center 
                    ${index % 2 === 0 ? "mr-auto" : "ml-auto"} 
                    transition-transform duration-300 hover:scale-110 hover:shadow-lg relative overflow-hidden`}
                >
                  {/* Pistekuvio taustalle */}
                  <div style={dotPatternStyle}></div>

                  {/* Tekstisisältö */}
                  <div className="relative z-10">
                    <p className="text-lg font-bold text-midnight font-montserrat">{kirjaus.time}</p>
                    <p className="text-sm text-midnight font-poppins">{kirjaus.year}</p>
                  </div>
                </div>

                {/* Piste aikajanalla */}
                <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-amber-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lisäkonteksti - sama kuin työpöytäversiossa */}
        <motion.div
          className="text-center mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 font-poppins">
            100 metrin kehitykseni oli <span className="font-bold">vahvaa</span> vuoteen 2021 asti
            <br />
            jonka jälkeen loukkaantumiset hidastivat tahtia
            <br />
            <br />
            Nyt tähtäimessä ovat vuoden 2028 olympialaiset
            <br />
            ja{" "}
            <span className="font-bold relative inline-block" style={{ color: "#F59E0B" }}>
              uran parhaat juoksut silloin
              <span
                className="absolute left-0 right-0 bottom-[-4px] h-[3px]"
                style={{
                  background: "#2C3E50",
                  borderRadius: "2px",
                  transform: "rotate(-0.5deg)",
                  opacity: 0.9,
                  backgroundImage: "linear-gradient(90deg, transparent 0%, #2C3E50 15%, #2C3E50 85%, transparent 100%)",
                }}
              ></span>
            </span>
          </p>
        </motion.div>

        {/* Mobiiliversiossa nappi "Tavoitteet"-osioon */}
        {onMobiili && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10 mb-20" // Suurempi ylämarginal
          >
            <div className="flex flex-col items-center">
              <Button
                onClick={() => vieritaOsioon("tavoitteet")}
                className="px-6 py-3 text-base bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600 transition-colors font-poppins font-semibold border-2 border-amber-400 rounded-md mb-4"
              >
                Nämä haluan saavuttaa
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
        )}
      </div>

      {/* Aikajanaosio - vain työpöytäversiossa */}
      <div className="hidden md:block container mx-auto px-4 py-10">
        <div className="relative">
          {/* Vaakasuora viiva */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-gray-200 via-blue-200 to-blue-400 transform -translate-y-1/2"></div>

          {/* Aikakirjauslaatikot */}
          <div className="relative flex flex-wrap justify-between items-center max-w-6xl mx-auto gap-x-2">
            {" "}
            {/* Updated container div */}
            {aikakirjaukset.map((kirjaus, index) => (
              <motion.div
                key={kirjaus.year}
                className="relative mb-20 md:mb-0"
                initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Aikakirjauslaatikko */}
                <div
                  className={`${kirjaus.color} p-3 rounded-lg shadow-md w-18 md:w-22 text-center ${index % 2 === 0 ? "mb-12" : "mt-12"}`}
                  style={{
                    transition: "transform 0.3s ease",
                    transform: "scale(1)",
                    hover: { transform: "scale(1.1)" },
                  }}
                >
                  {/* Pistekuvio taustalle */}
                  <div style={dotPatternStyle}></div>

                  {/* Tekstisisältö */}
                  <div className="relative z-10">
                    <p className="text-base font-bold text-midnight font-montserrat">{kirjaus.time}</p>
                    <p className="text-xs text-midnight font-poppins">{kirjaus.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lisäkonteksti */}
        <motion.div
          className="text-center mt-24 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 font-poppins">
            100 metrin kehitykseni oli <span className="font-bold">vahvaa</span> vuoteen 2021 asti
            <br />
            jonka jälkeen loukkaantumiset hidastivat tahtia
            <br />
            <br />
            Nyt tähtäimessä ovat vuoden 2028 olympialaiset
            <br />
            ja{" "}
            <span className="font-bold relative inline-block" style={{ color: "#F59E0B" }}>
              uran parhaat juoksut silloin
              <span
                className="absolute left-0 right-0 bottom-[-4px] h-[3px]"
                style={{
                  background: "#2C3E50",
                  borderRadius: "2px",
                  transform: "rotate(-0.5deg)",
                  opacity: 0.9,
                  backgroundImage: "linear-gradient(90deg, transparent 0%, #2C3E50 15%, #2C3E50 85%, transparent 100%)",
                }}
              ></span>
            </span>
          </p>
        </motion.div>

        {/* Työpöytäversiossa nappi "Tavoitteet"-osioon */}
        {!onMobiili && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10 mb-40" // Suurempi ylämarginal
          >
            <div className="flex flex-col items-center">
              <Button
                onClick={() => vieritaOsioon("tavoitteet")}
                className="px-6 py-3 text-base bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600 transition-colors font-poppins font-semibold border-2 border-amber-400 rounded-md mb-4"
              >
                Nämä haluan saavuttaa
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
        )}
      </div>
    </section>
  )
}
