"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

function BrandLogo() {
  return (
    <span className="relative block h-11 w-[148px] overflow-hidden rounded-[9px] bg-black shadow-sm sm:w-[168px]">
      <Image
        src="/brand/mae-florals-logo.png"
        alt=""
        width={1075}
        height={1205}
        priority
        sizes="(min-width: 640px) 168px, 148px"
        className="absolute -top-[39px] left-0 h-auto w-full sm:-top-[45px]"
      />
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-paper/90 py-3 shadow-[0_1px_0_rgba(42,34,48,0.08)] backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 md:px-10">
          <Link href="/" aria-label="Mae Florals — home">
            <BrandLogo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="label link-underline text-ink-2 hover:text-ink">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn btn-ink hidden !py-3 sm:inline-flex">
              Begin a keepsake
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="grid size-12 place-items-center rounded-full border border-ink/25 transition hover:border-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="flex w-4 flex-col gap-[5px]">
                <span className="h-px w-full bg-ink" />
                <span className="h-px w-full bg-ink" />
                <span className="h-px w-full bg-ink" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
          <div className="fixed inset-0 z-[70] flex flex-col overflow-hidden bg-paper">
            <div className="flex items-center justify-between px-5 py-6">
              <BrandLogo />
              <button
                onClick={() => setOpen(false)}
                className="grid size-12 place-items-center rounded-full border border-ink/25"
                aria-label="Close menu"
              >
                <span className="relative block size-4">
                  <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-ink" />
                  <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-ink" />
                </span>
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
              {[...nav, { href: "/contact", label: "Begin a keepsake" }].map((n) => (
                <div key={`${n.href}-${n.label}`}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="font-display block text-[clamp(2.3rem,11vw,3.2rem)] font-light leading-tight">
                    {n.label}
                  </Link>
                </div>
              ))}
            </nav>
            <div className="relative px-6 pb-10">
              <a href={site.phoneHref} className="label text-ink-2">Call or text {site.phone}</a>
              <Image src="/art/garland.webp" alt="" width={1600} height={677} className="pointer-events-none mt-6 w-full opacity-90" />
            </div>
          </div>
      )}
    </>
  );
}
