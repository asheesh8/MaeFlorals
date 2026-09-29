"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { occasions, site } from "@/lib/content";

export default function Inquire() {
  const [occasion, setOccasion] = useState(occasions[0]);
  const [sent, setSent] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      `Hi Melissa! I found Mae Florals online.`,
      `Name: ${f.get("name")}`,
      `Reach me at: ${f.get("contact")}`,
      `I'm interested in: ${occasion}`,
      f.get("date") ? `Date: ${f.get("date")}` : "",
      f.get("message") ? `\n${f.get("message")}` : "",
    ].filter(Boolean);
    setSent(lines.join("\n"));
  }

  const input =
    "w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-muted/70 focus:border-lavender focus:outline-none focus:ring-0 transition-colors";

  return (
    <section id="inquire" className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute -left-40 top-20 h-[60vh] w-[60vh] rounded-full bg-lavender-soft/25 blur-[120px]" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-muted">Begin a keepsake</p>
          <h2 className="font-display mt-6 text-[clamp(2.8rem,5.4vw,5rem)] font-light leading-[0.98] tracking-[-0.015em]">
            Tell Melissa about <span className="italic text-lavender">your flowers.</span>
          </h2>
          <p className="mt-6 max-w-md text-ink-2">
            Planning a wedding, saying goodbye, or holding on to a pet? Reach out as early as you can — flowers keep their
            colour best when they arrive fresh.
          </p>

          <dl className="mt-12 space-y-7">
            <div>
              <dt className="label text-muted">Call or text</dt>
              <dd className="font-display mt-1 text-4xl">
                <a href={site.phoneHref} className="link-underline">{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="label text-muted">Message</dt>
              <dd className="font-display mt-1 text-2xl">
                <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="link-underline">Mae Florals on Facebook ↗</a>
              </dd>
            </div>
            <div>
              <dt className="label text-muted">Studio</dt>
              <dd className="font-display mt-1 text-2xl">{site.town} · {site.serviceArea}</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-7">
          <Image src="/art/wreath.webp" alt="" width={929} height={1023} className="pointer-events-none absolute -right-10 -top-16 hidden w-44 rotate-12 opacity-80 md:block" />
          <div className="relative rounded-[32px] border border-ink/10 bg-paper-2/80 p-6 shadow-[0_40px_80px_-50px_rgba(42,34,48,0.4)] backdrop-blur-sm md:p-12">
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <fieldset>
                    <legend className="label text-muted">What are we keeping?</legend>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {occasions.map((o) => (
                        <button
                          type="button"
                          key={o}
                          onClick={() => setOccasion(o)}
                          aria-pressed={occasion === o}
                          className={`rounded-full border px-4 py-2 font-sans text-[0.8rem] tracking-wide transition-all duration-500 ${
                            occasion === o ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink-2 hover:border-ink/50"
                          }`}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <label className="block">
                      <span className="label text-muted">Your name</span>
                      <input name="name" required autoComplete="name" className={input} placeholder="First & last" />
                    </label>
                    <label className="block">
                      <span className="label text-muted">Phone or email</span>
                      <input name="contact" required className={input} placeholder="How should she reach you?" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="label text-muted">Wedding, service or pickup date (if any)</span>
                    <input name="date" type="date" className={input} />
                  </label>
                  <label className="block">
                    <span className="label text-muted">Tell her a little more</span>
                    <textarea
                      name="message"
                      rows={4}
                      className={`${input} resize-none`}
                      placeholder="The flowers, the piece you're imagining, your pet's name…"
                    />
                  </label>
                  <button type="submit" className="btn btn-ink">
                    Write my message <span aria-hidden>→</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div key="sent" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <h3 className="font-display text-4xl">
                    Your note is ready <span className="italic text-lavender">to send.</span>
                  </h3>
                  <pre className="whitespace-pre-wrap rounded-2xl bg-paper p-5 font-serif text-base text-ink-2">{sent}</pre>
                  <div className="flex flex-wrap gap-3">
                    <a href={`${site.smsHref}?&body=${encodeURIComponent(sent)}`} className="btn btn-ink">
                      Text it to Melissa
                    </a>
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={async () => {
                        await navigator.clipboard.writeText(sent);
                        setCopied(true);
                      }}
                    >
                      {copied ? "Copied ✓" : "Copy message"}
                    </button>
                    <a href={site.messenger} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                      Send on Messenger ↗
                    </a>
                  </div>
                  <button type="button" onClick={() => (setSent(null), setCopied(false))} className="label link-underline text-muted">
                    ← Edit my message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
