import { motion } from "framer-motion";
import { FiArrowUpRight, FiMessageCircle } from "react-icons/fi";
import { metrics, platforms } from "@/lib/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_78%_18%,rgba(255,198,47,.28),transparent_26%),linear-gradient(135deg,#041A3D_0%,#0646AD_58%,#0A4DB3_100%)] pt-32 text-white sm:pt-36">
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.24)_1px,transparent_1px)] [background-size:82px_82px]" />
      <div className="section-shell relative grid min-h-[780px] items-center gap-12 pb-24 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <span className="inline-flex items-center gap-3 rounded-full border border-mint/25 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-mint before:h-px before:w-8 before:bg-fern">
            Amazon, eBay, Walmart & TikTok Shop Expert
          </span>
          <h1 className="mt-7 max-w-4xl font-display text-5xl font-normal leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Scale Your <span className="text-fern">E-Commerce</span> Store With Smarter Marketplace Growth
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            From Amazon FBA/FBM to Walmart, TikTok Shop, eBay and PPC campaigns, we help sellers grow revenue, cut waste, and dominate their marketplaces.
          </p>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {["PPC control", "Listing SEO", "Store operations"].map((item) => (
              <div key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white/80 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-fern px-7 py-4 text-sm font-bold text-coal shadow-lift transition hover:-translate-y-1 hover:bg-mint"
            >
              Explore Services <FiArrowUpRight />
            </a>
            <a
              href="https://wa.me/923173997115"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-mint hover:text-mint"
            >
              <FiMessageCircle /> Book a Free Call
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="relative min-h-[560px]"
        >
          <div className="absolute left-0 top-8 h-[74%] w-[76%] overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-lift backdrop-blur-xl">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,.22),rgba(255,255,255,.04))]" />
            <div className="relative flex h-full flex-col justify-end p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">growth dashboard</p>
              <h3 className="mt-2 max-w-sm font-display text-4xl font-normal leading-tight text-white">Platform Expertise</h3>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-coal/35 p-5">
                    <p className="font-brand text-2xl font-extrabold text-fern sm:text-3xl lg:text-[2rem]">{metric.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/60">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative border-y border-ink/10 bg-pearl py-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-ink/45">Platforms & Tools</p>
        <div className="section-shell mt-5 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {platforms.map((platform) => (
            <span key={platform} className="font-brand text-sm font-bold uppercase tracking-[0.08em] text-moss">
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
