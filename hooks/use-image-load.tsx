"use client"

import { useState, useEffect } from "react"

export function useImageLoad(src: string): boolean {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!src) {
      setIsLoaded(false)
      return
    }

    // Jos kuva on jo välimuistissa, merkitään se heti ladatuksi
    const img = new Image()
    img.src = src

    if (img.complete) {
      setIsLoaded(true)
    } else {
      setIsLoaded(false)

      // Muuten kuunnellaan lataustapahtumaa
      img.onload = () => {
        setIsLoaded(true)
      }
    }

    return () => {
      img.onload = null
    }
  }, [src])

  return isLoaded
}
