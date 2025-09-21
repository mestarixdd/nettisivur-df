"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-mobile"
import Image from "next/image"
import { useImageLoad } from "@/hooks/use-image-load"
import { ChevronDown } from "lucide-react"

// Optimoitu kuvan latauskomponentti
const OptimizedImage = ({ src, alt, ...props }) => {
  const isLoaded = useImageLoad(src)
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      {...props}
    />
  )
}

export default function About() {
  const onMobiili = useMediaQuery("(max-width: 768px)")

  const vieritaOsioon = (id: string) => {
    const elementti = document.getElementById(id)
    if (elementti) {
      window.scrollTo({
        top: elementti.offsetTop - 80, // Offset navbarin korkeudelle
        behavior: "smooth",
      })
    }
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

  return (
    <section id="tietoja" className="bg-white dark:bg-midnight py-20">
      {/* Ennätykset-osio yksinkertaisella tekstimuotoilulla */}
      <div className="relative w-full mb-8 pt-4">
        {/* Otsikko */}
        <div className="text-center mb-6">
          <p className="text-center text-sm font-medium tracking-widest text-midnight/70 uppercase mb-2 font-montserrat">
            AJAT JOIHIN OLEN JUOSSUT
          </p>
          <h2
            className="text-center text-3xl font-bold tracking-tighter text-midnight sm:text-4xl mb-10 relative"
            style={dottedTextureStyle}
          >
            <span style={dottedOverlayStyle}>Ennätykset</span>
            Ennätykset
          </h2>
        </div>

        {/* Yksinkertaistettu ennätykset-osio */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
            {/* 100m Ennätys */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p
                className="text-5xl md:text-6xl font-bold mb-2 font-montserrat"
                style={{
                  background: "linear-gradient(to right, #1e3a8a, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                10,26s
              </p>
              <p className="text-sm font-medium text-midnight/70 uppercase tracking-widest font-montserrat">100m</p>
            </motion.div>

            {/* 200m Ennätys */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p
                className="text-5xl md:text-6xl font-bold mb-2 font-montserrat"
                style={{
                  background: "linear-gradient(to right, #1e3a8a, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                20,76s
              </p>
              <p className="text-sm font-medium text-midnight/70 uppercase tracking-widest font-montserrat">200m</p>
            </motion.div>

            {/* 60m Ennätys */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p
                className="text-5xl md:text-6xl font-bold mb-2 font-montserrat"
                style={{
                  background: "linear-gradient(to right, #1e3a8a, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                6,70s
              </p>
              <p className="text-sm font-medium text-midnight/70 uppercase tracking-widest font-montserrat">60m</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Työpöytäversiossa: Kaksipalstainen asettelu, teksti vasemmalla, kuva oikealla */}
        {/* Mobiiliversiossa: Yksipalstainen, ensin teksti, sitten kuva, sitten nappi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vasen palsta - Tekstisisältö */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl font-medium tracking-widest text-midnight/70 uppercase mb-3 font-montserrat">
              TUTUSTU MINUUN
            </p>

            <h2
              className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white sm:text-5xl lg:text-6xl mb-8"
              style={{ color: "#2C3E50" }}
            >
              Pikakiituri
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="font-poppins">
                Olen 26-vuotias <span className="font-bold">vantaalaislähtöinen</span>, nykyisin Jyväskylässä{" "}
                <span className="font-bold">huippuvalmennuksessa</span> sekä <span className="font-bold">ryhmässä</span>{" "}
                harjoitteleva pikajuoksija
              </p>

              <p className="font-poppins">
                Monipuolinen urheilutaustani kattaa <span className="font-bold">10 vuotta jalkapalloa</span>, kunnes
                löysin yleisurheilun ja pikajuoksun
              </p>

              <p className="font-poppins">
                Merkittäviä hetkiä urallani ovat olleet 100 metrin{" "}
                <span className="font-bold">alle 23-vuotiaiden Suomen ennätys</span> (2021) ja ensimmäinen
                henkilökohtainen <span className="font-bold">aikuisten Suomen mestaruuteni 100 metrillä</span> (2024)
              </p>

              <p className="font-poppins">
                Olen tällä hetkellä <span className="font-bold">Suomen kaikkien aikojen 4. nopein 100 metrillä</span>
              </p>

              <p className="font-poppins">
                Suurin urheilullinen unelmani ja tavoitteeni on{" "}
                <span className="font-bold">edustaa Suomea Los Angelesin Olympialaisissa 2028</span>
              </p>

              <p className="font-poppins">
                Nyt on aika laittaa <span className="font-bold">kaikki peliin</span> ja katsoa{" "}
                <span className="font-bold">mihin se riittää</span>
              </p>
            </div>

            {/* Työpöytäversiossa nappi */}
            {!onMobiili && (
              <div className="mt-8">
                <div className="flex flex-col items-center">
                  <Button
                    onClick={() => vieritaOsioon("saavutukset")}
                    className="px-6 py-3 text-base bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600 transition-colors font-poppins font-semibold border-2 border-amber-400 rounded-md mb-4"
                  >
                    Saavutukset
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
              </div>
            )}
          </motion.div>

          {/* Oikea palsta - Kuva - optimoitu eri näyttökoille */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ margin: "-30px" }}>
              <div className="p-[30px]">
                <div className="relative w-full h-auto" style={{ aspectRatio: "3/4" }}>
                  {onMobiili ? (
                    <img
                      src="/images/PorvooRiku.jpg"
                      alt="Riku Illukka juoksemassa kilpailussa"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      width={400}
                      height={533}
                      decoding="async"
                      style={{
                        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))",
                        maskImage: `
                          linear-gradient(to top, transparent 5%, black 25%, black 75%, transparent 95%),
                          linear-gradient(to left, transparent 5%, black 25%, black 75%, transparent 95%),
                          radial-gradient(ellipse at center, black 60%, transparent 90%)
                        `,
                        WebkitMaskImage: `
                          linear-gradient(to top, transparent 5%, black 25%, black 75%, transparent 95%),
                          linear-gradient(to left, transparent 5%, black 25%, black 75%, transparent 95%),
                          radial-gradient(ellipse at center, black 60%, transparent 90%)
                        `,
                        WebkitMaskComposite: "source-in",
                        maskComposite: "intersect",
                      }}
                    />
                  ) : (
                    <Image
                      src="/images/PorvooRiku.jpg"
                      alt="Riku Illukka juoksemassa kilpailussa"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                      quality={75}
                      style={{
                        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))",
                        maskImage: `
                          linear-gradient(to top, transparent 5%, black 25%, black 75%, transparent 95%),
                          linear-gradient(to left, transparent 5%, black 25%, black 75%, transparent 95%),
                          radial-gradient(ellipse at center, black 60%, transparent 90%)
                        `,
                        WebkitMaskImage: `
                          linear-gradient(to top, transparent 5%, black 25%, black 75%, transparent 95%),
                          linear-gradient(to left, transparent 5%, black 25%, black 75%, transparent 95%),
                          radial-gradient(ellipse at center, black 60%, transparent 90%)
                        `,
                        WebkitMaskComposite: "source-in",
                        maskComposite: "intersect",
                      }}
                    />
                  )}
                </div>
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to top, white 0%, transparent 25%, transparent 75%, white 100%),
                    linear-gradient(to left, white 0%, transparent 25%, transparent 75%, white 100%),
                    radial-gradient(ellipse at center, transparent 50%, white 95%)
                  `,
                  mixBlendMode: "lighten",
                  opacity: 0.7,
                }}
              ></div>
            </div>
          </motion.div>
        </div>

        {/* Mobiiliversiossa nappi kuvan jälkeen */}
        {onMobiili && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <div className="flex flex-col items-center">
              <Button
                onClick={() => vieritaOsioon("saavutukset")}
                className="px-6 py-3 text-base bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600 transition-colors font-poppins font-semibold border-2 border-amber-400 rounded-md mb-4"
              >
                Saavutukset
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
