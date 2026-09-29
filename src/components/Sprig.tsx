"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { art, type ArtKey } from "@/lib/art";

/** A botanical plate that drifts against the scroll, like a petal settling. */
export default function Sprig({
  name,
  width,
  className = "",
  speed = 0.15,
  rotate = 0,
  sway = false,
  priority = false,
}: {
  name: ArtKey;
  width: number;
  className?: string;
  speed?: number;
  rotate?: number;
  sway?: boolean;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const a = art[name];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 260, speed * -260]);
  const r = useTransform(scrollYProgress, [0, 1], [rotate - speed * 40, rotate + speed * 40]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ y, rotate: r, width }}
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <div className={sway ? "sway" : undefined}>
        <Image src={a.src} alt="" width={a.w} height={a.h} sizes={`${width}px`} priority={priority} className="h-auto w-full" />
      </div>
    </motion.div>
  );
}
