import Image from "next/image";
import { Phone } from "lucide-react";

export default function Offer() {
  const trainingTypes = ["Boks", "Kickboxing", "Trening kondycyjny"];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">
              Oferta trenigowa
            </h2>

            <div className="space-y-4">
              <h3 className="text-2xl">
                Treningi indywiudalne lub w małych grupach:
              </h3>
              <ul className="space-y-2">
                {trainingTypes.map((type, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full" />
                    <span className="text-xl">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-2xl">Dla dzieci, młodzieży i dorosłych!</p>
              <a
                href="tel:+48796916466"
                className="inline-flex items-center space-x-2 text-xl hover:text-red-500 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>+48 796916466</span>
              </a>
            </div>
          </div>

          <div className="relative h-[400px] w-full">
            <Image
              src="/last.jpg"
              alt="Trening grupowy w ringu z trenerem Blicharskim"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
