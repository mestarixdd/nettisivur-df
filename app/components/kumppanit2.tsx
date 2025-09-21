"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Kumppanit2() {
  const yhteistyokumppanit = [
    {
      id: 1,
      title: "New Balance",
      image: "/images/nblogo.png",
      description: "Virallinen kenkä- ja vaatesponsori",
      link: "https://fi.newbalance.eu/fi",
    },
    {
      id: 2,
      title: "Vantaan Kaupunki",
      image: "/images/vantaa2.png",
      description: "Vantaan kaupunki - Paikallisten urheilijoiden tukija",
      link: "https://www.vantaa.fi/fi",
    },
    {
      id: 3,
      title: "Vantaan Salamat",
      image: "/images/salamat.jpg",
      description: "Vantaalainen yleisurheiluseura - Kasvattiseura",
      link: "https://www.vantaansalamat.fi/",
    },
    {
      id: 4,
      title: "Bäck Management",
      image: "/images/managment.png",
      description: "Kilpailumanageri",
      link: "https://backmanagement.eu/",
    },
  ]

  return (
    <section id="kumppanit" className="bg-midnight py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium tracking-widest text-white/80 uppercase mb-2 font-montserrat">
          MATKASSA MUKANA
        </p>
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0px 0px 1px rgba(255, 215, 0, 0.2)",
          }}
        >
          Kumppanit
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {yhteistyokumppanit.map((kumppani, index) => (
            <motion.div
              key={kumppani.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <a href={kumppani.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="overflow-hidden bg-white shadow-md">
                  <CardContent className="p-0">
                    <div className="group relative cursor-pointer">
                      <div className="flex h-[250px] items-center justify-center bg-white p-6">
                        <div className="relative w-full h-full">
                          <Image
                            src={kumppani.image || "/placeholder.svg"}
                            alt={kumppani.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            quality={75}
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-xl font-semibold text-white font-montserrat">{kumppani.title}</h3>
                        <p className="mt-2 px-4 text-center text-sm text-gray-300 font-poppins">
                          {kumppani.description}
                        </p>
                        <span className="mt-4 text-sm text-blue-400 font-poppins">Vieraile sivustolla</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
