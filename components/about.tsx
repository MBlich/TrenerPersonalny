import Image from "next/image";

export default function About() {
  const achievements = [
    "Wielokrotny Mistrz Polski",
    "Wicemistrz Świata w Taekwon-do",
    "Brązowy medalista Mistrzostw Świata w Kickboxingu",
    "Wicemistrz Pucharu Świata w Kickboxingu",
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif">
              Marcin Blicharski
            </h2>
            <div className="space-y-4">
              <p className="text-xl">Trener personalny oraz instruktor Boksu</p>
              <p className="text-lg text-gray-300">
                Wieloletni członek Kadry Narodowej Taekwon-do i Kickboxingu
              </p>
              <ul className="space-y-2 list-none">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-[600px] w-full">
            <Image
              src="/team.png"
              alt="Trener Marcin Blicharski"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
