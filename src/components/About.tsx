import Image from "next/image";
import Reveal from "./Reveal";
import Sprig from "./Sprig";
import { site } from "@/lib/content";

export default function About() {
  return (
    <section id="melissa" className="relative overflow-hidden bg-paper-2/60 py-24 md:py-32">
      <Sprig name="cosmos" width={130} className="right-[3%] top-16 hidden opacity-90 lg:block" rotate={14} speed={0.3} />
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-5 md:px-10 lg:grid-cols-12">
        <div className="relative mx-auto h-[520px] w-full max-w-[520px] md:h-[620px] lg:col-span-6">
          <div className="arch absolute left-0 top-0 h-[78%] w-[70%] bg-paper-3 shadow-[0_40px_80px_-40px_rgba(42,34,48,0.45)]">
            <Image
              src="/work/melissa-flyer.jpg"
              alt="Melissa of Mae Florals smiling in the snow, holding a bridal bouquet and two resin pyramids"
              fill
              sizes="(min-width: 1024px) 380px, 70vw"
              className="object-cover object-[94%_35%]"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[46%] w-[48%] overflow-hidden rounded-[24px] border-[6px] border-paper bg-paper-3 shadow-[0_30px_60px_-30px_rgba(42,34,48,0.5)]">
            <Image src="/work/melissa-snow-arch.jpg" alt="Melissa holding a resin arch of preserved flowers" fill sizes="260px" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 left-6 w-28 md:w-32">
            <Image src="/art/pansy.webp" alt="" width={960} height={998} className="h-auto w-full" />
          </div>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-muted">Meet the maker</p>
            <h2 className="font-display mt-6 text-[clamp(2.8rem,5.4vw,5rem)] font-light leading-[0.98] tracking-[-0.015em]">
              Hi, I&rsquo;m <span className="italic text-lavender">Melissa.</span>
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-ink-2">
              <p>
                Mae Florals is my small studio in {site.town}. I press, dry and pour flowers by hand — mostly for people
                who&rsquo;ve just lived through one of the biggest days of their lives, happy or hard.
              </p>
              <p>
                Wedding bouquets, flowers from a funeral, a pet&rsquo;s fur, a photo tucked in among the petals — if it
                matters to you, I&rsquo;ll do my best to keep it forever. You&rsquo;ll also find me with a table full of
                earrings and heart dishes at craft fairs around Vermont and New Hampshire.
              </p>
            </div>
            <p className="font-display mt-8 text-4xl italic text-ink/80">— Mel</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-ink/15 pt-8">
              <div>
                <p className="label text-muted">Studio</p>
                <p className="font-display mt-2 text-2xl">{site.town}</p>
              </div>
              <div>
                <p className="label text-muted">Serving</p>
                <p className="font-display mt-2 text-2xl leading-tight">Southern VT &amp; NH, Upper Valley, Sullivan County</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
