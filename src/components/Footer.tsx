import Image from "next/image";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night pt-20 text-paper">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Image
          src="/brand/mae-florals-logo.png"
          alt="Mae Florals — lavender and white flowers with green leaves"
          width={1075}
          height={1205}
          sizes="280px"
          className="mx-auto h-auto w-60 rounded-[28px] md:w-72"
        />
        <Image src="/art/garland.webp" alt="" width={1600} height={677} className="mx-auto mt-2 h-auto w-full max-w-4xl opacity-90" />
        <p className="label mt-4 text-center text-paper/55">Floral art &amp; preservation · {site.town}</p>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-paper/15 py-12 md:grid-cols-4">
          <div>
            <p className="label text-paper/50">Call or text</p>
            <a href={site.phoneHref} className="font-display link-underline mt-2 inline-block text-2xl">{site.phone}</a>
          </div>
          <div>
            <p className="label text-paper/50">Serving</p>
            <p className="font-display mt-2 text-2xl leading-snug">Southern VT &amp; NH<br />Upper Valley · Sullivan County</p>
          </div>
          <div>
            <p className="label text-paper/50">Explore</p>
            <ul className="mt-2 space-y-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="link-underline text-paper/85">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-paper/50">Follow</p>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="font-display link-underline mt-2 inline-block text-2xl">Facebook ↗</a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-paper/10 py-8 font-sans text-xs tracking-wide text-paper/45 md:flex-row">
          <p>© {new Date().getFullYear()} Mae Florals. Preserve your flowers beautifully &amp; forever.</p>
          <p>Handmade in Claremont, New Hampshire</p>
        </div>
      </div>
    </footer>
  );
}
