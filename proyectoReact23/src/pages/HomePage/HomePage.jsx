import SpinnerFB from "../../components/Spinner/Spinner";
import ItemListContainer from "../../components/itemListContainer/itemListContainer";
import useFetch from "../../hooks/useFetch";
import { ModeContext } from "../../context/modeContext";
import { useContext } from "react";
import { db } from "../../firebase/firebaseConfig";

const HomePage = () => {
  const { gamesData, spinner } = useFetch(db);
  

  const {mode} = useContext(ModeContext)
  const titleNewGames = "FEATURED GAMES"
  const titleDiscountGames = "SUMMER SALES"



  

  return (
    <>
      <main
        className={`flex flex-col items-center justify-center px-20 mt-48 ${
          mode === "light" ? "bg-white border-t border-black" : "bg-gray-900"
        }`}
      >
        <h1
          className={`text-4xl font-Montserrat text-center my-10 md:text-5xl lg:text-6xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          {titleDiscountGames}
        </h1>
        {spinner === true ? (
          <div className="mt-10">
            {" "}
            <SpinnerFB />
          </div>
        ) : (
          <ItemListContainer section="ofertas" gamesData={gamesData} />
        )}

        <h2
          className={`text-4xl font-Montserrat text-center my-16 md:text-5xl lg:text-6xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          {titleNewGames}
        </h2>
        <div className="mb-32 ">
          {spinner === true ? (
            <div className="mt-10">
              {" "}
              <SpinnerFB />
            </div>
          ) : (
            <ItemListContainer section="destacados" gamesData={gamesData} />
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
