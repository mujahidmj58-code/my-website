import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, text, align = "left", light = false, eyebrowClassName = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <span className={`eyebrow ${eyebrowClassName}`}>{eyebrow}</span>
      <h2 className={`mt-5 font-display text-3xl font-normal leading-[1.12] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-white/60" : "text-ink/60"}`}>{text}</p> : null}
    </motion.div>
  );
}
