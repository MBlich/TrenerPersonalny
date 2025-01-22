import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Sesja trneningowa z trenerem Blicharskim"
        fill
        className="object-cover brightness-50"
        priority
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-center text-4xl md:text-5xl lg:text-6xl font-serif max-w-4xl px-6">
          Treningi personalne ze sportów walki Wrocław
        </h1>
      </div>
    </div>
  );
}
