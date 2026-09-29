import type { Metadata } from "next";
import Inquire from "@/components/Inquire";

export const metadata: Metadata = {
  title: "Bridal Bouquet Preservation Inquiry | Mae Florals",
  description: "Ask Melissa about preserving your wedding bouquet in a pressed frame or a custom resin keepsake.",
};

export default function ContactPage() {
  return (
    <main>
      <Inquire />
    </main>
  );
}
