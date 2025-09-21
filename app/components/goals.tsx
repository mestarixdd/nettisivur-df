"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Goals() {
  const tavoitteet = [
    {
      id: 1,
      title: "Olympialaiset 2028",
      icon: "⚡",
    },
    {
      id: 2,
      title: "100m SE 10,12s",
      icon: "🏆",
    },
    {
      id: 3,
      title: "200m SE 20,44s",
      icon: "🥇",
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

  return (
    <section id="tavoitteet" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium tracking-widest text-midnight/70 uppercase mb-2 font-montserrat">
          NÄIHIN PYRIN
        </p>
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter text-midnight sm:text-4xl relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={dottedTextureStyle}
        >
          <span style={dottedOverlayStyle}>Tavoitteet</span>
          Tavoitteet
        </motion.h2>

        {/* Pyöreät tavoitteet */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
          {tavoitteet.map((tavoite, index) => (
            <motion.div
              key={tavoite.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-midnight to-blue-500 flex items-center justify-center mb-6 shadow-lg">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-3xl mb-2">{tavoite.icon}</span>
                  <h3 className="text-lg font-semibold text-midnight font-montserrat">{tavoite.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inspiraatioteksti - varmistetaan näkyvyys kaikilla näyttökoilla */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center block" // Added 'block' to ensure visibility
        >
          <p className="text-center text-sm font-medium tracking-widest text-midnight/70 uppercase mb-2 font-montserrat">
            PYRIN MYÖS
          </p>
          <motion.h3
            className="mb-6 text-center text-2xl font-bold tracking-tighter text-midnight sm:text-3xl relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={dottedTextureStyle}
          >
            <span style={dottedOverlayStyle}>Toimimaan inspiraationa</span>
            Toimimaan inspiraationa
          </motion.h3>
          <p className="text-gray-700 font-poppins">
            Haluan omalla esimerkilläni näyttää,
            <br />
            että <span className="font-bold">intohimolla</span> ja <span className="font-bold">kovalla työllä</span> voi{" "}
            <span className="font-bold text-amber-500 relative inline-block">
              saavuttaa unelmiaan
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
            <br />
            <br />
            Toivon, että tarinani <span className="font-bold">innostaa nuoria</span> kohti huippu-urheilua
            <br />
            sekä löytämään <span className="font-bold">oman potentiaalinsa</span>
          </p>

          {/* Lisää nappi "Kumppanit"-osioon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-6 mb-40" // Pienennetty ylämarginal ja säilytetty suuri alamarginal
          >
            <div className="flex flex-col items-center">
              <Button
                onClick={() => vieritaOsioon("kumppanit")}
                className="px-6 py-3 text-base bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600 transition-colors font-poppins font-semibold border-2 border-amber-400 rounded-md mb-4"
              >
                Huippu-urheiluni mahdollistajat
              </Button>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-amber-500"
              >
                <ChevronDown size={28} className="animate-bounce" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
