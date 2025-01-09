import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Kontakt</h3>
            <div className="space-y-2">
              <a 
                href="tel:+48796916466"
                className="flex items-center space-x-2 hover:text-red-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+48 796 916 466</span>
              </a>
              <a 
                href="mailto:kontakt@example.com"
                className="flex items-center space-x-2 hover:text-red-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>kontakt@example.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nawigacja</h3>
            <div className="space-y-2">
              <Link href="/oferta" className="block hover:text-red-500 transition-colors">
                Oferta
              </Link>
              <Link href="/o-mnie" className="block hover:text-red-500 transition-colors">
                O mnie
              </Link>
              <Link href="/kontakt" className="block hover:text-red-500 transition-colors">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Trener Marcin Blicharski. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

