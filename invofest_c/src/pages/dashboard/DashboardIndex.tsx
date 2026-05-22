import Button from "../../components/Button";
import {
  CalendarDays,
  Users,
  Trophy,
  Sparkles,
} from "lucide-react";

export default function DashboardIndex() {
  const stats = [
    {
      title: "Total Event",
      value: "25+",
      icon: <CalendarDays size={24} />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Peserta",
      value: "500+",
      icon: <Users size={24} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Kompetisi",
      value: "10+",
      icon: <Trophy size={24} />,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-white via-red-50 to-pink-100 rounded-[40px] shadow-xl p-8 md:p-14 flex flex-col-reverse md:flex-row items-center gap-10"
      >
        {/* BACKGROUND BLUR */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-300 opacity-20 blur-3xl rounded-full"></div>

        {/* LEFT */}
        <div className="md:w-1/2 flex flex-col gap-6 z-10">
          <div className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full w-fit">
            <Sparkles size={18} />
            <p className="text-sm font-semibold">
              Informatics Vocational Festival
            </p>
          </div>

          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            className="w-72 md:w-[430px] drop-shadow-lg"
          />

          <p className="text-gray-600 leading-relaxed text-lg">
            Invofest adalah festival tahunan yang
            bertujuan untuk menginspirasi dan
            memberdayakan generasi muda Indonesia
            dalam menghadapi era digital dengan
            inovasi dan teknologi modern.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button
              label="Info Selengkapnya"
              variant="primary"
              className="px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
            />

            <Button
              label="Hubungi Panitia"
              variant="outline"
              className="px-6 py-3 rounded-2xl hover:scale-105 transition"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <div className="bg-white/40 backdrop-blur-lg rounded-[40px] p-6 shadow-2xl">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              className="w-72 md:w-[400px] hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${item.color} rounded-3xl p-6 text-white shadow-xl hover:scale-105 transition duration-300`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div className="bg-white/20 p-4 rounded-2xl">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="bg-white rounded-[35px] shadow-lg p-8 md:p-10 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Tentang Invofest 🚀
        </h2>

        <p className="text-gray-600 leading-relaxed text-lg">
          Invofest hadir sebagai wadah kreativitas,
          inovasi, dan kolaborasi mahasiswa vokasi
          informatika untuk menciptakan solusi digital
          yang berdampak bagi masa depan Indonesia.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <div className="bg-red-100 text-red-600 px-5 py-3 rounded-2xl font-semibold">
            Technology
          </div>

          <div className="bg-blue-100 text-blue-600 px-5 py-3 rounded-2xl font-semibold">
            Innovation
          </div>

          <div className="bg-green-100 text-green-600 px-5 py-3 rounded-2xl font-semibold">
            Competition
          </div>

          <div className="bg-purple-100 text-purple-600 px-5 py-3 rounded-2xl font-semibold">
            Collaboration
          </div>
        </div>
      </section>
    </div>
  );
}