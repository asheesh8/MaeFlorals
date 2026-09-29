import type { Metadata } from "next";
import About from "@/components/About";
import KindWords from "@/components/KindWords";
import Markets from "@/components/Markets";

export const metadata: Metadata = { title: "About Melissa | Mae Florals" };

export default function AboutPage() {
  return (
    <main>
      <About />
      <KindWords />
      <Markets />
    </main>
  );
}
