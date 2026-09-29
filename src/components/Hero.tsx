"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import Sprig from "./Sprig";
import { site } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.3, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const plateY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // gentle pointer parallax on the plate
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18 });
  const sy = useSpring(my, { stiffness: 40, damping: 18 });
  const tiltX = useTransform(sy, [-1, 1], [3, -3]);
  const tiltY = useTransform(sx, [-1, 1], [-4, 4]);
  const flyX = useTransform(sx, [-1, 1], [-26, 26]);
  const flyY = useTransform(sy, [-1, 1], [-18, 18]);

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
    >
      {/* soft wash behind the plate */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[70vh] w-[70vh] rounded-full bg-lavender-soft/25 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[50vh] w-[50vh] rounded-full bg-blush/20 blur-[120px]" />

      <Sprig name="fern" width={130} className="-left-12 bottom-0 hidden opacity-60 md:block" rotate={-32} speed={0.25} />
      <Sprig name="hydrangea" width={170} className="bottom-6 left-[38%] hidden opacity-80 lg:block" rotate={12} speed={0.35} />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-6">
        <motion.div style={{ y: textY }} className="relative z-10 lg:col-span-7">
          <motion.p
            className="eyebrow flex items-center gap-4 text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1 }}
          >
            <span className="h-px w-10 bg-ink/30" />
            Floral art &amp; preservation · {site.town}
          </motion.p>

          <h1 className="font-display mt-8 text-[clamp(3.3rem,6.7vw,7.2rem)] font-light leading-[0.9] tracking-[-0.02em]">
            <Line delay={0.2}>Keep the flowers.</Line>
            <Line delay={0.38} className="italic text-lavender">
              Keep the day.
            </Line>
          </h1>

          <motion.p
            className="mt-9 max-w-[34rem] text-[1.2rem] leading-relaxed text-ink-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease }}
          >
            Melissa presses, dries and sets the flowers you can&rsquo;t bear to lose — wedding bouquets, sympathy
            arrangements, even a beloved pet&rsquo;s fur — into framed botanical art and glass-clear resin.
            Beautifully, and forever.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.85, ease }}
          >
            <a href="#inquire" className="btn btn-ink">
              Begin a keepsake
              <span aria-hidden>→</span>
            </a>
            <a href="#gallery" className="btn btn-ghost">
              See her work
            </a>
          </motion.div>

          <motion.dl
            className="mt-14 grid max-w-xl grid-cols-1 gap-4 border-t border-ink/15 pt-7 sm:grid-cols-3 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.1 }}
          >
            {[
              ["By hand", "Pressed, placed & poured in Claremont"],
              ["VT & NH", "Southern Vermont, New Hampshire & the Upper Valley"],
              ["From $20", "Pet memorials, with free return shipping"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-4 sm:block">
                <dt className="font-display w-28 shrink-0 text-[1.9rem] leading-none sm:w-auto md:text-4xl">{k}</dt>
                <dd className="font-sans text-[0.7rem] uppercase leading-snug tracking-[0.14em] text-muted sm:mt-2">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div style={{ y: plateY }} className="relative mx-auto w-full max-w-[520px] lg:col-span-5">
          <motion.div
            style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
            initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.3, ease }}
            className="relative"
          >
            <div className="sway">
              <Image
                src="/art/bouquet.webp"
                alt="Hand-coloured botanical illustration of a bridal bouquet of cosmos, asters, roses and hydrangea tied with ribbon"
                width={1191}
                height={1600}
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="h-auto w-full drop-shadow-[0_30px_40px_rgba(42,34,48,0.08)]"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ x: flyX, y: flyY }}
            className="absolute -right-2 top-4 w-20 md:-right-8 md:w-24"
            initial={{ opacity: 0, x: 60, y: -40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2.2, delay: 1.2, ease }}
          >
            <div className="flutter">
              <Image src="/art/monarch.webp" alt="" width={1024} height={1024} className="h-auto w-full" />
            </div>
          </motion.div>

          <motion.p
            className="label mt-4 text-center text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1.2 }}
          >
            Pl. I — A bride&rsquo;s bouquet, drawn before it was pressed
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
