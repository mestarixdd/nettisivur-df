import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-midnight">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-6xl font-bold text-midnight">404</h1>
        <h2 className="mb-8 text-2xl font-semibold">Sivua ei löytynyt</h2>
        <p className="mb-10 text-lg">
          Valitettavasti etsimääsi sivua ei löytynyt. Sivu on saatettu poistaa tai osoite on kirjoitettu väärin.
        </p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-midnight to-midnight-light text-white hover:from-blue-900 hover:to-midnight transition-colors font-poppins font-semibold rounded-md">
            Takaisin etusivulle
          </Button>
        </Link>
      </div>
    </div>
  )
}
