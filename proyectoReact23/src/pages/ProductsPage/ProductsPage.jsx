import { useEffect, useState, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import SpinnerFB from "../../components/Spinner/Spinner";
import ItemCard from "../../components/ItemCard/ItemCard"; 
import { ModeContext } from "../../context/modeContext";

const ProductsPage = () => {
  const { data, spinner } = useFetch("https://fakestoreapi.com/products");
  const [filtro, setFiltro] = useState("");
  const [dataFilt, setDataFilt] = useState(data);
  const [focus, setFocus] = useState(false);

  const {mode} = useContext(ModeContext)

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(filtro.toLowerCase())
    );
    setDataFilt(filteredData);
  }, [data, filtro]);

  const handleInput = (e) => {
    const valorFiltro = e.target.value;
    setFiltro(valorFiltro);
    setFocus(true)
  };

  const clearFilter = () => {
    setFiltro("");
  };

  const handleFocus = () => {
    setFocus(!focus);
    console.log(focus);
  };

  return (
    <main className={`flex flex-col items-center ${mode === "light" ? "bg-white ": "bg-black"}`}>
      <h1 className="font-Montserrat text-6xl hover:bg-black hover:text-white mt-20 ">
        Products
      </h1>
      <div className="">
        <label className="font-Inter text-xl font-bold">
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
            focus ? "focus: border-b border-sky-500 !outline-none "  : "border border-sky-500"
          }`}
        />
        <button
          className="w-28 h-10 font-Inter font-extrabold rounded-lg ml-10 hover:bg-sky-500"
          onClick={clearFilter}
          type="reset"
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
