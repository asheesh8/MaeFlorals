import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Process from "@/components/Process";
import Resin from "@/components/Resin";
import Services from "@/components/Services";

export const metadata: Metadata = { title: "Offerings | Mae Florals" };

export default function OfferingsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="What Melissa offers"
        title="Flowers become"
        accent="heirlooms."
        body="Explore wedding bouquet preservation, sympathy keepsakes, pet memorials, fresh arrangements and smaller pressed-flower pieces."
        artName="press"
      />
      <Services />
      <Process />
      <Resin />
    </main>
  );
}
