import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/lib/content";

const shots = [
  { src: "/work/market-tent.jpg", alt: "The Mae Florals tent and table at an outdoor market" },
  { src: "/work/market-earring-rack.jpg", alt: "A rack of pressed-flower earrings" },
  { src: "/work/market-indoor.jpg", alt: "The Mae Florals table at an indoor craft fair" },
];

export default function Markets() {
  return (
    <section className="relative overflow-hidden bg-sage-deep py-24 text-paper md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-paper/60">Find her in person</p>
          <h2 className="font-display mt-6 text-[clamp(2.4rem,4.4vw,4rem)] font-light leading-[1] tracking-[-0.01em]">
            Craft fairs, markets &amp; <span className="italic">a table full of little flowers.</span>
          </h2>
          <p className="mt-6 max-w-md text-paper/80">
            Melissa brings earrings, heart dishes, trays and keychains to craft fairs and farmers&rsquo; markets across
            Vermont and New Hampshire. Follow along on Facebook to see where she&rsquo;ll be next.
          </p>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-paper mt-8">
            Follow on Facebook <span aria-hidden>↗</span>
          </a>
        </Reveal>
        <div className="grid grid-cols-3 gap-3 md:gap-5 lg:col-span-7">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.1} className={i === 1 ? "translate-y-8" : ""}>
              <div className={`relative aspect-[3/4] overflow-hidden bg-night/20 ${i === 1 ? "arch" : "rounded-[20px]"}`}>
                <Image src={s.src} alt={s.alt} fill sizes="(min-width: 1024px) 260px, 33vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
