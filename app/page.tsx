// import Header from "@/components/header";
// import Hero from "@/components/hero";
// import About from "@/components/about";
// import Offer from "@/components/offer";
// import Footer from "@/components/footer";

// export default function Home() {
//   return (
//     <main>
//       <Header />
//       <Hero />
//       <div id="o-mnie">
//         <About />
//       </div>
//       <div id="oferta">
//         <Offer />
//       </div>
//       <div id="kontakt">
//         <Footer />
//       </div>
//     </main>
//   );
// }



import Head from 'next/head';
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Offer from "@/components/offer";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Blicharski - Trener Personalny Wrocław</title>
        <meta name="google-site-verification" content="LEqZWDrXHCXnphOzzTZuvATu6jpPP5sb89e1EzJhAVE" />
        <meta name="description" content="Profesjonalne treningi personalne we Wrocławiu. Zaufaj trenerowi z doświadczeniem, który pomoże Ci osiągnąć Twoje cele fitness." />
        <meta name="keywords" content="trener personalny Wrocław, treningi personalne, fitness Wrocław, zdrowy styl życia, Blicharski" />
        <meta name="author" content="Blicharski" />
        <meta property="og:title" content="Blicharski - Trener Personalny Wrocław" />
        <meta property="og:description" content="Profesjonalne treningi personalne we Wrocławiu. Zaufaj trenerowi z doświadczeniem, który pomoże Ci osiągnąć Twoje cele fitness." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trenerpersonalny-blicharski.pl" />
        <meta property="og:image" content="https://www.trenerpersonalny-blicharski.pl/static/hero-image.jpg" />
        
        {/* JSON-LD dane strukturalne */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Blicharski - Trener Personalny",
            "url": "https://www.twojadomena.pl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Wrocław",
              "addressCountry": "PL"
            },
            "description": "Profesjonalne treningi personalne we Wrocławiu.",
            "image": "https://www.trenerpersonalny-blicharski.pl/static/hero-image.jpg",
            "telephone": "+48 123 456 789"
          })}
        </script>
        <meta name="google-site-verification" content="LEqZWDrXHCXnphOzzTZuvATu6jpPP5sb89e1EzJhAVE" />
      </Head>
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

