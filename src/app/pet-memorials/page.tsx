import type { Metadata } from "next";
import Pets from "@/components/Pets";

export const metadata: Metadata = { title: "Pet Memorials | Mae Florals" };

export default function PetMemorialsPage() {
  return (
    <main>
      <Pets />
    </main>
  );
}
