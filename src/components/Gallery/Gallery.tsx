import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "../../hooks/useLanguage"
import { weddingData } from "../../data/wedding"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export default function Gallery() {
  const { content, lang } = useLanguage()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const images = weddingData.galleryImages

  return (
    <section ref={ref} className="relative px-6 py-28 md:py-40 bg-[#FAF8F2]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.15 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`text-3xl md:text-5xl font-display text-[#2C2C2C] mb-3 ${lang === "ar" ? "font-serif" : "italic"}`}
          >
            {content.gallery.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="text-[#D4AF37] font-serif text-sm tracking-[0.2em] uppercase"
          >
            {content.gallery.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
              className={`${img.span} overflow-hidden cursor-pointer group`}
              onClick={() => setLightboxIndex(i)}
            >
              <div className="relative aspect-square overflow-hidden">
                <motion.div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img.src})` }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length)
              }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-4xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${images[lightboxIndex].src})`,
                }}
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev! + 1) % images.length)
              }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
