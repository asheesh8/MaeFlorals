import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = { title: "Gallery | Mae Florals" };

export default function GalleryPage() {
  return (
    <main>
      <Gallery />
    </main>
  );
}
