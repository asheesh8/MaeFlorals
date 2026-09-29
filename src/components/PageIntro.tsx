import Image from "next/image";
import type { ArtKey } from "@/lib/art";
import { art } from "@/lib/art";

export default function PageIntro({
  eyebrow,
  title,
  accent,
  body,
  artName = "cosmos",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  artName?: ArtKey;
}) {
  const plate = art[artName];

  return (
    <section className="relative overflow-hidden border-b border-ink/10 pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-lavender-soft/20 blur-[100px]" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-5 md:grid-cols-[1fr_220px] md:px-10 lg:grid-cols-[1fr_280px]">
        <div className="max-w-4xl">
          <p className="eyebrow text-muted">{eyebrow}</p>
          <h1 className="font-display mt-5 text-[clamp(3.2rem,7vw,6.8rem)] font-light leading-[0.9] tracking-[-0.025em]">
            {title} <span className="italic text-lavender">{accent}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl">{body}</p>
        </div>
        <Image
          src={plate.src}
          alt=""
          width={plate.w}
          height={plate.h}
          className="pointer-events-none mx-auto hidden h-auto max-h-64 w-auto md:block"
        />
      </div>
    </section>
  );
}
