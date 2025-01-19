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



import { Metadata } from 'next'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Offer from '@/components/offer'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Strona główna | Trener Marcin Blicharski',
  description: 'Profesjonalne treningi personalne z boksu, kickboxingu i kondycyjne we Wrocławiu. Skorzystaj z doświadczenia Mistrza Polski i medalisty Mistrzostw Świata.',
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Offer />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Marcin Blicharski",
            "jobTitle": "Trener personalny oraz instruktor Boksu",
            "description": "Wieloletni członek Kadry Narodowej Taekwon-do i Kickboxingu",
            "telephone": "+48796916466",
            "url": "https://www.example.com",
            "sameAs": [
              "https://www.facebook.com/example",
              "https://www.instagram.com/example"
            ]
          })
        }}
      />
    </main>
  )
}

