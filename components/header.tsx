"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="absolute w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-medium">
            Trener Marcin Blicharski
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("oferta")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Oferta
            </button>
            <button
              onClick={() => scrollToSection("o-mnie")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              O mnie
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Kontakt
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/90 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("oferta")}
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                Oferta
              </button>
              <button
                onClick={() => scrollToSection("o-mnie")}
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                O mnie
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
