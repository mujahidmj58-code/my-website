import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiGlobe, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  preferredDate: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [errors, setErrors] = useState({});

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Booking your consultation..." });
    setErrors({});

    try {
      await axios.post("/api/contact", form);
      setForm(initialState);
      setStatus({ type: "success", message: "Thanks. Your consultation request is saved and the team has been notified." });
    } catch (error) {
      setErrors(error.response?.data?.errors || {});
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Something went wrong. Please try again."
      });
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_18%,rgba(255,198,47,.22),transparent_28%),linear-gradient(135deg,#041A3D_0%,#0646AD_52%,#0A4DB3_100%)] py-28 text-center text-white">
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:74px_74px]" />
      <div className="section-shell relative">
        <h2 className="font-display text-4xl font-normal leading-tight sm:text-5xl">
          Ready to <span className="text-mint">Scale Your Store</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-white/60">
          Let's talk about your marketplace goals. Book a free 30-minute strategy call and walk away with a clear action plan.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="https://wa.me/923173997115" target="_blank" rel="noreferrer" className="focus-ring rounded-full bg-fern px-7 py-4 text-sm font-bold text-coal transition hover:-translate-y-1 hover:bg-mint">
            WhatsApp Me Now
          </a>
          <a href="mailto:info@ecommercebyghulamrasool.com" className="focus-ring rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-mint hover:text-mint">
            Send an Email
          </a>
        </div>
        <div className="mx-auto mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/60">
          {[
            { icon: FiMail, label: "ecommercebyghulamrasool.com", href: "mailto:info@ecommercebyghulamrasool.com" },
            { icon: FaWhatsapp, label: "WhatsApp: +92 317 3997115", href: "https://wa.me/923173997115" },
            { icon: FiGlobe, label: "Available for clients worldwide" }
          ].map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="text-fern" />
                <span>{item.label}</span>
              </>
            );

            return item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-2 text-mint">
                {content}
              </a>
            ) : (
              <span key={item.label} className="flex items-center gap-2">
                {content}
              </span>
            );
          })}
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-white/10 bg-pearl p-5 text-left shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={updateField} error={errors.name} required />
            <Field label="Email" name="email" type="email" value={form.email} onChange={updateField} error={errors.email} required />
            <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={updateField} />
            <Field label="Company" name="company" value={form.company} onChange={updateField} />
            <label className="block">
              <span className="text-sm font-bold text-ink/70">Consultation topic</span>
              <select
                name="service"
                value={form.service}
                onChange={updateField}
                className="focus-ring mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-4 text-sm font-semibold text-ink"
              >
                <option value="">Select topic</option>
                <option>Amazon Private Label</option>
                <option>Amazon PPC Management</option>
                <option>eBay Dropshipping</option>
                <option>Walmart WFS</option>
                <option>TikTok Shop</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <Field label="Preferred date" name="preferredDate" type="date" value={form.preferredDate} onChange={updateField} />
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-bold text-ink/70">What would you like to discuss?</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              required
              rows={6}
              className="focus-ring mt-2 w-full resize-none rounded-2xl border border-ink/10 bg-white px-4 py-4 text-sm font-semibold text-ink"
              placeholder="Share your goals, challenges, timeline, or anything we should know before the call."
            />
            {errors.message ? <span className="mt-2 block text-sm font-semibold text-red-600">{errors.message}</span> : null}
          </label>
          <button
            type="submit"
            disabled={status.type === "loading"}
            className="focus-ring mt-6 w-full rounded-full bg-moss px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-royal disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status.type === "loading" ? "Booking..." : "Book consultation"}
          </button>
          {status.message ? (
            <p className={`mt-4 text-sm font-bold ${status.type === "success" ? "text-moss" : status.type === "error" ? "text-red-600" : "text-ink/60"}`}>
              {status.message}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, error, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-ink/70">{label}</span>
      <input
        {...props}
        className="focus-ring mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-4 text-sm font-semibold text-ink"
      />
      {error ? <span className="mt-2 block text-sm font-semibold text-red-600">{error}</span> : null}
    </label>
  );
}
