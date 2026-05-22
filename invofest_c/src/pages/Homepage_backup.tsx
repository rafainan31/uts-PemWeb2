import Header from "../components/Header";
import Button from "../components/Button";
import  Collapse from "../components/Collapse";
import SpeakerCard from "../components/SpeakerCard";
import CardProduct from "../components/CardProduct";
function App() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];
 const collapseItems = [
  {
    title: "Apa itu Invofest?",
    description: `Invofest (Informatics Vocational Festival) adalah festival tahunan
yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi
era digital. Dengan mengusung tema "Beyond Limits, Beyond Intelligence: Innovate for a
Smarter Tomorrow".`,
    author: "Jamal Apriadi | https://jamalapriadi.com",
  },
  {
    title: "Kapan dan di mana Invofest akan diselenggarakan?",
    description: `Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Jakarta
Convention Center (JCC), Jakarta, Indonesia.`,
  },
  {
    title: "Siapa saja yang dapat mengikuti Invofest?",
    description: `Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, profesional
muda, dan siapa saja yang tertarik dengan teknologi dan inovasi.`,
  },
];

const cardItems = [
  {
    title: "IT Seminar",
    description: `Seminar nasional ini membahas "Human-AI Integration: Merancang Arsitektur
Kolaboratif, Bukan Kompetitif".`,
  },
  {
    title: "IT Talkshow",
    description: `Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan".`,
  },
  {
    title: "IT Competition",
    description: `Kompetisi "From Creation to Innovation".`,
  },
  {
    title: "IT Workshop",
    description: `Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era".`,
  },
];
return (
  <>
    <Header />
    <div className="max-w-7xl mx-auto p-6">
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center "
      >
        <div className="w-2/3 flex flex-col gap-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt=""
            className="w-96"
          />
          <p>
            Invofest (Informatics Vocational Festival) adalah festival tahunan
            yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema
            "Beyond Limits, Beyond Intelligence: Innovate for a Smarter
            Tomorrow ".
          </p>
          <div className="flex gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt=""
          />
        </div>
      </section>
      <section id="speaker" className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              role={speaker.role}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </section>
      <section
        id="cards"
        className="py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-3"
      >
        {cardItems.map((item, index) => (
          <CardProduct key={index} className="w-full"
          foto=""
          name=""
          description=""
          >
  
            <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
            <p>{item.description}</p>
            <Button

            label="Info Selengkapnya"
            variant="primary"
            className="mt-4"
 />
          </CardProduct>
        ))}
      </section>
      <section id="collapse" className="py-24 flex flex-col gap-2 px-3">
        {collapseItems.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </div>
  </>
);
}
export default App;