import { useLanguage } from "../../hooks/useLanguage"

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      className="fixed top-6 right-6 z-40 px-4 py-2 text-xs tracking-[0.15em] uppercase font-sans text-[#6B6B6B] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all duration-500 bg-white/60 backdrop-blur-sm cursor-pointer"
    >
      {lang === "en" ? "AR" : "EN"}
    </button>
  )
}
