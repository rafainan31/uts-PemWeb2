import Button from "../components/Button";

export default function Talkshow() {
    return (
        <div className="h-min-screen mx-auto">
           <section
          id='talkshow'
          className='py-10 flex gap-5  justify-between items-center'
        >
          <div className='w-2/3 flex flex-col gap-5
          '>
            <h1 className='text-5xl text-red-800 font-semibold'>IT Talkshow</h1>
            <p className='text-sm md:text base lg:text-[1.35rem]'>
              Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
            </p>
            <div className='flex gap-3'> 
              <Button label="Daftar IT Talkshow" variant="primary" />
            </div>
          </div>
          <div className='w-1/3'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
              alt=""
            />
          </div>
        </section>
        </div>
    )
}