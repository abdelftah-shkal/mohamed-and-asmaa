import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(6, "Phone is required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function RSVP() {
  const { content, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
async function onSubmit(data: FormData) {
  const formData = new FormData()

  formData.append("entry.2064618049", data.name)
  formData.append("entry.932710686", data.phone)
  formData.append("entry.282929456", data.message || "")

  try {
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdQ_Kmv1AHZoeLAwK6hl0FFoYVqByYmLGtowuzt8WMK4gjc_A/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    )

    setSubmitted(true)
  } catch (error) {
    console.error(error)
    alert("Failed to send.")
  }
}

  return (
    <section ref={ref} className="relative px-6 py-28 md:py-40 bg-white">
      <div className="max-w-xl mx-auto">
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
            {content.rsvp.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="text-[#6B6B6B] font-serif text-lg"
          >
            {content.rsvp.subtitle}
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center p-12 border border-[#D4AF37]/10 bg-[#FAF8F2]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                <CheckCircle className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
              </motion.div>
              <p className="text-[#2C2C2C] font-serif text-xl leading-relaxed">
                {content.rsvp.success}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div>
                <input
                  {...register("name")}
                  placeholder={content.rsvp.name}
                  className={`w-full px-5 py-4 bg-[#FAF8F2] border border-[#D4AF37]/10 text-[#2C2C2C] font-serif text-base outline-none focus:border-[#D4AF37]/50 transition-colors duration-300 ${lang === "ar" ? "text-right" : ""}`}
                />
                {errors.name && (
                  <p className="text-[#D4AF37] text-xs mt-1 font-sans">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("phone")}
                  placeholder={content.rsvp.phone}
                  className={`w-full px-5 py-4 bg-[#FAF8F2] border border-[#D4AF37]/10 text-[#2C2C2C] font-serif text-base outline-none focus:border-[#D4AF37]/50 transition-colors duration-300 ${lang === "ar" ? "text-right" : ""}`}
                />
                {errors.phone && (
                  <p className="text-[#D4AF37] text-xs mt-1 font-sans">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder={content.rsvp.messagePlaceholder}
                  className={`w-full px-5 py-4 bg-[#FAF8F2] border border-[#D4AF37]/10 text-[#2C2C2C] font-serif text-base outline-none focus:border-[#D4AF37]/50 transition-colors duration-300 resize-none ${lang === "ar" ? "text-right" : ""}`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#D4AF37] text-white font-sans text-sm tracking-[0.2em] uppercase hover:bg-[#c5a232] transition-colors duration-500 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                {content.rsvp.submit}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
