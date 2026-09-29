"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import Sprig from "./Sprig";
import { petPricing } from "@/lib/content";

const photos = [
  { src: "/work/pet-cats-bellflower.jpg", alt: "Two black resin cats beside bellflowers" },
  { src: "/work/pet-paw.jpg", alt: "Resin paw print with fur inside and a pink-glitter paw" },
  { src: "/work/pet-cat-grey.jpg", alt: "A grey resin cat with fur swirled inside" },
  { src: "/work/pet-cat-tabby.jpg", alt: "A tabby resin cat" },
  { src: "/work/pet-lt-dan.jpg", alt: "A personalised memorial reading Lt. Dan with a red heart" },
  { src: "/work/pet-cats-hand.jpg", alt: "Two tiny black resin cats in a hand" },
  { src: "/work/hand-sewn-cases.jpg", alt: "Hand-sewn fabric cases that memorials are returned in" },
];

const tables = [
  { title: "Cats", note: "Curled asleep", rows: petPricing.cats },
  { title: "Dogs", note: "Resting", rows: petPricing.dogs },
  { title: "Paw prints", note: "A single paw", rows: petPricing.paws },
];

export default function Pets() {
  return (
    <section id="pets" className="relative overflow-hidden bg-paper-2 py-28 md:py-40">
      <Sprig name="forgetmenot" width={110} className="right-[3%] top-[46%] hidden opacity-80 xl:block" rotate={18} speed={0.25} />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-muted">Pet memorials</p>
            <h2 className="font-display mt-6 text-[clamp(2.8rem,5.4vw,5rem)] font-light leading-[0.98] tracking-[-0.015em]">
              For the ones who <span className="italic text-lavender">curled up beside you.</span>
            </h2>
            <p className="mt-6 max-w-lg text-ink-2">
              Melissa sets your pet&rsquo;s own fur or ashes into a small resin figure — a cat curled asleep, a dog at rest,
              or a single paw print — on a base colour you choose. Each one comes home in a hand-sewn case, and return
              shipping is on her.
            </p>
            <blockquote className="mt-10 border-l border-lavender/50 pl-6">
              <p className="font-display text-2xl italic leading-snug md:text-3xl">&ldquo;Our Nala girl turned out amazing, thank you.&rdquo;</p>
              <cite className="label mt-3 block not-italic text-muted">Mia P. · on Facebook</cite>
            </blockquote>
          </Reveal>
          <Reveal delay={0.15} className="relative mx-auto w-full max-w-[520px] lg:col-span-6">
            <div className="sway">
              <Image
                src="/art/cat.webp"
                alt="Botanical-style illustration of a grey cat curled asleep in a ring of forget-me-nots"
                width={1101}
                height={825}
                sizes="520px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {tables.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="h-full rounded-[26px] border border-ink/10 bg-paper p-7 md:p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-4xl">{t.title}</h3>
                  <span className="label text-sage-deep">{t.note}</span>
                </div>
                <ul className="mt-6 divide-y divide-ink/10">
                  {t.rows.map((r) => (
                    <li key={r.size} className="flex items-baseline justify-between gap-4 py-4">
                      <span>
                        <span className="font-sans text-sm font-medium tracking-wide">{r.size}</span>
                        <span className="ml-3 font-sans text-xs tracking-wide text-muted">{r.dims}</span>
                      </span>
                      <span className="font-display text-3xl">${r.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center font-sans text-[0.78rem] tracking-wide text-muted">
          Measurements are approximate · Custom base colour included · Ask about discounts for bundles or multiples
        </p>
      </div>

      <div className="mt-20 overflow-x-auto pb-4 [scrollbar-width:none]" data-lenis-prevent-wheel="false">
        <ul className="flex w-max gap-4 px-5 md:gap-6 md:px-10">
          {photos.map((p, i) => (
            <li key={p.src} className={`relative shrink-0 overflow-hidden bg-paper-3 ${i % 2 ? "arch h-[340px] w-[270px]" : "h-[300px] w-[300px] rounded-[26px] md:mt-10"}`}>
              <Image src={p.src} alt={p.alt} fill sizes="300px" className="object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
