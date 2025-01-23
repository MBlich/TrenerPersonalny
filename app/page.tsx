import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Offer from "@/components/offer";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div id="o-mnie">
        <About />
      </div>
      <div id="oferta">
        <Offer />
      </div>
      <div id="kontakt">
        <Footer />
      </div>
    </main>
  );
}
