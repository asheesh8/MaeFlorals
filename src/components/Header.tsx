"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-petal)] ${
          scrolled ? "bg-paper/80 py-3 shadow-[0_1px_0_rgba(42,34,48,0.08)] backdrop-blur-md" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 md:px-10">
          <a href="#top" className="group flex items-center gap-2.5" aria-label="Mae Florals — home">
            <Image src="/art/cosmos.webp" alt="" width={63} height={100} className="h-10 w-auto transition-transform duration-700 group-hover:rotate-[14deg]" />
            <span className="font-display whitespace-nowrap text-[1.7rem] font-normal italic leading-none tracking-tight">Mae Florals</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="label link-underline text-ink-2 hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#inquire" className="btn btn-ink hidden !py-3 sm:inline-flex">
              Begin a keepsake
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid size-12 place-items-center rounded-full border border-ink/25 transition hover:border-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="flex w-4 flex-col gap-[5px]">
                <span className="h-px w-full bg-ink" />
                <span className="h-px w-full bg-ink" />
                <span className="h-px w-full bg-ink" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col overflow-hidden bg-paper"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <span className="font-display text-[1.7rem] italic">Mae Florals</span>
              <button
                onClick={() => setOpen(false)}
                className="grid size-12 place-items-center rounded-full border border-ink/25"
                aria-label="Close menu"
              >
                <span className="relative block size-4">
                  <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-ink" />
                  <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-ink" />
                </span>
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
              {[...nav, { href: "#inquire", label: "Begin a keepsake" }].map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl font-light leading-tight"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {n.label}
                </motion.a>
              ))}
            </nav>
            <div className="relative px-6 pb-10">
              <a href={site.phoneHref} className="label text-ink-2">Call or text {site.phone}</a>
              <Image src="/art/garland.webp" alt="" width={1600} height={677} className="pointer-events-none mt-6 w-full opacity-90" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
