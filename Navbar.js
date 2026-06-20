import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "@/lib/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 ${
          scrolled ? "border-white/20 bg-coal/90 shadow-soft backdrop-blur-xl" : "border-white/20 bg-coal/75 backdrop-blur-md"
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white shadow-sm">
            <Image src="/logo.png" alt="E-Commerce by Ghulam Rasool logo" fill sizes="48px" className="object-contain p-1" priority />
          </span>
          <span className="truncate font-brand text-sm font-extrabold leading-tight text-fern sm:text-base">
            E-Commerce by Ghulam Rasool
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 sm:block">
              Amazon - eBay - Walmart - TikTok Shop
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-white/75 transition hover:text-fern">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/admin/login" className="rounded px-5 py-3 text-sm font-bold text-white/70 transition hover:text-white">
            Admin
          </Link>
          <a
            href="#contact"
            className="focus-ring rounded-full bg-fern px-5 py-3 text-sm font-bold text-royal shadow-lg shadow-ink/15 transition hover:-translate-y-0.5 hover:bg-coral"
          >
            Hire Us
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-full bg-fern text-royal lg:hidden"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-fern/20 bg-coal p-4 shadow-soft lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded px-4 py-3 text-sm font-bold text-white/75 hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
          <Link href="/admin/login" className="block rounded px-4 py-3 text-sm font-bold text-white/75 hover:bg-white/10">
            Admin
          </Link>
        </div>
      ) : null}
    </header>
  );
}
