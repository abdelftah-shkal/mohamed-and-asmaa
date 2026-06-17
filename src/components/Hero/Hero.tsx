import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "../../hooks/useLanguage"
import { weddingData } from "../../data/wedding"

gsap.registerPlugin(ScrollTrigger)

const NAME_STAGGER = 0.08

export default function Hero() {
  const { content, lang } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: () => window.innerHeight * 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      })
    }
  }, [])

  const groomLetters = weddingData.groomName.split("")
  const brideLetters = weddingData.brideName.split("")

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#FAF8F2]">
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <div
          className="w-full h-[120%] bg-cover bg-center transition-transform duration-[3000ms] ease-out"
          style={{
            backgroundImage: `url(${weddingData.heroImage})`,
            transform: mounted ? "scale(1)" : "scale(1.15)",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#FAF8F2] transition-opacity duration-[2500ms] ease-out"
          style={{ opacity: mounted ? 0.4 : 1 }}
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1200ms ease-out, transform 1200ms ease-out",
            transitionDelay: "800ms",
          }}
        >
          <span className="text-[#D4AF37] font-serif text-sm md:text-base tracking-[0.3em] uppercase">
            {content.hero.subtitle}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-4">
          {groomLetters.map((letter, i) => (
            <span
              key={`hg-${i}`}
              className="text-5xl md:text-8xl font-display text-white tracking-wide leading-tight italic"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 800ms ease-out, transform 800ms ease-out`,
                transitionDelay: `${1200 + i * NAME_STAGGER}ms`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>

        <div
          className="text-[#D4AF37] text-3xl md:text-5xl font-light italic my-2"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1000ms ease-out",
            transitionDelay: `${1200 + groomLetters.length * NAME_STAGGER + 500}ms`,
          }}
        >
          &amp;
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {brideLetters.map((letter, i) => (
            <span
              key={`hb-${i}`}
              className="text-5xl md:text-8xl font-display text-white tracking-wide leading-tight italic"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 800ms ease-out, transform 800ms ease-out`,
                transitionDelay: `${1600 + groomLetters.length * NAME_STAGGER + i * NAME_STAGGER}ms`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>

        <div
          className="text-white/80 font-serif text-lg md:text-xl tracking-wide mt-6"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1000ms ease-out, transform 1000ms ease-out",
            transitionDelay: `${2000 + (groomLetters.length + brideLetters.length) * NAME_STAGGER}ms`,
          }}
        >
          {content.hero.date}
        </div>

        <div
          className="absolute bottom-12"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1500ms ease-out",
            transitionDelay: "3500ms",
          }}
        >
          <p className="text-white/50 font-sans text-xs tracking-[0.2em] uppercase animate-bounce-subtle">
            {content.hero.scrollDown}
          </p>
          <div className="w-[1px] h-10 bg-white/30 mx-auto mt-2 animate-bounce-subtle" />
        </div>
      </div>
    </section>
  )
}
