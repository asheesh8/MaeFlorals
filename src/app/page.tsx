import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Inquire from "@/components/Inquire";
import KindWords from "@/components/KindWords";
import Manifesto from "@/components/Manifesto";
import Markets from "@/components/Markets";
import Pets from "@/components/Pets";
import Process from "@/components/Process";
import Resin from "@/components/Resin";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Process />
        <Resin />
        <Pets />
        <Gallery />
        <About />
        <KindWords />
        <Markets />
        <Inquire />
      </main>
      <Footer />
    </>
  );
}
