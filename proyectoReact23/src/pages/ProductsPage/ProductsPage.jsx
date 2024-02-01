import { useEffect, useState, useContext } from "react";
import { ModeContext } from "../../context/modeContext";
import useFetch from "../../hooks/useFetch";
import SpinnerFB from "../../components/Spinner/Spinner";
import ItemCard from "../../components/ItemCard/ItemCard";
import { db } from "../../firebase/firebaseConfig";



const ProductsPage = () => {

  const {mode} = useContext(ModeContext)

  const {gamesData, spinner} = useFetch(db)
  const [filtro, setFiltro] = useState("");
  const [dataFilt, setDataFilt] = useState(gamesData);
  

  useEffect(() => {
    const filteredData = gamesData.filter((item) =>
      item.name.toLowerCase().includes(filtro.toLowerCase())
    );
    setDataFilt(filteredData);
  }, [gamesData, filtro]);

  const handleInput = (e) => {
    const valorFiltro = e.target.value;
    console.log(valorFiltro);
    setFiltro(valorFiltro);
   
  };

  const clearFilter = () => {
    setFiltro("");
  };


  return (
    <main
      className={`flex flex-col items-center lg:mt-48  ${
        mode === "light" ? "bg-white " : "bg-gray-900"
      }`}
    >
      <h1
        className={`font-Montserrat text-4xl  lg:text-6xl my-10 ${
          mode === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        PRODUCTS
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:justify-evenly lg:w-[50%] mt-20">
        <label
          className={`font-Inter text-2xl font-bold ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Filtrar por nombre :{" "}
        </label>

        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Set a product"
          onChange={handleInput}
          className={`${
            mode === "light"
              ? "bg-white text-gray-900"
              : "bg-gray-900 text-white"
          } text-center mt-8 text-2xl w-96 border border-sky-500 rounded-xl `}
        />
        <button
          type="reset"
          onClick={clearFilter}
          className="bg-cyan-700 text-white w-32 my-10 h-10 rounded-xl font-Inter font-medium text-2xl "
        >
          Clear
        </button>
      </div>
      {spinner ? (
        <div className="flex items-center my-20">
          <SpinnerFB />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 my-20 md:grid md:grid-cols-2 lg:grid-cols-3 animate-fade-down animate-duration-[3000ms] animate-delay-1000">
          {dataFilt.map((item) => (
            <div key={item.id}>
              <ItemCard data={item} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ProductsPage;
