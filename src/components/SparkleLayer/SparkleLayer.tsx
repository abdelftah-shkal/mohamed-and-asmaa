import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: "dot" | "glow" | "star"
}

function generateSparkles(count: number): Sparkle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
    type: (["dot", "glow", "star"] as const)[Math.floor(Math.random() * 3)],
  }))
}

export default function SparkleLayer() {
  const sparkles = useRef(generateSparkles(40))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.current.map((s) => (
        <SparkleParticle key={s.id} sparkle={s} />
      ))}
    </div>
  )
}

function SparkleParticle({ sparkle }: { sparkle: Sparkle }) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -20, -40, -60, -80],
      opacity: [0, 0.6, 0.8, 0.4, 0],
      scale: [0, 1, 1.2, 0.8, 0],
      transition: {
        duration: sparkle.duration,
        delay: sparkle.delay,
        repeat: Infinity,
        ease: "easeInOut",
      },
    })
  }, [controls, sparkle.duration, sparkle.delay])

  const isGlow = sparkle.type === "glow"
  const isStar = sparkle.type === "star"

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${sparkle.x}%`,
        top: `${sparkle.y}%`,
        width: isStar ? sparkle.size * 4 : sparkle.size,
        height: isStar ? sparkle.size * 4 : sparkle.size,
      }}
      animate={controls}
      initial={{ opacity: 0, y: 0 }}
    >
      {isStar ? (
        <svg viewBox="0 0 12 12" className="w-full h-full" style={{ color: "#D4AF37" }}>
          <path d="M6 0L7.35 4.65L12 6L7.35 7.35L6 12L4.65 7.35L0 6L4.65 4.65Z" fill="currentColor" opacity={0.6} />
        </svg>
      ) : (
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isGlow
              ? "radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)"
              : "#D4AF37",
            opacity: isGlow ? 0.6 : 0.5,
          }}
        />
      )}
    </motion.div>
  )
}
