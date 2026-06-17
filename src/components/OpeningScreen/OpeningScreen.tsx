import { useState, useEffect, useRef } from "react"
import { useLanguage } from "../../hooks/useLanguage"
import { weddingData } from "../../data/wedding"

interface Props {
  onOpen: () => void
}

type Phase = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

const PHASE_DELAYS = [0, 500, 1800, 3000, 4200, 5500, 6500, 7500] as const

export default function OpeningScreen({ onOpen }: Props) {
  const { content, lang } = useLanguage()
  const [phase, setPhase] = useState<Phase>(0)
  const [clicked, setClicked] = useState(false)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const groomLetters = weddingData.groomName.split("")
  const brideLetters = weddingData.brideName.split("")

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    PHASE_DELAYS.forEach((_, i) => {
      if (i === 0) return
      timers.push(
        setTimeout(() => {
          setPhase(i as Phase)
        }, PHASE_DELAYS[i])
      )
    })
    timersRef.current = timers
    return () => {
      timers.forEach(clearTimeout)
    }
  }, [])

  const handleClick = () => {
    setClicked(true)
    setTimeout(onOpen, 2500)
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-[2500ms] ease-in-out ${
          clicked ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
        style={{
          background: `radial-gradient(ellipse at center, #FAF8F2 0%, #f5f0e6 40%, #ede6d6 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.15) 100%)",
        }} />

        {phase >= 1 && (
          <div
            className="transition-all duration-[2000ms] ease-out"
            style={{
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? "scale(1)" : "scale(0.8)",
            }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200" className="md:w-[260px] md:h-[260px]">
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#E6C27A" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
              <circle
                cx="100" cy="100" r="90"
                fill="none"
                stroke="url(#goldGrad)"
                strokeWidth="1.5"
                strokeDasharray={2 * Math.PI * 90}
                strokeDashoffset={phase >= 2 ? 0 : 2 * Math.PI * 90}
                style={{
                  transition: "stroke-dashoffset 2200ms ease-in-out",
                  transitionDelay: phase >= 2 ? "0ms" : "200ms",
                }}
              />
              <circle
                cx="100" cy="100" r="82"
                fill="none"
                stroke="url(#goldGrad)"
                strokeWidth="0.5"
                strokeDasharray={2 * Math.PI * 82}
                strokeDashoffset={phase >= 2 ? 0 : 2 * Math.PI * 82}
                style={{
                  transition: "stroke-dashoffset 2400ms ease-in-out",
                  transitionDelay: phase >= 2 ? "300ms" : "200ms",
                }}
              />
              {phase >= 3 && (
                <g style={{ opacity: phase >= 3 ? 1 : 0, transition: "opacity 1500ms ease-out" }}>
                  <path d="M100 15 C110 30, 130 35, 140 25 C145 20, 140 15, 135 18 C125 25, 110 22, 100 15Z" fill="url(#goldGrad)" opacity="0.4" />
                  <path d="M100 185 C110 170, 130 165, 140 175 C145 180, 140 185, 135 182 C125 175, 110 178, 100 185Z" fill="url(#goldGrad)" opacity="0.4" />
                  <path d="M15 100 C30 90, 35 70, 25 60 C20 55, 15 60, 18 65 C25 75, 22 90, 15 100Z" fill="url(#goldGrad)" opacity="0.4" />
                  <path d="M185 100 C170 90, 165 70, 175 60 C180 55, 185 60, 182 65 C175 75, 178 90, 185 100Z" fill="url(#goldGrad)" opacity="0.4" />
                </g>
              )}
              <text
                x="100" y="108"
                textAnchor="middle"
                fill="url(#goldGrad)"
                fontFamily="'Playfair Display', serif"
                fontSize="42"
                fontStyle="italic"
                fontWeight="300"
                style={{ opacity: phase >= 1 ? 1 : 0, transition: "opacity 1500ms ease-out" }}
              >
                {weddingData.monogram}
              </text>
            </svg>
          </div>
        )}

        <div className="h-8" />

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 px-6" style={{ minHeight: "3.5rem" }}>
          {groomLetters.map((letter, i) => (
            <span
              key={`g-${i}`}
              className="text-4xl md:text-6xl font-display text-[#2C2C2C] tracking-wide italic"
              style={{
                opacity: phase >= 4 ? 1 : 0,
                transform: phase >= 4 ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 600ms ease-out, transform 600ms ease-out`,
                transitionDelay: `${i * 80 + 4200}ms`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
          <span
            className="text-4xl md:text-6xl font-display text-[#D4AF37] mx-2 font-light italic"
            style={{
              opacity: phase >= 4 ? 1 : 0,
              transition: "opacity 800ms ease-out",
              transitionDelay: `${groomLetters.length * 80 + 4400}ms`,
            }}
          >
            &amp;
          </span>
          {brideLetters.map((letter, i) => (
            <span
              key={`b-${i}`}
              className="text-4xl md:text-6xl font-display text-[#2C2C2C] tracking-wide italic"
              style={{
                opacity: phase >= 4 ? 1 : 0,
                transform: phase >= 4 ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 600ms ease-out, transform 600ms ease-out`,
                transitionDelay: `${groomLetters.length * 80 + 4600 + i * 80}ms`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>

        <p
          className="text-[#D4AF37] font-display text-sm md:text-base tracking-[0.3em] uppercase mt-6"
          style={{
            opacity: phase >= 5 ? 1 : 0,
            transform: phase >= 5 ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 1000ms ease-out, transform 1000ms ease-out",
            transitionDelay: "5500ms",
          }}
        >
          {content.hero.date}
        </p>

        <p
          className={`text-[#6B6B6B] font-serif text-base md:text-lg tracking-wide mt-4 max-w-md text-center px-6 leading-relaxed ${lang === "ar" ? "font-serif" : "italic"}`}
          style={{
            opacity: phase >= 6 ? 1 : 0,
            transform: phase >= 6 ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 1000ms ease-out, transform 1000ms ease-out",
            transitionDelay: "6500ms",
          }}
        >
          {content.opening.subtitle2}
        </p>

        <div
          style={{
            opacity: phase >= 7 ? 1 : 0,
            transform: phase >= 7 ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 1000ms ease-out, transform 1000ms ease-out",
            transitionDelay: "7500ms",
          }}
        >
          <button
            type="button"
            onClick={handleClick}
            disabled={clicked}
            className="relative mt-10 px-12 py-4 border border-[#D4AF37] text-[#D4AF37] font-sans text-sm tracking-[0.2em] uppercase bg-transparent hover:bg-[#D4AF37]/10 transition-all duration-700 cursor-pointer select-none overflow-hidden group"
          >
            <span className="relative z-10">{content.opening.button}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-in-out" />
          </button>
        </div>
      </div>

      <CurtainOverlay visible={clicked} />
    </>
  )
}

function CurtainOverlay({ visible }: { visible: boolean }) {
  const [showCurtain, setShowCurtain] = useState(false)

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShowCurtain(true), 100)
      return () => clearTimeout(t)
    }
  }, [visible])

  if (!showCurtain) return null

  return (
    <>
      <div className="fixed left-0 top-0 w-1/2 h-full z-[55] pointer-events-none bg-[#2C2C2C] animate-curtain-left" />
      <div className="fixed right-0 top-0 w-1/2 h-full z-[55] pointer-events-none bg-[#2C2C2C] animate-curtain-right" />
      <div className="fixed inset-0 z-[60] pointer-events-none bg-[#FAF8F2]" style={{ animation: "fade-in-wash 600ms ease-out 1700ms forwards", opacity: 0 }} />
    </>
  )
}
