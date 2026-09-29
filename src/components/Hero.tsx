"use client";

import Image from "next/image";
import Link from "next/link";
import Sprig from "./Sprig";
import { site } from "@/lib/content";

function Line({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`block pb-[0.12em] ${className}`}>
      {children}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-14 pt-28 md:pb-20 md:pt-36"
    >
      {/* soft wash behind the plate */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[70vh] w-[70vh] rounded-full bg-lavender-soft/25 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[50vh] w-[50vh] rounded-full bg-blush/20 blur-[120px]" />

      <Image
        src="/art/bouquet.webp"
        alt=""
        width={1191}
        height={1600}
        priority
        sizes="(min-width: 768px) 720px, 520px"
        className="pointer-events-none absolute -right-36 top-32 z-0 h-auto w-[32rem] select-none opacity-[0.16] mix-blend-multiply md:-right-24 md:top-24 md:w-[44rem] md:opacity-[0.14] lg:hidden"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden">
        <Image
          src="/art/fern.webp"
          alt=""
          width={574}
          height={962}
          sizes="160px"
          className="wind-leaf wind-leaf-a absolute -left-12 top-[19rem] h-auto w-36 opacity-20 md:left-[43%] md:top-28 md:w-44 md:opacity-25"
        />
        <Image
          src="/art/fern.webp"
          alt=""
          width={574}
          height={962}
          sizes="180px"
          className="wind-leaf wind-leaf-b absolute -right-10 top-44 h-auto w-40 opacity-20 md:right-6 md:top-20 md:w-48 md:opacity-25"
        />
      </div>

      <Sprig name="fern" width={130} className="-left-12 bottom-0 hidden opacity-60 md:block" rotate={-32} speed={0.25} />
      <Sprig name="hydrangea" width={170} className="bottom-6 left-[38%] hidden opacity-80 lg:block" rotate={12} speed={0.35} />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-6">
        <div className="relative z-10 lg:col-span-7">
          <p className="eyebrow flex items-center gap-4 text-muted">
            <span className="h-px w-10 bg-ink/30" />
            Floral art &amp; preservation · {site.town}
          </p>

          <h1 className="font-display mt-8 text-[clamp(3.3rem,6.7vw,7.2rem)] font-light leading-[0.9] tracking-[-0.02em]">
            <Line>Keep the flowers.</Line>
            <Line className="italic text-lavender">
              Keep the day.
            </Line>
          </h1>

          <p className="mt-7 max-w-[34rem] text-[1.1rem] leading-relaxed text-ink-2 md:mt-9 md:text-[1.2rem]">
            Melissa presses, dries and sets the flowers you can&rsquo;t bear to lose — wedding bouquets, sympathy
            arrangements, even a beloved pet&rsquo;s fur — into framed botanical art and glass-clear resin.
            Beautifully, and forever.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
            <Link href="/contact" className="btn btn-ink">
              Begin a keepsake
              <span aria-hidden>→</span>
            </Link>
            <Link href="/gallery" className="btn btn-ghost">
              See her work
            </Link>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-ink/15 pt-7 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            {[
              ["By hand", "Pressed, placed & poured in Claremont"],
              ["VT & NH", "Southern Vermont, New Hampshire & the Upper Valley"],
              ["From $20", "Pet memorials, with free return shipping"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-4 sm:block">
                <dt className="font-display w-32 shrink-0 whitespace-nowrap text-[1.75rem] leading-none sm:w-auto md:text-4xl">{k}</dt>
                <dd className="font-sans text-[0.7rem] uppercase leading-snug tracking-[0.14em] text-muted sm:mt-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto hidden w-full lg:col-span-5 lg:block lg:max-w-[430px]">
          <div className="relative">
            <Image
              src="/art/fern.webp"
              alt=""
              width={574}
              height={962}
              sizes="150px"
              className="wind-leaf wind-leaf-a pointer-events-none absolute -left-10 top-[22%] z-0 h-auto w-[34%] opacity-50"
            />
            <Image
              src="/art/fern.webp"
              alt=""
              width={574}
              height={962}
              sizes="140px"
              className="wind-leaf wind-leaf-b pointer-events-none absolute -right-8 top-[8%] z-0 h-auto w-[30%] opacity-45"
            />
            <Image
              src="/art/bouquet.webp"
              alt="Hand-coloured botanical illustration of a bridal bouquet of cosmos, asters, roses and hydrangea tied with ribbon"
              width={1191}
              height={1600}
              priority
              sizes="(min-width: 1024px) 520px, 90vw"
              className="relative z-10 h-auto w-full drop-shadow-[0_30px_40px_rgba(42,34,48,0.08)]"
            />
          </div>

          <div className="absolute -right-2 top-4 w-20 md:-right-8 md:w-24">
            <div className="flutter">
              <Image src="/art/monarch.webp" alt="" width={1024} height={1024} className="h-auto w-full" />
            </div>
          </div>

          <p className="label mt-4 text-center text-muted">
            Pl. I — A bride&rsquo;s bouquet, drawn before it was pressed
          </p>
        </div>
      </div>
    </section>
  );
}
