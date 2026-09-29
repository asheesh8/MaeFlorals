import Image from "next/image";
import Link from "next/link";
import { gallery, services, testimonial } from "@/lib/content";

const paths = [
  { href: "/offerings", title: "See what Melissa offers", body: "Wedding bouquets, sympathy flowers and keepsakes, pressed or set in resin.", image: services[0].image },
  { href: "/pet-memorials", title: "Remember a pet", body: "Small resin memorials made with your pet’s fur or ashes, from $20.", image: services[2].image },
  { href: "/about", title: "Meet Melissa", body: "The maker behind every piece, working by hand in Claremont, New Hampshire.", image: "/work/melissa-snow-arch.jpg" },
];

export default function HomeOverview() {
  return (
    <>
      <section className="bg-paper-2/60 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-muted">Find your way</p>
            <h2 className="font-display mt-5 text-[clamp(2.7rem,5vw,4.5rem)] font-light leading-none">
              Made for what you want to <span className="italic text-lavender">hold onto.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {paths.map((path) => (
              <Link key={path.href} href={path.href} className="group rounded-[24px] border border-ink/10 bg-paper p-4 shadow-[0_24px_60px_-48px_rgba(42,34,48,0.5)]">
                <div className="photo-frame">
                  <Image src={path.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="p-3 pb-2 pt-5">
                  <h3 className="font-display text-3xl leading-none">{path.title}</h3>
                  <p className="mt-3 text-base text-ink-2">{path.body}</p>
                  <span className="label mt-5 inline-block text-lavender">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-muted">A small look</p>
              <h2 className="font-display mt-4 text-[clamp(2.7rem,5vw,4.5rem)] font-light leading-none">Recently <span className="italic text-lavender">kept.</span></h2>
            </div>
            <Link href="/gallery" className="btn btn-ghost self-start">View all 36 pieces</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
            {gallery.slice(0, 6).map((item) => (
              <Link key={item.src} href="/gallery" className="photo-frame group">
                <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 17vw, (min-width: 768px) 33vw, 50vw" className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.025]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-deep py-20 text-paper md:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-5 md:grid-cols-[1fr_auto] md:items-center md:px-10">
          <blockquote>
            <p className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.12]">“{testimonial.quote}”</p>
            <cite className="label mt-6 block not-italic text-paper/60">{testimonial.name} · {testimonial.source}</cite>
          </blockquote>
          <Link href="/contact" className="btn btn-paper justify-self-start">Begin a keepsake →</Link>
        </div>
      </section>
    </>
  );
}
