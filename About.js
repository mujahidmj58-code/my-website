import { motion } from "framer-motion";
import { experience } from "@/lib/siteData";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-mist py-28">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
            className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#041A3D_0%,#0646AD_58%,#0A4DB3_100%)] p-8 text-white shadow-lift"
          >
            <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:58px_58px]" />
            <h3 className="relative max-w-sm font-display text-4xl font-normal leading-tight">
              Your <span className="text-mint">trusted partner</span> for marketplace growth
            </h3>
            <ul className="relative mt-28 grid gap-3">
              {experience.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm font-semibold text-white/80">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-fern text-xs font-bold text-coal">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="About E-Commerce By Ghulam Rasool"
              title="E-Commerce Expert Who Delivers Real Results"
              text="With over 3 years of hands-on experience in Amazon, Walmart, TikTok Shop, and eBay marketplaces management, we specialize in building profitable e-commerce operations from the ground up."
            />
            <div className="mt-6 h-1 w-16 rounded bg-gradient-to-r from-fern to-coral" />
            <div className="mt-6 space-y-5 leading-8 text-ink/60">
              <p>
                Currently based in Pakistan and working with clients globally, we bring deep expertise in PPC management, product research,
                listing optimization, and cross-marketplace growth strategies with a performance-first mindset.
              </p>
              <p>
                We do not just manage accounts. We treat your business like our own, focusing on measurable ROI and sustainable long-term growth.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["3+", "Years Active in E-Commerce"],
                ["4", "Marketplaces Mastered"],
                ["206+", "Successful Projects"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.35rem] border border-moss/10 bg-pearl p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <p className="font-brand text-3xl font-extrabold text-moss">{value}</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-ink/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
