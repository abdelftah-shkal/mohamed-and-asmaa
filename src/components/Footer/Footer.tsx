import { motion } from "framer-motion"
import { Mail, Phone, Globe, ExternalLink, Camera, Code } from "lucide-react"
import { useLanguage } from "../../hooks/useLanguage"
import { weddingData } from "../../data/wedding"

const socialIcons = [
  { icon: Mail, href: `mailto:${weddingData.socialLinks.email}`, label: "Email" },
  { icon: Phone, href: weddingData.socialLinks.whatsapp, label: "WhatsApp" },
  { icon: ExternalLink, href: weddingData.socialLinks.linkedin, label: "LinkedIn" },
  { icon: Code, href: weddingData.socialLinks.github, label: "GitHub" },
  { icon: Camera, href: weddingData.socialLinks.instagram, label: "Instagram" },
  { icon: Globe, href: weddingData.socialLinks.portfolio, label: "Portfolio" },
]

export default function Footer() {
  const { content } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative px-6 py-16 md:py-24 bg-[#2C2C2C] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="text-3xl md:text-4xl font-display text-[#D4AF37] mb-4 italic">
            {weddingData.monogram}
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
            <div className="text-[#D4AF37] font-serif text-xl">&#10087;</div>
            <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-white/50 font-serif text-sm md:text-base mb-6"
        >
          &copy; {year} &mdash; {weddingData.developer.name}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="text-white/60 font-sans text-xs md:text-sm max-w-lg mx-auto mb-8 leading-relaxed"
        >
          {content.footer.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              title={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>

        <a
          href={weddingData.socialLinks.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-[#D4AF37]/40 text-[#D4AF37] text-xs tracking-[0.15em] uppercase font-sans hover:bg-[#D4AF37] hover:text-[#2C2C2C] hover:scale-[1.02] transition-all duration-500"
        >
          {content.footer.cta}
        </a>
      </div>
    </footer>
  )
}
