"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(kysely: string): boolean {
  const [täsmää, setTäsmää] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(kysely)
    if (media.matches !== täsmää) {
      setTäsmää(media.matches)
    }

    const kuuntelija = () => setTäsmää(media.matches)
    media.addEventListener("change", kuuntelija)

    return () => media.removeEventListener("change", kuuntelija)
  }, [täsmää, kysely])

  return täsmää
}
