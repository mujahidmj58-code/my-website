import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { navItems, services } from "@/lib/siteData";

export default function Footer() {
  const socialLinks = [
    [FaLinkedinIn, "https://www.linkedin.com/in/ecommerce-by-ghulam-rasool", "LinkedIn"],
    [FaFacebookF, "https://www.facebook.com/ECommerceByGhulamRasool", "Facebook"],
    [FaInstagram, "https://www.instagram.com/ECommerceByGhulamRasool", "Instagram"],
    [FaWhatsapp, "https://wa.me/923173997115", "WhatsApp"]
  ];

  return (
    <footer className="bg-coal py-16 text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-sm">
                <Image src="/logo.png" alt="E-Commerce by Ghulam Rasool logo" fill sizes="48px" className="object-contain p-1" />
              </span>
              <span className="font-brand text-xl font-extrabold text-fern">E-Commerce by Ghulam Rasool</span>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-white/60">
              Helping Amazon, Walmart, TikTok Shop and eBay sellers grow revenue through expert account management, PPC, and marketplaces operations.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(([Icon, href, label]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-fern hover:text-coal"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <FooterList title="Quick Links" items={navItems} />
          <FooterList title="Services" items={services.map((service) => ({ label: service.title, href: "#services" }))} />
          <div>
            <h3 className="font-display text-lg font-bold text-fern">Connect</h3>
            <div className="mt-4 grid gap-3">
              <a className="text-sm font-semibold text-white/60 transition hover:text-fern" href="https://wa.me/923173997115" target="_blank" rel="noreferrer">
                +92 317 3997115
              </a>
              <a className="text-sm font-semibold text-white/60 transition hover:text-fern" href="mailto:info@ecommercebyghulamrasool.com">
                ecommercebyghulamrasool.com
              </a>
              <span className="text-sm font-semibold text-white/60">Available worldwide</span>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm font-semibold text-white/45 sm:flex-row">
          <p>Copyright (c) {new Date().getFullYear()} E-Commerce by Ghulam Rasool. All rights reserved.</p>
          <p>Amazon - eBay - Walmart - TikTok Shop</p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-lg font-bold text-fern">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <a key={item.label} href={item.href} className="text-sm font-semibold text-white/60 transition hover:text-fern">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
