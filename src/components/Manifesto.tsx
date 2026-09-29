import Image from "next/image";
import Sprig from "./Sprig";

type Token = { word: string } | { img: string; alt: string };

const tokens: Token[] = [
  ..."Every bouquet carries a day —".split(" ").map((word) => ({ word })),
  { img: "/work/fresh-yellow-bridal.jpg", alt: "A yellow and white bridal bouquet" },
  ..."the vows, the goodbye, the small warm weight of a pet asleep on your lap.".split(" ").map((word) => ({ word })),
  { img: "/work/pet-cat-fur.jpg", alt: "A resin cat memorial held in a palm" },
  ..."Melissa keeps it pressed, poured and framed, so it can be".split(" ").map((word) => ({ word })),
  { img: "/work/resin-heart-anemone.jpg", alt: "A resin heart filled with flowers" },
  ..."held again and again.".split(" ").map((word) => ({ word })),
];

function Word({ t }: { t: Token }) {
  if ("img" in t) {
    return (
      <span className="relative mx-[0.12em] inline-block h-[0.78em] w-[1.5em] translate-y-[0.08em] overflow-hidden rounded-full align-baseline">
        <Image src={t.img} alt={t.alt} fill sizes="120px" className="object-cover" />
      </span>
    );
  }
  const italic = ["pressed,", "poured", "framed,", "held"].includes(t.word);
  return (
    <span className={italic ? "italic text-lavender" : undefined}>
      {t.word}{" "}
    </span>
  );
}

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="hairline mx-auto mb-14 max-w-[1400px] md:mb-20" />
      <Sprig name="aster" width={160} className="right-[4%] top-10 hidden opacity-80 md:block" rotate={16} speed={0.3} />
      <Sprig name="forgetmenot" width={130} className="bottom-4 left-[3%] hidden opacity-80 md:block" rotate={-14} speed={0.22} />
      <div className="mx-auto max-w-[1100px] px-5 md:px-10">
        <p className="label mb-10 text-center text-muted">What Mae Florals is for</p>
        <p className="font-display text-center text-[clamp(2rem,4.6vw,4.2rem)] font-light leading-[1.14] tracking-[-0.01em]">
          {tokens.map((t, i) => (
            <Word key={i} t={t} />
          ))}
        </p>
      </div>
    </section>
  );
}
