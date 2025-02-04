import "./App.css";
import my from "./assets/react.svg";

function App() {
 return (
  <div className="font-sans container m-auto px-10">
   {/* Navigation Bar */}
   <nav className="py-8 justify-center">
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
   <div className="bg-teal-700 h-auto w-auto justify-center">
    <div className="h-auto flex justify-center items-center py-20">
     <img src={my} width={200} height={200} alt="" />
    </div>
   </div>
  </div>
 );
}

export default App;
