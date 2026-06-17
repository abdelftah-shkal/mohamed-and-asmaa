import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../../hooks/useLanguage"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export default function ThankYou() {
  const { content, lang } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative px-6 py-28 md:py-40 bg-[#FAF8F2] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[1px] w-16 bg-[#D4AF37]/30" />
            <div className="text-[#D4AF37] font-serif text-3xl">&#10087;</div>
            <div className="h-[1px] w-16 bg-[#D4AF37]/30" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`text-3xl md:text-5xl font-display text-[#2C2C2C] mb-6 ${lang === "ar" ? "font-serif" : "italic"}`}
          >
            {content.thankYou.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="text-[#6B6B6B] font-serif text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
          >
            {content.thankYou.message}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
