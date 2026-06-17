import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import type { LanguageContent } from "../data/wedding"
import { weddingData } from "../data/wedding"

type Lang = "ar" | "en"

interface LanguageContextType {
  lang: Lang
  dir: "rtl" | "ltr"
  content: LanguageContent
  toggleLang: () => void
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "en" ? "ar" : "en"))
  }, [])

  const setLang = useCallback((l: Lang) => setLangState(l), [])

  const dir = lang === "ar" ? "rtl" : "ltr"
  const content = weddingData.language[lang]

  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])

  return (
    <LanguageContext.Provider value={{ lang, dir, content, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider")
  return ctx
}
