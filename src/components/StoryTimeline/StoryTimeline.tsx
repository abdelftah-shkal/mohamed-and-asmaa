import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../../hooks/useLanguage"
import { weddingData } from "../../data/wedding"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export default function StoryTimeline() {
  const { content, lang } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative px-6 py-28 md:py-40 bg-[#FAF8F2]">
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
            {content.timeline.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="text-[#D4AF37] font-serif text-sm tracking-[0.2em] uppercase"
          >
            {content.timeline.subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/50" />
            <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
          </motion.div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#D4AF37]/20 -translate-x-1/2" />

          <div className="space-y-16 md:space-y-20">
            {weddingData.timelineEvents.map((event, i) => (
              <TimelineCard key={i} event={event} index={i} lang={lang} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({
  event,
  index,
  lang,
  isInView,
}: {
  event: (typeof weddingData.timelineEvents)[0]
  index: number
  lang: string
  isInView: boolean
}) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
      className={`relative flex items-start gap-6 md:gap-0 md:items-center ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="hidden md:flex md:w-1/2 md:justify-center">
        <div
          className={`p-6 md:p-8 ${isLeft ? "md:text-right md:mr-8" : "md:text-left md:ml-8"}`}
        >
          <span className="text-[#D4AF37] font-display text-3xl md:text-4xl italic">
            {event.year}
          </span>
        </div>
      </div>

      <div className="relative flex-shrink-0 z-10 mt-1 md:mt-0">
        <motion.div
          className="w-[10px] h-[10px] rounded-full bg-[#D4AF37] border-2 border-[#FAF8F2]"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
        />
      </div>

      <div className="flex-1 md:w-1/2">
        <div className="md:hidden mb-1">
          <span className="text-[#D4AF37] font-display text-xl italic">
            {event.year}
          </span>
        </div>
        <div
          className={`p-5 md:p-8 bg-white border border-[#D4AF37]/10 ${
            lang === "ar" ? "text-right" : ""
          }`}
        >
          <h3
            className={`text-xl md:text-2xl font-display text-[#2C2C2C] mb-3 ${lang === "ar" ? "font-serif" : "italic"}`}
          >
            {event.title}
          </h3>
          <p className="text-[#6B6B6B] font-serif text-base md:text-lg leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
