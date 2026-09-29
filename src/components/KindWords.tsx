import Image from "next/image";
import Reveal from "./Reveal";
import { kindWords, testimonial } from "@/lib/content";

export default function KindWords() {
  const row = [...kindWords, ...kindWords];
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-[1100px] px-5 text-center md:px-10">
        <Reveal>
          <Image src="/art/hydrangea.webp" alt="" width={998} height={1007} className="mx-auto h-auto w-24 opacity-90" />
          <p className="eyebrow mt-8 text-muted">Kind words</p>
          <blockquote className="mt-8">
            <p className="font-display text-[clamp(1.9rem,3.8vw,3.3rem)] font-light leading-[1.18]">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <cite className="label mt-8 block not-italic text-muted">
              {testimonial.name} · {testimonial.source}
            </cite>
          </blockquote>
        </Reveal>
      </div>

      <div className="marquee mt-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee-track flex w-max gap-5">
          {row.map((k, i) => (
            <li key={i} aria-hidden={i >= kindWords.length} className="w-[320px] shrink-0 rounded-[24px] border border-ink/10 bg-paper-2/70 p-6">
              <p className="font-display text-2xl italic leading-snug">&ldquo;{k.quote}&rdquo;</p>
              <p className="label mt-4 text-muted">{k.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
