"use client";

import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import Sprig from "./Sprig";
import { categories, gallery, type Category } from "@/lib/content";

const shapes = ["aspect-square rounded-[22px]", "aspect-[4/5] arch", "aspect-[4/5] rounded-[22px]"];

export default function Gallery() {
  const [cat, setCat] = useState<Category | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  const items = useMemo(() => (cat === "all" ? gallery : gallery.filter((g) => g.cat === cat)), [cat]);

  const step = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (o + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, step]);

  return (
    <section id="gallery" className="relative overflow-hidden py-28 md:py-40">
      <Sprig name="monarch" width={90} className="right-[8%] top-28 hidden md:block" rotate={18} speed={0.5} />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-muted">The gallery</p>
            <h2 className="font-display mt-6 text-[clamp(2.8rem,5.4vw,5rem)] font-light leading-[0.98] tracking-[-0.015em]">
              Kept, <span className="italic text-lavender">one by one.</span>
            </h2>
          </div>
          <LayoutGroup>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter the gallery">
              {categories.map((c) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={cat === c.id}
                  onClick={() => setCat(c.id)}
                  className="relative rounded-full px-4 py-2 font-sans text-[0.78rem] tracking-wide"
                >
                  {cat === c.id && (
                    <motion.span layoutId="chip" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                  )}
                  <span className={`relative transition-colors ${cat === c.id ? "text-paper" : "text-ink-2 hover:text-ink"}`}>{c.label}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>

        <motion.ul layout className="mt-14 columns-2 gap-4 md:columns-3 md:gap-6 lg:columns-4">
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <motion.li
                layout
                key={g.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-4 break-inside-avoid md:mb-6"
              >
                <button onClick={() => setOpen(i)} className="group block w-full text-left" aria-label={`Enlarge: ${g.alt}`}>
                  <div className={`relative w-full overflow-hidden bg-paper-3 ${g.round ? "aspect-square rounded-full" : shapes[i % shapes.length]}`}>
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-petal)] group-hover:scale-[1.06]"
                    />
                  </div>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <AnimatePresence>
        {open !== null && items[open] && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-night/92 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={items[open].alt}
          >
            <motion.figure
              key={items[open].src}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[560px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[24px]">
                <Image src={items[open].src} alt={items[open].alt} fill sizes="560px" className="object-contain" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 text-paper/80">
                <span className="font-display text-xl italic">{items[open].alt}</span>
                <span className="label shrink-0 text-paper/50">
                  {open + 1} / {items.length}
                </span>
              </figcaption>
            </motion.figure>
            <button onClick={(e) => (e.stopPropagation(), step(-1))} className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-paper/30 text-paper md:left-8" aria-label="Previous">←</button>
            <button onClick={(e) => (e.stopPropagation(), step(1))} className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-paper/30 text-paper md:right-8" aria-label="Next">→</button>
            <button onClick={() => setOpen(null)} className="label absolute right-5 top-5 text-paper/70 md:right-8 md:top-8" aria-label="Close">Close ✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
