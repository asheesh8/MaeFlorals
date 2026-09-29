"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { blooms } from "@/lib/blooms";

const ResinScene = dynamic(() => import("./ResinScene"), { ssr: false });

const pieces = [
  { src: "/work/resin-heart-anemone.jpg", alt: "Resin heart with anemones", label: "Heart block" },
  { src: "/work/pyramid-dandelion.jpg", alt: "Dandelion clock in a resin pyramid", label: "Pyramid" },
  { src: "/work/resin-hex-roses.jpg", alt: "Hexagonal resin block with roses", label: "Hexagon" },
  { src: "/work/resin-bookends.jpg", alt: "Half-moon resin bookends", label: "Bookends" },
];

export default function Resin() {
  const wrap = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [bloom, setBloom] = useState(blooms[0]);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="resin" className="relative overflow-hidden bg-night py-28 text-paper md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-lavender/25 blur-[140px]" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-paper/60">Suspended in resin</p>
            <h2 className="font-display mt-6 text-[clamp(2.8rem,5.4vw,5rem)] font-light leading-[0.98] tracking-[-0.015em]">
              Held in the light, <span className="italic text-lavender-soft">exactly as it was.</span>
            </h2>
            <p className="mt-6 max-w-md text-paper/75">
              Poured in clear layers around every petal, a resin block keeps a flower&rsquo;s shape in three dimensions — you
              can turn it over in your hands and see it from every side. Finished with a whisper of gold leaf, if you like.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="label mt-10 text-paper/50">Choose a bloom to set</p>
            <div className="mt-4 flex flex-wrap gap-2" role="radiogroup" aria-label="Choose a flower">
              {blooms.map((b) => (
                <button
                  key={b.id}
                  role="radio"
                  aria-checked={bloom.id === b.id}
                  onClick={() => setBloom(b)}
                  className={`rounded-full border px-4 py-2 font-sans text-[0.78rem] tracking-wide transition-all duration-500 ${
                    bloom.id === b.id
                      ? "border-paper bg-paper text-night"
                      : "border-paper/25 text-paper/80 hover:border-paper/60"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div ref={wrap} className="relative h-[460px] md:h-[600px] lg:col-span-7">
          {near && <ResinScene bloom={bloom} />}
          <p className="label pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-paper/45">
            Drag to turn it in the light
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-[1400px] grid-cols-2 gap-4 px-5 md:grid-cols-4 md:gap-6 md:px-10">
        {pieces.map((p, i) => (
          <Reveal key={p.src} delay={i * 0.08}>
            <figure className="group">
              <div className="relative aspect-square overflow-hidden rounded-[22px] bg-night-2">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-petal)] group-hover:scale-105" />
              </div>
              <figcaption className="label mt-3 text-paper/55">{p.label}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
