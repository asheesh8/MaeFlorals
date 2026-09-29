"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Sprig from "./Sprig";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="preserve" className="relative bg-paper-2/60 py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow text-muted">What she keeps</p>
            <h2 className="font-display mt-6 text-[clamp(2.8rem,5vw,4.6rem)] font-light leading-[0.98] tracking-[-0.015em]">
              Five ways to hold on to <span className="italic text-lavender">a flower.</span>
            </h2>
            <p className="mt-6 max-w-sm text-ink-2">
              Every piece is made one at a time in Melissa&rsquo;s studio in Claremont, from the flowers you bring her.
            </p>
            <div className="relative mt-10 hidden w-[260px] lg:block">
              <Image src="/art/wreath.webp" alt="" width={929} height={1023} className="h-auto w-full" />
              <span className="font-display absolute inset-0 grid place-items-center pb-2 text-[5.5rem] italic leading-none text-ink/85">M</span>
            </div>
          </div>
        </div>

        <ol className="flex flex-col gap-6 lg:col-span-8">
          {services.map((s, i) => (
            <motion.li
              key={s.no}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-1 gap-6 overflow-hidden rounded-[28px] border border-ink/10 bg-paper p-5 shadow-[0_1px_0_rgba(42,34,48,0.04),0_30px_60px_-40px_rgba(42,34,48,0.25)] sm:grid-cols-[minmax(0,220px)_1fr] sm:p-6 md:gap-10"
            >
              <div className="arch relative aspect-[4/5] w-full max-w-[260px] bg-paper-3">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="260px"
                  className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-petal)] group-hover:scale-[1.06]"
                />
              </div>
              <div className="relative flex flex-col justify-center py-2 pr-2">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-lg italic text-muted">No. {s.no}</span>
                  <span className="label text-sage-deep">{s.kicker}</span>
                </div>
                <h3 className="font-display mt-3 text-[clamp(2.2rem,3.6vw,3.3rem)] font-light leading-none">{s.title}</h3>
                <p className="mt-4 max-w-md text-ink-2">{s.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.formats.map((f) => (
                    <li key={f} className="rounded-full border border-ink/15 px-3 py-1 font-sans text-[0.72rem] tracking-wide text-ink-2">
                      {f}
                    </li>
                  ))}
                </ul>
                <Image
                  src={s.art}
                  alt=""
                  width={300}
                  height={450}
                  className={`pointer-events-none absolute -right-6 -top-4 hidden h-40 w-auto opacity-0 transition-all duration-1000 ease-[var(--ease-petal)] group-hover:-translate-y-2 group-hover:rotate-6 group-hover:opacity-90 md:block ${i % 2 ? "-scale-x-100" : ""}`}
                />
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
      <Sprig name="fern" width={140} className="-right-6 bottom-20 hidden opacity-60 xl:block" rotate={200} speed={0.2} />
    </section>
  );
}
