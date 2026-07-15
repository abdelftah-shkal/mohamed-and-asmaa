import {  useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useLanguage } from "../../hooks/useLanguage"
import { weddingData } from "../../data/wedding"
import ParticleField from "./ParticleField"

interface Props {
  onOpen: () => void
}

const C100 = 2 * Math.PI * 100
const C88 = 2 * Math.PI * 88

export default function OpeningScreen({ onOpen }: Props) {
  const { content, lang } = useLanguage()

  const cardRef = useRef<HTMLDivElement>(null)
  const monogramRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<SVGCircleElement>(null)
  const frameInnerRef = useRef<SVGCircleElement>(null)
  const floralLRef = useRef<SVGPathElement>(null)
  const floralRRef = useRef<SVGPathElement>(null)
  const namesRef = useRef<HTMLDivElement>(null)
  const dateRef = useRef<HTMLParagraphElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const heroBgRef = useRef<HTMLDivElement>(null)
  const leftDoorRef = useRef<HTMLDivElement>(null)
  const rightDoorRef = useRef<HTMLDivElement>(null)

  const groomLetters = weddingData.groomName.split("")
  const brideLetters = weddingData.brideName.split("")

  useGSAP(() => {
    const tl = gsap.timeline()

    const nameSpans = namesRef.current ? Array.from(namesRef.current.children) : []

    tl.from(monogramRef.current, { scale: 0.8, duration: 1, ease: "power2.out" }, 0)
    tl.to(frameRef.current, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, 0.3)
    tl.to(frameInnerRef.current, { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" }, 0.5)
    tl.from([floralLRef.current, floralRRef.current], { opacity: 0, duration: 0.8, ease: "power2.out" }, 0.8)

    if (nameSpans.length) {
      tl.from(nameSpans,
        { opacity: 0, y: 15, duration: 0.4, stagger: 0.03, ease: "power2.out" },
        1.2
      )
    }

    tl.from(dateRef.current, { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, 1.8)
    tl.from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, 2.2)
    tl.from(buttonRef.current, { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, 2.6)
  }, [])



  const handleClick = () => {
    const tl = gsap.timeline({ onComplete: onOpen })
    const card = cardRef.current
    const monogram = monogramRef.current
    const heroBg = heroBgRef.current
    const leftDoor = leftDoorRef.current
    const rightDoor = rightDoorRef.current
    const button = buttonRef.current

    if (button) {
      const rect = button.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      for (let i = 0; i < 20; i++) {
        const p = document.createElement("div")
        const size = Math.random() * 5 + 2
        p.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;width:${size}px;height:${size}px;border-radius:50%;background:#D4AF37;pointer-events:none;z-index:9999;`
        document.body.appendChild(p)
        const angle = Math.random() * Math.PI * 2
        const dist = Math.random() * 120 + 40
        gsap.to(p, {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          onComplete: () => p.remove(),
        })
      }
    }

    if (monogram) {
      tl.to(monogram, { scale: 1.1, duration: 0.4, ease: "power2.out" }, 0)
      tl.to(monogram, { scale: 0.95, duration: 0.4, ease: "power2.in" }, 0.4)
    }

    if (card) {
      tl.to(card, { autoAlpha: 0, scale: 0.98, duration: 1, ease: "power2.in" }, 0.3)
    }

    if (heroBg) {
      tl.set(heroBg, { autoAlpha: 1 }, 0.3)
      tl.to(heroBg, { scale: 1, duration: 3, ease: "power2.out" }, 0.3)
    }

    if (leftDoor) {
      leftDoor.style.zIndex = "40"
      tl.to(leftDoor, { x: "-100%", duration: 2.2, ease: "power3.inOut" }, 0.5)
    }
    if (rightDoor) {
      rightDoor.style.zIndex = "40"
      tl.to(rightDoor, { x: "100%", duration: 2.2, ease: "power3.inOut" }, 0.5)
    }

  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: "#F8F3EA" }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23000000' fill-opacity='1'/%3E%3C/svg%3E")`,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.12) 100%)",
      }} />

      <ParticleField />

      {/* <div ref={heroBgRef} className="absolute inset-0 z-20 pointer-events-none will-change-transform" style={{ opacity: 0, transform: "scale(1.15)" }}>
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${weddingData.heroImage})` ,  backgroundPosition: "36% 35%",  }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#F8F3EA]" />
      </div> */}

      <div ref={leftDoorRef} className="absolute top-0 left-0 w-1/2 h-full z-20 pointer-events-none bg-[#2C2C2C]" />
      <div ref={rightDoorRef} className="absolute top-0 right-0 w-1/2 h-full z-20 pointer-events-none bg-[#2C2C2C]" />

      <div ref={cardRef} className="relative z-30 flex flex-col items-center justify-center px-6">
        <div ref={monogramRef} className="mb-6">
          <svg width="210" height="210" viewBox="0 0 220 220" className="md:w-[270px] md:h-[270px]">
            <defs>
              <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#E6C27A" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <circle ref={frameRef} cx="110" cy="110" r="100" fill="none" stroke="url(#goldGrad2)" strokeWidth="1.5"
              strokeDasharray={C100} strokeDashoffset={C100} />
            <circle ref={frameInnerRef} cx="110" cy="110" r="88" fill="none" stroke="url(#goldGrad2)" strokeWidth="0.6"
              strokeDasharray={C88} strokeDashoffset={C88} />
            <path ref={floralLRef} d="M30 50 Q45 35 55 50 Q50 60 40 55 Q30 65 30 50Z" fill="url(#goldGrad2)" />
            <path ref={floralRRef} d="M190 50 Q175 35 165 50 Q170 60 180 55 Q190 65 190 50Z" fill="url(#goldGrad2)" />
            <path d="M30 170 Q45 185 55 170 Q50 160 40 165 Q30 155 30 170Z" fill="url(#goldGrad2)" opacity="0.35" />
            <path d="M190 170 Q175 185 165 170 Q170 160 180 165 Q190 155 190 170Z" fill="url(#goldGrad2)" opacity="0.35" />
            <path d="M25 105 Q35 90 50 100 Q40 115 30 110 Q20 120 25 105Z" fill="url(#goldGrad2)" opacity="0.25" />
            <path d="M195 105 Q185 90 170 100 Q180 115 190 110 Q200 120 195 105Z" fill="url(#goldGrad2)" opacity="0.25" />
            <text x="110" y="120" textAnchor="middle" fill="url(#goldGrad2)" fontFamily="'Playfair Display', serif" fontSize="48" fontStyle="italic" fontWeight="300">
              {weddingData.monogram}
            </text>
          </svg>
        </div>

        <div ref={namesRef} className="flex flex-wrap justify-center gap-x-4 gap-y-1 px-4" style={{ minHeight: "3.2rem" }}>
          {groomLetters.map((l, i) => (
            <span key={`ng-${i}`} className="text-4xl md:text-6xl font-display !text-[#D4AF37] tracking-wide italic leading-tight" style={{ display: "inline-block" }}>
              {l === " " ? "\u00A0" : l}
            </span>
          ))}
          <span className="text-4xl md:text-6xl font-display !text-[#D4AF37] mx-2 font-light italic leading-tight" style={{ display: "inline-block" }}>&amp;</span>
          {brideLetters.map((l, i) => (
            <span key={`nb-${i}`} className="text-4xl md:text-6xl font-display !text-[#D4AF37] tracking-wide italic leading-tight" style={{ display: "inline-block" }}>
              {l === " " ? "\u00A0" : l}
            </span>
          ))}
        </div>

        <p ref={dateRef} className="text-[#D4AF37] font-display text-sm md:text-base tracking-[0.3em] uppercase mt-6">
          {content.hero.date}
        </p>

        <p ref={subtitleRef} className={`text-[#6B6B6B] font-serif text-sm md:text-base text-center leading-relaxed mt-4 max-w-[300px] ${lang === "ar" ? "font-serif" : "italic"}`}>
          {content.opening.subtitle2}
        </p>

        <div ref={buttonRef} className="mt-10">
          <button type="button" onClick={handleClick}
            className="relative px-10 py-3.5 border border-[#D4AF37] text-[#D4AF37] font-sans text-xs tracking-[0.2em] uppercase bg-transparent hover:bg-[#D4AF37]/5 transition-colors duration-700 cursor-pointer select-none overflow-hidden group rounded"
          >
            <span className="relative z-10">{content.opening.button}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/8 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-in-out" />
          </button>
        </div>
      </div>

      
    </div>
  )
}
