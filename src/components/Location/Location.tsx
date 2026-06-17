import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin } from "lucide-react"
import { useLanguage } from "../../hooks/useLanguage"
import { weddingData } from "../../data/wedding"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export default function Location() {
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
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`text-3xl md:text-5xl font-display text-[#2C2C2C] mb-3 ${lang === "ar" ? "font-serif" : "italic"}`}
          >
            {content.location.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="text-[#D4AF37] font-serif text-sm tracking-[0.2em] uppercase"
          >
            {content.location.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-center p-10 md:p-16 border border-[#D4AF37]/10 bg-white max-w-xl mx-auto"
        >
          <MapPin className="w-8 h-8 text-[#D4AF37] mx-auto mb-6" />
          <h3
            className={`text-2xl md:text-3xl font-display text-[#2C2C2C] mb-4 ${lang === "ar" ? "font-serif" : "italic"}`}
          >
            {weddingData.venue.name}
          </h3>
          <p className="text-[#6B6B6B] font-serif text-lg leading-relaxed mb-8">
            {weddingData.venue.address}
          </p>
          <a
            href={weddingData.venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#D4AF37] text-[#D4AF37] text-sm tracking-[0.15em] uppercase font-sans hover:bg-[#D4AF37] hover:text-white hover:scale-[1.02] transition-all duration-500"
          >
            <MapPin className="w-4 h-4" />
            {content.location.viewMap}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
