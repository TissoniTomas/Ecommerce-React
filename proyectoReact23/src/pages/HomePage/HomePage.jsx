
import {useSelector} from "react-redux";
import SpinnerFB from "../../components/Spinner/Spinner";
import ItemListContainer from "../../components/itemListContainer/itemListContainer";
import useFetch from "../../hooks/useFetch";

const HomePage = () => {
  const { data, spinner } = useFetch("https://fakestoreapi.com/products");

  const mode = useSelector((state) => state.mode.mode);
  

  

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
          Men's & Woman's
        </h1>
        {spinner === true ? (
          <div className="mt-10">
            {" "}
            <SpinnerFB />
          </div>
        ) : (
          <ItemListContainer section="clothing" data={data} />
        )}

        <h2
          className={`text-4xl font-Montserrat text-center my-16 md:text-5xl lg:text-6xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Electronics
        </h2>
        <div className="mb-32 ">
          {spinner === true ? (
            <div className="mt-10">
              {" "}
              <SpinnerFB />
            </div>
          ) : (
            <ItemListContainer section="electronics" data={data} />
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
