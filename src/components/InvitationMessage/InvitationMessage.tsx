import { motion } from "framer-motion"
import { useLanguage } from "../../hooks/useLanguage"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function InvitationMessage() {
  const { content, lang } = useLanguage()

  return (
    <section className="relative px-6 py-28 md:py-40 bg-[#FAF8F2]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
          className="space-y-8"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#D4AF37]/40" />
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
              <div className="h-[1px] w-12 bg-[#D4AF37]/40" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`text-2xl md:text-4xl font-display text-[#2C2C2C] leading-relaxed ${lang === "ar" ? "font-serif" : ""}`}
          >
            {content.invitation.title}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          >
            <p className={`text-[#6B6B6B] font-serif text-lg md:text-xl leading-relaxed md:leading-[1.9] ${lang === "ar" ? "text-right" : ""}`}>
              {content.invitation.message}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <p className={`text-[#6B6B6B] font-serif text-base md:text-lg leading-relaxed italic ${lang === "ar" ? "text-right not-italic" : ""}`}>
              {content.invitation.message2}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-[1px] w-12 bg-[#D4AF37]/40" />
              <div className="text-[#D4AF37] font-serif text-3xl">&#10087;</div>
              <div className="h-[1px] w-12 bg-[#D4AF37]/40" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
