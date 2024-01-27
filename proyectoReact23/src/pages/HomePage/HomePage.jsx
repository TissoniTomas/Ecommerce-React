import SpinnerFB from "../../components/Spinner/Spinner";
import ItemListContainer from "../../components/itemListContainer/itemListContainer";
import useFetch from "../../hooks/useFetch";
import { ModeContext } from "../../context/modeContext";
import { useContext } from "react";
import { db } from "../../firebase/firebaseConfig";

const HomePage = () => {
  const { gamesData, spinner } = useFetch(db);
  console.log(gamesData);

  const {mode, setMode} = useContext(ModeContext)



  

  return (
    <>
      <main
        className={`flex flex-col items-center justify-center px-20 ${
          mode === "light" ? "bg-white border-t border-black" : "bg-gray-900"
        }`}
      >
        <h1
          className={`text-4xl font-Montserrat text-center my-10 md:text-5xl lg:text-6xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Racing
        </h1>
        {spinner === true ? (
          <div className="mt-10">
            {" "}
            <SpinnerFB />
          </div>
        ) : (
          <ItemListContainer section="destacados" gamesData={gamesData} />
        )}

        <h2
          className={`text-4xl font-Montserrat text-center my-16 md:text-5xl lg:text-6xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          SUMMER SALES!
        </h2>
        <div className="mb-32 ">
          {spinner === true ? (
            <div className="mt-10">
              {" "}
              <SpinnerFB />
            </div>
          ) : (
            <ItemListContainer section="ofertas" gamesData={gamesData} />
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
/**LIGHT MODE
 * 
 * Titulos : gray-900
 * Textos: gray-600 
 * Bg Botones: cyan-700
 * Texto botones : white font-medium
 * Hover Iconos : bg-gray-100
 * Sections : bg-gray-50
   Iconos : gray-500
 * 
 * DARK MODE
 * 
 * BG: bg-gray-900
 * Titulos : white
 * Textos: gray-400
 * Bg Botones: cyan-700
 * Texto botones : white font-medium
 * Hover Iconos : bg-gray-700
 Iconos: gray-400
 * Sections : bg-gray-800
 */
