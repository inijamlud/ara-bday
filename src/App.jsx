import { motion } from "framer-motion";
import { useRef } from "react";
import "./App.css";
import endBg from "./assets/end-bg.jpg";
import fr1 from "./assets/fr (1).jpg";
import fr2 from "./assets/fr (2).jpg";
import fr3 from "./assets/fr (3).jpg";
import fr from "./assets/fr.jpg";
import bgImage from "./assets/lg.jpg";
import po from "./assets/po.jpg";
import pp from "./assets/pp.mp4";
import audioFile from "./assets/so7-best-moment.mp3";

function App() {
 const sectionRef = useRef(null);

 //  useEffect(() => {
 //   const scrollToTarget = () => {
 //    const targetPosition = sectionRef.current.offsetTop;
 //    let currentPosition = window.scrollY;
 //    const step = (targetPosition - currentPosition) / 7550;

 //    const smoothScroll = () => {
 //     if (Math.abs(currentPosition - targetPosition) > 1) {
 //      currentPosition += step;
 //      window.scrollTo(0, currentPosition);
 //      requestAnimationFrame(smoothScroll);
 //     } else {
 //      window.scrollTo(0, targetPosition);
 //     }
 //    };

 //    smoothScroll();
 //   };

 //   setTimeout(scrollToTarget, 3000);
 //  }, []);

 return (
  <div className="font-sans text-center md:text-left">
   {/* Navigation Bar */}

   <audio autoPlay loop hidden>
    <source src={audioFile} type="audio/mpeg" />
   </audio>

   <nav className="py-8 justify-center container m-auto px-10">
    <ul className="font-display flex justify-between items-center">
     <a href="/">
      <li className="font-bold">@ultah.ara</li>
     </a>
     <a href="https://instagram.com/inijamlud">
      <li className="py-2 pl-10 pr-4 border-slate-800 border-2 rounded-xl flex justify-end">
       mal.
      </li>
     </a>
    </ul>
   </nav>

   {/* Hero Section */}
   <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="h-auto w-auto justify-center container m-auto px-10"
   >
    <div className="h-auto flex flex-col justify-center items-center py-20">
     <video
      src={pp}
      width={300}
      autoPlay
      muted
      loop
      className="rounded-full"
     ></video>

     <h1 className="font-display text-5xl font-bold my-12">
      Happy Birthday, Ara!
     </h1>

     <p className="mb-2">
      selebrasi dikit taun ini supaya bisa lebih dar, der,
      dor dan makin ready menjadi dewasa🤝
     </p>

     <p className="italic text-xs text-gray-500">
      ( kayanya lebih mantep kalo kamu buka pake laptopp
      hihiiii )
     </p>

     <div className="m-8">
      <ul className="flex flex-col md:flex-row gap-2">
       <li className="pills bg-[#EFF4FD]">
        sipaling mentor🫡
       </li>
       <li className="pills bg-[#FBE6E6]">cwek pikmi 😋</li>
       <li className="pills bg-[#FFF5D8]">
        jamet lovely💖
       </li>
      </ul>
     </div>
    </div>
   </motion.div>

   <hr className="mx-auto w-[200px] md:w-[900px] border-t-2 border-gray-200 mb-24" />

   {/* Artist Section  */}
   <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="flex flex-col text-center items-center container m-auto px-10 my-12"
   >
    <p className="md:w-1/2">
     Selamat dateng di sudut kecil internet yang dibikin
     khusus buat kamu~ <br />
     Dari tak terhitungnya luas internet yang ada, layak
     untuk simpan kisah kamu yang tetap hidup, berkembang,
     jahit perjalanan, terutama with me{" "}
     <span className="italic">(assoyy)</span>. Hari ini
     sepenuhnya tentangmu— senyummu, cahayamu, dan betapa
     luar biasanya dirimu. ✨
    </p>

    <h2 className="font-display font-semibold italic text-2xl md:mx-32 my-56">
     Misi... Artis mo lewat...
    </h2>

    <div className="flex flex-col gap-16 md:flex-row my-20">
     <div className="img-frame rotate-5">
      <motion.img
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 1, delay: 0.5 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       src={fr1}
       alt=""
       width={360}
       className=""
      />
     </div>
     <div className="img-frame">
      <motion.img
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 1, delay: 0.5 }}
       viewport={{ once: true }}
       src={fr2}
       alt=""
       width={360}
       className=""
      />
     </div>
     <div className="img-frame -rotate-5">
      <motion.img
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 1, delay: 0.5 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       src={fr}
       alt=""
       width={360}
       className=""
      />
     </div>
    </div>
   </motion.div>

   {/* Banner */}
   <div
    className="sm:h-[800px] h-[900px] w-full bg-cover bg-[position:-740px_center] lg:bg-center mt-60 mb-20 relative flex items-end justify-start"
    style={{ backgroundImage: `url(${bgImage})` }}
   >
    <div className="absolute inset-0 bg-slate-800/30 z-0"></div>

    <div className="container mx-auto px-10 text-white relative z-10 sm:mb-20 mb-10">
     <h2 className="font-display sm:text-4xl font-bold text-2xl">
      Lagipula, hidup akan berakhir, kan?
     </h2>
     <p className="w-full max-w-6xl sm:text-lg text-sm mt-6">
      Seperti kata Hindia, impianku halnya{" "}
      <i>
       "Smoga hidup kita trus begini-gini saja, Walau sungai
       meluap dan kurs tak masuk logika. Smoga kita
       mencintai apa adanya, Walau katanya skarang ku bisa
       masuk penjara".
      </i>{" "}
      Atau seperti kata sheila on 7,{" "}
      <i>
       "Segenap cinta yang kau berikan, Tak akan hilang
       ditelan zaman. Kau yang terbaik, Memori baik",
      </i>{" "}
      se-bersyukurnya aku kenal sama kamu, jalani hari
      dengan ditemani manusia baru, belajar banyak hal, dan
      kamu akan kuusahakan selalu untuk jadi memori
      terbaikku. Kehadiran kamu, jadi warna baru di hidup
      aku. Mari menikmati hidup lebih lama, tetap bersama
      dan saling membersamai.
     </p>
    </div>
   </div>

   {/* Wishes */}
   <div className="text-right custom-container pt-40">
    {/* Flex Container */}
    <div className="flex flex-col md:flex-row gap-20 items-start justify-end">
     <h2 className="sm:text-lg text-xl max-w-xl tracking-wide leading-normal ml-auto">
      Semoga hidup kamu di tahun yang baru ini bisa lebih
      baik dari yang sebelumnya, bisa tercapai tujuan-tujuan
      yang kamu impikan. Doaku selalu sama, sehat selalu dan
      berkah selalu. Semoga selalu ada hal baik yang dateng
      ke kamu setiap saat.
     </h2>
     {/* Card 1 */}
     <div className="max-w-sm text-left">
      <img
       src={fr3}
       className="rounded-lg shadow-lg mb-14"
      />
      <h3 className="font-display text-xl font-semibold mb-2">
       Berkah rezeki
      </h3>
      <p className="text-gray-600">
       Semoga hidup kamu di fase yang baru ini dipenuhi
       dengan rezeki yang melimpah ya, banyak lagi berkah.
       Bisa bantu menaikkan derajat orangtua, keluarga dan
       kamu sendiri. Cangkul terus kolam ikannyaa!!
      </p>
     </div>

     {/* Card 2 */}
     <div className="max-w-sm text-left">
      <img
       src={po}
       className="mx-auto rounded-lg shadow-lg mb-14"
      />
      <h3 className="font-display text-xl mb-2 font-semibold">
       Sehat walafiat
      </h3>
      <p className="text-gray-600">
       Satu lagi yang nggak kalah penting, sehat lahir lagi
       batin. Semoga tidak lagi sering mimisan yaa, atur
       lagi aktivitasnya ya bunikk.. sehat nomor utama biar
       kesana kesini bisa terus gas terooos...
      </p>
     </div>
    </div>
   </div>

   {/* Black section */}
   <div
    ref={sectionRef}
    className="font-display bg-gray-950 rounded-3xl text-gray-50 text-lg sm:text-2xl md:text-3xl flex flex-col items-center mt-80 mx-auto p-20 sm:p-80 md:p-80 lg:p-80 w-full relative z-10 top-10"
   >
    <div className="text-center flex flex-col space-y-96 sm:space-y-72 md:-space-y-80 lg:space-y-96 py-62 max-w-xl">
     <h1 className="mt-12">
      Ara sayangg, mungkin sedikitnya... semoga ini bikin
      kamu sedikit bahagia
     </h1>
     <p>~💐~</p>
     <h1 className="mt-60">
      Perlu kamu inget, kalo kamu layak buat dicintai
      sebegitunya, sebagaimana kamu melakukan itu padaku..
     </h1>
     <p>~💐~</p>
     <h1 className="mt-60">
      Kamu juga sangat berhak bahagiaaahahahahahahahha
     </h1>
     <p>~💐~</p>
     <h1 className="mt-60">
      ga banyak yg bisa aku kasih untuk kamu, the cutest
      person I've ever met ʚ♡ɞ
     </h1>
     <p>~💐~</p>
     <h1 className="mt-60">
      sekarang tugasku hanya mendoakan kamu dengan sepenuh
      hati
     </h1>
     <p>~💐~</p>
     <h1 className="mt-60">
      coba kamu berdoa buat diri sendiri.. Pejamkan matamu,
      ya..
     </h1>
     <p>~💐~</p>
     <h1 className="mt-60">
      Aamiin yarobbal alaminnn... Semoga doa nya terkabul,
      dikabulkan secepetnya sama Allah.
     </h1>
     <p>~💐~</p>
     <h1 className="mt-60">
      karena dikejar deadline,
      <br /> terakhir, ubur ubur ikan lelee~
     </h1>
     <p>~💐~</p>
     <h1 className="break-words">
      loveeeeeeeeeeeeeeeeeeee youuuuuuuuuuuuuuuuuuuuu
      sooooooooooooooooooooooooo muchhhhhhhhhhhhhhhhhhhh lee
      <br />
      😍😍😍❤️❤️❤️❤️❤️😘😘😘
     </h1>
    </div>
   </div>

   <div
    className="bg-slate-900 items-center font-display font-bold sm:text-5xl text-4xl flex flex-col justify-center h-240 text-center sm:bg-cover bg-contain relative z-0 bg-[position:center] lg:bg-center"
    style={{ backgroundImage: `url(${endBg})` }}
   >
    <div className="absolute inset-0 bg-slate-800/30 z-0"></div>
    <h1 className="mt-20 text-white">
     Happy 23th birthday, Ara Sayang!
    </h1>

    <p className="text-sm mt-28 text-slate-100">
     love you, ra❤️
    </p>
   </div>
  </div>
 );
}

export default App;
