import { useEffect, useRef } from "react"

export default function OpeningParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    let active = true
    const container = containerRef.current
    if (!container) return

    interface Particle {
      el: HTMLDivElement
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      drift: number
    }

    const particles: Particle[] = []
    const count = 20

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div")
      const size = Math.random() * 2 + 1
      el.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: #D4AF37;
        opacity: 0;
        pointer-events: none;
        will-change: transform, opacity;
      `
      container.appendChild(el)

      particles.push({
        el,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.4 + 0.1,
        drift: Math.random() * 0.5 - 0.25,
      })
    }

    let startTime = performance.now()

    function animate(time: number) {
      if (!active) return
      const elapsed = (time - startTime) / 1000
      particles.forEach((p, i) => {
        p.y -= p.speed * 0.2
        p.x += Math.sin(elapsed * 0.3 + i) * p.drift * 0.3
        if (p.y < -5) p.y = 105
        if (p.x < -5) p.x = 105
        if (p.x > 105) p.x = -5
        const fade = Math.sin(elapsed * 0.4 + i * 0.7) * 0.5 + 0.5
        p.el.style.opacity = String(fade * p.opacity)
        p.el.style.transform = `translate(${p.x}vw, ${p.y}vh)`
      })
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      active = false
      cancelAnimationFrame(rafRef.current)
      particles.forEach((p) => {
        if (p.el.parentNode) p.el.remove()
      })
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 z-[49] pointer-events-none overflow-hidden" />
}
