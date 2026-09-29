import Image from "next/image";
import { art, type ArtKey } from "@/lib/art";

/** A static botanical plate used as page decoration. */
export default function Sprig({
  name,
  width,
  className = "",
  rotate = 0,
  priority = false,
}: {
  name: ArtKey;
  width: number;
  className?: string;
  speed?: number;
  rotate?: number;
  priority?: boolean;
}) {
  const a = art[name];

  return (
    <div
      aria-hidden
      style={{ transform: `rotate(${rotate}deg)`, width }}
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <div>
        <Image src={a.src} alt="" width={a.w} height={a.h} sizes={`${width}px`} priority={priority} className="h-auto w-full" />
      </div>
    </div>
  );
}
