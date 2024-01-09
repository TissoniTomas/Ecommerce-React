import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import SpinnerFB from "../../components/Spinner/Spinner";
import ItemCard from "../../components/ItemCard/ItemCard"; // Asegúrate de importar el componente ItemCard

const ProductsPage = () => {
  const { data, spinner } = useFetch("https://fakestoreapi.com/products");
  const [filtro, setFiltro] = useState("");
  const [dataFilt, setDataFilt] = useState(data);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(filtro.toLowerCase())
    );
    setDataFilt(filteredData);
  }, [data,filtro]);

  const handleInput = (e) => {
    const valorFiltro = e.target.value;
    setFiltro(valorFiltro);
  };

  const clearFilter = () => {
    setFiltro("");
  };

  return (
    <main className="flex flex-col items-center">
      <h1 className="font-Montserrat text-6xl hover:bg-black hover:text-white mt-20">
        Products
      </h1>
      <div className="">
        <label>Filtrar por nombre : </label>

        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Set a product"
          className="border border-black rounded-md w-40 h-8 shadow-lg text-center mt-20"
          onChange={handleInput}
          value={filtro}
        />
        <button className="w-20 bg-red-100 border border-gray-500 rounded-lg ml-10 hover:bg-sky-500" onClick={clearFilter} type="reset">
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
