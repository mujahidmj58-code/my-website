import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { services } from "@/lib/siteData";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="bg-pearl py-28">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What We Offer"
            title="Transformative Services for Marketplace Dominance"
            text="From product research to PPC optimization, every service is designed to maximize your profit margin and grow your marketplace presence."
          />
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-moss/15 bg-white px-6 py-3.5 font-bold text-moss shadow-sm transition hover:-translate-y-0.5 hover:border-fern/40 hover:bg-fern/10">
            Discuss your priorities <FiArrowUpRight />
          </a>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.07, duration: 0.55 }}
                className="group flex min-h-[330px] flex-col justify-between rounded-[1.6rem] border border-moss/10 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-moss/25 hover:shadow-soft"
              >
                <div>
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-royal to-moss text-white transition group-hover:scale-105 group-hover:text-fern">
                    <Icon size={service.iconSize || 25} />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-normal leading-tight text-royal">{service.title}</h3>
                  <p className="mt-4 leading-7 text-ink/60">{service.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-skyglass px-3 py-1 text-xs font-bold text-moss">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <FiArrowUpRight className="mt-8 text-fern" size={24} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
