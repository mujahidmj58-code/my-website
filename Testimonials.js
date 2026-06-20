import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import { testimonials } from "@/lib/siteData";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const move = (direction) => {
    setIndex((value) => (value + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="overflow-hidden bg-mist py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeading
            eyebrow="Client Voices"
            title="Results That Speak for Themselves"
            text="Real feedback from marketplace sellers who needed measurable growth, stronger operations, and clear execution."
          />
          <div className="rounded-[2rem] border border-moss/10 bg-pearl p-6 shadow-soft sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex gap-1 text-fern">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FiStar key={starIndex} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-8 font-display text-2xl font-normal leading-relaxed text-ink sm:text-3xl">
                  "{active.quote}"
                </p>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-xl font-normal">{active.name}</p>
                    <p className="mt-1 text-sm font-semibold text-moss">{active.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      aria-label="Previous testimonial"
                      onClick={() => move(-1)}
                      className="focus-ring grid h-11 w-11 place-items-center rounded border border-moss/15 text-ink transition hover:bg-royal hover:text-white"
                    >
                      <FiArrowLeft />
                    </button>
                    <button
                      type="button"
                      aria-label="Next testimonial"
                      onClick={() => move(1)}
                      className="focus-ring grid h-11 w-11 place-items-center rounded bg-moss text-white transition hover:bg-royal"
                    >
                      <FiArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
