import { motion } from "framer-motion";
import { process } from "@/lib/siteData";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
  return (
    <section id="process" className="relative overflow-hidden bg-[radial-gradient(circle_at_16%_20%,rgba(255,198,47,.2),transparent_24%),linear-gradient(135deg,#041A3D_0%,#0646AD_100%)] py-28 text-white">
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="How It Works"
          title="A Clear Path to Marketplace Growth"
          text="A structured, transparent approach so you always know where your business stands and what is coming next."
          light
          eyebrowClassName="!text-fern before:!bg-fern"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative rounded-[1.6rem] border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-mint/25 hover:bg-white/10"
            >
              <p className="font-brand text-5xl font-extrabold text-fern/20">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-5 font-display text-2xl font-normal text-mint">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{step.text}</p>
              {index < process.length - 1 ? <span className="absolute right-[-10px] top-1/2 hidden h-px w-5 bg-fern/30 lg:block" /> : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
