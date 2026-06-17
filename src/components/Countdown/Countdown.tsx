import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../../hooks/useLanguage"
import { useCountdown } from "../../hooks/useCountdown"
import { weddingData } from "../../data/wedding"

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.1, ease: "easeOut" },
  }),
}

export default function Countdown() {
  const { content, lang } = useLanguage()
  const timeLeft = useCountdown(weddingData.weddingDate)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const items = [
    { label: content.countdown.days, value: timeLeft.days },
    { label: content.countdown.hours, value: timeLeft.hours },
    { label: content.countdown.minutes, value: timeLeft.minutes },
    { label: content.countdown.seconds, value: timeLeft.seconds },
  ]

  return (
    <section ref={ref} className="relative px-6 py-28 md:py-40 bg-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 75% 75%, #D4AF37 0%, transparent 50%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`text-3xl md:text-5xl font-display text-[#2C2C2C] mb-12 md:mb-16 ${lang === "ar" ? "font-serif" : "italic"}`}
        >
          {content.countdown.title}
        </motion.h2>

        <div className="flex justify-center gap-3 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="flex-1 max-w-[100px] md:max-w-[140px] backdrop-blur-sm bg-white/60 border border-[#D4AF37]/15 px-3 py-5 md:px-6 md:py-8"
            >
              <div className="text-3xl md:text-5xl font-display text-[#D4AF37] mb-1 md:mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-[10px] md:text-xs text-[#6B6B6B] font-sans tracking-[0.15em] uppercase">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
