import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../../hooks/useLanguage"
import { weddingData } from "../../data/wedding"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export default function CoupleSection() {
  const { content, lang } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative px-6 py-28 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <div className="relative mb-6 mx-auto max-w-[280px] md:max-w-[360px] aspect-[3/4] overflow-hidden">
              <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    `url(${weddingData.groomImage})`,
                }}
                initial={{ scale: 1.15 }}
                animate={isInView ? { scale: 1 } : { scale: 1.15 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 border border-[#D4AF37]/10" />
            </div>
            <h3 className={`text-3xl md:text-4xl font-display text-[#2C2C2C] mb-2 ${lang === "ar" ? "font-serif" : "italic"}`}>
              {weddingData.groomName}
            </h3>
            <p className="text-[#D4AF37] font-serif text-sm tracking-[0.2em] uppercase">
              {content.couple.groomDesc}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
            className="text-center"
          >
            <div className="relative mb-6 mx-auto max-w-[280px] md:max-w-[360px] aspect-[3/4] overflow-hidden">
              <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    `url(${weddingData.brideImage})`,
                }}
                initial={{ scale: 1.15 }}
                animate={isInView ? { scale: 1 } : { scale: 1.15 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 border border-[#D4AF37]/10" />
            </div>
            <h3 className={`text-3xl md:text-4xl font-display text-[#2C2C2C] mb-2 ${lang === "ar" ? "font-serif" : "italic"}`}>
              {weddingData.brideName}
            </h3>
            <p className="text-[#D4AF37] font-serif text-sm tracking-[0.2em] uppercase">
              {content.couple.brideDesc}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-[#D4AF37]/30" />
            <div className="text-[#D4AF37] font-serif text-2xl">&#10087;</div>
            <div className="h-[1px] w-16 bg-[#D4AF37]/30" />
          </div>
          <p className={`text-[#6B6B6B] font-serif text-lg md:text-xl italic ${lang === "ar" ? "not-italic" : ""}`}>
            {content.couple.together}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
