import { useEffect, useState } from "react";
import ItemCard from "../../components/ItemCard/ItemCard"; // Asegúrate de importar el componente ItemCard

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setDataFilter(json);
        console.log(json);
      });
  }, []);

  const handleInput = (e) => {
    const valorFiltro = e.target.value;
    setFiltro(valorFiltro);
    console.log(valorFiltro);

    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(valorFiltro.toLowerCase())
    );

    setDataFilter(filteredData);
  };

  return (
    <main className="flex flex-col items-center">
      <h1 className="font-Montserrat text-6xl hover:bg-black hover:text-white mt-20">
        Products
      </h1>
      <div>
        <span>Filtrar por nombre : </span>
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Set a product"
          className="border border-black rounded-md w-64 h-8 shadow-lg text-center mt-20"
          onChange={handleInput}
        />
      </div>
      <div className="grid grid-cols-1 gap-20 my-20 md:grid md:grid-cols-2">
        {dataFilter.map((item) => (
          <div key={item.id}>
            <ItemCard data={item} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
