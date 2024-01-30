import { useEffect, useState, useContext } from "react";
import { ModeContext } from "../../context/modeContext";
import useFetch from "../../hooks/useFetch";
import SpinnerFB from "../../components/Spinner/Spinner";
import ItemCard from "../../components/ItemCard/ItemCard";
import { db } from "../../firebase/firebaseConfig";



const ProductsPage = () => {

  const {mode, setMode} = useContext(ModeContext)

  const {gamesData, spinner} = useFetch(db)
  const [filtro, setFiltro] = useState("");
  const [dataFilt, setDataFilt] = useState(gamesData);
  const [focus, setFocus] = useState(false);

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
    setFocus(true);
  };

  const clearFilter = () => {
    setFiltro("");
  };

  const handleFocus = () => {
    setFocus(!focus);
    console.log(focus);
  };

  return (
    <main
      className={`flex flex-col items-center ${
        mode === "light" ? "bg-white " : "bg-gray-900"
      }`}
    >
      <h1
        className={`font-Montserrat text-6xl mt-20 ${
          mode === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        Products
      </h1>
      <div className="flex items-center justify-evenly w-full mt-20">
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
          onMouseOver={handleFocus}
          onMouseLeave={handleFocus}
          value={filtro}
          className={`${
            !focus
              ? "focus: border-b border-sky-500 outline-none"
              : "border-2 border-sky-500"
          } ${
            mode === "light"
              ? "bg-white text-gray-900"
              : "bg-gray-900 text-white"
          } text-2xl w-96`}
        />
        <button
          type="reset"
          onClick={clearFilter}
          className="bg-cyan-700 text-white w-32 my-6 h-10 rounded-xl font-Inter font-medium text-2xl "
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
