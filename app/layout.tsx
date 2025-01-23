import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blicharski - Trener Personalny Wrocław | Profesjonalne Treningi",
  description:
    "Profesjonalne treningi personalne we Wrocławiu. Indywidualne podejście, układanie planów treningowych i dietetycznych. Treningi w plenerze i na siłowni.",
  keywords:
    "trener personalny Wrocław, treningi personalne, trening indywidualny, plan treningowy, dieta, fitness Wrocław, zdrowy styl życia, Blicharski",
  authors: [{ name: "Blicharski Trener Personalny" }],
  openGraph: {
    title: "Blicharski - Trener Personalny Wrocław | Profesjonalne Treningi",
    description:
      "Profesjonalne treningi personalne we Wrocławiu. Indywidualne podejście, układanie planów treningowych i dietetycznych. Treningi w plenerze i na siłowni.",
    url: "https://trenerpersonalny-blicharski.pl",
    siteName: "Blicharski - Trener Personalny",
    images: [{ url: "/og-image.jpg" }],
    locale: "pl_PL",
    type: "website",
  },
  verification: {
    google: "LEqZWDrXHCXnphOzzTZuvATu6jpPP5sb89e1EzJhAVE",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://trenerpersonalny-blicharski.pl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Blicharski - Trener Personalny Wrocław",
              url: "https://trenerpersonalny-blicharski.pl",
              image: "https://trenerpersonalny-blicharski.pl/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Wrocław",
                addressRegion: "dolnośląskie",
                addressCountry: "PL",
              },
              description:
                "Profesjonalne treningi personalne we Wrocławiu. Indywidualne podejście i plany treningowe.",
              telephone: "+48 790 397 协",
              priceRange: "$$",
              openingHours: "Mo-Su 06:00-22:00",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
