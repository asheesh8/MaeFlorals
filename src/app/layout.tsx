import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, EB_Garamond, Jost } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maeflorals.com"),
  title: "Mae Florals — Floral Art & Preservation · Claremont, NH",
  description:
    "Wedding bouquet preservation, sympathy flower keepsakes, pet memorials in resin and fresh arrangements by Melissa of Mae Florals — Claremont, NH, serving Southern Vermont, New Hampshire and the Upper Valley.",
  openGraph: {
    title: "Mae Florals — Floral Art & Preservation",
    description:
      "Preserve your wedding flowers beautifully & forever. Pressed frames, resin keepsakes and pet memorials, handmade in Claremont, NH.",
    images: ["/art/bouquet.webp"],
    type: "website",
  },
  icons: { icon: "/art/cosmos.webp" },
};

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Florist",
  name: "Mae Florals",
  description: "Floral art & preservation — wedding flowers, sympathy flowers and pet memorials in resin.",
  telephone: site.phoneIntl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Claremont",
    addressRegion: "NH",
    addressCountry: "US",
  },
  areaServed: ["Southern Vermont", "New Hampshire", "Upper Valley", "Sullivan County"],
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${garamond.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
