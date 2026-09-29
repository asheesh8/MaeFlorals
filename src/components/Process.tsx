"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Sprig from "./Sprig";
import { stages } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Process() {
  const [i, setI] = useState(0);
  const s = stages[i];
  const pct = (i / (stages.length - 1)) * 100;

  return (
    <section id="process" className="relative overflow-hidden py-28 md:py-40">
      <Sprig name="press" width={300} className="-right-10 top-16 hidden opacity-95 lg:block" rotate={-8} speed={0.18} />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-muted">Interactive · From bouquet to heirloom</p>
          <h2 className="font-display mt-6 text-[clamp(2.8rem,5.4vw,5rem)] font-light leading-[0.98] tracking-[-0.015em]">
            Follow one bouquet <span className="italic text-lavender">all the way home.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink-2">
            Preservation is slow, careful work. Drag through the five stages and see what happens to your flowers after the
            day is over.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[32px] border border-ink/10 bg-paper-2/70 p-5 shadow-[0_40px_80px_-50px_rgba(42,34,48,0.35)] md:p-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_minmax(0,380px)] md:gap-14">
            <div className="min-h-[250px] md:min-h-[290px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease }}
                >
                  <p className="font-display text-[clamp(4.5rem,9vw,8rem)] font-light italic leading-[0.85] text-lavender/90">
                    {s.step}
                  </p>
                  <h3 className="font-display mt-5 text-3xl md:text-4xl">{s.title}</h3>
                  <p className="mt-4 max-w-lg text-ink-2">{s.body}</p>
                  <p className="label mt-6 text-muted">
                    Stage {i + 1} of {stages.length}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={s.image}
                  className="arch absolute inset-0 bg-paper-3"
                  initial={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease }}
                >
                  <Image src={s.image} alt={s.alt} fill sizes="380px" className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-12">
            <label htmlFor="stage" className="label text-muted">
              Stage of preservation
            </label>
            <div className="relative mt-5 h-10">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-ink/15" />
              <motion.div
                className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-lavender"
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.5, ease }}
              />
              {stages.map((_, k) => (
                <span
                  key={k}
                  className={`absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors ${k <= i ? "bg-lavender" : "bg-ink/20"}`}
                  style={{ left: `${(k / (stages.length - 1)) * 100}%` }}
                />
              ))}
              <motion.div
                className="pointer-events-none absolute top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ink/15 bg-paper shadow-md"
                animate={{ left: `${pct}%` }}
                transition={{ duration: 0.5, ease }}
              >
                <Image src="/art/cosmos.webp" alt="" width={63} height={100} className="h-7 w-auto" />
              </motion.div>
              <input
                id="stage"
                type="range"
                min={0}
                max={stages.length - 1}
                step={1}
                value={i}
                onChange={(e) => setI(Number(e.target.value))}
                aria-valuetext={`${s.step}: ${s.title}`}
                className="absolute inset-0 h-full w-full cursor-grab opacity-0 active:cursor-grabbing"
              />
            </div>
            <div className="mt-3 hidden grid-cols-5 sm:grid">
              {stages.map((st, k) => (
                <button
                  key={st.step}
                  onClick={() => setI(k)}
                  className={`label text-[0.62rem] transition-colors md:text-[0.7rem] ${k === 0 ? "text-left" : k === stages.length - 1 ? "text-right" : "text-center"} ${k === i ? "text-ink" : "text-muted hover:text-ink"}`}
                >
                  {st.step}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
