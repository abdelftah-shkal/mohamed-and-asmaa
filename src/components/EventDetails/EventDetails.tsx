import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Sparkles, Music } from "lucide-react"
import { useLanguage } from "../../hooks/useLanguage"
import { weddingData } from "../../data/wedding"

const iconMap: Record<string, typeof Heart> = {
  heart: Heart,
  sparkles: Sparkles,
  music: Music,
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export default function EventDetails() {
  const { content, lang } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative px-6 py-28 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.15 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`text-3xl md:text-5xl font-display text-[#2C2C2C] mb-3 ${lang === "ar" ? "font-serif" : "italic"}`}
          >
            {content.events.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="text-[#D4AF37] font-serif text-sm tracking-[0.2em] uppercase"
          >
            {content.events.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {weddingData.eventDetails.map((event, i) => {
            const Icon = iconMap[event.icon] || Heart

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                className="text-center p-8 md:p-10 border border-[#D4AF37]/10 bg-[#FAF8F2]"
              >
                <div className="w-14 h-14 rounded-full border border-[#D4AF37]/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="text-[#D4AF37] font-display text-3xl mb-2 italic">
                  {event.time}
                </div>
                <h3
                  className={`text-xl md:text-2xl font-display text-[#2C2C2C] mb-3 ${lang === "ar" ? "font-serif" : "italic"}`}
                >
                  {event.title}
                </h3>
                <p className="text-[#6B6B6B] font-serif text-base leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
