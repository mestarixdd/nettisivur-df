import dynamic from "next/dynamic"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"

// Dynaamisesti ladattavat komponentit - optimoitu lataus
const Gallery = dynamic(() => import("./components/gallery"), { ssr: true })
const Kumppanit = dynamic(() => import("./components/kumppanit"), { ssr: true })
const Goals = dynamic(() => import("./components/goals"), { ssr: true })
const Kumppanit2 = dynamic(() => import("./components/kumppanit2"), { ssr: true })
const Contact = dynamic(() => import("./components/contact"), { ssr: true })
const Footer = dynamic(() => import("./components/footer"), { ssr: true })

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-midnight overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Kumppanit />
      <Goals />
      <Kumppanit2 />
      <Contact />
      <Footer />
    </main>
  )
}
